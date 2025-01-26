import DubaiLogo from "../../images/logo.jpg"
import "./header.css"
const Header = () => {
    return ( <header className="header">
        <div className="logo">
            <img src={DubaiLogo} alt="dubai-icon" className="logo-img" />
            <div className="logo-text">
                <b>ELHABIBIGROUP</b>
                <b>NORTHCOST</b>
            </div>
        </div>
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-link">
                <i className="bi bi-house-fill"></i>
                    Home</li>
                <li className="navbar-link">
                <i className="bi bi-bank2"></i>
                    About</li>
                <li className="navbar-link">
                <i className="bi bi-arrow-right-square-fill"></i>
                    Login</li>
                <li className="navbar-link">
                <i className="bi bi-person-plus-fill"></i>
                    Register</li>
            </ul>
        </nav>
    </header> );
}
 
export default Header;