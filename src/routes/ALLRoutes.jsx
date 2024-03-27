import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home, Register, Login } from "../pages/";

export const ALLRoutes = () => {
  return (
    <div className="min-h-full w-full absolute dark:bg-slate-800">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
