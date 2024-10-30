import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../src/components/Footer/Footer"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "../src/pages/routes/routes";
import { AuthProvider } from "./context/AuthContext.jsx"; 

const App = () => {
  return (
    <AuthProvider> 
    <div className="dark pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <ToastContainer 
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default App;
