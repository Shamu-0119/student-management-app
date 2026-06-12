import logo from '../assets/react.svg';
import './Header.css';

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
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#students">Student Directory</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#faq">FAQs</a></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a href="#contact"><button className="contact-btn">Contact Us</button></a>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;