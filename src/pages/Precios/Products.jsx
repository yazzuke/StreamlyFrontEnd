import Header from "../../components/Header/Header";
import Accounts from "../../components/Products/Accounts";
import ComboAccounts from "../../components/Products/ComboAccounts";
import { useAuth } from "../../context/AuthContext";

const Products = () => {
  const { token, user } = useAuth();
  console.log(token);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left px-4 lg:px-36">
          Cuentas disponibles
        </h2>
        <Accounts />
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left px-4 lg:px-36 py-4">
          Combos disponibles
        </h2>
        <ComboAccounts />
      </div>
    </>
  );
};

export default Products;
