import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WeeklyGalleryProps {
  courseName: string;
}

const WeeklyGallery: React.FC<WeeklyGalleryProps> = ({ courseName }) => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraint(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [courseName]); // Ders değiştiğinde de constraint'i yenilemek için courseName eklendi

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
            {Array.from({ length: 16 }, (_, i) => i + 1).map((week) => (
              <motion.div
                key={week}
                // İŞTE SİHİRLİ DOKUNUŞ BURASI: onClick silindi, onTap eklendi!
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
              <p className="text-lg leading-relaxed border-l-4 border-blue-500 pl-4 bg-white/5 py-3 rounded-r-lg">
                Bu hafta işlenen konu başlıklarına, slayt gösterilerine ve ek okuma kaynaklarına aşağıdan erişebilirsiniz.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <a href="#" className="flex items-center p-5 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all group">
                  <div className="bg-red-500/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-white text-lg">Ders Sunumu</span>
                    <span className="block text-sm text-gray-400">PDF Dokümanı</span>
                  </div>
                </a>

                <a href="#" className="flex items-center p-5 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all group">
                  <div className="bg-blue-500/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-white text-lg">Ders Kaydı</span>
                    <span className="block text-sm text-gray-400">Video (85 dk)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyGallery;