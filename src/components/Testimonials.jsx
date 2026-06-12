import './Testimonials.css';
import { FaUserGraduate } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "React Development",
    rating: 5,
    review:
      "This platform made it easy to manage my courses and track my academic progress. The interface is simple, fast, and very user-friendly.",
    image: "/student.png",
  },
  {
    id: 2,
    name: "Priya Verma",
    course: "UI/UX Design",
    rating: 5,
    review:
      "I love how organized everything is. From course updates to student records, the system helps me stay on top of my studies.",
    image: "/student.png",
  },
  {
    id: 3,
    name: "Arjun Patel",
    course: "Computer Science",
    rating: 5,
    review:
      "The dashboard provides all the information I need in one place. It has significantly improved my learning experience.",
    image: "/student.png",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    course: "Data Science",
    rating: 5,
    review:
      "Managing assignments and tracking progress has never been easier. I highly recommend this platform to every student.",
    image: "/student.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    course: "Web Development",
    rating: 5,
    review:
      "The clean design and powerful features make this student management system extremely useful for daily academic activities.",
    image: "/student.png",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    course: "Artificial Intelligence",
    rating: 5,
    review:
      "An excellent platform for students. It keeps everything organized and helps me focus more on learning and less on administration.",
    image: "/student.png",
  },
];


function Testimonials(){
    return(
        <>
        <div className="container testimonial-sec">
            <div className="section-header">
              <h2 className="section-title">What Our Students Say</h2>
              <p className="section-desc1">Discover how our platform has helped students achieve their academic goals, improve their learning experience, and stay organized throughout their educational journey.</p>
            </div>
            <div className="testimonial-grid">
                {
                    testimonials.map(
                        (item)=>{
                            return(
                                <div key={item.id} className="test-card">
                                    <div className="test-row">
                                        <span><FaUserGraduate /></span>
                                        <h3>{item.name}</h3>
                                    </div>
                                        <span className="test-course">{item.course}</span>
                                        <div className="rating">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <p className="test-text">{item.review}</p>
                                </div>
                            )
                        }
                    )
                }
                
            </div>
        </div>
        </>
    )
}

export default Testimonials;