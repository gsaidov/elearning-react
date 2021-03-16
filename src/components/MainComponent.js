import React from "react";
import Header from "./HeaderComponent";
import Login from "./Login";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Courses from "./CoursesComponent";
// import { COURSES } from "../shared/courses";
// import { REVIEWS } from "../shared/reviews";
import CourseInfo from "./CourseInfoComponent";
import Contact from "./Contact";
import About from "./About";
import Signup from "./Signup";
import {
  Switch,
  Route,
  Redirect,
  useParams,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    reviews: state.reviews,
  };
};

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     courses: COURSES,
  //     reviews: REVIEWS,
  //   };
  // }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    const CourseWithId = () => {
      let { courseId } = useParams();
      return (
        <CourseInfo
          course={
            this.props.courses.filter((course) => course.id === +courseId)[0]
          }
          reviews={this.props.reviews.filter(
            (review) => review.courseId === +courseId
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/courses"
            render={() => <Courses courses={this.props.courses} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route path="/courses/:courseId" component={CourseWithId} />
          <Route path="/signup" component={Signup} />
          <Route path="/about">
            <About />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
