const PENTATONIC = [392, 440, 523.25, 587.33, 659.25, 783.99];

export interface AmbienceMix {
  readonly wind: number;
  readonly sea: number;
  readonly bells: number;
}

function noiseBuffer(context: AudioContext): AudioBuffer {
  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const data = buffer.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < data.length; i += 1) {
    previous = previous * 0.96 + (Math.random() * 2 - 1) * 0.04;
    data[i] = previous * 6;
  }
  return buffer;
}

function modulated(context: AudioContext, target: AudioParam, rate: number, depth: number): OscillatorNode {
  const lfo = context.createOscillator();
  const amount = context.createGain();
  lfo.frequency.value = rate;
  amount.gain.value = depth;
  lfo.connect(amount).connect(target);
  lfo.start();
  return lfo;
}

export class Ambience {
  private readonly context = new AudioContext();
  private readonly master = this.context.createGain();
  private readonly wind = this.context.createGain();
  private readonly sea = this.context.createGain();
  private readonly nodes: AudioScheduledSourceNode[] = [];
  private bells = 0;
  private bellTimer = 0;

  constructor() {
    this.master.gain.value = 0;
    this.master.connect(this.context.destination);
    const noise = noiseBuffer(this.context);
    this.layer(noise, "bandpass", 420, this.wind, 0.07, 260);
    this.layer(noise, "lowpass", 520, this.sea, 0.11, 0);
    this.nodes.push(modulated(this.context, this.sea.gain, 0.12, 0.08));
    this.master.gain.setTargetAtTime(0.32, this.context.currentTime, 1.5);
    this.scheduleBell();
  }

  private layer(buffer: AudioBuffer, type: BiquadFilterType, frequency: number, output: GainNode, sweepRate: number, sweepDepth: number): void {
    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = this.context.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.Q.value = 0.8;
    source.connect(filter).connect(output).connect(this.master);
    source.start();
    this.nodes.push(source);
    if (sweepDepth > 0) this.nodes.push(modulated(this.context, filter.frequency, sweepRate, sweepDepth));
  }

  private scheduleBell(): void {
    const delay = 3500 + Math.random() * 6000;
    this.bellTimer = window.setTimeout(() => {
      if (Math.random() < this.bells) this.ring();
      this.scheduleBell();
    }, delay);
  }

  private ring(): void {
    const now = this.context.currentTime;
    const oscillator = this.context.createOscillator();
    const envelope = this.context.createGain();
    const pan = this.context.createStereoPanner();
    oscillator.type = "sine";
    oscillator.frequency.value = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)] ?? 440;
    pan.pan.value = Math.random() * 1.2 - 0.6;
    envelope.gain.setValueAtTime(0, now);
    envelope.gain.linearRampToValueAtTime(0.12, now + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);
    oscillator.connect(envelope).connect(pan).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + 3);
  }

  setMix(mix: AmbienceMix): void {
    const now = this.context.currentTime;
    this.wind.gain.setTargetAtTime(mix.wind, now, 1.2);
    this.sea.gain.setTargetAtTime(mix.sea, now, 1.2);
    this.bells = mix.bells;
  }

  resume(): Promise<void> {
    return this.context.resume();
  }

  dispose(): void {
    window.clearTimeout(this.bellTimer);
    this.master.gain.setTargetAtTime(0, this.context.currentTime, 0.3);
    window.setTimeout(() => {
      this.nodes.forEach((node) => node.stop());
      void this.context.close();
    }, 900);
  }
}
