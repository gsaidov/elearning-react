import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderCourse(course) {
  //   return (
  //     <div className="col-md-5 m-1">
  //       <Card>
  //         <CardImg top src={course.image} alt={course.name} />
  //         <CardBody>
  //           <CardTitle className="font-weight-bold">{course.name}</CardTitle>
  //           <CardText>{course.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   );
  // }

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

  renderStars(num) {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push("fa fa-star");
    }
    if (num < 5) {
      for (let i = 0; i < 5 - num; i++) {
        stars.push("fa fa-star-o");
      }
    }
    return stars.map((star, index) => {
      return <i key={index} className={star}></i>;
    });
  }

  renderReviews(reviews) {
    const ratings = reviews.map((review) => review.rating);
    const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    if (reviews) {
      return (
        <div className="jumbotron reviews">
          <div className="container">
            <h4 className="font-weight-bold pb-3">Reviews</h4>
            <div className="row">
              <div className="col-md-3">
                <p>
                  <span className="h3 font-weight-bold">{averageRating}</span>
                  {" - "}
                  {reviews.length} reviews
                </p>
              </div>
              <div className="col-md-9">
                {reviews.map((review) => {
                  return (
                    <div key={review.id} className="row mb-4">
                      <div className="col">
                        {this.renderStars(review.rating)}
                        <br />
                        {review.text}
                        <br />
                        <br />
                        <i>by </i>
                        {review.author}
                        <br />
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(review.date)))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
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
          {/* {this.renderReviews(this.props.course.reviews)} */}
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
          {this.renderReviews(this.props.course.reviews)}
        </>
      );
    } else {
      return <div />;
    }
  }
}

export default CourseInfo;
