import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCourse(course) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={course.image} alt={course.name} />
          <CardBody>
            <CardTitle className="font-weight-bold">{course.name}</CardTitle>
            <CardText>{course.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderSyllabus(course) {
    const parts = course.syllabus.map((part) => {
      return (
        <div key={part.id} className="row my-5 py-2">
          <div className="text-center text-md-left col-md-3 h2">
            Part {part.id + 1}{" "}
          </div>
          <div className="col-md-9 pb-3 border-bottom">
            <h3 className="font-weight-bold">{part.name}</h3>
            <p className="text-justify">{part.description}</p>
          </div>
        </div>
      );
    });
    return parts;
  }

  courseDetails(course) {
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-5 h2 course-name">
                <strong>{course.name}</strong>
              </div>
              <div className="col-md-2 ml-auto">
                Offered By:
                <br />
                {course.instructor}
              </div>
            </div>
            <div className="row">
              <div className="col h4 course-level">{course.level}</div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">{course.description}</div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <button className="btn btn-success">
                  <strong>Enroll</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <h3>
            <strong>About this Course</strong>
          </h3>
          <p className="py-3 text-justify">{course.about}</p>
          <h3>
            <strong>Syllabus: What You will Learn</strong>
          </h3>
          {this.renderSyllabus(this.props.course)}
        </div>
      </>
    );
  }

  render() {
    if (this.props.course) {
      return (
        <>
          {/* <div className="row">{this.renderCourse(this.props.course)}</div> */}
          {this.courseDetails(this.props.course)}
        </>
      );
    } else {
      return <div />;
    }
  }
}

export default CourseInfo;
