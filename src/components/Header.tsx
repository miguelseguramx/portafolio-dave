"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      bg="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      shadow="sm"
    >
      <Container maxW="container.lg" px={4}>
        <Flex as="header" justify="space-between" align="center" py={4}>
          <Link href="/" passHref>
            <HStack as="div" gap={2}>
              <Image src="/logo.png" alt="Day Dreamers Dave" width={50} height={50} />
              <Image src="/logo-text.svg" alt="Day Dreamers Dave" width={60} height={50} />
            </HStack>
          </Link>

          {/* Desktop nav */}
          <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Text
                  fontSize="xs"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  fontWeight="500"
                  fontFamily="var(--font-body)"
                  color="gray.800"
                  _hover={{ color: "gray.500" }}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </HStack>

          {/* Mobile hamburger */}
          <Box
            as="button"
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            justifyContent="center"
            gap="5px"
            w={6}
            h={6}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            cursor="pointer"
          >
            <Box
              as="span"
              display="block"
              h="1.5px"
              bg="gray.800"
            />
            <Box
              as="span"
              display="block"
              h="1.5px"
              bg="gray.800"
            />
            <Box
              as="span"
              display="block"
              h="1.5px"
              bg="gray.800"
            />
          </Box>
        </Flex>
      </Container>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <Box
          bg="white"
          borderTop="1px solid"
          borderColor="gray.100"
          display={{ base: "block", md: "none" }}
        >
          <Container maxW="container.lg" px={4}>
            <VStack align="stretch" py={6} gap={6}>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                  <Text
                    fontSize="2xl"
                    fontFamily="var(--font-heading)"
                    fontWeight="300"
                    letterSpacing="-0.01em"
                    color="gray.900"
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </VStack>
          </Container>
        </Box>
      )}
    </Box>
  );
}
