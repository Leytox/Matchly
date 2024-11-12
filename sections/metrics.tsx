import React from "react";
import { CircleHelp } from "lucide-react";

const Metrics = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="items-center justify-center gap-4 text-4xl font-semibold text-center mb-12 flex">
          Why us <CircleHelp size={36} />
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
  );
};

export default Metrics;
