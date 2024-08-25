import { useEffect } from "react";


const BookingList = ({ slots, onConfBooking,  onConfirm}) => {

    useEffect(()=> {
        onConfirm(false);
        console.log(onConfBooking)
    })

    return (
        <section>
            <div className="container">
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

export default BookingList