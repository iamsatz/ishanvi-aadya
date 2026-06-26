import type { LearningCard, Lesson, ParentSuggestion } from '../types/content';
import { ParentAnswersPanel } from './ParentAnswersPanel';

interface Props {
  suggestion?: ParentSuggestion;
  legacyHint?: string;
  parentMode?: boolean;
  card?: LearningCard;
  lesson?: Lesson;
}

export function ParentPanel({
  suggestion,
  legacyHint,
  parentMode = false,
  card,
  lesson,
}: Props) {
  const hasContent =
    suggestion?.tip ||
    suggestion?.tipTe ||
    (suggestion?.questions?.length ?? 0) > 0 ||
    (suggestion?.questionsTe?.length ?? 0) > 0 ||
    !!legacyHint ||
    (parentMode && card && lesson);

  if (!hasContent) return null;

  return (
    <details className="parent-hint parent-hint--compact" open={parentMode}>
      <summary>
        <span className="parent-hint__pill">👩‍👧</span>
        <span>For Parent · అమ్మ/నాన్న కోసం{parentMode ? ' · unlocked' : ''}</span>
      </summary>
      <div className="parent-hint__body">
        {suggestion?.tip && (
          <div className="parent-hint__block">
            <span className="parent-hint__lang">English</span>
            <p className="parent-hint__tip">{suggestion.tip}</p>
          </div>
        )}
        {suggestion?.tipTe && (
          <div className="parent-hint__block" lang="te">
            <span className="parent-hint__lang">తెలుగు</span>
            <p className="parent-hint__tip">{suggestion.tipTe}</p>
          </div>
        )}
        {legacyHint && !suggestion?.tip && (
          <p className="parent-hint__tip">{legacyHint}</p>
        )}
        {(suggestion?.questions?.length ?? 0) > 0 && (
          <>
            <p className="parent-hint__label">Ask her · అడగండి:</p>
            <ul className="parent-hint__questions">
              {suggestion!.questions!.map((q, i) => (
                <li key={`en-${i}`}>
                  <span className="parent-hint__q-en">{q}</span>
                  {suggestion?.questionsTe?.[i] && (
                    <span className="parent-hint__q-te" lang="te">{suggestion.questionsTe[i]}</span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        {parentMode && card && lesson && (
          <ParentAnswersPanel card={card} lesson={lesson} />
        )}
      </div>
    </details>
  );
}
