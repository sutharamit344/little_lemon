
import "./booking.css"
import {useState, useReducer, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import AvailableTimes from "./availableslot.js"


function reducer(state, action) {
    const newBooking = {
        date: action.date,
        guest: action.guest,
        occasion: action.occasion,
    };

    switch (action.type) {
        case "BOOK_SLOT":
            return {
                ...state,
                slots: state.slots.map((slot) => {
                    
                    const isBookedForSelectedDate = (slot.booking || []).some(
                        (booking) => booking.date === action.date
                    );

                    return slot.time === action.time && !isBookedForSelectedDate
                        ? { ...slot, booking: [...slot.booking, newBooking] }
                        : slot
                }
                ),
            };
        default:
            return state;
    }
}

export default function Bookingpage(props) {
    const [state, dispatch] = useReducer(reducer, props.initialState);
    const [formData, setFormdata] = useState({
        date: "",
        time: "",
        guest: 1,
        occasion: "nothing",
    });

    const navigate = useNavigate()

    useEffect(()=> {
        console.log(state.slots);
        props.isConfirm === true && props.bookings(state.slots) && navigate("/bookinglist")
    },[state])

    const handleSubmit = (e) => {
        e.preventDefault();

        const { date, time, guest, occasion } = formData;

        if (!date || !time || !guest || !occasion) {
            // Optionally handle invalid form data
            return;
        }

        dispatch({
            type: 'BOOK_SLOT',
            time,
            date,
            guest,
            occasion,
        });

        // Clear form after submission
        setFormdata({
        date: "",
        time: "",
        guest: 1,
        occasion: "nothing",
        });

        props.onConfirm(true);
    };


    const isSlotBooked = state.slots.some((slot) => 
        slot.time === formData.time &&
        slot.booking.some((booked) => booked.date === formData.date)
    );
    
    const isFormValid = formData.date !== "" && formData.guest !== "" && !isSlotBooked && formData.time !== "" && formData.time !== "Select time";
    

    return (
        <section>
            <div className="container content">
                <form className="form" onSubmit={handleSubmit}>
                <header>
                    <h2>Reservation Form</h2>
                </header>
                    <label htmlFor="res_date">
                        <h3>Date</h3>
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="res_date"
                        className="form-control"
                        value={formData.date}
                        onChange={(e) => { setFormdata({ ...formData, date: e.target.value }) }}
                    />
                    <label htmlFor="res_time">
                        <h3>Time</h3>
                    </label>
                    <select
                        id="res_time"
                        name="time"
                        className="form-control"
                        value={formData.time}
                        onChange={(e) => { setFormdata({ ...formData, time: e.target.value }) }}
                    >
                        <option>Select time</option>
                        {formData.date ? <AvailableTimes availableSlots={state.slots} selectedDate={formData.date} /> : ""}
                    </select>
                    <label htmlFor="res_guest">
                        <h3>Guest</h3>
                    </label>
                    <select
                        type="number"
                        min="1"
                        max="4"
                        id="res_guest"
                        name="guest"
                        className="form-control"
                        value={formData.guest}
                        onChange={(e) => { setFormdata({ ...formData, guest: e.target.value }) }}
                    >
                        <option>1 Person</option>
                        <option>2 Person</option>
                        <option>3 Person</option>
                        <option>4 Person</option>
                        <option>50 Person Hallnpn</option>
                    </select>
                    <div className="error-msg"></div>
                    <label htmlFor="res_occasion">
                        <h3>Occasion</h3>
                    </label>
                    <select
                        id="res_occasion"
                        name="occasion"
                        className="form-control"
                        value={formData.occasion}
                        onChange={(e) => { setFormdata({ ...formData, occasion: e.target.value }) }}
                    >
                        <option value="">Select Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Engagement">Engagement</option>
                    </select>
                    <br />
                    <input
                        type="submit"
                        id="res_submit"
                        value="Reserve"
                        className="btn btn-secondary"
                        disabled={!isFormValid}
                    />
                </form>
            </div>
        </section>
    );
}
