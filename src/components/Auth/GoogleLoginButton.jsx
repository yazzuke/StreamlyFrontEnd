import React from "react";
import {googlesvg} from "../../assets/index";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-white text-gray-800 rounded-lg shadow-md py-2 px-4 mt-4 w-full hover:bg-gray-100 transition"
      onClick={onClick}
    >
      <img src={googlesvg} alt="Google Icon" className="h-5 mr-2" />
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleLoginButton;
