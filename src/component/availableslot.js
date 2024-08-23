

const AvailableTimes = (props) => {

    return(
        <>
        {
            props.availableSlots.map((slot) => {
                return (
                    <option key={slot.time} disabled={slot.booked ? true : false}>
                        {slot.time} {slot.booked ? "- Booked" : ""}
                    </option>
                )
            })
        }
        </>
    )
}

export default  AvailableTimes