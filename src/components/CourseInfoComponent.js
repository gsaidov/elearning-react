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
          <div className="col-md-3 h2 ">Part {part.id} </div>
          <div className="col-md-9 text-justify py-3 border-bottom">
            <h3 className="font-weight-bold">{part.name}</h3>
            {part.description}
          </div>
        </div>
      );
    });
    return parts;
  }

  courseDetails(course) {
    return (
      <>
        <div className="container details-header">
          <div className="row pt-3 ">
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
              <button className="btn btn-success my-4">
                <strong>Enroll</strong>
              </button>
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
          <div className="container">
            {this.renderSyllabus(this.props.course)}
          </div>
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
