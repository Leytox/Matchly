import Hero from "@/sections/hero";
import Metrics from "@/sections/metrics";
import Offers from "@/sections/offers";
import How from "@/sections/how";
import Faq from "@/sections/faq";
import Reviews from "@/sections/reviews";
import Partners from "@/sections/partners";
import Pricing from "@/sections/pricing";
import Newsletter from "@/sections/newsletter";

export default function Home() {
  return (
    <main className="fullscreen-centered">
      <div className="container px-2 md:px-0 relative">
        <Hero />
        <Metrics />
        <Offers />
        <How />
        <Partners />
        <Pricing />
        <Reviews />
        <Faq />
        <Newsletter />
      </div>
    </main>
  );
}
