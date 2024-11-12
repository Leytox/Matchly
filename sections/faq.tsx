import React from "react";
import { MailQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        F.A.Q <MailQuestion size={36} />
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semobold">
              Is this service really free?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Our service is completely free to use. We believe everyone
              should have access to great recommendations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semobold">
              How accurate are the recommendations?
            </AccordionTrigger>
            <AccordionContent>
              Our AI model is trained on vast amounts of data and continuously
              learns from user feedback to provide highly accurate
              recommendations tailored to your preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semobold">
              Do I need to create an account?
            </AccordionTrigger>
            <AccordionContent>
              No account needed! Simply share your preferences and get instant
              recommendations. However, creating an account lets you save your
              favorites and get better personalized suggestions over time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semobold">
              How often are recommendations updated?
            </AccordionTrigger>
            <AccordionContent>
              Our AI model is updated regularly with new content across movies,
              music, and books, ensuring you always get fresh and relevant
              recommendations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
