"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import Intro from "@/components/Intro";
import HeroSection from "@/components/HeroSection";

import "locomotive-scroll/dist/locomotive-scroll.css";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "aos/dist/aos.css";
import AOS from "aos";

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScrollModule = await import("locomotive-scroll");
      const LocomotiveScroll = LocomotiveScrollModule.default; // Acceder a la propiedad default
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  /////////////////////////////
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambiado a false para permitir múltiples activaciones
    threshold: 0.1,
    rootMargin: "-100px 0px", // Ajusta este valor según sea necesario
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  ///TODO:AÑADIR COMENTARIOS
  return (
    <>
      <div className={style.main} style={{ backgroundColor: "black" }}>
        <Intro></Intro>
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #C33764, #1D2671)",
          height: "100vh",
          position: "relative",
        }}
        data-aos="zoom-in-down"
      >
        {/* SECTION FORM CONTACT */}
        <HeroSection />
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #39aab4, #1D2671)",
          height: "100vh",
          position: "relative",
        }}
        data-aos="zoom-in-left"
      >
        {/* SECTION FORM CONTACT */}
        <HeroSection />
      </div>
      <div
        style={{
          background: " linear-gradient(to right, #0b2893, #1D2671)",
          height: "100vh",
          position: "relative",
        }}
        data-aos="zoom-in-right"
      >
        {/* SECTION FORM CONTACT */}
        <HeroSection />
      </div>
    </>
  );
};

export default Page;
