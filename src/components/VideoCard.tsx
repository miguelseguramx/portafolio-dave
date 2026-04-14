"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface VideoCardProps {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    orientation: 'vertical' | 'horizontal';
}

export default function VideoCard({ url, title, thumbnail }: VideoCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const embedUrl = url
        .replace('youtube.com/shorts/', 'youtube.com/embed/')
        .replace('youtu.be/', 'youtube.com/embed/');

    return (
        <Box
            onClick={() => !isPlaying && setIsPlaying(true)}
            cursor={isPlaying ? "default" : "pointer"}
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
            transition="transform 0.25s, box-shadow 0.25s"
        >
            <Box position="relative" h="300px" bg="gray.900">
                {isPlaying ? (
                    <iframe
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                        src={`${embedUrl}?autoplay=1`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            loading="lazy"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        {/* Bottom gradient */}
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            h="40%"
                            style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                            }}
                        />
                        {/* Play button */}
                        <Box
                            position="absolute"
                            inset={0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Box
                                w={12}
                                h={12}
                                borderRadius="full"
                                bg="whiteAlpha.800"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box as="i" className="bi-play-fill" fontSize="xl" color="gray.900" ml="2px" />
                            </Box>
                        </Box>
                        {/* Title */}
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            p={4}
                            zIndex={10}
                        >
                            <Text
                                color="white"
                                fontSize="sm"
                                fontWeight="600"
                                fontFamily="var(--font-body)"
                                lineClamp={2}
                            >
                                {title}
                            </Text>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}
