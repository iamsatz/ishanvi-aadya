import { useEffect, useRef, useState } from 'react';
import { useStore } from '../state/store';
import { callTutor } from '../lib/db';
import { isSupabaseConfigured } from '../lib/supabase';
import { renderWithGlossary } from '../lib/renderWithGlossary';
import { tutorErrorMessage } from '../lib/tutorErrors';
import { ListenButton } from './ListenButton';
import {
  buildAskPageContext,
  contextLabel,
  presetsForPage,
} from '../lib/askContext';
import type { LearningCard, Lesson } from '../types/content';

interface Props {
  open: boolean;
  onClose: () => void;
  /** Chat panel anchored bottom-right (FAB mode). */
  anchored?: boolean;
  lesson?: Lesson;
  card?: LearningCard;
}

interface Turn {
  question: string;
  answer?: LearningCard;
  error?: string;
}

export function AskTeacher({ open, onClose, anchored = false, lesson, card }: Props) {
  const kids = useStore((s) => s.kids);
  const activeKid = useStore((s) => s.activeKid);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [question, setQuestion] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);

  const kid = kids.find((k) => k.id === activeKid) ?? kids[0];
  const pageContext = buildAskPageContext(lesson, card);
  const presets = presetsForPage(pageContext);
  const contextLine = contextLabel(pageContext);

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

  useEffect(() => {
    if (!open) return;
    setTurns([]);
    setQuestion('');
  }, [open, card?.id, lesson?.id]);

  if (!open) return null;

  async function ask(text: string) {
    const q = text.trim();
    if (!q || thinking) return;
    if (!isSupabaseConfigured) {
      setTurns((t) => [...t, {
        question: q,
        error: 'Ask Arjuna is not set up on this device. A parent needs to add Supabase keys in the app settings.',
      }]);
      setQuestion('');
      return;
    }

    if (!navigator.onLine) {
      setTurns((t) => [...t, {
        question: q,
        error: 'You are offline. Connect to Wi-Fi or mobile data, then try again.',
      }]);
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
        subject: lesson?.title ?? lesson?.subtitle,
        text: q,
        pageContext,
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
            ? { ...turn, error: tutorErrorMessage(err) }
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
    <div
      className={`ask-teacher${anchored ? ' ask-teacher--anchored' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Ask Arjuna"
    >
      {!anchored && <button type="button" className="ask-teacher__backdrop" onClick={handleClose} aria-label="Close" />}
      <div className="ask-teacher__panel">
        <header className="ask-teacher__head">
          <div className="ask-teacher__head-text">
            <h2>Ask Arjuna</h2>
            <p className="ask-teacher__context" title={contextLine}>
              📄 {contextLine}
            </p>
          </div>
          <button type="button" className="ask-teacher__close" onClick={handleClose} aria-label="Close">✕</button>
        </header>

        <div className="ask-teacher__thread">
          {turns.length === 0 && (
            <div className="ask-teacher__intro">
              <p>
                Ask about <strong>this page</strong> — Arjuna gives a hint, explanation, or answer depending on what you need.
              </p>
              <div className="ask-teacher__presets">
                {presets.map((p) => (
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
                  {turn.answer.hint && (
                    <p className="ask-teacher__a-hint">💡 {turn.answer.hint}</p>
                  )}
                  {turn.answer.teluguContent && (
                    <details className="ask-teacher__telugu">
                      <summary>తెలుగులో · Read in Telugu</summary>
                      <div>{renderWithGlossary(turn.answer.teluguContent, undefined, `ask-te-${i}`)}</div>
                    </details>
                  )}
                  <ListenButton text={`${turn.answer.title}. ${turn.answer.englishContent}`} label="Listen" />
                </div>
              )}
              {turn.error && <p className="ask-teacher__error">{turn.error}</p>}
            </div>
          ))}

          {thinking && <p className="ask-teacher__thinking">Arjuna is thinking…</p>}
        </div>

        <form className="ask-teacher__form" onSubmit={handleSubmit}>
          <textarea
            ref={inputRef}
            className="ask-teacher__input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about this page…"
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
