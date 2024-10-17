import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

const AuthForm = ({ title, fields, buttonText, footerText, footerLink, onSubmit }) => {
  return (
    <Card className="flex flex-wrap justify-center p-4">
      <CardHeader className="flex flex-col gap-3 items-center">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full p-3 mb-4 text-black rounded-lg"
          />
        ))}
        <button
          className="w-full p-3 mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          type="button"
          onClick={onSubmit}
        >
          {buttonText}
        </button>
        <p className="text-center text-gray-400 hover:underline cursor-pointer">
          {footerText}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <p className="text-center text-gray-400">
          {footerLink.text}{" "}
          <Link href={footerLink.href} className="text-blue-500 hover:underline">
            {footerLink.linkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
