import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 text-center text-gray-500 border-t border-gray-100 pt-8">
      <p>&copy; {new Date().getFullYear()} UNO ACM. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
