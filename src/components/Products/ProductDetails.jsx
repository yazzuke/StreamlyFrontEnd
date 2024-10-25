import { Image, Button } from "@nextui-org/react";
import RadioGroupMonthsAccounts from "./RadioGroupMonthsAccounts";
import RadioGroupTypeAccounts from "./RadioGroupTypeAccounts";
import CarrouselAccounts from "./CarrouselAccounts";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { fetchComboPrices, fetchPrice } from "../../utils/api";

export default function ProductDetails({ product, isCombo }) {
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedType, setSelectedType] = useState("Pantalla");
  const [price, setPrice] = useState(null);

 
  useEffect(() => {
    if (product && product.id) {
      if (isCombo) {
        fetchComboProductPrice();
      } else {
        fetchSingleProductPrice();
      }
    }
  }, [product, selectedMonth, selectedType, isCombo]);

  const fetchComboProductPrice = async () => {
    try {
      const prices = await fetchComboPrices(product.id);
      const selectedPrice = prices.find(
        (p) => p.months.toString() === selectedMonth && p.type === selectedType
      );
      setPrice(selectedPrice ? selectedPrice.price : null);
    } catch (error) {
      console.error("Error fetching combo prices: ", error);
    }
  };

  const fetchSingleProductPrice = async () => {
    try {
      const priceValue = await fetchPrice(product.id, selectedMonth, selectedType);
      setPrice(priceValue);
    } catch (error) {
      console.error("Error fetching product price: ", error);
    }
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-start w-full max-w-7xl mx-auto px-4 md:px-0 py-12">
      <Header />
      <div className="w-full md:w-1/2 md:mb-0 flex justify-center">
        <Image
          alt="img"
          className="rounded-xl h-[400px] md:h-[700px]"
          src={product.imageUrl}
          isBlurred
          isZoomed
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 md:space-x-10 mt-[-2.5rem] md:pl-8 sm:mt-[-2.5rem]">
        <h4 className="font-bold text-4xl md:text-6xl p-4 md:p-9 text-center md:text-left mb-2 md:mb-[-3rem] mt-16 md:mt-0">
          {isCombo ? product.name : product.serviceName}
        </h4>
        <p className="text-3xl md:text-3xl uppercase font-bold text-center md:text-left text-green-600 mt-[-1rem] md:mt-2">
          {price !== null ? `$${price}` : "Seleccione opciones"}
        </p>

        {/* Si el producto es un combo, renderizar la sección "¿Qué trae el combo?" aquí */}
        {isCombo && product.accountSvgs && (
          <div className="mt-8 px-4 md:px-0">
            <h3 className="text-2xl font-bold">¿Qué trae el combo?</h3>
            <div className="flex flex-wrap mt-4">
              {product.accountSvgs.map((svgUrl, index) => (
                <div key={index} className="flex items-center space-x-2 m-2">
                  <img
                    src={svgUrl}
                    alt={`Combo item ${index + 1}`}
                    className="h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center space-x-2 px-4 md:px-0">
          <RadioGroupMonthsAccounts
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        </div>
        <RadioGroupTypeAccounts
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <p className="text-base text-justify font-semibold px-4 md:px-0">
          {product.description}
        </p>
        <div className="flex justify-center px-4 md:px-0">
          <Button className="w-44">Agregar</Button>
        </div>
      </div>

      {/* Mantén el carrousel debajo de los detalles */}
      <div className="w-screen px-4 py-5">
        <h3 className="text-2xl font-bold text-left my-8">
          Cosas que te pueden interesar
        </h3>
        <CarrouselAccounts />
      </div>
    </div>
  );
}
