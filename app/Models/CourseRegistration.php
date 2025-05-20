<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseRegistration extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'user_id',
    'first_name',
    'last_name',
    'email',
    'mobile',
    'address',
    'city',
    'state',
    'zip_code',
    'course_type',
    'transaction_id',
    'payment_status',
    'payment_info'
  ];

}
