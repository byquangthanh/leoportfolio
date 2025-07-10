"use client";

import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/modules/Navbar";
import LogoPage from "@/modules/LogoPage";
import ProjectsSection from "@/modules/ProjectsSection";
import { BrowserView, isDesktop } from "react-device-detect";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP((context, contextSafe) => {
    const sections = gsap.utils.toArray(".horizontal-section");
    const images = gsap.utils.toArray(".image");

    gsap.fromTo(
      images,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "back",
        duration: 0.8,

        delay: 1.5,
      }
    );

    gsap.to(sections, {
      xPercent: -83.334 * (sections.length - 1), // pokud chci rozsirit na dalsi celou sekci tak -100

      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (sectionsRef.current?.offsetWidth || 0),
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
      <Navbar />
      <LogoPage />
      <BrowserView>
        <ProjectsSection
          containerRef={containerRef}
          sectionsRef={sectionsRef}
        />
      </BrowserView>
    </>
  );
}
