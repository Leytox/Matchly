import React from "react";
import { Check, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        Choose Your Plan <Crown size={36} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="p-6 bg-gradient-to-br from-orange-500/50 dark:from-orange-500/20 via-blue-500/50 dark:via-blue-500/20 to-green-500/50 dark:to-green-500/20">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-4xl font-bold">$0</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Basic Recommendations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Basic AI features
              </li>
            </ul>
            <Button>Get Started</Button>
          </div>
        </Card>

        <Card className="p-6 border-2 border-blue-500 relative bg-gradient-to-br from-purple-500/50 dark:from-purple-500/20 via-green-500/50 dark:via-green-500/20 to-orange-500/50 dark:to-orange-500/20">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full">
            Popular
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-4xl font-bold">$9.99</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Advanced Recommendations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Premium AI features
              </li>
            </ul>
            <Button variant="default">Upgrade Now</Button>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500/50 dark:from-green-500/20 via-orange-500/50 dark:via-orange-500/20 to-blue-500/50 dark:to-blue-500/20">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-4xl font-bold">Custom</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Custom Solutions
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                API Access
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Dedicated Support
              </li>
            </ul>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
