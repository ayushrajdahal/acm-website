"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Custom404 = () => {
  const [spinState, setSpinState] = useState(false);

  const swapSpinState = () => {
    setSpinState(!spinState);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image
          src="/assets/logo.png"
          alt="ACM Logo"
          width={80}
          height={80}
          className={`mb-8 ${spinState === true ? "animate-spin" : ""}`}
          onClick={swapSpinState}
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link href="/" className="text-lg text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
