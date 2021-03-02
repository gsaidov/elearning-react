import React from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row my-md-5 text-center">
        <div className="col">
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div className="row py-5 row-content align-items-center">
        <div className="col-sm-4">
          <h5>Our Office</h5>
          <address>
            1 Example Way
            <br />
            Some City, CA 94544
            <br />
            U.S.A.
          </address>
        </div>
        <div className="col">
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
        <div className="col-md-9 my-5">
          <p>
            If you are looking for frequently asked quesions and answers, please
            visite <Link to="#">Q&A</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
