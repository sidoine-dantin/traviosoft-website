import type { CSSProperties, ReactNode } from 'react';
import shotsManifest from '@/lib/shots-manifest.json';

const available = new Set<string>(shotsManifest as string[]);

/** True when public/shots/<file> existed at build time. */
export function hasShot(file: string): boolean {
  return available.has(file);
}

type Ratio = `${number} / ${number}`;

/**
 * Neutral frame shown while a visual is missing: a grey box that says what
 * belongs there and which file to drop in public/shots/. Deliberately plain so
 * it can't be mistaken for a design choice; art direction comes later.
 */
export function MediaPlaceholder({
  label,
  file,
  ratio = '16 / 10',
  icon,
  style
}: {
  label: string;
  file: string;
  ratio?: Ratio;
  icon?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      data-placeholder={file}
      style={{
        aspectRatio: ratio,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '1.5rem',
        textAlign: 'center',
        backgroundColor: 'oklch(0.94 0.004 118)',
        border: '1.5px dashed oklch(0.80 0.006 118)',
        borderRadius: '8px',
        color: 'oklch(0.42 0.010 118)',
        ...style
      }}
    >
      {icon}
      <span style={{ fontSize: '0.9375rem', fontWeight: 600, lineHeight: 1.4 }}>{label}</span>
      <code style={{ fontSize: '0.75rem', color: 'oklch(0.50 0.010 118)' }}>public/shots/{file}</code>
    </div>
  );
}

/**
 * A product screenshot slot. Renders public/shots/<file> when it exists,
 * otherwise a labelled placeholder of the same proportions.
 */
export function ProductShot({
  file,
  label,
  alt,
  ratio = '16 / 10',
  priority = false,
  style
}: {
  /** File name inside public/shots/. */
  file: string;
  /** Placeholder text, e.g. "Screenshot: quote PDF". */
  label: string;
  /** Alt text for the real image. Defaults to the label. */
  alt?: string;
  ratio?: Ratio;
  priority?: boolean;
  style?: CSSProperties;
}) {
  if (!hasShot(file)) {
    return <MediaPlaceholder label={label} file={file} ratio={ratio} style={style} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static file, no optimizer on Workers
    <img
      src={`/shots/${file}`}
      alt={alt ?? label}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        aspectRatio: ratio,
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'top center',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        boxShadow: '0 8px 32px oklch(0.13 0.015 118 / 0.12)',
        ...style
      }}
    />
  );
}

/**
 * The product video slot. Renders public/shots/<file> as a native video when it
 * exists (poster optional), otherwise a labelled placeholder.
 */
export function VideoSlot({
  file,
  poster,
  label,
  title
}: {
  file: string;
  poster?: string;
  label: string;
  title: string;
}) {
  if (!hasShot(file)) {
    return (
      <MediaPlaceholder
        label={label}
        file={file}
        ratio="16 / 9"
        icon={
          <svg aria-hidden width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8.5v7l6-3.5z" fill="currentColor" stroke="none" />
          </svg>
        }
      />
    );
  }

  return (
    <video
      controls
      preload="none"
      playsInline
      poster={poster && hasShot(poster) ? `/shots/${poster}` : undefined}
      title={title}
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        display: 'block',
        borderRadius: '8px',
        backgroundColor: 'var(--color-ink)'
      }}
    >
      <source src={`/shots/${file}`} type="video/mp4" />
    </video>
  );
}
