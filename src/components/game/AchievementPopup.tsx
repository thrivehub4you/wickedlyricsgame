import React from 'react';
import { Award } from 'lucide-react';

interface AchievementPopupProps {
  title: string;
  description: string;
  isVisible: boolean;
}

export function AchievementPopup({ title, description, isVisible }: AchievementPopupProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm animate-slide-up">
      <div className="flex items-start space-x-3">
        <Award className="h-6 w-6 text-yellow-500 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}