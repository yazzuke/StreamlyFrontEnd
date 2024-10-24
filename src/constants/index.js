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
  googlesvg,
  netflixsvg,
  ytmusicsvg,
  maxsvg,
  paramountplussvg,
  spotifysvg,
  primevideosvg,
  crunchyrollsvg,
  applemusicsvg,
  disneyplussvg,
  github,
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

//Constastes para mostrar cuentas disponibles
export const AccountsInfo = [
  {
    id: "0",
    title: "Netflix",
    duration: "1 Mes",
    price: "17900",
    imageUrl: netflix,
    description:
      "Netflix es la plataforma líder en streaming de entretenimiento, ofreciendo un catálogo vasto y diverso de películas, series, documentales y producciones originales. Con títulos galardonados como 'Stranger Things', 'The Crown', y 'La Casa de Papel', Netflix es ideal para aquellos que buscan contenido exclusivo y de alta calidad. Además, te permite descargar contenido para verlo offline, lo que lo convierte en una opción perfecta para viajar o disfrutar sin interrupciones de conexión. Con perfiles personalizados, cada miembro de la familia puede disfrutar de recomendaciones únicas según sus gustos.",
  },
  {
    id: "1",
    title: "Spotify",
    duration: "1 Mes",
    price: "14900",
    imageUrl: spotify,
    description:
      "Spotify es el servicio de música por streaming más popular, ofreciendo acceso a más de 70 millones de canciones, podcasts, y contenido exclusivo. Los usuarios pueden crear listas de reproducción personalizadas, seguir a sus artistas favoritos y descubrir nueva música con recomendaciones basadas en sus gustos. Con la versión Premium, puedes disfrutar de música sin anuncios, reproducción offline, y una experiencia de sonido mejorada. Spotify es perfecto tanto para amantes de la música casuales como para verdaderos melómanos que buscan la mejor calidad y selección.",
  },
  {
    id: "2",
    title: "Disney+",
    duration: "1 Mes",
    price: "11900",
    imageUrl: disneyplus,
    description:
      "Disney+ es la plataforma de streaming esencial para los fanáticos del contenido familiar y del cine fantástico. Con acceso a todos los clásicos de Disney, Pixar, Marvel, Star Wars, y National Geographic, este servicio es un tesoro de nostalgia y nuevos estrenos. Con películas icónicas como 'El Rey León' y series exitosas como 'The Mandalorian', Disney+ ofrece tanto entretenimiento para niños como para adultos. Además, su contenido exclusivo y las películas de estreno directo en la plataforma lo hacen imprescindible para cualquier hogar que ame el entretenimiento de calidad.",
  },
  {
    id: "3",
    title: "HBO Max",
    duration: "1 Mes",
    price: "8400",
    imageUrl: max,
    description:
      "HBO Max es una plataforma premium que combina el contenido galardonado de HBO con una vasta biblioteca de series, películas y programas originales. Desde icónicas series como 'Game of Thrones' y 'Succession', hasta nuevos éxitos como 'Euphoria', HBO Max es sinónimo de calidad y producción de primer nivel. Además, incluye películas de estreno de Warner Bros., lo que lo convierte en una opción imperdible para los amantes del cine y las series con profundidad narrativa. Es ideal para quienes buscan un entretenimiento más maduro y cinematográfico.",
  },
  {
    id: "4",
    title: "Amazon Prime Video",
    duration: "1 Mes",
    price: "12000",
    imageUrl: primevideo,
    description:
      "Amazon Prime Video te ofrece un extenso catálogo de películas, series y producciones originales. Destacado por títulos como 'The Boys', 'The Marvelous Mrs. Maisel' y 'Jack Ryan', Prime Video combina entretenimiento de calidad con el beneficio adicional de los envíos rápidos y gratuitos de Amazon Prime. Es una excelente opción para quienes buscan variedad en géneros y producciones internacionales, así como acceso a películas y series que no se encuentran en otras plataformas. Además, puedes descargar contenido y verlo en cualquier momento sin conexión.",
  },
  {
    id: "5",
    title: "Apple Music",
    duration: "1 Mes",
    price: "17000",
    imageUrl: applemusic,
    description:
      "Apple Music es el servicio de streaming de música que ofrece más de 75 millones de canciones en alta calidad. Con acceso a listas de reproducción seleccionadas por expertos, estaciones de radio en vivo como Beats 1, y contenido exclusivo, es ideal para los amantes de la música que buscan descubrir nuevos sonidos y artistas. Además, permite la reproducción sin conexión y la integración perfecta con todos los dispositivos Apple. Con Apple Music, siempre estarás al día con los últimos lanzamientos y tendencias musicales, además de tener la mejor calidad de sonido disponible.",
  },
  {
    id: "6",
    title: "Crunchyroll",
    duration: "1 Mes",
    price: "15300",
    imageUrl: crunchyroll,
    description:
      "Crunchyroll es el paraíso del anime, ofreciendo una vasta selección de series y películas directamente desde Japón. Con simulcasts de episodios nuevos pocas horas después de su emisión en Japón, los fanáticos del anime pueden disfrutar de shows como 'Attack on Titan', 'My Hero Academia', y 'One Piece' en alta definición. Además, la plataforma cuenta con una amplia gama de géneros, desde shonen hasta slice of life, lo que la convierte en la mejor opción para cualquier tipo de fanático del anime. Los suscriptores Premium pueden ver sin anuncios y descargar episodios para ver offline.",
  },
  {
    id: "7",
    title: "Paramount+",
    duration: "1 Mes",
    price: "9400",
    imageUrl: paramountplus,
    description:
      "Paramount+ es una plataforma que ofrece tanto contenido clásico como nuevas producciones originales. Con acceso a series icónicas como 'Star Trek', 'The Good Fight' y películas de estreno de Paramount Pictures, es ideal para los amantes del entretenimiento nostálgico y moderno. Además, cuenta con contenido exclusivo que no encontrarás en otras plataformas, junto con una creciente biblioteca de películas y series. Es una opción sólida para aquellos que buscan diversidad en géneros y exclusividad en producciones de alta calidad.",
  },
  {
    id: "8",
    title: "Vix",
    duration: "1 Mes",
    price: "5000",
    imageUrl: vix,
    description:
      "Vix es la plataforma gratuita de streaming en español, diseñada para aquellos que buscan entretenimiento latinoamericano. Con una gran selección de telenovelas, series y películas en español, Vix es perfecto para quienes buscan contenido que represente la cultura y los géneros más populares en América Latina. Además de ser completamente gratuito, su interfaz sencilla y su variado catálogo lo hacen ideal para disfrutar de maratones de tus telenovelas favoritas o descubrir nuevas producciones en español.",
  },
  {
    id: "9",
    title: "YouTube Premium",
    duration: "1 Mes",
    price: "9500",
    imageUrl: youtubepremium,
    description:
      "YouTube Premium te permite disfrutar de YouTube sin interrupciones de anuncios, con la capacidad de descargar videos para ver offline y acceder a YouTube Music. Es perfecto para los que consumen mucho contenido en YouTube y desean una experiencia fluida y sin interrupciones. Además, incluye acceso a contenido exclusivo de creadores y la capacidad de reproducir videos en segundo plano mientras usas otras aplicaciones. Si eres un fanático del contenido de YouTube, este servicio es una opción imprescindible.",
  },
];

//Contantes para Combos.
export const ComboInfo = [
  {
    id: "0",
    title: "Combo Premium",
    duration: "1 Mes",
    price: "39900",
    imageUrl: netflix,
    description:
      "El Combo Premium te brinda acceso a las plataformas más populares de entretenimiento, incluyendo Netflix, Spotify y Disney+. Con este combo, puedes disfrutar de una amplia variedad de contenido en video y música, todo en un solo lugar. Ideal para aquellos que buscan una experiencia completa de entretenimiento, el Combo Premium te ofrece acceso ilimitado a tus plataformas favoritas a un precio insuperable. Disfruta de películas, series, música y más con este combo exclusivo.",
      items: [
        { svg: netflixsvg },
        { svg: spotifysvg },
        { svg: paramountplussvg},
        { svg: disneyplussvg },
        { svg: primevideosvg },
      ]
    },
  {
    id: "1",
    title: "Combo Familiar",
    duration: "1 Mes",
    price: "29900",
    imageUrl: spotify,
    description:
      "El Combo Familiar es perfecto para compartir con tus seres queridos, ofreciendo acceso a plataformas como Netflix, Disney+ y Amazon Prime Video. Con este combo, cada miembro de la familia puede disfrutar de su contenido favorito, desde películas y series hasta música y programas infantiles. Además, el Combo Familiar te brinda la flexibilidad de elegir entre una amplia gama de opciones para satisfacer los gustos de todos. Disfruta de noches de cine, maratones de series y música para toda la familia con este combo especial.",
      items: [
        { svg: crunchyrollsvg },
        { svg: maxsvg },
        { svg: applemusicsvg },
      ]
    },

  {
    id: "2",
    title: "Combo Premium Plus",
    duration: "1 Mes",
    price: "44900",
    imageUrl: disneyplus,
    description:
      "El Combo Premium Plus es la opción definitiva para los amantes del entretenimiento, ofreciendo acceso a las plataformas más populares y exclusivas. Con este combo, puedes disfrutar de Netflix, Spotify, Disney+ y HBO Max, todo en un solo lugar. Ideal para aquellos que buscan una experiencia completa de entretenimiento, el Combo Premium Plus te brinda acceso ilimitado a una amplia variedad de contenido en video y música. Disfruta de películas, series, música y más con este combo premium.",
      items: [
        { svg: netflixsvg },
        { svg: spotifysvg },
        { svg: paramountplussvg},
        { svg: disneyplussvg },
        { svg: primevideosvg },
      ]
  },
  {
    id: "3",
    title: "Combo Esencial",
    duration: "1 Mes",
    price: "24900",
    imageUrl: primevideo,
    description:
      "El Combo Esencial es la opción perfecta para aquellos que buscan una selección equilibrada de entretenimiento, ofreciendo acceso a plataformas como Spotify, Amazon Prime Video y Apple Music. Con este combo, puedes disfrutar de una amplia variedad de música y contenido en video, todo en un solo lugar. Ideal para aquellos que buscan una experiencia completa de entretenimiento, el Combo Esencial te brinda acceso ilimitado a tus plataformas favoritas a un precio accesible. Disfruta de música, películas, series y más con este combo esencial.", 
      items: [
        { svg: crunchyrollsvg },
        { svg: maxsvg },
        { svg: applemusicsvg },
      ]
  },
  {
    id: "4",
    title: "Combo Premium",
    duration: "1 Mes",
    price: "39900",
    imageUrl: netflix,
    description:
      "El Combo Premium te brinda acceso a las plataformas más populares de entretenimiento, incluyendo Netflix, Spotify y Disney+. Con este combo, puedes disfrutar de una amplia variedad de contenido en video y música, todo en un solo lugar. Ideal para aquellos que buscan una experiencia completa de entretenimiento, el Combo Premium te ofrece acceso ilimitado a tus plataformas favoritas a un precio insuperable. Disfruta de películas, series, música y más con este combo exclusivo.",
      items: [
        { svg: netflixsvg },
        { svg: spotifysvg },
        { svg: paramountplussvg},
        { svg: disneyplussvg },
        { svg: primevideosvg },
      ]
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
