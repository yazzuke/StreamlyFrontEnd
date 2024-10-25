import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComboById } from "../../utils/api";
import ProductDetails from "./ProductDetails";

// Componente que renderiza la estructura del COMBO seleccionado y lo muestra individualmente en la página
export default function ComboDetails() {
  const { id } = useParams();
  const [combo, setCombo] = useState(null);

  useEffect(() => {
    getComboById(id)
      .then((data) => setCombo(data))
      .catch((error) => console.error(`Error al obtener el combo con id ${id}:`, error));
  }, [id]);

  if (!combo) return <p>Combo no encontrado</p>;

  return <ProductDetails product={combo} isCombo />;
}
