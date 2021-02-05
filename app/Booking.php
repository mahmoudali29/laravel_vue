<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Booking extends Model
{
    //
    protected $fillable = ['from','to'];
    
    public function Bookable()
    {
    	return $this->belongTo(Bookable::class);
    }

    public function scopeBetweenDates(Builder $query,$from,$to)
    {
    	return $query->where('to','>=',$to)->where('from','<=',$to);
    }
}
