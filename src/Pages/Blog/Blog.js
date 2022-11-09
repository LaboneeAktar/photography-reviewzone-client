import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              SQL vs NoSQL
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              Write Down the Differences Between SQL and NoSQL.{" "}
            </h2>
            <p className="mt-2">
              Cross-origin resource sharing (CORS) is a browser mechanism which
              enables controlled access to resources located outside of a given
              domain. It extends and adds flexibility to the same-origin policy
              (SOP). However, it also provides potential for cross-domain
              attacks, if a website's CORS policy is poorly configured and
              implemented. CORS is not a protection against cross-origin attacks
              such as cross-site request forgery (CSRF).
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              JWT
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is JWT? How does it work?
            </h2>
            <h3 className="mt-2">
              JWT or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br /> <br />
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
              <p className="pl-10 pt-4">
                1. User sign-in using username and password or google/facebook.
              </p>
              <p className="pl-10">
                2. Authentication server verifies the credentials and issues a
                jwt signed using either a secret salt or a private key.
              </p>
              <p className="pl-10">
                {" "}
                3. User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </p>
              <p className="pl-10">
                {" "}
                4. Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </p>
            </h3>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              JavaScript vs NodeJS
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is the Differences Between JavaScript & NodeJS?
            </h2>
            <p className="mt-2">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
            <p className="pt-5">Example:</p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              NodeJS
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              How does NodeJS handle multiple request at the same time?
            </h2>
            <h3 className="mt-2">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
