import React from "react";

import Image from "next/image";
import SeventyfourPic from "../../public/assets/seventyfour@2x.webp";
import JunPicture from "../../public/assets/jun@2x.webp";
import TopGalPicture from "../../public/assets/topgal u@2x.webp";
import PepinoPicture from "../../public/assets/pepino@2x.webp";
import FamuFestPicture from "../../public/assets/famufest@2x.webp";
import MNMLPicture from "../../public/assets/mnml.webp";
import HostivioPicture from "../../public/assets/hostivio@2x.webp";
import notzPicture from "../../public/assets/notz.webp";

import Link from "next/link";

export default function ProjectsSectionMobile() {
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
      <Link href="projects/topgal_u" className="cursor-auto">
        <Image
          alt="Seventyfour picture"
          src={TopGalPicture}
          className="image  h-[60vw] w-[48vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[100vh] absolute  "
        />
      </Link>
      <Link href="projects/pepino" className="cursor-auto">
        <Image
          alt="Pepino Picture"
          src={PepinoPicture}
          className="image  h-[50vw] w-[50vw] max-h-[700px] max-w-[700px]  right-[5vw] top-[140vh] absolute   "
        />
      </Link>
      <Link href="projects/famufest" className="cursor-auto">
        <Image
          alt="Famufest Picture"
          src={FamuFestPicture}
          className="image  h-[60vw] w-[48vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[170vh] absolute   "
        />
      </Link>

      <Link href="projects/mnml" className="cursor-auto">
        <Image
          alt="MNML picture"
          src={MNMLPicture}
          className="image  h-[48vw] w-[48vw] max-h-[700px] max-w-[700px]  right-[5vw] top-[203vh] absolute   "
        />
      </Link>

      <Link href="projects/hostivio" className="cursor-auto">
        <Image
          alt="Hostivio picture"
          src={HostivioPicture}
          className="image  h-[48vw] w-[54vw] max-h-[700px] max-w-[700px]  left-[5vw] top-[233vh] absolute   "
        />
      </Link>

      <Link href="projects/notz" className="cursor-auto">
        <Image
          alt="Notz picture"
          src={notzPicture}
          className="image  h-[48vw] w-[54vw] max-h-[700px] max-w-[700px]  right-[5vw] top-[263vh] absolute   "
        />
      </Link>
    </section>
  );
}
