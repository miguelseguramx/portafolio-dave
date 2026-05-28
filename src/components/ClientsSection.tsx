"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Sony", logo: "/sony.png" },
  { name: "Tamron", logo: "/tamron.png" },
  { name: "Gillette", logo: "/gillete.png" },
  { name: "Pepsico", logo: "/pepsi.png" },
  { name: "Paco Rabanne", logo: "/pacorabanne.png" },
  { name: "New Era", logo: "/newera.png" },
  { name: "Tecnoplanet", logo: "/tecnoplanet.png" },
  { name: "Renault", logo: "/renault.png" },
  { name: "Del Monte", logo: "/delmonte.png" },
  { name: "HD Labs", logo: "/hdlabs.png" },
  { name: "Estudio 7", logo: "/estudio7.png" },
];

function LogoItem({ client, ariaHidden }: { client: typeof clients[number]; ariaHidden?: boolean }) {
  return (
    <Box
      flexShrink={0}
      px={{ base: 5, md: 7, lg: 9 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      h={{ base: "36px", md: "42px", lg: "48px" }}
      aria-hidden={ariaHidden || undefined}
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={48}
        style={{
          objectFit: "contain",
          maxHeight: "100%",
          width: "auto",
          filter: "grayscale(100%)",
          opacity: 0.65,
          transition: "filter 0.4s ease, opacity 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "grayscale(0%)";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "grayscale(100%)";
          e.currentTarget.style.opacity = "0.65";
        }}
      />
    </Box>
  );
}

export default function ClientsSection() {
  return (
    <Container maxW="none" bg="#f5f5f5" mb={{ base: 16, lg: 24 }}>
      <Container maxW="container.lg" px={4}>
        <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack gap={2} textAlign="center" mb={{ base: 6, md: 12 }}>
              <Heading
                size={{ base: "3xl", lg: "5xl" }}
                fontWeight="300"
                fontFamily="var(--font-heading)"
                letterSpacing="-0.02em"
              >
                He trabajado con
              </Heading>
              <Text color="gray.600" fontSize={{ base: "xl", lg: "3xl" }}>
                Estas son algunas de las empresas que han confiado en mi trabajo
                como videografo.
              </Text>
            </VStack>

            <Box
              overflow="hidden"
              position="relative"
              role="marquee"
              aria-label="Marcas con las que he trabajado"
            >
              <Box
                className="marquee-track"
                display="flex"
                width="max-content"
                style={{
                  animation: "marquee-scroll 30s linear infinite",
                  willChange: "transform",
                }}
                _hover={{ animationPlayState: "paused" }}
              >
                {clients.map((c) => (
                  <LogoItem key={c.name} client={c} />
                ))}
                {clients.map((c) => (
                  <LogoItem key={`dup-${c.name}`} client={c} ariaHidden />
                ))}
              </Box>

              {/* Left fade gradient */}
              <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                w={{ base: "40px", md: "60px", lg: "80px" }}
                bgGradient="to-r"
                gradientFrom="#f5f5f5"
                gradientTo="transparent"
                zIndex={1}
                pointerEvents="none"
              />

              {/* Right fade gradient */}
              <Box
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                w={{ base: "40px", md: "60px", lg: "80px" }}
                bgGradient="to-l"
                gradientFrom="#f5f5f5"
                gradientTo="transparent"
                zIndex={1}
                pointerEvents="none"
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Container>
  );
}
