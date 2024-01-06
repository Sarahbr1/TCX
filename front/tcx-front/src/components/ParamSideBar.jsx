import React, { useState } from "react";

export default function ProfilSideBar() {
  const [activeSection, setActiveSection] = useState(""); // Use state to track the active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className=" flex flex-row ">
      <div className=" w-fit">
        <h1 className="text-2xl ml-6 pl-3 mt-6 font-bold text-gray-600">Paramètres</h1>
        <ul className="nav nav-pills flex-col p-0 mt-10">
          <li
            className={`nav-item mr-16 ${
              activeSection === "notifedit" ? "active" : ""
            }`}
          >
            <button onClick={() => handleSectionClick("notifedit")}>
              <i className="fa-solid fa-bell me-2 ml-5 p-3 text-gray-600"></i>
              <span className=" text-opacity-6 text-gray-600">Notifications</span>
            </button>
          </li>
          <li
            className={`nav-item mr-16 ${
              activeSection === "aide" ? "active" : ""
            }`}
          >
            <button onClick={() => handleSectionClick("aide")}>
              <i className="fa-solid fa-circle-info me-2 ml-5 p-3 text-gray-600"></i>
              <span className=" text-opacity-6 text-gray-600">Aide</span>
            </button>
          </li>
        </ul>
      </div>
      <div className=" flex-1">
        {/* Render content based on active section */}
        {activeSection === "notifedit" && <NotifEdit />}
        {activeSection === "aide" && <Aide />}
      </div>
    </div>
  );
}
function NotifEdit() {
  return (
    <div className=" flex-row divide-y-2 mt-8 pl-5">
      <div className=" pb-4 mb-3 mt-3 pl-10">
        <p className=" text-2xl font-bold text-gray-600">Notifications</p>
        <p className=" pt-2 text-sm text-gray-600">
          Séléctionnez les types de notifications que vous souhaitez recevoir.
        </p>
      </div>
      <div className=" pb-4 mb-3 pt-4 pl-10">
        <p className=" text-vert-foncé-0 font-medium pb-4 ">
          Notifications par mail
        </p>
        <p className=" text-sm text-gray-600">
          Recevez des mails pour ne rien rater lorsque vous etes hors ligne.
          Vous pouvez desactiver cette option et la reactiver a tout moment
        </p>
      </div>
      <div className=" pb-4 mb-3 pt-4 pl-10">
        <p className=" text-vert-foncé-0 font-medium pb-4">
          Notifications push
        </p>
        <p className=" text-sm text-gray-600">
          Recevez des notifications push pour ne rien rater lorsque vous etes en
          ligne. Vous pouvez desactiver cette option et la reactiver a tout
          moment
        </p>
      </div>
      <div className=" pb-4 mb-3 pt-4 pl-10">
        <p className=" text-vert-foncé-0 font-medium pb-4">
          Notifications par SMS
        </p>
        <p className=" text-sm text-gray-600">
          Recevez des notifications par SMS sur votre téléphone pour ne rien
          rater lorsque vous etes hors ligne. Vous pouvez desactiver cette
          option et la reactiver a tout moment
        </p>
      </div>
    </div>
  );
}
function Aide() {
  return (
    <div className=" flex-row divide-y-2 mt-8 pl-5">
      <div className=" pb-4 mb-3 mt-3 pl-10">
        <p className=" text-2xl font-bold text-gray-600">Aide</p>
        <p className=" pt-2 text-sm text-gray-600">
          Vous avez des questions concernant MediCare? vous rencontrez un
          probleme lors de l’utilisation? ici vous touverez vos reponses{" "}
        </p>
      </div>
      <div className=" pb-4 mb-3 pt-4 px-10 ">
        <p className=" text-vert-foncé-0 font-medium pb-4">
          Signaler un problème
        </p>
        <p className=" text-sm text-gray-600">
          Vous avez rencontré un probleme? Expliquez nous brievement ce qui
          s’est passé ou ce qui ne fonctionne pas
        </p>
        <textarea
          name="signal"
          placeholder="Signaler votre problème ici..."
          className=" resize-none border-2 outline-none p-2 mt-8 w-full h-[180px]  rounded-lg border-vert-foncé-0"
        ></textarea>
        <div className=" flex w-full justify-end">
          <button className=" block bg-vert-foncé-0 text-white pl-5 pr-5 rounded-md pt-2 pb-2">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
