
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Faq from './pages/Faqs.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/testimonials" element={<Testimonial />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import Header from './components/Header'
// import StudentCard from './components/StudentCard'
// import Footer from './components/Footer'
// import Banner from './components/Banner'
// import './App.css'
// import About from './components/About'
// import {useState} from 'react';
// import Subscription from './components/Subscription.jsx';
// import Faq from './components/Faq.jsx';
// import Testimonials from './components/Testimonials.jsx';

// import { BrowserRouter} from 'react-router-dom';


// const students = [
//   {
//     id: 1,
//     name: "Alex Carey",
//     age: 22,
//     course: "MERN Stack",
//     city: "New York",
//     image: "./src/assets/dzine-test.jpeg"
//   },
//   {
//     id: 2,
//     name: "Emily Davis",
//     age: 24,
//     course: "Data Science",
//     city: "San Francisco",
//     image: "./src/assets/student2-card.png"
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     age: 21,
//     course: "Cybersecurity",
//     city: "Chicago",
//     image: "./src/assets/dzine-test.jpeg"
//   },
//   {
//     id: 4,
//     name: "Sarah Wilson",
//     age: 23,
//     course: "UI/UX Design",
//     city: "Los Angeles",
//     image: "./src/assets/student2-card.png"
//   }
// ];

// const stats = [
// {
//     id: 1,
//     number: "500+",
//     title: "Students"
//   },
//   {
//     id: 2,
//     number: "25",
//     title: "Courses"
//   },
//   {
//     id: 3,
//     number: "50",
//     title: "Faculty"
//   },
//   {
//     id: 4,
//     number: "95%",
//     title: "Placement Rate"
//   }
// ];


// function App() {
  
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   return (
//     <>
//       <Header />
      
//       <Banner />

//        <About />


//        <section className="stats-section" id="achievements">
//           <div className="container">

//             <div className="section-heading">
//               <h2>Our Achievements</h2>
//               <p>
//                 Delivering quality education and helping students
//                 achieve their academic goals.
//               </p>
//             </div>

//             <div className="stats-grid">
//               {stats.map((stat) => (
//                 <div className="stat-card" key={stat.id}>
//                   <h3>{stat.number}</h3>
//                   <p>{stat.title}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </section>

//        <section className="cards-section" id="students">
//           <div className="container">
//             <div className="section-header">
//               <span className="section-subtitle">Student Directory</span>
//               <h2 className="section-title">Active Cohort Members</h2>
//               <p className="section-desc">
//                 Meet some of the global talent registered under our MERN, Data Science, and Design tracks.
//               </p>
//             </div>

//             <div className="student-cards">

//                 {students.map((student) => (

//                   <StudentCard
//                     key={student.id}
//                     name={student.name}
//                     age={student.age}
//                     course={student.course}
//                     city={student.city}

//                     onView={() =>
//                       setSelectedStudent(student)
//                     }
//                   />

//                 ))}

//               </div>
//               {
//                 selectedStudent && (

//               <div className="popup-overlay">

//                   <div className="popup">

//                       <button onClick={() => setSelectedStudent(null)}> X </button>

//                       <div className="left">
//                         <img src={selectedStudent.image} alt={selectedStudent.name} />
//                       </div>

//                       <div className="right">

//                         <h2>{selectedStudent.name}</h2>
//                         <p>Age: {selectedStudent.age}</p>
//                         <p>Course: {selectedStudent.course}</p>
//                         <p>City: {selectedStudent.city}</p>

//                       </div>

//                   </div>

//               </div>

//             )
//           }

//           </div>
//         </section>


//         <Subscription />

//           <Faq />

//           <Testimonials />
       

//           <Footer />

//     </>
//   )
// }

// export default App
