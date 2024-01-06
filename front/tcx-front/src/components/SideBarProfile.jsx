import React from "react";
import { Link } from "react-router-dom";

export default function SlideBarProfile() {
  return (
    <div className=" flex flex-col border-vert-foncé-1 bg-bg bg-opacity-20 p-2 text-sm h-screen max-w-50 divide-x-2 divide-x-reverse ">
      <h1 className="text-2xl ml-4">Mon Profil</h1>
      <ul className=" nav nav-pills flex-col p-0 mt-10">
        <li className=" nav-item mr-16 ">
            <i class="fa-solid fa-bell me-2 ml-5 p-3"></i>
            <span className="  text-black text-opacity-6">
              Info Personnelles
            </span>
        </li>
        <li className=" nav-item mr-16 ">
            <i class="fa-solid fa-circle-info me-2 ml-5 p-3"></i>
            <span className="  text-black text-opacity-6">Securité</span>
        </li>
      </ul>
    </div>
  );
}
