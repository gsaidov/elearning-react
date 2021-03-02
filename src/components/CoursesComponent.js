import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderCourseItem({ course }) {
  return (
    <Card>
      <CardImg width="100%" src={course.image} alt={course.name} />
      <CardImgOverlay>
        <CardTitle>{course.name}</CardTitle>
      </CardImgOverlay>
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
