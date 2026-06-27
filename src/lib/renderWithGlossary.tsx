import type { ReactNode } from 'react';
import { WordTip } from '../components/WordTip';
import type { GlossaryEntry } from '../types/content';

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Render text with glossary words wrapped in WordTip components.
 * - Splits on \n\n into paragraphs (<p>)
 * - Within a paragraph, \n becomes <br/>
 * - Glossary matches are case-insensitive, whole-word, first occurrence per chunk.
 */
export function renderWithGlossary(
  text: string,
  glossary: GlossaryEntry[] | undefined,
  keyPrefix = 't'
): ReactNode[] {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, pi) => (
    <p key={`${keyPrefix}-p${pi}`}>
      {para.split('\n').map((line, li, arr) => (
        <span key={`${keyPrefix}-l${pi}-${li}`}>
          {wrapGlossary(line, glossary, `${keyPrefix}-${pi}-${li}`)}
          {li < arr.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  ));
}

/**
 * Split a line on **bold** markers, wrapping bold runs in <strong> and
 * passing plain runs through glossary wrapping.
 */
function wrapGlossary(
  line: string,
  glossary: GlossaryEntry[] | undefined,
  keyPrefix: string
): ReactNode[] {
  const boldRe = /\*\*([^*]+)\*\*/g;
  const out: ReactNode[] = [];
  let last = 0;
  let b = 0;
  let mb: RegExpExecArray | null;

  while ((mb = boldRe.exec(line)) !== null) {
    if (mb.index > last) {
      out.push(...wrapPlain(line.slice(last, mb.index), glossary, `${keyPrefix}-b${b}pre`));
    }
    out.push(
      <strong key={`${keyPrefix}-b${b}`}>
        {wrapPlain(mb[1], glossary, `${keyPrefix}-b${b}in`)}
      </strong>
    );
    last = mb.index + mb[0].length;
    b++;
  }
  if (last < line.length) {
    out.push(...wrapPlain(line.slice(last), glossary, `${keyPrefix}-b${b}post`));
  }
  return out;
}

function wrapPlain(
  line: string,
  glossary: GlossaryEntry[] | undefined,
  keyPrefix: string
): ReactNode[] {
  if (!line) return [];
  if (!glossary || glossary.length === 0) return [line];

  const words = glossary.map((g) => escapeRegex(g.word));
  const re = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = re.exec(line)) !== null) {
    if (m.index > lastIndex) parts.push(line.slice(lastIndex, m.index));
    const matched = m[1];
    const entry = glossary.find(
      (g) => g.word.toLowerCase() === matched.toLowerCase()
    );
    if (entry) {
      parts.push(
        <WordTip
          key={`${keyPrefix}-w${i++}`}
          word={matched}
          en={entry.en}
          te={entry.te}
        />
      );
    } else {
      parts.push(matched);
    }
    lastIndex = m.index + matched.length;
  }
  if (lastIndex < line.length) parts.push(line.slice(lastIndex));
  return parts;
}
