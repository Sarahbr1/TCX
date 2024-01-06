import React, { useState } from "react";
import InfosPersonelles from "../pages/InfosPersonelles";
import Securite from "../pages/Securite";
export default function ProfilSideBar() {
  const [activeSection, setActiveSection] = useState(""); // Use state to track the active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className=" flex flex-row ">
      <div className=" w-fit">
        <h1 className="text-2xl ml-6 pl-3 mt-6 font-bold text-gray-600">Mon profil</h1>
        <ul className="nav nav-pills flex-col p-0 mt-10">
          <li
            className={`nav-item mr-16 ${
              activeSection === "profiledit" ? "active" : ""
            }`}
          >
            <button onClick={() => handleSectionClick("profiledit")}>
            <i class="fa-solid fa-user-pen me-2 ml-5 p-3 text-gray-600"></i>
              <span className="text-gray-600 text-opacity-6">Informations personnelles</span>
            </button>
          </li>
          <li
            className={`nav-item mr-16 ${
              activeSection === "security" ? "active" : ""
            }`}
          >
            <button onClick={() => handleSectionClick("security")}>
            <i class="fa-solid fa-lock me-2 ml-5 p-3 text-gray-600"></i>
              <span className="text-gray-600 text-opacity-6">Sécurité</span>
            </button>
          </li>
        </ul>
      </div>
      <div className=" flex-1">
        {/* Render content based on active section */}
        {activeSection === "profiledit" && <ProfilEdit />}
        {activeSection === "security" && <Security />}
      </div>
    </div>
  );
}

function ProfilEdit() {
  return (
    <InfosPersonelles></InfosPersonelles>
  )}
 
function Security(){
  return(
    <Securite></Securite>
  )
}