
import Homapage from "./homepage";
import Bookingpage from "./booking";
import { Route,Routes, useNavigate} from "react-router-dom";
import {useEffect, useState } from "react";
import BookingList from "./bookinglist.js";
import {fetchAPI} from "../api.js"

function Main(){

    const name = "amit";

    const [slotState, setSlotState] = useState({
        slots: fetchAPI("")
    })

    const bookings = (state) => {
        setSlotState({...slotState, slots: state})
        return true
    }

    const [confirm, setConfirm] = useState(false)

    const confBooking = (change) => {
        setConfirm(change)
    }


    return(
        <main>
            <Routes>
                <Route path="/" element={<Homapage isConfirm={slotState}/>}></Route>
                <Route path="/booking" element={<Bookingpage name={name} onConfirm={confBooking} bookings={bookings} initialState={slotState} isConfirm={confirm}/>}></Route>
                <Route path="/bookinglist" element={<BookingList slots={slotState.slots} onConfBooking={confirm}  onConfirm={confBooking} />} ></Route>
            </Routes>
        </main>
    )
}

export default Main;