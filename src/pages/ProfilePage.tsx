import React from 'react';
import { User, Trophy, Star, Award } from 'lucide-react';
import type { Achievement } from '../types/game';

const achievements: Achievement[] = [
  {
    id: '1',
    name: '初级歌手',
    description: '完成首次游戏',
    icon: 'star',
    unlocked: true
  },
  {
    id: '2',
    name: '连击大师',
    description: '达成5次连续答对',
    icon: 'zap',
    unlocked: true
  },
  {
    id: '3',
    name: '音乐达人',
    description: '累计得分达到1000分',
    icon: 'music',
    unlocked: false
  }
];

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-12">
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
              <User className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">游客用户</h1>
              <p className="text-indigo-100">加入时间：2024年3月</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <Trophy className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">1,250</div>
              <div className="text-sm text-gray-600">总得分</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">15</div>
              <div className="text-sm text-gray-600">游戏场次</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 text-center">
              <Award className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-600">8</div>
              <div className="text-sm text-gray-600">获得成就</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">我的成就</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    achievement.unlocked
                      ? 'border-indigo-200 bg-indigo-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        achievement.unlocked
                          ? 'bg-indigo-100 text-indigo-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {achievement.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}