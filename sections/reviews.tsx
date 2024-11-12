import React from "react";
import { Speech } from "lucide-react";
import { Card } from "@/components/ui/card";

const Reviews = () => {
  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        Reviews <Speech size={36} />
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
              &quot;This AI recommendation system is incredible! It helped me
              discover some hidden gems I would have never found otherwise.
              Definitely my go-to for movie night suggestions now.&quot;
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
              &quot;I love how the recommendations are tailored to my specific
              interests. The AI seems to really understand what I&lsquo;m
              looking for in books and movies.&quot;
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
              setup, just straight to great recommendations. And they&lsquo;re
              surprisingly accurate!&quot;
            </p>
            <div className="flex text-yellow-400">{"★".repeat(5)}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
