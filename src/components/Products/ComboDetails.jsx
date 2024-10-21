import { useParams } from "react-router-dom";
import { ComboInfo } from "../../constants"; 
import ProductDetails from "./ProductDetails";

// Componente que renderiza la estructura del COMBO seleccionado y lo muestra individualmente en la página
export default function ComboDetails() {
  const { id } = useParams();
  
  // Desplazar hacia el inicio de la página
  window.scrollTo({
    top: 0, 
    behavior: "smooth", 
  });

  // Encontrar el combo seleccionado
  const combo = ComboInfo.find((item) => item.id === id);

  if (!combo) return <p>Combo no encontrado</p>;

  return (
    <ProductDetails product={combo} isCombo />
  );
}
