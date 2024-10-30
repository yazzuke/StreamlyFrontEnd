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
import {
  fetchAllAdminProducts,
  deleteAccountById,
  deleteComboById,
} from "../../utils/api";
import EditProductInfoModal from "./EditProductInfoModal";

export default function AdminProductCard() {
  const [accounts, setAccounts] = useState([]);
  const [combos, setCombos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetchAllAdminProducts();

      // Filtrar cuentas y combos en función de si tienen 'serviceName' o 'name'
      const accountsData = response.filter((product) => product.serviceName);
      const combosData = response.filter((product) => product.name);

      setAccounts(accountsData);
      setCombos(combosData);
    };
    getAllProducts();
  }, []);

  const handleDeleteAccount = async (accountId) => {
    const success = await deleteAccountById(accountId);
    if (success) {
      setAccounts((prevAccounts) =>
        prevAccounts.filter((account) => account.id !== accountId)
      );
    }
  };

  const handleDeleteCombo = async (comboId) => {
    const success = await deleteComboById(comboId);
    if (success) {
      setCombos((prevCombos) =>
        prevCombos.filter((combo) => combo.id !== comboId)
      );
    }
  };

  const handleSaveProduct = (updatedProduct, type) => {
    if (type === "account") {
      setAccounts((prevAccounts) =>
        prevAccounts.map((account) =>
          account.id === updatedProduct.id ? updatedProduct : account
        )
      );
    } else if (type === "combo") {
      setCombos((prevCombos) =>
        prevCombos.map((combo) =>
          combo.id === updatedProduct.id ? updatedProduct : combo
        )
      );
    }
    setIsModalOpen(false);
  };

  const handleEditClick = (product, type) => {
    setSelectedProduct(product);
    setSelectedProductType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {accounts.map((account) => (
        <Card
          key={`account-${account.id}`}
          className="max-w-[400px] max-h-[50rem] border border-default-200 shadow-lg"
        >
          <CardHeader className="flex gap-2 items-center p-2">
            <Image
              src={account.svgUrl || "https://via.placeholder.com/60"}
              alt="Producto"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{account.serviceName}</p>
              <p className="text-xs text-default-500">Cuenta</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-2">
            <div className="mb-1">
              <p className="text-md font-bold mb-1 ">Descripción:</p>
              <p className="text-sm text-justify">{account.description}</p>
            </div>
            <Divider className="my-2" />
            <div>
              <p className="text-lg font-bold mb-2">Precios Actuales</p>
              {account.prices?.length > 0 ? (
                <>
                  <div className="mt-2">
                    {account.prices.some(
                      (price) => price.type === "Pantalla"
                    ) && (
                      <>
                        <p className="text-md font-bold">Pantalla:</p>
                        <ul className="list-disc list-inside text-sm font-semibold">
                          {account.prices
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
                    {account.prices.some(
                      (price) => price.type === "Completa"
                    ) && (
                      <>
                        <p className="text-md font-bold mt-2">Completa:</p>
                        <ul className="list-disc list-inside font-semibold text-sm">
                          {account.prices
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
              onPress={() => handleEditClick(account, "account")}
            >
              Editar
            </Button>
            <Button
              color="error"
              onPress={() => handleDeleteAccount(account.id)}
              className="flex items-center gap-2"
            >
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      ))}
      {combos.map((combo) => (
        <Card
          key={`combo-${combo.id}`}
          className="max-w-[400px] max-h-[50rem] border border-default-200 shadow-lg"
        >
          <CardHeader className="flex gap-2 items-center p-2">
            <Image
              src={combo.imageUrl || "https://via.placeholder.com/60"}
              alt="Producto"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{combo.name}</p>
              <p className="text-xs text-default-500">Combo</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-2">
            <div className="mb-1">
              <p className="text-md font-bold mb-1 ">Descripción:</p>
              <p className="text-sm text-justify">{combo.description}</p>
            </div>
            <Divider className="my-2" />
            <div>
              <p className="text-lg font-bold mb-2">Precios Actuales</p>
              {combo.prices?.length > 0 ? (
                <>
                  <div className="mt-2">
                    {combo.prices.some(
                      (price) => price.type === "Pantalla"
                    ) && (
                      <>
                        <p className="text-md font-bold">Pantalla:</p>
                        <ul className="list-disc list-inside text-sm font-semibold">
                          {combo.prices
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
                    {combo.prices.some(
                      (price) => price.type === "Completa"
                    ) && (
                      <>
                        <p className="text-md font-bold mt-2">Completa:</p>
                        <ul className="list-disc list-inside font-semibold text-sm">
                          {combo.prices
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
              onPress={() => handleEditClick(combo, "combo")}
            >
              Editar
            </Button>
            <Button
              color="error"
              className="flex items-center gap-2"
              onPress={() => handleDeleteCombo(combo.id)}
            >
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      ))}
      {selectedProduct && (
        <EditProductInfoModal
          product={selectedProduct}
          type={selectedProductType}
          onSave={(updatedProduct) =>
            handleSaveProduct(updatedProduct, selectedProductType)
          }
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </div>
  );
}
