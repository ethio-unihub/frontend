import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Register, Login, ForgotPassword, ResetPassword } from "../pages/";
import { Message } from "../components";
import { MessageContext } from "../context";

export const ALLRoutes = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className=" overflow-x-hidden dark:bg-slate-800">
      <div className="absolute top-[100px] right-1/4">
        {messages.map((msg, index) => (
          <Message
            key={index}
            index={index}
            type={msg.type}
            message={msg.text}
          />
        ))}
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
