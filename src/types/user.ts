export interface User {
  id: string;
  username: string;
  email?: string;
  isGuest: boolean;
  points: number;
  gamesPlayed: number;
  revivalsLeft: number;
  maxRevivalsPerDay: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}