import { useState } from 'react';
import Background from './components/Background';
import Navbar from "./components/StaggeredMenu";
import TextType from "./components/TextType";
import FlowingMenu from './components/FlowingMenu'; 
// SİLDİĞİMİZ DOSYAYI GERİ GETİRDİK: Senin orijinal animasyonların burada
import './App.css'; 

function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="relative w-full bg-black font-display">
      
      <Navbar />

      {/* --- SABİT ARKA PLAN --- */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Background
          particleCount={400}
          particleSpread={20}
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
          particleBaseSize={100}
          speed={0.1}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
        />
      </div>

      {/* --- 1. SAYFA: GİRİŞ EKRANI --- */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="pointer-events-auto text-center max-w-2xl">
          
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
          
          
          <p
            className={`intro-text text-gray-300 text-lg leading-relaxed transition-all duration-700 ease-out ${
              showIntro ? 'intro-text--visible' : 'intro-text--hidden'
            }`}
          >
            Bu site, ders çalışmanızı ve ders kaynaklarına erişiminizi kolaylaştırmak için tasarlandı.
            Notlar, kaynaklar ve yararlı linklere tek bir yerden ulaşabilirsiniz.
          </p>
          
          
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
      </section>

      {/* --- 2. SAYFA: SINIF SEÇİMİ --- */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center border-t border-gray-800/50 pt-20 pb-20">
        <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-lg">
          Sınıfını Seç
        </h2>
        
        <div className="w-full">
          <FlowingMenu 
            items={[
              { link: '#', text: '1. Sınıf', image: 'https://picsum.photos/600/400?random=1' },
              { link: '#', text: '2. Sınıf', image: 'https://picsum.photos/600/400?random=2' },
              { link: '#', text: '3. Sınıf', image: 'https://picsum.photos/600/400?random=3' },
              { link: '#', text: '4. Sınıf', image: 'https://picsum.photos/600/400?random=4' },
            ]}
          />
        </div>
      </section>

    </div>
  );
}

export default App;