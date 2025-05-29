"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Box, AspectRatio, Text } from '@chakra-ui/react';

interface VideoCardProps {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    orientation: 'vertical' | 'horizontal';
}

export default function VideoCard({
    url,
    title,
    thumbnail,
    orientation,
  }: VideoCardProps) {
    const [isPlaying, setIsPlaying] = useState(false)
  
    const embedUrl = url.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/');
    
    // Handler para el click: si no está reproduciendo, evitamos navegación y arrancamos el iframe
    const handleClick = (e: MouseEvent) => {
      if (!isPlaying) {
        e.preventDefault()
        setIsPlaying(true)
      }
    }
  
    // Aspect ratio based on orientation
    const aspectRatio = orientation === 'vertical' ? 9/16 : 16/9;
  
    return (
      <Box
        onClick={(e) => handleClick(e as unknown as MouseEvent)}
        role="group"
        bg="white"
        rounded="lg"
        shadow="xl"
        _hover={{ 
          shadow: "md",
          transform: "translateY(-4px)"
        }}
        transition="all 0.3s ease"
        cursor="pointer"
      >
        <AspectRatio ratio={aspectRatio}>
          <Box position="relative" overflow="hidden" rounded="lg" bg="gray.100">
            {isPlaying ? (
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  _groupHover={{
                    '& img': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="24"
                  bgGradient="linear(to-t, blackAlpha.800, transparent)"
                />
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
                    fontSize="2xl"
                    fontWeight="bold"
                    lineClamp={2}
                  >
                    {title}
                  </Text>
                </Box>
              </>
            )}
          </Box>
        </AspectRatio>
      </Box>
    )
  }