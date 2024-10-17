import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Pricing from "./pages/Precios/Pricing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </NextUIProvider>
  );
};

export default App;
