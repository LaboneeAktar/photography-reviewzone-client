import React from "react";

const BasicElement = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i0.wp.com/www.lightstalking.com/wp-content/uploads/2013/02/Sinulog2013_6902_0179-copy.jpg?w=580&ssl=1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-emerald-200">
              <h3 className="text-2xl font-bold">Light</h3>
              <p className="my-6 dark:text-gray-400">
                Light is the most fundamental element that all photographs need
                because it illuminates the scene or subject. Whether it be
                natural or artificial light the quality and direction of light
                is what's important.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://i0.wp.com/www.lightstalking.com/wp-content/uploads/mi-pham-ftzl-r-dzyk-unsplash-scaled.jpg?resize=768%2C512&ssl=1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-emerald-200">
              <h3 className="text-2xl font-bold">Color</h3>
              <p className="my-6 dark:text-gray-400">
                Color is one of the main factors responsible for making a photo
                feel mysterious, exciting, sad, or gloomy. Evoking emotions is
                important in creating strong images and color is one of our
                primary tools to do this. Again, this is an in-depth topic which
                this article will not go into, but be thoughtful that by using
                appropriate colors in our images we can better convey different
                emotions and make a stronger impact on the viewer.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i0.wp.com/www.lightstalking.com/wp-content/uploads/2013/02/Vietnam_4797_0775-copy.jpg?w=580&ssl=1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-emerald-200">
              <h3 className="text-2xl font-bold">Moment</h3>
              <p className="my-6 dark:text-gray-400">
                A strong moment is more than highlighting a particular subject
                or action in time. Creating a moment in a photograph should be
                about having all the elements in a frame come together as to
                tell a captivating story, when every part of the picture
                interacts with the other parts in a way that the viewer might
                think - wow this is special and probably doesn't happen that
                often.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://i0.wp.com/www.lightstalking.com/wp-content/uploads/2013/02/Mindanao_0989_4223-copy.jpg?w=580&ssl=1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-emerald-200">
              <h3 className="text-2xl font-bold">Composition</h3>
              <p className="my-6 dark:text-gray-400">
                Composition, in essence, is about putting together objects in
                your frame in such a way as to emphasize the parts you want to
                and make them stand out in a particular way. Composition can
                often be very subjective, but good composition can turn an
                ordinary scene into an image that grabs the viewers attention.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i0.wp.com/www.lightstalking.com/wp-content/uploads/2013/02/Palawan_7700_5741-copy.jpg?w=580&ssl=1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-emerald-200">
              <h3 className="text-2xl font-bold">
                Photographer's Choice Of Distance To Their Subject
              </h3>
              <p className="my-6 dark:text-gray-400">
                The distance the photographer chooses to be from their subject
                will affect the feeling and overall impact a photo has. It will
                also determine what focal length you need to shoot at in order
                to get all of the important parts of the photo into the frame.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasicElement;
