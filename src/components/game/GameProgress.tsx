import React from 'react';
import { Trophy, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GameProgressProps {
  currentLevel: number;
  totalLevels: number;
  score: number;
  streak: number;
  failedAttempts: number;
}

export function GameProgress({ currentLevel, totalLevels, score, streak, failedAttempts }: GameProgressProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 grid grid-cols-4 gap-4">
      <div className="text-center">
        <div className="text-sm text-gray-600">{t('common.round')}</div>
        <div className="text-xl font-bold text-indigo-600">{currentLevel}/{totalLevels}</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">{t('common.score')}</div>
        <div className="text-xl font-bold text-indigo-600">{score}</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">{t('common.streak')}</div>
        <div className="text-xl font-bold text-indigo-600">{streak}🔥</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">{t('common.failedAttempts')}</div>
        <div className="text-xl font-bold text-red-600">{failedAttempts}/5</div>
      </div>
    </div>
  );
}