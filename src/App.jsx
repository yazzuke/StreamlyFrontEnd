import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../src/components/Footer/Footer"; 
import routes from "../src/pages/routes/routes";

const App = () => {
  return (
    <div className="dark pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
