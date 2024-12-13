import { useState, useCallback } from 'react';
import { GameState, GameMode, Challenge } from '../types/game';
import { challenges } from '../data/challenges';
import { achievements } from '../data/achievements';
import { calculateScore, checkAchievements } from '../utils/gameLogic';

const initialState: GameState = {
  currentLevel: 1,
  score: 0,
  lives: 3,
  challenges: challenges,
  gameMode: undefined,
  achievements: achievements,
  streak: 0,
  hintsUsed: 0,
  timeSpent: 0,
  selectedCategory: undefined
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const setGameMode = useCallback((mode: GameMode) => {
    setGameState(prev => ({ ...prev, gameMode: mode }));
  }, []);

  const setCategory = useCallback((category: string) => {
    setGameState(prev => ({ ...prev, selectedCategory: category }));
  }, []);

  const handleChallengeComplete = useCallback((isCorrect: boolean) => {
    setGameState(prev => {
      if (!isCorrect) {
        return {
          ...prev,
          lives: prev.lives - 1,
          streak: 0
        };
      }

      const currentChallenge = prev.challenges[prev.currentLevel - 1];
      const newScore = calculateScore(prev, currentChallenge, prev.timeSpent);

      return {
        ...prev,
        score: prev.score + newScore,
        currentLevel: prev.currentLevel + 1,
        streak: prev.streak + 1,
        challenges: prev.challenges.map(c => 
          c.id === currentChallenge.id ? { ...c, completed: true } : c
        )
      };
    });
  }, []);

  const updateAchievements = useCallback(() => {
    const newAchievements = checkAchievements(gameState);
    setGameState(prev => ({
      ...prev,
      achievements: newAchievements
    }));
    return newAchievements;
  }, [gameState]);

  return {
    gameState,
    setGameMode,
    setCategory,
    handleChallengeComplete,
    updateAchievements
  };
}