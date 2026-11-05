/**
 * FrostBerry Study Suite — Glacier Soundscape & Web Audio Engine
 * Generates soothing ambient lo-fi soundscapes and crystal completion chimes.
 */

class GlacierAudioEngine {
  constructor() {
    this.ctx = null;
    this.currentMode = 'rain';
    this.isPlaying = false;
    this.gainNode = null;
    this.ambientSource = null;
    this.dropletTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  play(mode = 'rain') {
    this.init();
    this.stopAmbient();
    this.currentMode = mode;
    this.isPlaying = true;

    if (mode === 'rain') {
      this.startRainSoundscape();
    } else if (mode === 'stream') {
      this.startStreamSoundscape();
    } else if (mode === 'sunrise') {
      this.startSunriseSoundscape();
    } else if (mode === 'whitenoise') {
      this.startWhiteNoiseSoundscape();
    }
  }

  stop() {
    this.stopAmbient();
    this.isPlaying = false;
  }

  stopAmbient() {
    if (this.dropletTimer) {
      clearInterval(this.dropletTimer);
      this.dropletTimer = null;
    }
    if (this.ambientSource) {
      try {
        if (typeof this.ambientSource.stop === 'function') {
          this.ambientSource.stop();
        }
        if (typeof this.ambientSource.disconnect === 'function') {
          this.ambientSource.disconnect();
        }
      } catch (e) {}
      this.ambientSource = null;
    }
  }

  startRainSoundscape() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.gainNode);
    noise.start();
    this.ambientSource = noise;

    this.dropletTimer = setInterval(() => {
      if (!this.isPlaying) return;
      this.playSingleDrop();
    }, 500 + Math.random() * 800);
  }

  playSingleDrop() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const osc = this.ctx.createOscillator();
    const dropGain = this.ctx.createGain();

    const freq = 1200 + Math.random() * 1600;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.ctx.currentTime + 0.12);

    dropGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    dropGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(dropGain);
    dropGain.connect(this.gainNode);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.13);
  }

  startStreamSoundscape() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.12;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter1.Q.setValueAtTime(3.0, this.ctx.currentTime);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.3, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(150, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter1.frequency);

    noise.connect(filter1);
    filter1.connect(this.gainNode);

    noise.start();
    lfo.start();
    this.ambientSource = noise;
  }

  startSunriseSoundscape() {
    if (!this.ctx) return;
    const freqs = [174, 261, 392, 523];
    const masterDrone = this.ctx.createGain();
    masterDrone.gain.setValueAtTime(0.08, this.ctx.currentTime);
    masterDrone.connect(this.gainNode);

    freqs.forEach(f => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f + (Math.random() * 0.8 - 0.4), this.ctx.currentTime);
      osc.connect(masterDrone);
      osc.start();
    });

    this.ambientSource = {
      stop: () => {
        masterDrone.disconnect();
      },
      disconnect: () => {}
    };
  }

  startWhiteNoiseSoundscape() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.05;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.gainNode);
    noise.start();
    this.ambientSource = noise;
  }

  playCrystalChime() {
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.08);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + index * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + index * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + index * 0.08);
        osc.stop(this.ctx.currentTime + index * 0.08 + 1.3);
      });
    } catch (e) {
      console.warn('Audio chime failed:', e);
    }
  }
}

export const glacierAudio = new GlacierAudioEngine();
