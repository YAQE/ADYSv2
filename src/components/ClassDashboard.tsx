import React, { useState } from 'react';

interface ClassDashboardProps {
  classNumber: number;
  classData: {
    1: string[];
    2: string[];
  };
}

const ClassDashboard: React.FC<ClassDashboardProps> = ({ classNumber, classData }) => {
  // Dönem hafızası (Varsayılan 1. Yarıyıl)
  const [semester, setSemester] = useState<1 | 2>(1);
  // Seçilen ders hafızası
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // O an seçili olan dönemin derslerini alıyoruz
  const currentCourses = classData[semester] || [];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-700">
      
      {/* 1. KISIM: BAŞLIK VE DÖNEM SEÇİCİ (TOGGLE) */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-widest">{classNumber}. SINIF</h2>
        
        {/* Hap (Pill) Şeklinde Dönem Değiştirici */}
        <div className="flex bg-white/5 p-1 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
          <button 
            onClick={() => { setSemester(1); setSelectedCourse(null); }}
            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
              semester === 1 ? 'bg-white/20 text-white shadow-lg scale-105' : 'text-gray-400 hover:text-white'
            }`}
          >
            1. Yarıyıl
          </button>
          <button 
            onClick={() => { setSemester(2); setSelectedCourse(null); }}
            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
              semester === 2 ? 'bg-white/20 text-white shadow-lg scale-105' : 'text-gray-400 hover:text-white'
            }`}
          >
            2. Yarıyıl
          </button>
        </div>
      </div>

      {/* 2. KISIM: DİNAMİK DERS BARI */}
      <div className="w-full flex flex-wrap justify-center gap-3 mb-10 px-4">
        {currentCourses.length > 0 ? (
          currentCourses.map((course, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedCourse(course)}
              className={`px-5 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 border ${
                selectedCourse === course 
                  ? 'bg-blue-500/20 border-blue-400/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1'
              }`}
            >
              {course}
            </button>
          ))
        ) : (
          <p className="text-gray-400 italic px-4 py-2 bg-white/5 rounded-xl border border-white/10">Bu dönem için henüz ders eklenmedi.</p>
        )}
      </div>

      {/* 3. KISIM: KARANLIK BUZLU CAM KUTUSU (GÜNCELLENDİ) */}
      <div className="w-full bg-black/40 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative min-h-[500px] flex items-center justify-center border border-white/10 transition-all duration-500">
         {selectedCourse ? (
            <div className="text-center animate-in zoom-in-95 duration-300">
              <h3 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">{selectedCourse}</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Bu alan ileride dolacak. Örneğin 16 haftalık ders notları, PDF'ler veya videolar bu şık buzlu cam kutunun içinde harika duracak.
              </p>
            </div>
         ) : (
            <div className="text-center text-gray-400 animate-in fade-in duration-500">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-30 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p className="text-xl font-medium text-gray-300">Ders içeriklerini görmek için yukarıdan bir ders seçin</p>
            </div>
         )}
      </div>

    </div>
  );
};

export default ClassDashboard;