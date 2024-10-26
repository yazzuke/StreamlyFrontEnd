import axios from "axios";

const API_URL = "http://localhost:8080/streamly";

// Función para obtener el precio de una cuenta por su id, meses y tipo
export const fetchPrice = async (accountId, months, type) => {
  try {
    const response = await fetch(
      `http://localhost:8080/streamly/accounts/${accountId}/price?months=${months}&type=${type}`
    );
    const data = await response.json();

    if (data && data.price) {
      return data.price;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el precio:", error);
    return null;
  }
};

// Función para obtener los detalles de una cuenta por su id
export const fetchAccountById = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/streamly/accounts/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los detalles de la cuenta:", error);
    return null;
  }
};

// Función para obtener todas las cuentas disponibles
export const fetchAllAccounts = async () => {
  try {
    const response = await fetch("http://localhost:8080/streamly/accounts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las cuentas:", error);
    return [];
  }
};

export const getAllCombos = async () => {
  try {
    const response = await axios.get(`${API_URL}/combos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los combos:", error);
    return [];
  }
};

export const getComboById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/combos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el combo:", error);
    return null;
  }
};


// Función para obtener todos los precios de un combo específico
export const fetchComboPrices = async (comboId) => {
  try {
    const response = await axios.get(`${API_URL}/combos/${comboId}/prices`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los precios del combo:", error);
    return [];
  }
};


export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/allproducts`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
};

// Función para obtener todos los productos para el admin
export const fetchAllAdminProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin/products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos del admin:", error);
    return [];
  }
};

// funcion para obtener los detalles de un producto por su id
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`${API_URL}/admin/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error(`Error actualizando producto con id ${id}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
