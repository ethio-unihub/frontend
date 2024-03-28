import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home, Register, Login } from "../pages/";
import Comments from '../components/Comments';

export const ALLRoutes = () => {
  return (
    <div className="min-h-full w-full fixed left-0 top-0 dark:bg-slate-800">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

