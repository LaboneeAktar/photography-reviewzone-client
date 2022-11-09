import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, description, price, ratings } = service;
  return (
    <div>
      <PhotoProvider>
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100 bg-emerald-200 h-full">
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
              {description.slice(0, 100) + "..."}
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex justify-between items-center text-[20px]">
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
            <div className="flex space-x-2 text-sm dark:text-gray-400">
              <Link to={`/services/${_id}`}>
                <button
                  type="button"
                  className="px-2 py-2 text-[16px] font-normal border hover:border-rose-900 rounded hover:text-rose-900 hover:bg-green-200 bg-teal-500 border-teal-500 text-black dark:border-gray-100  dark:text-gray-100"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Service;
