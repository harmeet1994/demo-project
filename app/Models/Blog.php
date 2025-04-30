<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
  protected $table = 'wp_blogs';
  protected $primaryKey = 'ID';

  protected $fillable = [
    'Blog_title',
    'Blog_desc',
    'Blog_publish_date',
    'custom_url',
    'Blog_image',
    'BlogType',
    'guid'
  ];

  public $timestamps = false;
}
