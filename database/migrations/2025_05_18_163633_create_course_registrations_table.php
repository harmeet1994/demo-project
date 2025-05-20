<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('course_registrations', function (Blueprint $table) {
      $table->id();
      $table->string('first_name');
      $table->string('last_name')->nullable();
      $table->string('email');
      $table->string('mobile');
      $table->string('address');
      $table->string('city');
      $table->string('state');
      $table->string('zip_code');
      $table->string('course_type');
      $table->string('transaction_id')->nullable();
      $table->enum('payment_status', ['pending', 'paid', 'failed'])->default('pending');
      $table->text('payment_info')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('course_registrations');
  }
};
