import React, { useState, useEffect, useRef } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

export const VideosSection: React.FC = () => {
  const videos: Video[] = [
    { id: '1', title: 'Video 1', description: 'İlk video açıklaması', youtubeId: 'dQw4w9WgXcQ' },
    { id: '2', title: 'Video 2', description: 'İkinci video açıklaması', youtubeId: 'C0DPdy98e4c' },
    { id: '3', title: 'Video 3', description: 'Üçüncü video açıklaması', youtubeId: 'ScMzIvxBSi4' },
    { id: '4', title: 'Video 4', description: 'Dördüncü video açıklaması', youtubeId: 'VbfpW0pbvaU' }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false); // hover veya click

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => setShow(entries[0].isIntersecting),
        { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const photoRadius = 80; // fotoğraf yarıçapı
  const positions = [
    { x: -450, y: -300 },
    { x: 450, y: -300 },
    { x: -450, y: 300 },
    { x: 450, y: 300 }
  ];

  const handlePhotoClick = () => setIsActive(prev => !prev);

  return (
      <section
          id="videos"
          ref={sectionRef}
          className="min-h-screen flex flex-col items-center justify-center bg-background relative scroll-mt-20"
      >
        <h1 className="text-3xl font-bold text-primary mb-12">Videos</h1>

        <div className="relative w-40 h-40">
          {/* Animasyonlu halo */}
          <div
              className={`
            absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
            opacity-0 transition-opacity duration-500
            ${isActive && show ? 'opacity-70 animate-pulse-slow' : ''}
          `}
          />

          {/* PNG */}
          <img
              src="/static.png"
              alt="Center"
              className="w-full h-full rounded-full shadow-lg z-10 cursor-pointer transform transition-transform duration-500"
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
              onClick={handlePhotoClick}
          />
        </div>

        {/* Videolar ve connectorler */}
        {videos.map((video, i) => {
          const pos = positions[i];
          const dx = pos.x;
          const dy = pos.y;
          const length = Math.sqrt(dx * dx + dy * dy) - photoRadius; // fotoğraf kenarından başlat
          const angle = Math.atan2(dy, dx) + 'rad';
          const startX = dx > 0 ? photoRadius : -photoRadius;
          const startY = dy > 0 ? photoRadius : -photoRadius;

          const visible = show && isActive;

          return (
              <React.Fragment key={video.id}>
                {/* Connector */}
                <div
                    className="absolute bg-primary rounded-full transition-all duration-1000"
                    style={{
                      width: length,
                      height: 6,
                      top: '50%',
                      left: '50%',
                      transformOrigin: 'left center',
                      transform: visible
                          ? `translate(${startX}px, ${startY}px) rotate(${angle}) scaleX(1)`
                          : `translate(${startX}px, ${startY}px) rotate(${angle}) scaleX(0)`,
                      opacity: visible ? 1 : 0
                    }}
                />

                {/* Video ve açıklama */}
                <div
                    className="absolute flex bg-card-glass rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ease-out"
                    style={{
                      top: '50%',
                      left: '50%',
                      width: 400,
                      height: 250,
                      transform: visible
                          ? `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(1)`
                          : 'translate(0,0) translate(-50%, -50%) scale(0.1)',
                      opacity: visible ? 1 : 0
                    }}
                >
                  <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allowFullScreen
                      className="w-2/3 h-full rounded-xl"
                  />
                  <div className="w-1/3 p-4 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-2">{video.title}</h3>
                    <p className="text-card-foreground text-sm">{video.description}</p>
                  </div>
                </div>
              </React.Fragment>
          );
        })}
      </section>
  );
};