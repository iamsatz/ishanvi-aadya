import { useState } from 'react';
import type { QuizQuestion } from '../../types/content';

interface Props {
  questions: QuizQuestion[];
  /** Called once per correct answer — for the FeedbackOverlay confetti. */
  onAnswer?: (correct: boolean) => void;
  /** Render choices as flip playing cards. */
  deck?: boolean;
}

type QState = { picked: string | null; status: 'idle' | 'correct' | 'incorrect' };

/**
 * Inline "Quick Check" block — one or more MCQs rendered above the main
 * card interaction. Each question is independent: tap a choice → instant
 * ✓ / ✕ feedback. Wrong answers shake and let you retry.
 */
export function QuizBlock({ questions, onAnswer, deck }: Props) {
  const [state, setState] = useState<Record<string, QState>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, { picked: null, status: 'idle' }]))
  );

  function pick(qId: string, choiceId: string, correct: boolean) {
    const cur = state[qId];
    if (cur?.status === 'correct') return;
    setState((s) => ({
      ...s,
      [qId]: { picked: choiceId, status: correct ? 'correct' : 'incorrect' },
    }));
    onAnswer?.(correct);
    if (!correct) {
      window.setTimeout(() => {
        setState((s) => ({ ...s, [qId]: { picked: null, status: 'idle' } }));
      }, 450);
    }
  }

  const correctCount = Object.values(state).filter((s) => s.status === 'correct').length;
  const total = questions.length;

  return (
    <section className="quiz" aria-label="Quick knowledge check">
      <header className="quiz__header">
        <span className="quiz__pill" aria-hidden>🎯</span>
        <h2 className="quiz__title">Quick Check</h2>
        <span className="quiz__count">{correctCount} / {total}</span>
      </header>

      {questions.map((q, qi) => {
        const cur = state[q.id];
        return (
          <div className="quiz__q" key={q.id}>
            <p className="quiz__question">
              <span className="quiz__qnum">Q{qi + 1}.</span> {q.question}
            </p>
            <div className={deck ? 'quiz__choices quiz__choices--deck' : 'quiz__choices'} role="group">
              {q.choices.map((c) => {
                const isSel = cur?.picked === c.id;
                const cls =
                  (deck ? 'deck-card quiz__deck-card' : 'quiz__choice') +
                  (isSel && cur?.status === 'correct'   ? ' quiz__choice--correct deck-card--correct'   : '') +
                  (isSel && cur?.status === 'incorrect' ? ' quiz__choice--incorrect deck-card--incorrect' : '') +
                  (isSel && deck ? ' deck-card--flipped' : '');
                return (
                  <button
                    key={c.id}
                    className={cls}
                    onClick={() => pick(q.id, c.id, c.isCorrect)}
                    disabled={cur?.status === 'correct'}
                    aria-label={c.label}
                  >
                    {deck ? (
                      <>
                        <span className="deck-card__back" aria-hidden>🃏</span>
                        <span className="deck-card__face">
                          <span className="quiz__choice-icon" aria-hidden>
                            {isSel && cur?.status === 'correct'   ? '✓'
                             : isSel && cur?.status === 'incorrect' ? '✕'
                             : ''}
                          </span>
                          <span className="quiz__choice-text">{c.label}</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="quiz__choice-icon" aria-hidden>
                          {isSel && cur?.status === 'correct'   ? '✓'
                           : isSel && cur?.status === 'incorrect' ? '✕'
                           : ''}
                        </span>
                        <span className="quiz__choice-text">{c.label}</span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            {cur?.status === 'incorrect' && q.hint && (
              <p className="quiz__hint">💡 {q.hint}</p>
            )}
          </div>
        );
      })}
    </section>
  );
}
