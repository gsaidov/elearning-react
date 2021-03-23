import React from "react";
import CourseDetails from "./CourseDetails";
import RenderReviews from "./RenderReviews";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function CourseInfo(props) {
  if (props.course) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/courses">Courses</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.course.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <CourseDetails course={props.course} />
        <RenderReviews reviews={props.reviews} />
      </>
    );
  } else {
    return <div />;
  }
}

export default CourseInfo;
