import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Timer, Music2, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GameProgress } from '../components/game/GameProgress';
import { AchievementPopup } from '../components/game/AchievementPopup';
import { GameOverModal } from '../components/game/GameOverModal';
import { getRandomSong } from '../data/songs';
import { soundManager } from '../utils/sounds';
import { useAuth } from '../hooks/useAuth';
import type { Song } from '../types/game';

export function GamePage() {
  const { t } = useTranslation();
  const { mode } = useParams();
  const navigate = useNavigate();
  const { user, useRevival, canPlayGame } = useAuth();
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showAchievement, setShowAchievement] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>(
    getRandomSong(correctAnswers / Math.max(totalAttempts, 1))
  );
  const [artistOptions, setArtistOptions] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 10;
        }
        if (prev <= 3) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentSong]);

  const generateArtistOptions = (correctArtist: string) => {
    const allArtists = [
      'Taylor Swift', 'Ed Sheeran', 'Adele', 'The Weeknd', 'Lady Gaga',
      'Bruno Mars', 'Beyoncé', 'Justin Bieber', 'Ariana Grande', 'Post Malone',
      'Drake', 'Rihanna', 'Eminem', 'Coldplay', 'Maroon 5'
    ];
    const filteredArtists = allArtists.filter(artist => artist !== correctArtist);
    const shuffledArtists = filteredArtists.sort(() => Math.random() - 0.5);
    const options = [correctArtist, ...shuffledArtists.slice(0, 2)];
    return options.sort(() => Math.random() - 0.5);
  };

  const handleTimeout = () => {
    soundManager.playWrong();
    setShowAnswer(true);
    setFailedAttempts(prev => prev + 1);
    setTotalAttempts(prev => prev + 1);
    
    if (failedAttempts + 1 >= 5) {
      if (!user?.isGuest && user?.revivalsLeft > 0) {
        setIsVictory(false);
        setShowGameOver(true);
        return;
      }
      soundManager.playGameOver();
      setIsVictory(false);
      setShowGameOver(true);
      return;
    }

    setTimeout(() => {
      nextSong();
    }, 3000);
  };

  const handleRevival = () => {
    if (useRevival()) {
      setFailedAttempts(0);
      setShowGameOver(false);
      nextSong();
    }
  };

  const nextSong = () => {
    if (totalAttempts + 1 >= 20) {
      soundManager.playVictory();
      setIsVictory(true);
      setShowGameOver(true);
      return;
    }

    const correctRate = correctAnswers / Math.max(totalAttempts, 1);
    const newSong = getRandomSong(correctRate);
    setCurrentSong(newSong);
    setTimeLeft(10);
    setShowAnswer(false);
    const newOptions = generateArtistOptions(newSong.artist);
    setArtistOptions(newOptions);
    setCurrentLevel(prev => prev + 1);
    soundManager.playCountdown();
  };

  useEffect(() => {
    const options = generateArtistOptions(currentSong.artist);
    setArtistOptions(options);
    soundManager.playCountdown();
  }, []);

  const handleArtistSelect = (selectedArtist: string) => {
    if (showAnswer) return;

    setTotalAttempts(prev => prev + 1);

    if (selectedArtist === currentSong.artist) {
      soundManager.playCorrect();
      setCorrectAnswers(prev => prev + 1);
      const timeBonus = timeLeft * 10;
      const finalScore = 100 + timeBonus;
      setScore(prev => prev + finalScore);
      setStreak(prev => prev + 1);
      setFailedAttempts(0);
      
      if (streak === 4) {
        setShowAchievement(true);
        setTimeout(() => setShowAchievement(false), 3000);
      }
      
      setTimeout(() => nextSong(), 1500);
    } else {
      soundManager.playWrong();
      setStreak(0);
      setFailedAttempts(prev => prev + 1);
      setShowAnswer(true);
      
      if (failedAttempts + 1 >= 5) {
        soundManager.playGameOver();
        setIsVictory(false);
        setShowGameOver(true);
        return;
      }
      
      setTimeout(() => nextSong(), 3000);
    }
  };

  const handleSkip = () => {
    soundManager.playWrong();
    setStreak(0);
    setFailedAttempts(prev => prev + 1);
    setTotalAttempts(prev => prev + 1);
    if (failedAttempts + 1 >= 5) {
      soundManager.playGameOver();
      setIsVictory(false);
      setShowGameOver(true);
      return;
    }
    nextSong();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GameProgress
        currentLevel={currentLevel}
        totalLevels={20}
        score={score}
        streak={streak}
        failedAttempts={failedAttempts}
      />

      <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Music2 className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold">Score: {score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Timer className={`h-6 w-6 ${timeLeft <= 3 ? 'text-red-600 animate-pulse' : 'text-gray-600'}`} />
            <span className="text-xl font-semibold">{timeLeft}s</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-8 w-8 text-indigo-600 animate-pulse" />
            </div>
            <p className="text-2xl text-center font-medium text-gray-800">
              "{currentSong.lyrics}"
            </p>
          </div>

          {showAnswer && (
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <p className="text-lg font-semibold text-yellow-800">
                Correct Answer: {currentSong.artist}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {artistOptions.map((artist, index) => (
              <Button
                key={index}
                onClick={() => handleArtistSelect(artist)}
                disabled={showAnswer}
                variant={showAnswer && artist === currentSong.artist ? 'primary' : 'outline'}
                className={`py-4 text-lg ${
                  showAnswer && artist === currentSong.artist ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
              >
                {artist}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={handleSkip}
              disabled={showAnswer}
              className="mt-4"
            >
              Skip
            </Button>
          </div>
        </div>
      </div>

      <AchievementPopup
        title="Combo Master"
        description="Amazing! You've answered 5 questions correctly in a row!"
        isVisible={showAchievement}
      />

      <GameOverModal
        isOpen={showGameOver}
        onClose={() => {
          setShowGameOver(false);
          navigate('/modes', { replace: true });
        }}
        score={score}
        correctRate={correctAnswers / totalAttempts}
        isVictory={isVictory}
        onRevive={handleRevival}
      />
    </div>
  );
}