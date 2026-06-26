import { useStore } from '../state/store';
import { PinGate } from './PinGate';
import { ParentUpload } from './ParentUpload';
import { fetchCloudHomework } from '../lib/homeworkCloud';

/** PIN + upload modals — opened from nav menu or top bar. */
export function HomeworkUploadHost() {
  const pinGateOpen = useStore((s) => s.pinGateOpen);
  const pinPurpose = useStore((s) => s.pinPurpose);
  const uploadOpen = useStore((s) => s.uploadOpen);
  const closePinGate = useStore((s) => s.closePinGate);
  const openUploadModal = useStore((s) => s.openUploadModal);
  const closeUploadModal = useStore((s) => s.closeUploadModal);
  const setParentMode = useStore((s) => s.setParentMode);
  const mergeCloudLessons = useStore((s) => s.mergeCloudLessons);

  function onPinSuccess() {
    if (pinPurpose === 'upload') {
      openUploadModal();
    } else {
      closePinGate();
      setParentMode(true);
    }
  }

  async function onUploadSaved() {
    const cloud = await fetchCloudHomework();
    mergeCloudLessons(cloud);
  }

  return (
    <>
      <PinGate
        open={pinGateOpen}
        title={pinPurpose === 'upload' ? 'Parent PIN — Upload' : 'Parent PIN'}
        onSuccess={onPinSuccess}
        onCancel={closePinGate}
      />
      <ParentUpload
        open={uploadOpen}
        onClose={closeUploadModal}
        onSaved={onUploadSaved}
      />
    </>
  );
}
