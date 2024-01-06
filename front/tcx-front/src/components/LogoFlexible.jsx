import React from "react";

export default function LogoFlexible(props) {
  return (
    // (props.width)? (n=80):();
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <img
        src="/logo.png"
        alt="Logo"
        className="max-w-full max-h-full bg-none w-80 h-20"
      />
      <img
        src="/MediCare.png"
        alt="Logo"
        className="max-w-full max-h-full bg-none w-40 h-40"
      />
    </div>
  );
}
