import { RadioGroup, Radio, cn } from "@nextui-org/react";


// Componente que renderiza el radio button de los meses de duración de la cuenta
export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
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

export default function RadioGroupTypeAccounts() {
  return (
    <RadioGroup
      label="Tipo de cuenta"
      orientation="horizontal"
      description="De esto depende el tipo de cuenta que se creará"
    >
      <CustomRadio value="1">Una Pantalla</CustomRadio>
      <CustomRadio value="2">Completa</CustomRadio>
    </RadioGroup>
  );
}
