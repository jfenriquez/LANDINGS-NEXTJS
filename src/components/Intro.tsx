"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Intro() {
  const backImg = useRef(null);
  const introImg = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement, // O puedes cambiarlo a un elemento específico
        scrub: true,
        start: "top top",
        end: "+=500px",
      },
    });

    timeline
      .fromTo(
        backImg.current,
        { scale: 0.7 }, // Escala inicial
        { scale: 0.9 } // Escala final para agrandar la imagen)
      )
      .to(introImg.current, { height: "200px" }, 0);

    return () => {
      // Limpiar GSAP y ScrollTrigger al desmontar
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([backImg.current, introImg.current]);
    };
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={backImg}>
        <Image
          src="/images/smootScroll/stars_2.jpg"
          layout="fill"
          alt="background image"
          priority
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImg}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image
            style={{ borderRadius: "5%" }}
            src="/images/smootScroll/intro.jpg"
            alt="intro image"
            layout="fill"
            priority
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          SCROLL
        </h1>
      </div>
    </div>
  );
}
