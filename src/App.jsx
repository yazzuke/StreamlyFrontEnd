import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Pricing from "./pages/Precios/Pricing";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";

const App = () => {
  return (
    <NextUIProvider>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </NextUIProvider>
  );
};

export default App;
