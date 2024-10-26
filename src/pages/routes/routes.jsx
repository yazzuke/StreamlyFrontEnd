// routes.js
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import Products from "..//Precios/Products";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ComboDetails from "../../components/Products/ComboDetails";
import AccountsDetails from "../../components/Products/AccountDetails";
import ProductsAdmin from "../Admin/ProductsAdmin";
import Admin from "../Admin/Admin";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/accounts/:id", element: <AccountsDetails /> },
  { path: "/combos/:id", element: <ComboDetails /> },
  { path: "/admin", element: <Admin /> },
  { path: "/admin-products", element: <ProductsAdmin /> },
  
  
];

export default routes;
