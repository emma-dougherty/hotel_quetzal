
import {useState} from "react";
import { postBooking } from "../services/BookingService.js"

const BookingForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})

    

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const clearForm = () => {
        document.getElementById('booking-form').reset()
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        clearForm()
    }

    

    return (
        <form onSubmit={onSubmit} id="booking-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                onChange={onChange} 
                type="text" 
                id="name"  
            
                />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            {/* <div className="formWrap">
                <label htmlFor="checkin">Check-In Status:</label>
                <input onChange={onHandleCheckbox} 
                type="checkbox" 
                checked = {isCheckedIn}
                id="check_in_status"  
                />
            </div> */}

            <input type="submit" value="Save" id="save"/>
        </form>

    );
}

export default BookingForm;