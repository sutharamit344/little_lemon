import "./nav.css"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav>
            <ul id="nav-items">
                <li className="nav-link nav_home"><Link to="/">Home</Link></li>
                <li className="nav-link nav_about"><Link to="/">About</Link></li>
                <li className="nav-link nav_menu"><Link to="/">Menu</Link></li>
                <li className="nav-link nav_booking"><Link to="/booking">Reservation</Link></li>
                <li className="nav-link nav_order"><Link to="/">Order onilne</Link></li>
                <li className="nav-link nav_login"><Link to="">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;