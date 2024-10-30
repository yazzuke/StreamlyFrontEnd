import Benefits from "../../components/Hero/Benefits";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { token, user } = useAuth();
  console.log(token, user);


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
