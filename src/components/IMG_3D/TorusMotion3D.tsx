//"use client";
import Spline from "@splinetool/react-spline/next";
import { useState } from "react";

export default function TorusMotion3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      {isLoading && <div>Loading...</div>}
      <Spline
        scene="https://prod.spline.design/b9vpXQo2nEJeYJk7/scene.splinecode"
        onLoad={() => setIsLoading(false)}
      />
    </main>
  );
}
