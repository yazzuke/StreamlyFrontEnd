import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { fetchServiceMetadata, createAccount, createAccountPrice } from "../../utils/api";
import {showSuccessToast, showErrorToast} from "../../utils/toastNotification";

export default function AddAccountModal({ isOpen, onOpenChange, onSave }) {
  const [serviceMetadata, setServiceMetadata] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [createdAccount, setCreatedAccount] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetchServiceMetadata();
        setServiceMetadata(response);
      } catch (error) {
        console.error("Error fetching service metadata:", error);
      }
    };
    if (isOpen) {
      fetchMetadata();
    }
  }, [isOpen]);

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  const handleCreateAccount = async () => {
    try {
      const selectedMetadata = serviceMetadata.find(
        (service) => service.id.toString() === selectedService
      );
      if (!selectedMetadata) {
        throw new Error("Service metadata not found");
      }
      const newAccount = {
        serviceName: selectedMetadata.serviceName,
        description: selectedMetadata.description,
        imageUrl: selectedMetadata.imageUrl,
        svgUrl: selectedMetadata.svgUrl,
      };

      const response = await createAccount(newAccount);
      setCreatedAccount(response);

      showSuccessToast("Cuenta creada exitosamente");

      setPrices([
        { months: 1, price: 0, type: "Pantalla" },
        { months: 3, price: 0, type: "Pantalla" },
        { months: 6, price: 0, type: "Pantalla" },
        { months: 1, price: 0, type: "Completa" },
        { months: 3, price: 0, type: "Completa" },
        { months: 6, price: 0, type: "Completa" },
      ]);
    } catch (error) {
      console.error("Error creating account:", error);
      showErrorToast("Error al crear la cuenta");
    }
  };

  const handlePriceChange = (index, field, value) => {
    const updatedPrices = [...prices];
    updatedPrices[index][field] = value;
    setPrices(updatedPrices);
  };

  const handleSavePrices = async () => {
    try {
      for (const price of prices) {
        await createAccountPrice(createdAccount.id, price);
      }
      onSave(createdAccount);
      onOpenChange(false); 
      showSuccessToast("Precios guardados exitosamente");
    } catch (error) {
      console.error("Error saving prices:", error);
      showErrorToast("Error al guardar los precios");
    }
  };

  return (
    <Modal
      className="dark max-w-[55rem] max-h-[85vh] overflow-y-auto"
      size="md"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="dark flex flex-col gap-1">
              Agregar Nuevo Servicio
            </ModalHeader>
            <ModalBody>
              <div className="dark flex flex-col gap-4">
                {!createdAccount ? (
                  <>
                    <Select
                      label="Seleccionar Servicio"
                      className="dark"
                      placeholder="Selecciona un servicio para crear la cuenta"
                      selectedKeys={selectedService ? [selectedService] : []}
                      onSelectionChange={(keys) => handleServiceChange([...keys][0])}
                      fullWidth
                      variant="flat" 
                    >
                      {serviceMetadata.map((service) => (
                        <SelectItem 
                        className="text-black "
                        key={service.id} value={service.id.toString()}>
                          {service.serviceName}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button
                      color="primary"
                      onPress={handleCreateAccount}
                      disabled={!selectedService}
                    >
                      Crear Cuenta
                    </Button>
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-bold">Agregar Precios:</h4>
                    {prices.map((price, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Input
                          label={`Meses (${price.type})`}
                          type="number"
                          value={price.months}
                          disabled
                          fullWidth
                        />
                        <Input
                          label={`Precio (${price.type})`}
                          type="number"
                          value={price.price}
                          onChange={(e) =>
                            handlePriceChange(index, "price", e.target.value)
                          }
                          fullWidth
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              {createdAccount && (
                <Button color="primary" onPress={handleSavePrices}>
                  Guardar Precios
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
