"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isCopiedVisible, setIsCopiedVisible] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("leo@seventyfour.work");
    setIsCopiedVisible(true);
    setTimeout(() => {
      setIsCopiedVisible(false);
    }, 1000);
  };

  return (
    <nav className="flex p-8 justify-between w-full z-50 fixed mix-blend-difference ">
      <div className="flex-row gap-8 flex justify-between w-full md:justify-start md:w-auto">
        <Link
          className="cursor-pointer text-white text-lg hover:opacity-50 transition-all ease-in"
          href="/"
        >
          Work
        </Link>

        <a
          href="https://www.instagram.com/leophamie/"
          target="_blank"
          className="cursor-pointer text-white text-lg hover:opacity-50 transition-all ease-in"
        >
          Gallery
        </a>
        <Link
          className="cursor-pointer text-white text-lg hover:opacity-50 transition-all ease-in"
          href="/about"
        >
          About
        </Link>
      </div>
      <div className="flex-col flex gap-2 items-end">
        <button
          className="cursor-pointer text-white text-lg hover:opacity-50 transition-all ease-in hidden md:block"
          onClick={copyEmail}
        >
          leo@seventyfour.work
        </button>
        {isCopiedVisible && (
          <p className="text-white transition-all ease-in duration-300">
            copied!
          </p>
        )}
      </div>
    </nav>
  );
}
