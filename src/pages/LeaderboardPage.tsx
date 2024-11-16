import React from 'react';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';

export function LeaderboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <LeaderboardTable />
    </div>
  );
}