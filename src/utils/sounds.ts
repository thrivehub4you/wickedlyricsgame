import { Howl } from 'howler';

class SoundManager {
  private sounds: {
    tick: Howl;
    correct: Howl;
    wrong: Howl;
    gameOver: Howl;
    victory: Howl;
    countdown: Howl;
  };

  constructor() {
    this.sounds = {
      tick: new Howl({
        src: ['/sounds/tick.mp3'],
        volume: 0.3
      }),
      correct: new Howl({
        src: ['/sounds/correct.mp3'],
        volume: 0.5
      }),
      wrong: new Howl({
        src: ['/sounds/wrong.mp3'],
        volume: 0.5
      }),
      gameOver: new Howl({
        src: ['/sounds/game-over.mp3'],
        volume: 0.5
      }),
      victory: new Howl({
        src: ['/sounds/victory.mp3'],
        volume: 0.5
      }),
      countdown: new Howl({
        src: ['/sounds/countdown.mp3'],
        volume: 0.4
      })
    };
  }

  playTick() {
    this.sounds.tick.play();
  }

  playCorrect() {
    this.sounds.correct.play();
  }

  playWrong() {
    this.sounds.wrong.play();
  }

  playGameOver() {
    this.sounds.gameOver.play();
  }

  playVictory() {
    this.sounds.victory.play();
  }

  playCountdown() {
    this.sounds.countdown.play();
  }
}

export const soundManager = new SoundManager();