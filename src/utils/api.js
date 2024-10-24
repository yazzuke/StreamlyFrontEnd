
// Función para obtener el precio de una cuenta por su id, meses y tipo
export const fetchPrice = async (accountId, months, type) => {
    try {
      const response = await fetch(`http://localhost:8080/streamly/accounts/${accountId}/price?months=${months}&type=${type}`);
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
    const response = await fetch(`http://localhost:8080/streamly/accounts/${id}`);
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