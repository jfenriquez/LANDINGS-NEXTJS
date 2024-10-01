"use client";
// components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <section className="py-12 px-6 sm:px-8 md:px-12 text-center md:text-left text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Contacto
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6">
        Si tienes preguntas, no dudes en contactarnos.
      </p>
      <div className="max-w-4xl mx-auto md:mx-0">
        <p className="mb-4">
          Nos encantaría saber de ti. Si tienes alguna pregunta, comentario o
          simplemente quieres saber más sobre lo que hacemos, no dudes en
          ponerte en contacto con nosotros.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Información de contacto
            </h3>
            <ul className="text-base sm:text-lg">
              <li className="mb-1">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:tuemail@empresa.com"
                  className="text-blue-500 hover:underline"
                >
                  tuemail@empresa.com
                </a>
              </li>
              <li className="mb-1">
                <span className="font-medium">Teléfono:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  [número de teléfono]
                </a>
              </li>
              <li className="mb-1">
                <span className="font-medium">Dirección:</span> [dirección
                física de la empresa, si aplica]
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Horario de atención</h3>
            <ul className="text-base sm:text-lg">
              <li className="mb-1">
                <span className="font-medium">Lunes a Viernes:</span> 9:00 AM -
                6:00 PM
              </li>
              <li className="mb-1">
                <span className="font-medium">Sábado:</span> 10:00 AM - 2:00 PM
              </li>
              <li className="mb-1">
                <span className="font-medium">Domingo:</span> Cerrado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
