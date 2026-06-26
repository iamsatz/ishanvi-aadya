import { useSpeech } from '../hooks/useSpeech';

interface Props {
  text: string;
  label?: string;
}

export function ListenButton({ text, label = 'Listen' }: Props) {
  const { speak, stop, speaking, noTeluguVoice } = useSpeech();

  return (
    <span className="listen-btn-wrap">
      <button
        type="button"
        className="listen-btn"
        onClick={() => (speaking ? stop() : speak(text))}
        aria-pressed={speaking}
      >
        {speaking ? '⏹ Stop' : `🔊 ${label}`}
      </button>
      {noTeluguVoice && (
        <span className="listen-btn__warn" role="status">
          Telugu voice not found on this device — English only.
        </span>
      )}
    </span>
  );
}
