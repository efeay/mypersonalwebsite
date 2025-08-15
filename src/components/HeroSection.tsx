import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { usePhotoAnimation } from '@/hooks/usePhotoAnimation';
import { useCardAnimation } from '@/hooks/useCardAnimation';
import { Typewriter } from '@/components/Typewriter';

const keywords = [
    "Cyber Security",
    "Ethical Hacking",
    "Embedded Systems",
    "IoT Development",
    "Penetration Testing",
    "React Developer",
    "PCB Design",
    "Signal Processing",
    "Bug Hunting",
    "TypeScript Enthusiast",
    "Automation Systems",
    "Network Analysis",
    "Open Source Contributor",
    "Problem Solver",
    "Tech Explorer"
];

export const HeroSection: React.FC = () => {
    const { isAnimated, showText, photoRef } = usePhotoAnimation({ delay: 500 });
    const { showCards } = useCardAnimation({ delay: 2500 });
    const [showKeywords, setShowKeywords] = React.useState(false);

    const { displayText } = useTypewriter({
        text: 'Hello! I Am Efe Ay',
        speed: 120,
        delay: showText ? 0 : 999999
    });

    const interests = [
        'Space Technologies',
        'Artificial Intelligence',
        'IoT',
        'Badminton',
        'Alternative Rock'
    ];

    return (
        <section
            id="about"
            className="min-h-screen bg-hero-gradient pt-20 px-6 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
        >
            {/* Animated photo */}
            <img
                ref={photoRef}
                src="/profile.jpg"
                alt="Efe Ay"
                className={`
          fixed z-50 border-primary rounded-full transform transition-[top,left,width,height,transform] ease-in-out
          ${isAnimated
                    ? 'top-[140px] left-4 w-[60px] h-[60px] border-[3px] shadow-photo-glow-final translate-x-0 translate-y-0'
                    : 'top-1/2 left-1/2 w-[200px] h-[200px] border-[5px] shadow-photo-glow -translate-x-1/2 -translate-y-1/2'
                }
        `}
                style={{
                    transitionDuration: '4000ms',
                    transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
                    willChange: 'transform, top, left, width, height'
                }}
            />

            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl md:text-6xl font-bold text-center text-primary mb-2 min-h-[4rem] md:min-h-[6rem] transition-all duration-300 ${isAnimated ? 'text-left ml-20' : ''}`}>
                    {showText && displayText}
                    {showText && <span className="animate-pulse text-primary">|</span>}
                </h1>

                {/* Keyword Typewriter */}
                <div className={`text-center mb-12 ${isAnimated ? 'text-left ml-20' : ''}`}>
                    {showText && <Typewriter words={keywords} />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Me Card */}
                    <div
                        className={`
              bg-card-glass backdrop-blur-glass rounded-2xl p-8 shadow-glass border border-border/50
              transition-all duration-700 ease-out
              ${showCards
                            ? 'opacity-100 translate-y-0 animate-slide-in-left'
                            : 'opacity-0 translate-y-8'
                        }
            `}
                        style={{ animationDelay: showCards ? '0ms' : '' }}
                    >
                        <h2 className="text-2xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-card-foreground text-lg leading-relaxed">
                            I am an Electrical and Electronics Engineering student. I am interested in technology, space, and literature.
                            I focus on improving myself in the fields of artificial intelligence and space technologies.
                            On this platform, I share my thoughts and what I have learned.
                        </p>
                    </div>

                    {/* Interests Card */}
                    <div
                        className={`
              bg-card-glass backdrop-blur-glass rounded-2xl p-8 shadow-glass border border-border/50
              transition-all duration-700 ease-out
              ${showCards
                            ? 'opacity-100 translate-y-0 animate-slide-in-right'
                            : 'opacity-0 translate-y-8'
                        }
            `}
                        style={{ animationDelay: showCards ? '200ms' : '' }}
                    >
                        <h2 className="text-2xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Interests
                        </h2>
                        <ul className="space-y-3">
                            {interests.map((interest, index) => (
                                <li key={index} className="flex items-center text-lg">
                                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 animate-pulse"></div>
                                    <span className="text-card-foreground">{interest}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};