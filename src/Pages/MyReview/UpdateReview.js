import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const UpdateReview = () => {
  const router = useParams();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({});

  const { id } = router;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    fetch(`https://photography-reviewzone-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratings = form.ratings.value;
    const message = form.review.value;

    const review = {
      ratings,
      message,
    };

    fetch(`https://photography-reviewzone-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("reviewZone-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("Update Successfull");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="lg:mb-16 mb-5 lg:mt-10">
        <h2 className="text-center text-2xl">Update Your Review</h2>
        <div className="py-10 px-5 lg:pb-1">
          <div className="w-full max-w-3xl p-8 rounded-xl bg-teal-300 text-black mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="lg:flex lg:justify-between w-full lg:pt-5">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="name"
                    className="block text-black text-center text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={user?.displayName}
                    readOnly
                    placeholder="Enter Your Name"
                    className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black font-normal text-[16px] focus:border-violet-400"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="email"
                    className="block text-black text-center text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={review?.email}
                    readOnly
                    placeholder="Enter Your Email"
                    className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm text-center">
                <label htmlFor="ratings" className="block text-black text-lg">
                  Ratings
                </label>
                <input
                  type="ratings"
                  name="ratings"
                  id="ratings"
                  defaultValue={review.ratings}
                  placeholder="Enter Ratings"
                  className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px] text-center"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="review"
                  className="block text-black text-lg"
                ></label>
                <textarea
                  type="text"
                  name="review"
                  id="review"
                  placeholder="Write a Review"
                  defaultValue={review.message}
                  className="w-full h-40 rounded-md p-5 border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px]"
                  required
                />
              </div>

              <button className="lg:ml-[300px] block px-6 py-2 text-lg font-normal border border-black rounded text-black hover:bg-teal-500 hover:border-teal-500 dark:border-gray-100  dark:text-gray-100">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
