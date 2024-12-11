"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const GoTop = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) setShown(true);
      else setShown(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${shown ? "fixed flex justify-center items-center bottom-6 right-4 size-12 bg-accent rounded-full cursor-pointer" : "hidden"}`}
    >
      <ArrowUp />
    </div>
  );
};

export default GoTop;
