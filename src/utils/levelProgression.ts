import { GameState, Challenge } from '../types/game';

export function getNextChallenge(state: GameState): Challenge | null {
  const categoryChallenges = state.challenges.filter(
    c => c.category === state.selectedCategory && !c.completed
  );
  
  return categoryChallenges[0] || null;
}

export function calculateLevelProgress(state: GameState): number {
  const totalChallenges = state.challenges.filter(
    c => c.category === state.selectedCategory
  ).length;
  
  const completedChallenges = state.challenges.filter(
    c => c.category === state.selectedCategory && c.completed
  ).length;
  
  return (completedChallenges / totalChallenges) * 100;
}