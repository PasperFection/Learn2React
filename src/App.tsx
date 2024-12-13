import React, { useState, useEffect } from 'react';
import { GameProgress } from './components/GameProgress';
import { CodeEditor } from './components/CodeEditor';
import { GameModeSelector } from './components/GameModeSelector';
import { CategorySelector } from './components/CategorySelector';
import { AchievementPopup } from './components/AchievementPopup';
import { useGameTimer } from './hooks/useGameTimer';
import { useGameState } from './hooks/useGameState';
import { GameState, GameMode, Achievement } from './types/game';

export function App() {
  const {
    gameState,
    setGameMode,
    setCategory,
    handleChallengeComplete,
    updateAchievements
  } = useGameState();

  const { time, formatTime } = useGameTimer(gameState.gameMode !== undefined);
  const [recentAchievement, setRecentAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const newAchievements = updateAchievements();
    const latestAchievement = newAchievements.find(a => a.unlocked && !gameState.achievements.find(ga => ga.id === a.id)?.unlocked);
    if (latestAchievement) {
      setRecentAchievement(latestAchievement);
      setTimeout(() => setRecentAchievement(null), 3000);
    }
  }, [gameState.score, gameState.streak]);

  if (!gameState.gameMode) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Choose Your Game Mode</h1>
        <GameModeSelector onSelect={setGameMode} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GameProgress
        score={gameState.score}
        lives={gameState.lives}
        currentLevel={gameState.currentLevel}
      />

      <CategorySelector
        onSelect={setCategory}
        selectedCategory={gameState.selectedCategory}
      />

      {gameState.selectedCategory && (
        <div className="max-w-4xl mx-auto">
          <CodeEditor
            code={gameState.challenges[gameState.currentLevel - 1]?.code || ''}
            solution={gameState.challenges[gameState.currentLevel - 1]?.solution || ''}
            onSubmit={handleChallengeComplete}
          />
        </div>
      )}

      {recentAchievement && (
        <AchievementPopup
          title={recentAchievement.title}
          description={recentAchievement.description}
          icon={recentAchievement.icon}
          onClose={() => setRecentAchievement(null)}
        />
      )}
    </div>
  );
}