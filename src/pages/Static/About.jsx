import React from "react";
// import image from "../CommunityPage"

export const About = () => {
  return (
    <div>
      {/* <h1>abebe</h1> */}
      <main className="flex-col font-mono dark:text-white">
        <h1 className="flex mx-auto justify-center text-3xl ">About us </h1>
        <p>
          Team Alpha Students at Addis Ababa Sciense And Technology University{" "}
          <span> GDSC AASTU </span>
        </p>
      </main>
      <section>
        <div className="flex mx-auto dark:text-white mt-[10vh] rounded-lg overflow-hidden">
          <div className="flex flex-col w-[30vh] h-[10vh] shadow-lg">
            <h1>Lemisa Elias</h1>
            <img src="" alt="" />
            <p>Front End Lead</p>
          </div>
          <div className="flex flex-col w-[30vh] h-[10vh] shadow-lg">
            <h1>Leulseged Melaku</h1>
            <img src="" alt="" />
            <p>Back End Lead</p>
          </div>
          <div className="flex flex-col w-[30vh] ">
            <h1>Tsion Mihretu </h1>
            <img src="profile.jpg" alt="" />
            <p>Back End Dev</p>
          </div>
        </div>
        <div className="flex mx-auto dark:text-white h-[10vh]">
          <div className="flex flex-col w-[30vh]">
            <h1>Samual Keleb</h1>
            <img src="" alt="" />
            <p>Front End Dev</p>
          </div>
          <div className="flex flex-col w-[30vh]">
            <h1>Serdesiyon Tsegaye</h1>
            <img src="" alt="" />
            <p>Back End Dev</p>
          </div>
          <div className="flex flex-col w-[30vh]">
            <h1>Eden Belayneh </h1>
            <img src="" alt="" />
            <p>Back End Dev</p>
          </div>
        </div>
        <div className="flex mx-auto dark:text-white">
          <div className="flex flex-col w-[30vh]">
            <h1>Michael Workineh</h1>
            <img src="" alt="" />
            <p>Front End Dev</p>
          </div>
          <div className="flex flex-col w-[30vh]">
            <h1>Samrawit Osman</h1>
            <img src="" alt="" />
            <p>Front End Dev</p>
          </div>
          <div className="flex flex-col w-[30vh]">
            <h1>Ruth Tadese</h1>
            <img src="" alt="" />
            <p>Front End Dev</p>
          </div>
        </div>
      </section>
    </div>
  );
};
