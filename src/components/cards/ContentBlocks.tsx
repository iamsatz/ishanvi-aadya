import { renderWithGlossary } from '../../lib/renderWithGlossary';
import { CaseStudyTable } from './CaseStudyTable';
import type { ContentBlock, GlossaryEntry } from '../../types/content';

interface Props {
  blocks: ContentBlock[];
  glossary?: GlossaryEntry[];
  cardId: string;
}

export function ContentBlocks({ blocks, glossary, cardId }: Props) {
  return (
    <div className="content-blocks">
      {blocks.map((block, i) => {
        if (block.type === 'topic') {
          return (
            <section className="topic-block" key={`${cardId}-topic-${i}`}>
              {block.icon && (
                <span className="topic-block__icon" aria-hidden>{block.icon}</span>
              )}
              <div className="topic-block__body">
                <h2 className="topic-block__title">{block.title}</h2>
                <div className="topic-block__text">
                  {renderWithGlossary(block.body, glossary, `${cardId}-b${i}`)}
                </div>
              </div>
            </section>
          );
        }

        if (block.type === 'face-place-table') {
          return (
            <FacePlaceTable key={`${cardId}-table-${i}`} block={block} />
          );
        }

        if (block.type === 'case-study-table') {
          return <CaseStudyTable key={`${cardId}-cs-${i}`} block={block} />;
        }

        if (block.type === 'system-compare') {
          return (
            <div className="system-compare" key={`${cardId}-sys-${i}`}>
              <p className="system-compare__number">{block.number}</p>
              <div className="system-compare__cols">
                <div className="system-compare__col">
                  <span className="system-compare__label">🇮🇳 Indian</span>
                  <span className="system-compare__value">{block.indian}</span>
                </div>
                <div className="system-compare__col">
                  <span className="system-compare__label">🌍 International</span>
                  <span className="system-compare__value">{block.international}</span>
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

function FacePlaceTable({ block }: { block: Extract<ContentBlock, { type: 'face-place-table' }> }) {
  return (
    <section className="face-place-table" aria-label={`Face and place value for ${block.display}`}>
      <p className="face-place-table__lead">
        Look at this <strong>4-digit number</strong>:
      </p>
      <p className="face-place-table__number" aria-hidden>{block.display}</p>

      <div className="face-place-table__wrap">
        <table className="face-place-table__grid">
          <thead>
            <tr>
              <th scope="col" className="face-place-table__corner" />
              {block.places.map((place, ci) => (
                <th
                  key={place}
                  scope="col"
                  className={
                    'face-place-table__place' +
                    (block.highlightIndex === ci ? ' face-place-table__col--hi' : '')
                  }
                >
                  {place}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="face-place-table__row-label">Digit</th>
              {block.digits.map((d, ci) => (
                <td
                  key={`d-${ci}`}
                  className={
                    'face-place-table__digit' +
                    (block.highlightIndex === ci ? ' face-place-table__col--hi' : '')
                  }
                >
                  {d}
                </td>
              ))}
            </tr>
            <tr className="face-place-table__row--face">
              <th scope="row" className="face-place-table__row-label">
                <span className="face-place-table__tag">👀</span> Face value
              </th>
              {block.faceValues.map((v, ci) => (
                <td
                  key={`f-${ci}`}
                  className={
                    'face-place-table__cell' +
                    (block.highlightIndex === ci ? ' face-place-table__col--hi' : '')
                  }
                >
                  {v}
                </td>
              ))}
            </tr>
            <tr className="face-place-table__row--place">
              <th scope="row" className="face-place-table__row-label">
                <span className="face-place-table__tag">💪</span> Place value
              </th>
              {block.placeValues.map((v, ci) => (
                <td
                  key={`p-${ci}`}
                  className={
                    'face-place-table__cell face-place-table__cell--place' +
                    (block.highlightIndex === ci ? ' face-place-table__col--hi' : '')
                  }
                >
                  {v}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="face-place-table__note">
        Face value = what the digit <em>looks</em> like. Place value = what it is <em>worth</em> in that seat.
        {block.highlightIndex != null && (
          <> The highlighted column shows digit <strong>{block.digits[block.highlightIndex]}</strong>.</>
        )}
      </p>
    </section>
  );
}
