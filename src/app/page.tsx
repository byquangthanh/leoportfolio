"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/assets/leologo.svg";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SeventyfourGIF from "../../public/assets/seventyfour-animation.gif";
import SeventyfourPic from "../../public/assets/seventyfour na web.png";
import JunGIF from "../../public/assets/jun.gif";
import JunPicture from "../../public/assets/jun na web.png";
import TopGalGIF from "../../public/assets/topgal.gif";
import TopGalPicture from "../../public/assets/topgal na web.png";
import PepinoGIF from "../../public/assets/pepino.gif";
import PepinoPicture from "../../public/assets/pepino na web.png";
import FamuFestPicture from "../../public/assets/famufest na web.png";
import FamuFestGIF from "../../public/assets/famufest.gif";
import MNMLPicture from "../../public/assets/mnml pro web.png";
import MNMLGIF from "../../public/assets/mnml.gif";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  });

  useGSAP((context, contextSafe) => {
    const sections = gsap.utils.toArray(".horizontal-section");
    const images = gsap.utils.toArray(".image");

    gsap.set(images, {
      opacity: 0,
    });

    gsap.to(images, {
      opacity: 1,
      ease: "back",
      duration: 0.8,

      delay: 1.5,
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",

      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (sectionsRef.current?.offsetWidth || 0),
        markers: false,
        anticipatePin: 1,
      },
    });

    if (contextSafe) {
      images.forEach((image) => {
        const element = image as HTMLElement;

        const onMouseEnter = contextSafe(() => {});

        const onMouseLeave = contextSafe(() => {
          gsap.to(element, {
            ease: "ease.out",
          });
        });

        element.addEventListener("mouseenter", onMouseEnter);
        element.addEventListener("mouseleave", onMouseLeave);
      });
    }
  });

  return (
    <>
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

      <section className="min-h-screen w-full bg-white flex items-end justify-center fixed z-0 px-8">
        <Image src={Logo} alt={"Leo Logo"} className="w-full" />
      </section>

      <div ref={containerRef} className="relative z-10">
        <div ref={sectionsRef} className="flex w-[400vw]">
          {" "}
          {/* Changed from 500vw to 400vw */}
          <section className="horizontal-section min-h-screen w-screen relative z-1">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>

            <div>
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
            </div>
          </section>
          <section className="horizontal-section min-h-screen w-screen relative ">
            <div>
              <Image
                alt="Seventyfour picture"
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
            </div>
            <div>
              <Image
                alt="Seventyfour picture"
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
            </div>
          </section>
          <section className="horizontal-section min-h-screen w-screen relative">
            <div className="image  h-[25vw] w-[20vw]  left-3/5 top-3/10 absolute shadow-2xl cursor-pointer transition-transform"></div>
          </section>
          {/* Add the final section inside the horzontal container*/}
          <section className="horizontal-section min-h-screen w-screen relative bg-black">
            <div className="flex items-center justify-center h-full p-8">
              <h1 className="text-9xl text-white">Lets connect!</h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
