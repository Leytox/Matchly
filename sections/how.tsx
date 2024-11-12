import React from "react";
import {
  BookMarked,
  Bot,
  Cog,
  Film,
  MessageCircleMore,
  Share,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const How = () => {
  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        How It Works <Cog size={36} />
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
            <h3 className="text-xl font-semibold mb-2 mt-12">AI Analysis</h3>
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
            <h3 className="text-xl font-semibold mb-2 mt-12">Save Favorites</h3>
            <p className="text-gray-600">
              Keep track of content you want to enjoy later
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default How;
