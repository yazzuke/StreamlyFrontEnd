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

export default function AdminProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetchAllAdminProducts();
      setProducts(response);
    };
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10 p-1">
      {products.map((product) => (
        <Card key={product.id} className="w-full max-w-[500px] border border-default-200 shadow-2xl">
          <CardHeader className="flex gap-4 items-center p-3">
            <Image
              src={product.svgUrl || "https://via.placeholder.com/80"}
              alt="Producto"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-xl font-bold">{product.serviceName || product.name}</p>
              <p className="text-sm text-default-500">{product.serviceName ? "Cuenta" : "Combo"}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-3">
            <div className="mb-6">
              <p className="text-lg font-bold mb-2">Descripción:</p>
              <p className="text-base text-default-500">
                {product.description}
              </p>
            </div>
            <Divider className="my-1" />
            <div>
              <p className="text-lg font-bold mb-2">Precios Actuales:</p>
              {product.prices.length > 0 ? (
                <>
                  <div>
                    {product.prices.some((price) => price.type === "Pantalla") && (
                      <>
                        <p className="text-md font-bold">Pantalla:</p>
                        <ul className="list-disc list-inside font-semi-bold text-base">
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
                    {product.prices.some((price) => price.type === "Completa") && (
                      <>
                        <p className="text-md font-bold mt-4">Completa:</p>
                        <ul className="list-disc list-inside font-semi-bold text-base">
                          {product.prices
                            .filter((price) => price.type === "Completa")
                            .map((price, index) => (
                              <li key={index}>
                                {price.months} mes: {price.price}
                              </li>
                            ))}
                        </ul>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-base text-default-500">No hay precios disponibles.</p>
              )}
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between items-center p-6">
            <Button auto flat color="warning" className="flex items-center gap-2">
              Editar
            </Button>
            <Button  color="error" className="flex items-center gap-2">
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
