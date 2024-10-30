import { auth } from "../../utils/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Proveedor de Google para autenticación
const googleProvider = new GoogleAuthProvider();

// Registro con email y contraseña
export const registerWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Inicio de sesión con email y contraseña
export const loginWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Inicio de sesión con Google
export const loginWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

// Cierre de sesión
export const logout = async () => {
  return signOut(auth);
};