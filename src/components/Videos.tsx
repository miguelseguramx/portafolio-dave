import { Box, Container, Heading } from "@chakra-ui/react";
import VideoCard from "./VideoCard";
import { videos } from '@/data/videos';

function CarouselRow({ section }: { section: typeof videos.visuallyAppealing }) {
    return (
        <Box
            display="flex"
            overflowX="auto"
            gap={4}
            pb={4}
            style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
            }}
            css={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
            {section.videos.map((video) => (
                <Box
                    key={video.id}
                    flexShrink={0}
                    w={{ base: "calc(66.67%)", md: "calc(33.33% - 11px)" }}
                    style={{ scrollSnapAlign: "start" }}
                >
                    <VideoCard {...video} />
                </Box>
            ))}
        </Box>
    );
}

function Videos() {
    return (
        <Box as="section" id="videos" py={{ base: 12, lg: 24 }}>
            <Container maxW="container.lg" px={4}>
                <Heading
                    as="h2"
                    size={{ base: '3xl', lg: '5xl' }}
                    textAlign="center"
                    fontWeight="300"
                    fontFamily="var(--font-heading)"
                    letterSpacing="-0.02em"
                    mb={12}
                >
                    Otros proyectos
                </Heading>

                <Box mb={12}>
                    <Heading as="h3" size="2xl" fontWeight="300" fontFamily="var(--font-heading)" mb={5}>
                        {videos.visuallyAppealing.title}
                    </Heading>
                    <CarouselRow section={videos.visuallyAppealing} />
                </Box>

                <Box mb={12}>
                    <Heading as="h3" size="2xl" fontWeight="300" fontFamily="var(--font-heading)" mb={5}>
                        {videos.animations.title}
                    </Heading>
                    <CarouselRow section={videos.animations} />
                </Box>

                <Box mb={4}>
                    <Heading as="h3" size="2xl" fontWeight="300" fontFamily="var(--font-heading)" mb={5}>
                        {videos.storyVideos.title}
                    </Heading>
                    <CarouselRow section={videos.storyVideos} />
                </Box>
            </Container>
        </Box>
    );
}

export default Videos;
