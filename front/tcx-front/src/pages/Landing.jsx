import React from "react";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import { useState } from "react";

export default function Landing() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="background.png"
          alt="Background Image"
          className="w-full h-full object-cover h-screen"
        />
      </div>
      <div className="flex justify-center items-center h-auto">
        <img
          src="/logo.png"
          alt="Logo"
          className="max-w-full max-h-full bg-none"
          height="120"
          width="120"
        />
        <img
          src="/MediCare.png"
          alt="Logo"
          className="max-w-full max-h-full bg-none"
          height="120"
          width="315"
        />
      </div>
      <div className="flex flex-col top-20 items-center justify-start h-[100vh] gap-6 w-full relative z-10">
        <div className="w-4/5 h-168  font-bold text-6xl align-middle text-center text-zinc-300">
          Vos Patients, Votre Pratique, Parfaitement Gérés.
        </div>
        <div className="w-2/4 h-168  text-xl align-middle text-center text-zinc-300">
          Facilitez la gestion de votre pratique médicale avec MediCare. Une
          interface conviviale pour une gestion intuitive, permettant aux
          médecins de consacrer plus de temps à la qualité des soins.
        </div>
        <div className="flex flex-col items-center justify-around gap-3">
          <button
            onClick={() => handleComponentChange("connexion")}
            className="w-56 text-base rounded-full font-bold px-6 py-3 shadow-lg bg-zinc-300 text-gray-600"
          >
            Connectez vous
          </button>
          <div className="text-[-0.75em] text-center text-zinc-300 ">
            Vous n'avez pas de compte?
          </div>
          <button
            onClick={() => handleComponentChange("inscription")}
            className="border-2 w-56 text-base font-bold border-zinc-300 text-white rounded-full px-6 py-3 focus:outline-none"
          >
            Inscrivez Vous
          </button>
        </div>
        {activeComponent === "connexion" && <Connexion />}
        {activeComponent === "inscription" && <Inscription />}
      </div>
    </div>
  );
}
