'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { src: string; label: string; pause: string; play: string };

/**
 * A short silent loop of the app for one topic. It loads only when it comes near the screen,
 * plays while its topic crosses the middle of the screen and stops when it leaves, so only one plays at a time. There is no visible control: the whole
 * video is the button, so a click, a tap, or Enter/Space on the keyboard stops or restarts it
 * (WCAG 2.2.2). A small play sign shows only while it is stopped. With reduced motion it does
 * not start on its own and shows its last frame. Otherwise there is no poster: the video opens on
 * the empty page colour and builds up, so no finished screen flashes before it starts.
 */
export function TopicVideo({ src, label, pause, play }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(false); // the visitor stopped it, or asked for reduced motion
  const [still, setStill] = useState(false); // reduced motion: show the finished screen instead

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.dataset.held = '1'; const raf = requestAnimationFrame(() => { setStopped(true); setStill(true); }); return () => cancelAnimationFrame(raf); }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !v.dataset.held) v.play().catch(() => {});
      else v.pause();
    }, { rootMargin: '-50% 0px -50% 0px' }); // only one thing crosses the middle line, so one video plays at a time
    // On a product page the video plays while its topic crosses the middle of the screen (the topic
    // being read); elsewhere while the video itself does.
    io.observe(v.closest('.explorer-topic') ?? v);
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
        poster={still ? `${src}.webp` : undefined}
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
