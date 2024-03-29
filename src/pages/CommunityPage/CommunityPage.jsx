import React, { useState } from "react";
import ppo from "../CommunityPage/pp.jpg";
import pp from "../CommunityPage/profile.jpg";
import comment from "../CommunityPage/comment.jpg";
import share from "../CommunityPage/share.jpg";
import image2 from "../CommunityPage/image2.jpg";
import image3 from "../CommunityPage/image3.jpg";

function CommunityPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [contentChanged, setContentChanged] = useState(false);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setContentChanged(true);
    // Set a timeout to remove the "Content Changed" message after 2 seconds
    setTimeout(() => setContentChanged(false), 2000);
  };

  return (
    <div className="text-black w-full mx-auto mt-4 pt-12">
      <div className="px-2 py-2 pt-2">
        <div className="flex mb-1">
          <div
            style={{ marginTop: "-100px" }}
            className="bg-slate-50  p-8 mt-4  w-full rounded-3xl flex items-end"
          >
            <img
              className="pt-2 w-64 h-64 rounded-full "
              src={pp}
              alt="profile"
            />
            <div className="ml-12 flex-3">
              <h1 className="text-xl font-bold">4 Subscribers</h1>
            </div>
            <div className="text-sm text-black mt-auto mx-auto my-auto items-center">
              <div className="text-2xl font-bold ml-12"> t/books</div>
              <div className="ml-4"> Since Tue Sep 03 2024</div>
              <div className="text-xl font-semibold">
                the number 1 forum on internet
              </div>
              <div className=" ml-6  font-semibold text-xl">7 points</div>
            </div>
            <div className="mb-4 flex items-center ml-auto">
              <h2 className="text-lg font-bold mr-auto">7 Comments</h2>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-xl p-4  w-full">
          <div className="bg-white rounded-xl p-8  w-full">
            <div className="shadow-2xl w-full mt-1 flex justify-around items-center px-4 py-2 rounded-xl">
              <button className="bg-blue-400 shadow-2xl text-white px-48 py-4 text-xl rounded-3xl ">
                Leave
              </button>

              <select className="rounded-lg py-1 bg-slate-50 w-24 px-24 text-xl">
                <option value="option1">More</option>
                <option value="option3">Option 1</option>
                <option value="option3">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="flex mt-6 bg-white text-xl font-semibold ">
            <div className=" ">
              <button
                className={`bg-white px-4 py-2 mr-2 ${
                  selectedFilter === "Today" && "bg-blue-400 text-white"
                }`}
                onClick={() => handleFilterChange("Today")}
              >
                Today
              </button>
              <button
                className={`bg-white px-4 py-2 mr-2 ${
                  selectedFilter === "Week" && "bg-blue-400 text-white"
                }`}
                onClick={() => handleFilterChange("Week")}
              >
                Week
              </button>
              <button
                className={`bg-white px-4 py-2 ${
                  selectedFilter === "Month" && "bg-blue-400 text-white"
                }`}
                onClick={() => handleFilterChange("Month")}
              >
                Month
              </button>
              <button
                className={`bg-white px-4 py-2 ml-2 ${
                  selectedFilter === "All" && "bg-blue-400 text-white"
                }`}
                onClick={() => handleFilterChange("All")}
              >
                All
              </button>
            </div>
            <div className="flex ml-auto">
              <button className="bg-white  px-4 py-2 ">Hot</button>
              <button className="bg-white px-4 py-2 ">New</button>
              <button className="bg-white  px-4 py-2 ">Top</button>
            </div>
          </div>

          {contentChanged && (
            <div className="mt-4 text-center text-red-500 font-bold">
              Content Changed
            </div>
          )}

          <div className="mt-6">
            {selectedFilter === "Today" && (
              <div className="bg-white p-6 rounded-3xl shadow-2xl  flex items-center mb-4">
                {/* Content for Today */}
              </div>
            )}
            {selectedFilter === "Week" && (
              <div className="bg-white p-6 rounded-3xl shadow-2xl  flex items-center mb-4">
                {/* Content for Week */}
              </div>
            )}
            {selectedFilter === "Month" && (
              <div className="bg-white p-6 rounded-3xl shadow-2xl  flex items-center mb-4">
                {/* Content for Month */}
              </div>
            )}
            {selectedFilter === "All" && (
              <div className="bg-white p-6 rounded-3xl  flex items-center mb-4">
                <div className="flex-1 ">
                  <div className="mt-6 w-full">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl  flex items-center mb-4">
                      <img
                        className=" h-48 w-64 mt-0 mr-4"
                        src={ppo}
                        alt="profile"
                      />
                      <div>
                        <p className="font-bold mt-2">Fiction is an illusion</p>
                        <div className="flex mt-36 ">
                          <p className="mt-4">By</p>
                          <p className="text-blue-500 ml-1 mt-4">u/reader2</p>
                          <p className="">
                            {" "}
                            <img
                              className="pt-2 mt-42 w-12 h-12 rounded-full ml-1 "
                              src={ppo}
                              alt="profile"
                            />
                          </p>
                          <p className="ml-1 mr-1 mt-4">in</p>
                          <p className="text-red-400 mt-4"> t/books</p>
                          <p>
                            {" "}
                            <img
                              className="pt-2 w-12 h-12 rounded-full "
                              src={pp}
                              alt="profile"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow "></div>
                      <div className="mr-64 text-s mt-48 text-gray-500">
                        <p>Tue Feb 05 2036 4:00:06PM</p>
                      </div>
                      <div className="ml-4 mr-32 space-x-2">
                        <div className="flex">
                          <img className="h-12 w-12" src={comment} alt="" />
                          <button className="text-2xl font-bold bg-white px-2 py-1 rounded">
                            758 comments
                          </button>
                        </div>
                        <br />
                        <div className="flex">
                          <img className="h-12 w-12 " src={share} alt="" />
                          <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                            share
                          </button>
                        </div>
                        <br />
                        <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                          ... more
                        </button>
                      </div>
                      <div className="mt-8">
                        <input
                          className="bg-white text-black shadow-2xl text-3xl font-bold rounded py-8 px-4 w-32 text-center"
                          type="number"
                          placeholder="1"
                          min="1"
                          max="20"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 w-full">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl  flex items-center mb-4">
                      <img
                        className=" h-48 w-64 mt-0 mr-4"
                        src={image3}
                        alt="profile"
                      />
                      <div>
                        <p className="font-bold mt-2">Fiction is an illusion</p>
                        <div className="flex mt-36 ">
                          <p className="mt-4">By</p>
                          <p className="text-blue-500 ml-1 mt-4">u/reader2</p>
                          <p className="">
                            {" "}
                            <img
                              className="pt-2 mt-42 w-12 h-12 rounded-full ml-1 "
                              src={ppo}
                              alt="profile"
                            />
                          </p>
                          <p className="ml-1 mr-1 mt-4">in</p>
                          <p className="text-red-400 mt-4"> t/books</p>
                          <p>
                            {" "}
                            <img
                              className="pt-2 w-12 h-12 rounded-full "
                              src={pp}
                              alt="profile"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow "></div>
                      <div className="mr-64 text-s mt-48 text-gray-500">
                        <p>Tue Feb 05 2036 4:00:06PM</p>
                      </div>
                      <div className="ml-4 mr-32 space-x-2">
                        <div className="flex">
                          <img className="h-12 w-12" src={comment} alt="" />
                          <button className="text-2xl font-bold bg-white px-2 py-1 rounded">
                            758 comments
                          </button>
                        </div>
                        <br />
                        <div className="flex">
                          <img className="h-12 w-12 " src={share} alt="" />
                          <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                            share
                          </button>
                        </div>
                        <br />
                        <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                          ... more
                        </button>
                      </div>
                      <div className="mt-8">
                        <input
                          className="bg-white text-black shadow-2xl text-3xl font-bold rounded py-8 px-4 w-32 text-center"
                          type="number"
                          placeholder="1"
                          min="1"
                          max="20"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <div className="bg-white p-6 rounded-3xl  shadow-2xl flex items-center mb-4">
                      <img
                        className=" h-48 w-64 mt-0 mr-4"
                        src={image2}
                        alt="profile"
                      />
                      <div>
                        <p className="font-bold mt-2">Fiction is an illusion</p>
                        <div className="flex mt-36 ">
                          <p className="mt-4">By</p>
                          <p className="text-blue-500 ml-1 mt-4">u/reader2</p>
                          <p className="">
                            {" "}
                            <img
                              className="pt-2 mt-42 w-12 h-12 rounded-full ml-1 "
                              src={ppo}
                              alt="profile"
                            />
                          </p>
                          <p className="ml-1 mr-1 mt-4">in</p>
                          <p className="text-red-400 mt-4"> t/books</p>
                          <p>
                            {" "}
                            <img
                              className="pt-2 w-12 h-12 rounded-full "
                              src={pp}
                              alt="profile"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow "></div>
                      <div className="mr-64 text-s mt-48 text-gray-500">
                        <p>Tue Feb 05 2036 4:00:06PM</p>
                      </div>
                      <div className="ml-4 mr-32 space-x-2">
                        <div className="flex">
                          <img className="h-12 w-12" src={comment} alt="" />
                          <button className="text-2xl font-bold bg-white px-2 py-1 rounded">
                            758 comments
                          </button>
                        </div>
                        <br />
                        <div className="flex">
                          <img className="h-12 w-12 " src={share} alt="" />
                          <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                            share
                          </button>
                        </div>
                        <br />
                        <button className="text-2xl border font-bold bg-white px-2 py-1 rounded">
                          ... more
                        </button>
                      </div>
                      <div className="mt-8">
                        <input
                          className="bg-white text-black shadow-2xl text-3xl font-bold rounded py-8 px-4 w-32 text-center"
                          type="number"
                          placeholder="1"
                          min="1"
                          max="20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                ;
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
