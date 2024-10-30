import Section from "../../components/Section";
import CardAdmin from "../../components/Admin/AdminProductCard"
import PanelAdmin from "../../components/Admin/PanelAdmin";
import Header from "../../components/Header/Header";

const Admin = () => {
  return (

    <Section id="admin-dashboard" className="">
            <Header />
      <h2 className="text-4xl font-bold text-center mb-10">
        Panel de Control del Administrador
      </h2>
      <p className="text-center text-lg mb-10"> Bienvenido al panel de control del administrador. 
        Aquí podrás gestionar los productos, usuarios y el stock de la tienda.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <PanelAdmin />
      </div>
    </Section>
  );
};
export default Admin;
