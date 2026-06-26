import { useCallback, useRef, useState } from 'react';

const TELUGU_RE = /[\u0C00-\u0C7F]/;

function pickVoice(langPrefix: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis?.getVoices() ?? [];
  return (
    voices.find((v) => v.lang.startsWith(langPrefix)) ??
    null
  );
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
    const isTe = TELUGU_RE.test(chunk);
    const lang = isTe ? 'te' : 'en';
    if (current && current !== lang) flush();
    current = lang;
    buf += (buf ? ' ' : '') + chunk;
  }
  flush();
  return parts.length ? parts : [{ lang: 'en', text }];
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [noTeluguVoice, setNoTeluguVoice] = useState(false);
  const cancelRef = useRef(false);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    cancelRef.current = false;
    setSpeaking(true);

    const segments = splitTeluguEnglish(text);
    let i = 0;

    const speakNext = () => {
      if (cancelRef.current || i >= segments.length) {
        setSpeaking(false);
        return;
      }
      const seg = segments[i++];
      const voice =
        seg.lang === 'te' ? pickVoice('te') ?? pickVoice('hi') : pickVoice('en');
      if (seg.lang === 'te' && !voice) setNoTeluguVoice(true);

      const u = new SpeechSynthesisUtterance(seg.text);
      if (voice) u.voice = voice;
      u.lang = voice?.lang ?? (seg.lang === 'te' ? 'te-IN' : 'en-IN');
      u.rate = 0.92;
      u.onend = speakNext;
      u.onerror = speakNext;
      window.speechSynthesis.speak(u);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        speakNext();
      };
    } else {
      speakNext();
    }
  }, []);

  const stop = useCallback(() => {
    cancelRef.current = true;
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  return { speak, stop, speaking, noTeluguVoice };
}
