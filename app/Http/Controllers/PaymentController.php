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

    // return response()->json([
    //   'success' => true,
    //   'message' => 'Inquiry submitted successfully',
    //   'data' => $inquiry
    // ], 201);

    // PayU Money Configuration
    $merchantKey = config('app.payu_merchant_key');

    $salt = config('app.payu_salt');

    $payuBaseUrl = config('app.payu_base_url');

    // Generate unique transaction ID
    $txnId = 'TXN' . time() . rand(10000, 99999);

    // Set amount - for language course, it's fixed at 7,999
    $amount = '21';

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
      'udf1' => $inquiry->id
    ];

    // Calculate hash
    $hashString = $merchantKey . '|' . $txnId . '|' . $amount . '|' . 'Language Course Fee' . '|' .
      $validated['name'] . '|' . $validated['email'] . '|' . $inquiry->id . '||||||||||' . $salt;
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
    $inquiry = CourseInquiry::find($request->udf1);
    $inquiry->payment_info = json_encode($request->all());
    $inquiry->payment_status = 'paid';
    $inquiry->transaction_id = $request->txnid;
    $inquiry->save();

    // Redirect to a thank you page
    return redirect()->route('thankyou');
  }

  public function paymentFailure(Request $request)
  {
    // Handle failed payment
    Log::info('Payment failure', $request->all());
    $inquiry = CourseInquiry::find($request->udf1);
    $inquiry->payment_status = 'failed';
    $inquiry->transaction_id = $request->txnid;
    $inquiry->payment_info = json_encode($request->all());
    $inquiry->save();
    // Redirect to a payment failed page
    return redirect()->route('payment.failed');
  }


}
