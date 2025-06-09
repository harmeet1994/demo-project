<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampusInquiry extends Model
{
    use HasFactory;

    protected $table = 'campus_inquiries';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'college',
        'degree',
        'training_session'
    ];
}
