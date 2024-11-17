"use client";
import React, { useState, useEffect } from "react";
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
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { faculties, executives } from "./members.json";
import { events } from "./events.json";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"past" | "future">("future");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  type Event = {
    id: number;
    title: string;
    description: string;
    date: string; // Dates are either valid date strings or descriptive text like "Spring 2025"
    location: string;
    actionLabel: string;
  };

  const isValidDate = (dateString: string): boolean => {
    const parsedDate = new Date(dateString);
    return !isNaN(parsedDate.getTime()); // Check if the parsed date is valid
  };

  const filterEvents = (
    events: Event[],
    activeFilter: "past" | "future"
  ): Event[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date

    return events.filter((event) => {
      if (activeFilter === "past") {
        // Include only valid dates in the past
        return isValidDate(event.date) && new Date(event.date) < today;
      }

      // Include future dates, today's date, and non-date elements
      return !isValidDate(event.date) || new Date(event.date) >= today;
    });
  };

  const filteredEvents = filterEvents(events, activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4" onClick={scrollToTop}>
              <Image
                src="/assets/logo.png"
                alt="ACM Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-medium">UNO ACM</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="space-x-6">
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  About
                </Link>
                <Link
                  href="#events"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Events
                </Link>
                <Link
                  href="#team"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Team
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Contact
                </Link>
              </div>
              <Link
                href="https://forms.office.com/r/8eKHQgyLjL"
                target="_blank"
              >
                <Button className="bg-black hover:bg-gray-800 text-sm">
                  Join Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMenuOpen ? "max-h-64" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#events"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Events
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </a>
            <Button className="bg-black hover:bg-gray-800 w-full">
              Join Now
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 mt-16">
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
            University of New Orleans Chapter of the Association for Computing
            Machinery
          </p>
        </header>

        <main>
          {/* About Section */}
          <section id="about" className="mb-32 scroll-mt-24">
            <h2 className="text-3xl font-medium mb-16 text-center">About Us</h2>
            <p className="text-center font-medium mb-16 mx-8">
              We are the University of New Orleans chapter of the Association
              for Computing Machinery (UNO ACM). Our mission is to foster a
              vibrant community of computer science and engineering enthusiasts,
              promote knowledge sharing, and provide unparalleled opportunities
              for professional growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaboration",
                  description:
                    "Work on interdisciplinary projects in groups, build lasting relationships.",
                },
                {
                  title: "Learning",
                  description:
                    "Access workshops, seminars, and guest lectures hosted by industry experts and academics.",
                },
                {
                  title: "Growth",
                  description:
                    "Develop professional skills and expand your career opportunities.",
                },
              ].map((item, index) => (
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
          <section id="events" className="mb-32 scroll-mt-24">
            <h2 className="text-3xl font-medium mb-16 text-center">Events</h2>
            <div className="flex justify-center mb-12 space-x-4">
              {["future", "past"].map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter as "past" | "future")}
                  className={`${
                    activeFilter === filter
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } capitalize`}
                >
                  {filter} Events
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEvents.map((event, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="border-b border-gray-50 bg-gray-50">
                    <CardTitle className="text-lg font-medium text-center">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-2" size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2" size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="mb-32 scroll-mt-24">
            <h2 className="text-3xl font-medium mb-16 text-center">Our Team</h2>

            {/* Executive Members */}
            <div className="mb-20">
              <h3 className="text-xl font-medium mb-12 text-center">
                Executive Members
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
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

          {/* Call to Action Section */}
          <section className="mb-32 text-center">
            <div className="bg-black text-white py-16 px-8 rounded-lg">
              <h2 className="text-3xl font-medium mb-6">Join Us</h2>
              <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
                Interested in becoming a member of UNO ACM? Click the button
                below to sign up!
              </p>
              <a href="https://forms.office.com/r/8eKHQgyLjL" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6">
                  Join UNO ACM
                </Button>
              </a>
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

        {/* Footer */}
        <footer className="mt-32 text-center text-gray-500 border-t border-gray-100 pt-8">
          <p>&copy; 2024 UNO ACM. All rights reserved.</p>
        </footer>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
            isScrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
