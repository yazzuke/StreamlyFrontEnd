import Header from "../../components/Header/Header";
import Accounts from "../../components/Products/Accounts";
import ComboAccounts from "../../components/Products/ComboAccounts";


const Products = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Header />
        <Accounts className/>
        <div className="py-12">
        <ComboAccounts />
      </div>
      </div>
    </>
  );
};

export default Products;
