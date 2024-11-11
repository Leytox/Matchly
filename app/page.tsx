import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatSection } from "@/sections/chat-section";
import {
  BookMarked,
  ExternalLink,
  Film,
  MoveRight,
  Music,
  Share,
  Bot,
  Sparkles,
  CalendarClock,
  MessageCircleMore,
  ChevronsDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="fullscreen-centered">
      <div className="container px-2 md:px-0 relative">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-orange-500/50 dark:from-orange-500/20 via-blue-500/50 dark:via-blue-500/20 to-green-500/50 dark:to-green-500/20 rounded-full top-8 right-1/4 blur-3xl animate-pulse" />
        <div className="min-h-screen flex relative overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center w-full relative">
            <div className="flex flex-col justify-center w-full h-screen relative xl:items-start xl:justify-start xl:h-auto">
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
                Get personalized recommendations for movies, music and books
                based on your preferences. No sign up required. Powered by{" "}
                <a
                  href="https://ollama.com/"
                  target="_blank"
                  className="underline"
                >
                  Ollama 3.2
                </a>{" "}
                and{" "}
                <a
                  href="https://groq.com"
                  target="_blank"
                  className="underline"
                >
                  Groq
                </a>
              </p>
              <a href="#offers" className="w-full mt-4">
                <Button className="mt-4 w-full" size={"lg"}>
                  Try it out! <ExternalLink />
                </Button>
              </a>
              <a
                href="#chat"
                className="absolute bottom-0 -translate-y-24 flex flex-col gap-4 w-full items-center xl:hidden"
              >
                <ChevronsDown />
                Scroll
              </a>
            </div>
            <div
              id="chat"
              className="flex flex-col justify-center w-full h-screen xl:block xl:h-auto"
            >
              <ChatSection />
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container">
            <h2 className="text-4xl font-semibold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-orange-500">100K+</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-500">500K+</h3>
                <p className="text-gray-600">Recommendations Made</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-500">95%</h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-500">24/7</h3>
                <p className="text-gray-600">AI Availability</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20" id="offers">
          <h2 className="text-4xl font-semibold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-rows-3 gap-12 lg:gap-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <Image
                  src={"/movies.jpg"}
                  width={800}
                  height={400}
                  alt={"movies"}
                  className="rounded-md lg:rounded-br-none"
                />
              </div>
              <div className="h-full w-full inline-flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                  <Film /> Try a new movie
                </h1>
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  Want to watch a movie but can&#39;t decide what to watch? Let
                  AI help you find the perfect movie for your movie night.
                </p>
                <Link href="/movies">
                  <Button className="mt-4">
                    Find Movies
                    <MoveRight />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-full w-full inline-flex flex-col items-center justify-center">
                <div className="hidden flex-col items-center lg:flex">
                  <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                    <Music /> Discover new music
                  </h1>
                  <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                    AI powered music recommendations to help you find new music
                    you and your friends will love.
                  </p>
                  {/*<Link href="/music">*/}
                  <Button className="mt-4" disabled>
                    Comming soon <CalendarClock />
                  </Button>
                  {/*</Link> */}
                </div>
              </div>
              <div>
                <Image
                  src={"/music.jpg"}
                  width={800}
                  height={400}
                  alt={"music"}
                  className="rounded-md lg:rounded-l-none"
                />
              </div>
              <div className="flex flex-col items-center lg:hidden">
                <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                  <Music /> Discover new music
                </h1>
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  AI powered music recommendations to help you find new music
                  you and your friends will love.
                </p>
                {/*<Link href="/music">*/}
                <Button className="mt-4" disabled>
                  Comming soon <CalendarClock />
                </Button>
                {/*</Link> */}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <Image
                  src={"/books.jpg"}
                  width={800}
                  height={400}
                  alt={"books"}
                  className="rounded-md lg:rounded-tr-none"
                />
              </div>
              <div className="h-full w-full inline-flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                  <BookMarked /> Dive into a good book
                </h1>
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  Find the perfect book to read next with our AI powered book
                  recommendations.
                </p>
                {/*<Link href="/books">*/}
                <Button className="mt-4" disabled>
                  Comming soon <CalendarClock />
                </Button>
                {/*</Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12">
            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-orange-500 via-orange-200 to-orange-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <MessageCircleMore className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  Share Your Preferences
                </h3>
                <p className="text-gray-600">
                  Tell us what you like and don&#39;t like in movies, music, or
                  books
                </p>
              </div>
            </Card>

            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-blue-500 via-blue-200 to-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <Bot className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  AI Analysis
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes your preferences to find perfect matches
                </p>
              </div>
            </Card>

            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-green-500 via-green-200 to-green-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <Sparkles className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  Get Recommendations
                </h3>
                <p className="text-gray-600">
                  Receive personalized recommendations tailored just for you
                </p>
              </div>
            </Card>

            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-purple-500 via-purple-200 to-purple-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <Film className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  Explore Similar Content
                </h3>
                <p className="text-gray-600">
                  Discover related content based on your recommendations
                </p>
              </div>
            </Card>

            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-pink-500 via-pink-200 to-pink-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <Share className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  Share With Friends
                </h3>
                <p className="text-gray-600">
                  Easily share your discoveries with friends and family
                </p>
              </div>
            </Card>

            <Card className="relative">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gradient-to-br from-yellow-500 via-yellow-200 to-yellow-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center absolute -translate-y-14">
                  <BookMarked className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-12">
                  Save Favorites
                </h3>
                <p className="text-gray-600">
                  Keep track of content you want to enjoy later
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            What People Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">Movie Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;This AI recommendation system is incredible! It helped
                  me discover some hidden gems I would have never found
                  otherwise. Definitely my go-to for movie night suggestions
                  now.&quot;
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Book Lover</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;I love how the recommendations are tailored to my
                  specific interests. The AI seems to really understand what
                  I&lsquo;m looking for in books and movies.&quot;
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                    MP
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Peterson</h4>
                    <p className="text-sm text-gray-500">Music Fan</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;The best part is how easy it is to use. No complicated
                  setup, just straight to great recommendations. And
                  they&lsquo;re surprisingly accurate!&quot;
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </Card>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is this service really free?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Our service is completely free to use. We believe
                  everyone should have access to great recommendations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How accurate are the recommendations?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI model is trained on vast amounts of data and
                  continuously learns from user feedback to provide highly
                  accurate recommendations tailored to your preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do I need to create an account?
                </AccordionTrigger>
                <AccordionContent>
                  No account needed! Simply share your preferences and get
                  instant recommendations. However, creating an account lets you
                  save your favorites and get better personalized suggestions
                  over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How often are recommendations updated?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI model is updated regularly with new content across
                  movies, music, and books, ensuring you always get fresh and
                  relevant recommendations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
