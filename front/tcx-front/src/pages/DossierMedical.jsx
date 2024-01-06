import React from "react";
import { useForm } from "react-hook-form";
import SideBarRouting from "../../routes/SideBarRouting";

export default function DossierMedical() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data here
  };

  return (
    <div className="flex ">
      <SideBarRouting />
      <form onSubmit={handleSubmit(console.log)}>
        <div className="flex flex-col mx-10 items-center justify-center h-[100vh] w-[80vw] gap-6 relative z-10 ">
          <div className="  text-2xl font-bold  text-gray-600">
            Remplir le dossier médical
          </div>
          <div className=" w-full  p-6  flex flex-col justify-between gap-8">
            <div>
              <label
                for="nom"
                className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
              >
                Antécédents méidcaux antérieurs
              </label>
              <textarea
                id="nom"
                {...register("email", { required: true })}
                placeholder="Antécédents méidcaux antérieurs"
                type="text"
                className="w-full p-2 resize-none h-[80px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label
                for="prenom"
                className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
              >
                Allérgies
              </label>
              <textarea
                id="prenom"
                {...register("password", { minLength: 2 })}
                placeholder="Enter Password"
                type="Allérgies"
                className="w-full p-2 resize-none h-[80px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="age"
                className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
              >
                Antécédents médicaux familiaux
              </label>
              <textarea
                id="age"
                {...register("password", { minLength: 2 })}
                placeholder="Antécédents médicaux familiaux"
                type="password"
                className="w-full p-2 resize-none h-[80px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <input
              type="submit"
              value="Ajouter consultation"
              onClick={onSubmit}
              className="border-2 w-56 text-base font-bold border-zinc-300 text-white text-gray-400 rounded-2xl px-6 py-3"
            />
            <input
              type="submit"
              value="Suivant"
              onClick={onSubmit}
              className="w-52 align-center font-bold rounded-2xl px-6 py-3 shadow-lg bg-emerald-400 text-zinc-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
