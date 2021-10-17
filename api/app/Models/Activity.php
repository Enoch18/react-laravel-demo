<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $fillable=['day_id', 'time', 'activity'];
    protected $hidden = ['created_at', 'updated_at'];

    public function days(){
        return $this->belongsTo(\App\Models\Day::class, 'day_id', 'id');
    }
}
