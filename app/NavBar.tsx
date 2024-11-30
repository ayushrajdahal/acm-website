"use client";
import React, { useState } from "react";
import Link from "next/link";
import scrollToTop from "./ScrollToTop";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <Link href="https://forms.office.com/r/8eKHQgyLjL" target="_blank">
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
  );
};

export default NavBar;
