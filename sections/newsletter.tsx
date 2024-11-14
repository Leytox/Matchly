import React from "react";
import { Mail, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        Stay Updated <Mail size={36} />
      </h2>
      <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-orange-500/50 dark:from-orange-500/20 via-blue-500/50 dark:via-blue-500/20 to-green-500/50 dark:to-green-500/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get the latest updates on new features, content recommendations, and
            exclusive offers delivered straight to your inbox.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button type="submit" className="whitespace-nowrap">
            Subscribe <SendHorizontal className="ml-2" size={18} />
          </Button>
        </form>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </Card>
    </div>
  );
};

export default Newsletter;
