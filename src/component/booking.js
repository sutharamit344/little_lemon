import "./booking.css"
import {useState} from "react"

export default function Bookingpage(){
    const [formData, setFormdata] = useState(
        {
            date:"",
            time:"",
            guest: 1,
            occasion:"",
            submitTouch:false
        }
    )

    return(
        <section>
            <div className="container content">
        <header>
            <h2>Reservation Form</h2>
        </header>
        <form className="form" >
            <label htmlFor="res_date" >
                <h3>Date</h3>
            </label>
            <input type="date" id="res_date" className="form-control" value={formData.date} onChange={(e) => { setFormdata({...formData, date: e.target.value})}}/>
            <label htmlFor="res_time">
                <h3>Time</h3>
            </label>
                <select id="res_time" className="form-control" value={formData.time} onChange={(e) => { setFormdata({...formData, time: e.target.value})}}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
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
                <input type="submit" id="res_submit" value="Reserve" className="btn btn-secondary" />
        </form>
        </div>
        </section>
    )
}