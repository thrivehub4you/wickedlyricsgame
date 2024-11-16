import React, { useState } from 'react';
import { Download, Twitter, Facebook, Instagram, Share2, Linkedin, Link } from 'lucide-react';
import { Button } from '../ui/Button';
import { toast } from 'sonner';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

interface SharePreviewProps {
  lyrics: string[];
  title: string;
  genre: string;
  mood: string;
  onDownload: () => void;
  onShare: (platform: string) => void;
}

export function SharePreview({ lyrics, title, genre, mood, onDownload, onShare }: SharePreviewProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const gradients: Record<string, string> = {
    happy: 'from-yellow-400 via-orange-500 to-pink-500',
    sad: 'from-blue-500 via-indigo-500 to-purple-500',
    energetic: 'from-red-500 via-orange-500 to-yellow-500',
    romantic: 'from-pink-400 via-purple-500 to-indigo-500',
    melancholic: 'from-slate-600 via-slate-700 to-slate-800',
    peaceful: 'from-teal-400 via-cyan-500 to-blue-500'
  };

  const gradient = gradients[mood] || gradients.happy;

  const socialPlatforms = [
    { name: 'Twitter', icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-[#4267B2]' },
    { name: 'Instagram', icon: Instagram, color: 'hover:bg-[#E4405F]' },
    { name: 'LinkedIn', icon: Linkedin, color: 'hover:bg-[#0A66C2]' },
    { name: 'Copy Link', icon: Link, color: 'hover:bg-gray-700' }
  ];

  const handleShare = (platform: string) => {
    onShare(platform.toLowerCase());
    setShowShareMenu(false);
    toast.success(`Shared to ${platform}!`);
  };

  return (
    <div className="space-y-6">
      <div className={`relative bg-gradient-to-br ${gradient} rounded-xl p-8 aspect-square max-w-2xl mx-auto overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] rounded-xl" />
        
        <div className="relative text-white h-full flex flex-col">
          <div className="font-playfair text-sm font-medium uppercase tracking-wider opacity-80 mb-6">
            {genre.toUpperCase()}
          </div>
          
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {lyrics.map((line, index) => (
              <div
                key={index}
                className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed tracking-wide text-center"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                {line}
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-8 flex justify-between items-end">
            <div className="font-inter text-sm font-medium opacity-80">
              Created with Wicked Lyrics
            </div>
            <div className="flex space-x-3">
              <button
                onClick={onDownload}
                className="p-2 sm:p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                aria-label="Download"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 sm:p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 transition-all duration-300 ${
        showShareMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.name}
              onClick={() => handleShare(platform.name)}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-100 hover:text-white transition-colors ${platform.color}`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium hidden sm:inline">{platform.name}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button onClick={onDownload} variant="outline" className="w-full sm:w-40">
          <Download className="h-4 w-4 mr-2" />
          Save Image
        </Button>
        <Button 
          onClick={() => setShowShareMenu(!showShareMenu)} 
          variant="outline" 
          className="w-full sm:w-40"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}