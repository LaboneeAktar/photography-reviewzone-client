import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const ReviewForm = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, title } = service;
  console.log(service);

  const handleSubmitReview = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmitReview}>
        <h2 className="text-2xl text-center py-5">
          Add Your Review of <strong> "{title}" </strong>
        </h2>

        <div className="bg-teal-300 p-10 lg:mx-16 mx-5 rounded-md mb-16">
          <fieldset className="lg:ml-[360px] my-5 space-y-1 dark:text-gray-100">
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none text-lg rounded-l-md bg-gray-300">
                Service Id
              </span>
              <input
                name="serviceid"
                type="text"
                placeholder=""
                defaultValue={_id}
                readOnly
                className="lg:w-96 w-full px-4 py-4 rounded-r-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>
          </fieldset>

          <div className="lg:flex lg:mx-auto">
            <fieldset className="lg:ml-24 space-y-1 dark:text-gray-100 mb-5 lg:mb-0">
              <div className="flex mx-auto">
                <span className="flex items-center px-3 pointer-events-none text-lg rounded-l-md bg-gray-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  defaultValue={user?.displayName}
                  className="lg:w-96 w-full px-4 py-4 rounded-r-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px] lg:mr-10"
                  required
                />
              </div>
            </fieldset>
            <fieldset className="space-y-1 dark:text-gray-100">
              <div className="flex">
                <span className="flex items-center px-3 pointer-events-none text-lg rounded-l-md bg-gray-300">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  defaultValue={user?.email}
                  readOnly
                  className="lg:w-96 w-full px-4 py-4 rounded-r-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                  required
                />
              </div>
            </fieldset>
          </div>
          <div className="mx-auto">
            <textarea
              id="review"
              placeholder="Write a Review"
              className="lg:w-[500px] w-full p-5 h-40 rounded-md dark:border-gray-700 dark:text-gray-900 mt-5 lg:mx-[350px]"
              required
            ></textarea>
          </div>
          <fieldset className="lg:ml-[360px] mt-5 space-y-1 dark:text-gray-100">
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none text-lg rounded-l-md bg-gray-300">
                Ratings
              </span>
              <input
                name="ratings"
                type="number"
                placeholder="Enter Ratings"
                className="lg:w-96 w-full px-4 py-4 rounded-r-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
              />
            </div>
          </fieldset>

          <button
            type="button"
            className="px-7 py-2 mt-5 text-[18px] font-normal border-2 hover:border-teal-500 rounded hover:text-white hover:bg-teal-600 border-teal-500 text-black dark:border-gray-100  dark:text-gray-100 lg:ml-[550px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
