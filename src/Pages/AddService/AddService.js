import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const service = {
      title: name,
      img: photo,
      ratings,
      price,
      description,
    };

    fetch("https://photography-reviewzone-server.vercel.app/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Add Successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="lg:relative lg:block hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-center text-4xl text-slate-300 p-10">
              Add Photography Service
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:mb-16 mb-5 lg:mt-5">
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
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Service Name"
                    className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black font-normal text-[16px] focus:border-violet-400"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="photURL"
                    className="block text-black text-lg text-center"
                  >
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photURL"
                    placeholder="Enter PhotoURL"
                    className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black font-normal text-[16px] focus:border-violet-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm text-center">
                <label htmlFor="price" className="block text-black text-lg">
                  Price
                </label>
                <input
                  type="price"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                  className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px] text-center"
                  required
                />
              </div>
              <div className="space-y-1 text-sm text-center">
                <label htmlFor="ratings" className="block text-black text-lg">
                  Ratings
                </label>
                <input
                  type="ratings"
                  name="ratings"
                  id="ratings"
                  placeholder="Enter Ratings"
                  className="lg:w-80 w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px] text-center"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="description"
                  className="block text-black text-lg"
                ></label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Write a Description"
                  className="w-full h-40 rounded-md p-5 border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px]"
                  required
                />
              </div>

              <button className="lg:ml-[300px] block px-6 py-2 text-lg font-normal border border-black rounded text-black hover:bg-teal-500 hover:border-teal-500 dark:border-gray-100  dark:text-gray-100">
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
