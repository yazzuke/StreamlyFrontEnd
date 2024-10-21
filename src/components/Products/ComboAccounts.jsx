import ProductCard from './ProductCard';
import { ComboInfo } from "../../constants/index";
import { useNavigate } from "react-router-dom";


// Renderiza las cards de cada combo
const ComboAccounts = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/combos/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 ">
      {ComboInfo.map((combo) => (
        <ProductCard
          key={combo.id}
          id={combo.id}
          title={combo.title}
          price={combo.price}
          duration={combo.duration}
          imageUrl={combo.imageUrl}
          onClick={() => handleCardClick(combo.id)}
        />
      ))}
    </div>
  );
};

export default ComboAccounts;
