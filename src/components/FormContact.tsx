import React from "react";

const FormContact = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-6 bg-black backdrop-blur-md">
      <div className="hero min-h-full max-w-full">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          <div className="text-center lg:text-left  text-white">
            <h1 className="text-xl lg:text-2xl font-bold">
              FORMULARIO DE EJEMPLO CONTACTO
            </h1>
            <p className="py-2 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl mt-6 lg:mt-0">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <input
                  type="text"
                  placeholder="Mensaje"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
