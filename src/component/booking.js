import "./booking.css"
import {useState,useReducer} from "react"
import AvailableTimes from "./availableslot.js"

const initialState = {
    slots: [
        { time: '12:00 PM', date:"", booked: false },
        { time: '12:30 PM', date:"", booked: false },
        { time: '1:00 PM', date:"", booked: false },
        { time: '1:30 PM', date:"", booked: false },
        // Add more time slots as needed
    ],
};

function reducer(state, action) {

    switch (action.type){
        case "BOOK_SLOT":
            return {
                    ...state,
                    slots: state.slots.map((slot) => 
                        slot.time === action.time ? {...slot, booked: true} : slot
                    )
                };
            default:
                return state;
    };
}

export default function Bookingpage(){
    const [state,dispatch] = useReducer(reducer,initialState)
    const [formData, setFormdata] = useState(
        {
            date:"",
            time:"",
            guest: 1,
            occasion:"",
            submitTouch:false
        }
    )

    const onBooking = (time) => {
        dispatch({type: "BOOK_SLOT", time: time})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onBooking(e.target.elements.slot.value)
    }

    const isFormValid = formData.date !== "" && formData.guest !== "";

    return(
        <section>
            <div className="container content">
        <header>
            <h2>Reservation Form</h2>
        </header>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="res_date" >
                <h3>Date</h3>
            </label>
            <input type="date" name="date" id="res_date" className="form-control" value={formData.date} onChange={(e) => { setFormdata({...formData, date: e.target.value})}}/>
            <label htmlFor="res_time">
                <h3>Time</h3>
            </label>
                <select id="res_time" name="slot" className="form-control" value={formData.time} onChange={(e) => { setFormdata({...formData, time: e.target.value})}}>
                    <AvailableTimes availableSlots={state.slots}/>
                </select>
            <label htmlFor="res_guest">
                <h3>Guest</h3>
            </label>
            <input type="number" min="1" max="4" id="res_guest" className="form-control" value={formData.guest} onChange={(e) => { setFormdata({...formData, guest: e.target.value})}}/>
            <label htmlFor="res_occasion">
                <h3>Occasion</h3>
            </label>
                <select id="res_occasion" className="form-control" value={formData.occasion} onChange={(e) => { setFormdata({...formData, occasion: e.target.value})}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Angegement</option>
                </select>
                <br></br>
                <input type="submit" id="res_submit" value="Reserve" className="btn btn-secondary" disabled={!isFormValid} />
        </form>
        </div>
        </section>
    )
}