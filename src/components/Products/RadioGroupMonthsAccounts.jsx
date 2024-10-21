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

export default function App() {
  return (
    <RadioGroup
      label="Cuanto quieres que dure?"
      orientation="horizontal"
      description="Entre mas meses, mejor precio."
    >
      <CustomRadio value="1">1 Mes</CustomRadio>
      <CustomRadio value="2">3 Meses</CustomRadio>
      <CustomRadio value="3">6 Meses</CustomRadio>
    </RadioGroup>
  );
}
