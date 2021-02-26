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

  render() {
    if (this.props.course) {
      return <div className="row">{this.renderCourse(this.props.course)}</div>;
    } else {
      return <div />;
    }
  }
}

export default CourseInfo;
