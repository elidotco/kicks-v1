import React from "react";
import { ReviewCard } from "../components";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="title">
        <h3>Reviews</h3>
        <a className="primary-button">See All</a>
      </div>

      <div className="revs">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
