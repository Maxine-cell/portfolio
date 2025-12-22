import { useEffect, useState } from 'react';
// import "./Theme.css"
// import "./Twinkle.css"
interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  moveX: number;
  moveY: number;
  moveDuration: number;
}

export default function App() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate lots of stars with random properties
    const generateStars = () => {
      const starCount = 200;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1, // 1-4px
          duration: Math.random() * 3 + 2, // 2-5s animation
          delay: Math.random() * 5, // 0-5s delay
          opacity: Math.random() * 0.7 + 0.3, // 0.3-1 opacity
          moveX: (Math.random() - 0.5) * 50, // Move -25 to 25 pixels
          moveY: (Math.random() - 0.5) * 50, // Move -25 to 25 pixels
          moveDuration: Math.random() * 20 + 15, // 15-35s slow movement
        });
      }
      
      return newStars;
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Stars with sparkle and slow movement */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
            animation: `twinkle ${star.duration}s ease-in-out infinite ${star.delay}s, float ${star.moveDuration}s ease-in-out infinite`,
            '--move-x': `${star.moveX}px`,
            '--move-y': `${star.moveY}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}