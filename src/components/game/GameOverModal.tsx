import React from 'react';
import confetti from 'canvas-confetti';
import { Share2, X, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  correctRate: number;
  isVictory: boolean;
  onRevive?: () => void;
}

export function GameOverModal({ 
  isOpen, 
  onClose, 
  score, 
  correctRate, 
  isVictory,
  onRevive 
}: GameOverModalProps) {
  const { t } = useTranslation();
  const { user, isAuthenticated, isGuest, canPlayGame } = useAuth();

  React.useEffect(() => {
    if (isOpen && isVictory) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen, isVictory]);

  const shareText = t('game.shareScore', { 
    score, 
    accuracy: Math.round(correctRate * 100),
    emoji: isVictory ? '🎉' : '💪' 
  });

  const handleShare = (platform: string) => {
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.origin)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + window.location.origin)}`;
        break;
      case 'wechat':
        navigator.clipboard.writeText(shareText + ' ' + window.location.origin);
        toast.success(t('game.wechatShareHint'));
        return;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div className="text-4xl">
            {isVictory ? '🏆' : '💫'}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isVictory ? t('game.victory') : t('game.defeat')}
        </h2>
        
        <div className="space-y-4 mb-6">
          <p className="text-lg text-gray-600">
            {t('game.finalScore')}: <span className="font-bold text-indigo-600">{score}</span>
          </p>
          <p className="text-lg text-gray-600">
            {t('game.accuracy')}: <span className="font-bold text-indigo-600">{Math.round(correctRate * 100)}%</span>
          </p>

          {!isVictory && !isGuest && user?.revivalsLeft > 0 && onRevive && (
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-indigo-700 mb-2">
                You have {user.revivalsLeft} revivals remaining today!
              </p>
              <Button 
                onClick={onRevive}
                className="w-full"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Use Revival ({user.revivalsLeft} left)
              </Button>
            </div>
          )}

          {isGuest && !canPlayGame() && (
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                You've reached the guest play limit. Register to get:
                <ul className="list-disc list-inside mt-2">
                  <li>1000 bonus points</li>
                  <li>3 daily revivals</li>
                  <li>Unlimited gameplay</li>
                </ul>
              </p>
              <Button 
                onClick={() => window.location.href = '/register'}
                className="w-full mt-3"
              >
                Register Now
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-gray-900">{t('game.shareScore')}:</p>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => handleShare('twitter')} variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button onClick={() => handleShare('facebook')} variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button onClick={() => handleShare('whatsapp')} variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={() => handleShare('wechat')} variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              WeChat
            </Button>
          </div>
        </div>

        <Button 
          onClick={onClose}
          className="w-full mt-6"
        >
          {isVictory ? t('game.playAgain') : t('game.quit')}
        </Button>
      </div>
    </div>
  );
}