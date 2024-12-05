import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Github, MessageCircle, Mail, Linkedin } from "lucide-react";
import { opportunities } from "./content/opportunities.json";
import Image from "next/image";
import EventSection from "./EventsSection";
import SponsorsSection from "./SponsorsSection";
import TeamSection from "./TeamSection";
import Link from "next/link";

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="text-center mb-24 flex flex-col items-center">
        <div className="relative mb-8">
          <Image
            src="/assets/logo.png"
            alt="ACM Logo"
            width={400}
            height={400}
            className="w-40 h-40 animate-float"
          />
          <div className="absolute inset-0 bg-gray-100 rounded-full blur-3xl -z-10"></div>
        </div>
        <h1 className="text-5xl font-bold mb-6">UNO ACM</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          University of New Orleans chapter of the Association for Computing
          Machinery
        </p>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <h2 className="text-3xl font-medium mb-16 text-center">About Us</h2>
          <p className="text-center font-medium mb-16 mx-8">
            We are the University of New Orleans chapter of the Association for
            Computing Machinery (UNO ACM). Our mission is to foster a vibrant
            community of computer science and engineering enthusiasts, promote
            knowledge sharing, and provide unparalleled opportunities for
            professional growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <EventSection />

        {/** Team Section */}
        <TeamSection />

        {/* Sponsors Section */}
        <SponsorsSection />

        {/* Call to Action Section */}
        <section className="mb-32 text-center">
          <div className="bg-black text-white py-16 px-8 rounded-lg">
            <h2 className="text-3xl font-medium mb-6">Join Us</h2>
            <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
              Interested in becoming a member of UNO ACM? Click the button below
              to sign up!
            </p>
            <Link href="/join">
              <Button className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6">
                Join UNO ACM
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-3xl font-medium mb-16 text-center">
            Connect With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Instagram,
                text: "Instagram",
                link: "https://www.instagram.com/uno_acm",
              },
              {
                icon: Linkedin,
                text: "LinkedIn",
                link: "https://www.linkedin.com/company/104812824/",
              },
              {
                icon: Github,
                text: "GitHub",
                link: "https://github.com/uno-acm",
              },
              {
                icon: MessageCircle,
                text: "Discord",
                link: "https://discord.gg/pcWvbuw6B7",
              },
              {
                icon: Mail,
                text: "Email",
                link: "mailto:acm@cs.uno.edu",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <item.icon size={24} className="text-gray-800 mb-3" />
                <span className="text-sm font-medium text-gray-600">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
