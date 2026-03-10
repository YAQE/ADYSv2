import { useState } from 'react';
import Background from './components/Background';
import Navbar from "./components/StaggeredMenu";
import TextType from "./components/TextType";
import FlowingMenu from './components/FlowingMenu'; 
// SİLDİĞİMİZ DOSYAYI GERİ GETİRDİK: Senin orijinal animasyonların burada
import './App.css'; 

import img1 from './assets/classes/1.jpg';
import img2 from './assets/classes/2.jpg';
import img3 from './assets/classes/3.jpg';
import img4 from './assets/classes/4.jpg'; 
//BURASI SCROLL EFEKTİ VERMEK İÇİN SCROLL'U YAVAŞLATIYOR. DURATİON DEĞERİ İLE SCROLL'UN YAVAŞLIĞINI KONTROL EDİYORSUN.(MS OLARAK)
const slowScrollTo = (targetY: number) => {
  const duration = 2000; // animasyon süresi (ms) - 4 saniye
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startY, distance, duration); 
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Matematiksel yumuşatma fonksiyonu
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

function App() {
  const [showIntro, setShowIntro] = useState(false);

  const scrollToSection = () => {
    const element = document.getElementById('sinif-secimi');
    if (element) {
      const rect = element.getBoundingClientRect();
      const targetY = rect.top + window.pageYOffset;
      slowScrollTo(targetY);
    }
  };

  return (
    <div className="relative w-full bg-black font-display">
      
      <Navbar isFixed openMenuButtonColor="#000000" />

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
              className="intro-btn px-6 py-3 rounded-lg bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-white"            onClick={() => window.open('https://cmf-bm.web.nku.edu.tr/DersKatalog/0/s/3945/969#icerik', '_blank')}>
              Ders Kataloğunu Gör
            </button>

            <button 
              type="button"
              className="intro-btn px-6 py-3 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-white"
              onClick={scrollToSection}>
              Hadi başlayalım
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. SAYFA: SINIF SEÇİMİ --- */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center border-t border-gray-800/50 pt-20 pb-20">
        <h2 id="sinif-secimi" className="text-6xl font-bold text-white mb-12 drop-shadow-lg">
          Sınıfını Seç
        </h2>
        
        <div className="w-full">
          <FlowingMenu 
            items={[
              { link: '#', text: '1. Sınıf', image: img1 },
              { link: '#', text: '2. Sınıf', image: img2 },
              { link: '#', text: '3. Sınıf', image: img3 },
              { link: '#', text: '4. Sınıf', image: img4 },
            ]}
          />
        </div>
      </section>

    </div>
  );
}

export default App;