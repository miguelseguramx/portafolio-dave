"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box position="relative" mt="16" w="full" h={{ base: "65vh", md: "90vh" }} overflow="hidden">
      <Image
        src="/dave.JPG"
        alt="Day Dreamer Dave - Cinematógrafo"
        fill
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        priority
        quality={90}
      />

      {/* Gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Text overlay */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={{ base: 6, md: 16, lg: 24 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <VStack align="flex-start" gap={4}>
            <Text
              color="whiteAlpha.700"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="0.2em"
              textTransform="uppercase"
              fontFamily="var(--font-body)"
            >
              Cinematógrafo · Videógrafo · Editor
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "9xl" }}
              fontWeight="300"
              color="white"
              fontFamily="var(--font-heading)"
              lineHeight="1"
              letterSpacing="-0.02em"
            >
              Day Dreamer Dave
            </Heading>
            <Link href="#proyectos">
              <Button
                variant="outline"
                size="lg"
                mt={4}
                borderColor="white"
                color="white"
                bg="transparent"
                _hover={{ bg: "white", color: "black" }}
                transition="background 0.3s, color 0.3s"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontSize="sm"
              >
                Ver mi trabajo
              </Button>
            </Link>
          </VStack>
        </motion.div>
      </Box>
    </Box>
  );
}
