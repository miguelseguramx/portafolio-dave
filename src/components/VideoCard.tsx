"use client"
import Image from 'next/image';
import { useState } from 'react';

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
  
    // la clase de ratio
    const ratioClass =
      orientation === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'
  
    return (
      <div
        onClick={(e) => handleClick(e as unknown as MouseEvent)}
        className="group bg-white rounded-lg shadow-xl hover:shadow-md transition-shadow transform hover:-translate-y-1"
      >
        <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${ratioClass}`}>
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
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
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white text-2xl font-bold line-clamp-2">
                  {title}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }