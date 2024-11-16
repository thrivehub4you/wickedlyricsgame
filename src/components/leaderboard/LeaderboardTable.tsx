import React from 'react';
import { Trophy, Medal, Crown, Star } from 'lucide-react';

const MOCK_DATA = [
  {
    rank: 1,
    username: "LyricsMaster",
    score: 2500,
    avatar: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=150&h=150&fit=crop&crop=faces",
    badge: "👑 Champion"
  },
  {
    rank: 2,
    username: "SongWhisperer",
    score: 2350,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    badge: "⭐ Rising Star"
  },
  {
    rank: 3,
    username: "MusicGenius",
    score: 2200,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    badge: "🎵 Virtuoso"
  }
];

const getMedalColor = (rank: number) => {
  switch (rank) {
    case 1:
      return 'text-yellow-400';
    case 2:
      return 'text-gray-400';
    case 3:
      return 'text-amber-600';
    default:
      return 'text-gray-400';
  }
};

const getBgGradient = (rank: number) => {
  switch (rank) {
    case 1:
      return 'bg-gradient-to-r from-yellow-50 to-amber-50';
    case 2:
      return 'bg-gradient-to-r from-gray-50 to-slate-50';
    case 3:
      return 'bg-gradient-to-r from-orange-50 to-amber-50';
    default:
      return 'bg-gray-50';
  }
};

export function LeaderboardTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Global Leaderboard</h2>
        </div>
        <div className="text-sm text-gray-500">Updated live</div>
      </div>

      <div className="space-y-6">
        {MOCK_DATA.map((entry) => (
          <div
            key={entry.rank}
            className={`${getBgGradient(entry.rank)} rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] transform`}
          >
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${entry.rank === 1 ? 'bg-yellow-100' : 'bg-white'} shadow-md`}>
                {entry.rank === 1 ? (
                  <Crown className="h-6 w-6 text-yellow-500" />
                ) : (
                  <div className="text-2xl font-bold text-gray-700">{entry.rank}</div>
                )}
              </div>

              <div className="relative">
                <img
                  src={entry.avatar}
                  alt={entry.username}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <Medal className={`h-6 w-6 ${getMedalColor(entry.rank)} absolute -top-2 -right-2`} />
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-gray-900">{entry.username}</h3>
                  <span className="px-2 py-1 rounded-full text-sm font-medium bg-white shadow-sm">
                    {entry.badge}
                  </span>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-lg font-semibold text-gray-700">
                    {entry.score.toLocaleString()} points
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}