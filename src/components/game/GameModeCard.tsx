import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

interface GameModeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function GameModeCard({ title, description, icon: Icon, onClick }: GameModeCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
      <div className="flex flex-col items-center text-center h-full">
        <div className="bg-indigo-50 p-4 rounded-full mb-6">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 flex-grow">{description}</p>
        <Button onClick={onClick} className="w-full">
          {t('common.start')}
        </Button>
      </div>
    </div>
  );
}