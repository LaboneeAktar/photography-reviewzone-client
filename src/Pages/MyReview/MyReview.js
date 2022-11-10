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
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("One Review is Deleted");
            setRefresh(!refresh);
          }
        });
    }
  };

  return (
    <div className="mb-16">
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
