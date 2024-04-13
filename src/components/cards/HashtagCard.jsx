import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import nodata from "../../assets/nodata.svg";
import { HashCard } from "./HashCard";
import { LeftBar } from "../../pages/Home";
import { ProfileLoading } from "../loading/ProfileLoading";
import { QuestionCard } from "../loading/QuestionCard";
import { FeedCard } from "./FeedCard";
import { useFetchPosts } from "../../hooks";
import { useParams } from "react-router-dom";

export const HashtagCard = () => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [ques, setQues] = useState(false);
  const [hash, setHash] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchHash = async () => {
      try {
        const response = await fetch(`${backendUrl}api/hashtags/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHash(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHash();
  }, []);
  console.log(hash);
  const no =
    "py-5 mr-1 sm:mr-3 lg:mr-10 dark:text-white transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary";
  const yes =
    "py-5 mr-1 sm:mr-3 lg:mr-10 dark:text-white transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary";
  //   const p = profile;

  const [sortedPosts, setSortedPosts] = useState([]);

  const {
    data: posts,
    loading,
    hasMoreData,
    setData,
    loadMore,
  } = useFetchPosts(`${backendUrl}api/posts/hashtag/${id}/`);

  const handleLoadMore = () => {
    loadMore();
  };

  useEffect(() => {
    if (posts) {
      // Sort the posts based on the difference between upvotes and downvotes
      const sorted = [...posts].sort((a, b) => {
        const scoreA = a.upvote.length - a.downvote.length;
        const scoreB = b.upvote.length - b.downvote.length;
        return scoreB - scoreA;
      });
      setSortedPosts(sorted);
    }
  }, [posts, ques]);
  console.log("posts", posts);
  return (
    <>
      <LeftBar />
      <div className="md:ml-[280px] mx-8">
        {hash != null ? (
          <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
            <div class="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
              <div class="flex flex-wrap mb-6 xl:flex-nowrap">
                <div class="mb-5 mr-5">
                  <div class="relative inline-block shrink-0 rounded-2xl">
                    {/* #ajkdfakjfkafjsk */}
                    <div class="inline-block shrink-0 p-4 rounded-2xl text-[50px] dark:text-white">
                      #
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
                          {hash && hash.name}{" "}
                        </a>
                      </div>
                      {/* <p className="dark:text-white">{p.bio}</p> */}
                    </div>
                    <div class="flex flex-wrap my-auto">
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
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <div class="flex flex-wrap items-center">
                      <a
                        href="javascript:void(0)"
                        class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                      >
                        {" "}
                        {hash.tags.length} tags{" "}
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                      >
                        {" "}
                        under {hash.organization.length} Universities{" "}
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                      >
                        {" "}
                        {hash.subscribers.length} Subscribers{" "}
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
                    Universities{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ProfileLoading />
        )}

        {!ques && (
          <div className="m-8">
            <div>
              {sortedPosts.length > 0 &&
                sortedPosts.map((post, index) => (
                  <FeedCard key={index} data={post} />
                ))}
              {/* // ) : ( //{" "}
            <div className="w-full flex justify-center items-center">
              //{" "}
              <div className="dark:text-white flex flex-col items-center  justify-center">
                // <img src={nodata} className="w-56" />
                // <p className="text-2xl">No data</p>
                //{" "}
              </div>
              //{" "}
            </div>
            // )} */}
            </div>
            {!loading && hasMoreData && (
              <div className="flex justify-center my-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLoadMore}
                >
                  {posts ? "Load More" : "Try again"}
                </button>
              </div>
            )}
            {loading && (
              <>
                {[...Array(15)].map((_, index) => (
                  <QuestionCard key={index} />
                ))}
              </>
            )}
          </div>
        )}

        {ques && hash && (
          <div className="m-8 flex flex-wrap gap-8">
            {hash.organization.map((o, index) => (
              <div
                key={index}
                class="max-w-sm bg-white border  flex flex-col items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg w-80 bg-cover self-center"
                    src={o.logo}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {o.name}
                    </h5>
                  </a>
                  <a
                    href="#"
                    class="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {o.address}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
