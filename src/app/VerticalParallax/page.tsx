"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
//import TorusMotion3D from "@/components/IMG_3D/TorusMotion3D";
import Image from "next/image";
import { url } from "inspector";

const VerticalParallax = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#6572787a",
        position: "absolute",
      }}
    >
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#f3cae3" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#98cef0" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url("/images/IMG/sky-7630197_1920.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            ////trasparencia
            opacity: 0.5,
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src="/images/IMG/ovni-carton.png"
            style={{ marginLeft: "70%" }}
            width={180}
            height={180}
            alt="Welcome"
          />
          {/* <TorusMotion3D></TorusMotion3D> */}
        </ParallaxLayer>

        {/* NUBES */}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            src={"/images/IMG/planet3.png"}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/planet2.png"}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            src={"/images/IMG/planet4.png"}
            style={{
              display: "block",
              width: "100%",
              marginLeft: "70%",
              color: "red",
            }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/planet1.png"}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            src={"/images/IMG/mars.png"}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/mars.png"}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            src={"/images/IMG/rocket_blue.png"}
            style={{ display: "block", width: "15%", marginLeft: "10%" }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/rocket-153227_1280.png"}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "30%",
              rotate: "180deg",
            }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/planet1.png"}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={"/images/IMG/COHETE1.png"}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            alt="nubes"
            width={100}
            height={100}
          />
          <Image
            src={"/images/IMG/COHETE1.png"}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            alt="nubes"
            width={1000}
            height={1000}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Image
            src={"/images/IMG/undraw_connected_world_wuay.svg"}
            style={{ width: "60%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            //backgroundColor: "red",
            //backgroundImage: "images/IMG/4.jpg",
          }}
        />

        {/* IMG1 server */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/images/IMG/undraw_refreshing_beverage.svg"}
            style={{ width: "40%" }}
            alt="cat"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/images/IMG/undraw_product_hunt.svg"}
            style={{ width: "40%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Image
            src={"/images/IMG/undraw_playful_cat.svg"}
            style={{ width: "40%" }}
            alt="nubes"
            width={100}
            height={100}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default VerticalParallax;
