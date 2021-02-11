// Header of the kennely app
// import logo from './kennely-logo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Header( { logo } ) {

    function handleClick() {   
        document.getElementById('hamburger').classList.toggle('is-active');
        document.getElementById('mobile-navbar').classList.toggle('is-active');
    }

    return (
        <div className="flex-container">
            <div className="logo-container">
                <a href="#"><img src={logo} alt="logo" id="logo-image"></img></a>
                <a href="#"><h2>Kennely</h2></a>
            </div>
            <div className="login-container">
                <div className="navigation-container">
                    <ul className="flex-container" id="navbar">
                        <li><a className="active" href="#"><i><FontAwesomeIcon icon={faHome} /></i> Home</a></li>
                        <li><a href="#"><i><FontAwesomeIcon icon={faPaw} /></i> My Pets</a></li>
                    </ul>
                </div>
                <button className="hamburger hamburger--squeeze" type="button" id="hamburger" onClick={handleClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <button className="user-button" id="user_button"><i><FontAwesomeIcon icon={faUserCircle} size="2x" /></i></button>
                <button className="user-button" id="sign-in-button"><i><FontAwesomeIcon icon={faSignInAlt} size="2x" /></i></button>
            </div>
        </div>
    )
}

export default Header;