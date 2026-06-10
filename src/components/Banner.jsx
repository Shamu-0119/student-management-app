import './Banner.css'
import heroImg from '../assets/hero.png'
import StudentCard from './StudentCard'

const name = 'Shamu';
  const age = 24;
  const isLoggedIn = true;


function Banner(){
    return (

        <>

        <section className="hero-sec">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="welcome-chip">
                <span>🚀 Welcome back, {name}</span>
              </div>
              
              <h1 className="hero-title">
                Unlock Your Potential <br />
                <span className="gradient-text-alt">with Modern Learning</span>
              </h1>
              
              <p className="hero-desc">
                Welcome to your premium dashboard. You are currently logged in as a registered member. Your recorded profile age is <span>{age} years old</span>.
              </p>

              <div>
                {isLoggedIn ? (
                  <div className="status-badge active">
                    <span className="indicator-dot"></span>
                    🎓 Student Account Active
                  </div>
                ) : (
                  <div className="status-badge inactive">
                    <span className="indicator-dot"></span>
                    🔒 You have to Login First!
                  </div>
                )}
              </div>
            </div>

            <div className="hero-right">
              <div className="visual-sphere glass-effect">
                <img src={heroImg} alt="Hero Interactive" className="hero-img" />
              </div>
            </div>
          </div>
        </section>

       
        </>
    );
}

export default Banner;