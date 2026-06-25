import type { ParentSuggestion } from '../types/content';

interface Props {
  suggestion?: ParentSuggestion;
  legacyHint?: string;
}

export function ParentPanel({ suggestion, legacyHint }: Props) {
  const hasContent =
    suggestion?.tip ||
    suggestion?.tipTe ||
    (suggestion?.questions?.length ?? 0) > 0 ||
    (suggestion?.questionsTe?.length ?? 0) > 0 ||
    !!legacyHint;

  if (!hasContent) return null;

  return (
    <details className="parent-hint parent-hint--compact">
      <summary>
        <span className="parent-hint__pill">👩‍👧</span>
        <span>For Parent · అమ్మ/నాన్న కోసం</span>
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
      </div>
    </details>
  );
}
