import {
  netflix,
  spotify,
  disneyplus,
  max,
  primevideo,
  applemusic,
  crunchyroll,
  paramountplus,
  vix,
  youtubepremium,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  facebook,
  instagram,
  telegram,
  twitter,
  netflixmini,
  netflixsvg
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Inicio",
    url: "/",
  },
  {
    id: "1",
    title: "Cuentas",
    url: "/pricing",
  },
  {
    id: "2",
    title: "Contacto",
    url: "/contacts",
  },
  {
    id: "3",
    title: "Como funciona",
    url: "#como-funciona",
  },
  {
    id: "4",
    title: "Crear Cuenta",
    url: "#crear-cuenta",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Iniciar Sesión",
    url: "#Iniciarsesion",
    onlyMobile: true,
  },
];




export const companyLogos = [netflixmini, netflixsvg];

export const benefits = [
  {
    id: "0",
    title: "Tenemos de todo",
    text: "Tenemos cuentas de todas tus plataformas favoritas como Netflix, Disney+, Spotify y más,Obtén acceso ilimitado a las mejores plataformas con una sola compra.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Acceso inmediato",
    text: "Compra y accede de inmediato a tu cuenta sin complicaciones, Nuestro sistema automatizado te brinda acceso instantáneo a tus cuentas.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Conexión desde cualquier lugar",
    text: "Accede a tus plataformas favoritas desde cualquier dispositivo, estés donde estés.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "Soporte rápido y eficiente",
    text: "La atención al cliente es nuestra prioridad, por lo que nuestro equipo de soporte está disponible para ayudarte en cualquier momento.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    light: true,
  },
  {
    id: "4",
    title: "Precios insuperables",
    text: "Disfruta de precios accesibles para todas las plataformas más populares,Aproveca ofertas en combo para maximizar tu entretenimiento y economia.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
  },
  {
    id: "5",
    title: "Simplicidad y seguridad",
    text: "Compra de forma segura y sencilla con nuestro sistema confiable. Transacciones seguras y protegidas para tu tranquilidad.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
  },
];

export const Accounts = [
  {
    id: "0",
    title: "Netflix",
    description: "1 Mes",
    price: "100",
    imageUrl: netflix,
  },
  {
    id: "1",
    title: "Spotify",
    description: "1 Mes",
    price: "100",
    imageUrl: spotify,
  },
  {
    id: "2",
    title: "Disney+",
    description: "1 Mes",
    price: "100",
    imageUrl: disneyplus,
  },
  {
    id: "3",
    title: "HBO Max",
    description: "1 Mes",
    price: "100",
    imageUrl: max,
  },
  {
    id: "4",
    title: "Amazon Prime",
    description: "1 Mes",
    price: "100",
    imageUrl: primevideo,
  },
  {
    id: "5",
    title: "Apple Music",
    description: "1 Mes",
    price: "100",
    imageUrl: applemusic,
  },
  {
    id: "6",
    title: "Crunchyroll",
    description: "1 Mes",
    price: "100",
    imageUrl: crunchyroll,
  },
  {
    id: "7",
    title: "Paramount+",
    description: "1 Mes",
    price: "100",
    imageUrl: paramountplus,
  },
  {
    id: "8",
    title: "Vix",
    description: "1 Mes",
    price: "100",
    imageUrl: vix,
  },
  {
    id: "9",
    title: "Youtube Premium",
    description: "1 Mes",
    price: "100",
    imageUrl: youtubepremium
  },
];

export const socials = [

  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://www.facebook.com/",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
