import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getWeeklyContent } from '../data/weeklyContent';

const weeklyDescriptionMarkdownComponents = {
  p: ({ children }: React.ComponentProps<'p'>) => (
    <p className="mb-2 last:mb-0 text-gray-300">{children}</p>
  ),
  strong: ({ children }: React.ComponentProps<'strong'>) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  ul: ({ children }: React.ComponentProps<'ul'>) => (
    <ul className="my-2 list-disc space-y-1 pl-5 marker:text-blue-400">{children}</ul>
  ),
  ol: ({ children }: React.ComponentProps<'ol'>) => (
    <ol className="my-2 list-decimal space-y-1 pl-5 marker:text-blue-400">{children}</ol>
  ),
  li: ({ children }: React.ComponentProps<'li'>) => <li className="text-gray-300">{children}</li>,
  h1: ({ children }: React.ComponentProps<'h1'>) => (
    <h1 className="mt-3 mb-2 text-xl font-bold text-white first:mt-0">{children}</h1>
  ),
  h2: ({ children }: React.ComponentProps<'h2'>) => (
    <h2 className="mt-3 mb-2 text-lg font-bold text-white first:mt-0">{children}</h2>
  ),
  h3: ({ children }: React.ComponentProps<'h3'>) => (
    <h3 className="mt-2 mb-1 text-base font-bold text-white first:mt-0">{children}</h3>
  ),
  a: ({ children, href }: React.ComponentProps<'a'>) => (
    <a href={href} className="text-blue-400 underline underline-offset-2 hover:text-blue-300" target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  ),
};

interface WeeklyGalleryProps {
  courseName: string;
}

const WeeklyGallery: React.FC<WeeklyGalleryProps> = ({ courseName }) => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [descriptionOverflows, setDescriptionOverflows] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const descriptionBodyRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const selectedWeekContent = selectedWeek !== null ? getWeeklyContent(courseName, selectedWeek) : undefined;

  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraint(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [courseName]); // Ders değiştiğinde de constraint'i yenilemek için courseName eklendi

  useEffect(() => {
    setSelectedWeek(null);
  }, [courseName]);

  useEffect(() => {
    setDescriptionExpanded(false);
  }, [selectedWeek]);

  useLayoutEffect(() => {
    const el = descriptionBodyRef.current;
    if (!el || descriptionExpanded) {
      return;
    }

    const measure = () => {
      const node = descriptionBodyRef.current;
      if (!node) return;
      setDescriptionOverflows(node.scrollHeight > node.clientHeight + 2);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [selectedWeek, selectedWeekContent?.description, descriptionExpanded]);

  const getResourceIcon = (type: string) => {
    if (type.toLowerCase().includes('pdf')) {
      return (
        <div className="bg-red-500/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        </div>
      );
    }

    return (
      <div className="bg-blue-500/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center animate-in zoom-in-95 duration-300">
      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg text-center px-4">
        {courseName}
      </h3>
      <p className="text-gray-400 mb-10 text-sm tracking-widest uppercase">
        Haftalık İçerikler (Tutup Kaydırın)
      </p>

      {/* YATAY GALERİ */}
      <div className="w-full relative overflow-hidden px-4 md:px-12">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none rounded-l-[3rem]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none rounded-r-[3rem]"></div>

        <motion.div 
          ref={carouselRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing w-full"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -dragConstraint }}
            dragElastic={0.1}
            className="flex gap-6 py-4 px-2"
          >
            {Array.from({ length: 14 }, (_, i) => i + 1).map((week) => (
              <motion.div
                key={week}
                onTap={() => setSelectedWeek(week)}
                className="min-w-[12rem] h-52 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col items-center justify-center transition-colors shadow-lg relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-gray-500 text-sm font-bold tracking-widest mb-2 transition-colors pointer-events-none">HAFTA</span>
                <span className="text-6xl font-extrabold text-white opacity-90 group-hover:scale-110 transition-transform drop-shadow-lg pointer-events-none">{week}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* AÇILIR PENCERE (POPUP / MODAL) */}
      {selectedWeek !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onClick={() => setSelectedWeek(null)}></div>
          
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-5 duration-300">
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
              <div>
                <p className="text-blue-400 text-sm font-bold tracking-wider mb-1 uppercase">{courseName}</p>
                <h4 className="text-3xl font-bold text-white">{selectedWeek}. Hafta İçerikleri</h4>
              </div>
              <button onClick={() => setSelectedWeek(null)} className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-8 text-gray-300 flex flex-col gap-6 bg-gradient-to-b from-transparent to-white/5 h-[60vh] md:h-auto overflow-y-auto">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 border-l-4 border-l-blue-500 bg-gradient-to-br from-white/[0.08] to-white/[0.02] py-4 pl-5 pr-4 text-lg leading-relaxed shadow-inner ring-1 ring-white/[0.06] [&_p]:text-lg [&_p]:leading-relaxed">
                <div
                  ref={descriptionBodyRef}
                  className={descriptionExpanded ? '' : 'line-clamp-10'}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={weeklyDescriptionMarkdownComponents}>
                    {selectedWeekContent?.description ?? 'Bu hafta için icerik henuz eklenmedi.'}
                  </ReactMarkdown>
                </div>

                {!descriptionExpanded && descriptionOverflows && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-white/[0.18] via-white/[0.07] to-transparent pb-2.5 pl-4 pt-16 pr-3">
                    <button
                      type="button"
                      onClick={() => setDescriptionExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/[0.18] px-3.5 py-1.5 text-sm font-medium text-blue-100 shadow-[0_0_20px_-4px_rgba(59,130,246,0.45)] backdrop-blur-sm transition hover:border-blue-400/55 hover:bg-blue-500/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.98]"
                    >
                      <span>Devamını gör</span>
                      <svg className="h-3.5 w-3.5 shrink-0 opacity-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                {descriptionExpanded && descriptionOverflows && (
                  <button
                    type="button"
                    onClick={() => setDescriptionExpanded(false)}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Daha az göster
                  </button>
                )}
              </div>
              
              {selectedWeekContent?.resources?.length ? (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {selectedWeekContent.resources.map((resource) => (
                    <a
                      key={`${resource.title}-${resource.type}`}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-5 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all group"
                    >
                      {getResourceIcon(resource.type)}
                      <div>
                        <span className="block font-bold text-white text-lg">{resource.title}</span>
                        <span className="block text-sm text-gray-400">{resource.type}</span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 mt-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5">
                  Bu hafta icin baglanti veya kaynak henuz eklenmedi.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyGallery;