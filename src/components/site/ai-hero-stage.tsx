'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';

type Props = { src: string; label: string; pause: string; play: string; note: ReactNode; sim: ReactNode };

const noop = () => () => {};
const wantsVideo = () => new URLSearchParams(window.location.search).get('hero') === 'video';

/**
 * The AI page's hero stage. By default it is the simulation the visitor can click through.
 * With ?hero=video in the address it shows the lead video instead (the same conversation,
 * filmed), so the two can be compared on the preview before one is kept.
 */
export function AiHeroStage({ src, label, pause, play, note, sim }: Props) {
  const video = useSyncExternalStore(noop, wantsVideo, () => false);
  if (!video) return <>{note}{sim}</>;
  return <LeadVideo src={src} label={label} pause={pause} play={play} />;
}

/**
 * A wide silent loop of a whole conversation. It plays while it is on screen; the whole video is
 * the button that stops and restarts it (WCAG 2.2.2). With reduced motion it does not start on
 * its own and shows its last frame.
 */
function LeadVideo({ src, label, pause, play }: Omit<Props, 'note' | 'sim'>) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.dataset.held = '1';
      const raf = requestAnimationFrame(() => { setStopped(true); setStill(true); });
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !v.dataset.held) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.4 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { delete v.dataset.held; setStopped(false); v.play().catch(() => {}); }
    else { v.dataset.held = '1'; setStopped(true); v.pause(); }
  };

  return (
    <button type="button" className="topic-video lead-video" onClick={toggle} aria-label={`${label}. ${playing ? pause : play}`} data-stopped={stopped || undefined}>
      <video
        ref={ref}
        src={`${src}.mp4`}
        poster={still ? `${src}.webp` : undefined}
        muted
        loop
        playsInline
        preload="auto"
        width={1280}
        height={720}
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <svg className="topic-video-play" viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 4.2v11.6a.8.8 0 0 0 1.2.7l9.3-5.8a.8.8 0 0 0 0-1.4L7.7 3.5a.8.8 0 0 0-1.2.7Z" /></svg>
    </button>
  );
}
