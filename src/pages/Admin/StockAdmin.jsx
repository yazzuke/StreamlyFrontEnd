import Section from "../../components/Section";
import CardAdmin from "../../components/Admin/AdminProductCard";
import Header from "../../components/Header/Header";
import { Button } from "@nextui-org/react";
import AddAccountModal from "../../components/Admin/AddAccountModal";
import CreateComboModal from "../../components/Admin/CreateComboModal";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import StockTable from "../../components/Admin/StockTable";

const StockAdmin = () => {
  return (
    <Section id="admin-products" className="flex justify-center">
      <Header />
      <div className="w-full text-center">
        <h2 className="text-4xl font-bold mb-10">
          Panel de Control del Administrador
        </h2>
        <p className="text-lg mb-10">Aquí podrás gestionar el stock de la tienda.</p>
        <div className="w-full max-w-[1700px] py-4 mx-auto"> {/* Centrado con mx-auto y ancho controlado */}
          <StockTable />
        </div>
      </div>
    </Section>
  );
};

export default StockAdmin;
