import React from 'react';
import {
  Grid,
  Box,
  Heading,
  Text,
  List,
  Container,
  AspectRatio,
} from '@chakra-ui/react';

const projects = [
  {
    title: 'Drama',
    subtitle: 'Jasive - 2023',
    bullets: [
      'Nominado a Mejor Cortometraje en el Fashion Film Festival de Bogotá',
      'Selección oficial de Fashion Film Festival de Chicago',
      'Presentado en la Semana de la Moda de Milán en septiembre de 2023',
    ],
    youtubeId: '5CCLJGKvLFw', // reemplaza con el ID real de YouTube
    reverse: false,
  },
  {
    title: 'Un Año Más',
    subtitle: 'TV Azteca - 2024',
    bullets: [],
    youtubeId: '2VYV3h1I2tc',
    reverse: true,
  },
  {
    title: 'ECOS',
    subtitle: '2024 - Procine',
    bullets: [
      'Ganador del segundo lugar de la convocatoria de PROCINE en la categoría Alameda',
    ],
    youtubeId: 'DEB5EIv6oAU',
    reverse: false,
  },
  {
    title: 'AVIÓN A TOKIO',
    subtitle: '2023 - Almas',
    bullets: [
      'Encargado de equipo / Asistente de cámara',
    ],
    youtubeId: '9XttsEBa1gE',
    reverse: true,
  },
  {
    title: 'Grupo Frontera habla de UN X100TO',
    subtitle: '2024 - GQ México y Latinoamérica',
    bullets: [
      'Encargado de equipo / Asistente de cámara',
    ],
    youtubeId: '9E5dh6VqZd8',
    reverse: false,
  },
  {
    title: '¡De Jocho a Archi Requete Recontra Jocho!',
    subtitle: 'Del monte',
    bullets: [
      'Encargado de equipo / Asistente de cámara',
    ],
    youtubeId: 'qOPHjTz1Qkc',
    reverse: true,
  }
];

function PortfolioGrid() {
  return (
    <Grid templateColumns={{ base: '1fr' }} gap={6} gapY={{ base: 6, lg: 12 }}>
      {projects.map((project, idx) => (
        <Grid
          key={idx}
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: 4, lg: 8 }}
          alignItems="center"
          bg="white"
          shadow="lg"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 4, lg: 8 }}
          pb={{ base: 8, lg: 8 }}
        >
          {/* Video or placeholder */}
          {!project.reverse && (
            <Container overflow="hidden" borderRadius="lg" p={0}>
                <AspectRatio ratio={16 / 9} bg="gray.200" display={{ base: 'none', xl: 'block' }}>
                <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    allowFullScreen
                />
                </AspectRatio>
            </Container>
          )}

          {/* Text content */}
          <Box p={{ base: 2, lg: 12 }} pt={{ base: 0, lg: 12 }}>
            <Heading size="3xl" mb={2}>
              {project.title}
            </Heading>
            <Text fontStyle="italic" fontSize="lg" mb={project.bullets.length > 0 ? 2 : 0}>
              {project.subtitle}
            </Text>
            {project.bullets.length > 0 && (
              <List.Root gap={1} pl={4} fontSize="md">
                {project.bullets.map((bullet, i) => (
                  <List.Item key={i}>{bullet}</List.Item>
                ))}
              </List.Root>
            )}
          </Box>

          {/* Video - shows on mobile always, on desktop only for reverse projects */}
            <Container overflow="hidden" borderRadius="lg" p={0}>
                <AspectRatio 
                    ratio={16 / 9} 
                    bg="gray.200" 
                    display={{ 
                    base: 'block', 
                    xl: project.reverse ? 'block' : 'none' 
                    }}
                >
                    <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    allowFullScreen
                    />
                </AspectRatio>
            </Container>
        </Grid>
      ))}
    </Grid>
  );
}

function FeaturedProjects() {
    return (
        <Box as="section" id="videos" className="section" pt={{ base: 24, lg: 48 }} pb={{ base: 24, lg: 48 }}>
            <Container maxW="container.lg" px={4}>
                <Heading as="h2" size={{ base: '4xl', lg: '6xl' }} textAlign="center" fontWeight="bold" mb={{ base: 6, lg: 20 }}>
                    Projectos
                </Heading>
                <PortfolioGrid />
            </Container>
        </Box>      
    )
}

export default FeaturedProjects;