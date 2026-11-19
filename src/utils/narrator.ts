export type NarratorStatus = 'idle' | 'playing' | 'paused' | 'unsupported';

interface NarratorCallbacks {
  onStatusChange: (status: NarratorStatus) => void;
  onMessage?: (msg: string | null) => void;
}

class MrJoNarrator {
  private rate = 1.0;
  private status: NarratorStatus = 'idle';
  private callbacks: NarratorCallbacks | null = null;
  private chunks: string[] = [];
  private currentChunkIdx = 0;
  private activeSessionToken = 0;

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public subscribe(callbacks: NarratorCallbacks) {
    this.callbacks = callbacks;
    if (!this.isSupported()) {
      this.status = 'unsupported';
      callbacks.onStatusChange('unsupported');
    } else {
      callbacks.onStatusChange(this.status);
    }
  }

  public setRate(rate: number) {
    this.rate = rate;
  }

  public getRate(): number {
    return this.rate;
  }

  private updateStatus(status: NarratorStatus, message: string | null = null) {
    this.status = status;
    this.callbacks?.onStatusChange(status);
    this.callbacks?.onMessage?.(message);
  }

  private selectBestIndonesianVoice(): SpeechSynthesisVoice | null {
    if (!this.isSupported()) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const idVoices = voices.filter((v) =>
      v.lang.toLowerCase().startsWith('id')
    );

    if (idVoices.length > 0) {
      const maleHints = ['male', 'pria', 'laki', 'andi', 'arjun', 'damar', 'ardi', 'budi'];
      const preferredMale = idVoices.find((v) =>
        maleHints.some((hint) => v.name.toLowerCase().includes(hint))
      );
      if (preferredMale) return preferredMale;

      const googleVoice = idVoices.find((v) =>
        v.name.toLowerCase().includes('google')
      );
      return googleVoice || idVoices[0];
    }

    return null;
  }

  private splitIntoSentences(text: string): string[] {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (!cleaned) return [];
    const parts = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
    return parts.map((p) => p.trim()).filter(Boolean);
  }

  public play(text: string, rate?: number) {
    if (!this.isSupported()) {
      this.updateStatus(
        'unsupported',
        'Fitur narator suara (Web Speech API) tidak tersedia pada peramban ini.'
      );
      return;
    }

    if (typeof rate === 'number') {
      this.rate = rate;
    }

    window.speechSynthesis.cancel();
    this.activeSessionToken += 1;
    const sessionToken = this.activeSessionToken;

    this.chunks = this.splitIntoSentences(text);
    this.currentChunkIdx = 0;

    if (this.chunks.length === 0) {
      this.updateStatus('idle', null);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    const chosenVoice = this.selectBestIndonesianVoice();
    const notice =
      voices.length > 0 && !chosenVoice
        ? 'Suara khusus Bahasa Indonesia tidak ditemukan di perangkat ini; menggunakan suara bawaan sistem.'
        : null;

    this.updateStatus('playing', notice);
    this.speakNextChunk(sessionToken, chosenVoice);
  }

  private speakNextChunk(
    sessionToken: number,
    chosenVoice: SpeechSynthesisVoice | null
  ) {
    if (sessionToken !== this.activeSessionToken) return;
    if (this.currentChunkIdx >= this.chunks.length) {
      this.updateStatus('idle', null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      this.chunks[this.currentChunkIdx]
    );
    utterance.lang = 'id-ID';
    utterance.rate = this.rate;
    utterance.pitch = 0.94; // Slightly deeper warm male teacher tone
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onend = () => {
      if (sessionToken !== this.activeSessionToken) return;
      this.currentChunkIdx += 1;
      this.speakNextChunk(sessionToken, chosenVoice);
    };

    utterance.onerror = () => {
      if (sessionToken !== this.activeSessionToken) return;
      this.updateStatus(
        'idle',
        'Pemutaran suara dihentikan atau perangkat audio tidak tersedia.'
      );
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      this.updateStatus(
        'unsupported',
        'Peramban membatasi pemutaran suara otomatis.'
      );
    }
  }

  public pause() {
    if (!this.isSupported()) return;
    if (this.status === 'playing') {
      window.speechSynthesis.pause();
      this.updateStatus('paused', null);
    }
  }

  public resume() {
    if (!this.isSupported()) return;
    if (this.status === 'paused') {
      window.speechSynthesis.resume();
      this.updateStatus('playing', null);
    }
  }

  public stop() {
    if (!this.isSupported()) return;
    this.activeSessionToken += 1;
    this.chunks = [];
    this.currentChunkIdx = 0;
    window.speechSynthesis.cancel();
    this.updateStatus('idle', null);
  }
}

export const mrJoNarrator = new MrJoNarrator();
