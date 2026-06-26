import { useStore } from '../state/store';
import { PinGate } from './PinGate';
import { ParentUpload } from './ParentUpload';
import { SubjectIndexEditor } from './SubjectIndexEditor';
import { FeedbackPanel } from './FeedbackPanel';
import { AskTeacher } from './AskTeacher';
import { SettingsPanel } from './SettingsPanel';

/** PIN + upload/index/feedback modals — opened from nav menu. */
export function HomeworkUploadHost() {
  const pinGateOpen = useStore((s) => s.pinGateOpen);
  const pinPurpose = useStore((s) => s.pinPurpose);
  const uploadOpen = useStore((s) => s.uploadOpen);
  const indexEditorOpen = useStore((s) => s.indexEditorOpen);
  const feedbackOpen = useStore((s) => s.feedbackOpen);
  const closePinGate = useStore((s) => s.closePinGate);
  const openUploadModal = useStore((s) => s.openUploadModal);
  const openIndexEditor = useStore((s) => s.openIndexEditor);
  const closeUploadModal = useStore((s) => s.closeUploadModal);
  const closeIndexEditor = useStore((s) => s.closeIndexEditor);
  const closeFeedback = useStore((s) => s.closeFeedback);
  const askOpen = useStore((s) => s.askOpen);
  const closeAsk = useStore((s) => s.closeAsk);
  const settingsOpen = useStore((s) => s.settingsOpen);
  const openSettings = useStore((s) => s.openSettings);
  const closeSettings = useStore((s) => s.closeSettings);
  const setParentMode = useStore((s) => s.setParentMode);
  const refreshLessons = useStore((s) => s.refreshLessons);

  function onPinSuccess() {
    if (pinPurpose === 'upload') openUploadModal();
    else if (pinPurpose === 'index') openIndexEditor();
    else if (pinPurpose === 'settings') { closePinGate(); openSettings(); }
    else {
      closePinGate();
      setParentMode(true);
    }
  }

  const pinTitle =
    pinPurpose === 'upload' ? 'Parent PIN — Homework'
    : pinPurpose === 'index' ? 'Parent PIN — Subject index'
    : pinPurpose === 'settings' ? 'Parent PIN — Settings'
    : 'Parent PIN';

  return (
    <>
      <PinGate
        open={pinGateOpen}
        title={pinTitle}
        onSuccess={onPinSuccess}
        onCancel={closePinGate}
      />
      <ParentUpload
        open={uploadOpen}
        onClose={closeUploadModal}
        onSaved={() => refreshLessons()}
      />
      <SubjectIndexEditor
        open={indexEditorOpen}
        onClose={closeIndexEditor}
        onSaved={() => refreshLessons()}
      />
      <FeedbackPanel open={feedbackOpen} onClose={closeFeedback} />
      <AskTeacher open={askOpen} onClose={closeAsk} />
      <SettingsPanel open={settingsOpen} onClose={closeSettings} />
    </>
  );
}
