import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCourseItem({ course }) {
  return (
    <Card>
      <Link to={`/courses/${course.id}`}>
        <CardImg width="100%" src={course.image} alt={course.name} />
        <CardImgOverlay>
          <CardTitle>{course.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Courses(props) {
  const directory = props.courses.map((course) => {
    return (
      <div key={course.id} className="col-md-5 m-1">
        <RenderCourseItem course={course} />
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    </>
  );
}

export default Courses;
