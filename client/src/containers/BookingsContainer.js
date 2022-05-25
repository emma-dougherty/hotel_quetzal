import React, { useState, useEffect} from 'react'
import BookingForm from '../components/BookingForm'
import BookingGrid from './BookingsGrid'
import { checkInBooking, getBookings } from '../services/BookingService'


const BookingsContainer = () => {

    const [bookings, setBookings] = useState ([])

    useEffect(()=>{
        getBookings().then((allBookings)=>{
        setBookings(allBookings);
        })
    }, []);

    const handleCheckIn = (booking) => {
        const temp = [...bookings]
        const indexToBeUpdated = temp.indexOf(booking)
        const bookingtoBeUpdated = temp[indexToBeUpdated]
        bookingtoBeUpdated.check_in_status = !bookingtoBeUpdated.check_in_status
        setBookings(temp)
        checkInBooking({check_in_status: bookingtoBeUpdated.check_in_status, _id: bookingtoBeUpdated._id})

    }


    const addBooking = (booking) =>{
        const temp = bookings.map(s =>s);
        temp.push(booking);
        setBookings(temp);
    }

    const removeBooking = (id) => {
        const temp = bookings.map(s =>s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);
    
        temp.splice(indexToDel, 1);
        setBookings(temp);
    }

    return (
        <>
        <h1>Hotel Quetzal Bookings - this is the container</h1>
        <BookingForm addBooking={addBooking}/>
        <BookingGrid bookings={bookings} removeBooking={removeBooking} handleCheckIn={handleCheckIn}/>
        </>
    )
}

export default BookingsContainer