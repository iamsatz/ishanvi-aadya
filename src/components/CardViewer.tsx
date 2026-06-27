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
import { AnswersCard } from './cards/AnswersCard';
import { CharacterBubble } from './CharacterBubble';
import { ParentPanel } from './ParentPanel';
import { ImageLightbox } from './ImageLightbox';
import { TvScrollButtons } from './TvScrollButtons';
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
    case 'answers':      return <AnswersCard     card={card} onComplete={onComplete} />;
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
  const storyRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLDivElement>(null);
  const zoomBtnRef = useRef<HTMLButtonElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  }, [card?.id]);

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
  const pageImages =
    card.imageUrls && card.imageUrls.length > 0
      ? card.imageUrls
      : card.imageUrl
        ? [card.imageUrl]
        : [];
  const hasPageImages = pageImages.length > 0;

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

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

      {tvMode && (
        <TvScrollButtons label="Scroll page" />
      )}

      <div className="card__body">
        <div className="card__story" ref={storyRef}>
          {hasPageImages && (
            <div className="card__images">
              {pageImages.map((src, i) => (
                <figure className="card__image" key={src}>
                  <button
                    type="button"
                    className="card__image-btn"
                    onClick={() => openLightbox(i)}
                    aria-label={pageImages.length > 1 ? `Open page ${i + 1} full size` : 'Open full-size image'}
                  >
                    <img src={src} alt={pageImages.length > 1 ? `${imageAlt} — page ${i + 1}` : imageAlt} />
                    <span className="card__image-zoom-hint">
                      {tvMode ? 'Select image or use Zoom button below' : 'Tap to zoom · read the page'}
                    </span>
                  </button>
                  {tvMode && i === 0 && (
                    <button
                      type="button"
                      ref={zoomBtnRef}
                      className="card__zoom-btn btn btn--accent"
                      onClick={() => openLightbox(i)}
                    >
                      🔍 Zoom homework page
                    </button>
                  )}
                </figure>
              ))}
            </div>
          )}
          <div className={`card__english${card.contentBlocks?.length ? ' card__english--blocks' : ''}`}>
            {card.contentBlocks && card.contentBlocks.length > 0 ? (
              <ContentBlocks
                blocks={card.contentBlocks}
                glossary={card.glossary}
                cardId={card.id}
              />
            ) : card.englishContent?.trim() ? (
              renderWithGlossary(card.englishContent, card.glossary, `en-${card.id}`)
            ) : (
              <p className="card__empty-story">
                {hasPageImages
                  ? 'Read the homework photo above, then answer below.'
                  : 'Your teacher\'s instructions should appear here. Scroll up or ask a parent to re-upload the homework photo.'}
              </p>
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

        <div
          className={`card__play${isDeck ? ' card__play--deck' : ''}`}
          ref={playRef}
          key={resetKey}
        >
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

      {hasPageImages && (
        <ImageLightbox
          src={pageImages[lightboxIndex] ?? pageImages[0]}
          alt={pageImages.length > 1 ? `${imageAlt} — page ${lightboxIndex + 1}` : imageAlt}
          open={lightboxOpen}
          tvMode={tvMode}
          onClose={() => setLightboxOpen(false)}
          returnFocusRef={zoomBtnRef}
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
