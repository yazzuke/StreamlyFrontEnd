import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { fetchAllProducts } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const CarrouselAccounts = () => {
  const [allItems, setAllItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllItems = async () => {
      const products = await fetchAllProducts();
      setAllItems(products);
    };

    getAllItems();
  }, []);
  
  const handleCardClick = (item) => {
    const isCombo = 'price' in item; // Verificamos si el objeto tiene una propiedad 'price', lo cual indica que es un combo
    const path = isCombo ? `/combos/${item.id}` : `/accounts/${item.id}`;
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="dark">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite
        autoPlaySpeed={1500}
      >
        {allItems.map((item) => (
          <Tooltip
            className="dark"
            content="Click para más detalles"
            key={item.id}
          >
            <Card isHoverable className="m-2 cursor-pointer">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">
                  {item.name || item.serviceName}
                </h4>
                <div className="flex items-center space-x-2">
                  <p className="text-base uppercase font-bold text-green-500">
                    ${item.lowestPrice || item.price}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl left-5"
                  src={item.imageUrl}
                  width={270}
                  height={180}
                  onClick={() => handleCardClick(item)}
                  loading="lazy"
                />
                <Button
                  onClick={() => handleCardClick(item)}
                  className="mt-2 w-full bg-transparent"
                >
                  Agregar
                </Button>
              </CardBody>
            </Card>
          </Tooltip>
        ))}
      </Carousel>
    </div>
  );
};

export default CarrouselAccounts;
