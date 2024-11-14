import React from "react";
import { Handshake } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "Netflix", logo: "/logos/netflix-logo.png" },
    { name: "Spotify", logo: "/logos/spotify-logo.png" },
    { name: "Amazon", logo: "/logos/amazon-logo.png" },
    { name: "HBO", logo: "/logos/hbo-logo.png" },
  ];

  return (
    <div className="py-20">
      <h2 className="flex items-center justify-center gap-4 text-4xl font-semibold text-center mb-12">
        Our Partners <Handshake size={36} />
      </h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <Card
            key={partner.name}
            className="flex items-center justify-center p-8  bg-gradient-to-br from-white/50 dark:from-white/20 via-gray-100/50 dark:via-gray-100/20 to-white-500/50 dark:to-white-500/20 rounded-lg hover:scale-105 transition opacity-75 hover:opacity-100 duration-200"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Partners;
