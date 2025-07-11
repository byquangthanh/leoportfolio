import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex p-8 justify-between w-full z-50 fixed">
      <div className="flex-row gap-8 flex justify-between w-full md:justify-start md:w-auto">
        <Link
          className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in"
          href="/"
        >
          Work
        </Link>
        <a
          href="https://www.instagram.com/leophamie/"
          target="_blank"
          className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in"
        >
          Gallery
        </a>
        <Link
          className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in"
          href="/about"
        >
          About
        </Link>
      </div>
      <button className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in hidden md:block">
        leo@seventyfour.work
      </button>
    </nav>
  );
}
