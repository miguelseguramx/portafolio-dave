"use client";

import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: "bi-camera-video",
    title: "Operador de Cámara",
    description: "Composición, movimiento y estabilización para narrativas visuales de alto impacto.",
  },
  {
    icon: "bi-camera",
    title: "Asistente de Cámara",
    description: "Control de foco y continuidad en sets profesionales de cine y publicidad.",
  },
  {
    icon: "bi-scissors",
    title: "Editor",
    description: "Edición narrativa con dominio del color y el lenguaje cinematográfico.",
  },
  {
    icon: "bi-film",
    title: "Director de Fotografía",
    description: "Diseño visual y dirección de luz con criterio estético y storytelling.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <Box as="section" id="habilidades" py={{ base: 32, lg: 20 }} bg="#0a0a0a">
      <Container maxW="container.lg" px={4}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            textAlign="center"
            color="white"
            fontFamily="var(--font-heading)"
            fontWeight="300"
            fontSize={{ base: "4xl", lg: "6xl" }}
            mb={{ base: 8, lg: 12 }}
            letterSpacing="-0.02em"
          >
            Habilidades
          </Heading>
        </motion.div>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={5}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <VStack
                align="flex-start"
                gap={3}
                p={4}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="md"
                h="full"
                _hover={{ borderColor: "whiteAlpha.500" }}
                transition="border-color 0.3s"
              >
                <Box
                  as="i"
                  className={skill.icon}
                  fontSize="4xl"
                  color="white"
                />
                <Heading
                  as="h3"
                  color="white"
                  fontFamily="var(--font-heading)"
                  fontWeight="400"
                  fontSize="xl"
                >
                  {skill.title}
                </Heading>
                <Text color="whiteAlpha.700" fontSize="sm" lineHeight="tall">
                  {skill.description}
                </Text>
              </VStack>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
