import React from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Share2, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface VictoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  correctRate: number;
}

export function VictoryModal({ isOpen, onClose, score, correctRate }: VictoryModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  const shareText = `我在 Wicked Lyrics 游戏中获得了 ${score} 分，正确率 ${Math.round(correctRate * 100)}%！来挑战我吧！`;
  const shareUrl = window.location.origin;

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
    }
    window.open(shareUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <Trophy className="h-12 w-12 text-yellow-500" />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">恭喜你完成挑战！</h2>
        <div className="space-y-4 mb-6">
          <p className="text-lg text-gray-600">
            最终得分：<span className="font-bold text-indigo-600">{score}</span>
          </p>
          <p className="text-lg text-gray-600">
            正确率：<span className="font-bold text-indigo-600">{Math.round(correctRate * 100)}%</span>
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-gray-900">分享你的成绩：</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}