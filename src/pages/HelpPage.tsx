import React from 'react';
import { HelpCircle, Book, MessageCircle } from 'lucide-react';

export function HelpPage() {
  const faqs = [
    {
      question: 'How do I start playing?',
      answer: 'Click the "Start Game" button on the homepage or select "Game Modes" from the navigation bar to choose your preferred game mode.'
    },
    {
      question: 'How do I earn points?',
      answer: 'Earn base points by correctly guessing the artist from the lyrics. Get bonus points for faster answers and maintaining streaks.'
    },
    {
      question: 'How do I unlock achievements?',
      answer: 'Complete specific game objectives like getting 5 correct answers in a row or reaching a total score of 1000 points.'
    },
    {
      question: 'What are the different game modes?',
      answer: 'Choose from Single Player, Multiplayer, or Time Attack modes. Each mode offers unique challenges and scoring systems.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <HelpCircle className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
        <p className="mt-4 text-xl text-gray-600">We're here to help you get the most out of your game experience</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Game Guide</h2>
          </div>
          <p className="text-gray-600">
            Detailed instructions and gameplay tips to help you improve your performance and enjoy the game to its fullest.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Support</h2>
          </div>
          <p className="text-gray-600">
            Need assistance? Contact our support team at support@wickedlyrics.game
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            Use hints wisely - they can help you in difficult situations
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            Answer quickly to earn bonus points
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            Build streaks to multiply your score
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            Challenge friends to compete on the global leaderboard
          </li>
        </ul>
      </div>
    </div>
  );
}