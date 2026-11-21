/**
 * The drop that marks the current topic beside a product page's title.
 *
 * While the visitor scrolls inside a topic, the drop only stretches towards the dot it is heading
 * for (the next one when scrolling down, the previous one when scrolling up), and it stays in one
 * piece. It moves only when the topic really changes: then it flows to the new dot and lands with
 * a small bounce.
 *
 * Every value is a spring that chases its target, so the motion can be reversed at any moment: if
 * the visitor turns back halfway, the drop turns back from where it is, without finishing first.
 * With reduced motion the drop goes straight to its target.
 */

export const DOT_STEP = 30; // the dots' spacing (.explorer-dots a height)
export const DOT_Y = 15; // the centre of a dot in its row
const REACH = 14; // how far the drop can stretch without breaking (px)

type Spring = { x: number; v: number; to: number; k: number; c: number };
const spring = (x: number, k: number, c: number): Spring => ({ x, v: 0, to: x, k, c });

export class Drop {
  private main: SVGCircleElement;
  private neck: SVGCircleElement;
  private tail: SVGCircleElement;
  // where the drop sits (in dots), the trailing end that follows it, and the stretch (-1 up, 1 down)
  private pos = spring(0, 210, 17); // a touch of overshoot: the landing bounce
  private trail = spring(0, 95, 19); // slower, so the drop is drawn out while it travels
  private pull = spring(0, 420, 40); // quick and without overshoot: follows the scroll closely
  private raf = 0;
  private last = 0;
  private still: boolean;
  private placed = false; // the first position is taken at once, not animated from the top

  constructor(g: SVGGElement, index: number) {
    [this.main, this.neck, this.tail] = Array.from(g.querySelectorAll('circle'));
    this.pos = spring(index, 210, 17);
    this.trail = spring(index, 95, 19);
    this.still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.draw();
  }

  /** The current topic, and how far the drop is stretched towards the next (+) or previous (-) dot, from -1 to 1. */
  set(index: number, stretch: number) {
    this.pos.to = index;
    this.trail.to = index;
    this.pull.to = Math.max(-1, Math.min(1, stretch));
    if (this.still || !this.placed) {
      this.placed = true;
      for (const s of [this.pos, this.trail, this.pull]) { s.x = s.to; s.v = 0; }
      this.draw();
      return;
    }
    if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(this.tick); }
  }

  destroy() { cancelAnimationFrame(this.raf); this.raf = 0; }

  private tick = (now: number) => {
    const dt = Math.min(0.032, (now - this.last) / 1000);
    this.last = now;
    let moving = false;
    for (const s of [this.pos, this.trail, this.pull]) {
      s.v += (s.k * (s.to - s.x) - s.c * s.v) * dt;
      s.x += s.v * dt;
      if (Math.abs(s.to - s.x) > 0.001 || Math.abs(s.v) > 0.01) moving = true;
      else { s.x = s.to; s.v = 0; }
    }
    this.draw();
    this.raf = moving ? requestAnimationFrame(this.tick) : 0;
  };

  private draw() {
    const head = DOT_Y + this.pos.x * DOT_STEP;
    const p = this.pull.x;
    const e = Math.sign(p) * p * p; // stretches gently at first, then more
    // the trailing end: behind the head while travelling, ahead of it when pulled by the scroll
    const end = DOT_Y + this.trail.x * DOT_STEP + e * REACH;
    const gap = Math.min(1, Math.abs(end - head) / (DOT_STEP * 0.8));
    this.main.setAttribute('cy', (head + e * 2).toFixed(2));
    this.main.setAttribute('r', (7 - 0.8 * gap).toFixed(2));
    this.tail.setAttribute('cy', end.toFixed(2));
    this.tail.setAttribute('r', (5 - 0.8 * gap).toFixed(2));
    this.neck.setAttribute('cy', ((head + end) / 2).toFixed(2));
    this.neck.setAttribute('r', (5 - 1.6 * gap).toFixed(2));
  }
}
