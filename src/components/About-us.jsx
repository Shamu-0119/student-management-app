import './About.css';


function About(){
    return(
        <>
        <div className="about-section" id="about">
            <div className="container about-content">
                <div className="about-left">
                    <img src="./src/assets/about-image.jpg" className="about-img"></img>
                </div>

                <div className="about-right">
                    <h4>About Our Institution</h4>
                    <p>We are committed to providing quality education,
                        innovative learning experiences, and career-focused
                        training to help students achieve their academic
                        and professional goals.</p>
                    <ul>
                        <li> ✔ Experienced Faculty</li>
                        <li>✔ Industry-Oriented Curriculum</li>
                        <li>✔ Modern Infrastructure</li>
                        <li>✔ 100% Placement Assistance</li>
                    </ul>
                    <button><a href="#"> Learn More <span>→</span></a></button>
                </div>

            </div>

        </div>
        
        </>
    );
}

export default About;