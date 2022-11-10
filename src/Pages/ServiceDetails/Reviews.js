import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`https://photography-reviewzone-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="text-xl text-center text-rose-700 p-10">No Reviews</h2>
      ) : (
        <>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </>
      )}
    </div>
  );
};

export default Reviews;
