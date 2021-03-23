function RenderSyllabus({ course }) {
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

function CourseDetails({ course }) {
  return (
    <>
      <section className="details-header py-5">
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
      </section>
      <div className="container mt-3">
        <h3>
          <strong>About this Course</strong>
        </h3>
        <p className="py-3 text-justify">{course.about}</p>
        <h3>
          <strong>Syllabus: What You will Learn</strong>
        </h3>
        <RenderSyllabus course={course} />
      </div>
    </>
  );
}

export default CourseDetails;
