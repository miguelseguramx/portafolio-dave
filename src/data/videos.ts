import { slugify } from '../utils/slugify';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  orientation: 'vertical' | 'horizontal';
}

interface VideoSection {
  title: string;
  videos: Video[];
}

interface VideoData {
  visuallyAppealing: VideoSection;
  animations: VideoSection;
  storyVideos: VideoSection;
}

export const videos: VideoData = {
  visuallyAppealing: {
    title: "Reels",
    videos: [
      {
        id: slugify("HD LABS OPERACIÓN DE CAM & FOCUS PULLER PROMO"),
        title: "HD LABS OPERACIÓN DE CAM & FOCUS PULLER PROMO",
        url: "https://youtube.com/shorts/xbK3UubE2bg",
        thumbnail: "/miniaturas/focus.png",
        orientation: "vertical"
      },
      {
        id: slugify("OPERACIÓN DE CÁMARA 1"),
        title: "OPERACIÓN DE CÁMARA 1",
        url: "https://youtube.com/shorts/gjYXYNwdxL0",
        thumbnail: "https://img.youtube.com/vi/gjYXYNwdxL0/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("TATTOO BLACK REEL"),
        title: "TATTOO BLACK REEL",
        url: "https://youtube.com/shorts/_-wjBp41v9g",
        thumbnail: "/miniaturas/tatto.png",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS GAFFER WORKSHOP"),
        title: "HD LABS GAFFER WORKSHOP",
        url: "https://youtube.com/shorts/YbSoHs3Unao",
        thumbnail: "https://img.youtube.com/vi/YbSoHs3Unao/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("ALEX GÜEMES Sony Future Filmmaker Awards 2025"),
        title: "ALEX GÜEMES Sony Future Filmmaker Awards 2025",
        url: "https://youtube.com/shorts/T0Qjz_2cfXU",
        thumbnail: "/miniaturas/sony-future.png",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS BOOTCAM TEASER"),
        title: "HD LABS BOOTCAM TEASER",
        url: "https://youtube.com/shorts/4ZdIw8d040k",
        thumbnail: "/miniaturas/bootcamp.png",
        orientation: "vertical"
      },
      {
        id: slugify("ALEX GÜEMES CABEZAS DE TRIPIES"),
        title: "ALEX GÜEMES CABEZAS DE TRIPIES",
        url: "https://youtube.com/shorts/c2PB4BHHVpY",
        thumbnail: "/miniaturas/cabezas.png",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS VIRTUAL PRODUCTION"),
        title: "HD LABS VIRTUAL PRODUCTION",
        url: "https://youtube.com/shorts/fhWTlYv6HR0",
        thumbnail: "/miniaturas/virtualproduction.png",
        orientation: "vertical"
      },
      {
        id: slugify("ALEX GÜEMES 28-70"),
        title: "ALEX GÜEMES 28-70",
        url: "https://youtube.com/shorts/Z-r3eoQgOUM",
        thumbnail: "/miniaturas/2870.png",
        orientation: "vertical"
      },
      {
        id: slugify("CINEMATOGRAPHERS MEET DAY 2024"),
        title: "CINEMATOGRAPHERS MEET DAY 2024",
        url: "https://youtube.com/shorts/Bbtzkx6-JZU",
        thumbnail: "/miniaturas/meet-day.png",
        orientation: "vertical"
      },
      {
        id: slugify("ESTUDIO 7"),
        title: "ESTUDIO 7",
        url: "https://youtube.com/shorts/2gJAND7V6Kw",
        thumbnail: "/miniaturas/estudio-7.png",
        orientation: "vertical"
      }
    ]
  },
  animations: {
    title: "Animaciones",
    videos: [
      {
        id: slugify("HB RENTS RIG ARM"),
        title: "HB RENTS RIG ARM",
        url: "https://youtube.com/shorts/5Z70Mt6BX1U",
        thumbnail: "/miniaturas/rig-arm.png",
        orientation: "vertical"
      },
      {
        id: slugify("LLR SONY BURANO ANIM"),
        title: "LLR SONY BURANO ANIM",
        url: "https://youtube.com/shorts/ArXQWnF51PA",
        thumbnail: "/miniaturas/LLR-sony-burano.png",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS MES DE LA ILUMINACIÓN"),
        title: "HD LABS MES DE LA ILUMINACIÓN",
        url: "https://youtube.com/shorts/Dpqn4LScQ_g",
        thumbnail: "/miniaturas/exposure.png",
        orientation: "vertical"
      },
      {
        id: slugify("MOTION GRAPHICS ALIUD LOGO"),
        title: "MOTION GRAPHICS ALIUD LOGO",
        url: "https://youtu.be/Jh33vVxyFts",
        thumbnail: "/miniaturas/aliud.png",
        orientation: "horizontal"
      },
      {
        id: slugify("CINEMA LINE MIRROR"),
        title: "CINEMA LINE MIRROR",
        url: "https://youtube.com/shorts/PqxzH4EtuqA",
        thumbnail: "/miniaturas/cinemaline.png",
        orientation: "vertical"
      }
    ]
  },
  storyVideos: {
    title: "Historias",
    videos: [
      {
        id: slugify("ECOS GANADOR DEL SEGUNDO LUGAR EN CENTRO HISTÓRICO EN CORTO PROCINE"),
        title: "ECOS GANADOR DEL SEGUNDO LUGAR EN CENTRO HISTÓRICO EN CORTO PROCINE",
        url: "https://youtu.be/s_3bGt86078",
        thumbnail: "/miniaturas/ecos.png",
        orientation: "horizontal"
      },
      {
        id: slugify("DRAMA FASHION FILM BTS (2023)"),
        title: "DRAMA FASHION FILM BTS (2023)",
        url: "https://youtu.be/mhfmVY25ZH4",
        thumbnail: "/miniaturas/drama.png",
        orientation: "horizontal"
      },
      {
        id: slugify("HASTA EL FIN DEL MUNDO"),
        title: "HASTA EL FIN DEL MUNDO",
        url: "https://youtu.be/UmCJA619Rm4",
        thumbnail: "/miniaturas/fin-del-mundo.png",
        orientation: "horizontal"
      }
    ]
  }
}; 