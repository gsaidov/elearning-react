import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <section className="container home py-5">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h1 className="col font-weight-bold">
              Learning for anyone, anywhere
            </h1>
            <div className="col py-5">
              Achieve new skills with courses, certificates online from
              world-class instructors and companies.
            </div>
          </div>
          <div className="col-md-4 d-none d-sm-block">
            <img
              src="assets/images/home1.jpg"
              className="img-fluid img-thumbnail"
              alt="Home page"
            />
          </div>
        </div>
        <Link
          to="/signup"
          className="btn btn-primary btn-lg font-weight-bold px-5 border"
        >
          Join Here
        </Link>
      </section>
      <section className="home home-2 py-5 text-white text-center">
        <div className="container ">
          <div className="col home-2-text py-md-5">
            <div className="col pb-5">
              <h3>For Learners</h3>
              Boost your career by taking a course, or expand your knowledge at
              any level.
            </div>
            <div className="col pb-5">
              <h3>For Instructors</h3>
              Teach your students and build a culture of learning.
            </div>
            <div className="col">
              <h3>For Businesses</h3>
              Train your employees without physically meeting.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
