import ProductCard from './ProductCard';
import { ComboInfo } from "../../constants/index";
import { useNavigate } from "react-router-dom";
import { getAllCombos } from "../../utils/api";
import { useEffect, useState } from "react";


// Renderiza las cards de cada combo
const ComboAccounts = () => {
const navigate = useNavigate();
const [combos, setCombos] = useState([]);

useEffect(() => {
    // Llamada al backend para obtener los combos disponibles
    getAllCombos()
      .then((data) => setCombos(data))
      .catch((error) => console.error("Error al obtener los combos:", error));
  
  }, []);

const handleCardClick = (id) => {
    navigate(`/combos/${id}`);
  };


  return (
    <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
      {combos.map((combo) => (
        <ProductCard
          key={combo.id}
          id={combo.id}
          title={combo.name}
          price={combo.lowestPrice}  // Mostrar el precio más bajo para el combo
          imageUrl={combo.imageUrl}
          onClick={() => handleCardClick(combo.id)}
        />
      ))}
    </div>
  );
};


export default ComboAccounts;
