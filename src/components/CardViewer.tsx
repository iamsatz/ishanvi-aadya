import { useState } from 'react';
import { useStore, selectActiveCard, selectActiveLesson } from '../state/store';
import { TapRevealCard } from './cards/TapRevealCard';
import { ChoiceCards } from './cards/ChoiceCards';
import { ReflectCard } from './cards/ReflectCard';
import { ChecklistCard } from './cards/ChecklistCard';
import { MatchPairsCard } from './cards/MatchPairsCard';
import { QuizBlock } from './cards/QuizBlock';
import { FeedbackOverlay } from './cards/FeedbackOverlay';
import { GameCard } from './games/GameCard';
import { renderWithGlossary } from '../lib/renderWithGlossary';
import { clearCardStorage } from '../hooks/useCardStorage';
import type { LearningCard } from '../types/content';

function renderInteraction(card: LearningCard, onComplete: (correct: boolean) => void) {
  switch (card.interactionType) {
    case 'tap-reveal':   return <TapRevealCard   card={card} onComplete={onComplete} />;
    case 'choice-cards': return <ChoiceCards     card={card} onComplete={onComplete} />;
    case 'match-pairs':  return <MatchPairsCard  card={card} onComplete={onComplete} />;
    case 'reflect':      return <ReflectCard     card={card} onComplete={onComplete} />;
    case 'checklist':    return <ChecklistCard   card={card} onComplete={onComplete} />;
    case 'game':         return <GameCard        card={card} onComplete={onComplete} />;
  }
}

export function CardViewer() {
  const card = useStore(selectActiveCard);
  const lesson = useStore(selectActiveLesson);
  const markCompleted = useStore((s) => s.markCardCompleted);
  const unmarkCompleted = useStore((s) => s.unmarkCardCompleted);

  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [resetKey, setResetKey] = useState(0);

  if (!card || !lesson) {
    return <article className="card"><p>No lesson selected.</p></article>;
  }

  function handleComplete(correct: boolean) {
    setFeedback(correct ? 'correct' : 'incorrect');
    if (correct && card) markCompleted(lesson!.id, card.id);
  }

  function handleReset() {
    clearCardStorage(card!.id);
    unmarkCompleted(lesson!.id, card!.id);
    setFeedback(null);
    setResetKey((k) => k + 1);
  }

  const hasParentTip =
    card.parentSuggestion?.tip ||
    (card.parentSuggestion?.questions?.length ?? 0) > 0 ||
    !!card.parentHint;

  return (
    <article className="card" key={card.id}>
      <header className="card__header">
        <div className="card__header-row">
          <div>
            <h1 className="card__title">{card.title}</h1>
            {card.subtitle && <span className="card__subtitle">{card.subtitle}</span>}
          </div>
          <button
            type="button"
            className="card__reset"
            onClick={handleReset}
            aria-label="Reset this page and try again"
            title="Reset and try again"
          >
            ↺ Try again
          </button>
        </div>
      </header>

      <div className="card__english">
        {renderWithGlossary(card.englishContent, card.glossary, `en-${card.id}`)}
      </div>

      {lesson.hasTelugu && card.teluguContent && (
        <details className="accordion">
          <summary>
            <span className="accordion__pill">తె</span>
            <span>తెలుగు చదవండి · Read in Telugu</span>
          </summary>
          <div className="accordion__body" lang="te">
            {card.teluguContent.split('\n\n').map((para, i) => (
              <p key={i}>
                {para.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 ? <br /> : null}</span>
                ))}
              </p>
            ))}
          </div>
        </details>
      )}

      {hasParentTip && (
        <details className="parent-hint">
          <summary>
            <span className="parent-hint__pill">👩‍👧</span>
            <span>For Parent · అమ్మ కోసం</span>
          </summary>
          <div className="parent-hint__body">
            {card.parentSuggestion?.tip && (
              <p className="parent-hint__tip">{card.parentSuggestion.tip}</p>
            )}
            {card.parentHint && !card.parentSuggestion?.tip && (
              <p className="parent-hint__tip">{card.parentHint}</p>
            )}
            {card.parentSuggestion?.questions && card.parentSuggestion.questions.length > 0 && (
              <>
                <p className="parent-hint__label">Ask her:</p>
                <ul className="parent-hint__questions">
                  {card.parentSuggestion.questions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </details>
      )}

      <div key={resetKey}>
        {card.quiz && card.quiz.length > 0 && (
          <QuizBlock
            questions={card.quiz}
            onAnswer={(correct) => setFeedback(correct ? 'correct' : 'incorrect')}
          />
        )}

        <p className="prompt">{card.promptText}</p>

        {renderInteraction(card, handleComplete)}
      </div>

      <FeedbackOverlay
        kind={feedback}
        hint={card.hint}
        onDone={() => setFeedback(null)}
      />
    </article>
  );
}
