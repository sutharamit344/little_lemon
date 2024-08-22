import Nav from "./nav"
import Logo from "../assets/img/Logo .svg"
function Header(){
    return(
        <header className="container header">
            <img src={Logo} alt="Little lemon logo" />
            <Nav/>
        </header>
    )
}

export default Header;