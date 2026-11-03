/** Plain-text key facts: the same facts as the structured data, for readers and AI answers. */
export function KeyFacts({ facts }: { facts: { k: string; v: string }[] }) {
  return (
    <dl className="facts">
      {facts.map(f => (
        <div key={f.k}>
          <dt>{f.k}</dt>
          <dd>{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}
