import React, { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = ({ type, text }) => {
    setMessages([...messages, { type, text }]);
  };

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, deleteMessage, clearMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};
