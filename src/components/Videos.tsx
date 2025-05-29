import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import VideoCard from "./VideoCard";
import { videos } from '@/data/videos';

function Videos() {
    return (
        <Box as="section" id="videos" className="section">
            <Container maxW="container.lg" px={4}>
                {/* <Heading as="h2" size="2xl" fontWeight="medium" mb={8}>Videos</Heading> */}
                
                {/* Visually Appealing Videos */}
                <Heading as="h2" size={{ base: '3xl', lg: '5xl' }} textAlign="center" fontWeight="bold" mb={12}>
                    Otros proyectos
                </Heading>
                <Box mb={16}>
                    <Heading as="h3" size="3xl"  fontWeight="bold" mb={6}>
                        {videos.visuallyAppealing.title}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                        {videos.visuallyAppealing.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Animations */}
                <Box mb={16}>
                    <Heading as="h3" size="3xl" fontWeight="bold" mb={6}>
                        {videos.animations.title}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                        {videos.animations.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </SimpleGrid>
                </Box>

                <Box mb={16}>
                    <Heading as="h3" size="3xl" fontWeight="bold" mb={6}>
                        {videos.storyVideos.title}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                        {videos.storyVideos.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
}

export default Videos;