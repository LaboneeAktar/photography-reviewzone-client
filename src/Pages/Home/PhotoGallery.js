import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoGallery = () => {
  return (
    <div>
      <PhotoProvider>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <PhotoView src="https://i.ibb.co/wBPRsDv/73304042.jpg">
              <img
                src="https://i.ibb.co/wBPRsDv/73304042.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/ZGLqrD5/GMB-Akash-6.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/ZGLqrD5/GMB-Akash-6.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/nbwpyRq/ec1a82ff9412ae4bbbcec945fb46c39e-beautiful-sky-green-and-gold.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/nbwpyRq/ec1a82ff9412ae4bbbcec945fb46c39e-beautiful-sky-green-and-gold.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/3hNNVwY/1bcaba-43c578ce65a448949566b930e79b62b2-mv2.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/3hNNVwY/1bcaba-43c578ce65a448949566b930e79b62b2-mv2.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/022TkDq/amdad-hossain-bangladesh-photography-01.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/022TkDq/amdad-hossain-bangladesh-photography-01.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/QjWPsws/divya-naveen-00115.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/QjWPsws/divya-naveen-00115.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/FX3YTW8/Best-Wedding-Planner-in-BD-DHAKA-1024x640.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/FX3YTW8/Best-Wedding-Planner-in-BD-DHAKA-1024x640.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/jk6wRDR/apartment.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/jk6wRDR/apartment.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/RzXykxV/dhaka-bangladesh-river-port-Getty-Images-1151671490.jpg">
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/RzXykxV/dhaka-bangladesh-river-port-Getty-Images-1151671490.jpg"
              />
            </PhotoView>
            <PhotoView src="https://i.ibb.co/w0b6kKr/Clothing-Brands-in-Bangladesh-1200x900.jpg">
              <img
                src="https://i.ibb.co/w0b6kKr/Clothing-Brands-in-Bangladesh-1200x900.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
              />
            </PhotoView>
          </div>
        </section>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGallery;
