import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@nextui-org/react";
import { fetchAllAdminProducts } from "../../utils/api";
import EditProductInfoModal from "./EditProductInfoModal";

export default function AdminProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetchAllAdminProducts();
      setProducts(response);
    };
    getAllProducts();
  }, []);

  const handleSaveProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsModalOpen(false);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {products.map((product, index) => (
      <Card
      key={`${product.id}-${index}`} 
      className="max-w-[400px] max-h-[50rem] border border-default-200 shadow-lg"
    >
          <CardHeader className="flex gap-2 items-center p-2">
            <Image
              src={product.svgUrl || "https://via.placeholder.com/60"}
              alt="Producto"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">
                {product.serviceName || product.name}
              </p>
              <p className="text-xs text-default-500">
                {product.serviceName ? "Cuenta" : "Combo"}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-2">
            <div className="mb-1">
              <p className="text-md font-bold mb-1 ">Descripción:</p>
              <p className="text-sm text-justify">{product.description}</p>
            </div>
            <Divider className="my-2" />
            <div>
              <p className="text-lg font-bold mb-2">Precios Actuales</p>
              {product.prices.length > 0 ? (
                <>
                  <div className="mt-2">
                    {product.prices.some(
                      (price) => price.type === "Pantalla"
                    ) && (
                      <>
                        <p className="text-md font-bold">Pantalla:</p>
                        <ul className="list-disc list-inside text-sm font-semibold">
                          {product.prices
                            .filter((price) => price.type === "Pantalla")
                            .map((price, index) => (
                              <li key={index}>
                                {price.months} mes: ${price.price}
                              </li>
                            ))}
                        </ul>
                      </>
                    )}
                    <Divider className="my-1" />
                    {product.prices.some(
                      (price) => price.type === "Completa"
                    ) && (
                      <>
                        <p className="text-md font-bold mt-2">Completa:</p>
                        <ul className="list-disc list-inside font-semibold text-sm">
                          {product.prices
                            .filter((price) => price.type === "Completa")
                            .map((price, index) => (
                              <li key={index}>
                                {price.months} mes: ${price.price}
                              </li>
                            ))}
                        </ul>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-sm text-default-500">
                  No hay precios disponibles.
                </p>
              )}
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between items-center p-6">
            <Button
              auto
              flat
              color="warning"
              className="flex items-center gap-2"
              onPress={() => handleEditClick(product)}
            >
              Editar
            </Button>
            <Button color="error" className="flex items-center gap-2">
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      ))}
      {selectedProduct && (
        <EditProductInfoModal
          product={selectedProduct}
          onSave={handleSaveProduct}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </div>
  );
}