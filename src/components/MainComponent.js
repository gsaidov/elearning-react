import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Courses from "./CoursesComponent";
import { COURSES } from "../shared/courses";
import { REVIEWS } from "../shared/reviews";
import CourseInfo from "./CourseInfoComponent";
import Contact from "./Contact";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
      reviews: REVIEWS,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    const CourseWithId = () => {
      let { courseId } = useParams();
      return (
        <CourseInfo
          course={
            this.state.courses.filter((course) => course.id === +courseId)[0]
          }
          reviews={this.state.reviews.filter(
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
            render={() => <Courses courses={this.state.courses} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route path="/courses/:courseId" component={CourseWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
