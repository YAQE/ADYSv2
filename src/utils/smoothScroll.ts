/** Sayfayı kaydıran öğe (html/body uyumu) */
export function getScrollingElement(): HTMLElement {
  const se = document.scrollingElement;
  if (se instanceof HTMLElement) return se;
  return document.documentElement;
}

export function getScrollY(): number {
  const el = getScrollingElement();
  return el.scrollTop ?? window.scrollY ?? 0;
}

export function setScrollY(y: number): void {
  const el = getScrollingElement();
  el.scrollTop = y;
  window.scrollTo(0, y);
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let scrollAnimGeneration = 0;

/**
 * Belirli bir dikey konuma yumuşak kaydırma (window.scrollTo yerine scrollingElement).
 */
export function smoothScrollToY(targetY: number, durationMs: number, onDone?: () => void): void {
  scrollAnimGeneration += 1;
  const gen = scrollAnimGeneration;

  const el = getScrollingElement();
  const startY = getScrollY();
  const maxY = Math.max(0, el.scrollHeight - window.innerHeight);
  const endY = Math.min(maxY, Math.max(0, targetY));
  const delta = endY - startY;
  if (Math.abs(delta) < 1) {
    onDone?.();
    return;
  }

  const t0 = performance.now();

  const step = (now: number) => {
    if (gen !== scrollAnimGeneration) return;
    const t = Math.min(1, (now - t0) / durationMs);
    const eased = easeInOutCubic(t);
    const y = startY + delta * eased;
    setScrollY(y);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  };

  requestAnimationFrame(step);
}

/** Sayfa en üstü (ScrollToTop butonu). */
export function smoothScrollToTop(durationMs: number): void {
  smoothScrollToY(0, durationMs);
}

/** #id öğesine kadar kaydır (üst boşluk için offset). */
export function smoothScrollToElement(
  el: Element,
  durationMs: number,
  offsetPx = 0,
  onDone?: () => void
): void {
  const rect = el.getBoundingClientRect();
  const y = rect.top + getScrollY() - offsetPx;
  smoothScrollToY(y, durationMs, onDone);
}
