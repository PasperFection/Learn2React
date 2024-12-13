export interface Challenge {
  id: number;
  title: string;
  description: string;
  code: string;
  solution: string;
  hint: string;
  completed: boolean;
}

export interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  challenges: Challenge[];
}