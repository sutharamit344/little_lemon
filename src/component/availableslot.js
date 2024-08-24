const AvailableTimes = (props) => {
    return (
        <>
            {props.availableSlots.map((slot) => {
                const isBookedForSelectedDate = (slot.booking || []).some(
                    (booking) => booking.date === props.selectedDate
                );

                return (
                    <option 
                        key={slot.time} 
                        value={slot.time} 
                        disabled={isBookedForSelectedDate}
                    >
                        {slot.time} {isBookedForSelectedDate ? "- Booked" : ""}
                    </option>
                );
            })}
        </>
    );
}

export default  AvailableTimes
