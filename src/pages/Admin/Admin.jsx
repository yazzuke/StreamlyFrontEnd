import Section from "../../components/Section";
import CardAdmin from "../../components/Admin/CardAdmin"
import Header from "../../components/Header/Header";
const Admin = () => {
  return (

    <Section id="admin-dashboard" className="">
            <Header />
      <h2 className="text-4xl font-bold text-center mb-10">
        Panel de Control del Administrador
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        <CardAdmin />
      </div>
    </Section>
  );
};
export default Admin;
