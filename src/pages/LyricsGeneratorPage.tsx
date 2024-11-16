import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { GeneratorForm } from '../components/lyrics/GeneratorForm';
import { SharePreview } from '../components/lyrics/SharePreview';

interface GeneratedLyrics {
  lyrics: string[];
  title: string;
}

async function generateLyrics(prompt: string, genre: string, mood: string): Promise<GeneratedLyrics> {
  // Simulated AI lyrics generation with different styles based on genre and mood
  const lyrics = {
    pop: {
      happy: [
        "Dancing in the starlight",
        "Every moment feels so right",
        "With you by my side tonight",
        "Everything's gonna be alright"
      ],
      sad: [
        "Memories fade like autumn leaves",
        "In the silence of the evening breeze",
        "Time slips through my fingers now",
        "As I remember our last goodbye somehow"
      ]
    },
    hiphop: {
      energetic: [
        "Rising up, breaking through the ceiling",
        "Every day hustling with this feeling",
        "Can't stop won't stop, that's my mission",
        "Living life with perfect precision"
      ],
      melancholic: [
        "City lights reflect my soul tonight",
        "Walking streets where dreams take flight",
        "Every step tells a story untold",
        "In this concrete jungle of silver and gold"
      ]
    }
  };

  const selectedLyrics = lyrics[genre as keyof typeof lyrics]?.[mood as keyof typeof lyrics.pop] || lyrics.pop.happy;
  const title = `${genre.toUpperCase()} VIBES`;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        lyrics: selectedLyrics,
        title
      });
    }, 1500);
  });
}

export function LyricsGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [genre, setGenre] = useState('pop');
  const [mood, setMood] = useState('happy');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLyrics, setGeneratedLyrics] = useState<GeneratedLyrics | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateLyrics(prompt, genre, mood);
      setGeneratedLyrics(result);
      toast.success('Lyrics generated successfully!');
    } catch (error) {
      toast.error('Failed to generate lyrics. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download an actual image
    toast.success('Image downloaded successfully!');
  };

  const handleShare = (platform: string) => {
    if (!generatedLyrics) return;
    
    const shareText = encodeURIComponent(
      `Check out these AI-generated lyrics:\n\n${generatedLyrics.lyrics.join('\n')}\n\nCreated with Wicked Lyrics AI`
    );
    const shareUrl = encodeURIComponent(window.location.origin);
    
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL
        toast.info('Save the image and share it on Instagram!');
        return;
      case 'copy link':
        navigator.clipboard.writeText(`${shareText}\n${window.location.origin}`);
        toast.success('Share link copied to clipboard!');
        return;
    }
    
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Toaster />
      
      <div className="text-center mb-12">
        <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Lyrics Generator</h1>
        <p className="text-xl text-gray-600">Create unique song lyrics with AI assistance</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <GeneratorForm
          prompt={prompt}
          genre={genre}
          mood={mood}
          isGenerating={isGenerating}
          onPromptChange={setPrompt}
          onGenreChange={setGenre}
          onMoodChange={setMood}
          onGenerate={handleGenerate}
        />
      </div>

      {generatedLyrics && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <SharePreview
            lyrics={generatedLyrics.lyrics}
            title={generatedLyrics.title}
            genre={genre}
            mood={mood}
            onDownload={handleDownload}
            onShare={handleShare}
          />
        </div>
      )}
    </div>
  );
}