import { notFound } from 'next/navigation';
import { videos } from '@/data/videos';
import Wrapper from '@/components/Wrapper';

interface VideoPageProps {
    params: {
        id: string;
    };
}

export default function VideoPage({ params }: VideoPageProps) {
    // Find the video in any category
    const allVideos = [
        ...videos.visuallyAppealing.videos,
        ...videos.animations.videos,
        ...videos.storyVideos.videos
    ];
    
    const video = allVideos.find(v => v.id === params.id);
    
    if (!video) {
        notFound();
    }

    // Convert YouTube URL to embed URL
    const embedUrl = video.url
        .replace('youtube.com/shorts/', 'youtube.com/embed/')
        .replace('youtu.be/', 'youtube.com/embed/');

    return (
        <div className="page-container">
            <Wrapper>
                <div className={`w-full relative mb-8 ${
                    video.orientation === 'vertical' ? 'max-w-[400px] mx-auto' : 'aspect-video'
                }`}>
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        className="absolute inset-0 w-full h-full rounded-lg shadow-lg animate-fadeIn"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <h1 className="text-2xl text-center font-medium mb-6">{video.title}</h1>
                <iframe
                    src={embedUrl}
                    title={video.title}
                    className={`w-full ${
                        video.orientation === 'vertical' 
                            ? 'aspect-[9/16] max-w-[400px] mx-auto' 
                            : 'aspect-video'
                    }`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Wrapper>
        </div>
    );
} 