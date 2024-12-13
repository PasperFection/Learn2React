import React from 'react';
import { Heart, Trophy } from 'lucide-react';

interface GameProgressProps {
  score: number;
  lives: number;
  currentLevel: number;
}

export function GameProgress({ score, lives, currentLevel }: GameProgressProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center">
        <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
        <span className="text-lg font-semibold">Score: {score}</span>
      </div>
      <div className="text-lg font-semibold">Level {currentLevel}</div>
      <div className="flex items-center">
        {Array.from({ length: lives }).map((_, i) => (
          <Heart key={i} className="w-6 h-6 text-red-500 ml-1" fill="currentColor" />
        ))}
      </div>
    </div>
  );
}