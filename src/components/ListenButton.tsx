import { useSpeech } from '../hooks/useSpeech';

interface Props {
  text: string;
  label?: string;
}

export function ListenButton({ text, label = 'Listen' }: Props) {
  const { speak, stop, speaking, voiceWarning } = useSpeech();

  return (
    <span className="listen-btn-wrap">
      <button
        type="button"
        className={'listen-btn' + (speaking ? ' listen-btn--playing' : '')}
        onClick={() => (speaking ? stop() : speak(text))}
        aria-pressed={speaking}
      >
        {speaking ? '⏹ Stop' : `🔊 ${label}`}
      </button>
      {voiceWarning && (
        <span className="listen-btn__warn" role="status">
          {voiceWarning}
        </span>
      )}
    </span>
  );
}
