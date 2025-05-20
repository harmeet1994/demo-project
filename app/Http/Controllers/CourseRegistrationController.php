<?php

namespace App\Http\Controllers;

use App\Models\CourseRegistration;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CourseRegistrationController extends Controller
{
  /**
   * Store course registration data and initiate payment.
   */
  public function store(Request $request)
  {
    // Validate request
    $validated = $request->validate([
      'user_id' => 'required|exists:users,id',
      'first_name' => 'required|string|max:255',
      'last_name' => 'nullable|string|max:255',
      'email' => 'required|email|max:255',
      'mobile' => 'required|string|max:20',
      'address' => 'required|string|max:255',
      'city' => 'required|string|max:100',
      'state' => 'required|string|max:100',
      'zip_code' => 'required|string|max:20',
      'course_type' => 'required|string',
    ], [
      'first_name.required' => 'Please enter your first name',
      'email.required' => 'Please enter your email address',
      'email.email' => 'Please enter a valid email address',
      'mobile.required' => 'Please enter your mobile number',
      'address.required' => 'Please enter your address',
      'city.required' => 'Please enter your city',
      'state.required' => 'Please enter your state',
      'zip_code.required' => 'Please enter your zip code',
      'course_type.required' => 'Please select a course type',
    ]);

    // Store registration data in database
    $registration = CourseRegistration::create($validated);

    // PayU Money Configuration
    $merchantKey = config('app.payu_merchant_key');
    $salt = config('app.payu_salt');
    $payuBaseUrl = config('app.payu_base_url');

    // Generate unique transaction ID
    $txnId = 'TXN' . time() . rand(10000, 99999);

    // Get course price - in a real app, you'd get this from a database
    $amount = $this->getCoursePrice($validated['course_type']);

    // Full name for PayU
    $fullName = $validated['first_name'] . ' ' . ($validated['last_name'] ?? '');

    // Prepare PayU parameters
    $params = [
      'key' => $merchantKey,
      'txnid' => $txnId,
      'amount' => $amount,
      'productinfo' => $validated['course_type'],
      'firstname' => $fullName,
      'email' => $validated['email'],
      'phone' => $validated['mobile'],
      'surl' => route('registration.payment.success'),
      'furl' => route('registration.payment.failure'),
      'udf1' => $registration->id
    ];

    // Calculate hash
    $hashString = $merchantKey . '|' . $txnId . '|' . $amount . '|' . $validated['course_type'] . '|' .
      $fullName . '|' . $validated['email'] . '|' . $registration->id . '||||||||||' . $salt;
    $hash = strtolower(hash('sha512', $hashString));

    // Log payment attempt
    Log::info('Registration payment initiated', ['txnId' => $txnId, 'email' => $validated['email']]);

    // Return payment data as JSON
    return response()->json([
      'payuBaseUrl' => $payuBaseUrl,
      'params' => array_merge($params, ['hash' => $hash])
    ]);
  }

  /**
   * Handle successful payment.
   */
  public function paymentSuccess(Request $request)
  {
    // Handle successful payment
    Log::info('Registration payment success', $request->all());

    // Update database record
    $registration = CourseRegistration::find($request->udf1);
    $registration->payment_info = json_encode($request->all());
    $registration->payment_status = 'paid';
    $registration->transaction_id = $request->txnid;
    $registration->save();

    // Redirect to thank you page
    return redirect()->route('thankyou');
  }

  /**
   * Handle failed payment.
   */
  public function paymentFailure(Request $request)
  {
    // Handle failed payment
    Log::info('Registration payment failure', $request->all());

    $registration = CourseRegistration::find($request->udf1);
    $registration->payment_status = 'failed';
    $registration->transaction_id = $request->txnid ?? null;
    $registration->payment_info = json_encode($request->all());
    $registration->save();

    // Redirect to payment failed page
    return redirect()->route('payment.failed');
  }

  /**
   * Get course price based on course type.
   */
  private function getCoursePrice($courseType)
  {
    // In a real app, this would come from a database
    $price = DB::table("course_prices")->where("course", $courseType)->first();

    return $price->price ?? '7999';
  }
}
