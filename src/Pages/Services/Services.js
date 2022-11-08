import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const loaderData = useLoaderData();
  const services = loaderData.data;
  return (
    <div>
      <h1 className="text-center text-3xl p-10 font-semibold text-black">
        All Photography Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-5 lg:mx-16 mb-8">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
