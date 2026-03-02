import Background from './components/Background';

function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
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

      {/* 2. KATMAN: İÇERİK (Görünmez Kalkan Sorunu Çözüldü) */}
      {/* pointer-events-none: Bu katmanın fareyi engellemesini yasaklar */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white pointer-events-none">
        
        {/* pointer-events-auto: Sadece yazıların veya butonların tıklanabilir olmasını sağlar */}
        <div className="pointer-events-auto text-center">
          <h1 className="text-5xl font-bold tracking-widest drop-shadow-lg mb-4">
            ADYSv2 SİSTEMİ
          </h1>
          <p className="text-gray-400 text-lg">
            Parçacık motoru başarıyla yüklendi.
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;