import { useState } from 'react';
import { useStore } from '../../state/store';
import { ListenButton } from '../ListenButton';
import type { LearningCard } from '../../types/content';

interface Props {
  card: LearningCard;
  onComplete?: (correct: boolean) => void;
}

function AnswerRow({ index, question, answer, explanation }: {
  index: number; question: string; answer: string; explanation?: string;
}) {
  const [open, setOpen] = useState(false);
  const speakText = `Answer ${index + 1}. ${answer}.${explanation ? ` Why: ${explanation}` : ''}`;
  return (
    <li className="answers-card__item">
      <p className="answers-card__q">
        <span className="answers-card__num">Q{index + 1}</span> {question}
      </p>
      {open ? (
        <div className="answers-card__reveal">
          <p className="answers-card__a"><strong>Answer:</strong> {answer}</p>
          {explanation && (
            <p className="answers-card__why"><strong>Why:</strong> {explanation}</p>
          )}
          <ListenButton text={speakText} label="Listen" />
        </div>
      ) : (
        <button type="button" className="answers-card__show btn btn--ghost" onClick={() => setOpen(true)}>
          👀 Show answer
        </button>
      )}
    </li>
  );
}

export function AnswersCard({ card }: Props) {
  const parentMode = useStore((s) => s.parentMode);
  const requestPin = useStore((s) => s.requestPin);
  const items = card.answers ?? [];

  if (items.length === 0) {
    return <p className="answers-card__empty">No answer key for this lesson yet.</p>;
  }

  if (!parentMode) {
    return (
      <div className="answers-card answers-card--locked">
        <p className="answers-card__lock-lead">🔒 Answers are locked.</p>
        <p className="answers-card__lock-sub">
          Try every question first! A parent can unlock the answer key with the PIN.
        </p>
        <button type="button" className="btn btn--accent" onClick={() => requestPin('parent')}>
          Unlock with Parent PIN
        </button>
      </div>
    );
  }

  return (
    <div className="answers-card">
      <p className="answers-card__lead">
        👩 Parent unlocked. Tap a question to see its answer and why.
      </p>
      <ol className="answers-card__list">
        {items.map((it, i) => (
          <AnswerRow
            key={i}
            index={i}
            question={it.question}
            answer={it.answer}
            explanation={it.explanation}
          />
        ))}
      </ol>
    </div>
  );
}
