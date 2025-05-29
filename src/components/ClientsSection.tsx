"use client";

import React, { useRef } from "react";
import { 
  Box, 
  Flex, 
  Heading, 
  HStack, 
  IconButton, 
  Text, 
  useBreakpointValue,
  VStack,
  Container
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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
    // Ajusta el tamaño de los logos según el breakpoint
    const logoW = useBreakpointValue({ base: 120, md: 160 });
  
    return (
        <Container maxW="none" bg="gray.100" mb={{ base: 24, lg: 48 }}>
            <Container maxW="container.lg" px={4}>
                <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 12 }} borderRadius="lg">
                    <VStack gap={2} textAlign="center" mb={{ base: 6, md: 12 }}>
                    <Heading size="5xl" fontWeight="bold">He trabajado con</Heading>
                    <Text color="gray.600" fontSize="3xl">
                        Estas son algunas de las empresas que han confiado en mi trabajo como
                        videógrafo.
                    </Text>
                    </VStack>
            
                    <Flex
                        wrap="wrap"
                        justify="center"
                        align="center"
                        /* gap entre logos */
                        gapX={{ base: 8, md: 12 }}
                        gapY={{ base: 0, md: 0 }}
                    >
                    {clients.map((c) => (
                        <Box key={c.name} w={`${logoW}px`} h={`${logoW}px`} display="flex" justifyContent="center" alignItems="center">
                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={logoW}
                                height={logoW}
                                objectFit="contain"
                            />
                        </Box>
                    ))}
                    </Flex>
                </Box>
            </Container>
        </Container>
    );
  }
  