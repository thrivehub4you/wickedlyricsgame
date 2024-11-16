import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Users, Timer } from 'lucide-react';
import { GameModeCard } from '../components/game/GameModeCard';

export function GameModesPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleModeSelect = (mode: string) => {
    if (mode === 'multiplayer') {
      navigate('/multiplayer');
    } else {
      navigate(`/game/${mode}`);
    }
  };

  const gameModes = [
    {
      id: 'single',
      icon: User,
      title: t('modes.single.title'),
      description: t('modes.single.description'),
      onClick: () => handleModeSelect('single')
    },
    {
      id: 'multiplayer',
      icon: Users,
      title: t('modes.multiplayer.title'),
      description: t('modes.multiplayer.description'),
      onClick: () => handleModeSelect('multiplayer')
    },
    {
      id: 'timed',
      icon: Timer,
      title: t('modes.timed.title'),
      description: t('modes.timed.description'),
      onClick: () => handleModeSelect('timed')
    }
  ];

  const basicRules = [
    'Choose the correct artist from three options',
    'Answer within 10 seconds',
    'Faster answers earn more points',
    'Game ends after 5 consecutive wrong answers'
  ];

  const scoringRules = [
    'Base score: 100 points',
    'Time bonus: remaining seconds × 10',
    'Streak bonus: additional points for consecutive correct answers'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('modes.title')}</h1>
        <p className="text-xl text-gray-600">{t('modes.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gameModes.map((mode) => (
          <GameModeCard
            key={mode.id}
            title={mode.title}
            description={mode.description}
            icon={mode.icon}
            onClick={mode.onClick}
          />
        ))}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('game.rules')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('rules.basic.title')}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {basicRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('rules.scoring.title')}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {scoringRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}