"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Container
} from "@chakra-ui/react";
import Image from "next/image";

// Lista de clientes y rutas a sus logos en public/logos
const clients = [
  { name: "Sony", logo: "/sony.png"},
  { name: "Tamron", logo: "/tamron.png"},
  { name: "Gillette", logo: "/gillete.png"},
  { name: "Pepsico", logo: "/pepsi.png"},
  { name: "Paco Rabanne", logo: "/pacorabanne.png" },
  { name: "New Era", logo: "/newera.png" },
  { name: "Tecnoplanet", logo: "/tecnoplanet.webp"},
  { name: "Renault", logo: "/renault.png"},
  { name: "Del Monte", logo: "/delmonte.png" },
  { name: "HD Labs", logo: "/hdlabs.png" },
  { name: "Estudio 7", logo: "/estudio7.png" },
//   { name: "Smartfilms", logo: "/logo.png"},
//   { name: "Procine", logo: "/logo.png"},
//   { name: "Netflix", logo: "/logo.png"},
//   { name: "Coppel", logo: "/logo.png"},
];

export default function ClientsGrid() {
    return (
        <Container maxW="none" bg="#f5f5f5" mb={{ base: 16, lg: 24 }}>
            <Container maxW="container.lg" px={4}>
                <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 12 }} borderRadius="lg">
                    <VStack gap={2} textAlign="center" mb={{ base: 6, md: 12 }}>
                    <Heading size={{ base: '3xl', lg: '5xl' }} fontWeight="300" fontFamily="var(--font-heading)" letterSpacing="-0.02em">He trabajado con</Heading>
                    <Text color="gray.600" fontSize={{ base: 'xl', lg: '3xl' }}>
                        Estas son algunas de las empresas que han confiado en mi trabajo como
                        videógrafo.
                    </Text>
                    </VStack>

                    <Flex
                        wrap="wrap"
                        justify="center"
                        align="center"
                        gapX={{ base: 8, md: 12 }}
                        gapY={{ base: 4, md: 6 }}
                    >
                    {clients.map((c) => (
                        <Box key={c.name} px={4} py={2} display="flex" justifyContent="center" alignItems="center" h="48px">
                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={160}
                                height={48}
                                style={{ objectFit: "contain", maxHeight: "48px", filter: "grayscale(100%)", opacity: 0.65 }}
                            />
                        </Box>
                    ))}
                    </Flex>
                </Box>
            </Container>
        </Container>
    );
  }
  