import { useState, useEffect } from 'react';

export function useGameTimer(isActive: boolean) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return { time, formatTime };
}