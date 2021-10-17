<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    use HasFactory;

    protected $fillable = ['date'];

    public function activities(){
        return $this->hasMany(\App\Models\Activity::class, 'day_id', 'id');
    }
}
