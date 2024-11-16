import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserPlus, Shuffle, Crown, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InviteFriendsModal } from '../components/game/InviteFriendsModal';
import { RoomCard } from '../components/game/RoomCard';
import { Toaster, toast } from 'sonner';

interface Room {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  status: 'waiting' | 'playing';
  difficulty: 'easy' | 'medium' | 'hard';
}

const MOCK_ROOMS: Room[] = [
  {
    id: 'room1',
    name: 'Pop Music Masters',
    players: 3,
    maxPlayers: 4,
    status: 'waiting',
    difficulty: 'medium'
  },
  {
    id: 'room2',
    name: 'Rock Legends',
    players: 2,
    maxPlayers: 4,
    status: 'waiting',
    difficulty: 'hard'
  }
];

export function MultiplayerLobbyPage() {
  const navigate = useNavigate();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleQuickMatch = () => {
    setIsSearching(true);
    toast.loading('Finding players...');
    
    // Simulate matchmaking delay
    setTimeout(() => {
      setIsSearching(false);
      toast.dismiss();
      navigate('/game/multiplayer/random');
    }, 2000);
  };

  const handleCreatePrivateRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    navigate(`/game/multiplayer/${roomId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Toaster />
      
      <div className="text-center mb-12">
        <Users className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Multiplayer Challenge</h1>
        <p className="text-xl text-gray-600">
          Challenge players worldwide or invite friends for a musical showdown
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
          <Shuffle className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Quick Match</h2>
          <p className="mb-6 text-indigo-100">
            Join a random game instantly and compete with players worldwide
          </p>
          <Button
            onClick={handleQuickMatch}
            disabled={isSearching}
            className="bg-white text-indigo-600 hover:bg-indigo-50 w-full"
          >
            {isSearching ? 'Finding Players...' : 'Find Match'}
          </Button>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-8 text-white">
          <UserPlus className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Play with Friends</h2>
          <p className="mb-6 text-rose-100">
            Create a private room and invite your friends to join
          </p>
          <div className="space-y-3">
            <Button
              onClick={handleCreatePrivateRoom}
              className="bg-white text-rose-600 hover:bg-rose-50 w-full"
            >
              Create Private Room
            </Button>
            <Button
              onClick={() => setShowInviteModal(true)}
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Invite Friends
            </Button>
          </div>
        </div>
      </div>

      {/* Available Rooms */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Available Rooms</h2>
          <Crown className="h-6 w-6 text-yellow-500" />
        </div>

        <div className="grid gap-6">
          {MOCK_ROOMS.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onJoin={() => navigate(`/game/multiplayer/${room.id}`)}
            />
          ))}
        </div>
      </div>

      <InviteFriendsModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        gameId="custom-room-id"
      />
    </div>
  );
}