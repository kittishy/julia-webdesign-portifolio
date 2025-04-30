
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import InteractiveElement from './InteractiveElement';

interface Character {
  id: number;
  name: string;
  title: string;
  image: string;
  element?: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "Character 1",
    title: "The Creative",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=500&auto=format&fit=crop",
    element: "Hydro"
  },
  {
    id: 2,
    name: "Character 2",
    title: "The Thinker",
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=500&auto=format&fit=crop",
    element: "Anemo"
  },
  {
    id: 3,
    name: "Character 3",
    title: "The Designer",
    image: "https://images.unsplash.com/photo-1615767864457-65577lvbusy4?q=80&w=500&auto=format&fit=crop",
    element: "Pyro"
  }
];

interface CharacterCarouselProps {
  className?: string;
}

const CharacterCarousel = ({ className }: CharacterCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextCharacter = () => {
    setActiveIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setActiveIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const selectCharacter = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-rotate characters
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextCharacter();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Pause auto-rotation when user interacts
  const pauseRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Resume auto-rotation after interaction
  const resumeRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextCharacter();
    }, 5000);
  };

  return (
    <div 
      className={cn("relative w-full flex justify-center items-center py-8", className)}
      onMouseEnter={pauseRotation}
      onMouseLeave={resumeRotation}
    >
      <div className="relative w-full max-w-5xl aspect-video">
        {/* Character images */}
        {characters.map((character, idx) => (
          <div
            key={character.id}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              idx === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
            )}
          >
            <div className="w-full h-full relative">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl" />
              
              {/* Character info */}
              <div className="absolute bottom-8 left-8 text-white z-20 max-w-md">
                <h3 className="text-3xl font-montserrat font-semibold mb-1">{character.name}</h3>
                <p className="text-lg text-white/80">{character.title}</p>
                {character.element && (
                  <span className="inline-block mt-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {character.element}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevCharacter}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/60 transition-colors flex items-center justify-center"
          aria-label="Previous character"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextCharacter}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/60 transition-colors flex items-center justify-center"
          aria-label="Next character"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {characters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectCharacter(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                idx === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to character ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCarousel;
