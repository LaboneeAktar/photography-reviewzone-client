import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceForHome = ({ service }) => {
  const { title, img, description, price, ratings } = service;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100 bg-cyan-300 h-full">
        <div>
          <img
            src={img}
            alt=""
            className="w-full mb-4 rounded-lg dark:bg-gray-500"
          />
          <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
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
            <p className="flex items-center ml-9">
              <span className="mr-2 text-yellow-500">
                {" "}
                <FaStar />
              </span>{" "}
              {ratings}
            </p>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-400">
            <button
              type="button"
              className="px-2 py-2 text-[16px] font-normal border border-rose-900 rounded text-rose-900 hover:bg-teal-500 hover:border-teal-500 hover:text-black dark:border-gray-100  dark:text-gray-100"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForHome;
