import React from "react";
import { useForm } from "react-hook-form";

export default function Securite() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data here
  };

  return (
          <form onSubmit={handleSubmit(console.log)}>
          <div className="flex flex-col items-center justify-center mt-8 w-full gap-6 relative z-10 ">
            <div className="  text-2xl font-bold  text-gray-600">
              Sécurité
            </div>
            <div className=" w-full  p-6  flex flex-col justify-between gap-8">
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
                <div>
                  <label
                    for="pswconf"
                    className="block text-gray-600 opacity-100 text-sm font-bold mb-2"
                  >
                    Confirmez votre mot de passe
                  </label>
                  <input
                    id="pswconf"
                    {...register("password", { minLength: 2 })}
                    placeholder="Confirm Password"
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
                    placeholder="Confirm Password"
                    type="numbers"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
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