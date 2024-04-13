import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import nodata from "../../assets/nodata.svg";
import { HashCard } from "./HashCard";
import { QuestionCard } from "../loading/QuestionCard";
import { FeedCard } from "./FeedCard";
import { useFetchPosts } from "../../hooks";

export const HashtagCard = ({ rank = 2 }) => {
  const [ques, setQues] = useState(true);
  const [sortedPosts, setSortedPosts] = useState([]);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const no =
    "py-5 mr-1 sm:mr-3 lg:mr-10 dark:text-white transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary";
  const yes =
    "py-5 mr-1 sm:mr-3 lg:mr-10 dark:text-white transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary";
//   const p = profile;

  return (
    <>
      <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
        <div class="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div class="flex flex-wrap mb-6 xl:flex-nowrap">
            <div class="mb-5 mr-5">
              <div class="relative inline-block shrink-0 rounded-2xl">
                {/* #ajkdfakjfkafjsk */}
                <div class="group/tooltip relative">
                  <span class="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
                  <span class="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                    {" "}
                    Status: Active{" "}
                  </span>
                </div>
              </div>
            </div>
            <div class="grow">
              <div class="flex flex-wrap items-start justify-between mb-2">
                <div class="flex flex-col">
                  <div class="flex items-center mb-2">
                    <a
                      class="text-secondary-inverse dark:text-white hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                      href="javascript:void(0)"
                    >
                      {" "}
                      {/* {p.user_info.first_name} {p.user_info.last_name}{" "} */}
                    </a>
                  </div>
                  <div class="flex flex-wrap pr-2 mb-4 font-medium">
                    <a
                      class="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary dark:text-white"
                      href="javascript:void(0)"
                    >
                      <span class="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>{" "}
                      Rank: {rank}{" "}
                    </a>
                    <a
                      class="flex items-center mb-2 mr-5 text-secondary-dark dark:text-white hover:text-primary"
                      href={`mailto:${p.user_info.email}`}
                      target="_blank"
                    >
                      <span class="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </span>{" "}
                      {/* {p.user_info.email}{" "} */}
                    </a>
                  </div>
                  <p className="dark:text-white">{p.bio}</p>
                </div>
                {/* <div class="flex flex-wrap my-auto">
                <a
                  href="javascript:void(0)"
                  class="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark "
                >
                  {" "}
                  Follow{" "}
                </a>
                <a
                  href="javascript:void(0)"
                  class="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                >
                  {" "}
                  Hire{" "}
                </a>
              </div> */}
              </div>
              <div class="flex flex-wrap justify-between">
                <div class="flex flex-wrap items-center">
                  <a
                    href="javascript:void(0)"
                    class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    {/* {p.net_vote} Votes{" "} */}
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    {/* @{p.user_info.username}{" "} */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr class="w-full h-px border-neutral-200" />
          <ul
            nav-tabs
            class="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments"
          >
            <li class="flex mt-2 -mb-[2px]">
              <button
                type="button"
                onClick={() => setQues(false)}
                aria-controls="summary"
                class={!ques ? yes : no}
                href="javascript:void(0)"
              >
                {" "}
                Questions{" "}
              </button>
            </li>
            <li class="flex mt-2 -mb-[2px]">
              <button
                type="button"
                onClick={() => setQues(true)}
                aria-controls="assignments"
                class={ques ? yes : no}
                href="javascript:void(0)"
              >
                {" "}
                Hashtags{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
