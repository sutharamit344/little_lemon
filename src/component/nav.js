import "./nav.css"
function Nav(){
    return(
        <nav>
            <ul id="nav-items">
                <li className="nav-link"><a href="">Home</a></li>
                <li className="nav-link"><a href="">About</a></li>
                <li className="nav-link"><a href="">Menu</a></li>
                <li className="nav-link"><a href="">Reservation</a></li>
                <li className="nav-link"><a href="">Order onilne</a></li>
                <li className="nav-link"><a href="">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;