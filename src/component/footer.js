import Logo from "../assets/img/Logo .svg"

function Footer(){
    return(
        <footer>
            <div className="container">
            <div className="footer-logo">
                <img src={Logo} alt="Liitle lemon logo"/>
            </div>
            <div className="footer-links">
                <ul>
                    <li><h3>Doormat</h3></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order Onilne</a></li>
                <li><a href="">Login</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li><h3>Contact</h3></li>
                <li><a href="">Address</a></li>
                <li><a href="">Phne Number</a></li>
                <li><a href="">Email</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li><h3>Follow us</h3></li>
                <li><a href="">Twiter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                </ul>
            </div>
                </div>
        </footer>
    )
}

export default Footer;