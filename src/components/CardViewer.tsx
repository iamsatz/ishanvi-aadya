import { useState, useEffect, useRef } from 'react';
import { useStore, selectActiveCard, selectActiveLesson } from '../state/store';
import { TapRevealCard } from './cards/TapRevealCard';
import { ChoiceCards } from './cards/ChoiceCards';
import { ReflectCard } from './cards/ReflectCard';
import { ChecklistCard } from './cards/ChecklistCard';
import { MatchPairsCard } from './cards/MatchPairsCard';
import { QuizBlock } from './cards/QuizBlock';
import { FeedbackOverlay } from './cards/FeedbackOverlay';
import { GameCard } from './games/GameCard';
import { VocabGridCard } from './cards/VocabGridCard';
import { CharacterBubble } from './CharacterBubble';
import { ParentPanel } from './ParentPanel';
import { ImageLightbox } from './ImageLightbox';
import { ListenButton } from './ListenButton';
import { renderWithGlossary } from '../lib/renderWithGlossary';
import { clearCardStorage } from '../hooks/useCardStorage';
import { ContentBlocks } from './cards/ContentBlocks';
import type { LearningCard } from '../types/content';

function renderInteraction(card: LearningCard, onComplete: (correct: boolean) => void) {
  switch (card.interactionType) {
    case 'tap-reveal':   return <TapRevealCard   card={card} onComplete={onComplete} />;
    case 'choice-cards': return <ChoiceCards     card={card} onComplete={onComplete} />;
    case 'match-pairs':  return <MatchPairsCard  card={card} onComplete={onComplete} />;
    case 'reflect':      return <ReflectCard     card={card} onComplete={onComplete} />;
    case 'checklist':    return <ChecklistCard   card={card} onComplete={onComplete} />;
    case 'vocab-grid':   return <VocabGridCard   card={card} onComplete={onComplete} />;
    case 'game':         return <GameCard        card={card} onComplete={onComplete} />;
  }
}

export function CardViewer() {
  const card = useStore(selectActiveCard);
  const lesson = useStore(selectActiveLesson);
  const tvMode = useStore((s) => s.tvMode);
  const parentMode = useStore((s) => s.parentMode);
  const markCompleted = useStore((s) => s.markCardCompleted);
  const unmarkCompleted = useStore((s) => s.unmarkCardCompleted);
  const cardRef = useRef<HTMLElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    setLightboxOpen(false);
  }, [card?.id]);

  useEffect(() => {
    if (!tvMode || !card) return;
    const root = cardRef.current;
    if (!root) return;
    const focusable = root.querySelector<HTMLElement>(
      'button:not([disabled]), a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusable ?? root).focus({ preventScroll: true });
  }, [card?.id, tvMode, resetKey]);

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

  const isDeck = card.cardStyle === 'deck';
  const imageAlt = card.title || 'Homework page';

  return (
    <article className="card" key={card.id} ref={cardRef} tabIndex={tvMode ? -1 : undefined}>
      <header className="card__header">
        <CharacterBubble kid={lesson.kid} />
        <div className="card__header-row">
          <div>
            {card.sheetTag && (
              <span className="card__sheet-tag">{card.sheetTag}</span>
            )}
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

      <div className="card__body">
        <div className="card__story">
          {card.imageUrl && (
            <figure className="card__image">
              <button
                type="button"
                className="card__image-btn"
                onClick={() => setLightboxOpen(true)}
                aria-label="Open full-size image"
              >
                <img src={card.imageUrl} alt={imageAlt} />
                <span className="card__image-zoom-hint">Tap to zoom · read the page</span>
              </button>
            </figure>
          )}
          <div className={`card__english${card.contentBlocks?.length ? ' card__english--blocks' : ''}`}>
            {card.contentBlocks && card.contentBlocks.length > 0 ? (
              <ContentBlocks
                blocks={card.contentBlocks}
                glossary={card.glossary}
                cardId={card.id}
              />
            ) : (
              renderWithGlossary(card.englishContent, card.glossary, `en-${card.id}`)
            )}
          </div>

          {card.hint && (
            <div className="card__voice-hint">
              <ListenButton text={card.hint} label="Hint" />
            </div>
          )}

          {card.teluguContent && (
            <details className="accordion accordion--compact">
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

          <ParentPanel
            suggestion={card.parentSuggestion}
            legacyHint={card.parentHint}
            parentMode={parentMode}
            card={card}
            lesson={lesson}
          />

        </div>

        <div className={`card__play${isDeck ? ' card__play--deck' : ''}`} key={resetKey}>
          {card.quiz && card.quiz.length > 0 && (
            <QuizBlock
              questions={card.quiz}
              deck={isDeck}
              onAnswer={(correct) => setFeedback(correct ? 'correct' : 'incorrect')}
            />
          )}

          <p className="prompt">{card.promptText}</p>

          {renderInteraction(card, handleComplete)}
        </div>
      </div>

      {card.imageUrl && (
        <ImageLightbox
          src={card.imageUrl}
          alt={imageAlt}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <FeedbackOverlay
        kind={feedback}
        hint={card.hint}
        onDone={() => setFeedback(null)}
      />
    </article>
  );
}
