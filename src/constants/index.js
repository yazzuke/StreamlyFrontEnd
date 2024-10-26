import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  facebook,
  instagram,
  telegram,
  github,
  commmunity,
  db,
  users,
  stats
} from "../assets";

//Constastes para header / navbar
export const navigation = [
  {
    id: "0",
    title: "Inicio",
    url: "/",
  },
  {
    id: "1",
    title: "Cuentas",
    url: "/products",
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
    url: "/register",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Iniciar Sesión",
    url: "/login",
    onlyMobile: true,
  },
];

//Constastes para Login
export const loginFormFields = [
  { type: "text", placeholder: "Email", variant: "underlined" },
  { type: "password", placeholder: "Password", variant: "faded" },
];

//Constastes para Login
export const loginButtonText = "Login";
export const loginFooterText = "Restablecer contraseña";
export const loginFooterLink = {
  text: "Don't have an account?",
  href: "/register",
  linkText: "Register",
};

//Constastes para Register
export const RegisterFormFields = [
  { type: "text", placeholder: "Nombre" },
  { type: "text", placeholder: "Email" },
  { type: "password", placeholder: "Contraseña" },
  { type: "password", placeholder: "Confirma tu contraseña" },
];

export const RegisterButtonText = "Registrarse";
export const RegisterFooterLink = {
  text: "Ya tienes una cuenta?",
  href: "/login",
  linkText: "Inicia Sesión",
};



//Constastes para beneficios en Hero
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


//Constastes para footer
export const socials = [
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
  {
    id: "4",
    title: "github",
    iconUrl: github,
    url: "https://github.com/yazzuke",
  },
];


//Constastes para el panel del admin
export const adminpanel = [
  {
    id: "1",
    title: "Productos",
    iconUrl:  db,
    url: "/admin-products", 
  },
  {
    id: "2",
    title: "Stock",
    iconUrl: users,
    url: "#",
  },

  {
    id: "11",
    title: "Usuarios",
    iconUrl: commmunity,
    url: "#",
  },
 
];