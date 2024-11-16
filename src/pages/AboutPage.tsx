import React from 'react';
import { Music2, Users, Trophy, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Wicked Lyrics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to creating an engaging platform where music enthusiasts can challenge 
          themselves with lyric-based games while discovering new music and having fun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Music2 className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Vast Music Library</h3>
          <p className="text-gray-600">Thousands of songs from various genres, constantly updated with the latest hits</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Community</h3>
          <p className="text-gray-600">Connect with music lovers from around the world</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Achievement System</h3>
          <p className="text-gray-600">Earn badges and track your progress as you play</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
          <p className="text-gray-600">Our team is here to help you have the best experience</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            At Wicked Lyrics, we believe that music has the power to bring people together. Our platform 
            combines the joy of music with engaging gameplay, creating a unique experience for music lovers 
            of all ages.
          </p>
          <p className="mb-4">
            Whether you're a casual listener or a music aficionado, our game offers multiple ways to test 
            your knowledge, discover new songs, and compete with players worldwide.
          </p>
          <p>
            We're constantly working to expand our song database, improve game features, and create new 
            ways for our community to engage with music.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:support@wickedlyrics.game" className="text-indigo-600 hover:text-indigo-700">
              support@wickedlyrics.game
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Support Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM (GMT)
          </p>
          <p className="text-gray-600">
            For business inquiries or partnership opportunities, please contact us at{' '}
            <a href="mailto:business@wickedlyrics.game" className="text-indigo-600 hover:text-indigo-700">
              business@wickedlyrics.game
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}