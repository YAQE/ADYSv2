import { useState } from 'react';
import Background from './components/Background';
import Navbar from "./components/StaggeredMenu";
import TextType from "./components/TextType";
import FlowingMenu from './components/FlowingMenu';
import ProfileCard from './components/ProfileCard';
import { SocialLogoLinks } from './components/SocialLogoLinks';
import ScrollToTop from './components/ScrollToTop';
import type { StaggeredMenuItem } from './components/StaggeredMenu';
// SİLDİĞİMİZ DOSYAYI GERİ GETİRDİK: Senin orijinal animasyonların burada
import './App.css';
import ClassDashboard from './components/ClassDashboard';
import img1 from './assets/classes/1.jpg';
import img2 from './assets/classes/2.jpg';
import img3 from './assets/classes/3.jpg';
import img4 from './assets/classes/4.jpg';
import omerpp from './assets/pp/\u00f6merpp.jfif';
import yaqepp from './assets/pp/yaqepp.jfif';

// --- 1. ADIMDA KONUŞTUĞUMUZ VERİ TABANI ---
const courseData = {
  1: {
    1: [ // 1. Yarıyıl
      "BMB103 Bilgisayar Mühendisliğine Giriş", "FZK107 Fizik I",
      "LIC002 Lineer Cebir", "MAT111 Matematik I",
      "TBT001 Temel Bilgi Teknolojileri Kullanımı", "TDİ101 Türk Dili I",
      "YDİ109 Yabancı Dil I (İngilizce)"
    ],
    2: [ // 2. Yarıyıl
      "BMB110 Bilgisayar Programlama", "BMB112 Web Teknolojileri",
      "FZK108 Fizik II", "MAT114 Matematik II",
      "TDİ102 Türk Dili II", "YDİ110 Yabancı Dil II (İngilizce)"
    ]
  },
  2: {
    1: [ // 3. Yarıyıl
      "ATİ101 Atatürk İlkeleri ve İnkılâp Tarihi I", "BMB203 Nesneye Yönelik Programlama",
      "BMB205 Elektrik Devre Temelleri", "BMB207 Veritabanı Yönetimi",
      "DFD002 Diferansiyel Denklemler", "SYA003 Sayısal Analiz",
      "YD 003 Yabancı Dilde Okuma ve Konuşma"
    ],
    2: [ // 4. Yarıyıl
      "ATİ102 Atatürk İlkeleri ve İnkılâp Tarihi II", "BMB206 Olasılık ve İstatistik",
      "BMB208 Ayrık Matematik", "BMB210 Elektroniğe Giriş",
      "BMB212 Veri Yapıları", "BMB214 Programlama Dilleri Prensipleri",
      "LMİ103 Mesleki İngilizce I"
    ]
  },
  3: {
    1: [ // 5. Yarıyıl
      "BMB309 Bilgisayar Ağlarına Giriş", "BMB311 İşletim Sistemleri",
      "BMB317 Otomata Teorisi", "BMB319 Mantık Devreleri",
      "BMB315 Web Programlama", "LMİ104 Mesleki İngilizce II"
    ],
    2: [ // 6. Yarıyıl
      "BMB306 Yazılım Mühendisliği", "BMB308 Bilgisayar Ağları",
      "BMB310 Sistem Analizi ve Tasarım", "BMB312 Sistem Programlama",
      "BMB314 Bilgisayar Organizasyonu", "YDS002 İş Hayatında Yabancı Dil"
    ]
  },
  4: {
    1: [ // 7. Yarıyıl
      "BMSB417 Çevik yazılım geliştirme",
      "BMSB406 Makine Öğrenmesine Giriş",
      "BMSB423 Sayısal Hesaplama Programları",
      "BMSB403 Veri Madenciliği",
      "BMSB421 Veri sıkıştırma yöntemleri"
    ],
    2: [ // 8. Yarıyıl
      "BMSB428 Gömülü Sistemler",
      "BMSB402 Görüntü İşleme",
      "BMSB442 Kolektif Öğrenmeye Giriş",
      "BMSB426 Proje Hazırlaması ve Yönetimi",
      "BMSB436 Python Programlamaya Giriş"
    ]
  }
};

/** Menü sırası: site ile aynı (Ana sayfa → Sınıf → Dersler → Tanışma) */
const MAIN_NAV_ITEMS: StaggeredMenuItem[] = [
  { label: 'Ana Sayfa', ariaLabel: 'Giriş bölümüne git', link: '#ana-sayfa' },
  { label: 'Sınıfını Seç', ariaLabel: 'Sınıf seçim alanına git', link: '#sinif-secimi' },
  { label: 'Dersler', ariaLabel: 'Dersler bölümüne git', link: '#dashboard-section' },
  { label: 'Tanışalım', ariaLabel: 'Tanışma zamanı bölümüne git', link: '#tanisma-zamani' },
];

//BURASI SCROLL EFEKTİ VERMEK İÇİN SCROLL'U YAVAŞLATIYOR.
const slowScrollTo = (targetY: number) => {
  const duration = 2000; // animasyon süresi (ms) - 2 saniye
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
  
  // --- UYGULAMANIN YENİ HAFIZASI ---
  // Hangi sınıf seçildi? (Başlangıçta null, yani hiçbiri)
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const scrollToSection = () => {
    const element = document.getElementById('sinif-secimi');
    if (element) {
      const rect = element.getBoundingClientRect();
      const targetY = rect.top + window.pageYOffset;
      slowScrollTo(targetY);
    }
  };

  // YENİ EKLENDİ: Sınıf seçildiğinde önce hafızaya alır, sonra yavaşça o sayfaya kayar
  const handleClassSelect = (classNum: number) => {
    setSelectedClass(classNum); // 1. Sınıfı hafızaya al

    // 2. Sayfanın (DOM'un) çizilmesi için milisaniyelik bir süre tanıyıp aşağı kaydır
    setTimeout(() => {
      const element = document.getElementById('dashboard-section');
      if (element) {
        const targetY = element.getBoundingClientRect().top + window.pageYOffset;
        slowScrollTo(targetY);
      }
    }, 150);
  };

  return (
    <div className="relative w-full bg-black font-display">

      <Navbar isFixed menuButtonColor="#f8fafc" openMenuButtonColor="#000000" items={MAIN_NAV_ITEMS} />

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
      <section id="ana-sayfa" className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4">
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
            className={`intro-text text-gray-300 text-lg leading-relaxed transition-all duration-700 ease-out ${showIntro ? 'intro-text--visible' : 'intro-text--hidden'
              }`}
          >
            Bu site, ders çalışmanızı ve ders kaynaklarına erişiminizi kolaylaştırmak için tasarlandı.
            Notlar, kaynaklar ve yararlı linklere tek bir yerden ulaşabilirsiniz.
          </p>

          <div
            className={`intro-buttons mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 ease-out delay-200 ${showIntro ? 'intro-text--visible' : 'intro-text--hidden'
              }`}
          >
            <button
              type="button"
              className="intro-btn px-6 py-3 rounded-lg bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-white"
              onClick={() => window.open('https://cmf-bm.web.nku.edu.tr/DersKatalog/0/s/3945/969#icerik', '_blank')}>
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
              // YENİ EKLENDİ: Artık handleClassSelect fonksiyonunu çağırıyor
              { link: '#', text: '1. Sınıf', image: img1, onClick: () => handleClassSelect(1) },
              { link: '#', text: '2. Sınıf', image: img2, onClick: () => handleClassSelect(2) },
              { link: '#', text: '3. Sınıf', image: img3, onClick: () => handleClassSelect(3) },
              { link: '#', text: '4. Sınıf', image: img4, onClick: () => handleClassSelect(4) },
            ]}
          />
        </div>
      </section>

      {/* --- 3. SAYFA: DERSLER (anchor hep var; sınıf yoksa yönlendirici metin) --- */}
      <section
        id="dashboard-section"
        className="relative z-10 w-full scroll-mt-24 border-t border-gray-800/50 py-20 px-4"
      >
        {selectedClass !== null ? (
          <div className="flex min-h-screen flex-col items-center justify-start">
            <ClassDashboard
              classNumber={selectedClass}
              classData={courseData[selectedClass as keyof typeof courseData]}
            />
          </div>
        ) : (
          <div className="flex min-h-[45vh] flex-col items-center justify-center px-4 text-center">
            <p className="max-w-lg text-lg text-gray-400">
              Ders haftalık içerikleri için önce{' '}
              <span className="font-semibold text-blue-400">Sınıfını Seç</span> bölümünden sınıfınızı seçin.
            </p>
          </div>
        )}
      </section>

      {/* --- 4. SAYFA: TANIŞMA --- */}
      <section
        id="tanisma-zamani"
        className="relative z-10 w-full min-h-screen scroll-mt-24 flex flex-col items-center justify-center border-t border-gray-800/50 py-20 px-4"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-white mb-16 drop-shadow-lg text-center">
            Tanışalım
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* İlk Geliştirici */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex justify-center mb-8">
                <ProfileCard
                  avatarUrl={omerpp}
                  name="Ömer Türkoğlu"
                  title="Computer Engineer"
                  showUserInfo
                  enableTilt
                />
              </div>

              <p className="text-gray-300 text-center leading-relaxed mb-8">
              Merhaba, ben Ömer. Namık Kemal Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. 
              Öğrendiğim teorik bilgileri gerçek dünya projelerine dönüştürmeyi seviyorum. 
              LinkedIn ve GitHub üzerinden iletişime geçebilirsiniz.
              </p>

              <SocialLogoLinks
                linkedInHref="https://www.linkedin.com/in/omeerturkoglu/"
                githubHref="https://github.com/omeerturkoglu"
              />
            </div>

            {/* İkinci Geliştirici */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex justify-center mb-8">
                <ProfileCard
                  avatarUrl={yaqepp}
                  name="Yakup Aydın"
                  title="Computer and Electrical Engineer"
                  showUserInfo
                  enableTilt
                />
              </div>

              <p className="text-gray-300 text-center leading-relaxed mb-8">
              Merhaba! Ben Yakup. Bilgisayar Mühendisliği ve Elektrik Elektronik Mühendisliği öğrencisi olarak yazılım ve teknoloji alanlarında kendimi geliştiriyor, farklı projeler üzerinde çalışıyorum. 
              Öğrendiklerimi gerçek projelere dönüştürmeyi seviyorum. 
              LinkedIn, GitHub ve Web siteme aşağıdaki butonlardan ulaşabilirsiniz.
              </p>

              {/* websiteHref: kendi alan adresin ile değiştir (isteğe bağlı boş bırakılabilir) */}
              <SocialLogoLinks
                linkedInHref="https://www.linkedin.com/in/yakup-ayd%C4%B1n-b97607290/"
                githubHref="https://github.com/YAQE"
                websiteHref="https://aydinyakup.com"
              />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Bu proje, Namık Kemal Üniversitesi Bilgisayar Mühendisliği öğrencileri tarafından 
              geliştirilmiş olup, sürekli olarak güncellenmektedir.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 Namık Kemal Üniversitesi Bilgisayar Mühendisliği - DYS Platformu
            </p>
          </div>
        </div>
      </section>

      {/* Ekranda sabit: sayfa sonuna bağlı değil; scroll ile hep aynı köşede */}
      <ScrollToTop />

    </div>
  );
}

export default App;