<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $table = 'corporate_trainings_requests';

    protected $fillable = [
        'company',
        'email',
        'mobile',
        'location',
        'training_session',
    ];
}
