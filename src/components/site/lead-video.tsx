'use client';

import { useEffect, useRef, useState } from 'react';

/** Seconds into the film where the opening still is taken (public/videos/<l>/ai-lead[-m]-start.webp). */
const START = 0.75;

type Props = { src: string; label: string; pause: string; play: string; shape: 'wide' | 'phone' };

/**
 * The AI page's lead video: a whole conversation with the assistant, filmed on the page's green.
 * Two cuts of it share the hero (wide for computers, vertical with larger text for phones); CSS shows
 * one, and only the one on screen loads and plays. It sits at the top of the page, so it shows a
 * still of its opening (an empty chat, about to be written in) at once, then plays from that
 * same moment as soon as any of it is on screen. The whole video is the button that stops and
 * restarts it (WCAG 2.2.2). With reduced motion it does not start on its own and shows its last frame.
 */
export function LeadVideo({ src, label, pause, play, shape }: Props) {
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
    // A hidden cut (display: none) never intersects, so it never loads.
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !v.dataset.held) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0 });
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
    <button type="button" className={`lead-video ${shape}`} onClick={toggle} aria-label={`${label}. ${playing ? pause : play}`} data-stopped={stopped || undefined}>
      <video
        ref={ref}
        src={`${src}.mp4`}
        poster={still ? `${src}.webp` : `${src}-start.webp`}
        muted
        loop
        playsInline
        preload="none"
        onLoadedMetadata={(e) => { const v = e.currentTarget; if (!v.dataset.started) { v.dataset.started = '1'; if (!still) v.currentTime = START; } }}
        width={shape === 'wide' ? 1280 : 720}
        height={shape === 'wide' ? 720 : 960}
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <svg className="topic-video-play" viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 4.2v11.6a.8.8 0 0 0 1.2.7l9.3-5.8a.8.8 0 0 0 0-1.4L7.7 3.5a.8.8 0 0 0-1.2.7Z" /></svg>
    </button>
  );
}
