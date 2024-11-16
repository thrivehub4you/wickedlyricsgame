import React, { useState, useEffect } from 'react';
import { Share2, Users, Crown, Timer, Trophy, Zap, Shield, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PlayerScoreCard } from '../components/game/PlayerScoreCard';
import { InviteFriendsModal } from '../components/game/InviteFriendsModal';
import { LiveScoreboard } from '../components/game/LiveScoreboard';
import { RoomChat } from '../components/game/RoomChat';
import { PowerupShop } from '../components/game/PowerupShop';
import { BattleField } from '../components/game/BattleField';
import { useNavigate } from 'react-router-dom';

interface PowerUp {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: any;
}

const powerUps: PowerUp[] = [
  {
    id: 'freeze',
    name: '冻结时间',
    description: '暂停对手的计时器5秒',
    cost: 100,
    icon: Timer
  },
  {
    id: 'shield',
    name: '防护罩',
    description: '抵挡一次对手的干扰',
    cost: 150,
    icon: Shield
  },
  {
    id: 'boost',
    name: '双倍得分',
    description: '下一题得分翻倍',
    cost: 200,
    icon: Rocket
  }
];

export function MultiplayerGamePage() {
  const navigate = useNavigate();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [roomCode, setRoomCode] = useState('WXYZ123');
  const [players, setPlayers] = useState([
    {
      id: '1',
      name: '我',
      score: 0,
      streak: 0,
      avatar: 'https://source.unsplash.com/100x100/?avatar,1',
      isReady: true,
      correctRate: 0,
      powerups: [],
      status: 'active'
    },
    {
      id: '2',
      name: 'Player 2',
      score: 120,
      streak: 2,
      avatar: 'https://source.unsplash.com/100x100/?avatar,2',
      isReady: false,
      correctRate: 0.6,
      powerups: ['shield'],
      status: 'answering'
    }
  ]);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showChat, setShowChat] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds] = useState(20);
  const [showPowerupShop, setShowPowerupShop] = useState(false);
  const [battleEvents, setBattleEvents] = useState<string[]>([]);

  // 模拟实时对战事件
  useEffect(() => {
    if (gameStarted) {
      const events = [
        "Player 2 使用了冻结时间！",
        "你的防护罩抵挡了干扰！",
        "Player 3 正在连击中！",
        "Player 4 使用了双倍得分！"
      ];
      
      const interval = setInterval(() => {
        const newEvent = events[Math.floor(Math.random() * events.length)];
        setBattleEvents(prev => [...prev, newEvent].slice(-5));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const handleStartGame = () => {
    if (players.length < 2) {
      setShowInviteModal(true);
      return;
    }
    setGameStarted(true);
  };

  const handlePowerupUse = (powerupId: string, targetPlayerId: string) => {
    // 实现道具使用逻辑
    setBattleEvents(prev => [...prev, `你对 ${players.find(p => p.id === targetPlayerId)?.name} 使用了${powerUps.find(p => p.id === powerupId)?.name}！`]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 主游戏区域 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 战场状态 */}
          <BattleField
            players={players}
            battleEvents={battleEvents}
            currentRound={currentRound}
            totalRounds={totalRounds}
          />

          {/* 玩家状态和准备按钮 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">多人对战房间</h1>
                <div className="bg-indigo-100 px-3 py-1 rounded-full">
                  <span className="text-indigo-600 font-medium">房间码: {roomCode}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setShowPowerupShop(true)}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Rocket className="h-4 w-4" />
                  <span>道具商店</span>
                </Button>
                <Button
                  onClick={() => setShowInviteModal(true)}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>邀请好友</span>
                </Button>
              </div>
            </div>

            {/* 玩家卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {players.map(player => (
                <PlayerScoreCard 
                  key={player.id} 
                  player={player}
                  onPowerupUse={(powerupId) => handlePowerupUse(powerupId, player.id)}
                  showPowerups={gameStarted}
                />
              ))}
            </div>

            {/* 游戏控制按钮 */}
            <div className="flex space-x-4">
              <Button
                onClick={handleStartGame}
                className="flex-1 py-4 text-lg"
                disabled={gameStarted || players.some(p => !p.isReady)}
              >
                {gameStarted ? `游戏将在 ${countdown} 秒后开始...` : '开始游戏'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowChat(!showChat)}
                className="px-4"
              >
                💬
              </Button>
            </div>
          </div>

          {/* 实时排行榜 */}
          <LiveScoreboard players={players} />
        </div>

        {/* 右侧边栏 */}
        <div className="space-y-6">
          {/* 实时对战状态 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">实时对战动态</h3>
            <div className="space-y-2">
              {battleEvents.map((event, index) => (
                <div key={index} className="text-sm text-gray-600 animate-fade-in">
                  {event}
                </div>
              ))}
            </div>
          </div>

          {/* 游戏规则 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              对战规则
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <Zap className="h-4 w-4 text-indigo-500 mr-2" />
                实时对战，看谁反应更快
              </li>
              <li className="flex items-center">
                <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                使用道具干扰对手
              </li>
              <li className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                积分可以购买强力道具
              </li>
            </ul>
          </div>

          {/* 聊天区域 */}
          {showChat && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <RoomChat roomId={roomCode} />
            </div>
          )}
        </div>
      </div>

      {/* 道具商店模态框 */}
      <PowerupShop
        isOpen={showPowerupShop}
        onClose={() => setShowPowerupShop(false)}
        powerUps={powerUps}
        playerScore={players[0].score}
        onPurchase={(powerupId) => {
          // 实现购买逻辑
          setShowPowerupShop(false);
        }}
      />

      {/* 邀请好友模态框 */}
      <InviteFriendsModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        gameId={roomCode}
      />
    </div>
  );
}