import Section from "../../components/Section";
import CardAdmin from "../../components/Admin/AdminProductCard";
import Header from "../../components/Header/Header";
import { Button } from "@nextui-org/react";
import AddAccountModal from "../../components/Admin/AddAccountModal";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { fetchAllAccounts } from "../../utils/api";

const ProductsAdmin = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <Section id="admin-products" className="">
      <Header />
      <h2 className="text-4xl font-bold text-center mb-10">
        Panel de Control del Administrador
      </h2>
      <p className="text-center text-lg mb-10">
        Aquí podrás gestionar los productos que quiera mostrar en su tienda.
      </p>
      <div className="flex justify-center mb-6">
        <Button color="primary" onPress={() => onOpenChange(true)}>
          Agregar Nuevo Servicio
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <CardAdmin />
      </div>
      <AddAccountModal isOpen={isOpen} onOpenChange={onOpenChange} onSave={handleAddProduct} />
    </Section>
  );
};

export default ProductsAdmin;
