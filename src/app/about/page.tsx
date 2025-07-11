import React from "react";
import Navbar from "@/modules/Navbar";
import LogoPage from "@/modules/LogoPage";
import Image from "next/image";
import ProfilePic from "../../../public/assets/profilepic.webp";

export default function page() {
  return (
    <>
      <Navbar />
      <LogoPage />
      <section className="p-8 z-10 bg-white/0 min-h-screen w-screen absolute grid grid-cols-3 items-center">
        <div className="flex-row flex col-span-2 gap-[8vw]">
          <p className="text-black text-lg font-bold pb-20 leading-6">
            Graphic Designer <br />
            Motion Designer
            <br /> Illustrator
            <br />
            <br />
            <br />
            <br />
            <span className="hover:opacity-50 transition-all ease-in cursor-pointer">
              CV
            </span>
          </p>
          <div className="text-black text-lg  pb-20 leading-6 flex flex-col it max-w-[25vw]">
            <p>
              I am Leo Pham, a vietnamese graphic designer born in the Czech
              Republic, currently based in Prague. I specialize in logos,
              branding, visual identities, motion design, posters and in my free
              time I play basketball.
            </p>
            <br />

            <p>
              In my work I blend structure with creativity.
              <br /> I often draw inspiration from cultural contrasts, everyday
              moments, and timeless design principles
            </p>
          </div>
        </div>
        <div className="col-span-1  flex justify-center">
          <Image
            src={ProfilePic}
            alt="profile pic"
            className="w-[20vw] h-[20hw]  "
          />
        </div>
      </section>
    </>
  );
}
