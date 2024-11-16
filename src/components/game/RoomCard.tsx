import React from 'react';
import { Users, Crown, Shield } from 'lucide-react';
import { Button } from '../ui/Button';

interface RoomProps {
  room: {
    id: string;
    name: string;
    players: number;
    maxPlayers: number;
    status: 'waiting' | 'playing';
    difficulty: 'easy' | 'medium' | 'hard';
  };
  onJoin: () => void;
}

const difficultyColors = {
  easy: 'text-green-500',
  medium: 'text-yellow-500',
  hard: 'text-red-500'
};

const difficultyIcons = {
  easy: '🌟',
  medium: '🔥',
  hard: '💪'
};

export function RoomCard({ room, onJoin }: RoomProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Shield className={`h-5 w-5 ${difficultyColors[room.difficulty]}`} />
          <h3 className="text-xl font-semibold text-gray-900">
            {room.name} {difficultyIcons[room.difficulty]}
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="h-5 w-5" />
          <span>{room.players}/{room.maxPlayers}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            room.status === 'waiting' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {room.status === 'waiting' ? 'Waiting for players' : 'In progress'}
          </span>
        </div>
        <Button
          onClick={onJoin}
          disabled={room.status === 'playing' || room.players >= room.maxPlayers}
          variant={room.status === 'waiting' ? 'primary' : 'outline'}
        >
          {room.status === 'waiting' ? 'Join Room' : 'Spectate'}
        </Button>
      </div>
    </div>
  );
}