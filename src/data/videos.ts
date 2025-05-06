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
        thumbnail: "https://img.youtube.com/vi/xbK3UubE2bg/maxresdefault.jpg",
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
        thumbnail: "https://img.youtube.com/vi/_-wjBp41v9g/maxresdefault.jpg",
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
        thumbnail: "https://img.youtube.com/vi/T0Qjz_2cfXU/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS BOOTCAM TEASER"),
        title: "HD LABS BOOTCAM TEASER",
        url: "https://youtube.com/shorts/4ZdIw8d040k",
        thumbnail: "https://img.youtube.com/vi/4ZdIw8d040k/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("ALEX GÜEMES CABEZAS DE TRIPIES"),
        title: "ALEX GÜEMES CABEZAS DE TRIPIES",
        url: "https://youtube.com/shorts/c2PB4BHHVpY",
        thumbnail: "https://img.youtube.com/vi/c2PB4BHHVpY/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS VIRTUAL PRODUCTION"),
        title: "HD LABS VIRTUAL PRODUCTION",
        url: "https://youtube.com/shorts/fhWTlYv6HR0",
        thumbnail: "https://img.youtube.com/vi/fhWTlYv6HR0/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("ALEX GÜEMES 28-70"),
        title: "ALEX GÜEMES 28-70",
        url: "https://youtube.com/shorts/Z-r3eoQgOUM",
        thumbnail: "https://img.youtube.com/vi/Z-r3eoQgOUM/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("CINEMATOGRAPHERS MEET DAY 2024"),
        title: "CINEMATOGRAPHERS MEET DAY 2024",
        url: "https://youtube.com/shorts/Bbtzkx6-JZU",
        thumbnail: "https://img.youtube.com/vi/Bbtzkx6-JZU/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("ESTUDIO 7"),
        title: "ESTUDIO 7",
        url: "https://youtube.com/shorts/2gJAND7V6Kw",
        thumbnail: "https://img.youtube.com/vi/2gJAND7V6Kw/maxresdefault.jpg",
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
        thumbnail: "https://img.youtube.com/vi/5Z70Mt6BX1U/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("LLR SONY BURANO ANIM"),
        title: "LLR SONY BURANO ANIM",
        url: "https://youtube.com/shorts/ArXQWnF51PA",
        thumbnail: "https://img.youtube.com/vi/ArXQWnF51PA/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("HD LABS MES DE LA ILUMINACIÓN"),
        title: "HD LABS MES DE LA ILUMINACIÓN",
        url: "https://youtube.com/shorts/Dpqn4LScQ_g",
        thumbnail: "https://img.youtube.com/vi/Dpqn4LScQ_g/maxresdefault.jpg",
        orientation: "vertical"
      },
      {
        id: slugify("MOTION GRAPHICS ALIUD LOGO"),
        title: "MOTION GRAPHICS ALIUD LOGO",
        url: "https://youtu.be/Jh33vVxyFts",
        thumbnail: "https://img.youtube.com/vi/Jh33vVxyFts/maxresdefault.jpg",
        orientation: "horizontal"
      },
      {
        id: slugify("CINEMA LINE MIRROR"),
        title: "CINEMA LINE MIRROR",
        url: "https://youtube.com/shorts/PqxzH4EtuqA",
        thumbnail: "https://img.youtube.com/vi/PqxzH4EtuqA/maxresdefault.jpg",
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
        thumbnail: "https://img.youtube.com/vi/s_3bGt86078/maxresdefault.jpg",
        orientation: "horizontal"
      },
      {
        id: slugify("DRAMA FASHION FILM BTS (2023)"),
        title: "DRAMA FASHION FILM BTS (2023)",
        url: "https://youtu.be/mhfmVY25ZH4",
        thumbnail: "https://img.youtube.com/vi/mhfmVY25ZH4/maxresdefault.jpg",
        orientation: "horizontal"
      },
      {
        id: slugify("HASTA EL FIN DEL MUNDO"),
        title: "HASTA EL FIN DEL MUNDO",
        url: "https://youtu.be/UmCJA619Rm4",
        thumbnail: "https://img.youtube.com/vi/UmCJA619Rm4/maxresdefault.jpg",
        orientation: "horizontal"
      }
    ]
  }
}; 