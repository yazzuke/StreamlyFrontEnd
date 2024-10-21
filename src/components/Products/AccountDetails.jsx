import { useParams } from "react-router-dom";
import { AccountsInfo } from "../../constants"; 
import ProductDetails from "./ProductDetails";


   // Componente que renderiza la estructura de la CUENTA / PRODUCTO seleccionada y lo muestra individualmente en la página
export default function AccountsDetails() {
  const { id } = useParams();
    window.scrollTo({
      top: 0, 
      behavior: "smooth", 
    });
  const account = AccountsInfo.find((item) => item.id === id);

  return <ProductDetails product={account} />;
}
