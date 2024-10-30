import Section from "../../components/Section";
import Header from "../../components/Header/Header";
import AuthForm from "../../components/Auth/AuthForm";
import {
  RegisterFormFields,
  RegisterButtonText,
  RegisterFooterLink,
} from "../../constants/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api"; // Asegúrate de importar api

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async ({ email, password, displayName }) => {
    setError(""); // Reset any previous error
    try {
      // Llamada al backend para crear el usuario en Firebase y sincronizar en MySQL
      await api.post("/users/registermanual", {
        email,
        password,
        displayName,
      });

      // Redirigir al login o a la página principal tras el registro exitoso
      navigate("/");
    } catch (err) {
      console.error("Error en el registro manual:", err);
      setError("Error al registrarse. Inténtelo de nuevo.");
    }
  };

  return (
    <Section
      className="pt-[5rem] overflow-hidden"
      crosses
      customPaddings
      id="register"
    >
      <Header />
      <div className="container relative rounded-lg py-8 mb-[4.8rem] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <AuthForm
          title="Regístrate"
          fields={RegisterFormFields}
          buttonText={RegisterButtonText}
          footerLink={RegisterFooterLink}
          onSubmit={handleRegister}
        />
      </div>
    </Section>
  );
};

export default Register;
