import { basicsChallenges } from './basics';
import { stateChallenges } from './state';
import { lifecycleChallenges } from './lifecycle';
import { eventsChallenges } from './events';
import { Challenge } from '../../types/game';

export const challenges: Challenge[] = [
  ...basicsChallenges,
  ...stateChallenges,
  ...lifecycleChallenges,
  ...eventsChallenges
];