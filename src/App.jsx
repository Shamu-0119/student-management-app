import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import StudentCard from './components/StudentCard'
import Footer from './components/Footer'
import Banner from './components/Banner'
import './App.css'
import About from './components/About'
import {useState} from 'react';
import Subscription from './components/Subscription.jsx';


const students = [
  {
    id: 1,
    name: "Alex Carey",
    age: 22,
    course: "MERN Stack",
    city: "New York",
    image: "./src/assets/dzine-test.jpeg"
  },
  {
    id: 2,
    name: "Emily Davis",
    age: 24,
    course: "Data Science",
    city: "San Francisco",
    image: "./src/assets/student2-card.png"
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 21,
    course: "Cybersecurity",
    city: "Chicago",
    image: "./src/assets/dzine-test.jpeg"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    age: 23,
    course: "UI/UX Design",
    city: "Los Angeles",
    image: "./src/assets/student2-card.png"
  }
];


function App() {
  
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <>
      <Header />
      
      <Banner />

       <About />

       <section className="cards-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Student Directory</span>
              <h2 className="section-title">Active Cohort Members</h2>
              <p className="section-desc">
                Meet some of the global talent registered under our MERN, Data Science, and Design tracks.
              </p>
            </div>

            <div className="student-cards">

                {students.map((student) => (

                  <StudentCard
                    key={student.id}
                    name={student.name}
                    age={student.age}
                    course={student.course}
                    city={student.city}

                    onView={() =>
                      setSelectedStudent(student)
                    }
                  />

                ))}

              </div>
              {
                selectedStudent && (

              <div className="popup-overlay">

                  <div className="popup">

                      <button onClick={() => setSelectedStudent(null)}> X </button>

                      <div className="left">
                        <img src={selectedStudent.image} alt={selectedStudent.name} />
                      </div>

                      <div className="right">

                        <h2>{selectedStudent.name}</h2>
                        <p>Age: {selectedStudent.age}</p>
                        <p>Course: {selectedStudent.course}</p>
                        <p>City: {selectedStudent.city}</p>

                      </div>

                  </div>

              </div>

            )
          }

          </div>
        </section>


        <Subscription />

       

      <Footer />
    </>
  )
}

export default App
