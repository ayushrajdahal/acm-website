import React from "react";
import { Instagram, Github, MessageCircle, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
