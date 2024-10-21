import { useParams } from "react-router-dom";
import { ComboInfo } from "../../constants"; 
import ProductDetails from "./ProductDetails";


// Componente que renderiza la estructura del COMBO seleccionado y lo muestra individualmente en la página
export default function ComboDetails() {
  const { id } = useParams();
  const combo = ComboInfo.find((item) => item.id === id);

  return <ProductDetails product={combo} />;
}
