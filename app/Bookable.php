<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookable extends Model
{
    //

    public function Bookings()
    {
    	return $this->hasMany(Booking::class);
    }
}
