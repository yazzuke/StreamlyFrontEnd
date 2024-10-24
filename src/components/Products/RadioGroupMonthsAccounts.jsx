import { RadioGroup, Radio, cn } from "@nextui-org/react";
import { useState } from "react";

// Componente CustomRadio ajustado
export const CustomRadio = ({ children, ...props }) => {
  return (
    <Radio
      {...props}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

// Componente RadioGroupMonthsAccounts actualizado
export default function RadioGroupMonthsAccounts({ selectedMonth, setSelectedMonth }) {
  return (
    <RadioGroup
      label="¿Cuánto quieres que dure?"
      orientation="horizontal"
      description="Entre más meses, mejor precio."
      value={selectedMonth} // Usar el estado seleccionado
      onValueChange={setSelectedMonth} // Usar onValueChange para actualizar el estado
    >
      <CustomRadio value="1">1 Mes</CustomRadio>
      <CustomRadio value="3">3 Meses</CustomRadio>
      <CustomRadio value="6">6 Meses</CustomRadio>
    </RadioGroup>
  );
}
