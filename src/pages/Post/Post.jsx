import { usePostDetail } from "../../hooks";
import { RelatedPost } from "./RelatedPost";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export const Post = () => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const { slug } = useParams();
  const { post } = usePostDetail(slug, backendUrl);
  const [main, setMain] = useState(false);
  console.log(post);
  return (
    <div className="flex gap-8 min-h-screen">
      {/* <RelatedPost /> */}
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  antialiased">
        {!main ? (
          <div className="flex flex-col gap-8 justify-center w-screen h-full items-center">
            <div className="relative flex justify-center items-center">
              <div
                className={`absolute ${
                  !post && "animate-spin"
                } rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500`}
              ></div>
              <img
                src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                className="rounded-full h-28 w-28"
              />
            </div>
            <h1 className="dark:text-white text-gray-700 text-2xl">
              {post && post.type === "error"
                ? "No data found"
                : post
                ? setMain(!main)
                : "Loading..."}
            </h1>
          </div>
        ) : (
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <div className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src={
                        post.owner.profile_pic
                          ? backendUrl + post.owner.profile_pic
                          : logo
                      }
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {post.owner.first_name} {post.owner.last_name}
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        @{post.owner.username}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time
                          pubdate
                          datetime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          {formatDistanceToNow(new Date(post.added_time), {
                            addSuffix: true,
                          })}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {post.name}
                </h1>
              </header>
              <p>{post.description}</p>
              {post && post.images.length > 0 && (
                <div className="flex flex-col bg-gray-200 dark:bg-gray-900 m-auto p-auto">
                  <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl dark:text-white text-gray-800">
                    Additional Images
                  </h1>
                  <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
                      {post.images.map((p, index) => (
                        <a
                          key={index}
                          href={p.images}
                          target="_blank"
                          className="inline-block px-3"
                        >
                          <img
                            src={p.images}
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
