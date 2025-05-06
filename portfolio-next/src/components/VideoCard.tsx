import Link from 'next/link';
import Image from 'next/image';

interface VideoCardProps {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    orientation: 'vertical' | 'horizontal';
}

export default function VideoCard({ id, title, url, thumbnail, orientation }: VideoCardProps) {
    return (
        <Link href={`/video/${id}`} className="group">
            <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${
                orientation === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'
            }`}>
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-medium line-clamp-2">{title}</h3>
                </div>
            </div>
        </Link>
    );
} 