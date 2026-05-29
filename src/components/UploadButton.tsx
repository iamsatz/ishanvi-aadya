import { useStore } from '../state/store';
import { parsePdfFile, parseImageFile } from '../lib/pdfParser';

export function UploadButton() {
  const addLesson = useStore((s) => s.addLesson);

  async function onPdf(e: React.ChangeEvent<HTMLInputElement>) {
    // 🔌 Plug a real PDF parser into src/lib/pdfParser.ts.
    for (const f of Array.from(e.target.files ?? [])) {
      addLesson(await parsePdfFile(f));
    }
    e.target.value = '';
  }

  async function onImg(e: React.ChangeEvent<HTMLInputElement>) {
    for (const f of Array.from(e.target.files ?? [])) {
      addLesson(await parseImageFile(f));
    }
    e.target.value = '';
  }

  return (
    <>
      <label className="upload-btn">
        + PDFs
        <input type="file" accept="application/pdf" multiple onChange={onPdf} />
      </label>
      <label className="upload-btn">
        + Images
        <input type="file" accept="image/*" multiple onChange={onImg} />
      </label>
    </>
  );
}
