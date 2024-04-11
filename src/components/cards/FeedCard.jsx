import React, { useContext, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../hooks";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const FeedCard = ({ data }) => {
  const { user, myprofile } = useContext(AuthContext);
  const [more, setMore] = useState(false);
  const addedDate = new Date(data.added_time);
  const timeAgo = formatDistanceToNow(addedDate, { addSuffix: true });
  const navigate = useNavigate();
  const [loading, setLoading] = useState([false, false, false, false, false]);
  const { upvote, downvote, save, clear } = usePost(data, backendUrl);
  const svg = (
    <svg
      aria-hidden="true"
      className="w-5 h-7 text-gray-200 animate-spin dark:text-white fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );

  const upvoteCall = async () => {
    if (user) {
      setLoading([true, false, false, false, false]);
      await upvote();
      setLoading([false, false, false, false, false]);
    } else {
      navigate("/login");
    }
  };
  const downvoteCall = async () => {
    if (user) {
      setLoading([false, true, false, false, false]);
      await downvote();
      setLoading([false, false, false, false, false]);
    } else {
      navigate("/login");
    }
  };
  const saveCall = async () => {
    if (user) {
      setLoading([false, false, true, false, false]);
      await save();
      setLoading([false, false, false, false, false]);
    } else {
      navigate("/login");
    }
  };
  const clearCall = async () => {
    if (user) {
      setLoading([false, false, false, false, true]);
      await clear();
      setLoading([false, false, false, false, false]);
    } else {
      navigate("/login");
    }
  };
  const report = () => {
    setLoading([false, false, false, true, false]);
    if (user) {
    } else {
      navigate("/login");
    }
  };
  const handleShare = async (event) => {};
  let mainclass = "";
  let clearButton = false;
  if (myprofile && data.downvote.indexOf(myprofile.id) !== -1) {
    mainclass =
      "mt-5 max-w-xs flex flex-col bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-red-500 dark:shadow-slate-700/[.7]       min-w-full hover:bg-gray-100 dark:hover:bg-gray-700";
    clearButton = true;
  } else if (myprofile && data.upvote.indexOf(myprofile.id) !== -1) {
    mainclass =
      "mt-5 max-w-xs flex flex-col bg-white border border-t-4 border-t-green-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-green-500 dark:shadow-slate-700/[.7]       min-w-full hover:bg-gray-100 dark:hover:bg-gray-700";
    clearButton = true;
  } else {
    mainclass =
      "mt-5 max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]       min-w-full hover:bg-gray-100 dark:hover:bg-gray-700";
    clearButton = false;
  }
  return (
    <div>
      <div className={mainclass}>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex flex-wrap justify-between text-center items-center gap-2">
            {data.name}
            {clearButton && (
              <span
                onClick={clearCall}
                class="bg-gray-100 cursor-pointer  text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
              >
                {loading[4] ? svg : "clear vote"}
              </span>
            )}
          </h3>
          <div className="flex gap-3 items-center p-2">
            <div className="flex flex-col items-center text-center justify-center dark:text-white">
              <button
                type="button"
                onClick={upvoteCall}
                className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-3  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {loading[0] ? (
                  svg
                ) : (
                  <i className="fa-solid fa-caret-up text-2xl"></i>
                )}
              </button>
              <b className="pr-2 pd-2">
                {data.upvote.length - data.downvote.length}
              </b>
              <button
                type="button"
                onClick={downvoteCall}
                className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {loading[1] ? (
                  svg
                ) : (
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                )}
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
              {loading[2] ? (
                svg
              ) : (
                <i
                  onClick={saveCall}
                  className="fa-regular fa-floppy-disk cursor-pointer text-2xl dark:text-white text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2"
                >
                  {data.saves.length > 0 && (
                    <span className="absolute top-[-6px] right-[-16px] -mt-2 -ml-2">
                      <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                        {data.saves.length}
                      </div>
                    </span>
                  )}
                </i>
              )}
              <i
                onClick={handleShare}
                className="fa-regular fa-share-from-square dark:text-white text-2xl text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2"
              >
                {/* <div
                  id="course-modal"
                  tabindex="-1"
                  aria-hidden="true"
                  class=" font-sans overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative p-4 w-full max-w-lg max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                      <div class="flex items-center justify-between p-4 md:p-5">
                        <h3 class="text-lg text-gray-500 dark:text-gray-400">
                          Share course
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white"
                          data-modal-toggle="course-modal"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div class="px-4 pb-4 md:px-5 md:pb-5">
                        <label
                          for="course-url"
                          class="text-sm font-medium text-gray-900 dark:text-white mb-2 block"
                        >
                          Share the course link below with your friends:
                        </label>
                        <div class="relative mb-4">
                          <input
                            id="course-url"
                            type="text"
                            class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="https://flowbite.com/docs/components/alerts/"
                            disabled
                            readonly
                          />
                          <button
                            data-copy-to-clipboard-target="course-url"
                            data-tooltip-target="tooltip-course-url"
                            class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                          >
                            <span id="default-icon-course-url">
                              <svg
                                class="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                              >
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                              </svg>
                            </span>
                            <span
                              id="success-icon-course-url"
                              class=" inline-flex items-center"
                            >
                              <svg
                                class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 5.917 5.724 10.5 15 1.5"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            id="tooltip-course-url"
                            role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                          >
                            <span id="default-tooltip-message-course-url">
                              Copy to clipboard
                            </span>
                            <span
                              id="success-tooltip-message-course-url"
                              class="hidden"
                            >
                              Copied!
                            </span>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-modal-hide="course-modal"
                          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </i>
              <i className=" cursor-pointer dark:text-white text-2xl text-gray-950 relative focus:outline-none font-medium rounded-lg text-center me-2 mb-2">
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
                        <button
                          type="button"
                          onClick={report}
                          className="w-full flex justify-center self-center text-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {loading[3] ? svg : "Report"}
                        </button>
                      </li>
                      {user &&
                        myprofile &&
                        myprofile.user_info.username ===
                          data.owner.username && (
                          <>
                            <li>
                              <button
                                type="button"
                                onClick={report}
                                className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                onClick={report}
                                className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Delete
                              </button>
                            </li>
                          </>
                        )}
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
    </div>
  );
};
