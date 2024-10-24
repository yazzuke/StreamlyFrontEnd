import { RadioGroup, Radio, cn } from "@nextui-org/react";

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

// Componente RadioGroupTypeAccounts actualizado
export default function RadioGroupTypeAccounts({ selectedType, setSelectedType }) {
  return (
    <RadioGroup
      label="Tipo de cuenta"
      orientation="horizontal"
      description="De esto depende el tipo de cuenta que se creará"
      value={selectedType} 
      onValueChange={setSelectedType} 
    >
      <CustomRadio value="Pantalla">Una Pantalla</CustomRadio>
      <CustomRadio value="Completa">Completa</CustomRadio>
    </RadioGroup>
  );
}
