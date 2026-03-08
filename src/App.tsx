import { useState } from 'react';
import Background from './components/Background';
import Navbar from "./components/StaggeredMenu"
import TextType from "./components/TextType"
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      <Navbar />

      {/* 1. KATMAN: ARKA PLAN */}
      <div className="absolute inset-0">
        <Background
          particleCount={400}
          particleSpread={20}
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
          particleBaseSize={100}
          
          // YENİ EKLENEN KONTROLLER (PROPS):
          speed={0.1} // Hızı buradan düşürüyoruz (Daha da yavaş istersen 0.05 yapabilirsin)
          moveParticlesOnHover={true} // Fare etkileşimini motor seviyesinde açar
          particleHoverFactor={2} // Farenin parçacıkları itme/çekme gücü
        />
      </div>

      {/* 2. KATMAN: İÇERİK */}
      <div className="absolute inset-0 z-[50] flex flex-col items-center justify-center w-full text-white pointer-events-none px-4">
        <div className="pointer-events-auto text-center max-w-2xl">
          {/* TextType ile hoş geldin başlığı */}
          <div className="mb-8 flex justify-center">
            <TextType
              text="Merhaba Hoş Geldiniz..."
              as="h1"
              className="!text-white"
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
              initialDelay={400}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.6}
              onTypingComplete={(_, index) => {
                if (index === 0) setShowIntro(true);
              }}
            />
          </div>
          {/* Bu site ile bağlayan giriş cümlesi - giriş animasyonu */}
          <p
            className={`intro-text text-gray-300 text-lg leading-relaxed transition-all duration-700 ease-out ${
              showIntro ? 'intro-text--visible' : 'intro-text--hidden'
            }`}
          >
            Bu site, ders çalışmanızı ve ders kaynaklarına erişiminizi kolaylaştırmak için tasarlandı.
            Notlar, kaynaklar ve yararlı linklere tek bir yerden ulaşabilirsiniz.
          </p>
          {/* Butonlar - giriş animasyonu ile */}
          <div
            className={`intro-buttons mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 ease-out delay-200 ${
              showIntro ? 'intro-text--visible' : 'intro-text--hidden'
            }`}
          >
            <button
              type="button"
              className="intro-btn px-6 py-3 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-white"
            >
              Ders Kataloğunu Gör
            </button>
            <button
              type="button"
              className="intro-btn px-6 py-3 rounded-lg bg-white/15 border border-white/40 hover:bg-white/25 hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-white"
            >
              Hadi Başlayalım
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;