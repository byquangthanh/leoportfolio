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

export default function ProjectsSectionMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  });
  return (
    <section className="min-h-screen w-screen bg-white/0 relative z-10">
      <Link href="projects/seventyfour" className="cursor-auto">
        <Image
          alt="Seventyfour picture"
          src={SeventyfourPic}
          className="image  h-[60vw] w-[60vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[20vh] absolute  "
        />
      </Link>
      <Link href="projects/jun" className="cursor-auto">
        <Image
          alt="Jun picture"
          src={JunPicture}
          className="image  h-[60vw] w-[48vw] max-h-[700px] max-w-[700px]  right-[5vw] top-[60vh] absolute  "
        />
      </Link>
      <Link href="projects/seventyfour" className="cursor-auto">
        <Image
          alt="Seventyfour picture"
          src={TopGalPicture}
          className="image  h-[60vw] w-[48vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[100vh] absolute  "
        />
      </Link>
      <Link href="projects/seventyfour" className="cursor-auto">
        <Image
          alt="Pepino Picture"
          src={PepinoPicture}
          className="image  h-[50vw] w-[50vw] max-h-[700px] max-w-[700px]  right-[5vw] top-[140vh] absolute   "
        />
      </Link>
    </section>
  );
}
