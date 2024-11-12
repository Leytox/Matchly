import Hero from "@/sections/hero";
import Metrics from "@/sections/metrics";
import Offers from "@/sections/offers";
import How from "@/sections/how";
import Faq from "@/sections/faq";
import Reviews from "@/sections/reviews";

export default function Home() {
  return (
    <main className="fullscreen-centered">
      <div className="container px-2 md:px-0 relative">
        <Hero />
        <Metrics />
        <Offers />
        <How />
        <Reviews />
        <Faq />
      </div>
    </main>
  );
}
