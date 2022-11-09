import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginBgImage from "../../assets/images/loginbg.jpg";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, email, password, confirm, photoURL);
  };

  return (
    <div className="bg-emerald-200">
      <div className="lg:relative mb-16 hidden lg:block">
        <img
          src={loginBgImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-center text-4xl text-slate-300 p-10">
              Please Signup for More Information
            </h2>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 lg:pb-16 bg-emerald-200">
        <div className="w-full max-w-xl p-8 rounded-xl bg-gray-700 text-gray-100 mx-auto">
          <h1 className="text-2xl text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-200 text-lg">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-4 rounded-md border-gray-700 bg-gray-900 text-gray-100 font-normal text-[16px] focus:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photURL" className="block text-gray-200 text-lg">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photURL"
                placeholder="Enter PhotoURL"
                className="w-full px-4 py-4 rounded-md border-gray-700 bg-gray-900 text-gray-100 font-normal text-[16px] focus:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-200 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-4 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-200 text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-4 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="confirm" className="block text-gray-200 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm Your Password"
                className="w-full px-4 py-4 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>
            <button className="block w-full px-6 py-2 text-lg font-normal border rounded text-white hover:bg-teal-500 hover:border-teal-500 hover:text-black dark:border-gray-100  dark:text-gray-100">
              SignUp
            </button>
            <button className="flex items-center justify-center w-full px-6 py-2 text-lg font-normal border rounded text-white hover:bg-teal-500 hover:border-teal-500 hover:text-black">
              <FaGoogle className="mr-3 text-blue-500" /> SignUp With Google
            </button>
          </form>
          <p className="text-sm text-center sm:px-6 pt-5 text-slate-400">
            Already have an account?
            <span className="ml-2 text-teal-500 hover:underline">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
