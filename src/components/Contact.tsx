"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
  createIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const InstagramIcon = createIcon({
  displayName: "InstagramIcon",
  viewBox: "0 0 24 24",
  path: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    />
  ),
});

const WhatsAppIcon = createIcon({
  displayName: "WhatsAppIcon",
  viewBox: "0 0 24 24",
  path: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.355,4.645C17.352,2.642,14.656,1.5,11.75,1.5C5.813,1.5,1,6.313,1,12.25c0,1.875,0.5,3.625,1.375,5.125L1,23l5.625-1.375C8.125,22.5,9.875,23,11.75,23c5.938,0,10.75-4.813,10.75-10.75C22.5,9.344,21.358,6.648,19.355,4.645z M11.75,21c-1.75,0-3.375-0.5-4.75-1.375l-0.375-0.25l-3.875,1l1-3.875l-0.25-0.375C3.25,14.625,2.75,13,2.75,11.25C2.75,7.188,6.688,3.25,10.75,3.25c2.875,0,5.5,1.125,7.5,3.125s3.125,4.625,3.125,7.5C21.25,17.313,17.313,21,11.75,21z M16.375,13.875c-0.25-0.125-1.5-0.75-1.75-0.875c-0.25-0.125-0.375-0.125-0.5,0.125c-0.125,0.25-0.5,0.875-0.625,1c-0.125,0.125-0.25,0.125-0.5,0c-0.25-0.125-1-0.375-1.875-1.188c-0.688-0.625-1.125-1.375-1.25-1.625c-0.125-0.25-0.013-0.375,0.125-0.5c0.125-0.125,0.25-0.375,0.375-0.5c0.125-0.125,0.125-0.25,0.188-0.375c0.063-0.125,0-0.25-0.063-0.375c-0.063-0.125-0.5-1.25-0.688-1.688c-0.188-0.438-0.375-0.375-0.5-0.375c-0.125,0-0.25,0-0.375,0c-0.125,0-0.313,0.063-0.5,0.313c-0.188,0.25-0.688,0.75-0.688,1.75c0,1,0.75,2,0.875,2.125c0.125,0.125,1.5,2.375,3.625,3.25c0.5,0.25,0.875,0.375,1.125,0.5c0.5,0.25,0.875,0.188,1.125,0.125c0.375-0.125,1.125-0.5,1.25-0.875C16.5,14.125,16.625,14,16.375,13.875z"
    />
  ),
});

export default function Contact() {
  return (
    <Box as="section" id="contacto" py={{ base: 16, lg: 32 }} bg="#0a0a0a">
      <Container maxW="container.md" px={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack gap={4} textAlign="center" mb={{ base: 10, lg: 14 }}>
            <Heading
              as="h2"
              fontFamily="var(--font-heading)"
              fontWeight="300"
              fontSize={{ base: "4xl", lg: "6xl" }}
              letterSpacing="-0.02em"
              color="white"
            >
              Contacto
            </Heading>
            <Text color="whiteAlpha.700" fontSize={{ base: "md", lg: "lg" }} fontFamily="var(--font-body)">
              Hablemos de tu próximo proyecto
            </Text>
          </VStack>

          <VStack gap={4}>
            <ChakraLink
              href="https://instagram.com/day_dreamer_dave"
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              w="full"
              textDecoration="none"
            >
              <HStack
                justify="center"
                gap={3}
                py={4}
                px={8}
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="md"
                color="white"
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.600" }}
                transition="background 0.2s, border-color 0.2s"
              >
                <InstagramIcon boxSize={5} />
                <Text fontFamily="var(--font-body)" fontWeight="500" letterSpacing="0.05em">
                  @day_dreamer_dave
                </Text>
              </HStack>
            </ChakraLink>

            <ChakraLink
              href="https://wa.me/525537022741"
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              w="full"
              textDecoration="none"
            >
              <HStack
                justify="center"
                gap={3}
                py={4}
                px={8}
                bg="white"
                borderRadius="md"
                color="gray.900"
                _hover={{ bg: "gray.100" }}
                transition="background 0.2s"
              >
                <WhatsAppIcon boxSize={5} />
                <Text fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.05em">
                  Envíame un mensaje
                </Text>
              </HStack>
            </ChakraLink>
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
}
