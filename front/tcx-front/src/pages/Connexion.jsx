import React from "react";
import TextFields from "../components/TextFields";
import SubmitButton from "../components/SubmitButton";
import FlexibleForm from "../components/FlexibleForm";
import { useForm } from "react-hook-form";
import RDVCard from "../components/RDVCard";

export default function connexion() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data here
  };

  

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="background.png"
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>

        <form onSubmit={handleSubmit(console.log)}>
          <div className="flex flex-col items-center justify-center h-[100vh] gap-6 w-full relative z-10 ">
            <div className="  text-6xl font-bold  text-center text-zinc-100">
              Connexion
            </div>
            <div className=" w-3/6  p-6 bg-white shadow-md rounded-md flex flex-col justify-between gap-8">
              <div>
                <label
                  for="mail"
                  className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="mail"
                  {...register("email", { required: true })}
                  placeholder="Your mail"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="psw"
                  className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                >
                  Mot de Passe
                </label>
                <input
                  id="psw"
                  {...register("password", { minLength: 2 })}
                  placeholder="Enter Password"
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Se Connecter"
                  onClick={onSubmit}
                  className="w-56 align-center rounded-full px-6 py-3 shadow-lg bg-zinc-300 text-gray-600"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
