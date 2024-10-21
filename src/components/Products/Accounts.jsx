import { useState } from "react";
import ProductCard from "./ProductCard";
import { Card, CardHeader, CardBody, Image, Button, Select, SelectItem, Tooltip} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { AccountsInfo } from "../../constants";


// Renderiza las cards de cada tipo de cuenta
const Account = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/accounts/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 ">
      {AccountsInfo.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          duration={item.duration}
          imageUrl={item.imageUrl}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Account;