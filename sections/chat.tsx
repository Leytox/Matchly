"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ChatBubble from "@/components/chat-bubble";

export const Chat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px", // Starts animation slightly before coming into view
  });

  const messages = [
    {
      message: "Movie night tonight? 🎬",
      isSender: true,
      userName: "Alex",
      messageStatus: "read",
    },
    {
      message: "Sure! No superhero movies though 😫",
      isSender: false,
      userName: "Jordan",
      messageStatus: "delivered",
    },
    {
      message: "No artsy films either! 🙄",
      isSender: true,
      userName: "Alex",
      messageStatus: "read",
    },
    {
      message: "Found this AI recommendations site - could help us pick!",
      isSender: false,
      userName: "Jordan",
      messageStatus: "delivered",
    },
    {
      message: "*shares link* Uses both our tastes to find matches 😅",
      isSender: false,
      userName: "Jordan",
      messageStatus: "delivered",
    },
    {
      message: "Cool! Works for music too. No more jazz debates! 😂",
      isSender: true,
      userName: "Alex",
      messageStatus: "read",
    },
    {
      message: "Jazz is art! 🎷 But yeah, let's try it!",
      isSender: false,
      userName: "Jordan",
      messageStatus: "delivered",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="flex flex-col gap-4"
    >
      {messages.map((msg, index) => (
        <motion.div key={index} variants={item}>
          <ChatBubble
            message={msg.message}
            isSender={msg.isSender}
            userName={msg.userName}
            messageStatus={msg.messageStatus}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
