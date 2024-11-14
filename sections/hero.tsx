import React from "react";
import { GradientSphere } from "@/components/gradient-sphere";
import { Button } from "@/components/ui/button";
import { ChevronsDown, ExternalLink } from "lucide-react";
import { Chat } from "@/sections/chat";

const Hero = () => {
  return (
    <div>
      <GradientSphere position="center" />
      <div className="flex relative overflow-hidden items-center justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center justify-center w-full">
          <div className="flex flex-col justify-center w-full h-screen relative xl:items-start xl:justify-start xl:h-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Free AI powered recommendations for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                movies
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
                music
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
                books
              </span>
              .
            </h1>
            <p className="text-left font-semibolde max-w-xl">
              Get personalized recommendations for movies, music and books based
              on your preferences. No sign up required. Powered by{" "}
              <a
                href="https://ollama.com/"
                target="_blank"
                className="underline"
              >
                Ollama 3.2
              </a>{" "}
              and{" "}
              <a href="https://groq.com" target="_blank" className="underline">
                Groq
              </a>
            </p>
            <a href={"#offers"} className="w-full mt-4">
              <Button className="mt-4 w-full" size={"lg"}>
                Try it out! <ExternalLink />
              </Button>
            </a>
            <a
              href={"#chat"}
              className="absolute bottom-0 -translate-y-20 flex flex-col gap-4 w-full items-center xl:hidden"
            >
              <ChevronsDown />
              Scroll
            </a>
          </div>
          <div
            id="chat"
            className="flex flex-col justify-center items-center w-full min-h-screen xl:justify-end xl:items-end xl:min-h-0"
          >
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
