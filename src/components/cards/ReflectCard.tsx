import { useState } from 'react';
import type { LearningCard } from '../../types/content';
import { useCardStorage } from '../../hooks/useCardStorage';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function ReflectCard({ card, onComplete }: Props) {
  const [text, setText] = useCardStorage<string>(card.id, 'reflect', '');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (!text.trim()) return;
    setSaved(true);
    onComplete(true);
    window.setTimeout(() => setSaved(false), 1500);
  }

  return (
    <div className="reflect">
      <textarea
        placeholder="Type your thoughts here…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label={card.promptText}
      />
      <button
        className="btn btn--accent"
        onClick={handleSave}
        disabled={!text.trim()}
        aria-label="Save my answer"
      >
        {saved ? '✓ Saved!' : '💾 Save my answer'}
      </button>
    </div>
  );
}
