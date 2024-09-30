"use client";
// components/HeroSection.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/Home.module.css";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen px-4 text-center text-white ">
      <h1
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 "
      >
        ¡Bienvenido a [Nombre del Producto/Servicio]!
      </h1>
      <p
        ref={subtitleRef}
        className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
      >
        Transforma tu manera de [resolver un problema específico o disfrutar de
        algo] en solo minutos. En [Nombre del Producto/Servicio], estamos
        comprometidos en brindarte una solución rápida, eficiente y sencilla
        para [problema o necesidad principal]. Ya sea que estés buscando
        [beneficio principal 1], [beneficio principal 2] o [beneficio principal
        3], ¡tenemos justo lo que necesitas!
      </p>
    </section>
  );
};

export default HeroSection;
