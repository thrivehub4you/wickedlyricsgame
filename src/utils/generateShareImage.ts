import { Song } from '../types/game';

interface ShareImageConfig {
  lyrics: string;
  genre: string;
  mood: string;
  gradients: {
    [key: string]: string[];
  };
}

export async function generateShareImage({ lyrics, genre, mood }: ShareImageConfig): Promise<string> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  // Set canvas size to Instagram-friendly square format
  canvas.width = 1080;
  canvas.height = 1080;
  
  // Define gradients for different moods
  const gradients = {
    happy: ['#FF6B6B', '#4ECDC4'],
    sad: ['#2C3E50', '#3498DB'],
    energetic: ['#FF416C', '#FF4B2B'],
    romantic: ['#ED4264', '#FFEDBC'],
    peaceful: ['#2193b0', '#6dd5ed'],
    nostalgic: ['#cc2b5e', '#753a88'],
    hopeful: ['#00b09b', '#96c93d'],
    melancholic: ['#0F2027', '#2C5364']
  };

  // Create gradient background based on mood
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  const colors = gradients[mood as keyof typeof gradients] || gradients.peaceful;
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add vinyl record effect
  ctx.save();
  ctx.beginPath();
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width * 0.35;
  
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.fill();
  
  // Add inner circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.1, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  
  // Add grooves
  for (let i = 0.2; i < 1; i += 0.1) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * i, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.stroke();
  }
  ctx.restore();

  // Add text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  
  // Add genre label
  ctx.font = 'bold 32px Arial';
  ctx.fillText(genre.toUpperCase(), centerX, canvas.height * 0.15);
  
  // Add lyrics (wrapped)
  ctx.font = '24px Arial';
  const maxWidth = canvas.width * 0.8;
  const lineHeight = 36;
  const lines = wrapText(ctx, lyrics, maxWidth);
  
  let y = canvas.height * 0.75;
  lines.slice(0, 4).forEach(line => {
    ctx.fillText(line, centerX, y);
    y += lineHeight;
  });
  
  // Add watermark
  ctx.font = '18px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fillText('Created with Wicked Lyrics AI', centerX, canvas.height - 40);

  return canvas.toDataURL('image/jpeg', 0.9);
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}