import { notFound } from 'next/navigation';

// Any address under a language that no page answers: render the site's own
// not-found page (../not-found.tsx) inside the normal header and footer.
export default function CatchAll() {
  notFound();
}
