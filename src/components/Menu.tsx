import Link from "next/link";
import React from "react";
import { FcPlus } from "react-icons/fc";
import { rutas } from "@/config/routes";
const Menu = () => {
  return (
    <>
      {/* < className="btn btn-circle"> */}
      <div className="dropdown dropdown-top ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 btn btn-circle bg-red-600 border-emerald-200"
        >
          <FcPlus style={{ width: 43, height: 43 }} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {rutas.map((ruta) => (
            <li key={ruta.id}>
              <Link href={ruta.src}>{ruta.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
