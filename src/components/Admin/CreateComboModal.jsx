import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { createCombo, fetchAllAccounts, createComboPrice } from "../../utils/api";
import { showSuccessToast, showErrorToast } from "../../utils/toastNotification";

export default function CreateComboModal({ isOpen, onOpenChange, onComboCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    selectedAccounts: [],
  });
  const [availableAccounts, setAvailableAccounts] = useState([]);
  const [createdCombo, setCreatedCombo] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Obtener todas las cuentas disponibles para asociar al combo
    const getAccounts = async () => {
      const accounts = await fetchAllAccounts();
      setAvailableAccounts(accounts);
    };
    if (isOpen) {
      getAccounts();
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedIds) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedAccounts: selectedIds,
    }));
  };

  const handleCreateCombo = async () => {
    try {
      // Crear el combo con la información del formulario
      const comboData = {
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl,
        accounts: formData.selectedAccounts.map((id) => ({ id })),
      };
      const response = await createCombo(comboData);
      setCreatedCombo(response);

      showSuccessToast("Combo creado exitosamente");

      // Inicializar los precios para las cuentas seleccionadas
      setPrices([
        { months: 1, price: 0, type: "Pantalla" },
        { months: 3, price: 0, type: "Pantalla" },
        { months: 6, price: 0, type: "Pantalla" },
        { months: 1, price: 0, type: "Completa" },
        { months: 3, price: 0, type: "Completa" },
        { months: 6, price: 0, type: "Completa" },
      ]);
    } catch (error) {
      console.error("Error creando el combo:", error);
      showErrorToast("Error al crear el combo");
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
        await createComboPrice(createdCombo.id, price);
      }
      onComboCreated(createdCombo);
      onOpenChange(false);
      showSuccessToast("Precios guardados exitosamente");
    } catch (error) {
      console.error("Error guardando precios:", error);
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
            <ModalHeader className="flex flex-col gap-1">
              {createdCombo ? "Agregar Precios al Combo" : "Crear Nuevo Combo"}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4">
                {!createdCombo ? (
                  <>
                    <Input
                      label="Nombre del Combo"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <Textarea
                      label="Descripción"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <Input
                      label="URL de Imagen"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <Select
                      label="Seleccionar Cuentas"
                      selectionMode="multiple"
                      selectedKeys={formData.selectedAccounts}
                      onSelectionChange={(value) => handleSelectChange([...value])}
                      placeholder="Seleccione cuentas para este combo"
                      fullWidth
                    >
                      {availableAccounts.map((account) => (
                        <SelectItem
                          className="dark text-black"
                          key={account.id}
                          value={account.id}
                        >
                          {account.serviceName}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button
                      color="primary"
                      onPress={handleCreateCombo}
                      disabled={!formData.name || !formData.description || !formData.selectedAccounts.length}
                    >
                      Crear Combo
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
                    <Button color="primary" onPress={handleSavePrices}>
                      Guardar Precios
                    </Button>
                  </>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
                Cancelar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
