import axios from "axios";
import { auth } from "./firebaseConfig";

const API_URL = "http://localhost:8080/streamly";

// envia el token de autenticación en cada petición
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(true);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// Función para obtener el precio de una cuenta en base a su ID, meses y tipo
export const fetchPrice = async (accountId, months, type) => {
  try {
    const response = await axios.get(`${API_URL}/accounts/${accountId}/price`, {
      params: { months, type },
    });
    return response.data?.price || null;
  } catch (error) {
    console.error("Error al obtener el precio:", error);
    return null;
  }
};

// Función para obtener los detalles de una cuenta en base a su ID
export const fetchAccountById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/accounts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los detalles de la cuenta:", error);
    return null;
  }
};

// Función para obtener todas las cuentas disponibles
export const fetchAllAccounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las cuentas:", error);
    return [];
  }
};

// Función para obtener todos los combos disponibles
export const getAllCombos = async () => {
  try {
    const response = await axios.get(`${API_URL}/combos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los combos:", error);
    return [];
  }
};

// Función para obtener un combo específico en base a su ID
export const getComboById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/combos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el combo:", error);
    return null;
  }
};

// Función para obtener los precios de un combo específico
export const fetchComboPrices = async (comboId) => {
  try {
    const response = await axios.get(`${API_URL}/combos/${comboId}/prices`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los precios del combo:", error);
    return [];
  }
};

// Función para obtener todos los productos disponibles
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/allproducts`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
};

// Función para obtener todos los productos disponibles para el administrador
export const fetchAllAdminProducts = async () => {
  try {
    const response = await api.get(`/admin/products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos del admin:", error);
    return [];
  }
};

// Función para actualizar un producto existente en la base de datos
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.patch(
      `${API_URL}/admin/products/${id}`,
      updatedProduct,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error actualizando producto con id ${id}:`, error);
    throw error;
  }
};

// Función para obtener metadatos de servicios
export const fetchServiceMetadata = async () => {
  try {
    const response = await axios.get(`${API_URL}/metadata/services`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los metadatos del servicio:", error);
    throw error;
  }
};

// Función para crear una nueva cuenta usando metadatos de servicios
export const createAccount = async (newAccountData) => {
  try {
    const response = await axios.post(`${API_URL}/accounts`, newAccountData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear una nueva cuenta:", error);
    throw error;
  }
};

// Función para eliminar una cuenta en base a su ID
export const deleteAccountById = async (id) => {
  try {
    await axios.delete(`${API_URL}/accounts/${id}`);
    console.log(`Cuenta con ID ${id} eliminada exitosamente.`);
    return true;
  } catch (error) {
    console.error(`Error al eliminar la cuenta con ID ${id}:`, error);
    return false;
  }
};

// Función para crear un nuevo precio para una cuenta específica
export const createAccountPrice = async (accountId, priceData) => {
  try {
    const response = await axios.post(
      `${API_URL}/accounts/${accountId}/prices`,
      priceData
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear precio para la cuenta:", error);
    throw error;
  }
};

// Función para crear un nuevo combo
export const createCombo = async (newComboData) => {
  try {
    const response = await axios.post(`${API_URL}/combos`, newComboData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el combo:", error);
    throw error;
  }
};

// Función para crear un nuevo precio para un combo específico
export const createComboPrice = async (comboId, priceData) => {
  try {
    const response = await axios.post(
      `${API_URL}/combos/${comboId}/prices`,
      priceData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear precio para el combo:", error);
    throw error;
  }
};

// Función para eliminar un combo en base a su ID
export const deleteComboById = async (id) => {
  try {
    await axios.delete(`${API_URL}/combos/${id}`);
    console.log(`Combo con ID ${id} eliminado exitosamente.`);
    return true;
  } catch (error) {
    console.error(`Error al eliminar el combo con ID ${id}:`, error);
    return false;
  }
};
