'use client';

import { useRef, useState, KeyboardEvent } from 'react';

type Step = { name: string; title: string; description: string; before: string; after: string };

/**
 * The request-to-invoice journey as an interactive stepper: one step on screen
 * at a time, with a list of short step names to switch between them (vertical on
 * desktop, a horizontal rail on mobile). Implemented as an ARIA tablist so it is
 * keyboard navigable.
 */
export function JourneyStepper({
  steps,
  beforeLabel,
  afterLabel,
  label
}: {
  steps: Step[];
  beforeLabel: string;
  afterLabel: string;
  label: string;
}) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function move(to: number) {
    const next = (to + steps.length) % steps.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      move(active + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      move(active - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      move(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      move(steps.length - 1);
    }
  }

  const step = steps[active];

  return (
    <div className="journey-stepper">
      <div
        role="tablist"
        aria-label={label}
        aria-orientation="vertical"
        className="journey-nav"
        onKeyDown={onKeyDown}
      >
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              ref={el => { tabsRef.current[i] = el; }}
              role="tab"
              id={`journey-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`journey-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`journey-tab${isActive ? ' is-active' : ''}`}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`journey-panel-${active}`}
        aria-labelledby={`journey-tab-${active}`}
        key={active}
        className="journey-panel"
      >
        <h3 className="journey-panel__title">{step.title}</h3>
        <p className="journey-panel__desc">{step.description}</p>
        <div className="journey-panel__ba">
          <div className="journey-ba journey-ba--before">
            <p className="journey-ba__label">{beforeLabel}</p>
            <p className="journey-ba__text">{step.before}</p>
          </div>
          <div className="journey-ba journey-ba--after">
            <p className="journey-ba__label">{afterLabel}</p>
            <p className="journey-ba__text">{step.after}</p>
          </div>
        </div>
      </div>

      <style>{`
        .journey-stepper {
          display: grid;
          grid-template-columns: minmax(0, 15rem) minmax(0, 1fr);
          gap: clamp(1.5rem, 4vw, 3.5rem);
          align-items: start;
        }
        .journey-nav {
          display: flex; flex-direction: column; gap: 0.25rem;
          border-left: 1px solid var(--color-border);
          padding-left: 0.75rem;
        }
        .journey-tab {
          width: 100%; text-align: left;
          padding: 0.75rem 1rem;
          border: none; border-radius: 8px;
          background: transparent; cursor: pointer;
          font-size: 1rem; font-weight: 500; line-height: 1.3;
          color: var(--color-muted);
          transition: background-color 0.18s ease-out, color 0.18s ease-out;
        }
        .journey-tab:hover { background-color: var(--color-surface); color: var(--color-ink); }
        .journey-tab.is-active {
          background-color: var(--color-primary);
          color: white;
          font-weight: 600;
        }
        .journey-tab:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }

        .journey-panel {
          min-width: 0;
          animation: journey-in 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .journey-panel__title {
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(1.5rem, 2.6vw, 2.125rem);
          font-weight: 400; color: var(--color-ink);
          letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 1rem;
          text-wrap: balance;
        }
        .journey-panel__desc {
          font-size: 1.0625rem; color: var(--color-ink);
          line-height: 1.7; margin-bottom: 2rem; max-width: 60ch;
        }
        .journey-panel__ba {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }
        .journey-ba { padding: 1.25rem 1.375rem; border-radius: 10px; }
        .journey-ba--before {
          background-color: oklch(0.945 0.028 40);
          border: 1px solid oklch(0.90 0.040 40);
        }
        .journey-ba--after {
          background-color: oklch(0.935 0.045 132);
          border: 1px solid oklch(0.88 0.060 132);
        }
        .journey-ba__label {
          font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.10em;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .journey-ba--before .journey-ba__label { color: oklch(0.48 0.110 38); }
        .journey-ba--after .journey-ba__label { color: var(--color-primary); }
        .journey-ba__text { font-size: 0.9375rem; line-height: 1.6; margin: 0; }
        .journey-ba--before .journey-ba__text { color: oklch(0.36 0.040 38); }
        .journey-ba--after .journey-ba__text { color: oklch(0.26 0.060 132); }

        @keyframes journey-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 760px) {
          .journey-stepper { grid-template-columns: 1fr; }
          .journey-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
            border-left: none;
            padding-left: 0;
            padding-bottom: 0.5rem;
          }
          .journey-tab {
            width: auto;
            flex-shrink: 0;
            padding: 0.5rem 0.875rem;
            font-size: 0.9375rem;
            border: 1px solid var(--color-border);
          }
          .journey-tab.is-active { border-color: var(--color-primary); }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-panel { animation: none; }
        }
      `}</style>
    </div>
  );
}
