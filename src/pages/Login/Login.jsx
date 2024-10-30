import Section from "../../components/Section";
import Header from "../../components/Header/Header";
import AuthForm from "../../components/Auth/AuthForm";
import {
  loginFormFields,
  loginButtonText,
  loginFooterText,
  loginFooterLink,
} from "../../constants/index";
import GoogleLoginButton from "../../components/Auth/GoogleLoginButton";
import { loginWithEmail, loginWithGoogle } from "../../components/Auth/authService";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from "../../utils/api";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async ({ email, password }) => {
    setError(""); // Reset any previous error
    try {
      await loginWithEmail(email, password);
      navigate("/"); // Redirect to the main page or dashboard
    } catch (err) {
      console.error("Error en el inicio de sesión:", err);
      setError("Error al iniciar sesión. Verifique sus credenciales.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await loginWithGoogle();
      const token = await userCredential.user.getIdToken();

      console.log("Token:", token); 
      // Sincronizar con el backend
      await api.post("/users/register", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate("/");
    } catch (err) {
      console.error("Error en el inicio de sesión con Google:", err);
      setError("Error al iniciar sesión con Google.");
    }
  };

  return (
    <Section className="pt-[6rem] overflow-hidden" crosses customPaddings id="login">
      <Header />
      <div className="container relative rounded-lg py-8 mb-[6.9rem] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <AuthForm
          title="Iniciar Sesión"
          fields={loginFormFields}
          buttonText={loginButtonText}
          footerText={loginFooterText}
          footerLink={loginFooterLink}
          onSubmit={handleEmailLogin} // Manejo del login con email y contraseña
        />
        <GoogleLoginButton onClick={handleGoogleLogin} /> {/* Login con Google */}
      </div>
    </Section>
  );
};

export default Login;
