"use client";

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
      <section className="p-8 z-10 bg-white/0 min-h-screen w-screen absolute sm:grid sm:grid-cols-3 items-center">
        <div className="flex-col sm:flex-row flex sm:col-span-2 gap-[8vw] pt-20">
          <div>
            <p className="text-black text-lg font-bold sm:pb-20 pb-8 leading-6">
              Graphic Designer <br />
              Motion Designer
              <br /> Illustrator
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
            </p>
            <div className=" flex-row sm:flex-col flex  sm:group text-black font-bold gap-4 sm:gap-0">
              <span className="hover:opacity-50 transition-all ease-in cursor-pointer pb-2">
                CV
              </span>
              <a
                href="https://drive.google.com/file/d/1iCBkxGECiIAgzIF5vvy-Jqcc7mpGuqVq/view?usp=sharing"
                target="_blank"
                className="sm:opacity-0 group-hover:opacity-100 transition-all ease-in cursor-pointer font-medium hover:opacity-50"
              >
                EN
              </a>
              <a
                href="https://drive.google.com/file/d/10n_mylYNFB9Lh30vVf0VaaNemUpKiax0/view?usp=sharing46 "
                target="_blank"
                className="sm:opacity-0 group-hover:opacity-100 transition-all ease-in cursor-pointer font-medium  hover:opacity-50"
              >
                CZ
              </a>
            </div>
          </div>
          <div className="text-black text-lg  pb-8 sm:pb-20 leading-6 flex flex-col  sm:max-w-[25vw]">
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
            className="sm:w-[20vw] sm:h-[20hw]  h-[50hw] w-[50vw]"
          />
        </div>
      </section>
    </>
  );
}
