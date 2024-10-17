import Benefits from "../../components/Benefits";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CompanyLogos from "../../components/CompanyLogos";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      
        <Hero />
        <Benefits />
      </div>
    </>
  );
};

export default Home;
