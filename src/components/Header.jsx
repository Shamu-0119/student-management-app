import logo from '../assets/react.svg';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header-content">

                <div className="logo-container">
                    <img src={logo} alt="EduSphere Logo" />
                    <span className="logo-text">EduSphere</span>
                </div>

                <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />

                <label htmlFor="menu-toggle" className="hamburger-btn" aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>

                <div className="nav-menu-wrapper">
                    <nav className="nav-menu">
                        {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#students">Student Directory</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#faq">FAQs</a></li>
                        </ul> */}
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/contact"><button className="contact-btn">Contact Us</button></Link>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;