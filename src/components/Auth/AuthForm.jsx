import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";

const AuthForm = ({ title, fields, buttonText, footerLink, onSubmit }) => {
  // Estado para manejar los valores de cada campo de entrada
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  // Maneja el cambio en cada campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues); 
  };

  return (
    <Card className="flex flex-wrap justify-center p-4">
      <CardHeader className="flex flex-col gap-3 items-center">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
      </CardHeader>
      <Divider />
      <CardBody as="form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <Input
            key={`${field.name}-${index}`}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formValues[field.name] || ""}
            onChange={handleChange} // Usamos onChange de NextUI
            className="mb-4 py-1 px-2 text-white shadow-md rounded-lg"
            fullWidth
          />
        ))}
        <Button
          className="w-full p-3 mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          type="submit"
          variant="flat"
        >
          {buttonText}
        </Button>
      </CardBody>

      <Divider />
      <CardFooter className="flex justify-center">
        <p className="text-center text-gray-400">
          {footerLink.text}{" "}
          <Link
            href={footerLink.href}
            className="text-blue-500 hover:underline"
          >
            {footerLink.linkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
