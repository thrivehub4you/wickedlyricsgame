import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function SocialShareButtons() {
  const handleShare = (platform: string) => {
    const shareText = '来和我一起玩 Wicked Lyrics 猜歌手游戏吧！';
    const shareUrl = window.location.origin;

    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'wechat':
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
        alert('链接已复制，请在微信中分享');
        return;
    }

    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        variant="outline"
        onClick={() => handleShare('twitter')}
        className="flex items-center justify-center"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Twitter
      </Button>
      <Button
        variant="outline"
        onClick={() => handleShare('facebook')}
        className="flex items-center justify-center"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Facebook
      </Button>
      <Button
        variant="outline"
        onClick={() => handleShare('whatsapp')}
        className="flex items-center justify-center"
      >
        <Share2 className="h-4 w-4 mr-2" />
        WhatsApp
      </Button>
      <Button
        variant="outline"
        onClick={() => handleShare('wechat')}
        className="flex items-center justify-center"
      >
        <Share2 className="h-4 w-4 mr-2" />
        微信
      </Button>
    </div>
  );
}