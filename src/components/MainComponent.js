import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Courses from "./CoursesComponent";
import { COURSES } from "../shared/courses";
import CourseInfo from "./CourseInfoComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
      selectedCourse: null,
    };
  }

  onCourseSelect(courseId) {
    this.setState({ selectedCourse: courseId });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    console.log(this.state.selectedCourse);

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/courses"
            render={() => (
              <Courses
                courses={this.state.courses}
                onClick={(courseId) => this.onCourseSelect(courseId)}
              />
            )}
          />
          <Route
            path="/courses:courseId"
            render={() => (
              <CourseInfo
                course={
                  this.state.courses.filter(
                    (course) => course.id === this.state.selectedCourse
                  )[0]
                }
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
