import React from "react";
import {
  BookMarked,
  CalendarClock,
  Film,
  MoveRight,
  Music,
  Package,
} from "lucide-react";
import Image from "next/image";
import { GradientSphere } from "@/components/gradient-sphere";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Offers = () => {
  return (
    <div className="py-20" id="offers">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        What We Offer <Package size={36} />
      </h2>
      <div className="grid grid-rows-3 gap-12 lg:gap-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="rounded-md lg:rounded-br-none bg-gradient-to-br from-orange-800 via-orange-600 to-blue-400 p-1">
            <Image
              src={"/movies.jpg"}
              width={800}
              height={400}
              alt={"movies"}
            />
          </div>
          <div className="h-full w-full inline-flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
              <Film /> Try a new movie
            </h1>
            <div className={"relative flex flex-col items-center"}>
              <GradientSphere
                position="center"
                color="red"
                className={"-translate-y-1/2"}
              />
              <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                Want to watch a movie but can&#39;t decide what to watch? Let AI
                help you find the perfect movie for your movie night.
              </p>
              <Link href="/movies">
                <Button className="mt-4">
                  Find Movies
                  <MoveRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-full w-full inline-flex flex-col items-center justify-center">
            <div className="hidden flex-col items-center lg:flex">
              <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                <Music /> Discover new music
              </h1>
              <div className={"relative flex flex-col items-center"}>
                <GradientSphere
                  position="center"
                  color="blue"
                  className={"-translate-y-1/2"}
                />
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  AI powered music recommendations to help you find new music
                  you and your friends will love.
                </p>
                {/*<Link href="/music">*/}
                <Button className="mt-4" disabled>
                  Coming soon <CalendarClock />
                </Button>
                {/*</Link> */}
              </div>
            </div>
          </div>
          <div className="rounded-md lg:rounded-l-none bg-gradient-to-bl from-blue-600 via-blue-400 to-green-400 p-1">
            <Image
              src={"/music.jpg"}
              width={800}
              height={400}
              alt={"music"}
              className=""
            />
          </div>
          <div className="flex flex-col items-center lg:hidden">
            <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
              <Music /> Discover new music
            </h1>
            <div className={"relative flex flex-col items-center"}>
              <GradientSphere
                position="center"
                color="blue"
                className={"-translate-y-1/2"}
              />
              <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                AI powered music recommendations to help you find new music you
                and your friends will love.
              </p>
              {/*<Link href="/music">*/}
              <Button className="mt-4" disabled>
                Coming soon <CalendarClock />
              </Button>
              {/*</Link> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="rounded-md lg:rounded-tr-none bg-gradient-to-b from-green-400 via-green-600 to-green-800 p-1">
            <Image src={"/books.jpg"} width={800} height={400} alt={"books"} />
          </div>
          <div className="h-full w-full inline-flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
              <BookMarked /> Dive into a good book
            </h1>
            <div className={"relative flex flex-col items-center"}>
              <GradientSphere
                position="center"
                color="green"
                className={"-translate-y-1/2"}
              />
              <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                Find the perfect book to read next with our AI powered book
                recommendations.
              </p>
              {/*<Link href="/books">*/}
              <Button className="mt-4" disabled>
                Coming soon <CalendarClock />
              </Button>
              {/*</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
