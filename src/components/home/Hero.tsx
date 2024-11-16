import React from 'react';
import { Music4, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

export function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-music-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse-slow"></div>
              <Music4 className="h-16 w-16 text-primary-600 relative animate-float" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text font-playfair">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-inter">
              {t('home.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700"
              onClick={() => navigate('/modes')}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              {t('common.start')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-primary-50"
              onClick={() => navigate('/create')}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              {t('common.createLyrics')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}