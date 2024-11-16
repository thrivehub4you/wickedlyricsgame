import React from 'react';
import { Crown, CheckCircle, XCircle } from 'lucide-react';

interface PlayerScoreCardProps {
  player: {
    name: string;
    score: number;
    streak: number;
    avatar: string;
    isReady: boolean;
    correctRate: number;
  };
  onReady: () => void;
}

export function PlayerScoreCard({ player, onReady }: PlayerScoreCardProps) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={player.avatar}
            alt={player.name}
            className="w-12 h-12 rounded-full"
          />
          {player.streak >= 3 && (
            <Crown className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{player.name}</h3>
            <button
              onClick={onReady}
              className="focus:outline-none"
            >
              {player.isReady ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="mt-1 space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">得分: {player.score}</span>
              {player.streak > 0 && (
                <span className="text-orange-600">
                  连击: {player.streak}🔥
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-indigo-600 h-1.5 rounded-full"
                style={{ width: `${player.correctRate * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}