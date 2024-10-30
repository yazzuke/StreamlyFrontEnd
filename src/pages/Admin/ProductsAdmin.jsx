import Section from "../../components/Section";
import CardAdmin from "../../components/Admin/AdminProductCard";
import Header from "../../components/Header/Header";
import { Button } from "@nextui-org/react";
import AddAccountModal from "../../components/Admin/AddAccountModal";
import CreateComboModal from "../../components/Admin/CreateComboModal";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";



const ProductsAdmin = () => {
  const { isOpen: isAddAccountModalOpen, onOpenChange: onAddAccountModalOpenChange } = useDisclosure();
  const { isOpen: isCreateComboModalOpen, onOpenChange: onCreateComboModalOpenChange } = useDisclosure();

  const { token, user } = useAuth();
console.log(token, user);

  const [products, setProducts] = useState([]);

  // Manejar la adición de un nuevo producto
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Manejar la creación de un nuevo combo
  const handleComboCreated = (newCombo) => {
    setProducts([...products, newCombo]);
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
      <div className="flex justify-center mb-6 gap-4">
        <Button color="success" variant="shadow" size="lg" onPress={() => onAddAccountModalOpenChange(true)}>
          Agregar Nuevo Servicio
        </Button>
        <Button color="primary" variant="shadow" size="lg" onPress={() => onCreateComboModalOpenChange(true)}>
          Crear Nuevo Combo
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <CardAdmin />
      </div>

      {/* Modal para agregar una nueva cuenta */}
      <AddAccountModal 
        isOpen={isAddAccountModalOpen} 
        onOpenChange={onAddAccountModalOpenChange} 
        onSave={handleAddProduct} 
      />

      {/* Modal para crear un nuevo combo */}
      <CreateComboModal 
        isOpen={isCreateComboModalOpen} 
        onOpenChange={onCreateComboModalOpenChange} 
        onComboCreated={handleComboCreated} 
      />
    </Section>
  );
};

export default ProductsAdmin;
