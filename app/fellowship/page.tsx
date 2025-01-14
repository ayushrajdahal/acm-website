import React from "react";
import ContactSection from "../../components/ui/ContactSection";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <iframe
        src="https://forms.office.com/r/nq8JThRM76"
        width="25%"
        height="1000px"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full h-screen"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default page;
