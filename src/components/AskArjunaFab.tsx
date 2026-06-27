import { useStore } from '../state/store';
import { selectActiveCard, selectActiveLesson } from '../state/store';
import { AskTeacher } from './AskTeacher';
import { MascotAvatar } from './MascotAvatar';

/** Floating Ask Arjuna — bottom-right on every lesson page. */
export function AskArjunaFab() {
  const askOpen = useStore((s) => s.askOpen);
  const openAsk = useStore((s) => s.openAsk);
  const closeAsk = useStore((s) => s.closeAsk);
  const lessons = useStore((s) => s.lessons);
  const lesson = useStore(selectActiveLesson);
  const card = useStore(selectActiveCard);

  if (lessons.length === 0) return null;

  return (
    <>
      {!askOpen && (
        <button
          type="button"
          className="ask-arjuna-fab"
          onClick={openAsk}
          aria-label="Ask Arjuna about this page"
          title="Ask Arjuna"
        >
          <span className="ask-arjuna-fab__avatar" aria-hidden>
            <MascotAvatar avatar="arjuna-guru" size={36} compact />
          </span>
          <span className="ask-arjuna-fab__label">Ask Arjuna</span>
        </button>
      )}
      <AskTeacher
        open={askOpen}
        onClose={closeAsk}
        anchored
        lesson={lesson}
        card={card}
      />
    </>
  );
}
