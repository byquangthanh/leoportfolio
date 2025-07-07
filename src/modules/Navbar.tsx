import React from "react";

export default function Navbar() {
  return (
    <nav className="flex p-8 justify-between w-full z-50 fixed">
      <div className="flex-row gap-8 flex">
        <button className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in">
          Work
        </button>
        <a
          href="https://www.instagram.com/leophamie/"
          target="_blank"
          className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in"
        >
          Gallery
        </a>
        <button className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in">
          About
        </button>
      </div>
      <button className="cursor-pointer text-black text-lg hover:opacity-50 transition-all ease-in">
        leo@seventyfour.work
      </button>
    </nav>
  );
}
