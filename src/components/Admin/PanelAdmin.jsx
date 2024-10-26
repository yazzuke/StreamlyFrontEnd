import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { adminpanel } from "../../constants";
import Section from "../../components/Section";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <Section className="flex justify-center items-center overflow-hidden">
      <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center items-cen
ter mt-[-4rem]">
        {adminpanel.map((item, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => navigate(item.url)}
            className="w-64 h-72 shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <CardBody className="overflow-hidden p-0 flex flex-col items-center">
              <Image
                shadow="sm"
                radius="none"
                width="100%"
                alt={item.title}
                className="object-cover h-full"
                src={item.iconUrl}
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}