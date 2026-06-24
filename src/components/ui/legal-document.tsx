type LegalSection = { heading: string; body: string[] };

/**
 * Renders a legal document (privacy policy, terms) as a readable long-form
 * page: a display title, a last-updated line, an intro, then headed sections.
 * Content comes from the `legal` translation namespace so it stays trilingual.
 */
export function LegalDocument({
  title,
  updatedLabel,
  updatedDate,
  intro,
  sections
}: {
  title: string;
  updatedLabel: string;
  updatedDate: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article>
      <h1 style={{
        fontFamily: 'var(--font-display, Georgia, serif)',
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: 400, color: 'var(--color-ink)',
        letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.2
      }}>
        {title}
      </h1>

      <p style={{
        fontSize: '0.8125rem', color: 'var(--color-muted)',
        marginBottom: '2.5rem'
      }}>
        {updatedLabel}: {updatedDate}
      </p>

      <p style={{
        fontSize: '1.0625rem', color: 'var(--color-ink)',
        lineHeight: 1.7, marginBottom: '3rem'
      }}>
        {intro}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem' }}>
        {sections.map((section, i) => (
          <section key={i}>
            <h2 style={{
              fontSize: '1.0625rem', fontWeight: 600,
              color: 'var(--color-ink)', marginBottom: '0.875rem',
              lineHeight: 1.3
            }}>
              {section.heading}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {section.body.map((paragraph, j) => (
                <p key={j} style={{
                  fontSize: '0.9375rem', color: 'var(--color-muted)',
                  lineHeight: 1.8, margin: 0
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
