import { Link } from '@/i18n/navigation';

/** The traviosoft wordmark: lowercase Bricolage + yellow disc with a dotted route. */
export function Mark() {
  return (
    <svg viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="14" fill="#E0F354" />
      <path d="M8 20c3-9 11-11 14-10" stroke="#015D47" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeDasharray="1 4.5" />
      <circle cx="22" cy="10" r="3" fill="#015D47" />
    </svg>
  );
}

export function Logo({ color }: { color?: string }) {
  return (
    <Link href="/" className="wm" style={color ? { color } : undefined} aria-label="Traviosoft">
      <Mark />
      traviosoft
    </Link>
  );
}
