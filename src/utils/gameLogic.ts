import { GameState, Challenge, Achievement } from '../types/game';

export function calculateScore(state: GameState, challenge: Challenge, timeSpent: number): number {
  let score = challenge.points;
  
  // Time bonus
  if (timeSpent < 30) score *= 1.5;
  if (timeSpent < 60) score *= 1.2;
  
  // Streak bonus
  if (state.streak > 3) score *= 1.3;
  
  // No hints bonus
  if (state.hintsUsed === 0) score *= 1.2;
  
  return Math.round(score);
}

export function checkAchievements(state: GameState): Achievement[] {
  return state.achievements.map(achievement => ({
    ...achievement,
    unlocked: achievement.requirement(state)
  }));
}

export function getDifficultyMultiplier(difficulty: Challenge['difficulty']): number {
  switch (difficulty) {
    case 'beginner': return 1;
    case 'intermediate': return 1.5;
    case 'advanced': return 2;
    default: return 1;
  }
}