import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchAllAccounts } from "../../utils/api"; // Importamos la función del archivo api.js

const Account = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  // Llamada al backend para obtener las cuentas disponibles
  useEffect(() => {
    const getAccounts = async () => {
      const accountsData = await fetchAllAccounts();
      setAccounts(accountsData);
    };
    getAccounts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/accounts/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-center space-x-2 md:space-x-5">
      {accounts.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.serviceName}
          price={item.lowestPrice}
          imageUrl={item.imageUrl}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Account;
