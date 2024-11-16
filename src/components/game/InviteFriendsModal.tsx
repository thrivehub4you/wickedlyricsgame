import React from 'react';
import { X, Copy, Share2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface InviteFriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameId: string;
}

export function InviteFriendsModal({ isOpen, onClose, gameId }: InviteFriendsModalProps) {
  if (!isOpen) return null;

  const gameUrl = `${window.location.origin}/join/${gameId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(gameUrl);
    alert('游戏链接已复制到剪贴板');
  };

  const handleShare = (platform: string) => {
    const shareText = '来和我一起玩 Wicked Lyrics 猜歌手游戏吧！';
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(gameUrl)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(gameUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + gameUrl)}`;
        break;
      case 'wechat':
        navigator.clipboard.writeText(shareText + ' ' + gameUrl);
        alert('链接已复制，请在微信中分享');
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">邀请好友</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              游戏链接
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={gameUrl}
                readOnly
                className="flex-1 p-2 border rounded-lg text-sm text-gray-600"
              />
              <Button onClick={handleCopyLink} variant="outline">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-gray-900">分享到社交媒体</p>
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
                微信
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}