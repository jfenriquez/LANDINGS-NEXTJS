"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw", // Ocupar el 100% del ancho de la ventana
          height: "100vh", // Ocupar el 100% de la altura de la ventana
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#77adc7b5",
        }}
      >
        <div className="mockup-code max-w-lg mx-auto">
          <pre data-prefix=">" className="text-warning p-4">
            <code style={{ whiteSpace: "pre-wrap" }}>
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(25)
                    .typeString(
                      "¡Bienvenido a nuestras Demos puedes utilizarlas cuando quieras es gratis! Si deseas puedes darnos credito te lo agradecemos 🎉 ¿Buscas una landing page que impresione tanto como tu meme favorito? Estás en el lugar correcto. Aquí encontrarás una selección de páginas tan dinámicas que hasta tu perro dirá “wow”. ,Soporte Técnico 👀  seamos sinceros, nuestro amor no es tanto. Si quieres que hagamos magia y todo fluya mejor que un domingo en pijama, tendrás que hacer lo que todos hacemos en la vida: ¡pagar por ello! 😄 ¿Problemas? ¡Te los solucionamos! Pero antes, acepta que una relación basada en el soporte técnico tiene un precio. Así que, si estás dispuesto a que el café del equipo no se pague solo, estamos listos para salvar el día... previo pago, claro está."
                    )
                    .start();
                }}
              />
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
