"use client";
// components/AboutSection.js
import React from "react";


const AboutSection = () => {
  return (
    <section className="py-12 px-6 sm:px-8 md:px-12  text-center md:text-left text-white ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6  ">
        Sobre Nosotros
      </h2>
      <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto md:mx-0 leading-relaxed">
        En [Nombre de la Empresa], nos apasiona [describir brevemente el
        producto/servicio que ofreces]. Desde nuestro inicio en [año de
        fundación], hemos trabajado incansablemente para ofrecer soluciones
        innovadoras y de alta calidad a nuestros clientes. Nuestra misión es
        simple: [misión de la empresa]. Creemos en [valores fundamentales, como
        la innovación, la calidad, el servicio al cliente], y trabajamos cada
        día para asegurar que nuestros clientes reciban lo mejor de nosotros.
        Contamos con un equipo de profesionales apasionados que están
        comprometidos a ayudar a nuestros clientes a alcanzar sus metas. Nos
        enorgullecemos de nuestro enfoque centrado en el cliente, siempre
        buscando superar las expectativas y aportar valor en cada interacción.
      </p>
    </section>
  );
};

export default AboutSection;
