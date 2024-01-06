import React from "react";
import SideBarRouting from "../../routes/SideBarRouting";
import RDVCard from "../components/RDVCard";

export default function DashBoard() {
  return (
    <div className="flex">
      <SideBarRouting />
      <div className="flex flex-col justify-around m-10 gap-10">
        <div className="font-extrabold text-3xl text-teal-600">Bienvenue Docteur</div>
        <div className="flex flex-row justify-center gap-5  ">
          <div className="flex flex-col justify-center ">
            <div>
              <div className="flex flex-col">
                <div className="text-bold text-3xl text-teal-600">
                  Votre Cabinet en Nombre!
                </div>
                <div className="text-base pY-2">
                  Découvrez l’activité de votre cabinet sur MediCare
                </div>
              </div>
              <div className="flex justify-around gap-4 p-5">
                <div className="w-80 h-80 rounded-full bg-teal-600 bg-opacity-45 flex flex-col justify-center items-center">
                  <div className="text-center font-bold text-4xl">+120</div>
                  <div className="text-center text-lg p-5">
                    Patient enregistrés chez vous grace a MediCare !
                  </div>
                </div>
                <div className="w-80 h-80 rounded-full bg-emerald-50 flex flex-col justify-center items-center">
                  <div className="text-center font-bold text-4xl">+100</div>
                  <div className="text-center text-xl p-5 ">
                    Consultations effectuées ce mois ci
                  </div>
                </div>
              </div>
              <div>
                <div className="text-bold text-3xl text-teal-600">
                  Comment se passent les enregistrement de vos patients
                  récemment ?
                </div>
              <div>
                <img src="graph.png" alt="Graph" width="630px"  height="280px"/>
              </div>
              </div>
            </div>
          </div>
            <div className="w-80 h-full">
              <div className="flex flex-col gap-3">
                <div className="text-bold text-3xl text-teal-600">
                  Vos Rendez-Vous Proches
                </div>
                <div className="textx-sm">
                  Besoin de contacter les parents ou de consulter leurs profils?
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <RDVCard />
                <RDVCard />
                <RDVCard />
                <RDVCard />
                <RDVCard />
                <RDVCard />
                <RDVCard />
                <RDVCard />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
