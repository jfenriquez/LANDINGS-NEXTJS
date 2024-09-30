"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
//import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./ScrollVideo.css";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import FormContact from "@/components/FormContact";

const Page = () => {
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

    for (let i = 1; i <= 1146; i++) {
      const img = new Image();
      img.src = `/images/VideoLetras/${i}.webp`;
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

  const { scrollYProgress } = useScroll();
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
    <div style={{ height: "650vh", width: "100%", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <div style={{ height: "10vh" }}></div>

      <div>
        {/* SECTION HERO */}
        <div
          className="h-screen w-screen flex justify-center items-center p-6 backdrop-blur-md"
          data-aos="fade-left"
        >
          <HeroSection />
        </div>

        {/* SECTION ABOUT */}
        <div
          className="h-screen w-screen flex justify-center items-center p-6 backdrop-blur-md"
          data-aos="fade-down-left"
        >
          <AboutSection />
        </div>

        {/* SECTION CONTACT */}
        <div
          className="h-screen w-screen flex justify-center items-center p-6 backdrop-blur-md"
          data-aos="fade-down-left"
        >
          <ContactSection />
        </div>

        {/* SECTION FORM CONTACT */}
        <FormContact />
      </div>
    </div>
  );
};

export default Page;
