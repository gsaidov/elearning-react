import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col">
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div className="row py-5 row-content">
        <div className="col-md-6">
          <h5>Our Office</h5>
          <address>
            1 Example Way
            <br />
            Some City, CA 94544
            <br />
            U.S.A.
          </address>
        </div>
        <div className="col-md-6">
          <a role="button" className="btn btn-link" href="tel:+15555555555">
            <i className="fa fa-phone" /> 1-555-555-5555
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
          >
            <i className="fa fa-envelope-o" /> contact@elearning.com
          </a>
        </div>
        <div className="col-md-9 pt-3">
          <p>
            If you are looking for frequently asked quesions and answers, please
            visite <Link to="#">Q&A</Link>
          </p>
        </div>
      </div>
      <div className="row row-content pb-5 justify-content-center">
        <div className="col-12 text-center">
          <h2>Send us your Feedback</h2>
          <hr />
        </div>
        <div className="col-md-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
