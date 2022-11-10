import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar } from "react-icons/fa";
import bgImage from "../../assets/images/bg2.jpg";
import ReviewForm from "./ReviewForm";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, img, description, price, ratings } = service;
  console.log(service);
  return (
    <div>
      <div className="lg:relative mb-10 lg:block hidden">
        <img
          src={bgImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-center text-4xl text-slate-300 p-10">
              Photography Service Details <br /> & Reviews
            </h2>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center pt-7 pb-7">Details of {title}</h1>
      <PhotoProvider>
        <div className="flex flex-col max-w-3xl lg:mx-auto mx-5 mb-1 p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100 bg-emerald-200 h-full">
          <div>
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className="w-full mb-4 rounded-lg dark:bg-gray-500"
              />
            </PhotoView>
            <h2 className="mb-3 text-xl lg:text-2xl font-semibold">{title}</h2>
            <p className="text-lg text-justify dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center text-[22px]">
            <p>
              <strong>Price :</strong>{" "}
              <span className="text-rose-900">{price}K</span>
            </p>
            <p className="flex items-center ml-3 lg:ml-9">
              <span className="mr-2 text-yellow-500">
                {" "}
                <FaStar />
              </span>{" "}
              {ratings}
            </p>
          </div>
        </div>
      </PhotoProvider>
      <section>
        <h1 className="text-3xl text-center mt-16 lg:pb-10 pb-5">Reviews</h1>

        {user?.uid || user?.email ? (
          <div>
            <div>
              <Review service={service}></Review>
            </div>
            <div>
              <ReviewForm service={service}></ReviewForm>
            </div>
          </div>
        ) : (
          <h2 className="text-xl text-rose-700 text-center m-10">
            Please Login to Add a Review.{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </h2>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
