import React from 'react';
import { AchievementIcon } from './AchievementIcon';

interface AchievementPopupProps {
  title: string;
  description: string;
  icon: string;
  onClose: () => void;
}

export function AchievementPopup({ title, description, icon, onClose }: AchievementPopupProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-slide-up">
      <div className="flex items-center">
        <AchievementIcon iconName={icon} className="w-8 h-8 text-yellow-500 mr-3" />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}