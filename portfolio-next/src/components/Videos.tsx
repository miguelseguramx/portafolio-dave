import Wrapper from "./Wrapper";
import VideoCard from "./VideoCard";
import { videos } from '@/data/videos';

function Videos() {
    return (
        <section id="videos" className="section">
            <Wrapper>
                {/* <h2 className="text-4xl font-medium mb-8">Videos</h2> */}
                
                {/* Visually Appealing Videos */}
                <div className="mb-16">
                    <h3 className="text-2xl font-medium mb-6">{videos.visuallyAppealing.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.visuallyAppealing.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </div>
                </div>

                {/* Animations */}
                <div className="mb-16">
                    <h3 className="text-2xl font-medium mb-6">{videos.animations.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.animations.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </div>
                </div>

                {/* Story Videos */}
                <div className="mb-16">
                    <h3 className="text-2xl font-medium mb-6">{videos.storyVideos.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.storyVideos.videos.map((video) => (
                            <VideoCard key={video.id} {...video} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Videos;