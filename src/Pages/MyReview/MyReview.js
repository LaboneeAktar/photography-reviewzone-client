import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  useTitle("My Review");
  const { user, logOut } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(
      `https://photography-reviewzone-server.vercel.app/reviews/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("reviewZone-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setMyreviews(data));
  }, [user?.email, refresh, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure to Delete This?");
    if (proceed) {
      fetch(
        `https://photography-reviewzone-server.vercel.app/reviews/myreviews/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("reviewZone-token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.error("One Review is Deleted");
            setRefresh(!refresh);
          }
        });
    }
  };

  return (
    <div className="mb-16">
      <div className="lg:relative lg:block hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/169/714/original/online-feedback-reputation-best-quality-customer-review-concept-flat-style-businessman-hand-finger-pointing-five-gold-star-rating-on-gradient-background-illustration-vector.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-center text-4xl text-slate-300 p-10">
              Reviews & Ratings
            </h2>
          </div>
        </div>
      </div>

      <h1 className="text-2xl text-center p-10">
        You have {myreviews.length} Reviews
      </h1>

      {myreviews.map((myreview) => (
        <MyReviewRow
          key={myreview._id}
          myreview={myreview}
          handleDelete={handleDelete}
        ></MyReviewRow>
      ))}
    </div>
  );
};

export default MyReview;
