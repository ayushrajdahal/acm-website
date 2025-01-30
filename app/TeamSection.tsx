import React from "react";
import { faculties } from "./content/faculties.json";
import { executives } from "./content/executives.json";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section id="team" className="mb-32 scroll-mt-24">
      <h2 className="text-3xl font-medium mb-16 text-center">Our Team</h2>

      {/* Executive Members */}
      <div className="mb-20">
        <h3 className="text-xl font-medium mb-12 text-center">
          Executive Members
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {executives.map((exec, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  width={400}
                  height={400}
                  className="w-36 h-36 rounded-full mx-auto mb-3 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-medium text-base">{exec.name}</h3>
              <p className="text-sm text-gray-500">{exec.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Support */}
      <div>
        <h3 className="text-xl font-medium mb-12 text-center">
          Faculty Support
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {faculties.map((faculty, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={400}
                  height={400}
                  className="w-36 h-36 rounded-full mx-auto mb-3 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-medium text-base">{faculty.name}</h3>
              <p className="text-sm text-gray-500">{faculty.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
