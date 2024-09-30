"use client";

import React, { useCallback, useState } from "react";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Card from "@/components/Card";
import { projects } from "./data";
import FormContact from "@/components/FormContact";

import AOS from "aos";
import HeroSection from "@/components/HeroSection";
const ScrollCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  ///////video
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= 601; i++) {
      const img = new Image();
      img.src = `/images/videoPuntos/${i}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 601) {
          setImages(loadedImages);
          setIsLoading(false);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  //const { scrollYProgress2 } = useScroll();
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 601]);

  const render = useCallback(
    (index: number) => {
      if (canvasRef.current && images[index - 1]) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.canvas.width = window.innerWidth;
          ctx.canvas.height = window.innerHeight;
          ctx.drawImage(
            images[index - 1],
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
          );
        }
      }
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (index) => {
    render(Math.round(index));
  });

  useEffect(() => {
    if (!isLoading) {
      render(1);
    }
  }, [isLoading, render]);

  useEffect(() => {
    const handleResize = () => {
      if (!isLoading) {
        render(Math.round(currentIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading, render, currentIndex]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          // position: "relative",
          backgroundColor: "",
          height: "100vh",
          width: "100vw",
          background: "BLACK",
        }}
      >
        <div className="loader" style={{ top: "50vh" }}></div>
      </div>
    );
  }

  return (
    <main ref={container}>
      <div
        style={{
          backgroundColor: "#000000f6",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* SECTION FORM CONTACT */}
        <HeroSection />
      </div>
      <div
        style={{
          backgroundColor: "#76b5f5",
        }}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "red",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* SECTION FORM CONTACT */}
        <FormContact />
      </div>
    </main>
  );
};

export default ScrollCards;
