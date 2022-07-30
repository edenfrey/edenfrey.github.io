import { Link, NavLink} from "react-router-dom";
import "./index.scss"
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    <div className="nav-bar">
        <Link className="logo">
            <img src = {LogoS} alt="logo"></img>
            <img className="sub-logo" src = {LogoSubtitle} alt="adrian"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon = {faUser} className = "about-link" color = "#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} className = "contact-link" color = "#4d4d4e"/>
            </NavLink>
        </nav>

    </div>

}

export default Sidebar;