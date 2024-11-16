import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Star, ArrowRight, Music2, Zap, Trophy } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { GameModes } from '../components/game/GameModes';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import { Button } from '../components/ui/Button';

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-Powered Lyrics Generation",
    description: "Create unique lyrics with advanced AI technology tailored to your style and mood."
  },
  {
    icon: Music2,
    title: "Multiple Music Genres",
    description: "Generate lyrics across various genres including Pop, Rock, Hip Hop, R&B, and more."
  },
  {
    icon: Zap,
    title: "Real-time Creation",
    description: "Get instant results and share your creations directly to social media."
  }
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      <Hero />

      {/* Quick Access AI Lyrics Generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold">Create Amazing Lyrics with AI</h2>
              <p className="text-indigo-100 text-lg">
                Transform your ideas into beautiful lyrics using our advanced AI technology.
                Choose your genre, set the mood, and watch the magic happen.
              </p>
              <Button 
                onClick={() => navigate('/create')}
                className="bg-white text-indigo-600 hover:bg-indigo-50"
              >
                Try AI Lyrics Generator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80"
                alt="Music Creation"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Creative Minds
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create amazing song lyrics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <GameModes />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <LeaderboardTable />
      </div>
    </div>
  );
}