"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  List,
  Container,
  AspectRatio,
  Dialog,
  Button,
  CloseButton,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  youtubeId: string;
  thumbnail: string;
  role: string;
}

const projects: Project[] = [
  {
    title: 'Drama',
    subtitle: 'Jasive · 2023',
    bullets: [
      'Nominado a Mejor Cortometraje en el Fashion Film Festival de Bogotá',
      'Selección oficial de Fashion Film Festival de Chicago',
      'Presentado en la Semana de la Moda de Milán en septiembre de 2023',
    ],
    youtubeId: '5CCLJGKvLFw',
    thumbnail: '/miniaturas/drama.png',
    role: 'Asistente de Cámara',
  },
  {
    title: 'Un Año Más',
    subtitle: 'TV Azteca · 2024',
    bullets: [],
    youtubeId: '2VYV3h1I2tc',
    thumbnail: 'https://img.youtube.com/vi/2VYV3h1I2tc/maxresdefault.jpg',
    role: 'Operador de Cámara',
  },
  {
    title: 'ECOS',
    subtitle: 'Procine · 2024',
    bullets: [
      'Ganador del segundo lugar de la convocatoria de PROCINE en la categoría Alameda',
    ],
    youtubeId: 'DEB5EIv6oAU',
    thumbnail: '/miniaturas/ecos.png',
    role: 'Director y Director de Fotografía',
  },
  {
    title: 'AVIÓN A TOKIO',
    subtitle: 'Almas · 2023',
    bullets: [],
    youtubeId: '9XttsEBa1gE',
    thumbnail: 'https://img.youtube.com/vi/9XttsEBa1gE/maxresdefault.jpg',
    role: 'Asistente de Cámara',
  },
  {
    title: 'Grupo Frontera — UN X100TO',
    subtitle: 'GQ México · 2024',
    bullets: [],
    youtubeId: '9E5dh6VqZd8',
    thumbnail: 'https://img.youtube.com/vi/9E5dh6VqZd8/maxresdefault.jpg',
    role: 'Asistente de Cámara',
  },
  {
    title: '¡De Jocho a Archi Requete Recontra Jocho!',
    subtitle: 'Del Monte',
    bullets: [],
    youtubeId: 'qOPHjTz1Qkc',
    thumbnail: 'https://img.youtube.com/vi/qOPHjTz1Qkc/maxresdefault.jpg',
    role: 'Asistente de Cámara',
  },
];

function ProjectVideoPlayer({ youtubeId, title, thumbnail }: { youtubeId: string; title: string; thumbnail: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      onClick={(e) => { e.stopPropagation(); if (!isPlaying) setIsPlaying(true); }}
      cursor={isPlaying ? "default" : "pointer"}
      borderRadius="lg"
      overflow="hidden"
      position="relative"
    >
      <AspectRatio ratio={16 / 9}>
        <Box position="relative" bg="gray.900">
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  position="absolute"
                  inset={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="blackAlpha.200"
                  _hover={{ bg: "blackAlpha.400" }}
                  transition="background 0.3s"
                >
                  <Box
                    w={16}
                    h={16}
                    borderRadius="full"
                    bg="whiteAlpha.900"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="lg"
                  >
                    <Box as="i" className="bi-play-fill" fontSize="2xl" color="gray.900" ml="2px" />
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {isPlaying && (
            <iframe
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </Box>
      </AspectRatio>
    </Box>
  );
}

function ProjectCard({ project, onDetailsClick }: { project: Project; onDetailsClick: () => void }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
      transition="transform 0.25s, box-shadow 0.25s"
    >
      <ProjectVideoPlayer
        youtubeId={project.youtubeId}
        title={project.title}
        thumbnail={project.thumbnail}
      />
      <Box p={4}>
        <Box
          display="inline-block"
          px={2}
          py="2px"
          mb={2}
          fontSize="10px"
          letterSpacing="0.1em"
          textTransform="uppercase"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.300"
          color="gray.500"
          fontFamily="var(--font-body)"
        >
          {project.role}
        </Box>
        <Heading
          as="h3"
          fontSize="lg"
          fontFamily="var(--font-heading)"
          fontWeight="400"
          letterSpacing="-0.01em"
          mb={1}
          lineClamp={2}
        >
          {project.title}
        </Heading>
        <Text
          fontSize="sm"
          color="gray.500"
          fontFamily="var(--font-body)"
          fontStyle="italic"
        >
          {project.subtitle}
        </Text>
        {project.bullets.length > 0 && (
          <Button
            variant="ghost"
            size="xs"
            mt={2}
            color="gray.400"
            fontFamily="var(--font-body)"
            letterSpacing="0.05em"
            fontSize="11px"
            onClick={onDetailsClick}
            px={0}
            _hover={{ color: "gray.700" }}
          >
            Ver detalles →
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const active = activeProject !== null ? projects[activeProject] : null;

  return (
    <Box as="section" id="proyectos" py={{ base: 12, lg: 24 }}>
      <Container maxW="container.lg" px={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            textAlign="center"
            fontFamily="var(--font-heading)"
            fontWeight="300"
            fontSize={{ base: '4xl', lg: '6xl' }}
            letterSpacing="-0.02em"
            mb={{ base: 8, lg: 14 }}
          >
            Proyectos
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              onDetailsClick={() => setActiveProject(idx)}
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* Detail modal */}
      <Dialog.Root
        open={activeProject !== null}
        onOpenChange={() => setActiveProject(null)}
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="lg">
            <Dialog.Header>
              <Heading
                fontFamily="var(--font-heading)"
                fontWeight="400"
                fontSize="2xl"
              >
                {active?.title}
              </Heading>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              <CloseButton position="absolute" top={3} right={3} />
            </Dialog.CloseTrigger>
            <Dialog.Body pb={6}>
              <Text fontSize="sm" color="gray.500" fontStyle="italic" mb={4}>
                {active?.subtitle}
              </Text>
              <List.Root gap={2} pl={4} fontSize="sm" color="gray.700">
                {active?.bullets.map((bullet, i) => (
                  <List.Item key={i}>{bullet}</List.Item>
                ))}
              </List.Root>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}
