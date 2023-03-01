import "./styles/Header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to={'/'}>
                <img className="navbar-icon" src={require("../assets/logo.svg").default} />
            </Link>
        </div>
    )
}

export default Header;
