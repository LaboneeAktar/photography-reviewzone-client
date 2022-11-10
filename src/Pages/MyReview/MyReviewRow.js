import React from "react";
import { Link } from "react-router-dom";

const MyReviewRow = ({ myreview, handleDelete }) => {
  const { _id, serviceName, ratings, message } = myreview;

  return (
    <div>
      <div>
        <div className="container p-2 mx-auto sm:p-4 text-gray-200 max-w-6xl">
          <div className="overflow-x-auto">
            <table className="min-w-full w-96">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-600">
                <tr className="text-center">
                  <th className="p-3 font-normal text-xl">Service Name</th>
                  <th className="p-3 font-normal text-xl">Review</th>
                  <th className="p-3 font-normal text-xl">Ratings</th>
                  <th className="p-3 font-normal text-xl text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-black bg-teal-300 text-black">
                  <td className="p-3 text-[16px] text-center">
                    <p>{serviceName}</p>
                  </td>
                  <td className="p-3 text-[16px] w-80">
                    <p>{message}</p>
                  </td>
                  <td className="p-3 text-[16px] text-center">
                    <p>{ratings}</p>
                  </td>
                  <td className="lg:ml-5 lg:mr-0 text-[16px] text-center">
                    <Link to={`/reviews/myreviews/edit/${_id}`}>
                      <button
                        type="button"
                        className="px-3 py-3 text-[16px] font-normal border hover:border-rose-900 rounded hover:text-rose-900 hover:bg-teal-300 bg-teal-500 border-teal-500 text-black dark:border-gray-100  dark:text-gray-100"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(_id)}
                      type="button"
                      className="lg:ml-10 px-3 py-3 text-[16px] font-normal border hover:border-rose-900 rounded hover:text-rose-900 hover:bg-teal-300 bg-teal-500 border-teal-500 text-black dark:border-gray-100  dark:text-gray-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewRow;
