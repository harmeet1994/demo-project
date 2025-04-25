<?php

namespace App\Http\Controllers;

use App\Models\CourseInquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
  public function initiatePayment(Request $request)
  {
    // Validate request
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|max:255',
      'phone' => 'required|string|max:20',
      'course_type' => 'required|string',
    ]);

    // Store inquiry data in database if needed
    // You may want to create a model and migration for this


    $inquiry = CourseInquiry::create($validated);

    return response()->json([
      'success' => true,
      'message' => 'Inquiry submitted successfully',
      'data' => $inquiry
    ], 201);

    // PayU Money Configuration
    $merchantKey = env('PAYU_MERCHANT_KEY');

    $salt = env('PAYU_SALT');
    $payuBaseUrl = env('PAYU_BASE_URL', 'https://secure.payu.in');

    // Generate unique transaction ID
    $txnId = 'TXN' . time() . rand(10000, 99999);

    // Set amount - for language course, it's fixed at 7,999
    $amount = '7999';

    // Prepare PayU parameters
    $params = [
      'key' => $merchantKey,
      'txnid' => $txnId,
      'amount' => $amount,
      'productinfo' => 'Language Course Fee',
      'firstname' => $validated['name'],
      'email' => $validated['email'],
      'phone' => $validated['phone'],
      'surl' => route('payment.success'),
      'furl' => route('payment.failure'),
      'service_provider' => 'payu_paisa',
    ];

    // Calculate hash
    $hashString = $merchantKey . '|' . $txnId . '|' . $amount . '|' . 'Language Course Fee' . '|' .
      $validated['name'] . '|' . $validated['email'] . '|||||||||||' . $salt;
    $hash = strtolower(hash('sha512', $hashString));

    // Log payment attempt
    Log::info('Payment initiated', ['txnId' => $txnId, 'email' => $validated['email']]);

    // Return payment data as JSON
    return response()->json([
      'payuBaseUrl' => $payuBaseUrl,
      'params' => array_merge($params, ['hash' => $hash])
    ]);
  }

  public function paymentSuccess(Request $request)
  {
    // Handle successful payment
    Log::info('Payment success', $request->all());

    // You can update your database records here

    // Redirect to a thank you page
    return redirect()->route('thankyou');
  }

  public function paymentFailure(Request $request)
  {
    // Handle failed payment
    Log::info('Payment failure', $request->all());

    // Redirect to a payment failed page
    return redirect()->route('payment.failed');
  }
}
