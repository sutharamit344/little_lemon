import "./nav.css"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav>
            <ul id="nav-items">
                <li className="nav-link nav_home"><Link to="/">Home</Link></li>
                <li className="nav-link nav_about"><Link to="/">About</Link></li>
                <li className="nav-link nav_menu"><Link to="/">Menu</Link></li>
                <li className="nav-link nav_booking" id="table-fun">
                <Link>Table<span className="material-symbols-outlined">arrow_drop_down</span></Link>
                    <ul>
                    <li className="nav-link nav_menu"><Link to="/booking">Book</Link></li>
                    <li className="nav-link nav_menu"><Link to="/bookinglist">Your Bookings</Link></li>
                    </ul>
                </li>
                <li className="nav-link nav_order"><Link to="/">Order onilne</Link></li>
                <li className="nav-link nav_login"><Link to="">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;