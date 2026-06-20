import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <>
      <Header />

      <section className="notfound">

        <div className="notfound-container">

          <h1 className="error-code">
            404
          </h1>

          <h2>
            Page Not Found
          </h2>

          <p>
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="home-btn">
            Go Back Home
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default NotFound;