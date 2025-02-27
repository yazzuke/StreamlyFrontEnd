import { curve, multistreams } from "../../assets";
import Button from "../../components/Button";
import Section from "../../components/Section";
import { Gradient } from "../../components/design/Hero";
import { useRef } from "react";
import Generating from "../../components/Generating";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] md:pt-[10rem] -mt-[5rem] md:-mt-[10rem]" // Ajuste de márgenes y padding
      crosses
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[90%] md:max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-4 md:mb-6">
            Descubre entretenimiento ilimitado con {` `}
            <span className="inline-block relative">
              Streamly{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-xl md:max-w-3xl mx-auto mb-4 md:mb-6 lg:mb-8 text-n-2">
            Adquire tus plataformas de streaming favoritas a precios
            insuperables. Explora una variedad de cuentas como Netflix, Spotify,
            Disney+ y más, todo en un solo lugar.
          </p>
          <Button href="features" white>
            Como funciona
          </Button>
        </div>
        <div className="relative max-w-[20rem] md:max-w-5xl xl:mb-24 mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={multistreams}
                  className="w-full scale-[1.5] md:scale-[1] translate-y-[5%] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>

            <Gradient />
          </div>
        </div>
      </div>
    </Section>
  );
};


export default Hero;
