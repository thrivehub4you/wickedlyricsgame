import { useState, useEffect } from 'react';
import type { User } from '../types/user';

const GUEST_MAX_GAMES = 3;
const MEMBER_INITIAL_POINTS = 1000;
const MEMBER_MAX_REVIVALS = 3;

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const startGuestSession = () => {
    const guestUser: User = {
      id: `guest-${Date.now()}`,
      username: `Guest-${Math.floor(Math.random() * 1000)}`,
      isGuest: true,
      points: 0,
      gamesPlayed: 0,
      revivalsLeft: 0,
      maxRevivalsPerDay: 0
    };
    setUser(guestUser);
    return guestUser;
  };

  const register = (email: string, username: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      username,
      isGuest: false,
      points: MEMBER_INITIAL_POINTS,
      gamesPlayed: 0,
      revivalsLeft: MEMBER_MAX_REVIVALS,
      maxRevivalsPerDay: MEMBER_MAX_REVIVALS
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const canPlayGame = () => {
    if (!user) return false;
    if (!user.isGuest) return true;
    return user.gamesPlayed < GUEST_MAX_GAMES;
  };

  const incrementGamesPlayed = () => {
    if (user) {
      setUser({
        ...user,
        gamesPlayed: user.gamesPlayed + 1
      });
    }
  };

  const useRevival = () => {
    if (!user || user.isGuest || user.revivalsLeft <= 0) return false;
    
    setUser({
      ...user,
      revivalsLeft: user.revivalsLeft - 1
    });
    return true;
  };

  const addPoints = (points: number) => {
    if (user) {
      setUser({
        ...user,
        points: user.points + points
      });
    }
  };

  return {
    user,
    isAuthenticated: !!user && !user.isGuest,
    isGuest: !!user?.isGuest,
    startGuestSession,
    register,
    logout,
    canPlayGame,
    incrementGamesPlayed,
    useRevival,
    addPoints
  };
}