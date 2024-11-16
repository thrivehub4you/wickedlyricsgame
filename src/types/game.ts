export interface Song {
  id: string;
  lyrics: string;
  answer: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  hints: string[];
  language: string;
}

export interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  avatar: string;
}