import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Función para mostrar una notificación de éxito
export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,  // Asegúrate de que `Bounce` esté importado
  });
};

// Función para mostrar una notificación de error
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,  // Asegúrate de que `Bounce` esté importado
  });
};


