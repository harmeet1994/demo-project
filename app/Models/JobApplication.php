<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $table = 'user_job_applications';

    public $timestamps = false;

    public $guarded = [];
}
