import React from "react";

const SubmitButton = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-md ${className}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
