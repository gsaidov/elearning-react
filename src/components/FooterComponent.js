import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="#">Q&A</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Partners</Link>
              </li>
              <li>
                <Link to="#">Guides</Link>
              </li>
              <li>
                <Link to="#">Developers</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Accessibility</Link>
              </li>
              <li>
                <Link to="#">Trademark</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
