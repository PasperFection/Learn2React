import { Achievement, GameState } from '../types/game';
import { Award, Zap, Target, Brain, Flame, Star } from 'lucide-react';

export const achievements: Achievement[] = [
  {
    id: 'first-solution',
    title: 'First Steps',
    description: 'Complete your first challenge',
    icon: Award.name,
    unlocked: false,
    requirement: (state: GameState) => state.challenges.some(c => c.completed)
  },
  {
    id: 'perfect-streak',
    title: 'Perfect Streak',
    description: 'Complete 5 challenges without using hints',
    icon: Flame.name, // Changed from Fire to Flame
    unlocked: false,
    requirement: (state: GameState) => state.streak >= 5 && state.hintsUsed === 0
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Complete a challenge in under 30 seconds',
    icon: Zap.name,
    unlocked: false,
    requirement: (state: GameState) => state.timeSpent < 30
  },
  {
    id: 'master-mind',
    title: 'Master Mind',
    description: 'Complete all beginner challenges',
    icon: Brain.name,
    unlocked: false,
    requirement: (state: GameState) => 
      state.challenges
        .filter(c => c.difficulty === 'beginner')
        .every(c => c.completed)
  },
  {
    id: 'sharpshooter',
    title: 'Sharpshooter',
    description: 'Complete 3 challenges in a row without mistakes',
    icon: Target.name,
    unlocked: false,
    requirement: (state: GameState) => state.streak >= 3
  },
  {
    id: 'superstar',
    title: 'Superstar',
    description: 'Reach 1000 points',
    icon: Star.name,
    unlocked: false,
    requirement: (state: GameState) => state.score >= 1000
  }
];