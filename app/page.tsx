import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Github,
  MessageCircle,
  MapPin,
  Calendar,
  Mail,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const App = () => {
  // List of Executives
  const executives = [
    {
      name: "Ayush R. Dahal",
      position: "President",
      image: "/uno-acm-website/assets/ayush.jpg",
    },
    {
      name: "Duy Nguyen",
      position: "Co-Vice President",
      image: "/uno-acm-website/assets/duy.jpg",
    },
    {
      name: "Farzeen Nafees",
      position: "Co-Vice President",
      image: "/uno-acm-website/assets/farzeen.jpg",
    },
    {
      name: "Nhi Pham",
      position: "Secretary",
      image: "/uno-acm-website/assets/nhi.jpg",
    },
    {
      name: "Dan Do",
      position: "Co-Treasurer",
      image: "/uno-acm-website/assets/dan.jpg",
    },
    {
      name: "David K. Timms",
      position: "Co-Treasurer",
      image: "/uno-acm-website/assets/david.jpg",
    },
    {
      name: "Leanoria Guerin",
      position: "SCRUM Master",
      image: "/uno-acm-website/assets/leanoria.jpeg",
    },
    {
      name: "Ammar Kadic",
      position: "Workshop Chair",
      image: "/uno-acm-website/assets/ammar.webp",
    },
    {
      name: "Spundun Gusain",
      position: "SGA Ambassador",
      image: "/uno-acm-website/assets/spundun.jpg",
    },
  ];

  // List of Events
  const events = [
    {
      title: "Git Workshop",
      description:
        "Learn the essentials of Git version control for seamless collaboration and project management.",
      // date: "October 19, 2024",
      // location: "UNO Math Building, Room 207",
      date: "TBD",
      location: "TBD",
      actionLabel: "Join the Workshop",
    },
    {
      title: "Career/Resume Workshop",
      description:
        "Learn about the application process for software and academia roles through industry professionals and CS/Engineering professors. Get your resumes personally reviewed.",
      date: "TBD",
      location: "TBD",
      actionLabel: "Join the Workshop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-8 flex flex-col items-center">
          <Image
            src="/uno-acm-website/assets/logo.png"
            alt="ACM Logo"
            width={175}
            height={175}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">UNO ACM</h1>
          <p className="text-xl text-gray-600">
            <i>
              University of New Orleans Chapter of the Association for Computing
              Machinery
            </i>
          </p>
        </header>

        <main>
          {/* About Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              About Us
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
              We are the University of New Orleans chapter of the Association
              for Computing Machinery (ACM). Our mission is to foster a vibrant
              community of computer science enthusiasts, promote knowledge
              sharing, and provide unparalleled opportunities for professional
              growth. Join us in shaping the future of technology!
            </p>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                >
                  <CardHeader className="border-b border-gray-100 p-4">
                    <CardTitle className="text-center">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Calendar className="mr-2" size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <MapPin className="mr-2" size={18} />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Executive Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Executive Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {executives.map((exec, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 inline-block">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow duration-300 grayscale"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-black">
                    {exec.name}
                  </h3>
                  <p className="text-sm text-gray-600">{exec.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mb-20 text-center bg-black text-white rounded-lg shadow-md p-12">
            <h2 className="text-3xl font-semibold mb-6">Join Us</h2>
            <p className="mb-8 text-lg">
              Interested in becoming a member of UNO ACM? Click the button below
              to sign up!
            </p>
            <a href="https://forms.office.com/r/8eKHQgyLjL" target="_blank">
              <Button className="bg-white text-black text-lg px-8 py-3 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105">
                Join UNO ACM
              </Button>
            </a>
          </section>

          {/* Contact Us Section */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <div className="flex flex-wrap justify-center items-center space-x-6 sm:space-x-10 px-4">
              <a
                href="https://www.instagram.com/uno_acm"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-black transition-colors duration-300 mb-4 sm:mb-0"
              >
                <Instagram size={28} />
                <span className="ml-2 text-lg">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/104812824/"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-black transition-colors duration-300 mb-4 sm:mb-0"
              >
                <Linkedin size={28} />
                <span className="ml-2 text-lg">LinkedIn</span>
              </a>
              <a
                href="https://github.com/uno-acm"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-black transition-colors duration-300 mb-4 sm:mb-0"
              >
                <Github size={28} />
                <span className="ml-2 text-lg">GitHub</span>
              </a>
              <a
                href="https://discord.gg/pcWvbuw6B7"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-black transition-colors duration-300 mb-4 sm:mb-0"
              >
                <MessageCircle size={28} />
                <span className="ml-2 text-lg">CSCI Discord</span>
              </a>
              <a
                href="mailto:acm@cs.uno.edu"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-black transition-colors duration-300"
              >
                <Mail size={28} />
                <span className="ml-2 text-lg">acm@cs.uno.edu</span>
              </a>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="mt-20 text-center text-gray-600 border-t border-gray-200 pt-8">
          <p>&copy; 2024 UNO ACM. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
