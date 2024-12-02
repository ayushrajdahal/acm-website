import React from "react";
import { sponsors } from "./content/sponsors.json";
import Image from "next/image";
import Link from "next/link";

const SponsorsSection = () => {
  const gridColsClass = () => {
    switch (sponsors.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
  };

  return (
    <section id="sponsors" className="mb-32 scroll-mt-24">
      <h2 className="text-3xl font-medium mb-16 text-center">Our Sponsors</h2>
      <div className={`grid ${gridColsClass()} gap-8`}>
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className={`flex justify-center items-center p-4 ${
              sponsors.length === 1 ? "mx-auto" : ""
            }`}
          >
            <Link href={sponsor.url} target="_blank">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={300}
                height={300}
                className="object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
