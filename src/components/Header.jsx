import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export function Header() {
    return (
      <nav className="flex justify-between items-center mx-1 h-16 md:p-5">
        <img src={Logo} className="w-6 h-6"/>
        <div className="flex items-center md:space-x-10">
          <div className="list-none hidden md:flex space-x-10 justify-center items-center  text-gray-600 fill-current">
            <NavLink to="/home" className="group flex space-x-1 group cursor-pointer">
              <h2 className="font-semibold group-hover:text-theme-orange">Home</h2>
            </NavLink>
            <NavLink to="/popular" className="group flex space-x-1 group cursor-pointer">
              {/* <Svg type="popular" className="w-6 h-6" /> */}
              <h2 className="font-semibold group-hover:text-theme-orange">Popular</h2>
            </NavLink>
            <NavLink to="/all" className="group flex space-x-1 group cursor-pointer">
              {/* <Svg type="all" className="w-6 h-6" /> */}
              <h2 className="font-semibold group-hover:text-theme-orange">All</h2>
            </NavLink>
          </div>
          {/* Assuming ThreadSearch component is used here */}
          {/* <ThreadSearch /> */}
        </div>
        <div className="flex items-center md:space-x-6">
          {/* Assuming authentication related links */}
          <NavLink to="/saved" className="text-theme-orange">
            {/* <Svg type="save" className="w-6 h-6 md:block" /> */}
          </NavLink>
          <NavLink to="/inbox" className="text-theme-orange">
            {/* <Svg type="message" className="w-6 h-6 md:block" /> */}
          </NavLink>
          {/* Assuming user profile related links */}
          {/* <Link to="/" className="hidden md:flex items-center space-x-2 bg-theme-cultured rounded-3xl pr-3 py-0.5">
            <img loading="lazy" width="auto" height="100%" src={user.avatar || avatar} className="object-cover w-10 h-10 rounded-full duration-500 cursor-pointer hover:scale-125 md:block" />
            <div className="text-sm font-semibold md:block">
              <p className="text-gray-700">{user.username}</p>
              <p className="text-gray-500 truncate">karma: {user.karma.user_karma}</p>
            </div>
          </Link> */}
          {/* Assuming logout button */}
          {/* <button onClick={logout} className="hidden flex-col items-center md:flex"> */}
            {/* <Svg type="circle-logout" className="w-6 h-6 duration-300 rotate-180 md:block hover:scale-110" /> */}
            {/* <span className="text-sm font-semibold">Logout</span>
          </button> */}
          {/* Assuming select dropdown for smaller screens */}
          <select name="page" id="page" className="px-1 py-3 mr-1 text-center rounded-md md:hidden bg-theme-cultured">
            <optgroup label="Feeds">
              <option value="/home">Home</option>
              <option value="/popular">Popular</option>
              <option value="/all">All</option>
            </optgroup>
            <optgroup label="Other">
              <option value="/inbox">Inbox</option>
              <option value="/saved">Saved</option>
              {/* <option value={`/u/${user.username}`}>Profile</option> */}
              <option value="logout">Logout</option>
            </optgroup>
          </select>
        </div>
        <Link to="/login" className="hidden font-semibold cursor-pointer md:flex hover:text-theme-orange group">
          Login
          {/* <Svg type="arrow-right" className="invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"></Svg> */}
        </Link>
      </nav>
    );
  }
  