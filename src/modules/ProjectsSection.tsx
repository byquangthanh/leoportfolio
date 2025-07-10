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
import { Ref } from "react";

interface ProjectSectionProps {
  containerRef: Ref<HTMLDivElement> | undefined;
  sectionsRef: Ref<HTMLDivElement> | undefined;
}

export default function ProjectsSection({
  containerRef,
  sectionsRef,
}: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  });
  return (
    <div ref={containerRef} className="relative z-10">
      <div ref={sectionsRef} className="flex w-[350vw]">
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
        <section className="horizontal-section min-h-screen w-screen relative z-1">
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
          <div>
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
          </div>
        </section>
        <section className="horizontal-section min-h-screen w-[50vw] relative "></section>

        {/* Add the final section inside the horzontal container*/}
        <section className="horizontal-section min-h-screen w-screen relative bg-black">
          <div className="flex items-center justify-center h-full p-8">
            <h1 className="text-9xl text-white">Lets connect!</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
