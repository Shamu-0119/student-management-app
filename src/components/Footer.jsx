import logo from '../assets/react.svg';
import './Footer.css';


function Footer(){
    return (
        <footer className="footer-cont">
            <div className="container">
                <div className="footer-cont1">
                    <div className="footer-col">
                        <div className="brand-wrap">
                            <img src={logo} alt="EduSphere Logo" />
                            <span className="brand-text">EduSphere</span>
                        </div>
                        <p>This gives a modern SaaS/AI startup feel similar to portfolio and AI websites.</p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Student Directory</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                             <li><a href="#faq">FAQs</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Details</h4>
                        <ul>
                            <li><strong>Email:</strong> gollapudishamu@gmail.com</li>
                            <li><strong>Phone:</strong> +91 8010849826</li>
                            <li><strong>Address:</strong> Banaswadi, Bangalore, Karnataka, India - 560043</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EduSphere Hub. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;