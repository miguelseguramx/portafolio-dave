"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Flex, HStack, useDisclosure, Container } from "@chakra-ui/react";

export default function Header() {
  const { open, onToggle, onClose } = useDisclosure();

  return (
    <Box bg="white" position="sticky" top={0} zIndex={50} shadow="md">
      <Container maxW="container.lg" px={4}>
        <Flex as="header" justify="space-between" align="center" p={4}>
          <Link href="/" passHref>
            <HStack as="div" _hover={{ color: "gray.600" }} transition="color 0.3s" gap={2}>
              <Image src="/logo.png" alt="Day Dreamers Dave" width={50} height={50} />
              <Image src="/logo-text.svg" alt="Day Dreamers Dave" width={60} height={50} />
            </HStack>
          </Link>

          {/* Desktop Menu */}
          {/* <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
            <Link href="/#reels" passHref>
              <Button as="a" variant="surface">Videos</Button>
            </Link>
            <Link href="/#contacto" passHref>
              <Button as="a" variant="surface">Contacto</Button>
            </Link>
            <Link href="/#contacto" passHref>
              <Button as="a" variant="surface">Contacto</Button>
            </Link>
          </HStack> */}

          {/* Mobile Menu Toggle */}
          {/* <Box display={{ base: "block", md: "none" }}>
            <IconButton
              variant="ghost"
              aria-label="Toggle menu"
              onClick={onToggle}
              size="md"
            >
                <HamburgerIcon />
            </IconButton>
          </Box> */}
        </Flex>

        {/* Mobile Menu */}
        {/* {open && (
          <Box
            id="mobile-menu"
            position="fixed"
            top="86px"
            left={0}
            right={0}
            bg="white"
            shadow="lg"
            p={4}
            zIndex={40}
            display={{ md: "none" }}
          >
            <VStack gap={4} align="stretch">
              <Link href="/#videos" passHref>
                <Box
                  as="a"
                  fontSize="2xl"
                  py={2}
                  onClick={onClose}
                >
                  Videos
                </Box>
              </Link>
              <Link href="/#contacto" passHref>
                <Box
                  as="a"
                  fontSize="2xl"
                  py={2}
                  onClick={onClose}
                >
                  Contacto
                </Box>
              </Link>
            </VStack>
          </Box>
        )} */}
      </Container>
    </Box>
  );
}
