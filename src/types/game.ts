export interface Challenge {
  id: number;
  title: string;
  description: string;
  code: string;
  solution: string;
  hint: string;
  completed: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'basics' | 'state' | 'lifecycle' | 'events' | 'props' | 'patterns';
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requirement: (gameState: GameState) => boolean;
}

export interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  challenges: Challenge[];
  gameMode: GameMode;
  achievements: Achievement[];
  streak: number;
  hintsUsed: number;
  timeSpent: number;
  selectedCategory?: string;
}

export type GameMode = 'story' | 'practice' | 'timeAttack' | 'survival';