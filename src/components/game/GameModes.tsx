import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Users, Timer } from 'lucide-react';
import { GameModeCard } from './GameModeCard';

export function GameModes() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const gameModes = [
    {
      id: 'single',
      icon: User,
      title: t('modes.single.title'),
      description: t('modes.single.description')
    },
    {
      id: 'multiplayer',
      icon: Users,
      title: t('modes.multiplayer.title'),
      description: t('modes.multiplayer.description')
    },
    {
      id: 'timed',
      icon: Timer,
      title: t('modes.timed.title'),
      description: t('modes.timed.description')
    }
  ];

  const handleModeSelect = (mode: string) => {
    if (mode === 'multiplayer') {
      navigate('/multiplayer');
    } else {
      navigate(`/game/${mode}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('modes.title')}
        </h2>
        <p className="text-xl text-gray-600">
          {t('modes.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gameModes.map((mode) => (
          <GameModeCard
            key={mode.id}
            title={mode.title}
            description={mode.description}
            icon={mode.icon}
            onClick={() => handleModeSelect(mode.id)}
          />
        ))}
      </div>
    </div>
  );
}