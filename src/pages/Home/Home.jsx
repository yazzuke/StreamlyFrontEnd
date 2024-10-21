import Benefits from "../../components/Hero/Benefits";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
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
