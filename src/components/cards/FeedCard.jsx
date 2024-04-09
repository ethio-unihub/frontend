import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Logo from "../../assets/logo.png";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const FeedCard = ({ data }) => {
  // console.log(data);
  const [more, setMore] = useState(false);
  const addedDate = new Date(data.added_time);
  const timeAgo = formatDistanceToNow(addedDate, { addSuffix: true });

  return (
    <a href="#">
      <div className="mt-5 max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]       min-w-full hover:bg-gray-100 dark:hover:bg-gray-700">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {data.name}
          </h3>
          <div className="flex gap-3 items-center p-2">
            <div className="flex flex-col items-center text-center justify-center dark:text-white">
              <button
                type="button"
                className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-3  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <i className="fa-solid fa-caret-up text-2xl"></i>
              </button>
              <b className="pr-2 pd-2">
                {data.upvote_count - data.downvote_count}
              </b>
              <button
                type="button"
                className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </button>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {data.description.length >= 250
                ? data.description.substring(0, 250) + "..."
                : data.description}
              <div className="flex flex-wrap gap-2 p-2">
                {data.tags.map((tag) => (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {tag.name}
                  </span>
                ))}
              </div>
            </p>
            <div className="flex flex-col items-center text-center justify-cente dark:text-white">
              <i className="fa-regular fa-comments text-2xl dark:text-white text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2">
                {data.comments_count > 0 && (
                  <span className="absolute top-[-6px] right-[-16px] -mt-2 -ml-2">
                    <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                      {data.comments_count}
                    </div>
                  </span>
                )}
              </i>
              <i className="fa-regular fa-floppy-disk text-2xl dark:text-white text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2">
                {data.save_count > 0 && (
                  <span className="absolute top-[-6px] right-[-16px] -mt-2 -ml-2">
                    <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                      {data.save_count}
                    </div>
                  </span>
                )}
              </i>
              <i className="fa-regular fa-share-from-square dark:text-white text-2xl text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2"></i>
              <i className=" dark:text-white text-2xl text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2">
                <span
                  className="material-symbols-outlined"
                  onClick={() => setMore(!more)}
                >
                  more_vert
                </span>
                {more && (
                  <div
                    id="dropdownDots"
                    className="z-10 absolute bg-white divide-y font-sans divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </i>
            </div>
          </div>
          <div>
            <div className="flex items-center px-6">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    data.owner.prifle_pic
                      ? `${backendUrl}${data.owner.profile_pic}`
                      : Logo
                  }
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium  text-gray-900 truncate dark:text-white flex items-center gap-1">
                  {data.owner.first_name} {data.owner.last_name}
                </p>
                <p className="text-[13px] font-medium text-gray-900 truncate dark:text-white flex items-center gap-1">
                  @{data.owner.username}{" "}
                  {data.owner.verified && (
                    <span className="material-symbols-outlined">verified</span>
                  )}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {timeAgo}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <div className="grid gap-4 grid-cols-2 w-60 my-2.5">
                  {data.images.length > 0 && (
                    <div className="group relative">
                      <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-medium text-white">
                          +{data.images.length}
                        </span>
                        <div
                          id="download-image"
                          role="tooltip"
                          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                          Download image
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      </button>
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg"
                        className="rounded-lg"
                      />
                    </div>
                  )}

                  {data.video && (
                    <div className="group relative">
                      <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-medium text-white">
                          <i className="fa-solid fa-video"></i>
                        </span>
                        <div
                          id="download-image"
                          role="tooltip"
                          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                          Download image
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      </button>
                      <img
                        src="https://i.pinimg.com/736x/2c/c5/16/2cc5167ba9a3df40294330225292005e.jpg"
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
