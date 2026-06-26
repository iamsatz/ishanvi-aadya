import { useEffect, useRef, useState } from 'react';
import { useStore, selectActiveLesson } from '../state/store';
import { callTutor } from '../lib/db';
import { isSupabaseConfigured } from '../lib/supabase';
import { renderWithGlossary } from '../lib/renderWithGlossary';
import { ListenButton } from './ListenButton';
import type { LearningCard } from '../types/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Turn {
  question: string;
  answer?: LearningCard;
  error?: string;
}

const PRESETS = [
  'Indian vs International way of reading numbers?',
  'Difference between standard form and periods?',
  'What is place value?',
  'What is the difference between a digit and a number?',
];

export function AskTeacher({ open, onClose }: Props) {
  const kids = useStore((s) => s.kids);
  const activeKid = useStore((s) => s.activeKid);
  const lesson = useStore(selectActiveLesson);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [question, setQuestion] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);

  const kid = kids.find((k) => k.id === activeKid) ?? kids[0];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  async function ask(text: string) {
    const q = text.trim();
    if (!q || thinking) return;
    if (!isSupabaseConfigured) {
      setTurns((t) => [...t, { question: q, error: 'Ask Teacher needs internet. Connect on your phone or a Wi-Fi TV.' }]);
      setQuestion('');
      return;
    }

    setQuestion('');
    setThinking(true);
    setTurns((t) => [...t, { question: q }]);

    try {
      const res = await callTutor({
        mode: 'chat',
        grade: kid?.grade ?? 'Grade 4',
        board: kid?.board ?? 'CBSE',
        subject: lesson?.subtitle ?? undefined,
        text: q,
      });
      const answer = res.cards?.[0];
      setTurns((t) =>
        t.map((turn, i) =>
          i === t.length - 1
            ? { ...turn, answer, error: answer ? undefined : (res.message ?? 'No answer — try rephrasing.') }
            : turn
        )
      );
    } catch (err) {
      console.error('[AskTeacher] tutor call failed', err);
      setTurns((t) =>
        t.map((turn, i) =>
          i === t.length - 1
            ? { ...turn, error: "Hmm, I couldn't reach the teacher right now. Check the internet and try again." }
            : turn
        )
      );
    } finally {
      setThinking(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    ask(question);
  }

  function handleClose() {
    setTurns([]);
    setQuestion('');
    onClose();
  }

  return (
    <div className="ask-teacher" role="dialog" aria-modal="true" aria-label="Ask the teacher">
      <div className="ask-teacher__panel">
        <header className="ask-teacher__head">
          <h2>🙋 Ask Teacher</h2>
          <button type="button" className="ask-teacher__close" onClick={handleClose} aria-label="Close">✕</button>
        </header>

        <div className="ask-teacher__thread">
          {turns.length === 0 && (
            <div className="ask-teacher__intro">
              <p>Ask anything about your lesson — like a real teacher!</p>
              <div className="ask-teacher__presets">
                {PRESETS.map((p) => (
                  <button key={p} type="button" className="ask-teacher__chip" onClick={() => ask(p)}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {turns.map((turn, i) => (
            <div key={i} className="ask-teacher__turn">
              <p className="ask-teacher__q">{turn.question}</p>
              {turn.answer && (
                <div className="ask-teacher__a">
                  {turn.answer.title && <h3 className="ask-teacher__a-title">{turn.answer.title}</h3>}
                  <div className="ask-teacher__a-body">
                    {renderWithGlossary(turn.answer.englishContent, turn.answer.glossary, `ask-${i}`)}
                  </div>
                  {turn.answer.teluguContent && (
                    <details className="ask-teacher__telugu">
                      <summary>తెలుగులో చదవండి · Read in Telugu</summary>
                      <div>{renderWithGlossary(turn.answer.teluguContent, undefined, `ask-te-${i}`)}</div>
                    </details>
                  )}
                  <ListenButton text={`${turn.answer.title}. ${turn.answer.englishContent}`} label="Listen" />
                </div>
              )}
              {turn.error && <p className="ask-teacher__error">{turn.error}</p>}
            </div>
          ))}

          {thinking && <p className="ask-teacher__thinking">👩‍🏫 Teacher is thinking…</p>}
        </div>

        <form className="ask-teacher__form" onSubmit={handleSubmit}>
          <textarea
            ref={inputRef}
            className="ask-teacher__input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question (or use the remote mic)…"
            rows={2}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                ask(question);
              }
            }}
          />
          <button type="submit" className="btn btn--accent ask-teacher__send" disabled={thinking || !question.trim()}>
            {thinking ? '…' : 'Ask'}
          </button>
        </form>
      </div>
    </div>
  );
}
