import React from 'react';
import { Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ThriveHub</span>
          </div>
        </div>
      </div>
    </header>
  );
}