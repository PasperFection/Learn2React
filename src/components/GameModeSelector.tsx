import React from 'react';
import { BookOpen, Clock, Zap, Heart } from 'lucide-react';
import { GameMode } from '../types/game';

interface GameModeSelectorProps {
  onSelect: (mode: GameMode) => void;
}

export function GameModeSelector({ onSelect }: GameModeSelectorProps) {
  const modes: Array<{ id: GameMode; title: string; description: string; icon: React.ReactNode }> = [
    {
      id: 'story',
      title: 'Story Mode',
      description: 'Learn step by step with guided challenges',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 'timeAttack',
      title: 'Time Attack',
      description: 'Solve challenges against the clock',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 'survival',
      title: 'Survival Mode',
      description: 'Keep going until you run out of lives',
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 'practice',
      title: 'Practice Mode',
      description: 'Practice specific concepts without pressure',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {modes.map(mode => (
        <button
          key={mode.id}
          onClick={() => onSelect(mode.id)}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-3">
            <div className="text-blue-500 mr-3">{mode.icon}</div>
            <h3 className="text-xl font-bold">{mode.title}</h3>
          </div>
          <p className="text-gray-600">{mode.description}</p>
        </button>
      ))}
    </div>
  );
}