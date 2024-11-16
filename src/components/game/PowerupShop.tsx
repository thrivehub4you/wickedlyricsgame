import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface PowerUp {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: any;
}

interface PowerupShopProps {
  isOpen: boolean;
  onClose: () => void;
  powerUps: PowerUp[];
  playerScore: number;
  onPurchase: (powerupId: string) => void;
}

export function PowerupShop({ isOpen, onClose, powerUps, playerScore, onPurchase }: PowerupShopProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">道具商店</h2>
            <p className="text-sm text-gray-600">当前积分: {playerScore}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid gap-4">
          {powerUps.map((powerUp) => {
            const Icon = powerUp.icon;
            const canAfford = playerScore >= powerUp.cost;

            return (
              <div
                key={powerUp.id}
                className="border rounded-lg p-4 flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{powerUp.name}</h3>
                  <p className="text-sm text-gray-600">{powerUp.description}</p>
                  <p className="text-sm font-medium text-indigo-600">
                    花费: {powerUp.cost} 积分
                  </p>
                </div>
                <Button
                  onClick={() => onPurchase(powerUp.id)}
                  disabled={!canAfford}
                  variant={canAfford ? 'primary' : 'outline'}
                >
                  购买
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}