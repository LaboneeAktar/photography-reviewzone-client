import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/banner.gif";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import PhotoGallery from "./PhotoGallery";
import BasicElement from "./BasicElement";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-reviewzone-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(services);
  return (
    <div>
      <section>
        <div className="dark:bg-violet-400 bg-emerald-300">
          <div className="container flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-56 md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-xl font-bold leading-none lg:text-3xl dark:text-gray-900">
              Get All Services & Give Your Review Here!!
            </h1>
            <p className="mt-6 mb-5 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Enjoy your favourite type of pictures and give more reviews to
              encourage. Your review can give a bit of clarity to make a
              decision. Do a favour by writing a few words about your
              experience...
            </p>
            <div className="flex justify-between">
              <button
                type="button"
                className="flex justify-between items-center px-4 py-3 m-2 text-lg border border-gray-800 rounded bg-gray-800 text-white dark:border-gray-700 dark:text-gray-900 hover:bg-teal-700 hover:border-teal-500 "
              >
                <p>Let's Start</p>
                <p className="pl-3">
                  <FaArrowRight />
                </p>
              </button>
            </div>
          </div>
        </div>
        <PhotoProvider>
          <PhotoView src={bannerImg}>
            <img
              src={bannerImg}
              alt=""
              className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
            />
          </PhotoView>
        </PhotoProvider>
      </section>
      <section>
        <h1 className="text-center text-3xl pt-4 pb-6 font-semibold text-black">
          Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-5 lg:mx-16 mb-8">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services">
            <button
              type="button"
              className="px-5 py-2 m-2 text-lg border border-gray-800 rounded bg-gray-800 text-white dark:border-gray-700 dark:text-gray-900 hover:bg-teal-500 hover:text-black hover:border-teal-500"
            >
              Show All
            </button>
          </Link>
        </div>
        <section>
          <h1 className="text-center text-3xl pt-16 pb-1 font-semibold text-black">
            Basic Elements of Photography
          </h1>
          <p className="text-lg text-center pb-5">
            Here are 5 Fundamental Elements of Photography.
          </p>
          <BasicElement></BasicElement>
        </section>
      </section>
      <section>
        <h1 className="text-center text-3xl pt-14 pb-1 font-semibold text-black">
          Photo Gallery
        </h1>
        <PhotoGallery></PhotoGallery>
      </section>
    </div>
  );
};

export default Home;
