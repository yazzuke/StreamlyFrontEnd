import { Card, CardHeader, CardBody, Image, Button, Tooltip } from "@nextui-org/react";

// Base de las card para mostrar los productos o combos
const ProductCard = ({ id, title, price, duration, imageUrl, onClick }) => {
  //max-w-sm mx-auto  para card 
  return (
    <Tooltip className="dark" content="Click para más detalles">
      <Card
        className="w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/7 xl:w-1/6 mb-4 cursor-pointer "
      >
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
          <div className="flex items-center space-x-2">
            <p className="text-base uppercase font-bold text-green-500">${price}</p>
            <p className="text-base uppercase font-bold">1 mes</p>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex justify-center items-center">
          <Image
            alt="Card background"
            isBlurred
            isZoomed
            className="rounded-xl "
            onClick={onClick}
            src={imageUrl}
            width={270}
            height={180}
          />
          <Button className="flex flex-wrap right-5 bg-transparent left-2 top-1">Agregar</Button>
        </CardBody>
      </Card>
    </Tooltip>
  );
};

export default ProductCard;
