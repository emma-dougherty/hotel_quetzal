import React, { useState } from 'react'
import { deleteBooking } from '../services/BookingService.js';

const BookingCard = ({booking, removeBooking, handleCheckIn}) => {

    const [isCheckedIn, setIsCheckedIn] = useState (booking.check_in_status)

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    const onHandleCheckbox = ()=>{
        setIsCheckedIn(!isCheckedIn)
        handleCheckIn(booking)

    }

    return (
        <>
        <h5>Booking card</h5>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.check_in_status}</p>
        {/* <button style="font-size:24px">Delete <i className="fa fa-trash-o"></i></button> */}
        <button onClick={handleDelete}> 🗑 </button>
        <div className="formWrap">
                <label htmlFor="checkin">Check-In Status:</label>
                <input onChange={onHandleCheckbox} 
                type="checkbox" 
                checked = {isCheckedIn}
                id="check_in_status"  
                />
            </div>
        </>
    )
}

export default BookingCard