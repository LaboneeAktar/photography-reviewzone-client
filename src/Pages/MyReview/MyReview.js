import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  useTitle("My Review");
  const { user } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://photography-reviewzone-server.vercel.app/reviews/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);

  return (
    <div className="mb-16">
      <h1 className="text-2xl text-center p-10">
        You have {myreviews.length} Reviews
      </h1>

      {myreviews.map((myreview) => (
        <MyReviewRow key={myreview._id} myreview={myreview}></MyReviewRow>
      ))}
    </div>
  );
};

export default MyReview;
