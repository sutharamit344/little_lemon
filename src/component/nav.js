import "./nav.css"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav>
            <ul id="nav-items">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/">About</Link></li>
                <li className="nav-link"><Link to="/">Menu</Link></li>
                <li className="nav-link"><Link to="/booking">Reservation</Link></li>
                <li className="nav-link"><Link to="/">Order onilne</Link></li>
                <li className="nav-link"><Link to="">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;