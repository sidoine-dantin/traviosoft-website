'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { src: string; label: string; pause: string; play: string };

/**
 * A short silent loop of the app for one topic. It loads only when it comes near the screen,
 * plays while it is in view and stops when it leaves. There is no visible control: the whole
 * video is the button, so a click, a tap, or Enter/Space on the keyboard stops or restarts it
 * (WCAG 2.2.2). A small play sign shows only while it is stopped. With reduced motion it does
 * not start on its own and shows its last frame.
 */
export function TopicVideo({ src, label, pause, play }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(false); // the visitor stopped it, or asked for reduced motion

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.dataset.held = '1'; setStopped(true); return; }
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
    <button type="button" className="topic-video" onClick={toggle} aria-label={`${label}. ${playing ? pause : play}`} data-stopped={stopped || undefined}>
      <video
        ref={ref}
        src={`${src}.mp4`}
        poster={`${src}.webp`}
        muted
        loop
        playsInline
        preload="none"
        width={720}
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
