import {useState} from 'react';
import '../styles/Faq.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const faqs = [
  {
    id: 1,
    question: "Do you provide certificates after course completion?",
    answer:
      "Yes. Every student receives an industry-recognized certificate after successfully completing the course."
  },
  {
    id: 2,
    question: "Are the classes live or recorded?",
    answer:
      "We provide live instructor-led sessions along with lifetime access to recorded lectures."
  },
  {
    id: 3,
    question: "Do you offer placement assistance?",
    answer:
      "Yes. We provide resume building, mock interviews, portfolio guidance, and placement support."
  },
  {
    id: 4,
    question: "Can beginners enroll in the courses?",
    answer:
      "Absolutely. Our beginner-friendly curriculum is designed for students with little or no prior experience."
  },
  {
    id: 5,
    question: "What is the duration of the programs?",
    answer:
      "Course durations vary from 6 weeks to 6 months depending on the specialization and learning track."
  },
  {
    id: 6,
    question: "Will I get access to projects?",
    answer:
      "Yes. Students work on real-world projects that help build practical skills and strengthen portfolios."
  }
];


function Faq(){

    const [openId,setOpenId]=useState(1);



    return (
        <>
       <Header />
        <div className="container faq-section" id="faq">
            <div className="faq-left">
                    <span className="faq-tag">FAQs</span>

                    <h2>
                        Got Questions?
                        <br />
                        We've Got Answers.
                    </h2>

                    <p>
                        Explore answers to the most common questions about our courses,
                        certifications, learning experience, and career support services.
                        Our goal is to provide a smooth learning journey from enrollment
                        to placement.
                    </p>
            </div>
            <div>
                {
                    faqs.map((faq)=>{
                        return(
                            <div key={faq.id} className="faq-right">
                                <h3 className="faq-question" onClick={() =>
                                        openId === faq.id ? setOpenId(null) : setOpenId(faq.id)
                                    }>{faq.question}
                                    <span>{openId === faq.id ? "−" : "+"}</span>
                                </h3>

                                {
                                    openId === faq.id && (
                                        <p className="faq-answer">{faq.answer}</p>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
       </div>

    <Footer />
        </>
    )
}

export default Faq;