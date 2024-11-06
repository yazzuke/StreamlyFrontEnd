import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import api from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token")); // Carga el token de localStorage

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        let fetchedToken = token;

        // Si no hay token en el estado, genera uno nuevo; si ya existe, úsalo
        if (!token) {
          fetchedToken = await firebaseUser.getIdToken(true);
          localStorage.setItem("token", fetchedToken); // Guarda el token en localStorage
          setToken(fetchedToken); // Guarda el token en el estado
          console.log("Token:", fetchedToken);
        }

        // Obtiene el rol del usuario en el backend
        try {
          const response = await api.get("/users/role", {
            headers: { Authorization: `Bearer ${fetchedToken}` },
          });
          setUser({ ...firebaseUser, role: response.data.role });
        } catch (error) {
          console.error("Error fetching user role:", error);
          if (error.response && error.response.status === 403) {
            console.error("Acceso prohibido: asegúrate de que el token es válido y el usuario tiene el rol correcto.");
          }
        }
      } else {
        // Usuario no autenticado
        setUser(null);
        setToken(null);
        localStorage.removeItem("token"); // Limpia el token de localStorage
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [token]); // Añadir `token` a la lista de dependencias

  return (
    <AuthContext.Provider value={{ user, token, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
