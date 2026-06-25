import type { CaseStudyTableBlock } from '../../types/content';

interface Props {
  block: CaseStudyTableBlock;
}

export function CaseStudyTable({ block }: Props) {
  return (
    <figure className="case-study-table">
      {block.caption && (
        <figcaption className="case-study-table__caption">{block.caption}</figcaption>
      )}
      <div className="case-study-table__wrap">
        <table className="case-study-table__grid">
          <thead>
            <tr>
              {block.headers.map((h) => (
                <th key={h} scope="col">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
