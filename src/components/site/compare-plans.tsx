import type { CompareCell, CompareSection } from '@/content/types';

type Props = {
  sections: CompareSection[];
  labels: { feature: string; yes: string; no: string };
  names: [string, string];
  note: string[];
};

function Cell({ v, labels }: { v: CompareCell; labels: Props['labels'] }) {
  if (v === false) {
    return (
      <span className="cmp-cell">
        <svg className="cmp-no" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10" /></svg>
        <span className="sr-only">{labels.no}</span>
      </span>
    );
  }
  if (typeof v === 'object' && v.option) {
    // offered on top of the plan, not included: an open circle, never the filled tick
    return (
      <span className="cmp-cell">
        <svg className="cmp-opt" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.25" /><path d="M12 7.5v9M7.5 12h9" /></svg>
        <span className="cmp-detail">{v.text}</span>
      </span>
    );
  }
  return (
    <span className="cmp-cell">
      <svg className="cmp-yes" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
      {v === true ? (
        <span className="sr-only">{labels.yes}</span>
      ) : typeof v === 'string' ? (
        <span className="cmp-detail">{v}</span>
      ) : (
        <span className="cmp-detail">{v.was && <><s className="cmp-was">{v.was}</s>{' '}</>}{v.text}</span>
      )}
    </span>
  );
}

/** Feature-by-feature comparison of the two plans, grouped by job. */
export function ComparePlans({ sections, labels, names, note }: Props) {
  return (
    <div className="cmp">
      <div className="cmp-head" aria-hidden="true">
        <span>{labels.feature}</span><span>{names[0]}</span><span>{names[1]}</span>
      </div>
      {sections.map(s => (
        <table key={s.title} className="cmp-table">
          <caption>{s.title}</caption>
          <thead className="sr-only">
            <tr><th scope="col">{labels.feature}</th><th scope="col">{names[0]}</th><th scope="col">{names[1]}</th></tr>
          </thead>
          <tbody>
            {s.rows.map(r => (
              <tr key={r.f}>
                <th scope="row">{r.f}</th>
                <td><Cell v={r.classic} labels={labels} /></td>
                <td><Cell v={r.premium} labels={labels} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
      <div className="cmp-note">{note.map(n => <p key={n}>{n}</p>)}</div>
    </div>
  );
}
