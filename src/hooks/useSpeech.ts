import { useCallback, useEffect, useRef, useState } from 'react';
import audioManifest from '../data/audioManifest.json';
import { hashSpeechText } from '../lib/speechHash';

const TELUGU_RE = /[\u0C00-\u0C7F]/;
const manifest = audioManifest as Record<string, string>;

type SpeechListener = (speaking: boolean) => void;
type WarningListener = (msg: string | null) => void;

let sharedAudio: HTMLAudioElement | null = null;
let speakingGlobal = false;
let warningGlobal: string | null = null;
const speakingListeners = new Set<SpeechListener>();
const warningListeners = new Set<WarningListener>();

function notifySpeaking(on: boolean) {
  speakingGlobal = on;
  speakingListeners.forEach((fn) => fn(on));
}

function notifyWarning(msg: string | null) {
  warningGlobal = msg;
  warningListeners.forEach((fn) => fn(msg));
}

function getAudio(): HTMLAudioElement {
  if (!sharedAudio) {
    sharedAudio = new Audio();
    sharedAudio.addEventListener('ended', () => notifySpeaking(false));
    sharedAudio.addEventListener('error', () => {
      notifySpeaking(false);
      notifyWarning('Could not play audio on this device.');
    });
  }
  return sharedAudio;
}

function pickVoice(langPrefix: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis?.getVoices() ?? [];
  return voices.find((v) => v.lang.startsWith(langPrefix)) ?? null;
}

function splitTeluguEnglish(text: string): { lang: 'te' | 'en'; text: string }[] {
  const parts: { lang: 'te' | 'en'; text: string }[] = [];
  const chunks = text.split(/(\s+)/);
  let buf = '';
  let current: 'te' | 'en' | null = null;

  function flush() {
    if (buf.trim()) parts.push({ lang: current ?? 'en', text: buf.trim() });
    buf = '';
  }

  for (const chunk of chunks) {
    if (!chunk.trim()) continue;
    const lang = TELUGU_RE.test(chunk) ? 'te' : 'en';
    if (current && current !== lang) flush();
    current = lang;
    buf += (buf ? ' ' : '') + chunk;
  }
  flush();
  return parts.length ? parts : [{ lang: 'en', text }];
}

function speakWithSynth(text: string, onDone: () => void) {
  if (!window.speechSynthesis) {
    notifyWarning('No voice on this device — try on phone or regenerate audio.');
    onDone();
    return;
  }

  window.speechSynthesis.cancel();
  const segments = splitTeluguEnglish(text);
  let i = 0;
  let voicesReady = window.speechSynthesis.getVoices().length > 0;
  let timedOut = false;

  const timeout = window.setTimeout(() => {
    if (!voicesReady) {
      timedOut = true;
      window.speechSynthesis.cancel();
      notifyWarning('No voice found on this TV — bundled audio may be missing.');
      onDone();
    }
  }, 2500);

  const speakNext = () => {
    if (timedOut || i >= segments.length) {
      window.clearTimeout(timeout);
      onDone();
      return;
    }
    const seg = segments[i++];
    const voice =
      seg.lang === 'te' ? pickVoice('te') ?? pickVoice('hi') : pickVoice('en');
    if (!voice) {
      notifyWarning(
        seg.lang === 'te'
          ? 'Telugu voice not found — English only on this device.'
          : 'No voice found on this device.'
      );
    }

    const u = new SpeechSynthesisUtterance(seg.text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? (seg.lang === 'te' ? 'te-IN' : 'en-IN');
    u.rate = 0.92;
    u.onend = speakNext;
    u.onerror = speakNext;
    window.speechSynthesis.speak(u);
  };

  const start = () => {
    voicesReady = true;
    window.clearTimeout(timeout);
    speakNext();
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      start();
    };
  } else {
    start();
  }
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(speakingGlobal);
  const [voiceWarning, setVoiceWarning] = useState<string | null>(warningGlobal);
  const cancelRef = useRef(false);

  useEffect(() => {
    speakingListeners.add(setSpeaking);
    warningListeners.add(setVoiceWarning);
    return () => {
      speakingListeners.delete(setSpeaking);
      warningListeners.delete(setVoiceWarning);
    };
  }, []);

  const stop = useCallback(() => {
    cancelRef.current = true;
    getAudio().pause();
    getAudio().currentTime = 0;
    window.speechSynthesis?.cancel();
    notifySpeaking(false);
  }, []);

  const speak = useCallback((text: string) => {
    cancelRef.current = false;
    notifyWarning(null);
    stop();

    const hash = hashSpeechText(text);
    const file = manifest[hash];
    if (file) {
      const audio = getAudio();
      audio.src = `/audio/${file}`;
      notifySpeaking(true);
      audio.play().catch(() => {
        notifySpeaking(false);
        notifyWarning('Could not play audio — check volume or try again.');
      });
      return;
    }

    notifySpeaking(true);
    speakWithSynth(text, () => {
      if (!cancelRef.current) notifySpeaking(false);
    });
  }, [stop]);

  return { speak, stop, speaking, voiceWarning };
}
