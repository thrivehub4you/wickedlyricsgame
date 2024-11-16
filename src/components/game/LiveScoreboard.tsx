import React from 'react';
import { Trophy } from 'lucide-react';

interface LiveScoreboardProps {
  players: Array<{
    id: string;
    name: string;
    score: number;
    streak: number;
  }>;
}

export function LiveScoreboard({ players }: LiveScoreboardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Trophy className="h-6 w-6 mr-2" />
        实时排行榜
      </h2>
      <div className="space-y-4">
        {sortedPlayers.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
          >
            <div className="flex items-center space-x-3">
              <span className="font-bold text-lg">{index + 1}</span>
              <span>{player.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{player.score} 分</span>
              {player.streak > 0 && (
                <span className="text-yellow-300">
                  {player.streak}🔥
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}