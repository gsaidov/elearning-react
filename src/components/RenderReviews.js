function RenderStars({ num }) {
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

function RenderReviews({ reviews }) {
  const ratings = reviews.map((review) => review.rating);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  if (reviews) {
    return (
      <section className="reviews mb-0">
        <div className="container">
          <h4 className="font-weight-bold py-3">Reviews</h4>
          <div className="row">
            <div className="col-md-4">
              <p>
                <span className="h3 font-weight-bold">{averageRating}</span>
                {" - "}
                {reviews.length} reviews
              </p>
            </div>
            <div className="col-md-8">
              {reviews.map((review) => {
                return (
                  <div key={review.id} className="row mb-4">
                    <div className="col">
                      <RenderStars num={review.rating} />
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
      </section>
    );
  }
  return <div />;
}

export default RenderReviews;
