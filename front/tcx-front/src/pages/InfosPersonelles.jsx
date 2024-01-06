import React from "react";
import SideBar from "../components/SideBar";
import SideBarRouting from "../../routes/SideBarRouting";
import { useForm } from "react-hook-form";

export default function InfosPersonelles() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data here
  };

  return (
          <form onSubmit={handleSubmit(console.log)}>
          <div className="flex flex-col items-center justify-center h-[100vh] w-full gap-6 relative z-10 ">
            <div className="  text-2xl font-bold  text-gray-600">
              Informations Personnelles
            </div>
            <div className=" w-full  p-6  flex flex-col justify-between gap-8">
              <div>
                  <label
                    for="nom"
                    className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    {...register("email", { required: true })}
                    placeholder="Your mail"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="prenom"
                    className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    {...register("password", { minLength: 2 })}
                    placeholder="Enter Password"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="specialty"
                    className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                  >
                    Spécialité
                  </label>
                  <select id="specialty" className="w-full p-2 border border-gray-300 rounded-md text-zinc-400 focus:outline-none focus:border-blue-500" {...register("specialty")}>
                    <option value="" >Select...</option>
                    <option value="A">Spécialité A</option>
                    <option value="B">Spécialité B</option>
                    <option value="C">Spécialité C</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-end">
                <input
                  type="submit"
                  value="Enregister"
                  onClick={onSubmit}
                  className="w-52 align-center font-bold rounded-2xl px-6 py-3 shadow-lg bg-emerald-400 text-zinc-100"
                />
              </div>
            </div>
          </form>

  );
}
