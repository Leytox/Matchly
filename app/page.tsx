import ChatBubble from "@/components/chat-bubble";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Accordion } from "@radix-ui/react-accordion";
import {
  BookMarked,
  ExternalLink,
  Film,
  MoveRight,
  Music,
  Share,
  Bot,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="fullscreen-centered">
      <div className="container">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
            <div>
              <h1 className="text-6xl font-semibold leading-tight">
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
              <p className="font-semibolde max-w-xl">
                Get personalized recommendations for movies, music and books
                based on your preferences. No sign up required. Powered by
                Ollama 3.2
              </p>
              <Button className="mt-4" size={"lg"}>
                Try it out! <ExternalLink />
              </Button>
            </div>
            <div>
              <ChatBubble
                message="Hey! Movie night at my place tonight? 🎬"
                isSender={true}
                userName="Alex"
                messageStatus="read"
              />
              <ChatBubble
                message="Sure! But please, not another superhero movie 😫"
                isSender={false}
                userName="Jordan"
                messageStatus="delivered"
              />
              <ChatBubble
                message="Well, I don't want to watch another art house film that'll put me to sleep 🙄"
                isSender={true}
                userName="Alex"
                messageStatus="read"
              />
              <ChatBubble
                message="Hey, check this out! Found this site that gives AI-powered recommendations. Maybe it can help us find something we'll both enjoy?"
                isSender={false}
                userName="Jordan"
                messageStatus="delivered"
              />
              <ChatBubble
                message="*shares MatchMedia link* It says it can find movies based on both our preferences! No more hour-long debates 😅"
                isSender={false}
                userName="Jordan"
                messageStatus="delivered"
              />
              <ChatBubble
                message="Oh nice! They have music recommendations too. Maybe you can finally understand why I don't want to listen to your 3-hour experimental jazz albums 😂"
                isSender={true}
                userName="Alex"
                messageStatus="read"
              />
              <ChatBubble
                message="Hey! Those albums are art! 🎷 But yeah, let's try it out. Better than spending another evening arguing about what to watch!"
                isSender={false}
                userName="Jordan"
                messageStatus="delivered"
              />
            </div>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-rows-3">
            <div className="grid grid-cols-2">
              <div>
                <Image
                  src={"/movies.jpg"}
                  width={800}
                  height={400}
                  alt={"movies"}
                />
              </div>
              <div className="h-full w-full inline-flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                  <Film /> Tired of fighting over the remote?
                </h1>
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  Want to watch a movie but can&#39;t decide what to watch? Let
                  AI help you find the perfect movie for your movie night.
                </p>
                <Button className="mt-4">
                  Find Movies <MoveRight />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="h-full w-full inline-flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold leading-normal flex items-center gap-2">
                  <Music /> Discover new music
                </h1>
                <p className="max-w-lg text-center mt-4 overflow-wrap break-word">
                  AI powered music recommendations to help you find new music
                  you and your friends will love.
                </p>
                <Button className="mt-4">
                  Find Music <MoveRight />
                </Button>
              </div>
              <div>
                <Image
                  src={"/music.jpg"}
                  width={800}
                  height={400}
                  alt={"music"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <Image
                  src={"/books.jpg"}
                  width={800}
                  height={400}
                  alt={"books"}
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
                <Button className="mt-4">
                  Find Books <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Share className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Share Your Preferences
              </h3>
              <p className="text-gray-600">
                Tell us what you like and don&#39;t like in movies, music, or
                books
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Bot className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your preferences to find perfect matches
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Get Recommendations
              </h3>
              <p className="text-gray-600">
                Receive personalized recommendations tailored just for you
              </p>
            </div>
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
