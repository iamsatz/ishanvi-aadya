import { useEffect, useState } from 'react';
import type { ChecklistItem, QuizQuestion } from '../../types/content';
import { useCardStorage } from '../../hooks/useCardStorage';
import { useStore } from '../../state/store';
import { ListenButton } from '../ListenButton';

interface Props {
  card: import('../../types/content').LearningCard;
  onComplete: (correct: boolean) => void;
}

type QState = { picked: string | null; status: 'idle' | 'correct' | 'incorrect' };
type ExamStateMap = Record<string, Record<string, QState>>;

function initExamState(questions: QuizQuestion[]): ExamStateMap[string] {
  return Object.fromEntries(
    questions.map((q) => [q.id, { picked: null, status: 'idle' as const }])
  );
}

function allExamCorrect(state: Record<string, QState>, questions: QuizQuestion[]): boolean {
  return questions.every((q) => state[q.id]?.status === 'correct');
}

export function ChecklistCard({ card, onComplete }: Props) {
  const items = card.checklist ?? [];
  const [checked, setChecked] = useCardStorage<string[]>(card.id, 'checklist', []);
  const [showExamples, setShowExamples] = useState<Set<string>>(new Set());
  const [activeExamId, setActiveExamId] = useState<string | null>(null);
  const [examStates, setExamStates] = useState<ExamStateMap>({});
  const [wrongAttempts, setWrongAttempts] = useState<Record<string, number>>({});
  const [praiseFor, setPraiseFor] = useState<string | null>(null);
  const jumpToCard = useStore((s) => s.jumpToCard);
  const parentMode = useStore((s) => s.parentMode);
  const requestPin = useStore((s) => s.requestPin);
  const allDone = items.length > 0 && checked.length === items.length;

  useEffect(() => {
    if (checked.length === 1) onComplete(true);
  }, [checked.length, onComplete]);

  useEffect(() => {
    if (allDone) onComplete(true);
  }, [allDone, onComplete]);

  function toggle(id: string, item: ChecklistItem) {
    if (item.exam?.length) {
      if (checked.includes(id)) return;
      setActiveExamId((cur) => (cur === id ? null : id));
      if (!examStates[id]) {
        setExamStates((s) => ({ ...s, [id]: initExamState(item.exam!) }));
      }
      return;
    }
    setChecked(checked.includes(id) ? checked.filter((c) => c !== id) : [...checked, id]);
  }

  function pickExam(itemId: string, qId: string, choiceId: string, correct: boolean) {
    const item = items.find((it) => it.id === itemId);
    if (!item?.exam) return;

    const cur = examStates[itemId]?.[qId];
    if (cur?.status === 'correct') return;

    if (!correct) {
      setWrongAttempts((w) => ({ ...w, [itemId]: (w[itemId] ?? 0) + 1 }));
      setExamStates((s) => ({
        ...s,
        [itemId]: {
          ...(s[itemId] ?? initExamState(item.exam!)),
          [qId]: { picked: choiceId, status: 'incorrect' },
        },
      }));
      window.setTimeout(() => {
        setExamStates((s) => ({
          ...s,
          [itemId]: {
            ...(s[itemId] ?? initExamState(item.exam!)),
            [qId]: { picked: null, status: 'idle' },
          },
        }));
      }, 450);
      return;
    }

    const prevState = examStates[itemId] ?? initExamState(item.exam!);
    const nextState = {
      ...prevState,
      [qId]: { picked: choiceId, status: 'correct' as const },
    };
    setExamStates((s) => ({ ...s, [itemId]: nextState }));

    if (allExamCorrect(nextState, item.exam)) {
      setChecked((prev) => (prev.includes(itemId) ? prev : [...prev, itemId]));
      const attempts = wrongAttempts[itemId] ?? 0;
      setPraiseFor(itemId);
      setActiveExamId(null);
      window.setTimeout(() => setPraiseFor(null), 2200);
      onComplete(attempts === 0);
    }
  }

  function toggleExample(id: string) {
    setShowExamples((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const hasGuide = items.some((it) => it.what || it.why || it.challenge);

  if (card.parentOnlyChecklist && !parentMode) {
    return (
      <div className="checklist checklist--locked">
        <p className="checklist__lock-lead">🔒 Parent checklist</p>
        <p className="checklist__lock-sub">
          This is for parents only. Unlock with the Parent PIN to tick tasks when done.
        </p>
        <button type="button" className="btn btn--accent" onClick={() => requestPin('parent')}>
          Unlock with Parent PIN
        </button>
      </div>
    );
  }

  return (
    <div className="checklist">
      {hasGuide && (
        <details className="task-guide">
          <summary>
            <span className="task-guide__pill" aria-hidden>📋</span>
            <span>Task Guide — what to do &amp; why it helps</span>
          </summary>
          <div className="task-guide__body">
            {items.map((it) => (it.what || it.why || it.challenge) ? (
              <div key={it.id} className="task-guide__row">
                <span className="task-guide__name">{it.label}</span>
                {it.what && <span className="task-guide__what">{it.what}</span>}
                {it.challenge && (
                  <span className="task-guide__challenge">
                    <strong>Try:</strong> {it.challenge}
                  </span>
                )}
                {it.why && <span className="task-guide__why">💡 {it.why}</span>}
              </div>
            ) : null)}
          </div>
        </details>
      )}

      {items.map((it) => {
        const isChecked = checked.includes(it.id);
        const exampleVisible = parentMode || showExamples.has(it.id);
        const hasExam = Boolean(it.exam?.length);
        const examOpen = activeExamId === it.id;
        const itemExamState = examStates[it.id] ?? {};
        const showPraise = praiseFor === it.id;

        return (
          <div key={it.id} className="check-item-wrap">
            <button
              type="button"
              className="check-item"
              data-checked={isChecked}
              data-exam={hasExam || undefined}
              onClick={() => toggle(it.id, it)}
              aria-pressed={isChecked}
              aria-expanded={hasExam ? examOpen : undefined}
            >
              <span className="check-box" aria-hidden>{isChecked ? '✓' : ''}</span>
              <span className="check-item__body">
                <span className="check-item__label">{it.label}</span>
                {hasExam && !isChecked && (
                  <span className="check-item__exam-hint">Tap to try the mini exam →</span>
                )}
                {it.hint && (
                  <span className="check-item__hint">💡 {it.hint}</span>
                )}
                {it.what && !it.hint && <span className="check-item__what">{it.what}</span>}
                {it.example && exampleVisible && (
                  <span className="check-item__example">Example: {it.example}</span>
                )}
              </span>
            </button>

            {showPraise && (
              <p className="check-item__praise" role="status">
                {(wrongAttempts[it.id] ?? 0) === 0 ? 'Very good 🌟' : 'Good 👍'}
              </p>
            )}

            {hasExam && examOpen && !isChecked && (
              <div className="check-item__exam quiz" aria-label={`Exam: ${it.label}`}>
                <header className="quiz__header">
                  <span className="quiz__pill" aria-hidden>📝</span>
                  <h3 className="quiz__title">Mini exam</h3>
                </header>
                {it.exam!.map((q, qi) => {
                  const cur = itemExamState[q.id];
                  return (
                    <div className="quiz__q" key={q.id}>
                      <p className="quiz__question">
                        <span className="quiz__qnum">Q{qi + 1}.</span> {q.question}
                      </p>
                      <div className="quiz__choices" role="group">
                        {q.choices.map((c) => {
                          const isSel = cur?.picked === c.id;
                          const cls =
                            'quiz__choice' +
                            (isSel && cur?.status === 'correct' ? ' quiz__choice--correct' : '') +
                            (isSel && cur?.status === 'incorrect' ? ' quiz__choice--incorrect' : '');
                          return (
                            <button
                              key={c.id}
                              type="button"
                              className={cls}
                              onClick={() => pickExam(it.id, q.id, c.id, c.isCorrect)}
                              disabled={cur?.status === 'correct'}
                              aria-label={c.label}
                            >
                              <span className="quiz__choice-icon" aria-hidden>
                                {isSel && cur?.status === 'correct' ? '✓'
                                 : isSel && cur?.status === 'incorrect' ? '✕'
                                 : ''}
                              </span>
                              <span className="quiz__choice-text">{c.label}</span>
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
              </div>
            )}

            {it.hint && (
              <div className="check-item__listen">
                <ListenButton text={it.hint} label="Listen" />
              </div>
            )}
            {it.example && !parentMode && (
              <button
                type="button"
                className="check-item__example-toggle"
                onClick={() => toggleExample(it.id)}
              >
                {showExamples.has(it.id) ? 'Hide example' : 'See an example →'}
              </button>
            )}
            {it.peekLink && (
              <button
                type="button"
                className="check-item__learn"
                onClick={() => jumpToCard(card.lessonId, it.peekLink!.cardId)}
              >
                {it.peekLink.label ?? 'Stuck? Peek here →'}
              </button>
            )}
            {it.learnLink && (
              <button
                type="button"
                className="check-item__learn"
                onClick={() => jumpToCard(it.learnLink!.lessonId, it.learnLink!.cardId)}
              >
                {it.learnLink.label ?? 'Learn it here →'}
              </button>
            )}
          </div>
        );
      })}

      <div className="check-progress">
        {allDone ? '🎉 All done — amazing!' : `${checked.length} of ${items.length} done`}
      </div>
    </div>
  );
}
