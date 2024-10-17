import { useState } from "react";
import { Card, CardHeader, CardBody, Image, Button, Select, SelectItem } from "@nextui-org/react";
import { Accounts } from "../constants";



export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Función para filtrar las cuentas según el filtro seleccionado
  const filteredAccounts = selectedFilter === "All"
    ? Accounts
    : Accounts.filter((account) => account.title === selectedFilter);

  return (
    
    <div className="flex flex-col items-center space-y-4">

      <Select
        label="Filtrar por tipo de cuenta"
        onChange={(e) => setSelectedFilter(e)}
        defaultValue="All"
        className="w-full sm:w-1/2 md:w-1/4"
      >
        <SelectItem value="All">Todos</SelectItem>
        <SelectItem value="Netflix">Netflix</SelectItem>
        <SelectItem value="Spotify">Spotify</SelectItem>
        <SelectItem value="Disney+">Disney+</SelectItem>
        {/* Agrega más opciones según tus tipos de cuentas */}
      </Select>
      

   
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
        {filteredAccounts.map((account) => (
          <Card
            key={account.id}
            className="py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{account.title}</h4>
              <p className="text-tiny uppercase font-bold">${account.price}</p>
              <p className="text-tiny uppercase font-bold">{account.description}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={account.imageUrl}
                width={270}
                height={180}
              />
              <Button className="flex flex-wrap right-5">Agregar</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
