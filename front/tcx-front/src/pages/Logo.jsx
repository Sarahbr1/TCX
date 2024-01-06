import React from "react";


export default function Logo() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <img
        src="/logo.png"
        alt="Logo"
        className="max-w-full max-h-full bg-none"
      />
      <img
        src="/MediCare.png"
        alt="Logo"
        className="max-w-full max-h-full bg-none"
      />
    </div>
  );
}
