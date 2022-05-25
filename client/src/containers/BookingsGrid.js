import React from 'react'
import BookingCard from '../components/BookingCard'


const BookingGrid = ({bookings, removeBooking, handleCheckIn}) => {

        const bookingsList = bookings.map((booking) =>{
            return  <BookingCard booking={booking} removeBooking={removeBooking} key={booking._id} handleCheckIn={handleCheckIn}/>
        });

    return (
        <>
        <h4>Booking grid</h4>
        {bookingsList}
    
        </>
    )
}

export default BookingGrid