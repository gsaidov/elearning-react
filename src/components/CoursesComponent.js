import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCourse: null };
  }

  onCourseSelect(course) {
    this.setState({ selectedCourse: course });
  }

  renderSelectedCourse(course) {
    if (course) {
      return (
        <Card>
          <CardImg top src={course.image} alt={course.name} />
          <CardBody>
            <CardTitle className="font-weight-bold">{course.name}</CardTitle>
            <CardText>{course.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />; // in case selected course is null
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
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCourse(this.state.selectedCourse)}
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
