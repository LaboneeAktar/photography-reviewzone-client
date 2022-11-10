import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Service from "../Service/Service";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="lg:relative mb-16 lg:block hidden">
        <img
          src="https://i.ibb.co/zNG50MC/red-forest-trees-path-2560x1080.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-center text-4xl text-slate-300 p-10">
              All Photography Services
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-5 lg:mx-16 mb-16 pt-6 lg:pt-0">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
