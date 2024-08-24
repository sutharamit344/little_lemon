
import "./booking.css"
import {useState,useReducer} from "react"
import AvailableTimes from "./availableslot.js"

const initialState = {
    slots: [
        { time: '12:00 PM', booking: [] },
        { time: '12:30 PM', booking: [] },
        { time: '1:00 PM', booking: [] },
        { time: '1:30 PM', booking: [] },
    ],
};

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

export default function Bookingpage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [formData, setFormdata] = useState({
        date: "",
        time: "12:00 PM",
        guest: 1,
        occasion: "nothing",
    });

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
        time: "12:00 PM",
        guest: 1,
        occasion: "nothing",
        });
    };

    const isSlotBooked = state.slots.some((slot) => 
        slot.time === formData.time &&
        slot.booking.some((booked) => booked.date === formData.date)
    );
    
    const isFormValid = formData.date !== "" && formData.guest !== "" && !isSlotBooked;
    

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
                        disabled={!formData.date}
                    >
                        <AvailableTimes availableSlots={state.slots} selectedDate={formData.date} />
                    </select>
                    <label htmlFor="res_guest">
                        <h3>Guest</h3>
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="4"
                        id="res_guest"
                        name="guest"
                        className="form-control"
                        value={formData.guest}
                        onChange={(e) => { setFormdata({ ...formData, guest: e.target.value }) }}
                    />
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
                <BookingList slots={state.slots} />
            </div>
        </section>
    );
}

const BookingList = ({ slots }) => {
    return (
        <section>
            <div>
                <header>
                    <h2>Your Booking</h2>
                </header>
                <div className="booking-list">
                    {slots.map((slot) => (
                        <div key={slot.time} className="slot">
                            {(slot.booking || []).length > 0 ? (
                                <>
                            <h3>{slot.time}</h3>
                                <div  className="slot-list">
                                <ul>
                                    {slot.booking.map((booking, index) => (
                                        <li key={index}>
                                            <strong>Date:</strong> {booking.date} <br />
                                            <strong>Guests:</strong> {booking.guest} <br />
                                            <strong>Occasion:</strong> {booking.occasion}
                                        </li>
                                    ))}
                                </ul>
                                </div></>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

