import React from 'react';
import * as LucideIcons from 'lucide-react';

interface AchievementIconProps {
  iconName: string;
  className?: string;
}

export function AchievementIcon({ iconName, className = '' }: AchievementIconProps) {
  const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
  return Icon ? <Icon className={className} /> : null;
}