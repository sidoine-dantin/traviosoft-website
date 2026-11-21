/**
 * A long answer reads as a wall of text in a narrow column, so it is shown one idea per paragraph:
 * a paragraph over about two lines is split between its sentences. A very short opener ("Yes.",
 * "No.") stays with the sentence that explains it.
 */
const SENTENCE_END = /(?<=[\p{Ll}\d)%»”’*]\.|[?!])\s+(?=[\p{Lu}¿¡«“0-9])/u;
export function breathe(text: string): string[] {
  if (text.length <= 140) return [text];
  const out: string[] = [];
  let carry = '';
  for (const s of text.split(SENTENCE_END)) {
    const cur = carry ? `${carry} ${s}` : s;
    if (cur.length < 40) { carry = cur; continue; }
    out.push(cur);
    carry = '';
  }
  if (carry) out.length ? (out[out.length - 1] += ` ${carry}`) : out.push(carry);
  return out;
}
