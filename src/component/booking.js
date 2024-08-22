import "./booking.css"

export default function Bookingpage(){
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
            <input type="date" id="res_date" className="form-control"/>
            <label htmlFor="res_time">
                <h3>Time</h3>
            </label>
                <select id="res_time" className="form-control">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                </select>
            <label htmlFor="res_guest">
                <h3>Guest</h3>
            </label>
            <input type="number" id="res_guest" className="form-control"/>
            <label htmlFor="Res_occasion">
                <h3>Occasion</h3>
            </label>
                <select id="res_occasion" className="form-control">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Angegement</option>
                </select>
                <br></br>
                <input type="submit" id="res_submit" value="Reserve" className="btn btn-secondary"/>
        </form>
        </div>
        </section>
    )
}