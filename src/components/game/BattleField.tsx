import React from 'react';
import { Shield, Zap } from 'lucide-react';

interface BattleFieldProps {
  players: Array<{
    id: string;
    name: string;
    status: string;
    powerups: string[];
  }>;
  battleEvents: string[];
  currentRound: number;
  totalRounds: number;
}

export function BattleField({ players, battleEvents, currentRound, totalRounds }: BattleFieldProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg p-6 text-white">
      {/* 回合进度 */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>回合 {currentRound}/{totalRounds}</span>
          <span>实时对战中</span>
        </div>
        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentRound / totalRounds) * 100}%` }}
          />
        </div>
      </div>

      {/* 玩家状态网格 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {players.map(player => (
          <div 
            key={player.id}
            className="bg-white bg-opacity-10 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{player.name}</span>
              <div className="flex space-x-1">
                {player.powerups.includes('shield') && (
                  <Shield className="h-4 w-4 text-blue-300" />
                )}
                {player.status === 'answering' && (
                  <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
                )}
              </div>
            </div>
            <div className="text-sm opacity-75">
              {player.status === 'answering' ? '正在答题...' : '等待中...'}
            </div>
          </div>
        ))}
      </div>

      {/* 战斗事件日志 */}
      <div className="bg-white bg-opacity-10 rounded-lg p-4">
        <h4 className="font-semibold mb-2">对战动态</h4>
        <div className="space-y-2">
          {battleEvents.map((event, index) => (
            <div 
              key={index}
              className="text-sm animate-fade-in"
            >
              {event}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}