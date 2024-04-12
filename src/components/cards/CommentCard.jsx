import React, { useState } from "react";

export const CommentCard = () => {
  const [modal, setModal] = useState(false);
  const [full, setFull] = useState(false);
  return (
    <>
      {/* First Comment */}
      <div className="flex flex-col gap-8 py-6 max-w-[700px] dark:border-white border-gray-700 border-l-4 pl-6 sm:flex-row sm:items-start sm:gap-2.5">
        <div className="flex flex-col items-center text-center justify-center dark:text-white">
          <button
            type="button"
            // onClick={upvoteCall}
            className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-3  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-caret-up text-2xl"></i>
          </button>
          <b className="pr-2 pd-2">0</b>
          <button
            type="button"
            // onClick={downvoteCall}
            className="text-white p-0  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-caret-down text-2xl"></i>
          </button>
        </div>
        <img
          className="h-8 w-8 rounded-full"
          onMouseOut={() => setModal(false)}
          onMouseOver={() => setModal(true)}
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Jese image"
        />
        {modal && (
          <div
            data-popover
            id="popover-user-profile"
            role="tooltip"
            class="absolute z-0 mt-[-150px] ml-12 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
          >
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <a href="#">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese Leos"
                  />
                </a>
                <div></div>
              </div>
              <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </p>
              <p class="mb-3 text-sm font-normal">
                <a href="#" class="hover:underline">
                  @jeseleos
                </a>
              </p>
              <ul class="flex text-sm">
                <li class="me-2">
                  <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">
                      799
                    </span>
                    <span>Following</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">
                      3,758
                    </span>
                    <span>Followers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div data-popper-arrow></div>
          </div>
        )}
        <div className="flex flex-col gap-2.5 w-full relative">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque aut temporibus porro dolor magnam pariatur iusto ipsam
              quaerat nam magni?
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div className="leading-1.5 flex w-full max-w-[320px] flex-col">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              This is the new office{" "}
            </p>
          </div>
          <div className="flex gap-8">
            <span className="text-sm cursor-pointer font-normal text-gray-500 dark:text-gray-400">
              Reply
            </span>
            <span className="text-sm cursor-pointer font-normal text-gray-500 dark:text-gray-400">
              Delete
            </span>
          </div>
        </div>
        <svg
          className="absolute left-0 h-full w-1 text-gray-600 dark:text-gray-400"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L100 50 L0 100" fill="none" />
        </svg>
      </div>
    </>
  );
};
