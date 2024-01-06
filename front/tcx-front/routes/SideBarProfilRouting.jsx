import React, { useState } from "react";

export default function MiniSideBar() {
  const [activeSection, setActiveSection] = useState(""); // Use state to track the active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="fixed h-full w-60">
      <h1 className="text-2xl ml-4">Mon Profil</h1>
      <ul className="nav nav-pills flex-col p-0 mt-10">
        <li
          className={`nav-item mr-16 ${
            activeSection === "notifedit" ? "active" : ""
          }`}
        >
          <button onClick={() => handleSectionClick("notifedit")}>
            <i className="fa-solid fa-bell me-2 ml-5 p-3"></i>
            <span className="text-black text-opacity-6">Info Personnelles</span>
          </button>
        </li>
        <li
          className={`nav-item mr-16 ${
            activeSection === "aide" ? "active" : ""
          }`}
        >
          <button onClick={() => handleSectionClick("aide")}>
            <i className="fa-solid fa-circle-info me-2 ml-5 p-3"></i>
            <span className="text-black text-opacity-6">Sécurité</span>
          </button>
        </li>
      </ul>

      {/* Render content based on active section */}
      {activeSection === "infopers" && <InfosPersonelles />}
      {activeSection === "securite" && <Securite />}
    </div>
  );
}
