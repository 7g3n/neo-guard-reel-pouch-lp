/** ヘッダー高さを考慮して指定IDの要素までスムーズスクロールする。 */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  el.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start',
  });
}
