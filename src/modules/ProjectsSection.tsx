import React, { useState, useEffect } from "react";

import Image from "next/image";
import SeventyfourGIF from "../../public/assets/seventyfour-animation.gif";
import SeventyfourPic from "../../public/assets/seventyfour@2x.webp";
import JunGIF from "../../public/assets/jun.gif";
import JunPicture from "../../public/assets/jun@2x.webp";
import TopGalGIF from "../../public/assets/topgal.gif";
import TopGalPicture from "../../public/assets/topgal u@2x.webp";
import PepinoGIF from "../../public/assets/pepino.gif";
import PepinoPicture from "../../public/assets/pepino@2x.webp";
import FamuFestPicture from "../../public/assets/famufest@2x.webp";
import FamuFestGIF from "../../public/assets/famufest.gif";
import MNMLPicture from "../../public/assets/mnml.webp";
import MNMLGIF from "../../public/assets/mnml.gif";
import HostivioPicture from "../../public/assets/hostivio@2x.webp";
import HostivioGIF from "../../public/assets/hostivio.gif";
import notzPicture from "../../public/assets/notz.webp";
import notzGIF from "../../public/assets/notz.gif";
import { Ref } from "react";
import Link from "next/link";
import Logo from "../../public/assets/leologo.svg";

interface ProjectSectionProps {
  containerRef: Ref<HTMLDivElement> | undefined;
  sectionsRef: Ref<HTMLDivElement> | undefined;
}

export default function ProjectsSection({
  containerRef,
  sectionsRef,
}: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopiedVisible, setIsCopiedVisible] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("leo@seventyfour.work");
    setIsCopiedVisible(true);
    setTimeout(() => {
      setIsCopiedVisible(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  });
  return (
    <div ref={containerRef} className="relative z-10">
      <div ref={sectionsRef} className="flex w-[350vw]">
        <section className="min-h-[100dvh] w-full flex items-end justify-center fixed z-1 px-8 mix-blend-difference bg-white">
          <Image src={Logo} alt={"Leo Logo"} className="w-full" />
          <p className="text-white">a</p>
        </section>
        <section className="horizontal-section min-h-screen w-screen relative z-2">
          <Link href="projects/seventyfour" className="cursor-auto">
            <Image
              alt="Seventyfour picture"
              src={SeventyfourPic}
              className="image  h-[24vw] w-[24vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[20vh] absolute  "
            />
            {isVisible && (
              <Image
                alt="Seventyfour animation"
                src={SeventyfourGIF}
                className="h-[24vw] w-[24vw]  max-h-[700px] max-w-[700px]  left-[5vw] top-[20vh]  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>
          <Link href="projects/jun" className="cursor-auto">
            <Image
              alt="Jun picture "
              src={JunPicture}
              className="image  h-[25vw] w-[20vw]  left-[35vw] top-[40vh] absolute   max-h-[700px] max-w-[600px]  "
            />
            {isVisible && (
              <Image
                src={JunGIF}
                alt="Jun animation"
                className="h-[25vw] w-[20vw]  left-[35vw]  max-h-[700px] max-w-[600px]  top-[40vh] cursor-pointer opacity-0  hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>
          <Link href="projects/topgal_u" className="cursor-auto">
            <Image
              alt="Topgal Picture"
              src={TopGalPicture}
              className="image  h-[25vw] w-[20vw]  left-[62vw] top-[30vh] absolute   max-w-[600px] max-h-[770px]"
            />
            {isVisible && (
              <Image
                alt="Topgal Animation"
                src={TopGalGIF}
                className="h-[25vw] w-[20vw]   left-[62vw] top-[30vh]  max-w-[600px] max-h-[770px] absolute  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in "
              />
            )}
          </Link>

          <Link href="projects/pepino" className="cursor-auto ">
            <Image
              alt="Pepino Picture"
              src={PepinoPicture}
              className="image  h-[25vw] w-[25vw] max-h-[700px] max-w-[700px]  -right-[15vw] top-[20vh] absolute   "
            />
            {isVisible && (
              <Image
                alt="Pepino Animation"
                src={PepinoGIF}
                className="h-[25vw] w-[25vw] max-h-[700px] max-w-[700px]  -right-[15vw]  top-[20vh] absolute  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in "
              />
            )}
          </Link>
        </section>
        <section className="horizontal-section min-h-screen w-screen relative z-1">
          <Link href="projects/famufest">
            <Image
              alt="Famufest picture"
              src={FamuFestPicture}
              className="image  h-[32vw] w-[24vw] max-w-[600px] max-h-[770px]  left-[23vw] top-[30vh] absolute  "
            />
            {isVisible && (
              <Image
                alt="Seventyfour animation"
                src={FamuFestGIF}
                className="h-[32vw] w-[24vw] max-w-[600px] max-h-[770px]  left-[23vw] top-[30vh]  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>

          <Link href="projects/mnml" className="cursor-auto">
            <Image
              alt="MNML picture"
              src={MNMLPicture}
              className="image  h-[24vw] w-[24vw] max-h-[700px] max-w-[700px]  left-[55vw] top-[20vh] absolute  "
            />
            {isVisible && (
              <Image
                alt="Seventyfour animation"
                src={MNMLGIF}
                className="h-[24vw] w-[24vw] max-h-[700px] max-w-[700px]  left-[55vw] top-[20vh]  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>
          <Link href="projects/hostivio" className="cursor-auto">
            <Image
              alt="Hostivio picture"
              src={HostivioPicture}
              className="image  h-[20vw] w-[25vw] max-h-[700px] max-w-[700px]  left-[87vw] top-[45vh] absolute  "
            />
            {isVisible && (
              <Image
                alt="Hostivio animation"
                src={HostivioGIF}
                className="h-[20vw] w-[25vw] max-h-[700px] max-w-[700px]  left-[87vw] top-[45vh]  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>
          <Link href="projects/notz" className="cursor-auto">
            <Image
              alt="Notz picture"
              src={notzPicture}
              className="image  h-[20vw] w-[25vw] max-h-[700px] max-w-[700px]  left-[119vw] top-[25vh] absolute  "
            />
            {isVisible && (
              <Image
                alt="Hostivio animation"
                src={notzGIF}
                className="h-[20vw] w-[25vw] max-h-[700px] max-w-[700px]  left-[119vw] top-[25vh]  cursor-pointer opacity-0 hover:opacity-100 transition-all ease-in absolute"
              />
            )}
          </Link>
        </section>
        <section className="horizontal-section min-h-screen w-[50vw] relative "></section>

        {/* Add the final section inside the horzontal container*/}
        <section className="horizontal-section min-h-screen w-screen relative bg-white   text-black">
          <div className="flex-col flex items-center justify-center h-full p-8">
            <h4 className="text-8xl">Let&apos;s connect!</h4>
            <br />
            <p className="text-lg">
              Write me an email or send me a DM on instagram!
            </p>
            <br />
            <div className="flex-row flex gap-2">
              <p
                onClick={() => {
                  copyEmail();
                }}
                className="hover:opacity-50 transition-all ease-in-out duration-200 cursor-pointer text-lg text-center"
              >
                leo@seventyfour.work
              </p>
              {isCopiedVisible && (
                <p className="text-white transition-all ease-in duration-300  text-lg ">
                  copied!
                </p>
              )}
            </div>
            <a
              href="https://www.instagram.com/leophamie/"
              target="_blank"
              className="hover:opacity-50 transition-all ease-in-out duration-200 cursor-pointer text-lg text-center"
            >
              @leophamie
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
