<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrganizationController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'company' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'mobile' => 'required|string|max:20',
            'location' => 'required|string|max:255',
            'trainingSession' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $organization = Organization::create([
                'company' => $request->company,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'location' => $request->location,
                'training_session' => $request->trainingSession,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Details saved successfully',
                'data' => $organization,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to save organization details',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
