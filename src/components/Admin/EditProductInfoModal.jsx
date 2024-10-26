import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea
} from "@nextui-org/react";
import { updateProduct } from "../../utils/api";

export default function EditProductInfoModal({ product, onSave, isOpen, onOpenChange }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        prices: product.prices && product.prices.length > 0 ? product.prices : [
          { months: 1, price: 0, type: "Pantalla" },
          { months: 3, price: 0, type: "Pantalla" },
          { months: 6, price: 0, type: "Pantalla" },
          { months: 1, price: 0, type: "Completa" },
          { months: 3, price: 0, type: "Completa" },
          { months: 6, price: 0, type: "Completa" }
        ]
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const isAccount = formData.serviceName ? true : false;
      const updatedProduct = {
        type: isAccount ? "account" : "combo",
        [isAccount ? "account" : "combo"]: formData
      };
      await updateProduct(formData.id, updatedProduct);
      onSave(formData);
      onOpenChange(false);
    } catch (error) {
      console.error("Error actualizando el producto:", error);
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
              Editar {formData.serviceName || formData.name}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4">
                <Input
                  label="Nombre"
                  name="serviceName"
                  value={formData.serviceName || formData.name || ""}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Textarea
                  label="Descripción"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Input
                  label="URL de Imagen"
                  name="imageUrl"
                  value={formData.imageUrl || ""}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Input
                  label="URL de SVG"
                  name="svgUrl"
                  value={formData.svgUrl || ""}
                  onChange={handleInputChange}
                  fullWidth
                />
                <h4 className="text-lg font-bold">Precios:</h4>
                {formData.prices && formData.prices.length > 0 && (
                  <>
                    {formData.prices.map((price, index) => (
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
                          onChange={(e) => {
                            const updatedPrices = [...formData.prices];
                            updatedPrices[index].price = e.target.value;
                            setFormData((prevData) => ({
                              ...prevData,
                              prices: updatedPrices,
                            }));
                          }}
                          fullWidth
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleSave}>
                Guardar Cambios
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
