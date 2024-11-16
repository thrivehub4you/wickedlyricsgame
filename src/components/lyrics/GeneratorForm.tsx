import React from 'react';
import { Sparkles, RefreshCcw } from 'lucide-react';
import { Button } from '../ui/Button';

interface GeneratorFormProps {
  prompt: string;
  genre: string;
  mood: string;
  isGenerating: boolean;
  onPromptChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onMoodChange: (value: string) => void;
  onGenerate: () => void;
}

export function GeneratorForm({
  prompt,
  genre,
  mood,
  isGenerating,
  onPromptChange,
  onGenreChange,
  onMoodChange,
  onGenerate
}: GeneratorFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Your Prompt
        </label>
        <textarea
          id="prompt"
          rows={4}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter your lyrics idea..."
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
            Genre
          </label>
          <select
            id="genre"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={genre}
            onChange={(e) => onGenreChange(e.target.value)}
          >
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="hiphop">Hip Hop</option>
            <option value="rnb">R&B</option>
            <option value="indie">Indie</option>
            <option value="electronic">Electronic</option>
          </select>
        </div>

        <div>
          <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-2">
            Mood
          </label>
          <select
            id="mood"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={mood}
            onChange={(e) => onMoodChange(e.target.value)}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="energetic">Energetic</option>
            <option value="romantic">Romantic</option>
            <option value="melancholic">Melancholic</option>
            <option value="peaceful">Peaceful</option>
          </select>
        </div>
      </div>

      <Button
        onClick={onGenerate}
        disabled={isGenerating || !prompt.trim()}
        className="w-full py-4"
      >
        {isGenerating ? (
          <>
            <RefreshCcw className="h-5 w-5 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5 mr-2" />
            Generate Lyrics
          </>
        )}
      </Button>
    </div>
  );
}