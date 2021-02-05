<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookable extends Model
{
    //

    public function bookings()
    {
    	return $this->hasMany(Booking::class);
    }

    public function availableFor($from,$to) :bool
    {
    	return $this->bookings()->BetweenDates($from,$to)->count();
    }

    
}
