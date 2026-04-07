import React from "react";
import "./ChatMessage.css";
import { FaUser } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export const ChatMessage = ({ message }) => {
  const isGPT = message.user === "gpt";

  return (
    <div className={`chat-message ${isGPT ? "chatgpt" : "me"}`}>
      <div className="chat-message-center">

        <div className={`avatar ${isGPT ? "chatgpt" : "me"}`}>
          {isGPT ? <HiSparkles /> : <FaUser />}
        </div>

        <div className="message-content">
          {message.message}
        </div>

      </div>
    </div>
  );
};