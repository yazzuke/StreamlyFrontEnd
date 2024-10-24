import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { fetchAccountById } from "../../utils/api"; // Importamos la función del archivo api.js

export default function AccountsDetails() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);

  // Usamos useEffect para obtener los datos de la cuenta por su id
  useEffect(() => {
    const getAccount = async () => {
      const accountData = await fetchAccountById(id);
      setAccount(accountData);
    };
    getAccount();
  }, [id]);

  if (!account) {
    return <div>Cargando...</div>; // Loading state mientras los datos se obtienen
  }

  return <ProductDetails product={account} />;
}
