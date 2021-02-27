import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import CourseInfo from "./CourseInfoComponent";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCourse: null };
  }

  onCourseSelect(course) {
    this.setState({ selectedCourse: course });
  }

  render() {
    const directory = this.props.courses.map((course) => {
      return (
        <div key={course.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCourseSelect(course)}>
            <CardImg width="100%" src={course.image} alt={course.name} />
            <CardImgOverlay>
              <CardTitle>{course.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <>
        <div className="container">
          <div className="row">{directory}</div>
        </div>
        <CourseInfo course={this.state.selectedCourse} />
      </>
    );
  }
}

export default Courses;
