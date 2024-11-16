import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

interface GameHintsProps {
  hints: {
    artist?: string;
    year?: number;
    genre?: string;
    album?: string;
  };
  onUseHint: () => void;
  hintsRemaining: number;
}

export function GameHints({ hints, onUseHint, hintsRemaining }: GameHintsProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900 flex items-center">
          <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
          {t('game.hint')}
        </h3>
        <span className="text-sm text-gray-600">
          {hintsRemaining} hints remaining
        </span>
      </div>
      
      <div className="space-y-2">
        {hints.artist && (
          <p className="text-gray-700">{t('game.hints.artist', { artist: hints.artist })}</p>
        )}
        {hints.year && (
          <p className="text-gray-700">{t('game.hints.year', { year: hints.year })}</p>
        )}
        {hints.genre && (
          <p className="text-gray-700">{t('game.hints.genre', { genre: hints.genre })}</p>
        )}
        {hints.album && (
          <p className="text-gray-700">{t('game.hints.album', { album: hints.album })}</p>
        )}
      </div>

      <Button
        onClick={onUseHint}
        disabled={hintsRemaining === 0}
        variant="outline"
        className="mt-4 w-full"
      >
        {hintsRemaining > 0 ? t('game.hint') : 'No hints remaining'}
      </Button>
    </div>
  );
}