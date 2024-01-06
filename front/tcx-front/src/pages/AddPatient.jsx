import React from "react";
import { useForm } from "react-hook-form";
import SideBarRouting from "../../routes/SideBarRouting";

export default function AddPatient() {
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
          Ajouter un Patient
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
              placeholder="Nom"
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
              placeholder="Prénom"
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="age"
              className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
            >
              Age
            </label>
            <input
              id="age"
              {...register("password", { minLength: 2 })}
              placeholder="Age"
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="phone"
              className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
            >
              Numéro de Téléphone (optionel)
            </label>
            <input
              id="phone"
              {...register("password", { minLength: 2 })}
              placeholder="Phone number"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-end">
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
