import { benefits } from "../../constants";
import Heading from "../Heading";
import Button from "../Button";
import Section from "../Section";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features"
    
    >
      <div className="container relative z-2 -mt-[3rem]">

        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Adquiera el servicio de streaming que desee con rapidez y sin complicaciones"
          tag= "Streamly siempre disponible para ti"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />  
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
    
              </div>

              <ClipPath />
            </div>
            
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="relative items-center" href="/products" white>
            Comprar
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
