import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { getScrollY, smoothScrollToTop } from '../utils/smoothScroll';

const SCROLL_TO_TOP_DURATION_MS = 2500;
const SHOW_AFTER_SCROLL_PX = 260;

const ScrollToTop: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(getScrollY() > SHOW_AFTER_SCROLL_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    smoothScrollToTop(SCROLL_TO_TOP_DURATION_MS);
  };

  if (!mounted) return null;

  return createPortal(
    visible ? (
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto fixed bottom-3 right-3 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-blue-600/90 text-white shadow-lg backdrop-blur-sm transition-[transform,background-color,box-shadow] duration-200 hover:scale-[1.06] hover:bg-blue-500 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 max-[480px]:bottom-[max(0.5rem,env(safe-area-inset-bottom,0px))] max-[480px]:right-2 md:bottom-4 md:right-4"
        aria-label="Sayfanın en üstüne çık"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    ) : null,
    document.body
  );
};

export default ScrollToTop;
