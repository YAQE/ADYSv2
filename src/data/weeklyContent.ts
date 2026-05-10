export interface WeeklyResource {
  title: string;
  type: string;
  href: string;
}

export interface WeeklyContentItem {
  description: string;
  resources: WeeklyResource[];
}

type WeeklyContentByWeek = Record<number, WeeklyContentItem>;
type WeeklyContentByCourse = Record<string, WeeklyContentByWeek>;

const ALL_COURSE_NAMES = [
  'BMB103 Bilgisayar Mühendisliğine Giriş',
  'FZK107 Fizik I',
  'LIC002 Lineer Cebir',
  'MAT111 Matematik I',
  'TBT001 Temel Bilgi Teknolojileri Kullanımı',
  'TDİ101 Türk Dili I',
  'YDİ109 Yabancı Dil I (İngilizce)',
  'BMB110 Bilgisayar Programlama',
  'BMB112 Web Teknolojileri',
  'FZK108 Fizik II',
  'MAT114 Matematik II',
  'TDİ102 Türk Dili II',
  'YDİ110 Yabancı Dil II (İngilizce)',
  'ATİ101 Atatürk İlkeleri ve İnkılâp Tarihi I',
  'BMB203 Nesneye Yönelik Programlama',
  'BMB205 Elektrik Devre Temelleri',
  'BMB207 Veritabanı Yönetimi',
  'DFD002 Diferansiyel Denklemler',
  'SYA003 Sayısal Analiz',
  'YD 003 Yabancı Dilde Okuma ve Konuşma',
  'ATİ102 Atatürk İlkeleri ve İnkılâp Tarihi II',
  'BMB206 Olasılık ve İstatistik',
  'BMB208 Ayrık Matematik',
  'BMB210 Elektroniğe Giriş',
  'BMB212 Veri Yapıları',
  'BMB214 Programlama Dilleri Prensipleri',
  'LMİ103 Mesleki İngilizce I',
  'BMB309 Bilgisayar Ağlarına Giriş',
  'BMB311 İşletim Sistemleri',
  'BMB317 Otomata Teorisi',
  'BMB319 Mantık Devreleri',
  'BMB315 Web Programlama',
  'LMİ104 Mesleki İngilizce II',
  'BMB306 Yazılım Mühendisliği',
  'BMB308 Bilgisayar Ağları',
  'BMB310 Sistem Analizi ve Tasarım',
  'BMB312 Sistem Programlama',
  'BMB314 Bilgisayar Organizasyonu',
  'YDS002 İş Hayatında Yabancı Dil',
  'BMSB417 Çevik yazılım geliştirme',
  'BMSB406 Makine Öğrenmesine Giriş',
  'BMSB423 Sayısal Hesaplama Programları',
  'BMSB403 Veri Madenciliği',
  'BMSB421 Veri sıkıştırma yöntemleri',
  'BMSB428 Gömülü Sistemler',
  'BMSB402 Görüntü İşleme',
  'BMSB442 Kolektif Öğrenmeye Giriş',
  'BMSB426 Proje Hazırlaması ve Yönetimi',
  'BMSB436 Python Programlamaya Giriş'
] as const;

const createDefaultWeekContent = (courseName: string, week: number): WeeklyContentItem => ({
  description: `${courseName} dersi ${week}. haftada islenen konu basliklari, uygulama notlari ve ek kaynaklar bu alanda paylasilir.`,
  resources: [
    {
      title: `${week}. Hafta Ders Sunumu`,
      type: 'PDF',
      href: '#',
    },
    {
      title: `${week}. Hafta Ders Kaydi`,
      type: 'Video',
      href: '#',
    },
  ],
});

const createCourseTemplate = (courseName: string): WeeklyContentByWeek =>
  Object.fromEntries(
    Array.from({ length: 16 }, (_, index) => {
      const week = index + 1;
      return [week, createDefaultWeekContent(courseName, week)];
    })
  ) as WeeklyContentByWeek;

const WEEKLY_CONTENT_OVERRIDES: Partial<WeeklyContentByCourse> = {
  'LIC002 Lineer Cebir': {
    1: {
      description: `Lineer cebir, bilgisayar bilimlerinin, özellikle makine öğrenmesi ve veri mühendisliğinin temel matematiğidir. Bu hafta, matris ve vektör uzaylarının soyut dünyasına giriş yapılarak temel kavramlar oturtulur. Yazılımda çok boyutlu verileri işlemek ve algoritmaları tasarlamak için bu matematiksel altyapıya ihtiyaç duyulur. İleride göreceğiniz yapay zeka derslerinde, verilerin nasıl modellendiğini anlamanın ilk adımıdır. Doğrusal ilişkilerin bilgisayar mantığıyla nasıl çözüleceğine dair bir vizyon kazandırır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lineer+cebir+giri%C5%9F' },
      ],
    },
    2: {
      description: `Gerçek dünya problemlerinin çoklu bilinmeyenlerle matematiksel olarak ifade edilmesi öğrenilir. Bilgisayar grafiklerinde veya optimizasyon algoritmalarında sistem kısıtlamalarını kodlamak için bu denklemler kullanılır. Birden fazla koşulun aynı anda sağlandığı durumları (intersection) algoritmik olarak bulmanın temelidir. İki boyutlu uzayda doğruların kesişimlerini hesaplamak, oyun motorlarında çarpışma tespiti (collision detection) yapmaya benzer. Kodlamaya başlamadan önce problemi analitik olarak çözme yeteneğinizi geliştirir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/Alg/SystemsTwoVrble.aspx' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lineer+denklem+sistemleri+iki+bilinmeyenli' },
      ],
    },
    3: {
      description: `Karmaşık denklem sistemlerini, çözüm kümesini değiştirmeden daha basit ve işlenebilir formlara dönüştürme mantığı kavranır. Yazılımda bellek veya işlemci maliyetini düşürmek için algoritmaları basitleştirmekle aynı mantığa dayanır. Büyük veri setleriyle uğraşırken veritabanı sorgularını daha verimli hale getirme felsefesiyle örtüşür. Satır işlemleri yapılarak matrislerin sadeleştirilmesi, kod optimizasyonunun matematiksel karşılığıdır. Matematiksel manipülasyonlarla bilgisayara daha az işlem yaptırma hedeflenir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/college-algebra/pages/7-1-systems-of-linear-equations-two-variables' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lineer+cebir+e%C5%9Fde%C4%9Fer+sistemler' },
      ],
    },
    4: {
      description: `Lineer sistemleri çözmek için bilgisayarların da arka planda kullandığı en temel ve sistematik algoritma olan Gauss yok etme metodu incelenir. Bu yöntem, problemleri adım adım sadeleştirerek çözüme ulaşma disiplini katar. Gelecekte kendi algoritmalarınızı yazarken, tekrarlayan işlemleri (iterasyonları) nasıl kurgulayacağınıza dair pratik bir örnektir. Sistemlerin tek çözümünün, sonsuz çözümünün veya çözümsüzlüğünün tespiti, kodda hata yönetimi (exception handling) yapmaya benzer. Bilgisayarın adım adım çalıştırdığı bir prosedürün kağıt üzerindeki simülasyonudur.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://mathworld.wolfram.com/GaussianElimination.html' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=gauss+yok+etme+metodu' },
      ],
    },
    5: {
      description: `Verilerin iki boyutlu tablolar (array of arrays) halinde bilgisayar belleğine haritalandırılmasının matematiksel teorisidir. Görüntü işleme projelerinde (örneğin OpenCV ile) her bir fotoğrafın piksellerden oluşan devasa bir matris olduğu gerçeğiyle yüzleşilir. Matrislerde toplama, çıkarma ve çarpma işlemleri, resimler üzerinde filtreleme veya renk değiştirme kodlarının temelini oluşturur. Döngüler (loops) kullanarak iki boyutlu diziler üzerinde işlem yapma pratiğini matematiksel olarak destekler. Veriyi yapısal bir grid içinde yönetme becerisi aşılanır.
[Image of matrix operations linear algebra]`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/math/linear-algebra/matrix-transformations' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matrislerde+i%C5%9Flemler+lineer+cebir' },
      ],
    },
    6: {
      description: `Bir matrisin içerdiği verinin aslında ne kadar özgün veya bağımsız bilgi taşıdığını gösteren rank kavramı öğrenilir. Veri mühendisliğinde çok büyük veri setlerini işlerken gereksiz ve birbirini tekrar eden sütunları filtrelemek için bu kavrama başvurulur. Sistem rankı, makine öğrenmesi modellerinde "boyut indirgeme" algoritmalarının nasıl çalıştığını anlamanızı sağlar. Yazdığınız kodun gereksiz hesaplamalar yapıp yapmadığını test etmenin matematiksel yoludur. Bağımsız değişkenleri tespit ederek veri setinin özünü kavramaya yardımcı olur.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Rank_(linear_algebra)' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matris+rank%C4%B1+bulma' },
      ],
    },
    7: {
      description: `Sağ tarafı sıfır olan sistemlerin ve matris tersi (inverse) alarak sonuca gitmenin algoritmik mantığı incelenir. Üç boyutlu grafikleri döndürme, ölçeklendirme veya tersine çevirme işlemlerinde ters matrisler bilgisayar grafik işlemcisi (GPU) tarafından sürekli hesaplanır. Kriptografi ve şifreleme algoritmalarında, bir veriyi şifrelemek ve ters matrisle tekrar çözmek temel yöntemlerden biridir. Bir matrisin tersinin olup olmaması (determinant analizi), sistemin çözülebilirliğine dair hata kontrollerini koda yansıtmayı öğretir. Ters işlemlerin yazılım mimarisindeki maliyetleri tartışılır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/Alg/SystemsThreeVrble.aspx' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matris+tersi+alma+y%C3%B6ntemleri' },
      ],
    },
    8: {
      description: `Bilgisayar mühendisliği matematiğinin bu ilk ve kritik yarısının ne kadar özümsendiğini ölçen ara değerlendirmedir. Öğrencilerin algoritmik düşünce yapıları ile matematiksel soyutlama becerilerinin kesişimi test edilir. Kod bloklarına dönüşecek formüllerin kağıt üzerinde hatasız çalıştırılıp çalıştırılamadığı kontrol edilir. Vektör ve matris uzaylarına geçmeden önce eksiklerin görülüp kapatılması için önemli bir dönemeçtir. Algoritmaların doğruluğunu ispatlama yeteneği bu aşamada sınanır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Kodlamada sıklıkla kullanılan tek boyutlu dizilerin (arrays, lists) matematiksel karşılığı olan vektörler ve vektör uzayları tanıtılır. Fizik motorlarında hareket, yön ve hız gibi bileşenler bu vektörel yapılarla nesne yönelimli (OOP) olarak modellenir. Makine öğrenmesinde her bir veri satırının (örneğin bir kullanıcının özellikleri) n-boyutlu uzayda bir vektör olarak nasıl temsil edildiği kavranır. Uzay kavramı, bilgisayarın belleğinde sınırları belirlenmiş çalışma alanlarını tasvir eder. Veri noktaları arasındaki mesafeleri hesaplama mantığının altyapısı atılır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://math.mit.edu/~gs/linearalgebra/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=vekt%C3%B6rler+ve+vekt%C3%B6r+uzaylar%C4%B1' },
      ],
    },
    10: {
      description: `Daha büyük bir sistemin veya veri kümesinin içinde kuralları bozmadan var olan bağımsız alt kümelerin (subspaces) analizi yapılır. Bir yazılım projesindeki büyük modüllerin, kendi içinde çalışan bağımsız alt modüllere (microservices) ayrılmasına benzer bir felsefedir. Veri biliminde, devasa özellik uzaylarından sadece belirli kriterleri sağlayan anlamlı alt setleri izole etmeyi öğretir. Gerilen uzay (span) kavramı, sınırlı sayıda veriyle hangi olası sonuçların üretilebileceğini öngörmeye yarar. Bellek yönetimi yaparken alan sınırlarını (bounds) doğru çizmeyi simgeler.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/LinAlg/Subspaces.aspx' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=alt+uzay+ve+germe+lineer+cebir' },
      ],
    },
    11: {
      description: `Bir veriyi veya sistemi ifade edebilmek için gereken minimum bağımsız parametre sayısını anlatan taban (basis) ve boyut (dimension) kavramları işlenir. Bilgisayar donanımında verileri 0 ve 1'lerden oluşan ikilik tabanda (binary basis) ifade etme mantığının matematiksel kanıtıdır. Büyük boyutlu karmaşık veri setlerinin boyutunu küçülterek algoritmaların daha hızlı çalışmasını sağlama vizyonu kazandırır. Resim veya video sıkıştırma algoritmaları, veriyi daha düşük boyutlu yeni bir tabana oturtarak çalışır. Sistemdeki "gereksiz" değişkenleri (redundancy) tespit edip silme becerisini artırır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Basis_(linear_algebra)' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=vekt%C3%B6r+uzay%C4%B1+taban+ve+boyut' },
      ],
    },
    12: {
      description: `Girdilerin (input) belirli kurallarla değiştirilerek çıktılara (output) dönüştüğü işlemler; yani aslında bilgisayar fonksiyonlarının (functions/methods) cebirsel hali öğrenilir. Bilgisayar grafiklerinde üç boyutlu bir modelin ekrana iki boyutlu yansıtılması (projection) tamamen bir lineer dönüşüm işlemidir. Taban değişimi, veriyi farklı bir formatta (örneğin RGB renk uzayından CMYK uzayına) çevirme kodlarının arka planında yatan matematiktir. Nesnelerin formunu bozmadan döndürme (rotation) veya taşıma (translation) matrisleri pratik edilir. Matematiksel dönüşümler, yazılımdaki veri manipülasyonunun kalbidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/math/linear-algebra/matrix-transformations/linear-transformations' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lineer+d%C3%B6n%C3%BC%C5%9F%C3%BCmler' },
      ],
    },
    13: {
      description: `Bir matris dönüşümü sırasında yönü değişmeyen, sadece boyutu değişen özel vektörlerin (eigenvectors) analizi yapılır. Veri mühendisliğinde ve makine öğrenmesinde Principal Component Analysis (PCA) gibi veri küçültme algoritmalarının temel yapıtaşıdır. Google'ın arama motoru sıralama algoritması olan PageRank'in temelinde yatan en önemli matematiksel prensip özvektör hesaplamasıdır. Büyük sistemlerin yapısal dinamiklerini (örneğin ağ trafik analizlerini) ve kararlılığını analiz etmekte kullanılır. Karmaşık bilgi yığınlarının içindeki en belirgin "öz" özellikleri çıkarma sanatı öğretilir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://math.mit.edu/~gs/linearalgebra/ila0601.pdf' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%B6zde%C4%9Fer+ve+%C3%B6zvekt%C3%B6rler' },
      ],
    },
    14: {
      description: `Vektörler arasındaki açıları, uzaklıkları ve benzerlikleri ölçmeyi sağlayan iç çarpım (dot product) işlemleri incelenir. Modern öneri sistemlerinde (örneğin Netflix veya Spotify tavsiyeleri), iki kullanıcının zevklerinin ne kadar benzer olduğunu hesaplayan Kosinüs Benzerliği (Cosine Similarity) algoritması buradan doğar. Oyun programlamada iki karakterin birbirine bakıp bakmadığını veya görüş alanında olup olmadığını anlamak için kullanılan kilit fonksiyondur. Metin madenciliğinde dökümanların kelime yapılarını karşılaştırmak için vektör uzayı modellerine zemin hazırlar. Dönem, matematiğin modern bilgisayar algoritmalarındaki bu somut uygulamalarıyla tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Inner_product_space' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C3%A7+%C3%A7arp%C4%B1m+uzaylar%C4%B1' },
      ],
    },
  },
  'MAT111 Matematik I': {
    1: {
      description: `Programlamadaki veri tiplerinin (integer, float) karşılığı olan sayılar ve kod bloklarındaki metodların temeli olan fonksiyonlar incelenir. Kompleks sayılar, ileride elektronik ve sinyal işleme veya oyun grafiklerinde rotasyon hesaplamalarında karşılaşacağınız temel yapılardır. Bağımlı ve bağımsız değişkenler, yazılımdaki parametre (argument) geçişlerinin matematiksel altyapısını kavramayı sağlar. Bir girdiyi alıp belirli bir kurala göre çıktı üreten her fonksiyon, aslında saf (pure) bir bilgisayar fonksiyonudur. Algoritmaların değişkenler arası mantıksal bağlantıları kurma ilkeleri aşılanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+1+fonksiyonlar+ve+kompleks+say%C4%B1lar' },
      ],
    },
    2: {
      description: `Bir sistemin belirli bir noktaya yaklaşırken gösterdiği davranışları inceleyen limit kavramı, algoritmaların sınır değer (edge case) analizlerinde kritiktir. Sonsuzluk döngüleri (infinite loops) veya bir donanımın işlem kapasitesinin sınırlarına yaklaşırken tepkisi limit teorisiyle modellenir. Süreklilik, animasyonlarda veya robotik hareketlerde sıçrama (glitch) olmadan akıcı veri geçişlerinin sağlanması mantığını öğretir. Kesikli (discrete) çalışan bilgisayarların, sürekli olan gerçek dünya verilerini nasıl analiz ettiği tartışılır. Hata toleransı ve kodda sıfıra bölme gibi tanımsızlıkların algoritmik yönetimi pratik edilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/math/calculus-1/cs1-limits-and-continuity' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+1+limit+ve+s%C3%BCreklilik' },
      ],
    },
    3: {
      description: `Herhangi bir niceliğin değişim hızını ölçen türev, makine öğrenmesi modellerini eğitmekte kullanılan algoritmaların (Gradient Descent) tam merkezindedir. Sistemlerin anlık hızlarını hesaplamak, oyun motorlarında fiziksel hareketlerin veya hız simülasyonlarının gerçek zamanlı işlenmesini sağlar. Bir hatanın (loss function) minimuma nasıl indirileceğini algoritmaya öğretmek için türev formülleri koda dönüştürülür. Donanım ısınma grafikleri veya ağ trafiği artış hızları gibi veriler türev yardımıyla tahmin edilir (predictive analysis). Verideki anlık trendleri yakalama yeteneği mühendislik vizyonuna eklenir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/math/calculus-1/cs1-derivatives-definition-and-basic-rules' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+1+t%C3%BCrev+alma+kurallar%C4%B1' },
      ],
    },
    4: {
      description: `Bağımlı değişkenin (y) bağımsız değişken (x) cinsinden doğrudan yalnız bırakılamadığı karmaşık yapıların değişim oranları incelenir. Simülasyon yazılımlarında birbirine sıkı sıkıya bağlı çoklu donanım sensörlerinden gelen verilerin analizinde kapalı fonksiyon mantığı kullanılır. Eğrilerin her noktasındaki eğimi (teğeti) bulmak, bilgisayar grafiklerinde objelerin yüzey normallerini hesaplayarak ışıklandırma (rendering) yapmak için şarttır. Bu matematiksel zincir kuralları, arka arkaya çağrılan karmaşık kod fonksiyonlarının hata oranlarını hesaplamaya benzer. Matematiksel manevra kabiliyeti ve problem çözme ufku genişletilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/ImplicitDeriv.aspx' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kapal%C4%B1+fonksiyonlar%C4%B1n+t%C3%BCrevi' },
      ],
    },
    5: {
      description: `Matematiksel teorinin, reel dünyadaki optimizasyon (optimum noktayı bulma) problemlerine uygulandığı kısımdır. Algoritmaların çalışma süresini (time complexity) veya bellek kullanımını (space complexity) minimize etme stratejilerine matematiksel bir bakış açısı sunar. Bir üretim hattındaki maksimum verimi veya minimum maliyeti bulmaya yarayan optimizasyon kodları bu temellerle yazılır. Hız, ivme ve yol arasındaki ilişkiler kurgulanarak kinematik yazılım motorlarının algoritma akışları çıkarılır. Grafiklerin artan-azalan yönlerini belirlemek, veri analizinde trend değişim noktalarını (inflection points) tespit etmeyi sağlar.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/calculus-volume-1/pages/4-1-related-rates' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrevin+uygulamalar%C4%B1+maksimum+minimum' },
      ],
    },
    6: {
      description: `Önceki haftanın devamı olarak, Taylor serileri ve L'Hôpital kuralı gibi gelişmiş yaklaşımlarla hata payı hesabı ve limit belirsizlikleri çözülür. Bilgisayarlar trigonometrik veya üstel fonksiyonları doğrudan hesaplayamaz; bunun yerine Taylor serisi açılımlarını kullanarak iteratif algoritmalarla (yaklaşık olarak) çözerler. Bu durum, yazılımda performans ile hassasiyet (precision) arasındaki mühendislik ödünleşimini (trade-off) harika bir şekilde özetler. Fonksiyon grafiklerinin içbükey ve dışbükeylik analizleri, makine öğrenmesindeki optimizasyon yüzeylerini anlamayı kolaylaştırır. Matematik motorlarının arka planda matematiği nasıl "hacklediği" öğrenilir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtI.aspx' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrev+uygulamalar%C4%B1+grafik+%C3%A7izimi' },
      ],
    },
    7: {
      description: `Sinüs, kosinüs gibi fonksiyonların tersleri (arcsin, arccos vb.) ve bunların türevleri analiz edilir. Oyun programlama veya robotik kolların kontrol sistemlerinde (ters kinematik), bir noktanın koordinatlarından açıları hesaplamak için \`atan2\` gibi fonksiyonlara sürekli başvurulur. Sensörlerden gelen mesafe verilerini kullanarak donanımın çevreye olan açısını bulmak bu hesaplamalarla koda dökülür. İki boyutlu ve üç boyutlu uzay rotasyonlarında yönelim (orientation) tespitinin matematiksel formülleridir. Yazılımla fiziksel uzay algısı arasındaki bağlantılar güçlendirilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ters+trigonometrik+fonksiyonlar+ve+t%C3%BCrevi' },
      ],
    },
    8: {
      description: `Doğadaki büyüme hızlarını anlatan üstel fonksiyonlar ve bunların tersi olan logaritmik yapılar işlenir. Bilgisayar mühendisliğinde veri yapılarının (Örneğin Binary Search Trees) arama hızını belirleyen $O(\\log n)$ algoritma karmaşıklığı mantığı tamamen logaritmaya dayanır. Virüs yayılımları veya ağdaki veri trafiği patlamaları gibi katlanarak artan süreçlerin modellenmesi üstel fonksiyonlarla kodlanır. Kriptografi ve güvenlik protokollerinde büyük asal sayılarla yapılan hesaplamaların arka planını oluşturur. Logaritmik ölçekleme, devasa veri setlerinin grafiksel olarak anlamlı şekilde gösterilmesi (data visualization) için şarttır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/ExpLogDerivs.aspx' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%BCstel+ve+logaritmik+fonksiyonlar%C4%B1n+t%C3%BCrevi' },
      ],
    },
    9: {
      description: `Trigonometrik fonksiyonların çember yerine hiperbol eğrisine dayanan akrabaları (sinh, cosh, tanh) incelenir. Günümüzün en popüler alanı olan Derin Öğrenme (Deep Learning) ve yapay sinir ağlarında, veriyi belirli bir aralığa sıkıştıran 'tanh' aktivasyon fonksiyonu olarak sıklıkla kullanılır. Sarkan kablo veya zincirlerin (catenary curve) fiziksel modellemelerini yapan mühendislik simülasyonları için gereklidir. Karmaşık diferansiyel denklemlerin yazılımsal çözümlerini basitleştiren güçlü matematiksel araçlardır. Çok spesifik gibi görünse de veri biliminde ve sinyal işlemede karşınıza çıkacak temel bir taşdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/calculus-volume-1/pages/6-9-calculus-of-the-hyperbolic-functions' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=hiperbolik+fonksiyonlar+ve+t%C3%BCrevi' },
      ],
    },
    10: {
      description: `x ve y koordinatlarının birbirine doğrudan bağlanmak yerine, üçüncü bir parametreye (genellikle zamana 't') bağlı olarak ifade edilmesi öğrenilir. Bilgisayar animasyonlarında objelerin zaman içindeki konumlarını (pathfinding) pürüzsüzce kurgulamak için parametrik eğriler (Örneğin Bezier Curve) kullanılır. Otonom robotların veya dronların hedefe giderken izleyecekleri yörüngelerin hesaplamaları bu denklemler üzerinden algoritmalaştırılır. Veri tabanlarından zaman serisi (time-series) verileri çekilirken mantıksal bağıntıları doğru kurmayı sağlar. Hareketin ve zamanın kod içindeki matematiksel temsilidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=parametrik+denklemlerin+t%C3%BCrevi' },
      ],
    },
    11: {
      description: `Klasik kartezyen (x, y) düzlemi yerine, bir orijine uzaklık (r) ve açı ($\\theta$) bazlı çalışan kutupsal (polar) koordinat sistemlerine geçilir. Radar sistemleri, LiDAR sensörleri veya sonar verilerini okuyan yazılımların algoritmaları tamamen kutupsal veriler üretir. Dairesel hareket eden donanımların ve dairesel veri grafiklerinin (polar charts) modellenmesi kartezyen sisteme göre çok daha az işlemci gücü tüketir. Oyun geliştirmede hedef takip (homing missile) mekanikleri yazılırken açılara dayalı yönelim mantığını kurgular. Matematiksel referans sistemini değiştirerek, bazı algoritmaların mucizevi şekilde basitleştirilebileceğini gösterir.
[Image of polar coordinate system]`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/PolarCoordinates.aspx' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kutupsal+koordinatlar+kalk%C3%BCl%C3%BCs' },
      ],
    },
    12: {
      description: `Matematiğin limit ve türev teorilerinin kalbinde yer alan, sıfıra sonsuz derecede yaklaşan değerlerin teorik yapısı tartışılır. Bilgisayarların ondalıklı sayılarda (floating-point representation) yaşadığı yuvarlama hataları (rounding error) ve bellek sınırlarının anlaşılmasıyla doğrudan ilgilidir. Sayısal analiz algoritmaları yazarken (örneğin integralleri alanlarla hesaplarken) döngü hassasiyetini nerede kesmek gerektiğini belirlemeyi öğretir. Donanımın sınırlı bit kapasitesiyle doğanın sonsuz sürekliliğini taklit etmeye çalışırken ortaya çıkan mimari engelleri gösterir. Veri tiplerinin RAM üzerindeki hassasiyet limitleri teorik olarak desteklenir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Infinitesimal' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sonsuz+k%C3%BC%C3%A7%C3%BCkler+limit' },
      ],
    },
    13: {
      description: `Geometrik eğrilerin anlık kıvrılma oranlarını ölçen eğrilik (curvature) konsepti ve hesaplamaları öğrenilir. Otonom araç yazılımlarında direksiyon açılarını ve güvenli viraj dönüş hızlarını hesaplamak için yolların eğrilik yarıçapı denklemlere dahil edilir. Vektörel grafik tasarım araçlarında (Adobe Illustrator gibi) çizilen eğrilerin pürüzsüzlüğünü koruyan algoritmaların çekirdeğidir. Üç boyutlu modelleme ve oyun motorlarında zeminlerin kıvrımlarına göre tekerlek dinamiklerini hesaplamak için bu matematik kullanılır. Veri bilimi grafiklerinde anormallikleri veya sert trend dönüşlerini analitik olarak tespit etmeyi sağlar.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcIII/Curvature.aspx' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=e%C4%9Frilik+ve+e%C4%9Frilik+yar%C4%B1%C3%A7ap%C4%B1' },
      ],
    },
    14: {
      description: `Bir fonksiyonun belirli bir aralıktaki ortalama değişim hızının, o aralıktaki anlık bir hıza mutlaka eşit olacağını anlatan teoremler incelenir. Makine öğrenmesindeki kayıp fonksiyonlarının (loss function) yakınsama (convergence) garantisini ispatlarken bu tür ortalama değer teoremlerinden yararlanılır. Sayısal hesaplama algoritmalarında "hata sınırı (error bound)" oluşturarak, yazılan kodun en kötü senaryoda ne kadar yanılacağını matematiksel olarak garanti altına alır. Yazılımcıların sadece kod yazan değil, kodun kararlılığını ispatlayan mühendisler olmaları yolunda önemli bir teorik kanıttır. Dönem, matematiksel kesinliğin bilgisayar bilimlerindeki yerinin kavranmasıyla son bulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/MeanValueTheorem.aspx' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rolle+ve+ortalama+de%C4%9Fer+teoremi' },
      ],
    },
  },
  'TBT001 Temel Bilgi Teknolojileri Kullanımı': {
    1: {
      description: `Alanınıza ismini veren cihazın tarihsel evrimi, süper bilgisayarlardan mikrodenetleyicilere kadar sınıflandırılması ve temel çalışma mantığı (Von Neumann mimarisi) öğrenilir. Bu tarihçe, günümüz donanımlarının sınırlarını ve gelecekteki IoT (Nesnelerin İnterneti) cihazlarının potansiyelini anlamak için şarttır. Bilgisayarların analog makinalardan dijital sistemlere geçiş süreci, kodların alt seviyede donanımla nasıl konuştuğuna dair vizyon katar. İşlemci, bellek ve depolama birimlerinin veri hattı üzerindeki tarihsel darboğazları tartışılır. Temel kavramlarla, profesyonel bir mühendislik kariyerine ısınma turu atılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_fundamentals/computer_generations.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar%C4%B1n+tarih%C3%A7esi+ve+geli%C5%9Fimi' },
      ],
    },
    2: {
      description: `Bilgisayar sistemini ayağa kaldıran fiziksel bileşenler (CPU, RAM, Anakart) ve bunların üzerinde koşan sistem yazılımlarının iş bölümü tanıtılır. Donanım özellikleri analiz edilirken, farklı bileşenler (örneğin AMD işlemci ile Nvidia GPU) arasındaki uyumluluk ve performans dinamiklerini anlamak mühendisin temel görevidir. Çevre birimleri, sensörler ve giriş/çıkış (I/O) portları tanıtılarak ileride gömülü sistemler geliştirmek için zemin hazırlanır. Donanım (Hardware) dünyası ile yazılımın (Software) nerede kesiştiğine dair sektörel IT terminolojisi öğrenilir. Bileşenlerin kapasiteleri ve sistem performansına doğrudan etkileri karşılaştırılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://homepage.cs.uri.edu/faculty/wolfe/book/Readings/Reading02.htm' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+donan%C4%B1m+bile%C5%9Fenleri' },
      ],
    },
    3: {
      description: `Masaüstü pazarında en yaygın olan Windows işletim sisteminin mimarisi, dosya sistemleri (NTFS) ve yönetimsel araçları incelenir. İleride Linux veya Fedora gibi geliştirici ortamlarına geçiş yapılsa da, Windows ekosisteminde dizin yapıları ve yetkilendirme mantığını kavramak temel bir gerekliliktir. Komut istemi (CMD) veya PowerShell gibi araçlara giriş yapılarak, grafiksel arayüz yerine terminalden makinayı kontrol etme felsefesi aşılanır. Görev Yöneticisi ve süreç (process) yönetimi kullanılarak bilgisayar kaynaklarının yazılımlar tarafından nasıl tüketildiği analiz edilir. Çoklu platformlarda kod yazacak mühendisler için baz sistem mimarisidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/windows' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=windows+i%C5%9Fletim+sistemi+temelleri' },
      ],
    },
    4: {
      description: `Profesyonel dökümantasyon hazırlama standartlarına giriş yapılarak Word arayüzü ve temel dosya uzantıları (doc, docx, rtf) öğrenilir. Yazılım mühendisliği sadece kod yazmak değil; yazılan kodun kılavuzunu (documentation), proje analiz raporlarını ve staj dosyalarını nizami bir şekilde sunmaktır. Sürüm kontrollü sistemlere benzer şekilde, belgelerin kaydedilmesi, kurtarılması ve PDF formatında çıktı alınması süreçleri pratik edilir. Erasmus veya staj başvuruları için niyet mektupları ve CV'lerin yapılandırılacağı ana platformdur. Kurumsal iletişim standartlarına uygun belge üretme becerisi kazandırılır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/word' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=word+temel+kullan%C4%B1m+dersleri' },
      ],
    },
    5: {
      description: `Kelime işlemci üzerinde font, stil, hizalama, bul-değiştir (find and replace) gibi temel ve ileri düzey metin manipülasyon işlemleri incelenir. Düzenli ifadeler (RegEx) öğrenilmeden önce metin yığınları içinde arama yapma ve yapısal değişiklikler kurgulama mantığını geliştirir. Kapsamlı proje dökümanlarında "Stiller" özelliğini kullanarak tutarlı bir tasarım dili oluşturmanın önemi vurgulanır. Kod editörlerindeki (IDE) çoklu satır düzenleme veya syntax vurgulama mantıklarının günlük yazışmalardaki karşılığıdır. Kullanıcı deneyimini (UX) okuyucu gözünden test etmeyi öğretir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://edu.gcfglobal.org/en/word/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=word+metin+d%C3%BCzenleme+ve+stiller' },
      ],
    },
    6: {
      description: `Madde işaretleri, numaralandırma, satır aralıkları ve girintiler kullanılarak teknik dökümanların hiyerarşik yapıya kavuşturulması öğrenilir. Algoritmaların adım adım mantığını izah ederken veya proje adımlarını planlarken liste ve paragraf yapılarından geniş ölçüde yararlanılır. Otomatik İçindekiler tablosu oluşturmak, ileride yazılacak bitirme tezlerinin ve devasa yazılım kullanım kılavuzlarının olmazsa olmaz standardıdır. Karmaşık bilgi yığınlarını (spaghetti text), hiyerarşik yapılandırılmış bilgiye (structured data) çevirme alışkanlığı kazandırır. Raporların estetik ve okunabilirlik standartları yükseltilir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://edu.gcfglobal.org/en/word/paragraph-formatting/1/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=word+paragraf+ayarlar%C4%B1+ve+i%C3%A7indekiler' },
      ],
    },
    7: {
      description: `Verilerin satır ve sütun mantığıyla tablo formatına dönüştürülmesi, hücre bölme/birleştirme ve tasarım işlemleri gerçekleştirilir. Tablolar, ilişkisel veritabanlarının (RDBMS) iki boyutlu yapısını zihinsel olarak simüle etmek ve verileri yapılandırmak için harika araçlardır. Gereksinim analiz raporları hazırlarken özelliklerin ve kısıtlamaların tablolar halinde sunulması, yazılım mühendisliğinde evrensel bir standarttır. Karmaşık proje bütçelerini veya zaman çizelgelerini döküman içinde profesyonelce sunmayı kolaylaştırır. Tablo nesnelerinin özelliklerini yönetmek, nesneye yönelik düşünme (OOP) yapısına ufak bir pratiktir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/office/insert-a-table-in-word' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=word+tablo+olu%C5%9Fturma+ve+d%C3%BCzenleme' },
      ],
    },
    8: {
      description: `Hesap tablolarının (Spreadsheet) güçlü dünyasına adım atılarak, veri analizi ve yönetiminin en evrensel aracının arayüzü kavranır. Python gibi dillerde Pandas kütüphanesiyle veri işlemeden önce, CSV veya Excel dosyalarındaki verinin hücre (cell), satır (row) ve sütun (column) kavramlarını görsel olarak oturtmak şarttır. Devasa log dosyalarından veya sensör çıktılarından elde edilen ham verileri (raw data) temizleme süreçlerinin ilk denemeleri burada yapılır. Hücre koordinat sistemleri, çok boyutlu dizilerin (2D arrays) mantığını somut bir şekilde gösterir. Mühendislerin temel veri saklama ve hızlı analiz yapma platformudur.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/excel' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=excel+temel+e%C4%9Fitimi+h%C3%BCcreler' },
      ],
    },
    9: {
      description: `Temel matematiksel, mantıksal (IF, AND, OR) ve metin formüllerinin hücrelere gömülerek dinamik hesaplamalar yapılması öğrenilir. Excel'de formül yazmak, aslında prosedürel bir programlama dili yazmaya çok benzer; hatta Excel formülleri artık kendi başına bir programlama dili (Turing-complete) kabul edilmektedir. İleride kuracağınız \`if-else\` mantıklarının ve algoritmik hesaplamaların hücre bazlı çalışan hızlı prototipleridir. Hücre referansları (göreceli ve mutlak) mantığını kavramak, kodlama esnasında değişken referanslarını anlamaya direkt katkı sağlar. Algoritmik düşünceyi ofis uygulamaları üzerinde test etmenin en iyi yoludur.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://edu.gcfglobal.org/en/excel/intro-to-formulas/1/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=excel+form%C3%BCl+yazma+ve+mant%C4%B1ksal+fonksiyonlar' },
      ],
    },
    10: {
      description: `Veri doğrulama, koşullu biçimlendirme ve gelişmiş veri arama/filtreleme işlemleri ile hücre dinamikleri derinleştirilir. Büyük veri kümeleri içinde 'VLOOKUP' (Düşeyara) veya 'INDEX/MATCH' kullanımı, veritabanı sorgularının (SQL Join) temel mantığını anlamak için paha biçilemez bir temeldir. Koşullu biçimlendirme, yazılım panellerinde (dashboard) verinin durumuna göre arayüzün dinamik renk değiştirmesi mantığıyla aynıdır. Yanlış veri girişini engellemek için kurulan veri doğrulamaları (data validation), kodda yazacağınız hata önleme mekanizmalarının simülasyonudur. Sistemdeki verilerin güvenilirliğini artırma vizyonu aşılanır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/office/use-conditional-formatting-to-highlight-information-in-excel' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=excel+ko%C5%9Fullu+bi%C3%A7imlendirme+ve+veri+do%C4%9Frulama' },
      ],
    },
    11: {
      description: `Hücrelerdeki verilerin tiplerine göre (sayı, tarih, metin) formatlanması ve Pivot Tablolarla verilerin özetlenmesi işlemleri pratik edilir. Veri mühendisliği rotasında devasa logları ve sistem verilerini anlamlı istatistiklere (aggregation) dönüştürmenin en görsel aracı Pivot tablolardır. Veri tiplerinin bellekte kapladığı yeri optimize etmekle, Excel'de doğru formatı kullanmak benzer mühendislik disiplinleridir. Çok boyutlu verileri özetleyerek karar vericilere sunma sanatı geliştirilir. Grafik arayüzle "Büyük Veri" analizine atılan somut ve çok güçlü adımlardır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=excel+pivot+tablo+olu%C5%9Fturma' },
      ],
    },
    12: {
      description: `Makrolara (VBA - Visual Basic for Applications) giriş, çoklu çalışma sayfaları arasında linkler kurma ve ileri seviye istatistiksel fonksiyonlar işlenir. Makro kaydetmek, sürekli tekrarlanan ofis işlerini (otomasyon) arka planda kod yazarak bilgisayara devretmenin en somut ve ilk örneğidir. Gelişmiş veri projelerinde Python scriptleriyle Excel dosyalarının otomatize edilmesi için Excel'in obje modelini anlamak gerekir. Farklı sekmeler arasında kurulan formül bağları, mikroservislerin birbirine veri iletmesine benzer bir mantık içerir. Ofis aracını sadece bir tablo olmaktan çıkarıp çalışan bir uygulamaya çevirir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/office/quick-start-create-a-macro' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=excel+makrolar+ve+%C4%B0leri+fonksiyonlar' },
      ],
    },
    13: {
      description: `Geliştirilen projeleri ve yazılımları, teknik olmayan kullanıcılara veya yatırımcılara aktarmak için etkili sunum tasarlama araçları incelenir. Bir yazılımın ne kadar iyi kodlandığından bağımsız olarak, projenin arayüzü ve sunumu kötü ise değer görmeyeceği gerçeği ile yüzleşilir. Tasarım hiyerarşisi, renk paletleri ve asıl slayt (master slide) mantığı, Front-End (Ön yüz) geliştirmede CSS sınıfları kullanmakla benzer mantıktadır. Fikirlerin kısa, öz ve görsel materyallerle desteklenerek ikna edici bir formatta sunulması yeteneği geliştirilir. Mühendisin "iletişim" ve "Pazarlama" kaslarını güçlendiren bir platformdur.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/powerpoint' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=powerpoint+sunum+haz%C4%B1rlama+teknikleri' },
      ],
    },
    14: {
      description: `Sunumları multimedya ögeleri, geçiş efektleri ve animasyonlarla zenginleştirerek profesyonel pitch-deck (girişimci sunumu) seviyesine çıkarma işlemleri gerçekleştirilir. İleride katılacağınız Hackathon'larda jüriye yazılımınızı anlatırken uygulamanın ekran kayıtlarını (demo) pürüzsüzce sunuma gömmek hayati bir aşamadır. Animasyonların zamanlaması ve tetikleyicileri (triggers), arayüz geliştirmedeki (UI/UX) animasyon mantıklarıyla oldukça paraleldir. İzleyicinin odağını doğru görsel üzerinde tutmak için teknolojik ve psikolojik tasarım teknikleri harmanlanır. Dönem, yazılımcının projesini mükemmel bir şekilde 'satma' pratiği ile sona erer.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://support.microsoft.com/en-us/office/add-or-delete-audio-in-your-powerpoint-presentation' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=powerpoint+animasyon+ve+video+ekleme' },
      ],
    },
  },
  'TDİ101 Türk Dili I': {
    1: {
      description: `Dilin genel tanımı, toplumsal bir olgu olarak yapısı ve dünya dillerinin genel tarihsel sınıflandırması öğrenilir. Programlama dillerinin kurallar bütünü (syntax) olduğu gibi, doğal dillerin de kurallı ve sistematik bir yapı olduğu gerçeği tartışılır. Bir bilgisayar dilini derleyicilerin (compiler) anlaması gibi, iletişimde de insanların ortak kodlarla (dil) birbirini anlaması mantığı üzerine düşünülür. Mühendisin kavramsal düşünme yeteneğini ve analitik bakış açısını dilbilimi üzerinden geliştirmesi hedeflenir. Semantik (anlam bilim) ve sentaks (söz dizimi) kelimeleriyle bilgisayar bilimindeki soyutlama kavramları arasındaki paralellikler sezdirilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://turkoloji.cu.edu.tr/DILBILIM/dilbilim.php' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dil+nedir+dilin+%C3%B6zellikleri+t%C3%BCrk+dili' },
      ],
    },
    2: {
      description: `Algoritmaların sadece makineyi değil, onu kullanan toplumu da nasıl şekillendirdiği gibi, dilin de kültür ve düşünce yapısını doğrudan etkilediği incelenir. İletişim teorileri, takım çalışmalarında mühendisler arasındaki bilgi aktarımındaki "gürültüleri" ve anlaşmazlıkları en aza indirmek için değerli dersler sunar. İnsanın düşünce sınırlarının, bildiği kelimelerin ve dilin sınırlarıyla orantılı olduğu kavranır. Yazılımların yerelleştirilmesi (localization) süreçlerinde toplumun dil ve kültür alışkanlıklarının arayüze nasıl etki edeceği tartışılır. Sistem mimarisini kuran mühendisin, sosyolojik analizler yapma becerisine zemin hazırlar.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/tde/issue/11696/139556' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dil+k%C3%BClt%C3%BCr+d%C3%BC%C5%9F%C3%BCnce+ili%C5%9Fkisi' },
      ],
    },
    3: {
      description: `Dillerin morfolojik (biçimsel) ve köken akrabalıkları ile Türk dilinin Altay dil ailesindeki konumu ve sondan eklemeli (agglutinative) yapısı incelenir. Sondan eklemeli bir dili anlamak, modern Doğal Dil İşleme (NLP) algoritmalarında Türkçe kelimelerin köklerini bulma (stemming) süreçlerinin teknik zorluklarını kavramak için temel şarttır. Yazılım dillerinin farklı paradigmaları (fonksiyonel, nesne yönelimli) olması gibi doğal dillerin de yapısal farklılıkları olduğu anlaşılır. Çeviri algoritmalarının, örneğin İngilizce'den Türkçe'ye geçerken neden cümlenin tüm dizilimini tersine çevirmek zorunda kaldığı analiz edilir. Dilin matematiksel örüntüsünü fark etme bilinci aşılanır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://tdk.gov.tr/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dillerin+s%C4%B1n%C4%B1fland%C4%B1r%C4%B1lmas%C4%B1+ve+t%C3%BCrk%C3%A7enin+d%C3%BCnya+dilleri+aras%C4%B1ndaki+yeri' },
      ],
    },
    4: {
      description: `Anadil üzerinde hakimiyet kurmanın, kişinin karmaşık problemleri ifade etme ve soyut kavramları somutlaştırma yeteneğini nasıl artırdığı vurgulanır. Karmaşık algoritmaları ve sistem mimarilerini önce kendi anadilinde net bir şekilde kurgulayamayan bir mühendisin bunu koda doğru aktarması beklenemez. Kodda kullanılan değişken isimlerinin (naming conventions) ve yorum satırlarının (comments) açık, anlaşılır ve dilin doğasına uygun olması için gereklidir. İyi ifade edilmiş projeler ekip içinde daha hızlı kodlanır ve daha az mantık hatasına (logic error) sebep olur. Düşünsel netliğin, yazılım kalitesine doğrudan etkisi tartışılır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=anadili+egitimi' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=anadilini+do%C4%9Fru+kullanman%C4%B1n+%C3%B6nemi' },
      ],
    },
    5: {
      description: `Açıklık, yalınlık, duruluk, akıcılık ve tutarlılık gibi başarılı iletişimin temel taşları ve teknik yazarlık (technical writing) kuralları öğrenilir. Tıpkı "Temiz Kod" (Clean Code) yazma prensipleri gibi, iletişimde de gereksiz kelimelerden kaçınmak ve sadece odak noktasını sunmak amaçlanır. Bir fonksiyonun sadece tek bir iş yapması prensibi (Single Responsibility) gibi, bir paragrafın da tek bir ana fikri net bir şekilde vermesi hedeflenir. Müşteriden gereksinimleri (requirements) toplarken veya sunum yaparken yanlış anlaşılmaları (ambiguity) ortadan kaldırma sanatı pratik edilir. Etkili mühendislik dokümantasyonunun anayasası budur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63259/mod_resource/content/1/4.%20Hafta%20Ba%C5%9Far%C4%B1l%C4%B1%20Anlat%C4%B1m%C4%B1n%20Nitelikleri.pdf' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=iyi+bir+anlat%C4%B1m%C4%B1n+%C3%B6zellikleri' },
      ],
    },
    6: {
      description: `Etkili iletişim için veri toplama aşamaları olan okuma, dinleme ve gözlem yöntemleri yazılı anlatım için analiz edilir. Yazılım projelerinde müşteri ihtiyaçlarını tam anlamak için yapılan "Gereksinim Analizi" aşamasının iletişimsel provasıdır. Aktif dinleme, çevik yazılım geliştirme (Agile) toplantılarında diğer geliştiricilerin bloklandığı noktaları doğru analiz edebilmek için hayati bir beceridir. Toplanan ham veriyi beyinde süzerek yazılı, okunabilir çıktılara (raporlara) dönüştürme disiplini kazanılır. Empati ve analitik düşüncenin mühendislik projelerindeki pratik kullanımı vurgulanır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/course/view.php?id=3773' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=etkili+dinleme+okuma+ve+yaz%C4%B1l%C4%B1+anlat%C4%B1m' },
      ],
    },
    7: {
      description: `Konu seçimi, sınırlandırma, ana fikir belirleme, plan çıkarma (taslak) aşamalarıyla sistematik bir metin inşası pratiğe dökülür. Bir kod algoritması yazmadan önce kağıt üzerinde "Akış Şeması" veya "Sözde Kod" (Pseudocode) yazma mantığının metin üretimi tarafındaki yansımasıdır. Devasa bir projeyi mantıksal bölümlere ayırma (modüler düşünme) alışkanlığı yazılı raporlarda da uygulanır. Hedef kitleyi belirleyerek, yazıyı kullanıcının veya teknik uzmanın anlayacağı seviyeye göre ayarlama vizyonu kazanılır. Disiplinli ve planlı üretim süreçlerinin her alandaki faydası gösterilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/tde/issue/11696/139556' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1+anlat%C4%B1m+plan%C4%B1+nas%C4%B1l+yap%C4%B1l%C4%B1r' },
      ],
    },
    8: {
      description: `İmla kuralları, noktalama işaretleri ve dilbilgisi kurallarının standartları, profesyonel iletişimin gereği olarak incelenir. Kod yazarken unutulan bir noktalı virgülün programı çökertmesi gibi, yanlış kullanılan virgülün veya bağlacın resmi bir yazışmada ne kadar büyük anlam kargaşası yaratabileceği kavranır. Yazım kurallarına uyum, dökümantasyonlarınızın ve şirketiçi yazışmalarınızın kalite, ciddiyet ve profesyonellik metriklerini belirler. Detaylara dikkat etme, (attention to detail) hatasız (bug-free) kod yazmaya çalışan bir mühendisin ana karakter özelliklerindendir. Biçimsel disiplinin düşünsel kesinliğe katkısı tecrübe edilir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://tdk.gov.tr/icerik/yazim-kurallari/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrk%C3%A7e+yaz%C4%B1m+kurallar%C4%B1+ve+noktalama' },
      ],
    },
    9: {
      description: `İlk 8 haftadaki dilin kökeni, teknikleri ve ifade kurallarının teorik olarak sınandığı ara değerlendirmedir. Öğrencinin sistematik düşünceyi kağıda kurallı ve anlaşılır bir Türkçe ile dökme becerisi test edilir. İlerideki profesyonel hayatta yazılacak olan proje önerileri ve staj raporları öncesi bir kalite kontrol adımıdır. Kurallara (dilin syntax'ı) ve anlam bütünlüğüne (semantik) olan hakimiyet ölçümlenir. Dilin kurallı kullanımı konusundaki eksiklikleri tespit etmeyi sağlar.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Anlamda belirsizlik yaratan, çelişen veya mantık dışı kurulan cümlelerle oluşan anlatım bozuklukları teşhis edilip düzeltilir. Yazılımdaki "Bug Hunting" (hata ayıklama) işleminin doğal diller üzerindeki pratik bir örneği olarak görülebilir. Gereksiz kelime kullanımı veya yanlış bağlaçlar, kod bloklarındaki ölü kodları (dead code) veya mantıksal hataları (logic bomb) temizlemek ile aynı zihinsel süreci gerektirir. Açık uçlu kalan veya iki anlama gelebilen teknik ifadelerin, müşteri ile şirket arasında ne kadar maliyetli krizlere yol açabileceği tartışılır. İfadeleri refactor (yeniden yapılandırma) etme yeteneği aşılanır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63283/mod_resource/content/1/10.%20Hafta%20Anlat%C4%B1m%20Bozukluklar%C4%B1.pdf' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=anlat%C4%B1m+bozukluklar%C4%B1+t%C3%BCrk%C3%A7e' },
      ],
    },
    11: {
      description: `Farklı amaçlara yönelik kurulan metin stratejilerinin yapısal analizleri ve ne zaman hangi türün kullanılacağı öğrenilir. Yazılım kullanım kılavuzu (manuel) yazarken "açıklayıcı", algoritmik bir mimariyi savunurken veya yatırım ararken "kanıtlayıcı" anlatım kullanmanın önemi fark edilir. UX/UI senaryoları ve kullanıcı hikayeleri (User Stories) tasarlarken, doğru öyküleyici teknikler kullanarak sistem tasarımını müşteri gözünden yaşamak hedeflenir. İletişim stratejisinin hedefe göre modüler bir yapıda optimize edilebileceği görülür. Kullanıcının ikna edilmesi gereken tüm teknik satış süreçlerine hazırlıktır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/dted/issue/44588/553331' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=anlat%C4%B1m+bi%C3%A7imleri+t%C3%BCrk%C3%A7e' },
      ],
    },
    12: {
      description: `Makale, deneme, fıkra, sohbet ve eleştiri gibi düşünce ve bilgi aktarımına dayalı resmi/yarı resmi edebi türlerin formatları incelenir. İleride Medium, LinkedIn veya kişisel blogunuzda yazacağınız teknik makalelerin (technical articles) iskelet yapıları ve editoryal kuralları bu şablonlardan türer. Yaptığınız bir projenin teknik analizini yazarken makale ciddiyetini, kendi kariyer vizyonunuzu anlatırken ise daha akıcı ve samimi bir deneme dilini seçmeyi öğrenirsiniz. Farklı platformlar (API'ler) için farklı çıktı formatları üretme yeteneği gibi, mecra bazlı dil kullanımı geliştirilir. Bilgi ve tecrübeyi kitlelere nitelikli ulaştırmanın formatlarıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63289/mod_resource/content/1/12.%20Hafta%20Yaz%C4%B1l%C4%B1%20Anlat%C4%B1m%20T%C3%BCrleri.pdf' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=d%C3%BC%C5%9F%C3%BCnce+yaz%C4%B1lar%C4%B1+makale+deneme+sohbet' },
      ],
    },
    13: {
      description: `Dilekçe, özgeçmiş (CV), tutanak, rapor, iş mektupları gibi resmi ve formel belgelerin standart yazım kalıpları öğretilir. Kurumsal bir bilişim şirketine (örneğin Siemens) yapacağınız iş ve staj başvurularında ilk intibayı CV ve niyet mektubunuzdaki bu profesyonel üslup yaratacaktır. Şirket içinde çıkan bir sistem arızasını veya kriz durumunu üst yönetime aktarmak için tutanak ve "Post-mortem" raporların nasıl hazırlanacağı deneyimlenir. Bürokratik işleyiş ve resmi haberleşme hiyerarşisi, protokol yapıları (HTTP veya TCP gibi) üzerinden kavranır. Kariyerin hukuki ve idari yazışma altyapısı sağlamlaştırılır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.kutuphane.sakarya.edu.tr/sites/kutuphane.sakarya.edu.tr/file/Resmi_Yazisma_Kurallari_Egitimi_Sunumu.pdf' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dilek%C3%A7e+%C3%B6zge%C3%A7mi%C5%9F+rapor+nas%C4%B1l+yaz%C4%B1l%C4%B1r' },
      ],
    },
    14: {
      description: `Son hafta itibariyle, bilgiyi didaktik bir şekilde öğretme amacı güden türlerle, duygu hissettiren edebi ürünlerin genel özellikleri toparlanır. Başka yazılımcılar için hazırlanacak bir kütüphane dokümantasyonu (API Docs) veya eğitim slaytlarının tamamen didaktik bir yapıda tasarlanması gerektiği sonucuna varılır. Teknik bir konuyu bile ilgi çekici bir hikaye çerçevesinde (Storytelling) sunarak, dinleyici kitlesinin odaklanmasını sağlama stratejileri son kez değerlendirilir. Mühendis, karmaşık teknolojileri en yalın ve öğretici dille topluma aktarabilen bir köprü görevi görmelidir. İfade sanatının bilimle birleştiği nokta ile dönem son bulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63295/mod_resource/content/1/14.%20Hafta%20Sanatsal%20%28Edebi%29%20Metinler.pdf' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%B6%C4%9Fretici+ve+sanatsal+metinler' },
      ],
    },
  },
  'YDİ109 Yabancı Dil I (İngilizce)': {
    1: {
      description: `Gündelik hayat rutinleri, alışkanlıklar ve boş zaman aktivitelerini İngilizce ifade etmek üzere temel kelime dağarcığı ve geniş zaman (Present Simple) yapıları pratik edilir. Global yazılım ekipleriyle veya yabancı takım arkadaşlarıyla gerçekleştirilen toplantılardaki o ilk tanışma ve sosyalleşme sohbetlerinin temelidir. Kod bloklarının düzenli (tidy) veya spagetti (messy) olup olmadığı üzerine yapılan kod inceleme (Code Review) jargonlarının ilk ufak kelime antrenmanlarıdır. Teknik dilden önce, gündelik iletişim bariyerini aşmanın İngilizce korkusunu yıkmadaki rolü büyüktür. Zaman yönetimi kavramlarının dildeki karşılıkları öğrenilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-simple' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+geni%C5%9F+zaman+konu+anlat%C4%B1m%C4%B1' },
      ],
    },
    2: {
      description: `Geçmiş zaman yapıları (Past Simple) ve farklı yaşam tarzları üzerinden betimleyici karakter analizleri İngilizce olarak kurgulanır. Siber güvenlikte veya sistem mimarisindeki tehdit aktörlerini (villains/hackers) ve savunma mekanizmalarını hikayeleştirerek aktarmada geçmiş zaman yapılarına çokça başvurulur. Yazılımdaki eski sürümlerin veya daha önce çözülmüş bir 'bug'ın nasıl fixlendiğini Jira/Trello gibi proje yönetim araçlarında ifade etmek için Past Tense şarttır. Karakter özellikleri ve sıfatlar, oyun geliştirme veya simülasyon projelerinde obje özelliklerini tanımlarken sıkça karşınıza çıkar. Olay örgüsünü İngilizce özetleme becerisi artırılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+ge%C3%A7mi%C5%9F+zaman+past+simple' },
      ],
    },
    3: {
      description: `Kültürel farklılıklar, okuma metinleri üzerinden analiz edilir ve İngilizce okuduğunu anlama (Reading Comprehension) çalışmaları yapılır. Teknoloji dünyasının ortak dilinin İngilizce olduğu gerçeğiyle, yabancı bloglardan, Stack Overflow'dan veya Reddit'ten gelen farklı kültürlerin metinlerini analiz etme provasıdır. Yazılım dokümantasyonlarındaki resmi ve bazen dolambaçlı teknik İngilizce metinleri tarayıp ana fikri (skimming/scanning) çıkarma kasları çalıştırılır. Fikirlerin uluslararası platformlarda nasıl yankı bulduğunu kavrama vizyonudur. Okuma hızı ve yabancı metne maruz kalma eşiği yükseltilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+okuma+par%C3%A7alar%C4%B1+ve+%C3%A7evirisi' },
      ],
    },
    4: {
      description: `İlk üç haftada öğrenilen zamanların, kelimelerin ve okuma yeteneklerinin kısa bir geriye dönük revizyonu (review) yapılarak eksikler saptanır. Yazılım metodolojilerindeki "Sprint Retrospective" mantığı ile aynıdır; geriye dönüp nelerin iyi öğrenildiği ve hangi kuralların refactor edilmesi gerektiği analiz edilir. Konuşma ve yazma pratiklerinde tekrarlayan hataların (syntax errors in speaking) farkına varmak hedeflenir. İngilizce dil yapılarının bellekte kalıcı bir otomasyona (bilinçaltına) taşınması için tekrarın gücünden yararlanılır. Kendini değerlendirme, mühendisin sürekli öğrenme felsefesinin kalbidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+genel+tekrar+ve+pratik' },
      ],
    },
    5: {
      description: `Devam eden geçmiş zaman (Past Continuous) ve geçmişte kesişen eylemler üzerinden olay yeri hikayeleri (storytelling) ve eylem bağlaçları (when, while) işlenir. Sunucuda bir hata yaşandığında "Sistem çökerken arka planda şu script çalışıyordu" (While the server was crashing, ...) gibi hata raporlamalarında sıkça kullanılacak çok kritik bir zaman kalıbıdır. Aynı anda asenkron olarak çalışan iki farklı bilgisayar olayını sözlü veya yazılı olarak mantığa oturtmayı sağlar. "When" ve "While" yapıları, yazılımdaki döngü veya asenkron event listener mantıklarının doğal dildeki direkt karşılıklarıdır. Akıcı ve bağlı cümleler kurma yeteneği ivme kazanır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=past+continuous+tense+konu+anlat%C4%B1m%C4%B1' },
      ],
    },
    6: {
      description: `Modal fiiller (must, have to, should, can) kullanılarak zorunluluklar, tavsiyeler, yasaklar ve olasılıklar üzerinden ifadeler üretilir. Bir yazılım projesi kurulurken "Sistemin şu özellikleri barındırması gerekir" (The system must include...) şeklindeki sistem gereksinim analizi (System Requirements) standartlarının dilidir. Kurulum kılavuzlarında veya kütüphane talimatlarında "Şu paketi indirmelisiniz" veya "Şu portu açamazsınız" tarzı kesin teknik yönergeleri okuma ve yazma pratikleridir. Kurallı ve kısıtlayıcı yapıların İngilizce nasıl kibar veya kesin dille ifade edileceği öğrenilir. Mantıksal zorunluluklar dil bilgisine dökülür.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+modals+can+must+should' },
      ],
    },
    7: {
      description: `Pasif yapılar (Passive Voice) ve eylemi yapanın değil, eylemden etkilenenin vurgulandığı resmi veya gazetecilik üslubu incelenir. "Kod Ömer tarafından yazıldı" yerine "Kod yazıldı" (The code was written) diyerek odak noktasının projeye veya ürüne kaydırıldığı evrensel akademik ve teknik dili oluşturur. GitHub commit mesajları, hata logları ve sistem uyarı mesajlarının çok büyük bir çoğunluğu bu pasif İngilizce yapısıyla üretilir ve okunur. Mühendislik raporlarında kişisellikten uzak, tarafsız ve profesyonel (objective) bir dil yaratmanın tek yoludur. Eylemin kendisine odaklanma prensibi pekiştirilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/passive' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=passive+voice+konu+anlat%C4%B1m%C4%B1+ingilizce' },
      ],
    },
    8: {
      description: `Gelecek zaman kalıpları (will, be going to) kullanılarak teknolojik trendler, tahminler, planlamalar ve çevre vizyonları tartışılır. Yapay zeka, Endüstriyel IoT veya kuantum bilgisayarlar gibi ileri teknoloji vizyonlarını uluslararası makalelerden okuyabilmek ve üzerine İngilizce tartışabilmek için zemin hazırlar. Kariyer hedeflerinizi (planlı gelecek) staj ve iş mülakatlarında ifade etmek için "I am going to work as a Data Engineer" gibi yapıları otomatize etmenizi sağlar. Gelecek projeksiyonları ve tasarımlar, yazılım mimarilerinin ne yöne evrileceğini tartışırken sürekli kullanılır. Zaman ufku genişletilir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-the-future' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+gelecek+zaman+will+ve+going+to' },
      ],
    },
    9: {
      description: `Yabancı dildeki gramer, okuma ve kelime bilgisinin dönem ortasında teorik bir teste tabi tutulduğu haftadır. Algoritmaların hata (syntax error) verip vermediğinin kontrol edildiği gibi, kurulan İngilizce cümlelerin yapısal ve anlamsal doğruluğu da denetlenir. Öğrencilerin özellikle teknik literatürü anlama kapasiteleri dolaylı yoldan ölçümlenerek, okuma (reading) bariyerlerinin kırılıp kırılmadığı tespit edilir. Gelecek zaman ve pasif yapılar gibi mühendislik hayatında en çok kullanılacak konuların pekiştirilmesi sağlanır. Eksik öğrenilen yapıların tespit edilerek telafi edilmesi için kritik bir duraktır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Yön tarifleri, seyahat, coğrafi mekanlar ve lokasyon bildiren edatlar (prepositions of place) üzerine yoğunlaşılır. İleride GPS ve haritalama algoritmaları, otonom araçlar veya rota planlama yazılımları geliştirilirken lokasyon değişkenlerini anlatan İngilizce terminolojinin provasıdır. Erasmus veya yurtdışı projelerinde yeni bir şehre adapte olma, havalimanı ve ofis ortamlarında temel yol/yön iletişimini hızlıca sağlama hayati bir sosyal beceridir. Mobil uygulama geliştirirken (Android/iOS) lokasyon bazlı servislerin (LBS) dökümanlarını anlarken prepositions yapıları sıkça kullanılır. Konum kavramının dilbilgisine yansımasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/prepositions-of-place' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+y%C3%B6n+tarif+etme+ve+yer+edatlar%C4%B1' },
      ],
    },
    11: {
      description: `Finansal terimler, alışveriş, sayılamayan/sayılabilen isimler (Countable/Uncountable) ve miktar belirteçleri (much, many, a lot of) işlenir. E-ticaret platformları, ödeme sistemleri (FinTech) veya oyun içi satın alma (freemium model) algoritmaları kodlanırken kullanılacak evrensel iş İngilizcesine bir giriştir. Değişkenlerin sayılabilir mi (integer) yoksa sayılamaz mı veya belirsiz mi olduğunu sorgulamak veri tipleri mantığıyla yapısal olarak benzerlik gösterir. Freelance projeler alırken veya proje bütçesi planlarken yabancı müşterilerle yapılacak bütçe ve maaş müzakereleri için gerekli jargondur. Veri miktarlarını tanımlama kapasitesi artırılır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/countable-and-uncountable-nouns' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+say%C4%B1labilen+ve+say%C4%B1lamayan+isimler' },
      ],
    },
    12: {
      description: `Gelenekler, kutlamalar ve sıfat cümlecikleri (Relative Clauses) kullanılarak isimlerin detaylıca tanımlanması ve birbirine bağlanması öğrenilir. Bir fonksiyona parametre göndererek onu özelleştirmek gibi, İngilizcede "who, which, that" yapıları ile de bir nesne veya kişiye daha spesifik bir anlam yüklenir. "The code *which* I wrote yesterday" diyerek nesneleri net bir şekilde izole ve işaret etme (pointer mantığı) becerisi kazanılır. Yabancı şirketlerin kültürlerine, tatil günlerine adaptasyon sağlamak kurumsal uyumluluğun bir parçasıdır. Karışık ve detaylı, zincirleme teknik cümleler kurma kapasitesi hedeflenir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/relative-clauses' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=relative+clauses+konu+anlat%C4%B1m%C4%B1+ingilizce' },
      ],
    },
    13: {
      description: `İletişim araçları, teknoloji aletleri, bilgisayar terminolojisi ve present perfect tense yapıları ile yakın geçmişin günümüze etkileri analiz edilir. Bilgisayar mühendisliğinin ana kelime dağarcığına en yakın modüldür, donanım ve yazılım ürünlerinin özelliklerini İngilizce anlatma pratiği yapılır. Present Perfect kalıbı, kodda bir güncelleme yapılıp sonucunun an itibariyle sistemde geçerli olduğunu (I have updated the server) anlatmak için IT sektörünün en sık kullandığı zamandır. Resmi yazışmalarda ve durum güncellemelerinde (status updates) zaman bağlamını doğru kurmayı öğretir. Geliştirilen projelerin sunum dili pekiştirilir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=present+perfect+tense+konu+anlat%C4%B1m%C4%B1+ingilizce' },
      ],
    },
    14: {
      description: `Koşullu cümleler (If clauses Type 0, 1, 2) üzerinden varsayımsal senaryolar, ihtimaller ve koşul/sonuç ilişkileri üzerine dil pratikleri gerçekleştirilir. Bilgisayar bilimindeki \`if-else\` mantığının İngilizce dil yapısındaki birebir karşılığı olan çok hayati bir iletişim ve programlama modülüdür. Sistem algoritmalarını doğal dille "Eğer kullanıcı bu butona basarsa, şu veri silinir" (If the user clicks... it will...) şeklinde ifade ederek yazılım tasarımı konuşmaları yapılır. Beklenmedik senaryolar veya risk analizleri planlanırken (What if...?) mühendisin İngilizce tartışma kapasitesini zirveye taşır. Algoritmik düşünceyi ana dilden çıkarıp İngilizce mantığıyla işletme yeteneğiyle dönem tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/conditionals-1' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=if+clauses+konu+anlat%C4%B1m%C4%B1+ingilizce' },
      ],
    },
  },
  'BMB110 Bilgisayar Programlama': {
    1: {
      description: `Yazılım dünyasına atılan bu ilk adımda, donanım ile iletişim kurmanın en temel yollarından biri olan C dilinin tarihsel evrimi öğrenilir. İşletim sistemlerinin (örneğin Fedora Linux veya Windows) çekirdek mimarilerinin neden bu dille yazıldığı analiz edilir. Sayı sistemleri, makinenin veriyi alt seviyede nasıl sakladığını anlamak için hayati bir matematiksel temel sunar. İleride veri mühendisliği veya bulut teknolojileri (cloud tech) alanında çalışırken performans darboğazlarını anlamanın yolu bu temelden geçer. Bilgisayarın evrimini bilmek, gelişime odaklı bir mühendisin gelecekteki teknolojileri öngörebilmesini sağlar.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cprogramming/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+giri%C5%9F+tarih%C3%A7e' },
      ],
    },
    2: {
      description: `Kod yazmaya geçmeden önce bir problemin çözüm adımlarını mantıksal ve görsel olarak nasıl tasarlayacağınız öğretilir. Akış diyagramları, karmaşık bir endüstriyel otomasyon (IIoT) sürecini veya bir veri boru hattını (pipeline) planlarken kullanılacak evrensel mühendislik dilidir. Hata ayıklama (debugging) sürecini kolaylaştırmak için algoritmanın kağıt üzerinde kusursuz işlemesi gerektiği vurgulanır. Bu görselleştirme, takım çalışmalarında projeyi diğer mühendislere anlatmanın en temiz yoludur. Mantıksal tasarımın kodlamadan daha önemli bir mühendislik aşaması olduğu kavranır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/flowchart-in-programming/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=algoritma+ve+ak%C4%B1%C5%9F+diyagramlar%C4%B1+c+programlama' },
      ],
    },
    3: {
      description: `Geliştirilen programın dış dünyayla ve kullanıcıyla iletişim kurmasını sağlayan temel giriş/çıkış (I/O) fonksiyonları öğrenilir. Konsol ekranına veri yazdırmak ve klavyeden komut almak, interaktif yazılımlar geliştirmenin ilk adımıdır. Doğru format belirleyicilerini (format specifiers) kullanmak, bellekteki verinin ekrana bozulmadan yansımasını garantiler. Bu basit fonksiyonlar, ileride devasa veri setleriyle veya log dosyalarıyla çalışırken veriyi terminalden takip etmenin temelini oluşturur. Kodun çalıştığını ve doğru tepkiler verdiğini görmenin en pratik yoludur.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_user_input.php' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+printf+scanf' },
      ],
    },
    4: {
      description: `Verilerin bilgisayar belleğinde (RAM) kapladıkları alanlara göre sınıflandırıldığı veri tipleri (integer, float, char vb.) derinlemesine incelenir. Sadece 30.000 e-postalık bir arşivi analiz eden bir araç (MailTrace gibi) yazarken bile yanlış veri tipi seçimi bellek taşmalarına yol açabilir. Değişkenlerin geçerlilik alanları (scope) öğrenilerek güvenli ve izole kod blokları yazma pratiği edinilir. Yüksek performanslı bilgisayarların (örneğin RTX 4060 GPU'lu sistemlerin) gücünü boşa harcamamak için optimum bellek kullanımı hedeflenir. Her verinin bir kimliği ve boyutu olduğu gerçeği yazılımcı vizyonuna eklenir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-types-in-c/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+de%C4%9Fi%C5%9Fkenler+ve+veri+tipleri' },
      ],
    },
    5: {
      description: `Bilgisayarın işlemcisine (CPU) yaptırılacak matematiksel hesaplamaların ve karşılaştırma operatörlerinin (AND, OR, NOT) koda dökülmesidir. Görüntü işleme kütüphaneleri (OpenCV) kullanarak yazılacak bot projelerinde pikseller arası matematiksel farkları hesaplamak bu operatörlerle yapılır. Mantıksal kapıların yazılımdaki karşılığı olan bu işlemler, karar mekanizmalarının beynini oluşturur. İşlem öncelikleri (operator precedence) kavranarak karmaşık formüllerin hatasız derlenmesi sağlanır. Temel matematik, güçlü ve işlevsel bir yazılımın omurgasına yerleştirilir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cprogramming/c_operators.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+operat%C3%B6rler' },
      ],
    },
    6: {
      description: `Programın düz bir çizgide akmak yerine koşullara göre farklı yollara sapmasını sağlayan \`if-else\` ve \`switch-case\` yapıları öğrenilir. Yapay zeka veya bot yazılımlarında "ekranda şu renk varsa şu tepkiyi ver" gibi dinamik kararlar tamamen bu yapılarla kodlanır. Hata yönetimi (error handling) yaparken sistemin çökmesini engellemek için alternatif çıkış yolları kurgulanır. Karmaşık iş kurallarını sade mantıksal bloklara bölerek temiz kod (clean code) yazma alışkanlığı kazandırılır. Yazılımın zeka belirtisi gösterdiği ve tepkisel hale geldiği en temel konudur.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_conditions.php' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+if+else+switch+case' },
      ],
    },
    7: {
      description: `Belirli bir koşul sağlandığı sürece kod bloklarının otomatik olarak tekrarlanmasını sağlayan \`while\` ve \`do-while\` döngüleri incelenir. Arka planda sürekli çalışan sunucu dinleyicileri (server listeners) veya oyun döngüleri (game loops) bu mantık üzerine inşa edilir. Döngünün ne zaman kırılacağını (break) doğru hesaplamak, sonsuz döngüye (infinite loop) girerek sistemi kilitlememek için kritiktir. Koşulun başta mı yoksa sonda mı kontrol edileceğine karar vermek algoritmik esnekliği artırır. Tekrar eden manuel işleri bilgisayarın muazzam hızına devretmenin ilk aşamasıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cprogramming/c_while_loop.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+while+do+while+d%C3%B6ng%C3%BCs%C3%BC' },
      ],
    },
    8: {
      description: `Tekrar sayısının önceden net olarak bilindiği durumlarda kullanılan ve çok daha kompakt bir yapı sunan \`for\` döngüleri öğrenilir. Çok boyutlu verileri taramak, diziler (arrays) içinde arama yapmak veya matematiksel serileri hesaplamak için en sık başvurulan yapıdır. Veri analitiği projelerinde milyonlarca satırı saniyeler içinde işlemek için döngü optimizasyonunun mantığı burada atılır. Sayaç (counter) değişkenlerini doğru yöneterek bellek sınırlarına sadık kalma disiplini aşılanır. Iteratif algoritmaların yazılım mimarisindeki gücü ve yeri sağlamlaştırılır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_for_loop.php' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+for+d%C3%B6ng%C3%BCs%C3%BC' },
      ],
    },
    9: {
      description: `Aynı veri tipindeki birden fazla bilginin bellekte ardışık (sıralı) olarak nasıl saklanacağı ve tek bir isim altında nasıl yönetileceği kavranır. Oyun geliştirmeden makine öğrenmesine kadar her alanda veriyi liste halinde tutmak (örneğin skor tabloları veya sensör verileri) dizilerle yapılır. Dizilerin indeksleri üzerinde dolaşarak sıralama (sorting) ve arama (searching) algoritmaları yazmanın pratik altyapısıdır. Bellekte statik olarak ne kadar yer ayrılacağını (memory allocation) hesaplamak sistem performansını doğrudan etkiler. Toplu veriler üzerinde toplu işlemler yapma yeteneği kazandırılır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/c-arrays/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+diziler+arrays' },
      ],
    },
    10: {
      description: `Sürekli tekrar eden kod bloklarının bağımsız parçalara ayrılarak modüler bir yazılım mimarisi kurmanın temelleri atılır. Projeleri (örneğin video transkript eden bir script) küçük alt görevlere bölmek, kodun okunabilirliğini ve yönetilebilirliğini muazzam derecede artırır. Değer döndüren (return) veya parametre alan fonksiyonlarla veri manipülasyonunun izole bir ortamda nasıl yapıldığı incelenir. Başka projelerde de kullanılabilecek özel kütüphaneler (custom libraries) oluşturmanın mantığını öğretir. Spagetti kod yazmaktan kurtulup, profesyonel bir yazılım mimarı gibi düşünme yetisi gelişir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_functions.php' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+fonksiyonlar' },
      ],
    },
    11: {
      description: `Farklı veri tiplerini (metin, sayı, ondalıklı) tek bir paket altında toplayarak gerçek dünyadaki karmaşık nesneleri modellemeyi sağlayan \`struct\` yapısı öğrenilir. İleride öğrenilecek olan Nesne Yönelimli Programlama (OOP) dillerindeki (C#, Python) 'Sınıf' (Class) mantığının ilkel ve temel halidir. Bir öğrencinin adı, notu ve bölümü gibi verileri gruplayarak veritabanı mantığına uygun kayıt yapıları (records) oluşturulur. Karmaşık projelerde değişken karmaşasını önleyerek verileri hiyerarşik bir düzene sokar. Sistem modelleme ve veri mühendisliği için son derece kritik bir konsepttir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_structs.php' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+struct+yap%C4%B1lar' },
      ],
    },
    12: {
      description: `C dilinin en güçlü, bir o kadar da karmaşık özelliği olan ve doğrudan bellekteki fiziksel adreslerle işlem yapmayı sağlayan işaretçiler (pointers) tanıtılır. Değişkenlerin değerini kopyalamak yerine doğrudan adresini referans göstererek (pass by reference) sistem kaynaklarının (RAM) olağanüstü verimli kullanılması sağlanır. Gömülü sistemlerde veya oyun motorlarında mikrosaniyelik performans kayıplarını engellemek için donanıma en yakın seviyede kod yazmanın anahtarıdır. Bellek mimarisinin çalışma prensibini sadece teoride değil, pratik kodlamada da deneyimlemeyi sağlar. Gerçek bir sistem programcısı (system programmer) olmanın kapılarını aralar.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/c-pointers/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+pointer+i%C5%9Faret%C3%A7iler' },
      ],
    },
    13: {
      description: `İşaretçi aritmetiği, dizilerle işaretçiler arasındaki yakın ilişki ve fonksiyonlara işaretçi gönderme gibi ileri düzey bellek yönetim teknikleri işlenir. Çok boyutlu dizileri veya devasa veri bloklarını bellekte fonksiyonlar arası taşırken yaşanan gecikmeler bu sayede ortadan kaldırılır. Bellekteki (heap) verilerin yönetimini tam anlamıyla yazılımcının kontrolüne vererek yüksek optimizasyonlu algoritmalar kurma imkanı tanır. İşletim sistemi çekirdeği (kernel) yazılımı veya sürücü (driver) geliştirmelerinde kullanılan zorunlu bir donanımsal müdahale aracıdır. Kodun çalışma süresini (execution time) ve performansını zirveye çıkarma sanatıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cprogramming/c_pointers.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+pointer+aritmeti%C4%9Fi' },
      ],
    },
    14: {
      description: `Program çalışırken (runtime) ihtiyaca göre bellekten ne kadar alan tahsis edileceğine (\`malloc\`, \`calloc\`) ve bu alanın nasıl geri iade edileceğine (\`free\`) karar verilmesi öğrenilir. Önceden boyutu bilinmeyen büyük verileri (örneğin internetten çekilen dinamik log dosyaları) işlerken belleğin şişmesini (memory leak) engellemek hayati bir mühendislik görevidir. Kısıtlı RAM kapasitesine sahip IoT cihazlarında veya endüstriyel otomasyon kartlarında kaynakları dinamik yönetmek projenin kaderini belirler. C dilinin modern dillere (çöp toplayıcısı olan dillere) kıyasla neden hala en performanslı dil olduğunu kanıtlayan konudur. Gelişime odaklı bir mühendis olarak dönemi, donanım kaynaklarına tam hakimiyet kurarak tamamlarsınız.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+dinamik+bellek+y%C3%B6netimi+malloc' },
      ],
    },
  },
  'FZK108 Fizik II': {
    1: {
      description: `Elektromanyetizma dünyasına giriş yapılarak, bilgisayarın donanımını var eden elektrik yüklerinin doğası ve birbirlerine uyguladıkları kuvvetler öğrenilir. Yarı iletken teknolojisi ve transistörlerin üretim mantığını kavramak için iletkenlik ve yalıtkanlık kavramlarının fiziksel temelleri analiz edilir. Bilgisayar anakartlarındaki mikro bileşenlerin elektromanyetik etkileşimlerini hesaplayan formüller (Coulomb) bu ilkelerden doğar. Yazılımların komut gönderdiği fiziksel kapıların (logic gates) enerji ile nasıl tetiklendiğine dair donanım vizyonu kazandırılır. Gözle görülmeyen elektriksel kuvvetlerin dijital dünyayı nasıl şekillendirdiği anlaşılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+coulomb+yasas%C4%B1+ve+elektrik+alan' },
      ],
    },
    2: {
      description: `Elektrik yüklerinin uzayda yarattığı görünmez etki alanı olan elektrik alan kavramı ve bunun vektörel modellenmesi incelenir. Kablosuz iletişim teknolojilerinin, sensörlerin ve antenlerin (örneğin Wi-Fi veya Bluetooth modülleri) çalışma mantığı bu görünmez alanların matematiksel analizine dayanır. Elektrik dipolleri, moleküler düzeydeki bellek depolama (flash memory) teknolojilerinde verinin nasıl yönlendirildiğini anlamanızı sağlar. Yazılım algoritmalarının kontrol ettiği donanımların fiziksel çevresiyle (sinyal yayılımı) etkileşimini modelleme yeteneği artar. Soyut elektriksel kuvvetlerin uzaysal haritası çıkarılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/18-4-electric-field-concept-of-a-field-revisited/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+elektrik+alan+%C3%A7izgileri+ve+hesaplamalar%C4%B1' },
      ],
    },
    3: {
      description: `Kapalı bir yüzeyden geçen elektrik alan çizgisi miktarını hesaplamaya yarayan Gauss yasası ve simetrik cisimlerin elektrik akı analizleri öğrenilir. Bilgisayar kasaları ve hassas ölçüm cihazlarında, dışarıdan gelen elektromanyetik parazitleri engellemek için kullanılan "Faraday Kafesi" mantığı tamamen iletkenler üzerindeki yük dağılımına dayanır. Bu matematiksel yasa, büyük veri setlerini veya çoklu sensör verilerini filtreleyen algoritmaların sinyal/gürültü (SNR) oranlarını optimize etmekte temel referanstır. Karmaşık hacimlerin içindeki elektriksel durumu sadece dış yüzeyine bakarak çözme (optimizasyon) yeteneği katar. Hesaplama yükünü azaltan zarif fiziksel teoremler keşfedilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+gauss+yasas%C4%B1+ve+uygulamalar%C4%B1' },
      ],
    },
    4: {
      description: `Günlük hayatta "voltaj" olarak bildiğimiz elektriksel potansiyelin ve enerjinin konumla olan ilişkisi detaylıca incelenir. İşlemcilerin (CPU) ve grafik kartlarının (GPU) besleme voltajlarını ayarlarken (undervolting) enerji verimliliği ve ısı dengesini kurmanın fiziksel kuralları burada yatar. Potansiyel gradyan kavramı, makine öğrenmesindeki "Gradient Descent" algoritmasına ilham veren, verinin en dik düşüş yönünü bulma mantığıyla aynı fiziksel olgudur. Yüksek frekanslı devrelerde verinin (1 ve 0'ların) voltaj farkları üzerinden nasıl yorumlandığı kavranır. Enerji dönüşümlerini analitik bir biçimde hesaplama ufku aşılanır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+elektriksel+potansiyel+ve+enerji' },
      ],
    },
    5: {
      description: `Kısa süreli enerji depolayan ve ani güç dalgalanmalarını filtreleyen donanım bileşenleri olan kapasitörlerin (sığaçlar) fiziksel yapıları öğrenilir. Yüksek performanslı bilgisayar anakartlarında (örneğin Ryzen veya Intel tabanlı sistemlerde) işlemciye anlık temiz güç sağlayan VRM yapılarının can damarı kapasitörlerdir. Ses kartlarındaki sinyal gürültülerini filtreleyerek Sennheiser veya Sony gibi üst düzey kulaklıklara yüksek sadakatli (high-fidelity) ses iletilmesini sağlayan filtreleme algoritmalarının analog karşılığıdır. Devre şemalarını analiz edebilmek ve donanım limitlerini yazılım koduna uygun kalibre etmek için şarttır. Enerjinin sistem içinde nasıl tamponlandığı keşfedilir.
[Image of parallel plate capacitor circuit]`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+s%C4%B1%C4%9Fa%C3%A7lar+ve+kapasit%C3%B6rler' },
      ],
    },
    6: {
      description: `Elektrik yüklerinin hareketi olan akım, iletkenin direncine karşı harcanan güç ve Joule ısınması (P=I²R) konuları incelenir. Sunucu odalarının veya oyun laptoplarının termal yönetim (thermal throttling) sistemlerini kodlarken, çekilen akımın ne kadar ısı ürettiğini bilmek hayati önem taşır. Özdirenç kavramı, endüstriyel iot (IIoT) sensörlerinden gelen verilerin uzun kablolar boyunca yaşadığı sinyal kaybını telafi eden yazılımlar geliştirmeye yardım eder. Elektrik faturalarını ve veri merkezlerinin güç tüketim analizlerini (PUE metrikleri) hesaplayan algoritmaların fiziksel temelidir. Elektriksel gücün yazılımı nasıl ayakta tuttuğu kavranır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+elektrik+ak%C4%B1m%C4%B1+diren%C3%A7+ve+g%C3%BC%C3%A7' },
      ],
    },
    7: {
      description: `Karmaşık devre ağlarını çözmek için kullanılan Kirchhoff'un akım ve voltaj yasaları (düğüm ve çevre denklemleri) pratik edilir. Gömülü sistem yazılımı geliştirirken voltmetre veya osiloskop ile okunan sensör verilerinin matematiksel doğruluğunu test etmek için bu kurallar referans alınır. RC (Direnç-Kapasitör) devreleri, sinyal işlemede ve yazılımsal zamanlama döngülerinde (timer algorithms) donanımsal gecikme (delay) yaratmanın klasik yöntemidir. Çizge teorisi (Graph theory) kullanarak karmaşık algoritmik ağların (networks) optimizasyonunu hesaplamaya inanılmaz derecede benzer bir disiplindir. Analog donanım hatalarını yazılımsal verilerle bulma (debugging) vizyonu gelişir.
[Image of Kirchhoff's circuit laws diagram]`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/a/ee-kirchhoffs-laws' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+kirchhoff+kurallar%C4%B1+ve+devre+%C3%A7%C3%B6z%C3%BCm%C3%BC' },
      ],
    },
    8: {
      description: `Ara değerlendirmenin ardından, elektrikten manyetizmaya geçiş yapılarak hareketli yüklerin yarattığı manyetik kuvvetler (Lorentz Kuvveti) analiz edilir. Sabit disklerdeki (HDD) veri okuma/yazma kafalarının çalışma prensibi tamamen bu manyetik alan kutuplaşmalarına (0 ve 1) dayanır. Kütle spektrometreleri veya eski tip elektron tüplü (CRT) monitörlerdeki parçacık yönlendirme işlemleri yazılımla kalibre edilirken bu formüller kullanılır. Manyetik sensörlerden (örneğin pusula modülü) gelen verileri işleyerek otonom araçlara yön bulduran algoritmaların çekirdeğini oluşturur. Dijital verinin fiziksel depolama mantığına dair büyük bir sır perdesi aralanır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+manyetik+alan+ve+manyetik+kuvvet' },
      ],
    },
    9: {
      description: `Elektrik akımı ile manyetik alan etkileşimi derinleştirilerek iletkenlerin birbirine veya manyetik alana uyguladığı mekanik tork hesaplanır. Endüstriyel otomasyondaki CNC tezgahlarını, robotik kolları ve fırçasız (brushless) motorları hareket ettiren kuvvet tam olarak bu etkileşimdir. Yazılım üzerinden donanıma gönderilen PWM (Pulse Width Modulation) sinyalleri ile bu manyetik torkun hızı ve açısı milimetrik olarak kontrol edilir. Biot-Savart yasası kullanılarak karmaşık akım yollarının (örneğin işlemci devre yollarının) oluşturduğu manyetik gürültüler (crosstalk) öngörülür. Yazılımın dijital emrinin, fiziksel mekanik bir dönüşe (harekete) nasıl dönüştüğü öğretilir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/22-7-magnetic-force-on-a-current-carrying-conductor/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+manyetik+tork+ve+biot+savart+yasas%C4%B1' },
      ],
    },
    10: {
      description: `Manyetik alanı simetrik kapalı yollar etrafında çok daha kolay hesaplamayı sağlayan Ampere Yasası ve iletken kablolar arası etkileşimler işlenir. Yüksek veri hızlarına sahip Ethernet veya Fiber kabloları döşenirken, kablolar arası manyetik parazitlenmenin (interference) sinyal kaybına yol açmasını engellemek için bu kurallar gözetilir. Bobin (indüktör) yapılarının manyetik yoğunluk analizleri yapılarak, bilgisayarın güç kaynaklarının (PSU) tasarım mantığı çözülür. Veri iletişim (telekomünikasyon) algoritmaları tasarlarken veri bozulmalarını öngören hata düzeltme kodlarının (Error Correction Codes) fiziksel gerekçesidir. Makro boyuttaki akımların uzaysal haritası Ampere yasası ile sadeleştirilir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/22-9-magnetic-fields-produced-by-currents-amperes-law/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+ampere+yasas%C4%B1+ve+uygulamalar%C4%B1' },
      ],
    },
    11: {
      description: `Manyetik akıdaki değişimin nasıl elektrik akımı ürettiğini açıklayan Faraday İndüksiyon Yasası ve fizik biliminin başyapıtı Maxwell Denklemleri öğrenilir. Üst düzey kulaklıkların içindeki dinamik sürücülerin veya mikrofonların havadaki ses dalgalarını elektriksel dijital verilere dönüştürme prensibi tamamen Faraday indüksiyonudur. RFID kartları (temassız ödeme/geçiş) veya kablosuz şarj (wireless charging) teknolojilerinin yazılımlarını geliştirmek için bu elektromanyetik dalga kuralları bilinmelidir. Maxwell denklemleri, optik fiber ağlardan uydu iletişimlerine kadar günümüz bilgi teknolojileri çağını başlatan en yüce matematiksel ifadelerdir. Evrensel iletişim teknolojilerinin donanımsal anayasası bu haftada özetlenir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnetic-flux-faradays-law/a/what-is-faradays-law' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+faraday+ve+lenz+yasas%C4%B1+ind%C3%BCksiyon' },
      ],
    },
    12: {
      description: `Bir devrenin sadece etrafını değil, kendi içindeki akım değişimlerine karşı da nasıl bir manyetik direnç (öz-indüksiyon) gösterdiği incelenir. İndüktörler (bobinler) kullanılarak bilgisayar güç devrelerinde ani akım çekilmelerinin (spike) donanıma zarar vermesinin fiziksel olarak nasıl engellendiği kavranır. Enerjinin elektrik alan (kapasitör) yerine manyetik alanda depolanması ve salınması süreçleri analiz edilir. Sinyal filtreleme yazılımlarında düşük geçiren (Low-pass) veya yüksek geçiren (High-pass) donanımsal filtrelerin arkasındaki çalışma dinamiğidir. Ani değişimlere karşı sistem kararlılığını (stability) koruyan fizik kurallarıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/23-8-inductance/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+%C3%B6z+%C4%B0nd%C3%BCksiyon+ve+manyetik+enerji' },
      ],
    },
    13: {
      description: `Direnç, kapasitör ve indüktör elemanlarının bir arada kullanıldığı salınımlı devrelerin diferansiyel denklemleri ve zamana bağlı davranışları çözülür. Vericilerin ve alıcıların (örneğin radyolar veya IoT haberleşme modülleri) belirli bir frekansa ayarlanmasını sağlayan rezonans mantığı LC devrelerinden gelir. Bilgisayar sistem saatini (clock speed) üreten ve işlemciye senkronizasyon vuruşları gönderen osilatörlerin matematiksel modellemesidir. Yazılımsal döngülerdeki sönümlenme veya amplifikasyon (yükseltgenme) süreçleri analog donanım üzerinde gözlemlenir. Zaman alanından (time domain) frekans alanına (frequency domain) geçişin kapısı aralanır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+rl+lc+ve+rlc+devreleri' },
      ],
    },
    14: {
      description: `Zamanla yön değiştiren alternatif akımın (AC) vektörel olarak fazörlerle ifade edilmesi ve empedans, rezonans, transformatör kavramlarıyla dönem tamamlanır. Veri merkezlerinin veya endüstriyel tesislerin devasa AC güç altyapılarını yöneten yazılımların algoritmik güç (Power Factor Correction) ve verimlilik hesaplamaları bu bilgilere dayanır. Faz farklılıkları ve rezonans, ses mühendisliği projelerinde veya kablosuz ağ frekanslarının çakışmasını engelleyen protokollerde kullanılır. Elektriği dönüştüren transformatörler, dijital donanımın ihtiyaç duyduğu saf ve düşük voltajı sağlamanın son adımıdır. Dönem, bilgisayar biliminin fiziksel sınırlarını belirleyen elektromanyetizma kurallarının kapsamlı vizyonuyla sona erer.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/23-11-reactance-inductive-and-capacitive/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+2+alternatif+ak%C4%B1m+ve+rezonans' },
      ],
    },
  },
  'MAT114 Matematik II': {
    1: {
      description: `Türevin ters işlemi olan integral kavramına giriş yapılarak, matematiksel ifadelerin orijinal fonksiyonlarını bulma felsefesi öğrenilir. Algoritmaların sadece anlık değişimlerini (türev) değil, geçmişten günümüze olan toplam birikimini (integral) hesaplamanın temelidir. Makine öğrenmesinde olasılık yoğunluk fonksiyonları kullanılarak veri kümesinin istatistiksel davranışlarını modellerken sıklıkla karşınıza çıkar. Eğriler altındaki sonsuz parçaların cebirsel yöntemlerle nasıl toplandığı kavramsal olarak oturtulur. Yazılımsal süreçlerde sürekli biriken log verilerinin kümülatif etkisini analiz etme mantığı aşılanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+2+belirsiz+integral+temel+kurallar' },
      ],
    },
    2: {
      description: `İntegral alma sürecini kolaylaştıran değişken değiştirme (substitution) gibi temel yöntemler üzerine pratikler yapılır. Karmaşık algoritmaları daha sade formlara dönüştürmek için kullanılan "refactoring" işleminin matematikteki doğrudan yansımasıdır. Çözülemeyen fonksiyonlarda, problemi farklı bir değişkene bağlayarak perspektifi değiştirme (problem çözme) yeteneği kazanılır. Oyun motorlarında veya simülasyonlarda kompleks vektör hesaplamalarını basitleştirmek için kullanılır. Soyutlama becerisini ve analitik esnekliği güçlendiren kritik bir matematiksel araçtır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+2+integral+alma+y%C3%B6ntemleri+de%C4%9Fi%C5%9Fken+de%C4%9Fi%C5%9Ftirme' },
      ],
    },
    3: {
      description: `Kısmî integral (integration by parts) ve trigonometrik integral teknikleri ile birden fazla fonksiyonun çarpım durumlarındaki çözümler incelenir. İki farklı türdeki bağımsız algoritmanın veya sinyal verisinin (örneğin ses işleme filtrelerinde) etkileşim sonuçlarını ayırmak için kullanılır. Algoritmaların analizinde kullanılan hata sınırlarını bulmak veya logaritmik karmaşıklıkları çözmek için bu yöntemlere başvurulur. Yazılımda modüler parçaların bir araya gelirken nasıl bütünsel bir sonuca ulaştığını analitik olarak ispatlar. Sabır, adım adım işleme ve yüksek odaklanma gerektiren analitik düşünce antrenmanıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+2+k%C4%B1smi+integral' },
      ],
    },
    4: {
      description: `Basit kesirlere ayırma (partial fractions) ve rasyonel fonksiyonların integralleri ile karmaşık yapıların basit bileşenlerine ayrıştırılması öğrenilir. Veritabanı yönetiminde (RDBMS) karmaşık veri yığınlarını normalize ederek daha küçük, tutarlı tablolara ayırma prensibiyle benzer bir zihinsel yapıdadır. Kontrol sistemlerinde ve elektronik devre simülasyonlarında kullanılan Laplace dönüşümlerinin temeli bu kesirlere ayırma işlemine dayanır. Problemi tek bir devasa kütle yerine, yönetilebilir ve hesaplanabilir küçük alt fonksiyonlara (mikroservis mantığı) bölme yeteneği aşılar. Formüllerin algoritma mantığıyla basitleştirilerek çözüme gidildiği aşamadır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+2+basit+kesirlere+ay%C4%B1rma+integral' },
      ],
    },
    5: {
      description: `Belirsiz integralin sınırlarla (alt ve üst limit) tanımlanarak, Riemann toplamları üzerinden alan hesaplama ve kümülatif net sonuç çıkarma işlemi incelenir. Bir algoritmanın \`0\` zamanından \`t\` zamanına kadar harcadığı toplam güç tüketimini veya kaynak (RAM/CPU) kullanımını hesaplamak için kullanılır. Sensörlerden gelen ayrık dijital verilerin toplam etkisini veya olasılık istatistiklerini (Big Data) hesaplamak belirli integral algoritmalarıyla yapılır. Belirli sınır koşulları koymak, yazılımda hata toleranslarını (bounds checking) belirlemekle örtüşen bir kavramdır. Sonsuzluğun, pratik fayda sağlayacak şekilde sınırlanması öğretilir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/DefiniteIntegrals.aspx' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematik+2+belirli+integral+ve+riemann+toplam%C4%B1' },
      ],
    },
    6: {
      description: `Kalkülüsün Temel Teoremi kullanılarak türev ve integral arasındaki efsanevi ilişki kanıtlanır ve sınır değişim kuralları pratik edilir. Matematiksel motorların (Math kütüphaneleri) arka planda türev ve integral hesaplamalarını (Sayısal Analiz) nasıl koda döktüğünü anlarsınız. İntegral sınırlarını parçalamak, büyük paralel hesaplama (parallel computing) mimarilerinde problemi küçük işlemcilere dağıtıp (MapReduce) sonra sonuçları toplamaya benzer. Algoritmaların tersine mühendislikle (reverse engineering) analiz edilip tekrar orijinal durumuna dönüştürülebilirliği matematiksel olarak kanıtlanır. Fonksiyonların iki yönlü yolculuğunun zirve noktasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kalk%C3%BCl%C3%BCs%C3%BCn+temel+teoremi+belirli+integral' },
      ],
    },
    7: {
      description: `İntegral işleminin, eğriler arası alan hesaplama ve iş (work) denklemleri gibi fiziksel-geometrik problemlerdeki pratik uygulamalarına geçilir. Veri bilimi grafiklerinde (örneğin ROC eğrisi altında kalan alan) veya pazar analiz trendlerinde iki farklı metrik arasındaki farkı (net kazanç/kayıp) modellemeye yarar. Optimizasyon algoritmaları geliştirirken veya otonom sistemlerde katedilen toplam yolu (kinematik integral) anlık hız verisinden çıkarmak için kullanılır. Yazılımın dış dünyadaki fiziksel ve ekonomik değişkenleri algoritmalaştırma sürecidir. Saf matematiğin mühendisliğe dönüştüğü güçlü bir köprüdür.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/AreaBetweenCurves.aspx' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=integral+uygulamalar%C4%B1+e%C4%9Friler+aras%C4%B1+alan' },
      ],
    },
    8: {
      description: `Dönemin ilk yarısındaki belirsiz integral tekniklerinin ve belirli integral ile alan hesabı yaklaşımlarının teorik düzeyde test edildiği aşamadır. Mühendisin karmaşık analitik işlemleri adım adım kurallara uyarak, hatasız (bug-free) bir şekilde sonuca ulaştırma kapasitesi ölçümlenir. Soyut matematiksel ifadeleri, somut algoritma senaryolarına ne ölçüde dökebildiği test edilir. Diziler ve çok katlı hesaplamalara geçilmeden önceki en büyük zihinsel hazırlık duruşudur. Gelişime odaklı bir öğrencinin eksik yöntemleri fark edip tamamlama fırsatıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Disk veya Kabuk (Shell) metotları kullanılarak iki boyutlu eğrilerin kendi ekseninde dönmesiyle oluşan 3 boyutlu katı cisimlerin hacim ve yay uzunluğu (arc length) hesaplanır. Bilgisayar grafiklerinde (3D Rendering) veya oyun motorlarında üç boyutlu objelerin yüzey alanlarını ve çarpışma kütlelerini (hitbox) hesaplayan algoritmaların doğrudan kalbidir. CAD (Bilgisayar Destekli Tasarım) yazılımlarının veya 3D yazıcı dilimleyicilerinin (slicers) arkaplanda yaptığı devasa integrasyonları anlamanızı sağlar. Parametrik animasyonlarda rotaların toplam uzunlukları bu yay uzunluğu formülleri ile koda dönüştürülür. İki boyutlu kodun üç boyutlu uzaya matematiksel olarak yansıtılmasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithRings.aspx' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=integral+uygulamalar%C4%B1+hacim+ve+yay+uzunlu%C4%9Fu' },
      ],
    },
    10: {
      description: `Önceki konunun karmaşık eğrilerle pekiştirilmesi ve yüzey alanı dönel integral uygulamaları ile devam edilir. Endüstriyel otomasyonda veya akışkanlar dinamiğinde hacim ve debi verilerini anlık analiz eden gömülü sistem yazılımları bu integrallerle kalibre edilir. Topografik haritalama yazılımları (örneğin CBS sistemleri), düzensiz yüzeylerin gerçekçi analizlerini bu yöntemlerle çıkarır. Çok yüksek veya düşük poligonlu (low-poly) grafik üretiminde performans/görsellik dengesini kurarken bu geometrik hesap maliyetleri dikkate alınır. Boyutsal hesaplamaların algoritmik entegrasyonu tamamen oturtulur.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/SurfaceArea.aspx' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=integral+ile+y%C3%BCzey+alan%C4%B1+hesab%C4%B1' },
      ],
    },
    11: {
      description: `İntegrasyon sınırlarından birinin veya ikisinin birden sonsuzluğa ($\\infty$) gittiği veya içeride asimptot barındıran durumların hesaplanabilirliği (yakınsama/ıraksama) incelenir. Olasılık yoğunluk fonksiyonlarında (örneğin Normal Dağılım Çan Eğrisi) devasa veri yığınlarının tüm evrensel aralıklardaki davranışını hesaplamak için veri mühendisliğinin ana aracıdır. Sonsuz çalışma süresi beklenen sistemlerin veya kararlı durum (steady-state) analizlerinin bilgisayarlarda nasıl simüle edileceğinin limit teorisiyle birleşimidir. Sonsuzluk kavramının bilgisayar belleğinde overflow (taşma) yapmadan nasıl sonlu bir değere (yakınsama) atanabileceğini öğretir. Süreksizlik noktalarını tespit etmek (error detection) için kritik bir teoridir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=genelle%C5%9Ftirilmi%C5%9F+integraller+yak%C4%B1nsakl%C4%B1k' },
      ],
    },
    12: {
      description: `Karşılaştırma testleri kullanılarak, integrali alınamayan çok karmaşık sonsuz fonksiyonların en azından yakınsak mı ıraksak mı olduğunu tahmin etme stratejileri pratik edilir. Algoritma analizinde (Big O Notation) algoritmanın performansının belli bir limiti aşıp aşmayacağını ispatlamakla birebir aynı mantıkta çalışan bir sistemdir. Yazılımda kesin sonucu bulmanın maliyetli veya imkansız olduğu durumlarda, güvenli çalışma sınırlarını (boundaries) keşfetmeyi öğretir. Olasılık tahminlemeleri ve makine öğrenmesi kayıp fonksiyonlarının sonsuzluğa patlamasını engellemek için teorik bir ispat yöntemidir. Analitik zekanın belirsizliği çerçeveleme sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegralsCompTest.aspx' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=genelle%C5%9Ftirilmi%C5%9F+integral+kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma+testi' },
      ],
    },
    13: {
      description: `Eğrilerin ve integrallerin $x,y$ kartezyen sistemi yerine radyan açı ($\\theta$) ve uzaklık ($r$) ile tanımlandığı kutupsal sistemde alan hesaplamaları yapılır. Radar, LiDAR veya sonar gibi dairesel tarama yapan sensör verilerini analiz eden yapay zeka botları ve araçları doğrudan bu kutupsal sistem üzerinden kodlanır. Oyunlarda karakterin görüş açısını (FOV) veya patlama etki alanlarını (AoE) hesaplamak kartezyene göre bu sistemde çok daha kolay ve performanslıdır. Görüntü işlemede (OpenCV) dairesel objeleri tespit ederken Hough dönüşümleri bu matematiksel felsefeye sırtını dayar. Problemin bulunduğu koordinat uzayını değiştirerek algoritma karmaşıklığını düşürme stratejisidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kutupsal+koordinatlarda+alan+integral' },
      ],
    },
    14: {
      description: `Sonlu veya sonsuz sayı dizilerinin yakınsaklığı ile polinom olmayan (sin, cos, e^x) fonksiyonların Taylor ve Maclaurin serileriyle polinomlara dönüştürülmesi işlenir. Bilgisayarlar (ALU) trigonometrik değerleri doğrudan hesaplayamaz; bunun yerine bu Taylor serilerini kullanarak toplama/çarpma iterasyonlarıyla oldukça yüksek bir hassasiyetle yaklaşım (approximation) yaparlar. Veri mühendisliği ve sinyal işlemede sonsuz seriler, karmaşık verileri Fourier serilerine açarak manipüle etmenin ilk konseptsel adımıdır. Yapay zeka ağırlık güncellemelerinde serilerin davranış kalıpları referans alınır. Dönem, bilgisayar mimarisinin matematiği nasıl hackleyerek çalıştığını gösteren bu efsanevi teoriyle biter.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=taylor+ve+maclaurin+serileri' },
      ],
    },
  },
  'TDİ102 Türk Dili II': {
    1: {
      description: `Sözcüklerin birleşerek kurallı ve anlamlı yapı birimleri oluşturduğu cümlenin ögeleri (özne, yüklem, nesne vb.) analiz edilir. Yazılım dillerinde kodların söz dizimi (syntax rules) nasıl derleyici (compiler) tarafından ayrıştırılıyorsa, doğal dilin de beyin tarafından böyle ayrıştırıldığı kavranır. Dökümantasyon yazarken veya takım içi projelerde (Github commit mesajlarında) tam, eksiksiz ve öznenin net olduğu ifadeler kurmanın önemi aşılanır. Yüklemin doğru yere konumlandırılması, aktarılmak istenen eylemin (fonksiyonun) karşı tarafa en hızlı şekilde ulaşmasını sağlar. Karmaşık mühendislik problemlerini basit cümlelerle izah etme pratiklerine başlanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/dted/issue/44588/553331' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%C3%BCmlenin+%C3%B6geleri+t%C3%BCrk+dili' },
      ],
    },
    2: {
      description: `Vurgu, cümlenin diziliş özellikleri ve cümlenin yapısı gibi daha ince semantik detaylar incelenir. Özellikle yapay zeka destekli Doğal Dil İşleme (NLP) projelerinde Türkçe'nin cümlenin neresinde vurgu yaptığını anlamak ve algoritmasını yazmak için bu yapılar bilinmelidir. Geliştirdiğiniz yazılımları sunarken kullanıcının dikkatini projenin inovatif özelliğine (vurgulanan öge) çekmek için yazılı tasarımlar yapılır. Kısa, uzun veya devrik cümle yapılarını bilinçli bir biçimde kullanarak kullanıcı arayüzündeki (UI) metinlerin okunabilirliğini artırma hedeflenir. İfadenin tonu ve algoritması üzerine ince işçilik yapılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://tdk.gov.tr/icerik/yazim-kurallari/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrk%C3%A7ede+c%C3%BCmle+vurgusu+ve+yap%C4%B1s%C4%B1' },
      ],
    },
    3: {
      description: `Anlamına, yapısına, yüklemin türüne ve yerine göre (isim/fiil, kurallı/devrik, basit/birleşik) cümle yapıları sınıflandırılır. Yazılımın kullanım senaryolarında, hata mesajlarında veya sözleşmelerde (Terms of Service) hangi tür cümlenin daha resmi ve hukuki koruma sağladığı tartışılır. Modüler (birleşik) cümleleri kullanarak birden fazla teknik durumu veya hata logunu tek bir anlamlı ifadeye sığdırma becerisi edinilir. Gereksinim listeleri çıkarılırken (isim cümleleri) ile kullanım kılavuzları hazırlanırken (fiil cümleleri) kullanılan üslup farkları gözetilir. Profesyonel metin yazarlığı (technical writing) kalıpları geliştirilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63289/mod_resource/content/1/12.%20Hafta%20Yaz%C4%B1l%C4%B1%20Anlat%C4%B1m%20T%C3%BCrleri.pdf' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%C3%BCmle+%C3%A7e%C5%9Fitleri+ve+yap%C4%B1lar%C4%B1' },
      ],
    },
    4: {
      description: `Panel, sempozyum, münazara ve konferans gibi farklı kalabalıklara ve amaçlara yönelik konuşma etkinliklerinin kuralları ve formatları öğrenilir. Geleceğin teknoloji liderleri veya başarılı proje yöneticileri olarak, fikirlerinizi Hackathon sahnelerinde veya şirket içi lansmanlarda nasıl savunacağınızın provalarıdır. İzleyici profilini analiz ederek karmaşık bir bulut (Cloud) veya IoT mimarisini yatırımcılara sıkıcı olmadan anlatabilme sanatıdır. Sorulan zorlayıcı teknik sorulara, sükuneti bozmadan ve yapılandırılmış bir sözlü kompozisyonla cevap verme teknikleri çalışılır. Sadece kod yazan değil, vizyonunu kürsüden aktarabilen mühendis kimliği inşa edilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=s%C3%B6zl%C3%BC+anlat%C4%B1m+t%C3%BCrleri' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=s%C3%B6zl%C3%BC+anlat%C4%B1m+t%C3%BCrleri+panel+sempozyum' },
      ],
    },
    5: {
      description: `Etkili iletişim için diksiyon, nefes kontrolü, ses tonu (tonlama) ve beden dilinin sözlü anlatıma katkıları analiz edilir. Erasmus mülakatları veya yurt dışı bağlantılı teknik iş görüşmelerinde ilk intibayı (first impression) en iyi şekilde oluşturmak için altın kurallar içerir. İkna edici bir ses tonu ve kararlı bir beden dili, "ben bu projeyi yönetebilirim" mesajını kod bilgisinden çok daha önce karşıya verir. Online toplantılarda veya video mülakatlarda kameraya karşı etkili konuşma pratikleriyle dijital iletişim becerileri güncellenir. Donanım ve yazılımınız ne kadar iyi olursa olsun, onu sunan vitrinin siz olduğunuz gerçeği pekiştirilir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.kultur.gov.tr/TR-96263/etkili-iletisim-ve-beden-dili.html' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=etkili+konu%C5%9Fma+ve+diksiyon+e%C4%9Fitimi' },
      ],
    },
    6: {
      description: `Bir topluluk karşısında heyecan kontrolü, konuyu dağıtmama, mantıksal geçişler yapma ve dinleyiciyle göz teması kurma gibi konuşma stratejileri detaylandırılır. Teknik bir projeyi örneğin bir yazılım botu veya algoritma tasarımını savunurken, savunma stratejisinin dinleyicide kopukluk yaratmayacak şekilde (linear flow) planlanması gerekir. Sunum esnasında yaşanabilecek potansiyel teknik bir aksaklığı esprilerle veya soğukkanlı cümlelerle tolere edebilme çevikliği kazandırılır. Kelime seçimlerinde argo veya aşırı teknik jargondan (over-jargoning) kaçınarak kapsayıcı bir dil kullanmanın önemi vurgulanır. Retorik sanatının mühendislik sunumlarına entegrasyonu tamamlanır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/tde/issue/11696/139556' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=topluluk+%C3%B6n%C3%BCnde+konu%C5%9Fma+ve+heyecan+kontrol%C3%BC' },
      ],
    },
    7: {
      description: `Öyküleyici, betimleyici, açıklayıcı ve tartışmacı gibi yazının amacına uygun formatların ileri seviye incelemesi gerçekleştirilir. UX/UI süreçlerinde bir "Persona" (hedef kullanıcı profili) tasarlarken betimleyici; bir kodun nasıl çalıştığını Readme.md dosyasına yazarken açıklayıcı teknikler ağırlık kazanır. Yeni bir projenin bütçesini veya kullanılacak framework'ü (örneğin React yerine Flutter) üst yönetime kabul ettirmeye çalışırken tartışmacı ve kanıtlayıcı anlatımın gücünden yararlanılır. Metnin modüler bir araç olduğu ve duruma göre form (shape) değiştirmesi gerektiği öğretilir. Kelimelerle algı yönetimi ve stratejik iletişim becerisi aşılanır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63259/mod_resource/content/1/4.%20Hafta%20Ba%C5%9Far%C4%B1l%C4%B1%20Anlat%C4%B1m%C4%B1n%20Nitelikleri.pdf' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kompozisyon+yazma+kurallar%C4%B1+ve+anlat%C4%B1m+t%C3%BCrleri' },
      ],
    },
    8: {
      description: `Öğrenciler makale, deneme, rapor veya köşe yazısı gibi formatları kendi teknik veya sosyal fikirleriyle uygulamalı olarak harmanlarlar. Gelecekte kişisel bir teknoloji blogu açtığınızda veya LinkedIn platformunda sistem mimarisi, açık kaynak (open source) gibi konularda ilgi çekici yazılar yazmanın ilk taslaklarıdır. "Neden Linux kullanılmalı?" gibi fikir yazılarını yazılı bir düzene oturtarak tartışma ve okuyucuyu ikna etme metotları denenir. Soyut düşüncelerin somut ve okunabilir edebi/teknik çıktılara dönüşüm sürecidir. Yazılı üretkenliğin profesyonel kariyer için ne kadar güçlü bir marka (personal branding) oluşturduğu fark edilir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63289/mod_resource/content/1/12.%20Hafta%20Yaz%C4%B1l%C4%B1%20Anlat%C4%B1m%20T%C3%BCrleri.pdf' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1+kompozisyon+nas%C4%B1l+yaz%C4%B1l%C4%B1r' },
      ],
    },
    9: {
      description: `Sözlü ve yazılı ifade teknikleri, diksiyon kuralları ve kompozisyon planlaması gibi kavramların akademik olarak değerlendirildiği ara haftadır. Bir mühendisin zihnindeki teknik kurguyu ne derece anlaşılır, kurallı ve duru bir Türkçe ile dışa aktarabildiği teorik bir testten geçer. Yazılımdaki kod kalitesi gibi, dilin kullanım kalitesi ve standartlara uygunluğu puanlanır. Dil yanlışlarına girmeden önce, ifade etme becerisindeki mevcut potansiyel ve eksiklikler tespit edilir. İletişimsel becerilerin analitik düzlemde ara onayı verilir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Bir önceki kompozisyon pratiklerine devam edilerek iş dünyasında daha çok kullanılan iş mektubu, rapor, dilekçe gibi profesyonel yapılar derinleştirilir. Staj başvurularında öne geçmenizi sağlayacak o etkili ve özgeçmişi destekleyen niyet mektuplarının (Cover Letter) dil yapısı ve şekil şartları tamamen bu kapsamdadır. Teknik aksaklık tutanakları veya müşteri gereksinim belgeleri hazırlarken resmi protokol dilinden taviz vermeme disiplini edinilir. Bürokratik süreçlerde veya yasal yazışmalarda bağlayıcı sözleşme niteliği taşıyacak metinleri dikkatlice tasarlama vizyonu katar. İş hayatındaki resmi yazışmaların hata affetmeyen yapısı çalışılır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.kutuphane.sakarya.edu.tr/sites/kutuphane.sakarya.edu.tr/file/Resmi_Yazisma_Kurallari_Egitimi_Sunumu.pdf' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=resmi+yaz%C4%B1%C5%9Fma+kurallar%C4%B1+dilek%C3%A7e+ve+rapor' },
      ],
    },
    11: {
      description: `Anlamsal olarak belirsizlik yaratan, mantığa ters düşen veya gereksiz sözcüklerle şişirilmiş anlatım bozukluklarının tespiti yapılır. Temiz kod (Clean Code) felsefesindeki "kod kokusu" (code smell) kavramının dildeki tam karşılığıdır; cümlenin çalıştığı (okunduğu) ama kalitesiz olduğu durumları düzeltir. Teknik şartnamelerde (specifications) yer alan bir anlatım bozukluğu, aylar sürecek bir yazılım projesinin yanlış fonksiyonlarla tasarlanmasına yol açabilir. Çelişen ifadeleri refactor ederek, karşı tarafa %100 net ve kesin bir iletişim (lossless communication) paketi sunma yeteneği hedeflenir. Kesinlik ve mantıksal doğruluk, ifadenin temeline yerleştirilir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63283/mod_resource/content/1/10.%20Hafta%20Anlat%C4%B1m%20Bozukluklar%C4%B1.pdf' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=anlama+dayal%C4%B1+anlat%C4%B1m+bozukluklar%C4%B1' },
      ],
    },
    12: {
      description: `Sözdizimsel ve dilbilgisel (özne-yüklem uyumsuzluğu, ek yanlışları) anlatım bozuklukları teşhis edilip yapısal onarımlar pratik edilir. Programlama dillerinde "Syntax Error" aldığınız durumları, doğal dilde analiz etmekle aynı analitik süreci işletirsiniz. Özellikle çeviri kaynaklardan (İngilizce teknik bloglardan) alınan cümlelerin Türkçe mantığına tam oturtulamadığı durumlarda ortaya çıkan düşük cümleleri kurtarma becerisidir. Resmi raporlarda bu tarz hatalar yapmak, mühendisin güvenilirliğini ve işe olan özenini doğrudan zedeler. Detay odaklılık ve kurala bağlı çalışma prensipleri dil bilgisiyle tekrar güçlendirilir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://acikders.ankara.edu.tr/pluginfile.php/63283/mod_resource/content/1/10.%20Hafta%20Anlat%C4%B1m%20Bozukluklar%C4%B1.pdf' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yap%C4%B1ya+dayal%C4%B1+anlat%C4%B1m+bozukluklar%C4%B1' },
      ],
    },
    13: {
      description: `Kaynak taraması (literatür), alıntı yapma, dipnot gösterme, intihal (plagiarism) kuralları ve kaynakça oluşturma standartları (APA/IEEE) öğretilir. Bitirme tezleri, akademik projeler veya TÜBİTAK/Teknofest başvuru dosyalarının onaylanması için uyulması zorunlu evrensel bilimsel çatı budur. Başka yazılımcıların kütüphanelerini veya algoritmalarını kullanırken lisans haklarına (Open Source Licenses) uymak ve referans vermek, bilimsel etiğin yazılımdaki karşılığıdır. Verilerle ve akademik yayınlarla kendi fikirlerinizi destekleyerek sarsılmaz ve kanıta dayalı argümanlar kurgulama yetisi verir. Mühendis adayını bir bilim insanı formasyonuna yükselten kritik bir konudur.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/pub/sdufed/issue/68225/1045231' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilimsel+ara%C5%9Ft%C4%B1rma+y%C3%B6ntemleri+ve+makale+yaz%C4%B1m%C4%B1' },
      ],
    },
    14: {
      description: `Topluma yön veren edebi ürünlerin ve düşünce yazılarının yapısal/anlamsal analizi yapılarak estetik ve analitik bir bakış açısı geliştirilir. Algoritmaların sadece soğuk mantıktan ibaret olmadığı; kodun arkasında insanı, psikolojiyi ve kültürü anlayan bir sanatçı vizyonunun olması gerektiği vurgulanır. Büyük edebiyatçıların insan doğasına dair yaptığı çıkarımlar, bugün İnsan-Bilgisayar Etkileşimi (HCI) tasarımlarında temel referanslar olarak kullanılmaktadır. Fikirsel çeşitlilik (diversity of thought), yaratıcı çözüm üretme ve tasarım odaklı düşünme (Design Thinking) yeteneklerini dolaylı yoldan besler. Dönem, mühendisin teknik zekasını duygusal zeka ve estetik anlayışla birleştirmesiyle noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=edebi+metin+incelemeleri' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=edebi+metin+tahlili+nas%C4%B1l+yap%C4%B1l%C4%B1r' },
      ],
    },
  },
  'BMB112 Web Teknolojileri': {
    1: {
      description: `World Wide Web (WWW), HTTP protokolleri, IP adresleri, DNS, sunucu (server) ve istemci (client) gibi internetin arka planını çalıştıran temel mimariler öğrenilir. Kendi yazdığınız bir betiğin (script) yerel bilgisayardan çıkıp dünya çapındaki sunuculara nasıl ulaştığının yol haritasıdır. Cloud (Bulut) teknolojilerinde veya veri mühendisliği projelerinde verinin ağ üzerinde güvenli şekilde nasıl seyahat ettiğini anlamanın temelidir. Tarayıcıların (Browser) arka planda sunucuya istek atıp yanıt (Request/Response) bekleme döngüsü kavranır. Yazılımcının dünyayı birbirine bağlayan ağın donanımsal ve protokoler yapısını kavramasını sağlar.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=internet+nas%C4%B1l+%C3%A7al%C4%B1%C5%9F%C4%B1r+dns+ip+http' },
      ],
    },
    2: {
      description: `Web'in temel iskelet dili olan HTML'in mantığı (Hypertext Markup Language), evrimi (HTML5) ve VS Code gibi modern geliştirme ortamlarının kullanımı incelenir. HTML bir programlama dili değil, tarayıcılara verinin yapısını anlatan bir işaretleme dilidir. Etiket (Tag) mantığı ile sayfayı başlık, gövde ve altbilgi gibi hiyerarşik yapı bloklarına ayırmanın (DOM Tree) felsefesi öğrenilir. Ön yüz (Frontend) geliştirme kariyerinin ve SEO (Arama Motoru Optimizasyonu) uyumlu doğru mimari inşasının ilk, en temel harcıdır. Kodların görsel bir çıktıya dönüşmesinin ilk heyecan verici adımları atılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html_intro.asp' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+dersleri+giri%C5%9F+ve+yap%C4%B1s%C4%B1' },
      ],
    },
    3: {
      description: `Sayfanın arama motorlarına veri sunduğu (meta veriler) Head bölümü ile kullanıcının gördüğü Body bölümü arasındaki ayrım detaylandırılır. Hiyerarşik başlıklar (h1-h6) ve liste yapıları (ul, ol, li) ile bilgiyi mantıksal bir sıra içinde (semantik) sunma pratikleri gerçekleştirilir. Düzensiz metinleri, kullanıcı dostu ve okunabilir arayüz birimlerine (UI components) dönüştürme pratiğidir. Veri mühendisliğindeki ağaç veri yapılarına (Tree structures) benzer bir yapıda, iç içe elementlerin (nesting) ebeveyn-çocuk ilişkisi kavranır. Tarayıcıların kodu nasıl okuyup analiz ettiği (parsing) uygulamalı olarak gözlemlenir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html_lists.asp' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+head+body+ve+liste+etiketleri' },
      ],
    },
    4: {
      description: `HTML içerisinde metin biçimlendirme ve sayfa düzenini sağlayan alt seviye görsel ve semantik etiketlerin geniş kullanımı öğrenilir. Önceden biçimlendirilmiş (\`<pre>\`) ve kod görüntüleme (\`<code>\`) etiketleri, teknik bloglar veya dökümantasyon siteleri tasarlamak için olmazsa olmazdır. Üst/alt indisler ve escape karakterleri (\`&amp;\` gibi) kullanılarak karmaşık matematiksel formüllerin veya özel karakterlerin bozulmadan gösterilmesi sağlanır. Sadece estetik değil, ekran okuyucular (erişilebilirlik) için önemli olan metin vurgulama (\`<strong>\`, \`<em>\`) mantığı oturtulur. Saf içerik üretiminin tarayıcıdaki tüm tipografik yetenekleri test edilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html_formatting.asp' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+metin+bi%C3%A7imlendirme+etiketleri' },
      ],
    },
    5: {
      description: `İnternetin asıl gücü olan hiper metin köprülerinin (hyperlinks) farklı sayfaları ve belgeleri birbirine nasıl bağladığı pratik edilir. Resim, arka plan ve stil düzenlemeleriyle (inline css mantığına giriş) statik siyah beyaz sayfalar kullanıcı dostu arayüzlere dönüştürülür. Çapraz referans (anchor links) kullanarak "Single Page Applications" (SPA) mantığındaki uzun sayfaların içi navigasyonu yönetilir. Projelerinizde kullanılacak medya unsurlarının (resimler) bellek yollarını (file paths) doğru bağlama ve kırık linkleri önleme disiplini kazanılır. Web'i ağ yapan bağlayıcı mimarinin sırları çözülür.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html_links.asp' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+link+verme+resim+ekleme+ve+renklendirme' },
      ],
    },
    6: {
      description: `Satır, sütun ve hücre yapıları kullanılarak (\`<table>\`, \`<tr>\`, \`<td>\`) karmaşık verilerin iki boyutlu tablolar halinde gösterimi incelenir. İleride veritabanından çekilen yapılandırılmış (SQL) verileri, idari bir web panelinde veya analiz ekranında (dashboard) listelemek için bu mantık kullanılır. \`colspan\` ve \`rowspan\` özellikleri ile hücreleri birleştirerek kompleks raporlama ekranlarının arayüz iskeletleri tasarlanır. Sayfa yerleşimi (layout) oluştururken eski ve hatalı bir yöntem olsa da tablonun nasıl çalıştığını bilmek eski projeleri okumak (legacy code) için şarttır. Yapısal veri sunumunun temelleri HTML üzerine gömülür.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html_tables.asp' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+tablo+olu%C5%9Fturma+table+tr+td' },
      ],
    },
    7: {
      description: `Multimedya içeriklerin sayfaya gömülmesi, otomatik başlatma (autoplay) ve kontrollerin arayüzde gösterimi gibi etkileşimli nesne etiketleri incelenir. İleride örneğin yüksek çözünürlüklü ses veya müzik akış (streaming) platformlarına (Spotify klonları) front-end yazarken kullanılacak HTML5 \`<audio>\` etiketleri öğrenilir. Tarayıcıların farklı ses formatlarını (mp3, wav) çözme/oynatma politikaları ve erişilebilirlik standartları değerlendirilir. Kullanıcı deneyimini (UX) sese ve görsele boğmadan ölçülü medya kullanımının önemi fark edilir. Modern web sayfalarının durağanlıktan çıkıp çoklu duyuya hitap etmesi sağlanır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/html5_audio.asp' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html5+ses+ve+m%C3%BCzik+ekleme+audio+etiketi' },
      ],
    },
    8: {
      description: `Statik HTML sayfalarını hayata geçiren, dünyanın en popüler ve esnek betik dili olan JavaScript evrenine giriş yapılır. Sadece arayüzlerde değil, Node.js sayesinde arka uçta (backend) ve otonom bot yazılımlarında (Puppeteer) kullanılan bir güce sahip olduğu aktarılır. Tarayıcının işlem gücünü kullanarak (client-side) matematiksel işlemleri arka sunucuyu yormadan hızlıca kullanıcının bilgisayarında yapma mantığı öğretilir. DOM manipülasyonunun ilk adımı olarak JS kodlarının HTML ile nasıl bütünleşik çalışacağı ve değişken referanslarının bellekte nasıl tutulduğu analiz edilir. Statik belge, tepkisel bir yazılım uygulamasına (Web App) dönüşür.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+nedir+giri%C5%9F+ve+de%C4%9Fi%C5%9Fkenler' },
      ],
    },
    9: {
      description: `JS kullanılarak tarayıcı üzerinde pop-up bildirimleri çıkarma, kullanıcıdan veri alma ve asenkron olmayan temel koşul mekanizmaları çalıştırılır. C veya Python'daki mantıksal kontrollerin (\`if-else\`) farklı veri tiplerinde (string to int conversion) web tarayıcı motorları (V8 Engine) üzerinde nasıl derlendiği görülür. Form doğrulama (validation) gibi işlemler yapılarak, kullanıcının yanlış girdiği verinin sunucuya gitmeden anında engellenmesi pratik edilir. Veri tipleri arasındaki esnek (loosely typed) dönüşüm kurallarının yarattığı kolaylıklar ve güvenlik açıkları tartışılır. İstemci taraflı ilk interaktif karar ağaçları kurgulanır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_if_else.asp' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+if+else+ve+kullan%C4%B1c%C4%B1dan+veri+alma' },
      ],
    },
    10: {
      description: `Ternary operator (\`? :\`) ve çoklu durum kontrolü yapan \`switch-case\` ile daha okunabilir ve kompakt (clean) kararlar kurgulanır. Kullanıcının birden çok koşulu aynı anda sağlayıp sağlamadığını test eden mantıksal operatörler (AND, OR) yetki yönetimi senaryolarıyla pekiştirilir. \`while\` döngüsü kullanılarak veri setlerinin taranması ve arka planda veri çekme işlemlerinin ön denemeleri yapılır. Arayüz elemanlarının belirli olaylara (event) bağlı olarak sürekli dinlenmesi veya gizlenip/gösterilmesi döngüsel mantıkla kurgulanır. Kodun çalışma hızı optimize edilerek, kompleks algoritmaların web entegrasyonu tamamlanır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_switch.asp' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+switch+case+ve+while+d%C3%B6ng%C3%BCs%C3%BC' },
      ],
    },
    11: {
      description: `Klasik \`for\` döngüleri kullanılarak diziler, JSON verileri veya DOM nesneleri üzerinde çoklu tekrarlar yapan hızlı arayüz listelemeleri incelenir. Büyük e-ticaret sitelerindeki yüzlerce ürün kartının arayüze nasıl döngüler yardımıyla basıldığının asıl sırrı bu yapıdır. Bir koşulu kontrol etmeden önce döngünün mutlaka en az bir kez çalışması gereken durumlar (örneğin ilk API isteğini atma) için \`do-while\` pratik edilir. Etkin bellek yönetimi yapılarak tarayıcının çökmesini (memory leak) engelleyen performanslı döngü stratejileri tartışılır. Tek satır veriyle başlayan işlem, binlerce düğümü (node) yöneten bir güce ulaşır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_loop_for.asp' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+for+ve+do+while+d%C3%B6ng%C3%BCs%C3%BC' },
      ],
    },
    12: {
      description: `Kullanıcı listesi, sepet içeriği veya form verileri gibi bağlantılı bilgilerin tek bir \`Array\` nesnesi içinde organize edilmesi öğrenilir. İleride Vue, React veya Angular gibi modern JS kütüphanelerinde en çok kullanacağınız durum yönetimi (state management) verilerinin temel taşıdır. Dizi metodları (push, pop vb.) ile sayfadaki elemanların kullanıcı etkileşimine göre canlı olarak silinmesi veya yeni eleman eklenmesi sağlanır. Gelen API verilerini karşılayıp bellekte listelemek ve daha sonra ekranı güncellemek için dizi mimarisi eksiksiz kurulmalıdır. Verilerin bellekte ardışık ve mantıklı gruplanması konsepti sağlamlaştırılır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_arrays.asp' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+diziler+arrays' },
      ],
    },
    13: {
      description: `JavaScript içindeki kod bloklarının \`function\` tanımlarıyla paketlenerek buton tıklamaları veya fare hareketleri (Event Listeners) gibi aksiyonlara bağlanması işlenir. Karmaşık hesaplama araçları veya web botu mantıkları yazılırken, modüler fonksiyon yapısıyla "Spagetti Kod" yazmanın önüne geçilir. Fonksiyonların birer obje olarak parametre şeklinde aktarılabilmesi (Callback functions) JS'in asenkron çalışma mantığının ilk habercisidir. Arayüzün her tarafına dağılmış parçaların ortak fonksiyonları çağırarak nasıl merkezi bir yönetimden geçtiği simüle edilir. Kodun olay bazlı (event-driven) ve zaman bağımsız çalışma vizyonu aşılanır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_functions.asp' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+fonksiyonlar+ve+%C3%A7a%C4%9F%C4%B1rma+y%C3%B6ntemleri' },
      ],
    },
    14: {
      description: `Diziler içindeki düzensiz sayısal ve metinsel verilerin alfabetik, azalan veya artan şekilde sıralanmasına imkan tanıyan \`sort()\` algoritma teknikleri tartışılır. Kullanıcıya fiyatları küçükten büyüğe sıralama imkanı sunan bir e-ticaret filtresini sıfırdan inşa etme pratiğidir. Veri mühendisliği projelerinin arayüz ayağında (dashboard) veri yığınlarının doğru şekilde optimize edilerek vizualize edilmesi hedeflenir. JS'in yerleşik (built-in) fonksiyonlarının çalışma performansları (Big-O Notasyonu) eleştirel bir gözle incelenerek özelleştirilmiş algoritmalar yazma mantığı aşılanır. HTML ile başlanan statik yolculuk, veriyi analiz edip sıralayan dinamik bir web uygulaması prototipiyle son bulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_array_sort.asp' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=javascript+dizi+s%C4%B1ralama+sort+metodu' },
      ],
    },
  },
  'YDİ110 Yabancı Dil II (İngilizce)': {
    1: {
      description: `Osmanlı'dan Cumhuriyet'e uzanan süreçte toplumun bilim, akıl ve modern teknolojiyle tanışma evresi incelenir. Bir bilgisayar mühendisi olarak ülkenin teknolojik altyapısının ve endüstriyel gelişiminin köklerini anlamak, vizyoner bir bakış açısı kazandırır. Modernleşme hareketlerinin eğitim ve sanayiye olan yansımaları, günümüz bilişim devrimlerini yakalama çabalarımızın tarihsel bir prototipidir. Yeniliklere (inovasyon) açık bir toplum inşa etmenin zorlukları ve stratejileri mühendislik perspektifiyle değerlendirilir. Teknolojik bağımsızlığın temellerinin atıldığı bu dönem, milli projeler üretme motivasyonunuzu artırır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=t%C3%BCrk+modernle%C5%9Fmesi' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrk+modernle%C5%9Fmesi+tarihi' },
      ],
    },
    2: {
      description: `İmparatorluğun son yıllarındaki siyasi, ekonomik ve askeri buhranlar ile bu çöküşü engellemek için yapılan reformlar ele alınır. Bilişim ve sanayi devrimini (Endüstri 1.0 ve 2.0) kaçıran bir devletin, dünya sahnesinde nasıl geride kaldığı gerçeğiyle yüzleşilir. Yazılım teknolojilerinde (Endüstri 4.0) treni kaçırmamak için tarihsel hatalardan ders çıkarma bilinci aşılanır. Altyapı eksikliklerinin ve çağın gerisinde kalmış kurumların, kriz anlarında sistemi nasıl çökerttiği (system failure) analiz edilir. Mühendis adaylarına, teknolojiyi takip etmemenin ulusal maliyetleri gösterilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://islamansiklopedisi.org.tr/osmanli-imparatorlugu' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osmanl%C4%B1+imparatorlu%C4%9Fu+son+d%C3%B6nemi' },
      ],
    },
    3: {
      description: `Küresel güç dengelerinin sarsıldığı, mekanize savaş araçlarının ve ilk teknolojik silahların sahneye çıktığı 1. Dünya Savaşı incelenir. İletişim hatlarının (telgraf) ve lojistik ağların savaşın kaderini nasıl belirlediği mühendislik stratejileri açısından tartışılır. Şifreleme cihazlarının ve istihbaratın (ilkel kriptografi) cephedeki öneminin artması, bilgi güvenliğinin (cyber security) tarihsel kökenlerini oluşturur. Kıt kaynaklarla optimum savunma algoritmaları kurmanın askeri karşılıkları görülür. Büyük kriz anlarında problem çözme yeteneğinin (troubleshooting) ulusal boyuttaki yansımalarıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/I._D%C3%BCnya_Sava%C5%9F%C4%B1' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=birinci+d%C3%BCnya+sava%C5%9F%C4%B1+cepheler' },
      ],
    },
    4: {
      description: `Savaşın ardından imzalanan ateşkes ve ülkenin işgale uğramasıyla ortaya çıkan yönetimsel boşluk (system crash) dönemi analiz edilir. Merkezden yönetilemeyen bir yapının yerine, Anadolu'da yerel ve dağıtık (decentralized) direniş ağlarının (Kuvâ-yi Milliye) nasıl kurulduğu mühendislik bakışıyla yorumlanabilir. İletişim kanallarının kesilmesi üzerine kurulan alternatif haberleşme ağları, ağ güvenliği ve felaket kurtarma (disaster recovery) senaryolarına tarihi bir örnektir. Kriz anında otonom karar alabilen yerel birimlerin, ana sistemi ayakta tutma çabasıdır. Liderlik ve kriz yönetimi konularında derin bir vizyon sunar.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mondros+ate%C5%9Fkes+antla%C5%9Fmas%C4%B1+ve+sonras%C4%B1' },
      ],
    },
    5: {
      description: `Tamamen çökmüş bir sistemin küllerinden doğarak, eldeki kısıtlı donanım ve insan kaynağıyla yeniden ayağa kaldırılması (rebooting) sürecidir. Askeri cephelerdeki stratejik manevralar, kaynak tahsisi (resource allocation) ve lojistik optimizasyon algoritmalarının en destansı tarihsel uygulamalarıdır. Başkomutanlık vizyonuyla, bağımsız değişkenlerin (cepheler, meclis, halk) tek bir hedefe (bağımsızlık) nasıl senkronize edildiği incelenir. İmkansız görünen projelerin, inanç, analitik planlama ve takım çalışmasıyla nasıl başarılabileceğinin en büyük kanıtıdır. Bir Türk mühendisinin ülkesine ve mesleğine olan adanmışlık ruhunu şekillendirir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/T%C3%BCrk_Kurtulu%C5%9F_Sava%C5%9F%C4%B1' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kurtulu%C5%9F+sava%C5%9F%C4%B1+belgeseli' },
      ],
    },
    6: {
      description: `Askeri zaferin masada diplomatik ve hukuki bir protokolle tescillenmesi, uluslararası sistemde yeni devletin "tanınma" (authentication) süreci ele alınır. Yazılım projelerindeki ürün tesliminin ardından yapılan lisanslama ve telif hakları müzakerelerine benzer zorlu bir uluslararası sözleşme sürecidir. Ülkenin ekonomik bağımsızlığını (kapitülasyonların kaldırılması) sağlayarak, gelecekteki ulusal sanayi ve bilişim hamlelerinin önündeki engellerin (firewall) kaldırılmasıdır. Karşı tarafla yapılan zorlu müzakerelerde (negotiation) sınır şartlarının ve taviz verilmez noktaların belirlenmesi öğretilir. Uluslararası standartlara uyum ve entegrasyonun belgesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/lozan-baris-antlasmasi/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lozan+bar%C4%B1%C5%9F+antla%C5%9Fmas%C4%B1+%C3%B6nemi' },
      ],
    },
    7: {
      description: `Türk modernleşmesinden başlayıp devletin yeniden kuruluş senedi olan Lozan'a kadar geçen sürecin analitik ve tarihsel olarak değerlendirildiği sınavdır. Mühendis adaylarının sadece kod yazan değil, ülkesinin kuruluş kodlarını (source code) da doğru analiz edebilen entelektüeller olması hedeflenir. Geçmişin kriz yönetim stratejilerini ve çözüm algoritmalarını kavrama düzeyi test edilir. Devrimler ve atılımlar dönemine geçmeden önce, altyapının ne kadar sağlam anlaşıldığını ölçer. Geleceğin teknolojilerini üretecek neslin tarihsel vizyon kontrolüdür.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    8: {
      description: `Genç Cumhuriyetin eğitim, hukuk, sanayi ve toplumsal alanlarda yaptığı köklü güncellemeler (major system updates) ve yapısal reformlar incelenir. Harf devrimi, aslında toplumun bilgi işleme ve okur-yazarlık (data processing) hızını artırmak için yapılmış en büyük iletişim arayüzü (UI) değişikliğidir. Kurumların laikleşmesi ve modernleşmesi, devlet aygıtının daha rasyonel, bilimsel ve hızlı çalışan bir mimariye (refactoring) kavuşturulmasıdır. Sürekli gelişim (Continuous Integration) ve çağdaş uygarlık seviyesine ulaşma felsefesi aşılanır. Eski ve hantal kod bloklarının (geleneklerin) silinip, modern ve verimli yapılarla değiştirilmesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-inkilaplari/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+devrimleri+ve+%C3%B6nemi' },
      ],
    },
    9: {
      description: `Türkiye Cumhuriyeti'nin yazılım mimarisini oluşturan, devletin ve toplumun çalışma prensiplerini belirleyen 6 temel anayasa (core principles) işlenir. Cumhuriyetçilik, halkçılık, laiklik gibi ilkeler; devlet sisteminin hata vermeden, rasyonel, kapsayıcı ve adil çalışmasını sağlayan "Object-Oriented" (Nesne Yönelimli) temel sınıflardır (base classes). İnkılapçılık ilkesi, donanımın ve yazılımın çağa göre sürekli güncellenmesi (update and upgrade) gerektiğini emreden mühendislik vizyonudur. Bu ilkeler, gelecekte kamu veya özel sektörde projeler geliştirirken sahip olmanız gereken aydın ve bilimsel etiğin temelini atar. Sistemin çökmesini engelleyen güvenlik duvarlarıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-ilkeleri/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+ilkeleri' },
      ],
    },
    10: {
      description: `Çok partili hayata geçiş denemeleri, meclis içi muhalefet ve yeni devletin demokratik işletim sistemini (OS) kurma çabaları ele alınır. Tek çekirdekli (monolithic) bir yapıdan, çoklu işlemlerin ve farklı fikirlerin (multithreading) aynı anda barındığı demokratik bir meclis mimarisine geçişin zorlukları görülür. Şeyh Sait isyanı veya Menemen olayı gibi sisteme yönelik tehditlerin (malware/viruses) devlet aygıtı tarafından nasıl bertaraf edildiği (debugging) incelenir. Toplumsal kararlılığın ve siyasi dengelerin sağlanması sürecidir. Bir yönetim sisteminin (governance) sıfırdan nasıl inşa edildiğini gösterir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=atat%C3%BCrk+d%C3%B6nemi+siyasal+hayat' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+d%C3%B6nemi+i%C3%A7+politika' },
      ],
    },
    11: {
      description: `"Yurtta Sulh, Cihanda Sulh" ilkesi çerçevesinde Balkan Antantı, Sadabat Paktı ve Montrö Boğazlar Sözleşmesi gibi diplomatik ağ (networking) kurulumları işlenir. Türkiye'nin komşularıyla imzaladığı bu paktlar, uluslararası sistemde güvenlik duvarları (firewalls) oluşturarak ülkeyi yaklaşan 2. Dünya Savaşı virüsünden koruma stratejisidir. Hatay'ın anavatana katılması, uzun vadeli ve sabırlı bir diplomatik algoritmanın başarıyla sonuçlanması (successful execution) sürecidir. Dış dünyayla iletişim protokollerinin bağımsızlık ve rasyonel çıkarlar üzerine nasıl inşa edileceği öğretilir. Çok düğümlü (multi-node) küresel politikada denge kurma sanatıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-donemi-turk-dis-politikasi/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+d%C3%B6nemi+d%C4%B1%C5%9F+politika' },
      ],
    },
    12: {
      description: `Dünyayı kasıp kavuran savaş sırasında Türkiye'nin tarafsız kalma stratejisi (isolation) ve savaş sonrası çok partili hayata (demokrasi) kesin geçişi analiz edilir. Sistem kaynaklarının tamamen savunmaya ayrıldığı bu kriz döneminde, ekonomik darboğazlar ve varlık vergisi gibi olağanüstü hal (safe mode) politikaları incelenir. 1946 ve 1950 seçimleriyle iktidarın kansız bir şekilde el değiştirmesi, Türk siyasi sisteminin olgunluğunu ve güvenilirliğini (reliability) ispatlar. Soğuk Savaş dinamiklerinin iç siyasete ve teknolojik gelişim ivmemize olan etkileri tartışılır. Küresel bir savaşın ardından sistemi güncel küresel standartlara (demokrasiye) entegre etme sürecidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=ikinci+d%C3%BCnya+sava%C5%9F%C4%B1+t%C3%BCrkiye' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ikinci+d%C3%BCnya+sava%C5%9F%C4%B1+t%C3%BCrkiye+d%C4%B1%C5%9F+politikas%C4%B1' },
      ],
    },
    13: {
      description: `Sovyet tehdidine karşı NATO'ya giriş süreci, Kore Savaşı ve Batı blokuyla yapılan entegrasyon (API/Protocol alignment) anlaşmaları ele alınır. Savunma ve teknoloji standartlarımızın tamamen Batı sistemlerine göre yeniden şekillendiği bu dönem, günümüz savunma sanayisinin kodlarını etkilemiştir. Marshall planı ve Truman doktrini ile ülkeye giren yabancı teknolojilerin (traktör, altyapı) milli sanayiye etkileri eleştirel bir gözle analiz edilir. Uluslararası güvenlik ağlarına bağlanmanın (joining the network) getirdiği yükümlülükler ve fırsatlar tartışılır. Küresel kutuplaşmada taraf seçmenin mühendislik ve sanayi rotamızı nasıl belirlediği görülür.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=sava%C5%9F+sonras%C4%B1+t%C3%BCrk+d%C4%B1%C5%9F+politikas%C4%B1' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrkiyenin+natoya+giri%C5%9Fi' },
      ],
    },
    14: {
      description: `Cumhuriyetin kuruluşundan bugüne kadar eğitim, sanayi, teknoloji ve bilişim sektörlerinde geldiğimiz nokta ile geleceğe yönelik vizyonlar tartışılır. Bir bilgisayar mühendisi adayı olarak, milli yapay zeka hamleleri, siber güvenlik stratejileri ve savunma sanayisindeki (İHA/SİHA) atılımlardaki rolünüz üzerine projeksiyonlar yapılır. Tarihsel süreçten alınan derslerle, dışa bağımlı olmayan, kendi teknolojisini (özgün kodunu) üreten bir nesil olmanın gerekliliği vurgulanır. Dönem boyunca işlenen tarihsel verilerin (Big Data), geleceği öngörmek (Machine Learning) için nasıl kullanılacağı felsefesiyle ders tamamlanır. Geçmişin mirasını geleceğin teknolojisiyle taçlandırma görevi genç mühendislere devredilir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tubitak.gov.tr/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrkiye+teknoloji+ve+sanayi+geli%C5%9Fimi' },
      ],
    },
  },
  'DFD002 Diferansiyel Denklemler': {
    1: {
      description: `Küresel teknoloji şirketlerinin veya uzaktan çalışma (Remote working) ağlarının merkezlerinden biri olan Birleşik Krallık'ın kültürel ve politik temellerini İngilizce okuma parçalarıyla analiz etmeye başlarsınız. Çeşitli milletlerin (İngiliz, İskoç, Galli) tek bir çatı altında nasıl "British" kimliğini oluşturduğu, farklı modüllerin ortak bir yazılım mimarisinde (system integration) uyumla çalışmasına benzetilebilir. İngiliz parlamenter sistemini anlatan ileri düzey metinler okunarak, akademik okuma yeteneği (Reading Comprehension) ve uluslararası terminoloji dağarcığı geliştirilir. Yabancı şirketlerin kurumsal iletişim dilinde neden daha resmi ve hiyerarşik (political) bir yapı olduğunu anlamanın sosyal kökenlerini keşfedersiniz. Evrensel iş İngilizcesine kültürel bir giriş yapılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=uk+culture+and+political+system+documentary' },
      ],
    },
    2: {
      description: `Din ve inanç özgürlüğü gibi hassas toplumsal yapıların Birleşik Krallık kültürü içindeki yeri, tarihsel okuma parçalarıyla (Historical Reading) İngilizce olarak tartışılır. Küresel ve çok uluslu (Multinational) yazılım ekiplerinde çalışırken, farklı dinlere ve inançlara sahip iş arkadaşlarıyla kapsayıcı (inclusive) ve empatik bir iletişim dili kurmanın sosyal temelleridir. Metinler aracılığıyla argüman oluşturma ve fikirleri İngilizce olarak kibar ama etkili bir şekilde ifade etme (Speaking) teknikleri pratik edilir. Kelime haznesine soyut ve felsefi terimler eklenerek, sadece kod blokları hakkında değil, derin konularda da akıcı tartışma (Fluency) yeteneği geliştirilir. Sosyal mühendislik (Social Engineering) ve iş etiği vizyonunuzu genişleten bir aşamadır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=religion+in+the+uk+history+and+culture' },
      ],
    },
    3: {
      description: `İngiliz kültüründeki aile dinamikleri, resmi tatiller, festivaller ve günlük yaşam rutinleri üzerinden günlük diyalog (Daily Conversation) kalıpları geliştirilir. Global şirketlerin takvimlerindeki tatil günlerinin (Bank Holidays vb.) çalışma takvimlerini (Sprints/Agile planning) nasıl etkilediği ve "Small Talk" (havadan sudan konuşma) kültürünün yabancı ekiplerle kaynaşmadaki (ice-breaking) önemi aşılanır. Toplantı öncesi veya sonrası "Christmas", "Halloween" veya kişisel tatiller hakkında akıcı İngilizce sohbet edebilmek, takım içi sosyal uyumu (team bonding) olağanüstü artırır. Gündelik yaşam kelimeleriyle dolu okuma parçalarıyla pratik çeviri becerileri ve İngilizce düşünme refleksleri hızlandırılır. Sosyal zeka (EQ) dil becerileriyle entegre edilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=british+festivals+and+family+culture+esl' },
      ],
    },
    4: {
      description: `Özel kavramların ve terminolojilerin listelendiği sözlükçelerin (Glossary) nasıl verimli okunacağı ve bağlamdan anlam çıkarma (Guessing from context) stratejileri pratik edilir. Bir yazılım dokümantasyonu (Örneğin AWS veya Microsoft Azure belgeleri) okurken karşınıza çıkan yüzlerce bilinmeyen teknik terimi, tek tek sözlüğe bakmadan cümlenin gidişatından analiz ederek anlama yeteneğidir. Kelimelerin köklerini, öneklerini (prefixes) ve soneklerini (suffixes) inceleyerek yeni kelimeler türetme mantığı, aynı yazılımdaki değişken adlandırma standartlarını (Naming Conventions) çözmek gibidir. Teknik makaleleri (Whitepapers) tarama hızını (Skimming & Scanning) artıracak güçlü bir sözcük ve analitik okuma antrenmanıdır. Etkili bilgi çıkarma ve yorumlama becerisi pekiştirilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+guess+meaning+from+context+in+english' },
      ],
    },
    5: {
      description: `Dünyanın finans ve teknoloji başkentlerinden biri olan Londra'nın tarihi, ekonomisi, mimarisi ve Silikon Kavşağı (Silicon Roundabout) gibi teknoloji merkezleri üzerine metinler incelenir. FinTech, yapay zeka ve startup ekosistemlerinin neden Londra'da kümelendiğini anlatan İngilizce analizler okuyarak girişimcilik (Entrepreneurship) vizyonunuzu yabancı dille harmanlarsınız. Metro (The Tube) veya şehir ulaşımıyla ilgili okumalar, yön tarif etme ve seyahat İngilizcesi pratiği yapmanın yanı sıra, karmaşık ağ (Network) yapılarını zihinde İngilizce kurgulamaya yardımcı olur. Metropol kültürü ve teknoloji merkezlerindeki (Hubs) hızlı iş yaşantısına dil bazında zihinsel hazırlık yapılır. Profesyonel kariyer hedeflerinize ilham verecek global metinler okunur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=london+history+and+culture+documentary+for+students' },
      ],
    },
    6: {
      description: `İngiltere'nin Güneydoğu bölgesinin coğrafi yapısı, üniversiteleri (Oxford vs.) ve inovasyon merkezleri hakkında detaylı coğrafi/sosyal okuma parçaları ele alınır. Akademik araştırma kültürünün ve üniversite-sanayi işbirliğinin (University-Industry Collaboration) İngilizce metinler üzerinden nasıl ifade edildiği incelenerek, ileride okuyacağınız akademik makalelerin dil formatına aşina olmanız sağlanır. Mekan betimlemeleri (Descriptive Writing) sayesinde, sistem tasarımlarınızı veya bir yazılımın arayüzünü (UI/UX) detaylı İngilizce sıfatlar kullanarak anlatma yeteneğiniz (Speaking/Presenting) güçlendirilir. Coğrafi ve tarihsel dokunun ekonomiye etkileri tartışılırken mantıksal neden-sonuç (Cause-Effect) cümleleri kurma kalıpları pratik edilir. Karşılaştırmalı ve betimleyici dil yapıları sağlamlaştırılır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=southeast+england+geography+and+culture' },
      ],
    },
    7: {
      description: `Tarım ile yüksek teknolojinin kesiştiği "Silicon Fen" (Cambridge çevresi teknoloji kümelenmesi) gibi bölgeleri barındıran East Anglia üzerine okumalar yapılır. Biyoteknoloji, Ar-Ge faaliyetleri ve bilgisayar bilimlerinin doğuşuna (Alan Turing, vb.) ev sahipliği yapmış bu bölgenin ekosistemini anlatan spesifik teknik/tarihi metinler çevrilir. Sadece Londra gibi metropollerin değil, sakin bölgelerin de nasıl global Ar-Ge üslerine dönüştüğünü tartışırken tartışma (Debating) ve fikir bildirme (Expressing Opinions) kalıplarını İngilizce kullanma refleksiniz gelişir. Bilimsel makaleler ve teknoloji haberlerini okurken ihtiyaç duyacağınız "Innovation, Research, Development" gibi kavram kümelerine hakimiyetiniz artar. Akademik İngilizcenin bilim ve coğrafyayla harmanlandığı haftadır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=east+anglia+cambridge+silicon+fen+tech' },
      ],
    },
    8: {
      description: `Sanayi Devrimi'nin doğduğu topraklar olan Midlands (İngiltere'nin kalbi) bölgesinin tarihsel endüstriyel evrimi, fabrikalaşmadan dijitalleşmeye geçişi anlatan makalelerle işlenir. Donanım (Hardware), makine (Machinery) ve imalat (Manufacturing) sanayisinin Endüstri 1.0'dan Endüstri 4.0'a uzanan yolculuğunu anlatan İngilizce terimler dağarcığınıza (Tech-Vocab) eklenir. Bir ülkenin teknolojik altyapı çöküşlerini ve yeniden yapılanmasını anlatan vaka analizlerini (Case Studies) okuyup özetleme (Summarizing) teknikleriyle okuduğunu sentezleme yetisi artırılır. Sunum (Presentation) yetenekleri çalıştırılarak, geçmiş teknolojilerle güncel yazılımların kıyaslaması (Comparison) dinleyicilere İngilizce aktarılır. Teknik İngilizcenin tarihsel ve sanayisel formlarıyla pratik yapılır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=midlands+england+industrial+revolution+history' },
      ],
    },
    9: {
      description: `Dönemin başından bu yana işlenen İngiltere'nin kültürel, politik ve coğrafi okuma parçalarından yola çıkarak İngilizce okuma (Reading), anlama (Comprehension) ve kelime (Vocabulary) kapasitesinin ölçüldüğü teorik sınavdır. Mühendis adaylarının, sadece kodlama dillerine değil, yabancı bir dilin karmaşık ve uzun paragraf yapılarına da odaklanıp (Attention to Detail) içinden istenilen veriyi (Information Extraction) çıkarabilme yeteneği sınanır. Okuma hızınız ve bilmediğiniz kelimeleri bağlamdan tahmin etme başarınız değerlendirilerek uluslararası sınavlara (IELTS/TOEFL) hazırlık seviyeniz analiz edilir. Konuşma (Speaking) pratiklerindeki akıcılığın ve özgüvenin ne ölçüde geliştiği gözlemlenir. Global iletişim yetkinliğinizin ara onay noktasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `İngiltere'nin kuzey kırsalları, doğa koruma alanları ve sınır bölgelerinin karakteristik özelliklerini anlatan doğa-kültür ağırlıklı metinler üzerine çalışılır. Doğa ve çevre terminolojisi ile harmanlanan okumalar, sürdürülebilir teknoloji (Green IT), yenilenebilir enerji yazılımları veya karbon ayak izini azaltan IoT (Nesnelerin İnterneti) projeleri hakkında İngilizce makaleler okumak için dilsel bir temel atar. Topluluk karşısında tartışma aktivitelerinde (Group Discussions), teknolojinin çevreye etkisi ve kırsal kalkınma gibi konularda güçlü ve ikna edici İngilizce argümanlar kurma pratiği yapılır. Farklı yöresel aksanların ve diyalektlerin (Dialects) dinleme (Listening) egzersizleriyle tanıtılması, global toplantılardaki farklı İngilizce telaffuzlara adaptasyonu kolaylaştırır. Esnek okuma ve çok yönlü anlama becerileri hedeflenir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yorkshire+dales+and+northern+england+documentary' },
      ],
    },
    11: {
      description: `İngiltere'nin Güneybatı sahillerinin turizm, tarih ve denizcilik faaliyetlerini işleyen turistik ve ekonomik okuma metinleri incelenir. Yabancı müşterilere yazılım projeleri (Örneğin turizm rezervasyon sistemleri, denizcilik lojistik algoritmaları) sunarken ihtiyaç duyulacak coğrafi, lojistik ve hizmet sektörü İngilizcesi pratik edilir. Bir mekanı, uygulamayı veya sistemi detaylarıyla tanıtan (Promotional / Descriptive Text) yazıları okuyup benzer formlarda İngilizce sunumlar (Pitching) hazırlama etkinlikleri yapılır. Müşteri memnuniyeti, hizmet kalitesi ve deneyim (User Experience) odaklı kelime yapılarıyla iş İngilizcesi dağarcığı desteklenir. Anlatıma ikna edici ve çekici (Engaging) bir ton katmanın dilsel stratejileri kavranır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=south+west+england+cornwall+culture' },
      ],
    },
    12: {
      description: `Kendi özerk yapısı, tarihi, buluşları ve eğitim sistemiyle (Örneğin Edinburgh AI ve Robotik merkezleri) İskoçya'nın kültürel ve teknolojik profili İngilizce olarak analiz edilir. İskoçya'nın bilimsel keşiflerdeki (Örn. Telefonun icadı, Penisilin) rolünü okuyarak, bilim tarihi (History of Science) ve teknolojik inovasyonları anlatan akademik İngilizce metinleri tarama becerisi ivme kazanır. Farklı aksanlar serisinin en zorlusu olan İskoç aksanına dinleme egzersizleriyle maruz kalmak, uluslararası toplantılarda (Conference calls) her türlü telaffuzu anlayabilme "Parsing" (ayrıştırma) yeteneğini güçlendirir. İki farklı kültürün (İngiliz-İskoç) benzerliklerini ve farklılıklarını zıtlık bağlaçlarıyla (Although, However, Whereas) akıcı bir şekilde tartışma (Debating) pratiği pekiştirilir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=scotland+history+culture+and+innovations' },
      ],
    },
    13: {
      description: `Madencilik geçmişi, sanayinin dönüşümü ve dilin (Galce) korunması gibi konular üzerinden Galler'in sosyal ve ekonomik yapısını anlatan metinler okunur. Eski sanayi tesislerinin nasıl modern siber güvenlik ve bilişim (Tech Hub) kümelerine dönüştürüldüğünü anlatan İngilizce vaka çalışmalarını okuyarak sektörel dönüşüm İngilizcesi (Transformational Business English) geliştirilir. Doğal dillerin (Natural Languages) korunması ile programlama dillerinin eskimesi (Legacy Codes) arasında analojiler kurularak, sistemlerin hayatta kalma mücadeleleri İngilizce olarak kompozisyon/konuşma konusu yapılır. Sınıf içi röportaj (Interviewing) ve soru sorma/cevaplama pratikleri ile iş mülakatlarında kullanacağınız refleksif İngilizce düşünme hızı maksimize edilir. Kendiliğinden (Spontaneous) ve hatasız iletişim kurma özgüveni desteklenir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=wales+culture+history+and+geography' },
      ],
    },
    14: {
      description: `Politik süreçlerin çözümü, ekonomik toparlanma ve Kuzey İrlanda'nın kendine has sosyo-kültürel dinamikleri İngilizce araştırma metinleriyle incelenerek dönem tamamlanır. Bir toplumdaki zorlu kriz süreçlerinin ve barış antlaşmalarının (Troubles dönemi) yazılı metinlere nasıl döküldüğünü okumak, ileride yazılım şirketlerindeki büyük krizleri veya şirket birleşmelerini anlatan resmi PR (Halkla İlişkiler) ve kriz yönetimi (Crisis Management) metinlerini anlamanızı sağlar. Karmaşık ve çok taraflı olay örgüsünü (Complex narrative) kafada İngilizce olarak modelleyip bir başkasına özetleme (Paraphrasing) sanatının zirvesine ulaşılır. Bir bilgisayar mühendisi olarak, sadece kod okuyan değil; farklı kültürleri, sosyolojik analizleri ve uluslararası makaleleri akıcı bir şekilde anlayıp tartışabilen bir dünya vatandaşı formasyonuyla dil eğitimi noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=northern+ireland+history+and+culture+explained' },
      ],
    },
  },
  'ATİ102 Atatürk İlkeleri ve İnkılâp Tarihi II': {
    1: {
      description: `Osmanlı İmparatorluğu'nun son dönemlerinden Cumhuriyet'e uzanan süreçte, devletin altyapısını batı standartlarına göre güncelleme çabaları incelenir. Bir yazılım projesindeki eski (legacy) kodların modern framework'lere taşınması gibi, toplumsal ve kurumsal yapıların rasyonel bir temele oturtulması hedeflenmiştir. Eğitim, sanayi ve hukuk alanındaki bu modernizasyon adımları, günümüz bilişim ve teknoloji devrimlerinin köklerini oluşturur. Mühendis adaylarına, yenilikçi (innovative) düşüncenin toplumsal ölçekte nasıl sistemleştirilebileceği konusunda tarihsel bir vizyon katar. Teknolojik bağımsızlık için öncelikle kültürel ve bilimsel aydınlanmanın şart olduğu gerçeği vurgulanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=t%C3%BCrk+modernle%C5%9Fmesi' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrk+modernle%C5%9Fmesi+tarihi' },
      ],
    },
    2: {
      description: `Sanayi Devrimi'ni kaçıran bir imparatorluğun teknolojik, ekonomik ve askeri olarak dünya entegrasyonundan kopuş süreci analiz edilir. İnovasyon yapamayan ve sistemlerini güncelleyemeyen devasa yapıların, ne kadar köklü olurlarsa olsunlar çökmeye mahkum olduğu gerçeğiyle yüzleşilir. Bilişim devrimini (Endüstri 4.0) kaçırmanın bir ulus için yaratacağı maliyetler, bu tarihsel vaka üzerinden donanım ve yazılım vizyonuna aktarılır. Kriz anlarında sistem yamalarıyla (geçici ıslahatlar) değil, köklü mimari değişikliklerle ayakta kalınabileceği görülür. Mühendislere, teknolojiyi yakından takip etmenin ulusal güvenlik boyutu aşılanır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://islamansiklopedisi.org.tr/osmanli-imparatorlugu' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osmanl%C4%B1+imparatorlu%C4%9Fu+son+d%C3%B6nemi' },
      ],
    },
    3: {
      description: `Teknolojinin, mekanize birliklerin ve telgraf gibi iletişim ağlarının ilk defa küresel ölçekte bir savaşın kaderini belirlediği dönem incelenir. Lojistik tedarik zincirlerinin ve kısıtlı kaynakların optimizasyonunun (resource management) ulusal varoluş üzerindeki etkileri tartışılır. İstihbarat ve iletişim şifrelemelerinin (kriptografinin temelleri) cephedeki hayati rolü, günümüz siber güvenlik (cyber security) kavramlarının habercisidir. Çoklu cephelerde eşzamanlı kriz yönetimi (multithreading krizler), liderlik ve analitik karar alma mekanizmalarını test eder. Büyük ölçekli yıkımlarda hayatta kalma stratejilerinin tarihsel algoritmasıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/I._D%C3%BCnya_Sava%C5%9F%C4%B1' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=birinci+d%C3%BCnya+sava%C5%9F%C4%B1+cepheler' },
      ],
    },
    4: {
      description: `Savaş sonrası sistemin tamamen çökmesi (system failure) ve merkezi otoritenin işlevini yitirmesiyle oluşan yönetimsel boşluk ele alınır. İşgaller karşısında merkezi bir sunucu (server) olmadan, Anadolu'da dağıtık (decentralized) ve bağımsız direniş ağlarının (Kuvâ-yi Milliye) nasıl organize olduğu mühendislik gözüyle yorumlanabilir. Haberleşme ağlarının kesildiği durumlarda kurulan alternatif iletişim kanalları, acil durum kurtarma (disaster recovery) senaryolarına tarihi bir örnektir. Kriz anında inisiyatif alabilen yerel algoritmaların, ana sistemi kurtarma çabasıdır. Sorunlara karşı proaktif ve kendi kendini onaran (self-healing) yapıların önemini gösterir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mondros+m%C3%BCtarekesi+ve+sonras%C4%B1' },
      ],
    },
    5: {
      description: `Eldeki sıfır donanım ve kısıtlı kaynakla, çökmüş bir sistemin küllerinden doğarak yeniden derlenmesi (recompilation) ve ayağa kaldırılması sürecidir. Cephelerde uygulanan stratejik manevralar, askeri lojistik optimizasyonu ve zaman yönetimi, kusursuz çalışan bir algoritmanın sahaya yansımasıdır. Dağınık direniş örgütlerinin tek bir merkezde (TBMM) toplanarak senkronize edilmesi, sistem mühendisliğindeki entegrasyon başarısının destansı örneğidir. İmkansız gibi görünen büyük problemlerin, inanç, analitik zeka ve eşsiz bir liderlik vizyonuyla nasıl çözüleceğini kanıtlar. Mühendis adaylarına, en kısıtlı şartlarda bile çözüm üretebilme iradesi kazandırır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/T%C3%BCrk_Kurtulu%C5%9F_Sava%C5%9F%C4%B1' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kurtulu%C5%9F+sava%C5%9F%C4%B1+belgeseli' },
      ],
    },
    6: {
      description: `Sahada kazanılan teknik ve fiziki zaferin, uluslararası arenada diplomatik ve hukuki bir protokolle tescillenme (authentication) aşamasıdır. Tam bağımsızlık hedefine ulaşırken, kapitülasyonların kaldırılarak ekonomik ve teknolojik gelişimin önündeki dış engellerin (firewalls) temizlenmesi sağlanmıştır. Yazılım projelerindeki lisanslama ve telif hakkı müzakerelerine benzer şekilde, ulusal hakların masada tavizsiz savunulması sürecidir. Yeni kurulan sistemin dünya ağlarına (global network) bağımsız bir düğüm (node) olarak kabul ettirilmesidir. Stratejik iletişim, müzakere ve uluslararası standartlara uyumun tarihi belgesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/lozan-baris-antlasmasi/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lozan+bar%C4%B1%C5%9F+antla%C5%9Fmas%C4%B1+%C3%B6nemi' },
      ],
    },
    7: {
      description: `Osmanlı'nın son döneminden Lozan'a kadar uzanan kriz, savaş ve yeniden kuruluş süreçlerinin analitik olarak değerlendirildiği ara haftadır. Öğrencilerin, ulusal sistemin hangi darboğazlardan geçerek bugünkü bağımsız kodlarına ulaştığını kavrama düzeyi test edilir. Sadece teknoloji üreten değil, o teknolojinin üretildiği coğrafyanın bedellerini bilen bilinçli mühendisler hedeflenir. Devrimler ve kurumsallaşma konularına geçilmeden önce temel tarihsel vizyonun pekiştirilmesi sağlanır. Sorun çözme ve kriz yönetimi stratejilerinin teorik ölçümüdür.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    8: {
      description: `Genç Cumhuriyetin altyapısını çağın standartlarına yükseltmek için yapılan köklü güncellemeler (major updates) ve mimari reformlar işlenir. Harf devrimi ve ölçü birimlerinin değiştirilmesi, toplumun bilgi işleme (data processing) hızını ve uluslararası entegrasyonunu sağlamak için yapılmış muazzam arayüz (interface) değişiklikleridir. Eğitimde, hukukta ve sanayide eskiyen kod bloklarının silinip yerine rasyonel ve bilimsel yasaların entegre edilmesidir. Sistemin çalışma verimliliğini (performance optimization) artırarak çağdaş uygarlık seviyesini yakalama algoritmasıdır. Teknolojik ve endüstriyel atılımlar için gereken pürüzsüz zeminin inşasıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-inkilaplari/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+devrimleri' },
      ],
    },
    9: {
      description: `Türkiye Cumhuriyeti'nin işletim sistemini (OS) ayakta tutan altı temel ilke, devletin ana çerçeve mimarisi (core framework) olarak incelenir. Cumhuriyetçilik ve halkçılık gibi ilkeler sistemin kullanıcı (halk) odaklı ve adil çalışmasını sağlarken, laiklik mantıksal (rasyonel) düşünceyi merkeze alır. İnkılapçılık, sistemin statik kalmasını engelleyip çağın teknolojisine göre sürekli güncellenmesini (continuous deployment) emreden vizyoner bir donanımdır. Bu ilkeler, geleceğin mühendislerine geliştirecekleri projelerde laik, bilimsel ve toplum yararını gözeten bir etik pusula sunar. Devlet ve toplum yapısının çökmesini engelleyen güvenlik protokolleridir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-ilkeleri/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+ilkeleri+nelerdir' },
      ],
    },
    10: {
      description: `Yeni kurulan devletin tek işlemcili (monolithic) yapıdan, çok partili ve çoklu görev (multitasking) yapabilen demokratik bir donanıma geçiş denemeleri ele alınır. Serbest Fırka gibi denemelerle muhalefet mekanizmalarının sisteme entegre edilmeye çalışılması, hata ayıklama (debugging) ve sistem testi niteliğindedir. Şeyh Sait veya Menemen gibi sistemi geri sarmaya (rollback) çalışan virüs niteliğindeki ayaklanmaların devlet aygıtınca nasıl bertaraf edildiği görülür. Siyasal dengelerin ve kurumsal yapıların stabilite (kararlılık) testlerinden geçme sürecidir. Demokratik bir yönetim algoritmasının sıfırdan nasıl inşa edildiği incelenir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=atat%C3%BCrk+d%C3%B6nemi+siyasal+hayat' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+d%C3%B6nemi+i%C3%A7+politika' },
      ],
    },
    11: {
      description: `"Yurtta Sulh, Cihanda Sulh" ilkesiyle komşu devletlerle yapılan Sadabat ve Balkan paktları üzerinden uluslararası ağ (networking) kurma stratejileri işlenir. Yaklaşan küresel savaşa karşı sınırları güvence altına almak için diplomatik güvenlik duvarları (firewalls) örülmesi sürecidir. Hatay'ın anavatana katılması ve Montrö Boğazlar Sözleşmesi, zekice kurgulanmış uzun vadeli diplomatik algoritmaların başarılı çıktısıdır (output). Bağımsızlıktan taviz vermeden rasyonel dış bağlantılar (API entegrasyonları) kurma vizyonu öğretilir. Küresel siyasette akılcı ve barışçıl denge politikaları geliştirme sanatıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/ataturk-donemi-turk-dis-politikasi/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atat%C3%BCrk+d%C3%B6nemi+d%C4%B1%C5%9F+politika' },
      ],
    },
    12: {
      description: `Dünyayı yıkan küresel savaş sırasında Türkiye'nin tarafsız (isolated) kalma stratejisi ve ardından çok partili demokratik sisteme kalıcı geçişi analiz edilir. Savaşın getirdiği ekonomik darboğazlarda kaynakların savunmaya tahsis edilmesi, kısıtlı sistem kaynaklarını (CPU/RAM) hayatta kalmak için optimize etmeye benzer. 1950 seçimleriyle iktidarın barışçıl değişimi, kurulan siyasal sistemin (işletim sisteminin) dayanıklılığını ve hata toleransını kanıtlar. Demokratik süreçlerin ulusal kalkınma ve teknolojik yatırımlara olan doğrudan etkileri tartışılır. Küresel krizin ardından sistemin yeni dünya standartlarına entegrasyonudur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=ikinci+d%C3%BCnya+sava%C5%9F%C4%B1+t%C3%BCrkiye' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ikinci+d%C3%BCnya+sava%C5%9F%C4%B1+t%C3%BCrkiye+siyaseti' },
      ],
    },
    13: {
      description: `Soğuk Savaş'ın çift kutuplu dünyasında Türkiye'nin Batı blokuna (NATO) entegrasyon süreçleri ve uluslararası anlaşmalar (protokoller) ele alınır. Savunma sanayimizin ve teknolojik altyapımızın Batı standartlarına göre yeniden şekillenmesi, günümüz teknoloji politikalarının temelini atmıştır. Yabancı yatırımların, teknoloji transferinin ve Truman/Marshall yardımlarının milli bağımsızlığa olan uzun vadeli etkileri mühendis eleştirisiyle analiz edilir. Küresel ağlara bağlanmanın (joining the network) getirdiği güvenlik avantajları ve dışa bağımlılık riskleri (trade-off) tartışılır. Modern savunma teknolojilerindeki stratejik konumumuzun tarihsel arka planıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=sava%C5%9F+sonras%C4%B1+t%C3%BCrk+d%C4%B1%C5%9F+politikas%C4%B1' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrkiyenin+natoya+giri%C5%9Fi+ve+d%C4%B1%C5%9F+politika' },
      ],
    },
    14: {
      description: `Cumhuriyetin kuruluş felsefesinden günümüzdeki yapay zeka, havacılık (İHA/SİHA) ve siber güvenlik atılımlarına kadar gelinen nokta değerlendirilir. Tam bağımsızlığın sadece askeri cephede değil, yazılımda, çip üretiminde ve büyük veriyi (Big Data) işlemede de geçerli olduğu vizyonu aşılanır. Kendi işletim sistemlerini (Pardus), kendi savunma yazılımlarını ve donanımlarını üreten bir mühendis nesli olmanın tarihsel zorunluluğu hatırlatılır. Geçmişin zorlu sınavlarından çıkarılan derslerle, ülkeyi teknoloji üreten bir küresel güç yapma görevi öğrencilere devredilir. Atatürk'ün "bilim ve akıl" mirasının, kod satırlarında hayat bulmasıyla dönem sona erer.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tubitak.gov.tr/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=t%C3%BCrkiye+teknoloji+ve+savunma+sanayi+geli%C5%9Fimi' },
      ],
    },
  },
  'BMB208 Ayrık Matematik': {
    1: {
      description: `Sürekli matematikten (Kalkülüs) farklı olarak, 0 ve 1 gibi kesikli (discrete) ve sayılabilir yapıları inceleyen bilgisayar biliminin temel matematiğine giriş yapılır. Dijital dünyanın sürekli değil ayrık veri yığınlarından oluştuğu gerçeğiyle bilgisayarın çalışma felsefesi (binary logic) arasındaki bağ kurulur. Algoritmaların analiz edilmesi, şifreleme ve veri yapılarının tasarımı için kullanılacak sembolik düşünce tarzı tanıtılır. Mühendislikte problemleri sonlu adımlara bölerek çözülebilir dijital formlara sokmanın ilk kavramsal adımıdır. Sadece sayıları değil, mantıksal nesneleri de hesaplamaya dahil etme yetisi aşılanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ayr%C4%B1k+matematik+giri%C5%9F' },
      ],
    },
    2: {
      description: `Doğru (True-1) veya Yanlış (False-0) olabilen önermeler ve AND, OR, NOT, XOR gibi mantıksal bağlaçlarla kurulan doğruluk tabloları incelenir. Yazdığınız kodlardaki \`if-else\` karar mekanizmalarının ve \`while\` döngülerindeki koşulların arkasında yatan kusursuz matematiksel arka plandır. İşlemcilerin (CPU) içindeki mantık kapılarının (Logic Gates) nasıl tasarlandığını ve veriyi nasıl işlediğini kavramanın teorik yoludur. Karmaşık iş kurallarını basitleştirmek (De Morgan Kuralları) ve kodun gereksiz kontroller yapmasını engellemek için bu mantık kullanılır. Bilgisayarın düşünme şekli olan Boole Cebri'nin dilidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/propositional-logic/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ayr%C4%B1k+matematik+%C3%B6nermeler+mant%C4%B1%C4%9F%C4%B1' },
      ],
    },
    3: {
      description: `Doğrudan ispat, tümevarım (induction), çelişkiyle ispat gibi yöntemlerle matematiksel önermelerin doğruluğunu algoritmik olarak kanıtlama teknikleri öğrenilir. Yazdığınız bir algoritmanın veya fonksiyonun her türlü girdide (edge cases) doğru ve sonsuz döngüye girmeden çalışacağını garanti etmenin (Algorithm Correctness) yolu bu ispatlardan geçer. Tümevarım yöntemi, özellikle özyinelemeli (Recursive) fonksiyonların arka planda nasıl çalıştığını ve nerede duracağını tasarlamak için hayati bir mantıktır. Kodunuzu sadece deneyerek değil, matematiksel kesinlikle savunabilme yeteneği kazandırılır. Bir yazılımcıyı, gerçek bir bilgisayar bilimcisine dönüştüren soyut düşünce pratikleridir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematical_induction.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matematiksel+t%C3%BCmevar%C4%B1m+ve+ispat+y%C3%B6ntemleri' },
      ],
    },
    4: {
      description: `Nesnelerin iyi tanımlanmış toplulukları olan kümeler, alt kümeler ve kesişim/birleşim operasyonları ile veri organizasyonunun temelleri işlenir. İlişkisel veritabanlarındaki (SQL) tablolar aslında birer kümedir ve uyguladığınız \`INNER JOIN\` veya \`UNION\` komutları küme teorisinin ta kendisidir. Veri mühendisliğinde büyük veri yığınlarını (Big Data) kategorize etmek, filtrelemek ve aralarındaki ilişkileri çıkarmak için bu teorik yapıya dayanılır. Bellekteki (RAM) karmaşık nesneleri gruplayarak mantıksal sınırlar çizme disiplini aşılar. Bilginin dağınıklıktan kurtulup sistematik verilere dönüşme sürecidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_sets.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ayr%C4%B1k+matematik+k%C3%BCmeler+teorisi' },
      ],
    },
    5: {
      description: `İki küme arasındaki ilişkileri tanımlayan bağıntılar (Relations) ve her girdiye tek bir çıktı atayan fonksiyonların (birebir, örten) yapısı incelenir. Veritabanı tasarımında tablolar arası kurulan Bir-e-Bir (1:1) veya Bir-e-Çok (1:N) bağların matematiksel karşılığı tam olarak bu bağıntılardır. Bir yazılım dilindeki \`Function\` veya \`Method\` kavramının, teorideki tanım ve değer kümesi haritalamasından (Mapping) başka bir şey olmadığı kanıtlanır. Algoritmaların performans analizlerinde fonksiyonların büyüme hızlarını (Big O Notation) kıyaslarken fonksiyonel yapılar referans alınır. Girdi ve çıktı arasındaki köprünün mantıksal kuralları inşa edilir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/relations-and-their-types/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ayr%C4%B1k+matematik+ba%C4%9F%C4%B1nt%C4%B1+ve+fonksiyonlar' },
      ],
    },
    6: {
      description: `Kümeler üzerinde tanımlanan işlemlerin sağladığı kurallara göre oluşan Gruplar, Halkalar (Rings) ve Cisimler (Fields) gibi soyut yapılar öğrenilir. Kriptografide (şifreleme algoritmalarında) kullanılan Eliptik Eğri (Elliptic Curve) veya AES sistemlerinin güvenliği, sonlu cisimler üzerindeki bu karmaşık cebirsel yapıların kırılmazlığına dayanır. Hata düzelten kodlar (Error Correcting Codes) sayesinde ağ üzerinde veri iletirken kaybolan paketlerin geri getirilmesi bu cebir sayesinde gerçekleşir. Sayıların sadece büyüklük değil, belirli bir modüler evrende yapısal davranışlar sergilediği gösterilir. Veri güvenliğinin ve telekomünikasyonun kalbindeki gizli matematiktir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_algebraic_structures.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=cebirsel+yap%C4%B1lar+gruplar+halkalar' },
      ],
    },
    7: {
      description: `Tam sayıların özellikleri, bölünebilme, Asal sayılar (Prime Numbers) ve Modüler aritmetik (kalanlı bölme) konseptleri derinlemesine analiz edilir. Modüler aritmetik, yazılımda dairesel kuyruklar (Circular Queues) oluşturmak veya rastgele sayı üreticileri (Random Number Generators) yazmak için temel araçtır. Özellikle devasa asal sayıların çarpanlarına ayrılmasının imkansızlığı, günümüzde internet güvenliğini sağlayan RSA şifrelemesinin en büyük dayanağıdır. Hash fonksiyonları (veri özetleme) geliştirirken verinin benzersiz bir kimliğe dönüştürülmesini sağlayan kurallar buradan çıkar. Modern siber güvenliği ve blockchain teknolojilerini anlamanın kapısı aralanır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/number-theory-competitive-programming/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1lar+teorisi+asal+say%C4%B1lar+ve+mod%C3%BCler+aritmetik' },
      ],
    },
    8: {
      description: `Önermeler mantığı, ispat yöntemleri, kümeler ve sayılar teorisi gibi bilgisayar biliminin teorik temellerinin ölçüldüğü akademik sınavdır. Öğrencinin karmaşık problemleri sembolik mantığa çevirebilme ve algoritmik temelleri matematiksel kesinlikle ispatlayabilme gücü test edilir. Yazılım kodlamaya geçmeden önce zihnin soyut, ayrık ve yapısal düşünme (structural thinking) formatına girip girmediği kontrol edilir. Şifreleme, grafik kuramı ve algoritmalar gibi uygulamalı ağır konulara geçiş öncesi sağlamlık onayıdır. Mühendislik analitiğinin kağıt üzerindeki kalite kontrolüdür.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Bir problemi çözmek için izlenen sonlu adım dizileri olan algoritmaların özellikleri, sahte kod (Pseudocode) yazımı ve çalışma zamanı karmaşıklığı (Big O, Omega, Theta) incelenir. İki farklı kod bloğunun (örneğin Arama veya Sıralama algoritmaları) aynı işi yapmasına rağmen hangisinin milyonlarca veride sunucuyu çökerteceği, hangisinin saliseler içinde biteceği matematiksel olarak ispatlanır. Optimizasyon problemlerini çözerken en kısa yolu veya en az maliyetli seçeneği (Greedy Algorithms) bulmanın teorik çerçevesi çizilir. Sadece çalışan değil, verimli (efficient) ve ölçeklenebilir (scalable) kod yazmanın farkındalığı aşılanır. İyi bir yazılımcıyı sıradan bir kodlayıcıdan ayıran en önemli haftadır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_algorithms.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=algoritma+analizi+ve+zaman+karma%C5%9F%C4%B1kl%C4%B1%C4%9F%C4%B1+big+o' },
      ],
    },
    10: {
      description: `Sayılar teorisi ve modüler aritmetik bilgileri birleştirilerek, veriyi gizleme ve güvenli iletişim kurma bilimi olan Kriptografinin temelleri öğrenilir. Sezar şifrelemesi gibi klasik yöntemlerden başlayıp, Açık Anahtarlı (Public Key) şifreleme sistemlerinin (RSA) çalışma mekanizmalarına giriş yapılır. WhatsApp uçtan uca şifreleme veya HTTPS güvenli web protokollerinin arka planda veriyi nasıl okunamaz matematiksel yığınlara çevirdiği anlaşılır. Siber güvenlik (Cyber Security) alanında kariyer yapmak isteyenlerin sistem zafiyetlerini öngörmesi için şarttır. Bilginin sanal ortamda güvenle seyahat etmesinin matematiksel kalkanları inşa edilir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cryptography/index.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kriptografi+temel+%C5%9Fifreleme+y%C3%B6ntemleri+rsa' },
      ],
    },
    11: {
      description: `Permütasyon, Kombinasyon, Güvercin Yuvası İlkesi (Pigeonhole Principle) ve bu sayma kurallarına dayanan ayrık olasılık hesaplamaları işlenir. Şifre kırma (Brute-force) saldırılarında, 8 haneli bir şifrenin kaç farklı ihtimal barındırdığını ve sistemin kırılma süresini hesaplamak kombinatoryal bir problemdir. Olasılık sayesinde, sunucuya gelen eşzamanlı isteklerin (requests) sistemi kilitleme (collision) ihtimali algoritmik olarak minimize edilir. Hash tablolarında verilerin çakışma ihtimalini ölçmek için bu matematiksel temeller doğrudan koda dökülür. İhtimaliyatın, sistem güvenilirliğine ve kapasite planlamasına entegrasyonudur.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_probability.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sayma+y%C3%B6ntemleri+perm%C3%BCtasyon+kombinasyon+olas%C4%B1l%C4%B1k' },
      ],
    },
    12: {
      description: `Belirli kurallara uyan alt kümelerin sistemli bir şekilde tasarlanmasını inceleyen ileri düzey ayrık matematik konusudur. Ağ yapılarında (Network Routing) paketlerin hangi yollardan gideceğini tasarlamak veya deneysel tasarımlarda test senaryolarını optimum sayıda oluşturmak için kullanılır. Paralel bilgisayar mimarilerinde işlemciler arasındaki bağlantı topolojilerini maksimum verimle kurgulamanın matematiksel şemasıdır. Hata bulucu kodların (Error Correcting) ve şifreleme anahtarlarının dengeli dağıtımında teorik altyapı sağlar. Olasılıkları rastgele değil, mükemmel bir denge içinde sisteme yerleştirme sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Combinatorial_design' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kombinatorik+tasar%C4%B1m+teorisi' },
      ],
    },
    13: {
      description: `Düğümler (Nodes) ve kenarlardan (Edges) oluşan Graf (Çizge) yapılarının özellikleri, Euler/Hamilton yolları ve ağaç (Tree) kavramları incelenir. Google Haritalar uygulamasında A noktasından B noktasına en kısa yolu bulan navigasyon algoritmaları (Dijkstra) tamamen bu çizge kuramına dayanır. Sosyal medya platformlarında "Önerilen Arkadaşlar" veya ağ analizi (Social Network Analysis) algoritmaları graf veritabanları (Örn: Neo4j) üzerinde bu kuramla çalışır. Bilgisayar ağlarında bilgisayarlar arası yönlendirmelerin (Routing) çökmeden nasıl optimize edildiğini ispatlar. Noktaları birleştirerek dijital evrenin haritasını çıkarma sürecidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%A7izge+kuram%C4%B1+graf+teorisi+dijkstra' },
      ],
    },
    14: {
      description: `Çizgelerin renklendirilmesi (Graph Coloring), eşleştirme (Matching) ve maksimum akış (Maximum Flow) gibi ileri seviye ağ optimizasyon problemleriyle dönem noktalanır. Sınav çizelgeleri hazırlamak veya GSM baz istasyonlarının frekans çakışmasını engellemek gibi karmaşık tahsis problemleri Çizge Renklendirme algoritmalarıyla saniyeler içinde çözülür. Veri merkezlerindeki (Data Centers) kablo hatlarından saniyede aktarılabilecek maksimum veri miktarını hesaplamak için Akış algoritmalarına başvurulur. Ayrık matematiğin en popüler ve modern teknolojiye en çok yön veren, görsel-mantıksal şöleni ile temel teorik eğitim tamamlanır. Soyut matematiğin, devasa teknolojik ağları yöneten somut yazılımlara dönüşmesidir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/graph_theory/index.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=graf+teorisi+renklendirme+ve+maksimum+ak%C4%B1%C5%9F' },
      ],
    },
  },
  'BMB210 Elektroniğe Giriş': {
    1: {
      description: `Yarı iletken fiziğine giriş yapılarak silisyum (Si) ve germanyum gibi elementlerin valans elektron davranışları ve N-Tipi/P-Tipi doping süreçleri öğrenilir. Bugün kullandığımız nanometre boyutundaki işlemcilerin (CPU) ve bellek (RAM) yongalarının kumdan (silisyumdan) yola çıkarak nasıl akıllı cihazlara dönüştüğünün fiziksel sırrıdır. Enerji bant aralığı (Bandgap) mantığı, bir maddenin ne zaman yalıtkan kalıp ne zaman iletken olacağına karar veren yazılımsal 0 ve 1'lerin kuantum düzeyindeki varoluşudur. Güç tüketimini ve ısınmayı optimize eden modern çip üretim mimarilerini (Fab) anlamak için hayati bir temeldir. Dijital dünyanın atomlar seviyesindeki çalışma kuralları belirlenir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/basic_electronics/basic_electronics_energy_bands.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yar%C4%B1+iletken+fizi%C4%9Fi+enerji+bant+diyagramlar%C4%B1' },
      ],
    },
    2: {
      description: `Elektrik akımına tek yönde izin veren P-N ekleminden oluşan diyotların çalışma prensipleri, karakteristiği ve doğrultmaç (rectifier) devreleri işlenir. Bilgisayarınızın güç adaptörlerinin, prizden gelen değişken alternatif akımı (AC) nasıl sabit doğru akıma (DC) dönüştürerek anakarta zarar vermeden ilettiğinin elektronik mimarisidir. Zener diyotlar kullanılarak voltaj sabitleme ve aşırı gerilimden koruma (regülatör) senaryoları simüle edilir, yazılımların çalıştığı donanım ortamı güvene alınır. Lojik kapıların (AND/OR) ilk ilkel hallerini diyotlarla tasarlayarak dijital mantığın fiziksel tasarımına giriş yapılır. Sinyalleri kırpan ve şekillendiren temel elektronik valflerdir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.allaboutcircuits.com/textbook/semiconductors/chpt-3/introduction-to-diodes-and-rectifiers/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=diyot+nedir+%C3%A7al%C4%B1%C5%9Fma+prensibi+ve+do%C4%9Frultma%C3%A7+devreleri' },
      ],
    },
    3: {
      description: `Çift kutuplu yüzey transistörlerinin (Bipolar Junction Transistor - BJT) fiziksel yapısı, aktif, kesim ve doyum bölgelerinde nasıl çalıştığı modellenir. Bir zayıf sinyali alıp şiddetini artırma (Amplifikatör) veya bir elektronik anahtar (Switch) olarak davranma yeteneğiyle 20. yüzyılın en büyük elektronik icadıdır. Yazılım tarafından Arduino veya Raspberry Pi pinlerinden gönderilen 5V zayıf bir sinyalle, yüksek akım çeken bir motoru veya röleyi kontrol etmenin anahtarı BJT kullanmaktır. Transistörün eşdeğer devre modellerini çıkararak, sisteme giren akımın çıkışta nasıl bir karakter sergileyeceğinin matematiksel analizi yapılır. Dijital kontrolün analog güce dönüştüğü elemandır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/basic_electronics/basic_electronics_bjt.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bjt+transist%C3%B6r+%C3%A7al%C4%B1%C5%9Fma+prensibi+ve+modelleme' },
      ],
    },
    4: {
      description: `BJT'lerin Ortak Emiter, Ortak Baz ve Ortak Kollektör gibi farklı konfigürasyonlarla devrelere nasıl entegre edileceği ve sinyal kazanç hesaplamaları öğrenilir. Ses kartlarından veya radyo alıcılarından gelen çok zayıf parazitli sinyalleri, yazılımın işleyebileceği net verilere dönüştüren analog yükselteç katmanlarıdır. Çok katlı (kaskad) devreler tasarlanarak, sinyal izolasyonu ve maksimum güç aktarımı için empedans uyumlaması (matching) yapma becerisi kazandırılır. Mantık kapılarının (TTL - Transistor-Transistor Logic) arka planda yüzlerce BJT ile nasıl dizayn edildiği ve hız limitleri analiz edilir. Yazılım ve sensörler arasındaki sinyal çevirici katmanların pratik kurgusudur.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.allaboutcircuits.com/textbook/semiconductors/chpt-4/bipolar-junction-transistors-bjt/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bjt+y%C3%BCkselte%C3%A7+devreleri+ortak+emiter' },
      ],
    },
    5: {
      description: `BJT'ye göre gerilim kontrollü çalışan ve giriş direnci çok yüksek olan Alan Etkili Transistörlerin (JFET ve MOSFET) mimarisi işlenir. Günümüzdeki modern mikroişlemcilerin (Intel, AMD, ARM) içindeki milyarlarca mikroskobik transistör tamamen CMOS (Komplemanter MOSFET) mimarisine dayanır. BJT'ye kıyasla daha az ısınmaları ve enerji tüketimleri, mobil cihazların ve bataryalı IoT sistemlerinin var olabilmesinin tek fiziksel nedenidir. MOSFET'leri anahtar (0-1) olarak kullanarak, dijital dünyayı var eden mikroelektronik sistemlerin eşdeğer modellemeleri çıkarılır. Bilgisayar mühendisinin, kodunun koşturulduğu gerçek fiziksel kapılarla tanışmasıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/basic_electronics/basic_electronics_fet.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fet+ve+mosfet+%C3%A7al%C4%B1%C5%9Fma+prensibi' },
      ],
    },
    6: {
      description: `MOSFET'lerin sayısal entegre devrelerdeki (IC) anahtarlama davranışları ve güç (Power MOSFET) elektroniğindeki kullanımları pratik edilir. Otonom araçların veya elektrikli arabaların (EV) motor sürücü yazılımları, yüksek voltajları ancak bu Power MOSFET'leri saniyede binlerce kez açıp kapatarak (PWM) kontrol edebilir. NAND ve NOR gibi evrensel lojik kapıların sadece MOSFET'lerle nasıl en az yer kaplayacak şekilde tasarlandığı (VLSI Design) öğretilir. Çip mimarisi tasarlamak (Donanım Mühendisliği) isteyenler için, transistör düzeyinde gecikme (delay) ve kapasitans etkileri analiz edilir. Modern bilgisayarların hız ve ısı darboğazları transistör bazında anlaşılır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.allaboutcircuits.com/textbook/semiconductors/chpt-5/junction-field-effect-transistors-jfet/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mosfet+uygulamalar%C4%B1+ve+anahtarlama+devreleri' },
      ],
    },
    7: {
      description: `Sonsuz kazanç ve sonsuz giriş direnci gibi ideal özelliklere sahip Opera-syonal Amplifikatörlerin (Op-Amp) iç yapısı ve temel kuralları öğrenilir. Analog bilgisayarların kalbi olan bu entegreler, yazılım kodlarına gerek kalmadan donanım seviyesinde anlık toplama, çıkarma ve karşılaştırma (Comparator) işlemleri yapabilir. Analogdan Dijitale Çeviricilerin (ADC) en önemli bileşeni olarak, dış dünyadaki sensör verilerinin bilgisayarın dijital 0-1 dünyasına girmeden önceki son durağıdır. Sinyal işlemede yazılımı yoran yüksek frekanslı gürültüleri donanım seviyesinde eleyen aktif filtrelerin temelidir. Mikrodenetleyiciler ile fiziksel çevre arasındaki en güvenilir köprüdür.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/linear_integrated_circuits_applications/linear_integrated_circuits_applications_basics_of_operational_amplifier.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=opamp+nedir+i%C5%9Flemsel+y%C3%BCkselte%C3%A7ler+giri%C5%9F' },
      ],
    },
    8: {
      description: `Op-Amp'lar kullanılarak eviren/evirmeyen yükselteçler, türev alıcı, integral alıcı ve enstrümantasyon (ölçüm) amfileri tasarlanır. Biyomedikal mühendislikte kalp ritmi (EKG) veya beyin dalgaları (EEG) gibi mikro-volt seviyesindeki verilerin gürültüsüz şekilde bilgisayara aktarılması bu özel Op-Amp devreleriyle yapılır. PID tabanlı bir robot veya dron kontrol yazılımında, integral ve türev hesaplarını işlemciye bırakmak yerine sıfır gecikmeyle çalışan analog devrelerle çözme stratejisi kazandırılır. Donanım ve yazılım ortak tasarımı (Hardware-Software Codesign) perspektifiyle, hangi görevin kodla, hangisinin elektronik devreyle yapılacağının optimizasyonudur.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.allaboutcircuits.com/textbook/semiconductors/chpt-8/operational-amplifier-applications/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=opamp+uygulamalar%C4%B1+t%C3%BCrev+integral+toplay%C4%B1c%C4%B1' },
      ],
    },
    9: {
      description: `A, B, AB ve C sınıfı güç yükselteçlerinin verimlilik analizleri, distorsiyon (bozulma) oranları ve ısı dağılımları (Soğutucu - Heatsink tasarımları) incelenir. Radyo frekans (RF) iletişiminde antene giden sinyali güçlendirmek veya bilgisayar ses sistemlerinde (Hoparlör) dijitalden anoloğa dönmüş sesi yükseltmek için bu devrelere ihtiyaç vardır. Transistörlerin sınır zorlayan akımlarda çalışırken lineerliği (doğrusallığı) nasıl kaybettiği ve enerji kaybının ısıya dönüşmesi mühendislik denklemleriyle ispatlanır. Mobil veya giyilebilir cihaz yazılımları geliştirirken, donanımın güç tüketim sınıflarını bilerek batarya ömrünü optimize etme vizyonu sunar. Sinyalin "Güç" haline dönüştüğü son katmandır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/amplifiers/amplifiers_power.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%BC%C3%A7+y%C3%BCkselte%C3%A7leri+s%C4%B1n%C4%B1f+a+b+ab' },
      ],
    },
    10: {
      description: `Dışarıdan herhangi bir giriş sinyali (AC) uygulanmadan, DC voltajı istenilen frekansta dalgalara (kare, sinüs, üçgen) çeviren geri beslemeli devreler öğrenilir. Bilgisayar işlemcilerine senkronizasyon sağlayan saat vuruşları (Clock Cycle) ve iletişim modüllerini frekansa kilitleyen donanımlar osilatörlerle (örn: Kristal Osilatör) tasarlanır. Kod satırlarının derlenip çalıştırılma hızı, tamamen bu devrenin ürettiği frekans kararlılığına (Hz/GHz) bağlıdır. RC, LC ve Wien Köprüsü gibi osilatör tipleri incelenerek, haberleşme algoritmalarında (Modülasyon) kullanılan taşıyıcı sinyallerin donanımsal üretimi kavranır. Sistemin kalbine ritim veren elektronik beyin mekanizmasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/sinusoidal_oscillators/index.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osilat%C3%B6r+devreleri+ve+%C3%A7al%C4%B1%C5%9Fma+prensibi' },
      ],
    },
    11: {
      description: `Yarı iletken fiziği, BJT ve FET transistör modellemeleri ile Op-Amp devre analizlerinin kağıt üzerinde ve elektriksel parametrelerle test edildiği ara değerlendirmedir. Öğrencinin elektronik devreleri birer "kara kutu" olarak değil, içinden geçen akım, gerilim ve empedans değerleriyle matematiksel olarak çözümleyebilme kapasitesi ölçülür. Yazılım algoritmasının fiziksel donanımla buluştuğunda hangi sınırlarla karşılaşacağını öngörme yeteneği test edilir. İleri düzey güç ve tetikleme devrelerine geçmeden önce, yarı iletken mantığının tam olarak oturduğu onaylanır. Dijital sistemlerin analog temellerinin ara kalite kontrolüdür.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    12: {
      description: `Prizden alınan şebeke gerilimini transformatör, doğrultmaç, filtre ve regülatör (Voltaj Sabitleyici) aşamalarından geçirerek bilgisayarların ihtiyaç duyduğu temiz DC voltaja çeviren sistemler tasarlanır. Hassas donanımları (İşlemci, RAM) voltaj dalgalanmalarından korumak için Zener diyotlu veya lineer regülatörlü IC (Örn: 7805) kullanımları incelenir. Veri merkezlerinin veya otonom sistemlerin kesintisiz çalışması (UPS) ve enerji verimliliği için Anahtarlamalı Güç Kaynağı (SMPS) mantığına giriş yapılır. İyi kodlanmış bir sistemin bile elektriksel gürültü veya yetersiz akım nedeniyle nasıl "Reset" atacağını veya çökeceğini kanıtlar. İstikrarlı bir sistem için donanımsal güç stabilitesinin mimarisidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/electronic_circuits/electronic_circuits_power_supplies.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=reg%C3%BCleli+g%C3%BC%C3%A7+kayna%C4%9F%C4%B1+ve+do%C4%9Frultma%C3%A7+devreleri' },
      ],
    },
    13: {
      description: `Tünel diyotlar, Varaktör diyotlar, Schottky diyotlar gibi standart P-N ekleminin çok ötesinde mikrodalga veya yüksek hız (high-frequency) frekanslarında çalışan özel 2 uçlu elemanlar işlenir. Bilgisayarların GHz seviyesindeki veri yolu iletişimlerinde kapasitans değişimlerini sağlayan veya anahtarlama hızını olağanüstü artıran bu elemanlar donanım hız limitlerini belirler. RF (Radyo Frekans) ve optik iletişim devrelerinde (Fiber Optik alıcı/vericiler) fotodiyotların donanıma entegrasyonu incelenir. Haberleşme ağlarındaki veri aktarım bant genişliğini (Bandwidth) donanım seviyesinde artıran egzotik elemanların çalışma fiziğidir. İleri teknoloji uygulamalarının özel transistör alternatifleridir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.allaboutcircuits.com/textbook/semiconductors/chpt-3/special-purpose-diodes/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%B6zel+diyotlar+zener+schottky+varakt%C3%B6r' },
      ],
    },
    14: {
      description: `Tristör (SCR), Triyak, Diyak gibi dört katmanlı, özellikle yüksek AC voltaj ve akımların dijital devrelerle kontrolünü sağlayan endüstriyel elektronik elemanları öğrenilir. PLC otomasyon sistemlerinde veya akıllı ev (Smart Home) yazılımlarında 5V ile çalışan bir işlemcinin, 220V ile çalışan devasa motorları veya ısıtıcıları güvenle anahtarlaması bu elemanlarla yapılır. Güç elektroniğindeki anahtarlama kayıplarını minimuma indirerek, büyük robotik sistemlerin beyin (yazılım) ve kas (güç) koordinasyonu elektriksel olarak kurulur. Bilişim dünyasının dijital sinyalleri ile sanayi dünyasının yüksek gücü arasındaki kontrol arabirimleri tamamlanarak donanım dersi sonlandırılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/basic_electronics/basic_electronics_thyristors.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=trist%C3%B6r+triyak+diyak+%C3%A7al%C4%B1%C5%9Fma+prensibi' },
      ],
    },
  },
  'LMİ103 Mesleki İngilizce I': {
    1: {
      description: `Mühendislik ve temel bilimler terminolojisini anlamak için teknik bir sözlükçe (Glossary) üzerinden kelime dağarcığı oluşturma stratejileri incelenir. İleride API dokümantasyonları, SDK kılavuzları veya StackOverflow cevaplarını okurken teknik terimleri ezberlemeden, cümlenin bağlamından (context) çıkarabilme yeteneği hedeflenir. İngilizce kök-ek (prefix-suffix) mantığı çözümlenerek, bilinmeyen yüzlerce bilimsel terimin anlamını türetme şifreleri verilir. Fonksiyonları veya değişkenleri isimlendirirken kullanılacak evrensel temiz kod (Clean Code) standartlarına uygun terminoloji altyapısı atılır. Akademik makalelerin ve teknik dökümanların şifresini çözen anahtar haftadır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+read+technical+english+for+engineers' },
      ],
    },
    2: {
      description: `İnsan biyolojisi ve güneş ışınları arasındaki etkileşimi anlatan nedensellik (Cause and Effect) içeren bilimsel okuma parçaları İngilizce olarak analiz edilir. Biyomedikal mühendislik yazılımları veya giyilebilir sağlık teknolojileri (HealthTech) geliştirirken karşınıza çıkacak olan tıp/bilim İngilizcesi terminolojisine ısınma turudur. Karmaşık bir biyolojik sürecin (Güneşin vitamini sentezlemesi) adım adım akış diyagramı (flowchart) gibi anlatıldığı paragraf yapıları çözümlenir. Sistem algoritmalarını İngilizce anlatırken sıklıkla başvurulan "Bu sayede şu tetiklenir" (which triggers...) şeklindeki pasif ve etken cümle kalıpları pratik edilir. Disiplinlerarası bilim metinlerini anlama kasları çalıştırılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=cause+and+effect+paragraphs+english+reading' },
      ],
    },
    3: {
      description: `Fiziksel dalga hareketleri ve deniz terminolojisi üzerinden, birbirine benzeyen ancak teknik olarak farklılaşan kavramların kıyaslanması (Comparison & Contrast) okunur. Veri yapılarında Array ile List'in veya Ağ protokollerinde TCP ile UDP'nin farklarını tartışırken İngilizce olarak benzerlik ve farklılık bildiren bağlaçların (Whereas, However, Similarly) kullanım pratiğidir. Teknik raporlarda spesifik kavramları doğru yerde kullanma ve nüans farklarını belirterek net bir mühendislik dili oluşturma (precision in language) öğretilir. Yanlış terminoloji kullanımının proje analizlerinde (Requirements Analysis) ne kadar büyük kafa karışıklığı yaratacağı okuma üzerinden test edilir. Detaylara odaklanan analitik okuma yetisi geliştirilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/conjunctions' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=comparing+and+contrasting+in+english' },
      ],
    },
    4: {
      description: `Kemik yapısı ve iskelet sistemi üzerine yazılmış şaşırtıcı bilimsel gerçekleri içeren makalelerle bilgilendirici metin (Informative Text) formatı incelenir. İskelet sistemi metaforu, yazılım mimarilerinde Framework (çatı) veya Backend (arka uç) altyapısının önemini İngilizce olarak anlatırken sıkça kullanılır. Çarpıcı verilerin, rakamların ve istatistiksel oranların İngilizce olarak nasıl okunduğu ve sunumlarda (Pitching) ilgi çekici bir şekilde nasıl aktarıldığı öğrenilir. Uzun tıp/biyoloji cümlelerindeki ana fikri (Main Idea) ve destekleyici detayları (Supporting details) hızla tarama (Skimming) egzersizi yapılır. Sıkıcı olabilecek teknik verileri "ilgi çekici" formatta sunma dili aşılanır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=informative+speech+presentation+skills+english' },
      ],
    },
    5: {
      description: `Onyıllarca süren laboratuvar deneylerinin güncel haber formatında sunulduğu bilimsel habercilik (Science Journalism) metinleri okunur. Yavaş işleyen süreçlerin İngilizce aktarımı, uzun süren yazılım Ar-Ge projelerinin (Örneğin Kuantum Bilgisayarları veya AGI araştırmaları) gelişim aşamalarını uluslararası raporlarda sunmak için gerekli dildir. Geçmişte başlayıp hala devam eden bilimsel olayları aktarmada kullanılan Present Perfect Continuous zaman kalıpları makale içinde tespit edilir. Teknik bir deneyin aşamalarını, yöntemi (Methodology) ve sonuçlarını (Results) popüler bilim diline (non-technical audience) uygun şekilde çevirme (Paraphrasing) pratikleri yapılır. Bilimi topluma anlatma sanatının dilbilgisel karşılığıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=present+perfect+continuous+science+news' },
      ],
    },
    6: {
      description: `Atmosferik optik olayları (Güneş Köpeği - Parheli) inceleyen, görsel ve tasvire dayalı (Descriptive) bilimsel okuma parçaları ele alınır. Optik ve ışık kırılmaları hakkındaki kelime dağarcığı, görüntü işleme (Image Processing), bilgisayar grafikleri (Ray Tracing) ve oyun motoru fiziklerini araştırırken bolca karşılaşılan bir alandır. Doğa olaylarını tarif ederken kullanılan betimleyici sıfatlar ve uzamsal (spatial) prepozisyonlar, kullanıcı arayüzü (UI) veya üç boyutlu sistem tasarımlarını tartışırken kullanılır. Gözleme dayalı verileri, subjektif yorum katmadan objektif ve tanımlayıcı bir akademik İngilizce ile ifade etme becerisi aşılanır. Soyut bilimsel fenomenlerin somut dile dökülmesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/adjectives' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=descriptive+writing+in+english' },
      ],
    },
    7: {
      description: `Ağır metallerin ve cıvanın ekosisteme zararlarını işleyen, tehlike ve risk analizi (Risk Assessment) odaklı okuma metinleri analiz edilir. Siber güvenlikteki "Zafiyet (Vulnerability)" veya "Zararlı Yazılım (Malware)" analiz raporlarını İngilizce yazarken kullanılan uyarici ve önlem odaklı (preventive) akademik dil kalıpları öğretilir. Neden-sonuç zinciri içinde çevresel felaketleri anlatan yapılar, hatalı kodun (bug) sistemde yaratacağı çökmeleri (System Crash) açıklarken kullanılan "If-Then" mantığına benzer. Verilen hasarı, istatistikleri ve çözüm önerilerini (Recommendations) yapılandırılmış bir rapor İngilizcesiyle sunma vizyonu katar. Teknolojinin karanlık/tehlikeli yanlarını objektif ifade edebilme pratiğidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=writing+a+problem+solution+essay+english' },
      ],
    },
    8: {
      description: `İlk 7 haftada öğrenilen bilimsel terimlerin, zaman kalıplarının ve farklı okuma stratejilerinin (Tarama, Kıyaslama, Neden-Sonuç) teorik testidir. Bilgisayar mühendisi adayının karmaşık bir uluslararası makaleyi, kullanım kılavuzunu veya teknoloji haberini ne kadar hızlı ve doğru anladığı (Reading Comprehension) ölçülür. Teknik bağlaçların (Furthermore, Consequently, Therefore) okuma parçası içindeki mantıksal bağlantıları nasıl kurduğuna dair sentaks yeteneği test edilir. Yabancı dildeki uzun ve yorucu bilimsel paragraflardan korkmadan ana fikri çıkarabilme eşiğinin aşılıp aşılmadığına bakılır. Akademik İngilizce bariyerinin ara kontrolüdür.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `İkinci modüle geçişle birlikte, ses, dalga, fizik ve kimya ağırlıklı yeni bir akademik kelime listesinin (Glossary) anlamsal incelemesi yapılır. Elektrik devreleri, frekanslar ve bilgisayar donanım mimarisini okurken sürekli karşılaşılacak teknik kök kelimeler (Örneğin: conduct, emit, absorb, radiate) dağarcığa eklenir. İngilizce eşanlamlı (Synonyms) ve zıt anlamlı (Antonyms) kelimelerle metinlerin zenginleştirilmesi, teknik raporları sürekli aynı kelimeleri tekrar etmeden (Repetition Avoidance) yazmayı öğretir. Kelimenin isim, fiil ve sıfat hallerini (Word Formation) tanıyarak derleyici (Compiler) mantığı gibi kelime ailesini (Word Families) otomatik çözümleme hızı kazandırılır. Teknik jargona tam uyum haftasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=building+academic+vocabulary+in+english' },
      ],
    },
    10: {
      description: `Frekans birimi Hertz'in tanımını, radyo dalgalarını ve elektromanyetik spektrumu anlatan fiziksel ve donanımsal metinler okunur. Bilgisayar işlemcilerinin hızlarını (Clock Speed - GHz), monitör yenileme hızlarını (Refresh Rate) veya kablosuz ağ bant genişliklerini anlatan teknoloji dökümanlarının tam kalbidir. Miktar, frekans ve hız belirten zarfların (Adverbs of Frequency) akademik metinlerdeki diziliş kuralları ve sayısal verilerin cümle içine gömülmesi (Data Integration) pratik edilir. Teknik spesifikasyon belgelerini (Specs) yabancı müşteriye okurken veya kıyaslarken kullanılacak temel mühendislik iletişim dilini sağlar. Donanım performans metriklerinin İngilizce ifadesidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+read+numbers+and+measurements+in+english' },
      ],
    },
    11: {
      description: `Su döngüsü, hava olayları ve yağış oluşumunu anlatan, ardışık fiziksel süreçlerin (Sequential Processes) sıralandığı okuma metinleridir. Algoritmaların adım adım çalışma mantığını, akış şemalarını (Flowcharts) ve yazılım derleme aşamalarını İngilizce olarak aktarmak için (Firstly, Then, Subsequently, Finally) kullanılan bağlaçların egzersizidir. Doğal döngülerin anlatımı, sistem mimarilerinde veri boru hatlarının (Data Pipelines) veya CI/CD süreçlerinin kesintisiz akışını anlatan belgelendirme mantığıyla tamamen aynıdır. Zaman kiplerinin edilgen yapıyla (Passive Voice) birleştirilerek kullanıldığı süreç anlatım (Process Description) becerisi maksimize edilir. Olay dizilerini kodlar gibi sıraya koyma dilidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/passive' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=describing+a+process+in+english' },
      ],
    },
    12: {
      description: `Fiziksel bir dalga deneyinin kurulumunu ve uygulama adımlarını içeren, Yönerge (Instructional) ve Prosedürel metin formatı incelenir. Yazılım projelerinde "Readme.md" dosyaları, API kurulum yönergeleri (Installation Guides) veya "Nasıl Yapılır" (How-to) dokümanları hazırlamanın en temel İngilizce kalıpları öğretilir. Emir kiplerinin (Imperatives) kaba olmadan, teknik ve yönlendirici bir üslupla (e.g. "Attach the node", "Compile the code") nasıl kullanıldığı analiz edilir. Kullanıcı dostu (User-friendly) manuel yazarlığı yaparak takımın geliştirdiği ürünün dünya çapında anlaşılır olması sağlanır. Talimat verme ve izleme dilinin profesyonel provasıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/imperatives' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=giving+instructions+in+english' },
      ],
    },
    13: {
      description: `Yaşamın temel yapıtaşı olan karbon elementini, kimyasal bağlarını ve doğadaki formlarını (Elmas vs Grafit) tartışan çok yönlü bir makale okunur. Tek bir kavramın farklı biçimlere (Polymorphism) ve modüllere nasıl dönüştüğünü anlatan İngilizce analizler, nesne yönelimli programlama (OOP) yapılarını açıklarken ihtiyaç duyacağınız soyutlama dilini geliştirir. Makale içinde sınıflandırma (Classification) ve tanımlama (Definition) cümlelerinin nasıl iç içe geçtiği yapısal olarak çözümlenir. Yüksek teknoloji malzemeleri (Graphene, Carbon Nanotubes) ve donanım gelişim haberlerini takip etmek için sağlam bir kimya/fizik sözdağarcığı kazanılır. Elementlerin ve veri tiplerinin evrensel İngilizcesidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=classifying+and+categorising+in+english' },
      ],
    },
    14: {
      description: `Bilimsel yöntemi (Scientific Method), hipotez kurmayı, deney tasarımını ve veri toplamayı özetleyen felsefi/akademik final metni ile dönem sonlandırılır. Bilgisayar biliminde yazdığınız bir algoritmanın test senaryosunu (Unit Test) kurgulamak, QA (Quality Assurance) süreçlerini yönetmek tamamen bu bilimsel araştırma metotlarının İngilizce karşılığıdır. Problem tespiti (Hypothesis), kodlama (Experiment), test etme (Observation) ve sürüm yayını (Conclusion) süreçlerini akademik bir makalede (Paper) raporlama vizyonu aşılanır. Araştırma ve Geliştirme (R&D) departmanlarında uluslararası ekiplerle İngilizce proje yazma ve okuma disiplini kazanılarak mesleki dil eğitimi sağlam bir temele oturtulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/writing' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=the+scientific+method+english+vocabulary+and+reading' },
      ],
    },
  },
  'BMB206 Olasılık ve İstatistik': {
    1: {
      description: `Ham verilerin (Raw Data) toplanması, anlamlı bilgilere dönüştürülmesi ve bilgisayar biliminde verinin neden en değerli maden olduğu felsefesiyle giriş yapılır. İstatistik, günümüzün en popüler alanları olan Veri Bilimi (Data Science) ve Makine Öğrenmesinin (Machine Learning) üzerine inşa edildiği yegane matematiksel temeldir. Yazılımların ve sunucuların ürettiği milyonlarca satırlık log dosyalarının sadece istatistiksel yöntemlerle filtrelenip anlaşılabileceği kavratılır. Örneklem (Sample) ve Kitle (Population) kavramlarıyla, sınırlı donanım kaynaklarıyla evrensel tahminler yapabilme vizyonu sunulur. Algoritmaların kesin (deterministik) değil, ihtimale dayalı (stochastic) dünyasına geçiştir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatisti%C4%9Fe+giri%C5%9F+temel+kavramlar' },
      ],
    },
    2: {
      description: `Elde edilen dağınık verilerin gruplandırılması, frekans tabloları ve histogram, pasta grafiği, kutu grafiği (Boxplot) gibi görsel araçlarla sunulması incelenir. Python'daki Pandas ve Matplotlib veya Front-End'deki grafik kütüphaneleri (Chart.js) ile bir uygulamanın Admin paneline (Dashboard) veri basarken kullanılan analitik görselleştirme kurallarıdır. Ham verinin içindeki anormallikleri (Outliers) grafiklere bakarak tespit etme ve veriyi algoritmaya sokmadan önce temizleme (Data Preprocessing) disiplini aşılanır. İyi bir mühendisin kod yazmak kadar, veriyi yönetime veya müşteriye "okunabilir" sunma (Data Storytelling) görevini de kavraması hedeflenir. Gözle görünen istatistiğin algoritmik temelleridir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-visualization-in-statistics/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatistik+veri+sunumu+grafikler+histogram' },
      ],
    },
    3: {
      description: `Aritmetik Ortalama, Medyan, Mod gibi verinin merkezini bulan ölçüler ile Varyans, Standart Sapma gibi verinin değişkenliğini hesaplayan formüller öğretilir. Bir web sunucusunun yanıt sürelerinin (Response Time) ortalaması tek başına yanıltıcı olabilir; standart sapma yüksekse kullanıcıların yarısı çok yavaş hizmet alıyor demektir. Algoritmaların hata marjlarını ve sensörlerden gelen gürültülü (noisy) sinyallerin kararlılığını ölçmek için varyans hesaplamaları doğrudan kodlanır. Makine öğrenmesi verilerini ölçeklendirirken (Standardization/Normalization) arka planda tam olarak bu formüller çalıştırılır. Sistemin ortalama ve aşırı uç (extreme) davranışlarını analitik olarak belirleme gücü verir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/measures_of_central_tendency.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=merkezi+e%C4%9Filim+ve+da%C4%9F%C4%B1l%C4%B1m+%C3%B6l%C3%A7%C3%BCleri+varyans+standart+sapma' },
      ],
    },
    4: {
      description: `Kesinlikten uzak, şansa veya bilinmeyen parametrelere bağlı olayların matematiksel olarak ölçümlenmesi olan olasılık kuralları, Bayes teoremi ve koşullu olasılık incelenir. E-postalardaki Spam filtreleri (Naive Bayes Classifier) tam olarak bu koşullu olasılık teoremiyle "Eğer bu kelime varsa spam olma olasılığı %95'tir" diyerek çalışır. Rastgele sayılar üreten kriptografik sistemlerde veya ağ trafiğindeki paket çakışmalarında ihtimalleri minimize etmenin altyapısı atılır. Kodunuzun her zaman aynı girdiyle aynı çıktıyı vermediği, doğanın ve verinin kaotik yapısını algoritmalarla dizginleme sanatıdır. Yapay zeka tahmin (Prediction) modellerinin çekirdek felsefesidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/probability_introduction.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=olas%C4%B1l%C4%B1k+teorisine+giri%C5%9F+ve+bayes+teoremi' },
      ],
    },
    5: {
      description: `Bir deneyin sonucuna sayısal değerler atayan fonksiyonlar olan rastlantı değişkenleri (Random Variables) ve bunların Beklenen Değer (Expected Value) hesaplamaları öğrenilir. İki farklı arama algoritmasının (Searching Algorithms) rastgele veri setleri üzerinde ortalama ne kadar sürede çalışacağını (Average Case Time Complexity) bulmak tamamen beklenen değer hesabıdır. Kumarhane sistemlerinin veya oyun içi "Ganimet Kutusu" (Loot Box) mekaniklerinin yazılımında, oyun şirketinin uzun vadede kesin kar etmesi bu denklemlerle algoritmalaştırılır. Belirsizlik içeren sistemlerin "ortalama" ne üreteceğini önceden tahmin edebilme (Forecasting) vizyonu kazandırır. Şansın, bilgisayar bilimiyle matematiğe dökülmüş halidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/random-variables/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rastlant%C4%B1+de%C4%9Fi%C5%9Fkenleri+ve+beklenen+de%C4%9Fer' },
      ],
    },
    6: {
      description: `Sonlu ve sayılabilir ihtimalleri modelleyen Binom, Poisson ve Geometrik gibi klasik kesikli (discrete) olasılık dağılımları işlenir. Bir sunucuya belirli bir saatte "N" adet siber saldırı (DDoS) gelme ihtimalini veya müşteri giriş sıklıklarını modellemek Poisson dağılımı ile mükemmel uyum sağlar. Kalite kontrol (QA) süreçlerinde üretilen çiplerin (CPU) % kaçının bozuk çıkacağını hesaplayarak üretim bandı verimliliği (Binom) denetlenir. Yazılımların test senaryolarını kurgularken hataların rastgele değil, belirli bir dağılıma uygun geldiğini fark etmeyi öğretir. Ayrık olayların bilgisayarda modellenmesi ve öngörülmesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/discrete_probability_distributions.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kesikli+olas%C4%B1l%C4%B1k+da%C4%9F%C4%B1l%C4%B1mlar%C4%B1+binom+poisson' },
      ],
    },
    7: {
      description: `Sürekli değerler alan, integral ile hesaplanan Normal (Çan Eğrisi), Üstel (Exponential) ve Üniform dağılımların yapısı öğrenilir. Doğadaki ve yapay zeka eğitim setlerindeki verilerin %90'ı Normal Dağılım (Gauss) gösterir; bu yüzden yapay zeka modelleri tasarlanırken bu dağılım eğrisi adeta bir anayasa gibi kabul edilir. Elektronik devre bileşenlerinin veya sunucu sabit disklerinin (SSD) arızalanma süreleri (MTBF) Üstel dağılım modelleriyle yazılıma dökülerek bakım zamanları (Predictive Maintenance) hesaplanır. Bilgisayar grafiği (Ray Tracing) ve fizik motorlarında rastgele dağılımları sürekli hale getirmek için Üniform dağılımlar koda yansıtılır. Doğanın sürekliliğinin dijital evrene aktarımıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/continuous_probability_distributions.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=s%C3%BCrekli+olas%C4%B1l%C4%B1k+da%C4%9F%C4%B1l%C4%B1mlar%C4%B1+normal+da%C4%9F%C4%B1l%C4%B1m' },
      ],
    },
    8: {
      description: `İstatistiğin temel parametreleri, olasılık hesaplamaları ve kesikli/sürekli veri dağılım modellerinin teorik olarak test edildiği dönem arası sınavıdır. Öğrencinin "her problemin kesin bir cevabı vardır" algısından çıkıp, "sonuç %95 ihtimalle şöyledir" şeklindeki stokastik mühendislik düşüncesine geçişi ölçülür. Bir veri setinin hangi dağılım modeline uyduğunu teşhis etme yeteneği, kodlanacak tahminsel algoritmaların doğruluğu için kritik olduğundan sıkıca değerlendirilir. Hipotez testleri ve tahmin analizi gibi ileri düzey veri bilimi (Data Science) konularına geçmeden önceki akademik onay mekanizmasıdır. Analitik zekanın istatistiksel esnekliği kanıtlanır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Devasa kitle verilerinden (Örn: Tüm Twitter kullanıcıları) alınan küçük örneklem setlerinin, kitleyi ne kadar doğru temsil ettiğini açıklayan Merkezi Limit Teoremi ve örneklem dağılımları incelenir. Büyük veri (Big Data) ortamında milyarlarca satır veriyi işlemek işlemciyi yoracağından, algoritmaların sadece rasgele seçilen %1'lik bir örneklem üzerinde çalışarak %99 doğru sonuç vermesini sağlayan teoridir. Bir uygulamanın yeni arayüzünü (A/B Testi) sadece küçük bir kullanıcı grubuna açarak, genel kitle hakkında karar verme sürecinin matematiksel haklılığıdır. Örneklem varyansının ve ortalamasının, yazılım optimizasyonunda maliyeti nasıl düşürdüğü pratik olarak öğretilir. Makro veriyi mikro ölçekte çözme sanatıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/sampling_distribution.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%B6rneklem+da%C4%9F%C4%B1l%C4%B1mlar%C4%B1+ve+merkezi+limit+teoremi' },
      ],
    },
    10: {
      description: `Örneklemden elde edilen sonuçlardan kitle ortalamasına dair "Nokta Tahmini" yapmak ve bu tahmine bir Güven Aralığı (Confidence Interval) biçmek öğrenilir. Bir makine öğrenmesi algoritmasının başarı oranını %85 olarak bulduğunuzda, "Bu oran %95 güven aralığında ±%2 değişebilir" diyebilmek, profesyonel bir veri mühendisinin dilidir. E-ticaret sitelerinde satılan bir ürünün gerçek müşteri memnuniyetini az sayıda yoruma bakarak tahmin eden algoritmalar bu istatistiksel sınırları koda döker. Algoritmanın bulduğu sonuca ne kadar güvenileceğini (Accuracy/Precision) teknik yöneticilere sayısal olarak ispatlama imkanı sunar. Tahmin yürütmenin, bilimsel kesinlikle çerçevelenmesidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/confidence_intervals.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatistik+tahmin+ve+g%C3%BCven+aral%C4%B1%C4%9F%C4%B1+hesaplama' },
      ],
    },
    11: {
      description: `Bir iddia veya varsayımın (Null & Alternative Hypothesis), eldeki veri ışığında matematiksel olarak (p-değeri, Z ve T testleri) reddedilip reddedilemeyeceği test edilir. Yazılım sektöründeki A/B testlerinin kalbi budur; "Yeni eklediğimiz buton satışları gerçekten artırdı mı, yoksa artış sadece tesadüf mü?" sorusu tamamen hipotez testleriyle algoritmaya çözdürülür. Sistem mimarisinde yaptığınız bir değişikliğin (Örneğin yeni bir veritabanı indekslemesi) performansı anlamlı derecede (statistically significant) etkileyip etkilemediğini kanıtlarsınız. Varsayımlarla değil, tamamen kanıtlara (data-driven) dayalı mühendislik kararları alma disiplini aşılar. Fikirlerin, istatistiksel mahkemede yargılanmasıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/hypothesis_testing.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatistik+hipotez+testleri+z+ve+t+testi' },
      ],
    },
    12: {
      description: `İkiden fazla farklı grubun ortalamaları arasında anlamlı bir fark olup olmadığını aynı anda test etmeye yarayan ANOVA (Analysis of Variance) tekniği öğrenilir. Üç farklı bulut (Cloud) sunucu sağlayıcısının (AWS, Azure, Google) tepki sürelerini aynı anda analiz edip "Aralarında performans farkı var mı?" kararını vermek için bu yöntem koda dökülür. Uygulamanızın farklı işletim sistemlerindeki (Windows, macOS, Linux) çökme oranlarının birbirine benzer mi yoksa birinin hatalı mı olduğunu tespit eder. Çoklu değişkenlerin algoritmalar üzerindeki karmaşık etkilerini tek bir analizle çözme (F-testi) yetkinliği sağlar. Kıyaslama ve test süreçlerinin en gelişmiş analitik boyutudur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/analysis-of-variance-anova/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatistik+varyans+analizi+anova' },
      ],
    },
    13: {
      description: `İki farklı veri seti veya değişken arasındaki ilişkinin yönünü (pozitif/negatif) ve şiddetini (Korelasyon Katsayısı, r) tespit etme hesaplamaları işlenir. Uygulamadaki "Kullanıcının sayfada kalma süresi" ile "Satın alma ihtimali" arasındaki bağlantıyı bulmak için Veri Madenciliği (Data Mining) algoritmaları bu korelasyonları çıkarır. Sensörlerden gelen sıcaklık arttıkça işlemci hızının ne kadar düştüğünü matematiksel olarak ispatlar ve sistem darboğazlarını (bottleneck) gösterir. Korelasyonun nedensellik (causation) olmadığı bilinciyle, makine öğrenmesinde gereksiz özellikleri (Feature Selection) modelden çıkarma vizyonu katar. Verilerin birbirleriyle nasıl dans ettiğini ölçme sanatıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/correlation.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=istatistik+korelasyon+analizi+ve+katsay%C4%B1s%C4%B1' },
      ],
    },
    14: {
      description: `Aralarında korelasyon bulunan değişkenleri kullanarak, bilinen üzerinden bilinmeyeni tahmin etmeye yarayan (En Küçük Kareler Yöntemi) doğrusal denklemler (Y = aX + b) kurulur. Makine öğrenmesi ve yapay zekanın 101'i kabul edilen "Linear Regression" modeli, tamamen bu son haftanın formülleri üzerinden çalışarak geleceği tahmin eden yapay zeka botlarının temelini oluşturur. Şirketin geçmiş trafik verilerine bakarak, Gelecek Cuma günü sunucuya kaç kişinin gireceğini önceden tahmin eden (Predictive Modeling) ve kapasiteyi artıran akıllı sistemler yazarsınız. İstatistiğin, geçmişi analiz etmekten çıkıp geleceği tahmin eden kodlara dönüşmesiyle mühendislik rotası zirveyle tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/linear_regression.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=basit+do%C4%9Frusal+regresyon+analizi+istatistik' },
      ],
    },
  },
  'BMB214 Programlama Dilleri Prensipleri': {
    1: {
      description: `Bilgisayarlara hükmetmek için kullanılan yapay dillerin tasarım ilkeleri, yüksek seviyeli/düşük seviyeli dil kavramları ve temel syntax (söz dizimi) kuralları öğrenilir. Sadece kod yazmayı değil, "Neden bu kadar çok programlama dili var?" sorusunu sorarak dillerin arkasındaki mimari felsefeleri ve ticaret mantıklarını analiz etmeye başlarsınız. Bir dilin okunabilirliğinin (readability) ve yazılabilirliğinin proje geliştirme ve bakım maliyetlerini (maintenance cost) nasıl doğrudan etkilediği mühendislik perspektifiyle tartışılır. Makine dili (0-1) ile insan mantığı arasındaki çevirmenlerin genel kavramsal çerçevesi çizilir. Yeni bir dil öğrenmekten ziyade, tüm dilleri öğrenebilme altyapısı atılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/compiler_design/compiler_design_introduction.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=programlama+dilleri+prensipleri+ve+kavramlar%C4%B1' },
      ],
    },
    2: {
      description: `Fortran, LISP, C, Java gibi mihenk taşı dillerin tarihsel çıkış nedenleri, evrimleri ve birbirlerini nasıl etkileyerek modern dillere (Örn: Rust, Go) dönüştükleri incelenir. Tarihsel evrimi bilmek, günümüzde donanım darboğazlarını (Örn: Çok çekirdekli mimariler) aşmak için neden sürekli yeni dillere ihtiyaç duyulduğunu algılamayı sağlar. Nesne Yönelimli (OOP) dillerin neden 90'larda patladığı ve günümüzde neden Fonksiyonel dillerin tekrar popülerleştiği sektörel ihtiyaçlar (Big Data) üzerinden tartışılır. Kodların yazıldığı dönemin teknolojik limitlerini (RAM/CPU) anlayarak empati yapma yeteneği gelişir. Dil seçimi yaparken geçmişin deneyimlerini bir mimar gibi kullanma vizyonudur.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/History_of_programming_languages' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=programlama+dillerinin+tarih%C3%A7esi+ve+geli%C5%9Fimi' },
      ],
    },
    3: {
      description: `Bir programlama dilinin dilbilgisini (Grammar) tanımlayan BNF (Backus-Naur Form) notasyonu ve Derleyici (Compiler) ile Yorumlayıcı (Interpreter) çalışma mantıkları öğrenilir. Yazdığınız kodun Lexical Analysis (Sözcük Analizi) ve Syntax Analysis (Söz Dizimi) aşamalarından geçerek nasıl makine koduna (Assembly) çevrildiğinin arka uç mühendisliği (Compiler Design) incelenir. Derleme sırasında (Compile-time) oluşan hatalar ile çalışma sırasında (Run-time) oluşan hatalar arasındaki devasa performans farkları bu mimarilerle kanıtlanır. İleride kendi Domain-Specific Language (DSL) betiklerinizi yazabilmeniz için dil tasarımı kurallarını aşılarsınız. Kodunuzun makinede nasıl hayat bulduğunu gösteren teorik şölenidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-to-syntax-analysis/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=derleyici+tasar%C4%B1m%C4%B1+lexical+ve+syntax+analizi+bnf' },
      ],
    },
    4: {
      description: `Dillerin desteklediği ilkel (Primitive) ve kullanıcı tanımlı veri tipleri, pointer mantıkları ve type-checking (tip kontrolü) felsefeleri işlenir. Statik tipli dillerin (C++, Java) neden daha güvenli ve hızlı olduğu, dinamik tipli dillerin (Python, JavaScript) ise neden geliştirici dostu ama performansa aç olduğu kıyaslanır. Veri tiplerinin bellekte (Heap/Stack) kapladıkları alanlar (byte padding) ve farklı dillerdeki bellek yönetim modelleri analiz edilir. Yanlış tip dönüşümlerinin (Type Coercion) Mars'a gönderilen roket yazılımlarında bile nasıl milyar dolarlık çökmelere yol açtığı vaka analizleriyle incelenir. Sistemin en küçük bilgi parçacıklarına uygulanan sıkı denetim mekanizmalarıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/compiler_design/compiler_design_type_checking.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=programlama+dilleri+veri+tipleri+statik+dinamik' },
      ],
    },
    5: {
      description: `Değişkenlerin, metotların veya bellek alanlarının hangi anda bağlandığını anlatan Binding (Compile/Load/Run time) ile değişken geçerlilik alanları olan Statik ve Dinamik Kapsam (Scope) öğrenilir. \`Global\`, \`Local\` ve Block-Level kapsamların derleyici tarafından nasıl izole edildiği, iç içe geçmiş fonksiyonlarda isim çakışmalarının algoritmik olarak nasıl önlendiği tartışılır. Dinamik bağlamanın (Late Binding) Polimorfizm gibi OOP özelliklerine nasıl güç verdiği, ancak performansta ne gibi darboğazlar yarattığı hesaplanır. Bellek sızıntılarını (Memory Leak) önlemek için dillerin (örneğin Rust'ın Ownership modeli) değişken ömürlerini (Lifetime) nasıl kontrol ettiği incelenir. Kod içindeki kimliklerin haritalanma sanatı kavranır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/static-and-dynamic-scoping/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=programlama+dilleri+binding+ve+scope+kapsam' },
      ],
    },
    6: {
      description: `"Goto" komutunun yarattığı Spagetti kod kaosundan kurtulup, kodun ardışık, seçmeli (if-else) ve tekrarlı (döngüler) bloklara ayrılması felsefesi olan Yapısal (Structured) programlama incelenir. Edsger Dijkstra'nın "GOTO Considered Harmful" makalesine atıfla, kontrol akışının (Control Flow) lineer ve tahmin edilebilir olmasının yazılım mimarisindeki değeri tartışılır. C, Pascal gibi dillerde modüler ve okunabilir yapıların, on binlerce satırlık sistem yazılımlarında bakım maliyetlerini nasıl dramatik ölçüde düşürdüğü kanıtlanır. Algoritmaların doğruluğunu kanıtlamanın (Algorithm Proving), sadece yapısal kod blokları kullanıldığında mümkün olduğu teorik olarak gösterilir. Modern yazılım disiplininin milat noktasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Structured_programming' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yap%C4%B1sal+programlama+nedir+structured+programming' },
      ],
    },
    7: {
      description: `Kodun, Fonksiyonlar, Prosedürler ve Makrolar gibi alt programlara (Subprograms) ayrılarak çağrılma mekanizmaları ve çağrı yığıtı (Call Stack) dinamikleri öğrenilir. Aktivasyon kayıtları (Activation Records) sayesinde, bir fonksiyonun kendini çağırmasının (Recursion) bellekte nasıl izole çerçeveler (Stack Frames) açarak çalıştığı donanım seviyesinde incelenir. Alt programlar sayesinde kodu tekrar tekrar yazmaktan kurtulup, modüler (ayrı modüllerde derlenebilen) sistemler kurmanın ekip çalışmasındaki hayati rolü tartışılır. Fonksiyon imzalarının (Signatures) diller tarafından nasıl kontrol edildiği ve arayüz sözleşmelerinin (Interface contracts) temelleri atılır. Kompleksitenin küçük parçalarla fethedilmesidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/compiler_design/compiler_design_run_time_environment.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=alt+programlar+fonksiyon+%C3%A7a%C4%9Fr%C4%B1lar%C4%B1+ve+bellek+y%C3%B6netimi' },
      ],
    },
    8: {
      description: `Alt programlara veri aktarırken kullanılan Pass-by-Value (Değer ile), Pass-by-Reference (Referans ile), Pass-by-Name gibi birbirinden tamamen farklı bellek yönetimi sonuçları doğuran stratejiler analiz edilir. Devasa bir veri dizisini fonksiyona sadece kopyasını vererek mi (Performans düşüşü), yoksa doğrudan RAM adresini göstererek mi (Güvenlik riski) göndermenin daha iyi olacağı mühendislik ödünleşimleriyle (Trade-off) tartışılır. C++'daki pointerlar ve referanslar ile Java/Python'daki gizli referans geçişleri arasındaki farklar incelenerek dillerin tasarım vizyonları karşılaştırılır. Yan etkilerin (Side Effects) hangi aktarım yönteminde kodunuzu sinsi hatalara (Bugs) sürükleyeceği gösterilir. Yazılımın iç organları arasındaki güvenli veri taşıma protokolleridir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/parameter-passing-techniques-in-c-cpp/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=parametre+aktar%C4%B1m+y%C3%B6ntemleri+pass+by+value+reference' },
      ],
    },
    9: {
      description: `Sınıflar, Kalıtım, Çok Biçimlilik ve Dinamik Bağlama (Dynamic Dispatch) gibi nesne yönelimli dillerin (Java, C#, C++) mimari tasarım ilkeleri karşılaştırmalı olarak işlenir. Çoklu kalıtımın (Multiple Inheritance) C++'da neden "Ölüm Elması"na (Diamond Problem) yol açtığı ve Java'nın bunu \`Interface\` ile nasıl çözdüğü dil tasarımcılarının bakış açısıyla incelenir. VTable (Virtual Table) yapısı sayesinde, çalışma zamanında (Runtime) hangi fonksiyonun çalıştırılacağına nasıl karar verildiğinin arka plandaki algoritması çözümlenir. Nesne modellerinin bellek yerleşimleri (Memory Layout) üzerinden OOP'nin yarattığı ek yük (Overhead) hesaplanır. Soyutlamanın (Abstraction) diller tarafından nasıl desteklendiğinin anatomisidir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nesne+y%C3%B6nelimli+programlama+prensipleri+oop' },
      ],
    },
    10: {
      description: `Programın çökmesini engellemek için kullanılan Exception Handling (Hata Yakalama - try/catch) mimarilerinin farklı dillerdeki implementasyonları ve felsefeleri tartışılır. Hataları fonksiyonların dönüş değerleriyle (Return Codes - C dili stili) yönetmek ile, istisnaları fırlatarak (Throw Exceptions - Java/C# stili) yönetmek arasındaki yapısal farklar ve performans maliyetleri kıyaslanır. Kontrolsüz fırlatılan bir hatanın çağrı yığıtını (Stack Unwinding) nasıl çözdüğü ve kaynakları (Dosya/Bellek sızıntıları) temizleyerek (finally blokları) güvenli çıkış sağladığı incelenir. "Fail-fast" (Hızlı çök) prensibiyle, hatanın kaynağında susturulmadan sisteme bildirilmesinin önemi aşılanır. Uygulamayı kırılmaz hale getiren mimari yastıklardır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Exception_handling' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=exception+handling+hata+yakalama+programlama' },
      ],
    },
    11: {
      description: `Çok çekirdekli (Multi-core) işlemcilerin gücünü kullanabilmek için İş Parçacıkları (Threads), Mutex, Semaphore ve Monitör gibi Eşzamanlılık (Concurrency) kontrol araçları öğrenilir. Aynı bellek alanına aynı anda yazmaya çalışan iki thread'in yarattığı "Race Condition" (Yarış Durumu) ve sistemi kilitleyen "Deadlock" (Ölümcül Kilitlenme) felaketlerinin algoritmik olarak nasıl çözüleceği işlenir. Java'daki iş parçacıkları ile Go dilindeki hafif "Goroutines" ve "Channels" mimarileri kıyaslanarak modern dillerin eşzamanlılığa getirdiği inovasyonlar tartışılır. Dağıtık sistemlerin (Cloud/Microservices) ve yüksek trafikli sunucuların asenkron çalışabilmesinin matematiksel garantisi sağlanır. Zamana ve kaynaklara aynı anda hükmetme sanatıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/java/java_multithreading.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=multithreading+e%C5%9Fzamanl%C4%B1l%C4%B1k+ve+deadlock+programlama' },
      ],
    },
    12: {
      description: `Kodu makine diline derlemek yerine, satır satır anında çalıştıran Yorumlayıcı (Interpreter) destekli dillerin (Scripting Languages) çalışma mekanizmaları ve Python'ın yükselişi analiz edilir. Bytecode kavramı ve Sanal Makineler (Virtual Machines) üzerinden, Python veya JavaScript'in farklı işletim sistemlerinde (Cross-platform) nasıl tek kodla çalışabildiği tartışılır. Geliştirme hızının (Developer Time), işlemci çalışma hızından (Execution Time) daha değerli olduğu Veri Bilimi ve Yapay Zeka sektörlerinde neden yorumlamalı dillerin tekel (monopoly) olduğu mühendislik maliyetleriyle açıklanır. Dinamik yazım (Duck Typing) esnekliğinin sunduğu kolaylıklar ve büyük projelerdeki (Refactoring) dezavantajları tecrübe edilir. Çevik (Agile) geliştirmenin dilsel aracıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Interpreter_(computing)' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=derleyici+ve+yorumlay%C4%B1c%C4%B1+fark%C4%B1+interpreter+compiler' },
      ],
    },
    13: {
      description: `Değişkenlerin değiştirilemediği (Immutability), yan etkilerin (Side Effects) olmadığı ve fonksiyonların birinci sınıf vatandaş (First-Class Citizens) kabul edildiği Haskell, Lisp gibi Fonksiyonel dillerin saf matematiksel felsefesi öğrenilir. Neden modern JavaScript, C# ve Java'nın bile "Lambda" ifadeleri ve "Map/Reduce/Filter" fonksiyonlarıyla yavaş yavaş bu paradigmaya kaydığı büyük veri (Big Data) işlemedeki paralel çalışma kolaylığı üzerinden kanıtlanır. Durumun (State) tutulmadığı mimarilerde eşzamanlılığın (Concurrency) kilitlenme (Deadlock) olmadan ne kadar muazzam ve hatasız çalıştığı görülür. Verinin nesneler içinde saklanması yerine, fonksiyonlar tünelinden geçerek işlendiği bambaşka bir yazılım evrenine (Paradigm Shift) geçiş yapılır. Kodlamanın matematiksel saflığıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/functional-programming-paradigm/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fonksiyonel+programlama+nedir+functional+paradigm' },
      ],
    },
    14: {
      description: `Bilgisayara "Nasıl (How)" yapılacağını adım adım tarif etmek (Imperative) yerine, sadece "Ne (What)" istenildiğini mantıksal gerçekler ve kurallarla beyan eden Prolog gibi Mantıksal (Declarative) diller incelenir. Yapay zekanın (AI) ilk yıllarındaki uzman sistemler (Expert Systems) ve çıkarım motorlarının (Inference Engine) arka planda veritabanındaki kuralları eşleştirerek (Pattern Matching ve Backtracking) nasıl sonuç ürettiği gösterilir. SQL sorgularının da aslında birer mantıksal/beyansal dil olduğu gerçeğiyle yüzleşerek veritabanı motorlarının iç çalışma felsefesi daha iyi kavranır. Dillerin sadece komut veren birer araç değil, düşünce sistematiğini şekillendiren felsefi aygıtlar olduğu vizyonuyla dönem ihtişamlı bir şekilde son bulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Logic_programming' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mant%C4%B1ksal+programlama+ve+prolog' },
      ],
    },
  },
  'BMB212 Veri Yapıları': {
    1: {
      description: `Bilgisayar biliminin kalbi olan verilerin bellekte (RAM) nasıl organize edileceği ve Algoritma Karmaşıklığı (Big O Notasyonu) ile performansın nasıl ölçüleceğine giriş yapılır. Kötü seçilmiş bir veri yapısının, dünyanın en iyi işlemcisini bile devasa veri kümelerinde (Big Data) nasıl kilitleyeceği matematiksel analizlerle kanıtlanır. Zaman (Time) ve Alan (Space) karmaşıklığı arasındaki mühendislik ödünleşimi (Trade-off) tartışılarak, hızlı çalışan kodun çok bellek tüketebileceği vizyonu kazandırılır. Sadece kodun "çalışmasına" değil, "nasıl daha verimli çalışacağına" odaklanarak gerçek bir bilgisayar mühendisi gibi düşünmeye başlarsınız. Veriyi rastgele yığmaktan, mimari bir dizayna geçişin ilk adımıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-structures/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1na+giri%C5%9F+ve+big+o+notasyonu' },
      ],
    },
    2: {
      description: `Diziler (Arrays) ve Kayıt (Struct/Record) gibi bellekte statik ve ardışık (Contiguous) yer kaplayan temel yapı taşlarının bellek haritalaması incelenir. İndeks üzerinden verilere $O(1)$ sabit sürede ulaşmanın muazzam hızı ile, dizinin boyutunu büyütmeye çalışırken yaşanan maliyetli (bellek taşıma) sorunlar kıyaslanır. İleride veritabanı tablolarının satırlarını veya piksellerden oluşan görüntü matrislerini (Image Processing) işlerken bu statik yapıların özelliklerine ve dezavantajlarına doğrudan ihtiyaç duyacaksınız. İşletim sisteminin belleği nasıl tahsis ettiğini (Memory Allocation) ve veri tiplerinin byte boyutlarını hesaba katma disiplini aşılar. Sistem belleğinin geometrisini anlama sürecidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/array_data_structure.htm' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1+diziler+arrays' },
      ],
    },
    3: {
      description: `Karmaşık verileri anlamlı bir düzene sokmak için kullanılan temel Sıralama algoritmaları olan Bubble Sort, Selection Sort ve Insertion Sort işlenir. Bu algoritmaların iç içe geçmiş döngüleri nedeniyle (genellikle $O(N^2)$ karmaşıklığı) milyonlarca e-ticaret ürünü üzerinde çalıştırıldığında sunucuyu neden kilitleyeceği analiz edilir. Sadece algoritmaların kodlanması değil, hangi senaryolarda (Örneğin neredeyse sıralı bir veride Insertion Sort'un çok hızlı olması) hangisinin seçileceği mühendislik vizyonuyla tartışılır. Algoritmanın bellek üzerinde verileri nasıl takas ettiği (Swap) ve "Stabilite" kavramının (aynı değerdeki verilerin sırasının korunması) önemi öğretilir. Algoritmaların verimsizlikleri üzerinden doğruyu bulma sanatıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=s%C4%B1ralama+algoritmalar%C4%B1+bubble+selection+insertion' },
      ],
    },
    4: {
      description: `Problemi daha küçük parçalara bölerek çözen "Böl ve Yönet" (Divide and Conquer) felsefesine dayalı, devasa hız sağlayan Merge Sort ve Quick Sort gibi ileri seviye algoritmalar öğrenilir. Özellikle $O(N \\log N)$ zaman karmaşıklığına ulaşan bu yapıların, modern veritabanlarında ve işletim sistemlerinde standart sıralama araçları (Built-in Sort) olarak neden kullanıldığı kanıtlanır. Recursive (Özyinelemeli) fonksiyon çağrılarının bu algoritmaları ne kadar şık ve kısa hale getirdiği, ancak yanlış kullanımında "Stack Overflow" hatalarına yol açabileceği tecrübe edilir. Pivot seçimi ve bellek kısıtlamaları bağlamında Quick Sort'un teorik zaafları (En kötü durum $O(N^2)$) analiz edilerek defansif kodlama öğretilir. Büyük veriye hükmetmenin rasyonel yöntemidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=merge+sort+ve+quick+sort+algoritmalar%C4%B1' },
      ],
    },
    5: {
      description: `Veri yığınları içerisinde istenen bilgiye en kısa sürede ulaşmayı sağlayan Doğrusal Arama (Linear Search) ve İkili Arama (Binary Search) mantıkları incelenir. Telefon rehberi mantığıyla çalışan İkili Arama algoritmasının, verinin "sıralı" olması şartıyla arama hızını $O(N)$'den $O(\\log N)$'e (milyonlarca kayıtta sadece 20 işlem) düşüren o mucizevi performansı ispatlanır. Veritabanı yönetim sistemlerindeki (SQL) indeksleme (Indexing) mantığının ve arama motorlarının temel sorgu felsefesinin kalbi bu konudur. Veriyi saklamak kadar, ona erişme maliyetinin de kritik olduğu büyük ölçekli sistem tasarımları için vizyon sunar. Optimizasyonun yazılımdaki en saf ve en güçlü haliyle tanışılır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/searching-algorithms/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=binary+search+ikili+arama+algoritmas%C4%B1' },
      ],
    },
    6: {
      description: `Son Giren İlk Çıkar (LIFO - Last In First Out) prensibiyle çalışan ve hafızadaki fonksiyon çağrılarını yöneten Yığın (Stack) veri yapısı işlenir. Tarayıcıların "Geri" butonunun, metin editörlerindeki "Ctrl+Z" (Geri Al) işlevinin ve derleyicilerin parantez kontrolü eşleştirmelerinin (Syntax parsing) arkasında çalışan yegane mekanizmadır. Rekürsif (kendi kendini çağıran) fonksiyonların bilgisayarın derinliklerindeki donanımsal çağrı yığıtında (Call Stack) nasıl dizildiği ve programı nasıl çökertebileceği gösterilir. Dinamik veya dizi tabanlı olarak tasarlanabilen bu yapı sayesinde, program akışını ve geçmişi hatasız olarak izleme (Backtracking) yeteneği geliştirilir. İşlemleri tersine çevirmenin mantıksal hafızasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1+y%C4%B1%C4%9F%C4%B1n+stack+lifo' },
      ],
    },
    7: {
      description: `İlk Giren İlk Çıkar (FIFO - First In First Out) mantığıyla çalışan Kuyruk (Queue) ile, bellekte dağınık duran verileri adresleyici (Pointer) ile birbirine bağlayan Tek Bağlı Listelere (Singly Linked List) giriş yapılır. Yazıcılardaki çıktı sırası, işletim sistemlerinin işlemciyi (CPU) programlara paylaştırma algoritması (Task Scheduling) tamamen Kuyruk yapısına dayanır. Dizilerin aksine, araya eleman ekleme veya çıkarma maliyetinin $O(1)$ süresine düştüğü bağlı listelerin dinamik bellek avantajları keşfedilir. Pointer (İşaretçi) mantığı kullanılarak RAM üzerinde gerçek zamanlı ve elastik veri düğümleri (Nodes) inşa etme becerisi kazanılır. Olayları adil sıraya koymanın ve dinamik zincirler örmenin temelidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/queue-data-structure/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kuyruk+veri+yap%C4%B1s%C4%B1+queue+fifo' },
      ],
    },
    8: {
      description: `Algoritma karmaşıklığı analizleri, sıralama, arama, Yığın (Stack), Kuyruk (Queue) ve bellekteki statik yerleşim mantıklarının kodlama ve analitik düzeyde test edildiği ara değerlendirmedir. Öğrencinin "her problemin bir veri yapısı vardır" felsefesini anlayıp, kendisine verilen özel bir senaryo için en uygun maliyetli (Time/Space) mimariyi seçip seçemediği sınanır. Pointer (işaretçi) mantığının ve bellek sızıntılarının (Memory Leak) teorik düzeyde ne kadar anlaşıldığı kontrol edilir. Ağaçlar gibi karmaşık ve dallanan yapılara geçmeden önce doğrusal (Linear) veri yapılarının tamamen sindirilmiş olması gereken sağlamlık testidir. Algoritmik performans zekasının onaylandığı noktadır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `(Ara sınav sonrası uygulamalı devam) Tek bağlı listeler üzerinde arama, sona/başa/araya eleman ekleme ve listeden eleman silme operasyonları kod düzeyinde detaylandırılır. Sadece ileri yönde gidilebilen bu yapıda, bir elemanı silerken "kopan zinciri" kaybetmeden önceki ve sonraki düğümleri bağlamak (Pointer Manipulation) ciddi bir analitik dikkat gerektirir. Spotify gibi uygulamalardaki "Sonraki Şarkı" mantığının ilkel bir modellemesi yapılarak dinamik belleğin çalışma zamanında (Runtime) nasıl büyüyüp küçüldüğü pratik edilir. Dizilerin hantallığına (eleman kaydırma zorunluluğu) karşılık veri tabanlarında ve hash tablolarında kullanılan zincirleme çarpışma çözümlerinin (Chaining) iskeletidir. Düğümler arası zeka dolu bağlantılar kurulur.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=tek+ba%C4%9Fl%C4%B1+liste+eleman+ekleme+silme' },
      ],
    },
    10: {
      description: `Her düğümün hem kendinden bir öncekini hem de bir sonrakini (Previous & Next Pointers) bildiği Çift Bağlı Liste (Doubly Linked List) mimarisi işlenir. İnternet tarayıcılarının "İleri ve Geri" gezinme özelliklerinin veya müzik oynatıcılarının çift yönlü atlama sistemlerinin arkasındaki temel yapıdır. Tek bağlı listedeki "geriye dönememe" eksikliği giderilirken, fazladan tutulan hafıza (ekstra pointer) nedeniyle artan Alan Karmaşıklığı (Space Complexity) takası (Trade-off) mühendislik perspektifiyle tartışılır. Silme operasyonlarında her iki yöndeki kopan bağları sorunsuzca düğümleyerek "Null Reference" (Boş adres) çökmelerini engelleme disiplini aşılanır. Veri zincirindeki hareket özgürlüğü maksimize edilir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/doubly-linked-list/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%A7ift+ba%C4%9Fl%C4%B1+liste+doubly+linked+list' },
      ],
    },
    11: {
      description: `Çift bağlı listelerin ileri düzey fonksiyonları ve baş ile son düğümün birbirine bağlandığı Dairesel Bağlı Listeler (Circular Linked Lists) üzerine projeler geliştirilir. İşletim sistemlerinde birden fazla programın işlemcide adil ve sırayla çalışmasını sağlayan "Round Robin" görev dağıtım algoritması tamamen dairesel liste yapısıyla kurgulanır. Çok oyunculu oyunlarda sıranın bir sonraki oyuncuya sonsuz döngüde dönmesi bu yapı sayesinde herhangi bir bitiş noktası (Null) olmadan sağlanır. Çift yönlü ve dairesel adreslemelerle bellek (RAM) üzerinde adeta karmaşık trafik ağları yöneten küçük bir işletim sistemi çekirdeği mantığı tecrübe edilir. Verinin sınırlarını kaldıran döngüsel mimaridir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/circular_linked_list_algorithm.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dairesel+ba%C4%9Fl%C4%B1+liste+circular+linked+list' },
      ],
    },
    12: {
      description: `Doğrusal verilerden çıkarak hiyerarşik (Parent-Child) ilişkiye sahip, bilgisayar biliminin en değerli veri yapısı olan Ağaçlar ve İkili Ağaçlar (Binary Trees) öğrenilir. Dosya sistemlerindeki klasör dizinleri, HTML DOM (Belge Nesne Modeli) yapısı ve şirket organizasyon şemaları tamamen bu ağaç formasyonunda belleğe haritalandırılır. İkili ağaçlarda derinlik (Depth), yükseklik ve yaprak (Leaf) kavramları öğrenilerek veriyi hiyerarşik katmanlara ayırma felsefesi oturtulur. Veri arama işlemlerini $O(\\log N)$ seviyesine çekerek milyonlarca veriyi saniyeler içinde bulmayı sağlayan o devrimsel algoritmik temelin tohumları atılır. Veriyi dallandırarak kaosun içinden mantık çıkarma sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1+a%C4%9Fa%C3%A7lar+ikili+a%C4%9Fa%C3%A7+binary+tree' },
      ],
    },
    13: {
      description: `İkili Arama Ağaçları (Binary Search Tree - BST), ağaç üzerinde gezinme yöntemleri (In-order, Pre-order, Post-order) ve AVL/Kırmızı-Siyah ağaçlar gibi kendi kendini dengeleyen ileri seviye yapılar işlenir. İlişkisel veritabanı (SQL) motorlarının indeksleme işlemlerinde "B-Tree" yapılarını kullanarak arama hızlarını nasıl rekor seviyede tuttuğu analiz edilir. Dengesiz bir ağacın doğrusal bir listeye dönüşerek arama hızını $O(N)$ seviyesine düşürmesini engellemek için, ağacın köklerini otomatik döndüren (Tree Rotation) harika mantıksal mekanizmalar kurgulanır. Hiyerarşik yapıların içindeki algoritmik traverslerle (gezinmeler), veri derleyicilerinde sözdizimi ağaçlarının (Syntax Trees) nasıl okunduğu kavranır. Veri tabanlarının arka planındaki performans sırları çözülür.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ikili+arama+a%C4%9Fac%C4%B1+bst+ve+a%C4%9Fa%C3%A7ta+dola%C5%9Fma' },
      ],
    },
    14: {
      description: `Dönem boyunca öğrenilen Listeler, Yığınlar, Kuyruklar, Sıralama algoritmaları ve Ağaç yapıları harmanlanarak, gerçek dünya problemlerini çözen kapsamlı bir dönem sonu projesi geliştirilir. Öğrencilerin, örneğin bir kütüphane otomasyonunu, yol bulma navigasyonunu (A-Star) veya metin sıkıştırma (Huffman Coding) algoritmasını doğru veri yapılarını entegre ederek tasarlaması beklenir. Proje boyunca, seçilen algoritmaların bellek sızıntısı (Memory Leak) yapmadan ve Big-O karmaşıklığını optimize ederek çalışması en temel kalite metriğidir. "Hangi durumda hangi veri yapısı kullanılmalı?" sorusunun yanıtı sadece teorik olarak değil, bir yazılım ürününün performans testlerinde pratik olarak ispatlanır. Dönem, mimari tasarım yetenekleri sınanmış tam yetkin bir yazılım mühendisi adayı olarak noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-structures-and-algorithms-projects/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1+proje+%C3%B6rnekleri' },
      ],
    },
  },
  'BMB309 Bilgisayar Ağlarına Giriş': {
    1: {
      description: `Modern bulut sistemlerinin (Cloud) ve internetin temelini oluşturan veri iletim felsefesi ve iletişim mimarilerinin yapı taşları öğrenilir. Kaynak, verici, kanal ve alıcı gibi bileşenlerin birbiriyle nasıl senkronize çalıştığı mantıksal olarak analiz edilir. Özellikle dağıtık (distributed) arka uç (backend) mimarilerinde sunucuların birbiriyle konuşmasını sağlayan altyapının ilk adımıdır. Bir mesajın donanım katmanından çıkıp ağa nasıl ulaştığına dair genel bir mühendislik perspektifi kazandırılır. Ağ mimarisinin tasarımında hız ve güvenilirlik kıstaslarının neden bu kadar hayati olduğu tartışılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+ileti%C5%9Fimi+ve+bilgisayar+a%C4%9Flar%C4%B1na+giri%C5%9F' },
      ],
    },
    2: {
      description: `Ağ iletişimini standartlaştıran OSI (Open Systems Interconnection) referans modeli ve TCP/IP protokol yığınları detaylıca incelenir. İleride IoT cihazlarından sunucuya veri çekerken veya mikroservisler arası API haberleşmesi kurarken bu katmanlı mimarinin kurallarına uymak zorundasınız. Her bir ağ katmanının (Fiziksel, Veri Bağı, Ağ, Ulaşım, Uygulama) veriye nasıl başlık (header) ekleyerek paketlediği (encapsulation) öğretilir. Sistem darboğazlarını (bottlenecks) çözerken problemin yazılımda mı yoksa ağ katmanında mı olduğunu teşhis etme yeteneği aşılar. İnternetin anayasası niteliğindeki bu evrensel kurallar bütünü teorik olarak oturtulur.
http://googleusercontent.com/image_content/426`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/osi-model-layers-and-protocols/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osi+referans+modeli+ve+katmanlar%C4%B1' },
      ],
    },
    3: {
      description: `Sayısal (dijital) verilerin fiziksel ortamda taşınabilmesi için analog veya dijital sinyallere (işaretlere) nasıl dönüştürüldüğü analiz edilir. Genlik (Amplitude), frekans ve faz kavramları üzerinden modülasyon tekniklerinin mantığı kavranarak sinyal iletiminin sınırları çizilir. IoT projelerinde sensörlerden gelen analog frekansların mikrodenetleyiciye dijital olarak aktarılmasındaki o fiziksel sürecin arka planıdır. Bant genişliği (Bandwidth) kapasitesi ile veri aktarım hızı arasındaki matematiksel ilişki (Nyquist ve Shannon teoremleri) kanıtlanır. Gözle görülmeyen verinin elektromanyetik dalgalara kodlanma sanatıdır.
http://googleusercontent.com/image_content/442`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/signals.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgi+ta%C5%9F%C4%B1yan+i%C5%9Faretler+analog+dijital+sinyaller' },
      ],
    },
    4: {
      description: `Ağların fiziksel altyapısını oluşturan Çift Burgulu (Twisted Pair), Koaksiyel ve Fiber Optik kabloların kapasiteleri ve zayıflama (attenuation) oranları incelenir. Devasa bulut veri merkezlerinin (Data Centers) birbirine bağlanmasında neden ışık hızında veri taşıyan fiber optiklerin kullanıldığı fiziksel sınırlarla açıklanır. Yerel ağlarda (LAN) veri kayıplarını en aza indirmek için doğru kablo tipini ve topolojisini seçme vizyonu kazandırılır. Elektromanyetik girişimin (EMI) bakır kablolardaki veriyi nasıl bozduğu ve bunun donanımsal olarak nasıl engellendiği öğretilir. Ağ mühendisliğinin fiziksel (Layer 1) dünyasına doğrudan temas edilir.
http://googleusercontent.com/image_content/462`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/guided-transmission-media/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kablolu+ileti%C5%9Fim+ortamlar%C4%B1+fiber+optik+utp' },
      ],
    },
    5: {
      description: `Radyo dalgaları, mikrodalga, kızılötesi gibi elektromanyetik spektrum üzerinden serbest uzayda veri taşıma yöntemleri öğrenilir. Akıllı ev sistemleri, giyilebilir teknolojiler veya otonom cihazlar gibi IoT uç birimlerinin (Edge devices) kablosuz ağlara entegrasyonu için hayati bir konudur. Wi-Fi, Bluetooth ve hücresel ağların (4G/5G) frekans bantları, kapsama alanları ve veri taşıma kapasiteleri kıyaslanarak projeye uygun protokolü seçme yetisi gelişir. Sinyalin engellere çarpması, yansıması (multipath fading) ve havada sönümlenmesi gibi fiziksel zorlukların üstesinden gelme stratejileri tartışılır. Geleceğin mobil ve bağlantılı dünyasının görünmez yolları keşfedilir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/wireless_transmission.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kablosuz+ileti%C5%9Fim+ortamlar%C4%B1+a%C4%9Flar' },
      ],
    },
    6: {
      description: `Temel bant (Baseband) ve geniş bant (Broadband) iletim şekilleri ile verinin senkron veya asenkron olarak nasıl taşındığı incelenir. Yazılımsal arka uç (backend) servislerinin veritabanlarıyla konuşurken kullandığı veri taşıma modlarının (Tam çift yönlü - Full Duplex, Yarı çift yönlü) donanımsal karşılıklarıdır. Cihazların saat vuruşlarıyla (clock cycles) kendi aralarında nasıl senkronize olup veriyi hatasız yakaladığı algoritmalara dökülür. Seri ve paralel veri iletiminin hız, maliyet ve mesafe açısından avantajları karşılaştırılarak optimum sistem tasarımı kurgulanır. İki makine arasındaki veri trafiğinin kuralları ve yönleri belirlenir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/transmission-modes-in-computer-networks/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+ileti%C5%9Fim+teknikleri+senkron+asenkron' },
      ],
    },
    7: {
      description: `Ağ trafiğini yönetmek için kullanılan Devre Anahtarlama (Circuit Switching) ve Paket Anahtarlama (Packet Switching) mantıkları derinlemesine öğrenilir. İnternetin günümüzdeki esnek ve dayanıklı yapısını sağlayan Paket Anahtarlama felsefesi sayesinde verinin router'lar üzerinden kendi yolunu nasıl bulduğu anlaşılır. Sesli iletişim (VoIP) ile klasik veri aktarımı arasındaki gecikme (latency) gereksinimleri karşılaştırılarak uygun anahtarlama mimarisi seçme vizyonu kazanılır. Tıkanıklık anında (congestion) düğümlerin veriyi nasıl yönlendirdiği (routing) veya düşürdüğü (dropping) mekanizmaları tartışılır. Global bilgi otobanlarındaki kavşak kuralları modellenir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/switching_techniques.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=devre+ve+paket+anahtarlama+y%C3%B6ntemleri' },
      ],
    },
    8: {
      description: `Frekans, Zaman ve Dalga Boyu Bölmeli Çoklama (FDM, TDM, WDM) yöntemleriyle tek bir kablodan yüzlerce farklı sinyalin aynı anda nasıl iletildiği analiz edilir. Bulut (Cloud) sunuculardaki devasa bant genişliklerinin optik kablolar üzerinden WDM teknolojisi ile nasıl çoğaltılarak maliyetlerin düşürüldüğü görülür. Modemlerin analog-dijital çevrim süreçleri incelenerek ev ağlarından ISP (İnternet Servis Sağlayıcı) merkezlerine uzanan bağlantı zinciri anlaşılır. Kısıtlı iletişim kaynaklarını (kanalları) birçok kullanıcıya verimli bir şekilde paylaştırma (resource sharing) mühendislik çözümleri üretilir. Fiziksel sınırların akıllı algoritmalarla aşılma sanatıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/multiplexing-in-computer-network/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=a%C4%9Flarda+%C3%A7oklama+y%C3%B6ntemleri+fdm+tdm' },
      ],
    },
    9: {
      description: `Mükemmel tasarlanmış yazılımların bile fiziksel ağ katmanında ısıl gürültü (thermal noise), zayıflama ve şekil bozukluğu (distortion) nedeniyle nasıl bozulduğu (bit corruption) incelenir. Ağ üzerinden akan verilerin kusursuz (lossless) bir şekilde hedefe ulaşmasının önündeki fiziksel ve elektromanyetik düşmanlar tanınır. Kablo uzunluğunun veri sinyalini nasıl zayıflattığı hesaplanarak, ağ aralarına tekrarlayıcı (Repeater) veya yükselteç (Amplifier) konumlandırma stratejileri kurgulanır. İletişim kalitesini belirleyen Sinyal-Gürültü Oranı'nın (SNR) sistemin teorik maksimum hızını nasıl sınırladığı kanıtlanır. Saf matematiksel verinin, kaotik fiziksel dünyaya çarpma anıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/transmission_impairment.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ileti%C5%9Fim+ortam%C4%B1nda+hata+kaynaklar%C4%B1+g%C3%BCr%C3%BClt%C3%BC' },
      ],
    },
    10: {
      description: `Kabloların birbirini elektromanyetik olarak etkilemesiyle oluşan Çapraz Karışma (Crosstalk) ve sinyallerin yankılanması (Echo/Reflection) gibi ileri seviye hata kaynakları işlenir. Sunucu odalarındaki veya IoT panolarındaki yoğun kablolamanın, izolasyon (Shielding) kurallarına uyulmazsa sistem verilerini nasıl anlamsız hale getireceği tartışılır. Farklı frekanslardaki sinyallerin ortamda farklı hızlarda ilerlemesinden doğan gecikme bozulmaları (Delay Distortion) algoritmik olarak modellenir. Dış müdahalelere ve fiziksel limitlere karşı dayanıklı ağ altyapıları (robust infrastructure) tasarlama bilinci aşılanır. Ağ sorunlarını yazılımda aramadan önce donanım seviyesinde filtreleme vizyonudur.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/transmission-impairments-in-computer-network/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=crosstalk+%C3%A7apraz+kar%C4%B1%C5%9Fma+a%C4%9F+hatalar%C4%B1' },
      ],
    },
    11: {
      description: `Verinin hedefe bozuk ulaşıp ulaşmadığını anlamak için paketlere eklenen Eşlik Biti (Parity Check) ve İki Boyutlu Eşlik gibi donanımsal/yazılımsal test algoritmaları öğrenilir. İletişimde 1'lerin 0, 0'ların 1 olması durumunda, arka uçtaki veritabanına yanlış verilerin kaydedilmesini önleyen bu ilk güvenlik bariyerleri kodlanır. Basit Parity yönteminin çift sayıdaki hataları tespit edememe zafiyeti kurgulanarak, sistemin güvenlik limitleri (Trade-off) tartışılır. Fazladan gönderilen kontrol bitlerinin (Redundancy) ağ trafiğini nasıl artırdığı hesaplanarak optimum paket boyutu stratejileri oluşturulur. Veri bütünlüğünü (Data Integrity) doğrulamanın temel matematiksel zekasıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/error-detection-in-computer-networks/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=a%C4%9Flarda+hata+saptama+parity+check' },
      ],
    },
    12: {
      description: `İnternetin belkemiği olan Checksum (Sağlama Toplamı) ve çok daha güçlü olan CRC (Cyclic Redundancy Check) polinom hesaplama algoritmaları incelenir. TCP/IP paketlerinin bütünlüğünü korumak için kullanılan Checksum veya disk kayıtlarındaki (Storage) bozulmaları anında tespit eden CRC'nin arkasındaki modüler aritmetik kavranır. Düzeltme yeteneğine sahip olan Hamming Kodu (Forward Error Correction) sayesinde, verinin tekrar istenmesine gerek kalmadan hedefte onarılması öğretilir. Özellikle derin uzay iletişimi veya tek yönlü sensör ağları (IoT) gibi verinin tekrar istenemeyeceği durumlarda bu kodlamalar hayat kurtarır. İleri seviye doğrusal cebir ve şifreleme kurallarının ağa uygulanmasıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/error_detection_and_correction.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=hata+saptama+ve+d%C3%BCzeltme+crc+hamming+kodu' },
      ],
    },
    13: {
      description: `Hatalı paketin tespit edildikten sonra tekrar gönderilmesini sağlayan Dur-ve-Bekle (Stop-and-Wait ARQ) protokolünün akış kontrol (Flow Control) mantığı işlenir. Alıcının işleme hızını (buffer kapasitesini) aşan verilerin yollanmasını engelleyen bu algoritmalar sayesinde, sunucu kilitlenmeleri (overflow) engellenir. Paketin kaybolması, onay mesajının (ACK) gelmemesi veya zaman aşımı (Timeout) gibi senaryolarda sistemin nasıl otonom tepki verdiği kurgulanır. Ancak bu eski yöntemin bant genişliğini (Bandwidth) nasıl israf ettiği ispatlanarak, daha asenkron ve modern mimarilere neden ihtiyaç duyulduğu açıklanır. İki makine arasındaki adil veri alışverişinin (handshake) ilk denemesidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/stop-and-wait-arq/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=stop+and+wait+arq+protokol%C3%BC' },
      ],
    },
    14: {
      description: `Ağ verimliliğini maksimize eden Kayan Pencere (Sliding Window), Go-Back-N ve Seçici Tekrar (Selective Repeat ARQ) algoritmaları ile dönem tamamlanır. Onay (ACK) beklemeden art arda paket gönderen bu pipelining yöntemleri, modern yüksek hızlı internetin (TCP protokolü) temel çalışma felsefesidir. Bulut tabanlı veri boru hatlarında (Data Pipelines) saniyede milyonlarca paketin sıralamasının nasıl korunduğu ve sadece bozulanların nokta atışı nasıl geri istendiği algoritmalaştırılır. Kaynak kullanımını ve iletim hızını (Throughput) zirveye taşıyan bu yazılımsal mimariler, arka uç geliştiricilerinin sistemleri anlama gücünü artırır. Gelişmiş veri iletim teorilerinin uygulamalı mühendislik vizyonuyla taçlanmasıdır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/sliding-window-protocol-set-1/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=go+back+n+ve+selective+repeat+arq' },
      ],
    },
  },
  'BMB311 İşletim Sistemleri': {
    1: {
      description: `Donanım ile son kullanıcı yazılımları arasında köprü kuran işletim sistemlerinin (OS) temel amaçları, görevleri ve kaynak yönetim felsefeleri tanıtılır. Geliştireceğiniz yüksek trafikli arka uç (backend) servislerinin aslında sadece işletim sisteminin izin verdiği kaynaklarla (CPU, RAM, Ağ) sınırlı olduğu gerçeği kavranır. Kullanıcı modu (User space) ve Çekirdek modu (Kernel space) arasındaki izolasyon farkı incelenerek sistem çağrılarının (System Calls) çalışma mantığı oturtulur. İşletim sistemini sadece bir arayüz olarak değil, kısıtlı kaynakları binlerce işleme adil dağıtan devasa bir orkestra şefi olarak görme vizyonu katar. Yazılımlarınızın üzerinde koştuğu zeminin anayasası öğrenilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_overview.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemlerine+giri%C5%9F+kavramlar' },
      ],
    },
    2: {
      description: `Monolitik (Linux), Mikrokernel (Mach), Hibrid (Windows) gibi farklı işletim sistemi çekirdek mimarilerinin avantajları ve tasarım zorlukları tartışılır. Kesmeler (Interrupts) sayesinde donanımdan gelen asenkron olayların (örneğin ağ kartına veri gelmesi) işletim sistemi tarafından nasıl anında algılanıp işlendiği öğrenilir. İleride Docker gibi konteynerizasyon araçlarını veya bulut sunucularını yönetirken, Linux çekirdeğinin mimarisini bilmek size devasa bir optimizasyon gücü (DevOps) verecektir. Çekirdeğin donanımı koruma yolları ve hatalı yazılımların tüm sistemi çökertmesini engelleyen bellek koruma halkaları (Protection Rings) analiz edilir. Derinlemesine mimari analizlerle sistem mühendisliğine giriş yapılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/operating-system-architecture/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemi+mimarileri+monolitik+mikrokernel' },
      ],
    },
    3: {
      description: `Çalışan programların işletim sistemindeki soyut karşılığı olan Süreç (Process) ve İplik (Thread) yapıları, PCB (Process Control Block) üzerinden incelenir. Büyük veri işleme uygulamalarında veya web sunucularında (Örneğin Node.js veya C# ASP.NET), istekleri karşılarken çoklu süreç (Multiprocessing) veya çoklu iş parçacığı (Multithreading) kullanmanın performans/maliyet analizi yapılır. Thread'lerin aynı bellek alanını paylaşmasının getirdiği hız avantajları ile süreç izolasyonunun (Process isolation) getirdiği güvenlik avantajları kıyaslanır. Bağlam Değişimi (Context Switch) denilen ve işlemcinin bir görevden diğerine geçerken harcadığı o mikrosaniyelik yük (overhead) hesaplanır. Yazılımların işlemcide nasıl bölünüp paralel koştuğunun sırrıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_processes.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=process+ve+thread+aras%C4%B1ndaki+farklar' },
      ],
    },
    4: {
      description: `Yüzlerce uygulamanın tek veya çok çekirdekli işlemcide aynı anda çalışıyor hissi vermesini sağlayan İşlemci Zamanlama (CPU Scheduling) algoritmaları kodlanır. FCFS, SJF, Öncelikli (Priority) ve Round-Robin gibi algoritmalar sayesinde işletim sisteminin hangi sürece ne kadar işlemci süresi ayırdığının matematiği öğrenilir. Bulut bilişim altyapılarında (AWS, Azure) sanal makinelerin (VM) fiziksel işlemciyi nasıl adil paylaştığının arka planını anlamak bu zamanlama kurallarından geçer. Açlık (Starvation) problemi ve konvoy etkisi gibi darboğazları çözerek, sistemin gecikme (Latency) ve iş hacmi (Throughput) değerlerini dengeleme stratejileri kurgulanır. Sınırlı donanım zamanını maksimize etme sanatıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=cpu+scheduling+zamanlama+algoritmalar%C4%B1' },
      ],
    },
    5: {
      description: `Ortak belleğe aynı anda yazmaya çalışan thread'lerin veriyi bozmasını (Race Condition) engelleyen Mutex, Semafor ve Monitör senkronizasyon araçları işlenir. Banka veritabanı işlemlerinde aynı anda hesaptan para çeken iki farklı isteğin veriyi tutarlı (Consistent) tutmasını sağlayan kritik bölge (Critical Section) algoritmaları tasarlanır. Yanlış tasarlanmış kilit mekanizmalarının iki sürecin birbirini sonsuza kadar beklemesine yol açtığı Kilitlenme (Deadlock) felaketinin tespiti ve önlenmesi (Banker Algoritması) analiz edilir. Yüksek eşzamanlılığa (High Concurrency) sahip arka uç mimarileri kodlarken sistemin çökmemesini garanti altına alan en hayati kurallardır. Asenkron kaosun içinde güvenli trafik yönetimi yapmaktır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_process_synchronization.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=process+senkronizasyonu+mutex+semafor+deadlock' },
      ],
    },
    6: {
      description: `İşletim sisteminin programları diskten alıp ana belleğe (RAM) nasıl yerleştirdiğini anlatan bitişik (contiguous) bellek atama ve parçalanma (Fragmentation) sorunları incelenir. "Best-Fit, First-Fit, Worst-Fit" gibi algoritmalarla bellekteki boşlukların uygulamanın boyutuna göre nasıl en verimli şekilde tahsis edildiği kıyaslanır. Zamanla bellekte oluşan deliklerin (External Fragmentation) sistemi nasıl yavaşlattığı ve bunu çözmek için yapılan birleştirme (Compaction) işlemlerinin işlemciye maliyeti hesaplanır. Yazdığınız kodun (örneğin C/C++) bellekte allocate (\`malloc\`) ettiği alanların işletim sistemi tarafından fiziksel olarak nasıl bulunduğunun haritasıdır. Veri mühendisliğinde RAM darboğazlarını öngörme vizyonu katar.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemleri+bellek+y%C3%B6netimi+fragmentation' },
      ],
    },
    7: {
      description: `Bitişik atamanın parçalanma sorununu tamamen çözen, belleği eşit boyutlu "Çerçevelere" (Frames) ve programları "Sayfalara" (Pages) bölen Sayfalama (Paging) ve Bölümlendirme (Segmentation) mimarileri öğrenilir. İşletim sisteminin oluşturduğu Sayfa Tabloları (Page Tables) sayesinde mantıksal adreslerin (kodunuzun gördüğü adres) fiziksel adreslere (gerçek RAM) donanımsal olarak nasıl çevrildiği (MMU) kavranır. Bu ayrıştırma sayesinde programların RAM'in farklı köşelerine dağılarak esnek bir şekilde çalıştırılabildiği efsanevi soyutlama mantığı anlaşılır. Segmentasyon sayesinde kod, veri ve yığın (stack) alanlarının izole edilerek bellek taşmalarına (Buffer Overflow) karşı nasıl korunduğu kanıtlanır. Modern bellek organizasyonunun standartlarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_memory_management.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sayfalama+ve+b%C3%B6l%C3%BCmlendirme+paging+segmentation' },
      ],
    },
    8: {
      description: `Süreç yönetimi, işlemci zamanlama, kilitlenmeler ve temel bellek yönetimi (sayfalama) konularının kavramsal ve algoritmik olarak test edildiği dönem ortası sınavıdır. İyi bir mühendisin sadece programlama dili bilmesinin yetmeyeceği, kodunun OS üzerinde nasıl kaynak talep ettiğini ve rakipleriyle (diğer processler) nasıl etkileştiğini anlama düzeyi ölçülür. Çoklu işlem ve senkronizasyon (Deadlock çözümleri) algoritmalarının matematiksel olarak hatasız kurgulanıp kurgulanamadığı kontrol edilir. Sanal bellek ve dosya sistemleri gibi diske doğru uzanan ağır konulara geçiş için sistem vizyonu onayıdır. Yazılımı ayakta tutan çekirdek mimarilerin analizidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Sistemin fiziksel RAM miktarından çok daha büyük programları (örneğin AAA sınıfı oyunlar veya büyük veritabanları) çalıştırabilmesini sağlayan İsteğe Bağlı Sayfalama (Demand Paging) mantığı işlenir. Mantıksal adres alanının disk (Swap/Pagefile) ve RAM arasında nasıl akıllıca paylaşıldığı, "Sayfa Hatası" (Page Fault) mekanizmasıyla diske nasıl inildiği öğretilir. Bulut sunucularını (Cloud) yapılandırırken RAM yetmediğinde sistemin çökmeyip yavaşlamasını sağlayan sanal takas (swap) alanlarının hayati önemi kavranır. Kullanıcıya sonsuz bellek illüzyonu sunan bu muazzam sistem mühendisliği taktiği, disk okuma hızlarının sistem performansına etkisini çarpıcı şekilde gösterir. Donanım sınırlarını yazılım illüzyonuyla aşma sanatıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/virtual-memory-in-operating-system/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sanal+bellek+virtual+memory+ve+sayfa+hatas%C4%B1' },
      ],
    },
    10: {
      description: `RAM dolduğunda diske atılacak en uygun sayfayı seçmeye yarayan Sayfa Değiştirme (Page Replacement) algoritmaları olan FIFO, Optimal, ve LRU (Least Recently Used) analiz edilir. Bu algoritmalar sayesinde işletim sisteminin, sık kullanılan verileri (locality of reference) RAM'de tutarak performans darboğazı olan "Thrashing" (aşırı disk takası) krizini nasıl engellediği öğrenilir. Geliştireceğiniz önbellekleme (Caching - örn: Redis) sistemlerinin arka planındaki veri silme/güncelleme mantığı tamamen bu OS algoritmalarıyla aynı felsefedir. Yazılım kodunuzda döngüleri (loops) dizilerin satır veya sütun sırasına göre okumanın, Sayfa Hatası sayısını ne kadar dramatik etkilediği ispatlanır. Bellek erişim maliyetlerini algoritmik olarak minimize etme taktikleridir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_virtual_memory.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sayfa+de%C4%9Fi%C5%9Ftirme+algoritmalar%C4%B1+fifo+lru' },
      ],
    },
    11: {
      description: `Diskteki 0 ve 1'lerin klasörlere, dizinlere ve dosyalara (NTFS, EXT4) nasıl mantıksal olarak çevrildiği ve dosya tahsis (Allocation) yöntemleri incelenir. Veritabanı yönetim sistemlerinin veriyi diske ardışık, bağlı veya indeksli yapılarak nasıl daha hızlı okuyup yazdığının dosya sistemi temelindeki yansımalarıdır. Klavye, fare, disk gibi G/Ç (I/O) birimlerinin işletim sistemiyle Polling, Interrupts veya Doğrudan Bellek Erişimi (DMA) yöntemleriyle nasıl konuştuğu kavranır. Özellikle ağır veri aktarımlarında DMA kullanarak işlemcinin (CPU) yükünü donanıma devretmenin (offloading) işletim sistemi düzeyindeki mantığı öğretilir. Verinin kalıcılığını (persistence) ve dış dünyayla bağlantısını sağlayan mimaridir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dosya+sistemleri+ve+giri%C5%9F+%C3%A7%C4%B1k%C4%B1%C5%9F+y%C3%B6netimi+i%2Fo' },
      ],
    },
    12: {
      description: `Tek bir makinenin sınırlarını aşıp, ağ üzerinden birbirine bağlı çoklu sunucuların (Distributed Systems) tek bir işletim sistemi gibi davrandığı modern mimarilere giriş yapılır. Bulut bilişimde (Cloud Computing) ve mikroservislerde sıkça karşılaşılan senkronizasyon, lider seçimi (Leader Election) ve ağ gecikmeleri (Network Partition) problemleri OS seviyesinde tartışılır. Verilerin farklı sunucularda yedekli tutulurken (Replication) aynı anda tutarlılığın (Consistency) nasıl sağlanacağına dair CAP Teoremi gibi evrensel kurallar işlenir. Büyük ölçekli veri mühendisliği projelerinde devasa sunucu tarlalarının (Server Farms) nasıl orkestre edildiği (Örn: Kubernetes mantığı) kavranır. Geleceğin devasa uygulamalarının üzerinde koştuğu dağıtık çekirdeklerdir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/distributed_operating_system/index.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=da%C4%9F%C4%B1t%C4%B1lm%C4%B1%C5%9F+sistemler+distributed+systems' },
      ],
    },
    13: {
      description: `İşletim sisteminin kullanıcıları, dosyaları ve işlemleri birbirinden korumak için tasarladığı Erişim Matrisi (Access Matrix), ACL (Erişim Kontrol Listeleri) ve yetkilendirme modelleri öğrenilir. Sistem zafiyetlerini kullanan virüsler, truva atları ve arabellek taşması (Buffer Overflow) gibi siber güvenlik saldırılarının OS katmanında nasıl meydana geldiği ve engellendiği analiz edilir. Kriptografi (Şifreleme) kullanılarak dosya sistemlerinin veya ağ iletişimlerinin çekirdek (Kernel) seviyesinde nasıl şifrelendiği gösterilir. Yazılım geliştirirken "Zero Trust" (Sıfır Güven) mimarisini kurgulamanın, sunucu güvenliği açısından ne kadar kritik olduğu bilinci aşılanır. Uygulama ile donanım arasındaki en kalın çelik kapıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/security-in-operating-system/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemleri+g%C3%BCvenlik+ve+koruma' },
      ],
    },
    14: {
      description: `Dönemin finalinde, Android/iOS gibi mobil sistemler, IoT cihazları için Gerçek Zamanlı İşletim Sistemleri (RTOS) ve açık kaynaklı bulut işletim sistemlerinin dinamikleri tartışılır. Fabrika otomasyonlarında veya otonom araçlarda mikrosaniyelik tepki garantisi veren RTOS mimarilerinin klasik Windows/Linux'tan neden farklı tasarlandığı kavranır. Sanallaştırma (Virtualization) ve Konteyner teknolojilerinin (Docker/Hypervisor) donanımı yazılımdan nasıl soyutladığı devrimsel bir bakış açısıyla incelenir. Gelecek kariyerinizde bulut sistemleri veya IoT cihazları programlarken, işletim sisteminin yeteneklerini ve sınırlarını uçtan uca kullanma vizyonuyla dönem noktalanır. Soyut sistemlerin modern teknolojilerdeki şaha kalkışıdır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/operating_system/os_linux.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rtos+ger%C3%A7ek+zamanl%C4%B1+i%C5%9Fletim+sistemleri+ve+sanalla%C5%9Ft%C4%B1rma' },
      ],
    },
  },
  'BMB319 Mantık Devreleri': {
    1: {
      description: `Bilgisayarların dünyasında verinin 0 ve 1 seviyelerinde fiziksel olarak nasıl işlendiğini gösteren AND, OR, NOT, NAND gibi temel mantık kapıları ve doğruluk tabloları öğrenilir. Yazılımdaki \`if (a && b)\` gibi karar yapılarını çalıştıran fiziksel donanımların ve işlemci mimarilerinin (CPU) en küçük yapı taşlarıdır. Boole cebri teoremleri kullanılarak, karmaşık mantıksal ifadelerin nasıl daha az işlemci döngüsüyle çalışacak şekle dönüştürülebileceğinin matematiksel felsefesi verilir. Donanım geliştirme kartları (FPGA/ASIC) veya IoT cihazları üzerinde düşük seviyeli programlama yapabilmek için gereken sıfır noktasıdır. Elektrik voltajlarının mantıksal kararlara (True/False) dönüştüğü efsanevi geçiştir.
http://googleusercontent.com/image_content/886`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/digital_circuits/digital_circuits_logic_gates.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mant%C4%B1k+kap%C4%B1lar%C4%B1+ve+boole+cebri+dijital+tasar%C4%B1m' },
      ],
    },
    2: {
      description: `Karnaugh Haritaları (K-Map) kullanılarak binlerce ihtimal barındıran devasa mantık fonksiyonlarının en az sayıda kapıyla (minimum donanım maliyeti) tasarlanma teknikleri öğretilir. İyi bir algoritmanın zaman karmaşıklığını düşürmek gibi, bir devreyi sadeleştirmek de güç tüketimini, üretim maliyetini ve işlem süresini donanım seviyesinde optimize eder. Birleşik (Combinational) devrelerde çıktıların sadece anlık girişlere bağlı olarak hesaplandığı hafızasız sistemlerin (Toplayıcı, Çıkarıcı vb.) hiyerarşik tasarımları kurgulanır. İleride gömülü sistemler veya IoT devreleri tasarlarken, gereksiz parça kullanımını engelleyerek batarya ömrünü artırma vizyonu sunar. Matematiksel optimizasyonun mikroçiplere işlenmesidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/karnaugh-map-k-map/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=karnaugh+haritalar%C4%B1+ile+devre+sadele%C5%9Ftirme' },
      ],
    },
    3: {
      description: `Sistemlere geçmişi hatırlama yeteneği kazandıran, çıktıların anlık girişlere ve bir önceki duruma bağlı olduğu Sıralı (Sequential) devreler ve bellek yapıları (Flip-Floplar) işlenir. Bilgisayar RAM'lerinin, işlemci önbelleklerinin (Cache) ve durum makinelerinin (State Machines) hafıza tutma yetenekleri tamamen bu yapılara dayanır. Adreslenen bellek bölgelerindeki veriyi bulmaya yarayan Dekoderler (Kod Çözücüler) sayesinde bilgisayarın donanımsal arama-bulma işlemleri modellenir. Yazılımdaki değişkenlerin (Variables) makine içinde fiziksel olarak nerede tutulduğunu ve sistem saatiyle (Clock) nasıl eşzamanlı kilitlendiğini (Latch) kavramak için kritik bir konudur. Dijital dünyada zamanın ve hafızanın algoritmik tasarımıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/digital_circuits/digital_circuits_sequential_logic.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=s%C4%B1ral%C4%B1+devreler+ve+kod+%C3%A7%C3%B6z%C3%BCc%C3%BC+dekoder' },
      ],
    },
    4: {
      description: `Birçok veri hattından sadece birini seçerek iletişimi sağlayan Çoklayıcılar (Multiplexer) ile işlemci içindeki çok hızlı veri depolama birimleri olan Yazaçlar (Registers) öğrenilir. Ağa bağlı IoT sensörlerinden gelen verilerin işlemciye tek hat üzerinden sırayla nasıl aktarıldığı MUX yapılarıyla donanımsal olarak modellenir. Kaydırma Yazaçları (Shift Registers) sayesinde paralel verinin seri veriye dönüştürülerek USB veya Ethernet kabloları üzerinden nasıl yollanabildiğinin iletişim sırrı çözülür. İşlemci içinde aritmetik operasyonların (çarpma/bölme gibi) verileri sola/sağa kaydırarak donanımsal olarak ne kadar hızlı yapılabildiği pratik edilir. Verinin işlemci ve veri yolu arasındaki trafik polisleridir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/shift-registers-in-digital-logic/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=multiplexer+%C3%A7oklay%C4%B1c%C4%B1+ve+kayd%C4%B1rma+yaza%C3%A7lar%C4%B1' },
      ],
    },
    5: {
      description: `Saat vuruşlarını (Clock Pulses) sayarak zamanlayıcılar ve bellek adresleme işlemleri yapan İkili Sayıcılar (Binary Counters) ile RAM/ROM gibi genel bellek yapıları incelenir. İşletim sistemlerinde ve ağ protokollerinde "Timeout" (Zaman aşımı) algoritmalarını tetikleyen donanımsal kronometrelerin kalbi bu sayıcılardır. Bellek birimlerinin hiyerarşisi, okuma/yazma (Read/Write) sinyallerinin yönetimi ve veri yolundan (Data Bus) hücreye ulaşım süreçleri blok diyagramlarla analiz edilir. Geliştireceğiniz yüksek performanslı C/C++ kodlarında veri tiplerinin bellek bloklarına nasıl yerleştiğini anlamak (Alignment) için donanım vizyonunu tamamlar. Sistem kontrolünün ritmini ve depolamanın mimarisini belirler.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/digital_circuits/digital_circuits_counters.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ikili+say%C4%B1c%C4%B1lar+ve+bellek+birimleri+dijital' },
      ],
    },
    6: {
      description: `Bilgisayarların negatif sayıları ifade etmek için kullandığı 2'ye Tümleyen (2's Complement) aritmetiği ve kesirli sayıların Kayan Nokta (Floating Point IEEE 754) gösterimi öğrenilir. Ondalıklı bir veriyle çalışırken (örneğin GPS koordinatları veya finansal bakiye) bilgisayarın neden yuvarlama hataları (Precision Loss) yapabileceği bu donanım standartlarıyla kanıtlanır. Çıkarma işleminin aslında donanımda bir toplama işlemi gibi yapılarak işlemcinin ALU (Aritmetik Lojik Birim) devresinden nasıl tasarruf ettiği kavranır. Veri biliminde ve GPU modellemelerinde kullanılan Tensor tiplerinin bit seviyesindeki sınırlarını anlamak için şarttır. Dijital zekanın soyut matematiği kısıtlı belleğe sığdırma yöntemidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ikiyee+t%C3%BCmleyen+ve+kayan+nokta+g%C3%B6sterimi+ieee+754' },
      ],
    },
    7: {
      description: `BCD (Binary Coded Decimal), Gray Kodu gibi özel veri gösterim formatları ile ağ iletişiminde verinin bozulmasını tespit eden Eşlik Biti (Parity) gibi hata bulma kodları işlenir. Gray kodu, ardışık geçişlerde sadece tek bir bitin değişmesini sağlayarak sensör hatalarını ve robotik konum okuyucu (Encoder) sapmalarını engelleyen harika bir algoritmadır. Ağ üzerinden akan paketlerin donanım seviyesinde daha ilk girdiği portta doğru olup olmadığının test edilmesi ağ güvenliğinin ve bütünlüğünün (Integrity) parçasıdır. Geleneksel Binary sistemin zayıf noktalarını kapatarak donanım ile dış dünya iletişimini hatasızlaştıran stratejilerdir. Verinin kimliğini ve güvenliğini doğrulayan kodlama standartlarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/digital_circuits/digital_circuits_codes.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=gray+kodu+bcd+ve+hata+bulma+kodlar%C4%B1' },
      ],
    },
    8: {
      description: `İşlemci içerisindeki mikro-işlemleri tasvir etmek için kullanılan Yazaç Aktarım Dili (RTL - Register Transfer Language) ve Veri Yolu (Bus) mimarisi öğrenilir. Bir değişkenin değerini RAM'den işlemci içine almanın (Fetch) veya işlemciden belleğe yazmanın (Store) donanım üzerindeki eşzamanlı senkronizasyonu bu dil ile modellenir. Ortak Veri Yolu sayesinde binlerce kablo çekmek yerine sadece bir ana hat üzerinden tüm donanım modüllerinin kontrollü iletişim kurması (Multiplexing) sağlanır. Yüksek seviyeli dillerde (Python, C#) yazılan tek bir atama işleminin (\`x = y + 1\`), mikro-zaman dilimlerinde hangi yazaçlardan geçtiğini mikroskobik olarak gösterir. Merkezi işlem biriminin veri trafik ağı haritasıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-of-register-transfer/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaza%C3%A7+aktar%C4%B1m+dili+rtl+ve+veri+yolu' },
      ],
    },
    9: {
      description: `İşlemcinin beyni olan ALU'nun (Aritmetik Lojik Birim) toplama, bitsel kaydırma, AND, XOR gibi donanımsal operasyonları nasıl milisaniyeler içinde tek bir saat vuruşunda (Clock Cycle) yaptığı incelenir. Kriptografi (şifreleme) algoritmalarında kullanılan XOR veya bitsel kaydırma (Shift/Rotate) işlemlerinin yazılımdan ziyade donanım seviyesinde neden çok daha hızlı ve verimli olduğu ispatlanır. Mikro seviyedeki bu basit işlemler birleşerek modern uygulamaların devasa matematiksel matris analizlerini veya görüntü işlemelerini oluşturur. CPU'nun en temel talimat setini (Instruction Set) anlayarak assembly diline ve performans optimizasyonuna zemin hazırlanır. Bilgisayarın dijital kaslarının çalışma mekanizmasıdır.
http://googleusercontent.com/image_content/1034`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_logical_organization/arithmetic_microoperations.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=aritmetik+ve+mant%C4%B1ksal+mikro+i%C5%9Flemler+alu' },
      ],
    },
    10: {
      description: `Bir program komutunun (Instruction) işlemci tarafından anlaşılabilmesi için OpCode (Operasyon Kodu), adres ve mod bitleri gibi bölümlere nasıl ayrıldığı çözümlenir. Program Sayacı (PC), Komut Yazacı (IR) ve Akümülatör (AC) gibi CPU'nun en kritik bileşenlerinin kod çalıştırırken üstlendiği yönetimsel roller analiz edilir. Derleyicilerin (Compilers) yüksek seviyeli kodunuzu nasıl bu spesifik donanım buyruklarına çevirdiğini anlamak, bellek optimizasyonu (Cache hit/miss) yapabilen efsanevi yazılımlar üretmeyi sağlar. Otonom cihazlar (IoT) için özel işlemci yongaları tasarlamak isteyen mühendisler için vazgeçilmez bir mimari temeldir. Makinenin konuştuğu kelime dağarcığının (Instruction Format) donanım karşılığıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/instruction-formats-in-computer-architecture/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=buyruk+kodu+instruction+format+ve+yaza%C3%A7lar' },
      ],
    },
    11: {
      description: `Kodların doğru sırayla ve çakışmadan çalışmasını sağlayan Kontrol Birimi'nin (Control Unit) donanımsal tasarımı, zamanlama sinyalleri (T0, T1...) ile entegre edilerek işlenir. Yazılımdaki komut dizisinin mikroişlemci içinde bir orkestra gibi nasıl saat frekansına (Clock Signal) bağımlı olarak yönetildiği ve yürütüldüğü (Execute) modellenir. Donanım kilitlemeleri (Hazards) ve işlemci döngüsü (Machine Cycle) kavranarak, hızaşırtma (Overclocking) gibi uygulamaların sistemi fiziksel olarak nasıl etkilediği anlaşılır. Yazılım talimatının, kontrol devresindeki fiziksel kapıları açıp kapatan bir dizi sinyale dönüşme sanatıdır. Sistemin kalbinin ve beyninin eşzamanlı orkestrasyonudur.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/computer-organization-timing-and-control/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+mimarisi+zamanlama+ve+denetim+birimi' },
      ],
    },
    12: {
      description: `Bir yazılım satırının hafızadan alınması (Fetch), çözümlenmesi (Decode) ve uygulanması (Execute) sürecini kapsayan efsanevi Makine Döngüsü detaylıca pratik edilir. Doğrudan (Direct), Dolaylı (Indirect) veya Kaydedici (Register) adresleme modlarının, bellekteki veriye ulaşım hızlarını ve RAM tüketimlerini nasıl değiştirdiği analiz edilir. Dizileri (Arrays) veya Pointer'ları döngü içerisinde çağırırken donanımın arka planda fazladan kaç bellek döngüsü harcadığı görülerek performans odaklı kod yazma bilinci aşılanır. Makine dilinin çalışma algoritmasını kavrayarak yazılımın alt katmanındaki fiziksel yansımaları tecrübe edilir. Veriyi nerede bulacağını ve ne yapacağını bilmenin donanımsal rehberidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_logical_organization/instruction_cycle.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=buyruk+d%C3%B6ng%C3%BCs%C3%BC+fetch+decode+execute+adresleme+modlar%C4%B1' },
      ],
    },
    13: {
      description: `Ağ kartından (NIC) veya klavyeden gelen verilerin asenkron olarak işlemciye bildirilmesi işlemi olan Donanım Kesmeleri (Interrupts) öğrenilir. İşlemcinin sürekli "Veri geldi mi?" diye dış dünyayı kontrol etmesi (Polling) yerine, gelen verinin işlemciyi uyararak (Interrupt) sistem verimliliğini (Efficiency) ve tepki hızını nasıl zirveye çıkardığı modellenir. İşletim sistemlerinde ve gerçek zamanlı IoT yazılımlarında çoklu görevleri (Multitasking) ve acil tepkileri yönetmenin en temel donanımsal mekanizmasıdır. Temel bilgisayar mimarisinin tüm modülleri bir araya getirilerek eksiksiz bir veri işleme döngüsü (Data Path) tanımlanır. Dış dünyanın rastgeleliğini, bilgisayarın deterministik sistemine dahil etme yöntemidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/interrupts/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=giri%C5%9F+%C3%A7%C4%B1k%C4%B1%C5%9F+kesmeleri+interrupts+bilgisayar+mimarisi' },
      ],
    },
    14: {
      description: `Tüm dönem boyunca öğrenilen kapılar, yazaçlar, bellek, ALU ve kontrol birimi birleştirilerek sıfırdan kendi ilkel mikroişlemcinizi (CPU) mantıksal olarak tasarlama aşamasına geçilir. Bir bilgisayar mühendisi olarak, yazılımın donanımı değil, donanımın kodların ihtiyacına göre belirli kısıtlar altında nasıl özel dizayn (ASIC/FPGA Design) edildiğini kavrarsınız. Sadece yüksek seviyeli dillerde (C#, Java) yazılımlar üretmenin ötesine geçerek, bir gün kendi akıllı sensör mimarinizi veya şifreleme donanımınızı kurabilecek teorik vizyona ulaşırsınız. Mantık kapılarından başlayan bu yolculuk, "Bir bilgisayar aslında nasıl inşa edilir?" sorusunun yanıtıyla ihtişamlı bir şekilde sonlanır. Kendi işlemcisini tasarlayabilecek yetkinliğin kağıt üzerindeki kanıtıdır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/basic-computer-instructions/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=temel+bilgisayar+tasar%C4%B1m%C4%B1+ve+i%C5%9Flemci+mimarisi' },
      ],
    },
  },
  'LMİ104 Mesleki İngilizce II': {
    1: {
      description: `Mühendislik projelerinde fikirlerin dökümante edildiği teknik çizimler, sistem taslakları (schematics) ve tasarım geliştirme aşamalarının İngilizce terminolojisi öğrenilir. Nesnelerin İnterneti (IoT) cihazları için donanım kutuları (enclosures) veya sunucu odası raf tasarımları (Server Rack Layouts) yaparken CAD programlarında karşılaşacağınız terimlerdir. Fikirden (Concept) ürüne (Prototype) uzanan bir projenin gelişim sürecini yabancı bir donanım ekibine veya yatırımcıya İngilizce olarak sunma (Pitching) yeteneği geliştirilir. Karmaşık fikirleri uluslararası standartlardaki şemalar ve doğru terimlerle anlatarak yanlış üretimlerin (manufacturing defects) önüne geçme iletişimidir. Görsel mühendislik tasarımlarının sözlü formata dönüştürülmesi pratiğidir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=engineering+drawing+and+design+development+vocabulary' },
      ],
    },
    2: {
      description: `Bir teknik probleme karşı geliştirilen çözüm önerilerinin (Design Solutions) ve yatay/dikey boyutsal ölçüm konseptlerinin İngilizce ifade edilmesi işlenir. Donanım entegrasyonu gerektiren projelerde devre kartlarının (PCB) kasa içerisine yerleşimi veya antenlerin konumlandırma kısıtlarını tartışırken kullanılacak boyutsal İngilizce kalıplarıdır. Sunucu kabinlerinin ebatları ve veri merkezi altyapı projelerindeki (Data Center Floorplans) dikey ve yatay ölçüm standartlarını anlatma pratiği yapılır. Alternatif çözüm mimarilerini kıyaslarken (Comparative analysis) "daha kompakt", "genişletilebilir" (scalable) gibi teknik tasarım sıfatları dağarcığa eklenir. Proje parametrelerini hatasız bir şekilde küresel ekiplerle senkronize etmenin yoludur.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=explaining+design+solutions+and+measurements+english' },
      ],
    },
    3: {
      description: `Sahada sistem kurulumu (Deployment), ekipman konumlandırma (Locating) ve dairesel/silindirik ölçülerin (çap, yarıçap, çevre) İngilizce teknik kullanımı incelenir. Yönlü Wi-Fi antenlerinin veya LiDAR/Radar sensörlerinin otonom sistemler üzerindeki dairesel tarama açılarını (Field of View) İngilizce dokümanlardan okuyup konfigüre etmek için gereklidir. Akıllı şehir (Smart City) projelerinde IoT sensörlerinin coğrafi koordinatlara ve mekanlara yerleştirilme (setting out) yönergelerini anlatan prosedürel dildir. Geometri ve lokasyon tabanlı kavramların, teknik kılavuzlarda (Installation Manuals) nasıl emir kipleriyle (Imperatives) kullanıldığı pratik edilir. Fiziksel donanımları doğru konumlara yerleştirme talimatlarının evrensel dilidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=engineering+english+geometry+and+locating' },
      ],
    },
    4: {
      description: `Toleranslar, boyutsal kesinlik (Accuracy vs Precision) ve ileri düzey matematiksel/istatistiksel hesaplamaların İngilizce olarak tartışılması üzerine odaklanılır. Algoritmaların hata paylarını (Error margins), işlemci saat hızlarındaki sapmaları veya veri modeli tahminlerindeki kesinlik oranlarını (Accuracy Rate) yabancı ekiplere raporlarken kullanılır. Kesirlerin, ondalık sayıların, üslü ifadelerin ve denklemlerin (Equations) İngilizce sunumlarda profesyonel bir aksan ve güvenle nasıl okunacağı çalışılır. Geliştirilen bir sensörün ölçüm sapmalarını ve kalibrasyon ihtiyaçlarını dökümante ederken gereken sıkı (strict) mühendislik iletişim standartları oturtulur. Rakamların ve formüllerin uluslararası iletişimde sese dönüşmesidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=accuracy+precision+and+calculations+vocabulary+engineering' },
      ],
    },
    5: {
      description: `Alan, hacim, kütle, ağırlık gibi temel ölçülebilir fiziksel parametrelerin teknik metinlerde ve datasheet (veri föyü) okumalarında nasıl yorumlanacağı öğrenilir. Veri merkezlerindeki sunucuların ağırlık limitlerini (Mass), kapladıkları alanları (Area/Footprint) veya IoT cihazların taşınabilirlik sınırlarını (Size/Form factor) anlatan metinleri tarama hızı artırılır. Parametrik (ölçülebilir) gereksinimleri (Requirements) yazarken "Maximum weight shall not exceed..." gibi hukuki ve teknik bağlayıcılığı olan İngilizce kalıpları kurgulama pratiği yapılır. Donanımın fiziksel kısıtlamalarını yazılım ekipleriyle paylaşırken kullanılan ortak fiziksel betimleme jargonu aşılanır. Fiziksel dünyayı metriklerle ifade etmenin dilidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=engineering+english+measurements+area+mass' },
      ],
    },
    6: {
      description: `Mühendislik malzemelerinin genel sınıflandırması ve özellikle endüstrinin omurgası olan çeliğin (Steel) fiziksel özelliklerini anlatan İngilizce metinler incelenir. Dış ortamda çalışacak IoT sensör cihazlarının (Örn: tarım otomasyonu) dış kasalarının paslanmaz çelikten üretilmesi gerektiğini savunan (argumentative) tasarım raporları yazmayı öğretir. Mukavemet (Strength), korozyon direnci, çekme gibi materyal özelliklerini ifade eden sıfatlar, donanım mühendisliğiyle (Hardware Engineering) ortak çalışırken ufkunuzu genişletir. Malzeme bilimindeki teknik İngilizce okumaları, disiplinlerarası (Cross-disciplinary) projelerde yabancılık çekmemeniz için size kavramsal bir köprü sunar. Donanımın kalitesini belirleyen materyal diline giriştir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=materials+engineering+vocabulary+steel+properties' },
      ],
    },
    7: {
      description: `Demir dışı metaller (Alüminyum, Bakır) ve modern polimerlerin (Plastik, Silikon) yalıtkanlık/iletkenlik özelliklerini kapsayan sektörel terminoloji öğrenilir. Bilgisayar anakartlarındaki bakır yolların iletkenliği veya işlemcilerin soğutulmasında kullanılan alüminyum soğutucuların (Heatsink) termal özelliklerini (Thermal Conductivity) anlatan yabancı kaynakları anlamanızı sağlar. Giyilebilir teknolojilerin (Smartwatches) veya hafif IoT cihazların kasalarında neden polimer malzemeler kullanıldığını müşteriye İngilizce olarak rasyonalize etme (Justifying) pratiğidir. Elektronik ve bilgisayar donanımlarının üretim metinlerinde sıklıkla karşılaşacağınız materyal özelliklerine dair kelime dağarcığı oluşturulur. Modern elektronikte kullanılan hafif ve esnek malzemelerin jargonu aşılanır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=polymers+and+metals+vocabulary+engineering' },
      ],
    },
    8: {
      description: `Yarı iletken endüstrisinin temeli olan mineraller (Silisyum) ve yalıtım teknolojilerinde kullanılan seramik/beton gibi yapısal materyaller üzerine okumalar yapılır. İşlemcilerin (CPU/GPU) üretiminde kullanılan silikon levhaların (Wafers) mineral kökenlerini anlatan İngilizce belgesel ve teknik üretim makalelerinin (Manufacturing Papers) diline aşinalık kazanılır. Seramik malzemelerin yüksek ısı yalıtımı veya baz istasyonlarındaki radyo frekans (RF) geçirgenliği özelliklerini anlatan donanım makaleleri (Whitepapers) taranarak okuduğunu anlama (Reading Comprehension) geliştirilir. Temel bilgisayar mühendisliği kavramlarının çok daha derin fiziksel ve kimyasal kökenlerinin İngilizce anlatımlarıdır. Teknolojinin hammaddelerine dair evrensel tartışma vizyonudur.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=engineering+materials+ceramics+and+minerals' },
      ],
    },
    9: {
      description: `Mühendislik çizimleri, fiziksel boyutlandırmalar ve materyal özelliklerine (Metal, Polimer vb.) dair öğrenilen spesifik terminolojinin kağıt üzerinde ölçüldüğü ara sınavdır. Bir yazılım mühendisi adayının kendi alanı dışındaki (donanım/mekanik) uluslararası teknik belgeleri, datasheetleri ve proje tasarım dökümanlarını ne kadar doğru anladığı (Comprehension) test edilir. Çeviri yaparken teknik bağlamın (Context) dışına çıkmadan kelimelere en uygun mühendislik anlamını (örneğin "stress" kelimesini baskı/gerilim olarak) atayabilme yetkinliği kontrol edilir. Çok disiplinli uluslararası projelerde iletişim kopukluklarını önleyecek dil temelinin sağlamlık onayıdır. İngilizce kavram haritasının ara kalite testidir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Ahşap ve diğer temel malzemelerin esneklik, sertlik (Hardness), dayanıklılık (Durability) gibi mekanik özelliklerinin İngilizce olarak nasıl detaylandırıldığı öğrenilir. Yazılım sistemlerinin veya ağ mimarilerinin "esnekliği" (Flexibility) ve "dayanıklılığı" (Robustness/Resilience) gibi soyut bilgisayar kavramlarını anlatırken, malzeme biliminden alınan bu somut metaforik sıfatlar sıkça kullanılır. Kalite güvence (Quality Assurance) süreçlerini veya donanım test sonuçlarını (Örn: Darbe testleri) raporlarken ihtiyaç duyacağınız "Kırılganlık", "Aşınma direnci" gibi tanımlayıcı kelime grupları (Collocations) işlenir. Farklı sektörlerin özelliklerini kendi alanınızla bağdaştırarak zengin ve edebi bir teknik dil oluşturma adımıdır. Parametreleri kıyaslama ve derecelendirme pratikleridir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=material+properties+vocabulary+engineering' },
      ],
    },
    11: {
      description: `İleri seviye termal (Isıl) özellikler, termodinamik kelime dağarcığı ve malzemelerin işlenme/şekillendirme süreçlerini (Manufacturing Processes) anlatan metinlere odaklanılır. Veri merkezlerindeki (Data Centers) devasa sunucuların ısıl yayılımını (Heat Dissipation), soğutma algoritmalarını ve termal darboğazları (Thermal Throttling) yabancı sistem mühendisleriyle tartışırken bu kelimeler hayat kurtarır. Bir donanım parçasının üretim bandındaki döküm, frezeleme veya ısıtma-soğutma evrelerini anlatan teknik bültenleri (Tech Bulletins) okuyup özet çıkarma (Summarizing) yeteneği geliştirilir. Donanım ve yazılımın sıcaklıkla olan o bitmez tükenmez savaşını İngilizce dokümanlardan takip edebilmenin altyapısı atılır. Fiziksel sınırların ve termodinamiğin teknik İngilizcesidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=heat+treatment+and+forming+processes+vocabulary' },
      ],
    },
    12: {
      description: `Malzemelerin standart formları (Levha, Tel, Profil vb.) ve 3 Boyutlu bilgisayar destekli tasarım (CAD/3D Component) özelliklerinin terminolojisi incelenir. İleride 3B Yazıcılarla (3D Printers) basılacak bir IoT prototipinin veya drone kasasının katı modelleme özelliklerini, İngilizce olarak mekanik tasarımcılara aktarma (Coordination) pratiğidir. "Extrude", "Chamfer", "Mesh" gibi bilgisayar grafikleri (Computer Graphics) ve oyun motoru tasarımcılarının (Unity/Unreal) da çok sık kullandığı arayüz diline aşinalık kazanılır. Dijital modellerdeki hacimsel özellikleri ve montaj yüzeylerini detaylı İngilizce yönergelerle (Instructions) tarif etme becerisi aşılanır. Geometrik özelliklerin yazılımlardaki fonksiyonel dille birleşimidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/vocabulary-games' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=3d+modeling+and+cad+vocabulary+english' },
      ],
    },
    13: {
      description: `Talaşlı imalat, CNC makineleri ve robotik üretim (Robotic Machining) süreçlerindeki otomasyon komutlarını ve cihaz aksamlarını anlatan endüstriyel metinler okunur. Endüstri 4.0 ve Akıllı Fabrikalar (Smart Factories) üzerine yazılımlar (IoT Backend) geliştirirken, programladığınız robotik kolların veya CNC tezgahlarının jargonunu bilmeniz makine mühendisleriyle entegrasyonunuzu sağlar. Otonom üretim süreçlerindeki hata raporlarını (Error Logs) ve bakım talimatlarını (Maintenance Guides) okuyarak operasyonel İngilizce anlama hızınız (Scanning) maksimize edilir. Yazılım algoritmalarının, fiziksel dünyada metali nasıl milimetrik olarak kestiğini anlatan ileri düzey makine jargonu (Machinery Jargon) edinilir. Donanımı yöneten endüstriyel otomasyon dilidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/reading' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machining+and+manufacturing+vocabulary+english' },
      ],
    },
    14: {
      description: `Bileşenlerin birbirine bağlanması, ağ kurulumları (Interconnection) ve vidalama, perçinleme gibi mekanik bağlayıcıların terminolojisiyle dönem tamamlanır. Birbirinden bağımsız çalışan yazılım modüllerinin API'ler ile "birbirine bağlanması" (Interconnected systems) mantığını, fiziksel bileşenlerin montajında kullanılan birleştirme fiilleriyle (Attach, Bind, Fasten) metaforik olarak bağdaştırabilirsiniz. Farklı donanım bileşenlerinin ağ veya soketler üzerinden nasıl haberleştiğini, arayüz dokümanlarındaki (Interface Control Documents) sıkı kuralları okuyarak profesyonel iletişimde sıfır hata prensibi geliştirilir. Mühendislik İngilizcesinin sadece kelime bilmek değil, disiplinler arası köprüler (Interdisciplinary communication) kurarak takım halinde devasa projeler yönetebilme vizyonuyla eğitim noktalanır. Sistemleri (Yazılım, Ağ ve Donanım) İngilizce olarak tek bir vücut halinde kurgulama sanatıdır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fasteners+and+assembly+vocabulary+engineering' },
      ],
    },
  },
  'BMB317 Otomata Teorisi': {
    1: {
      description: `Bilgisayar biliminin felsefesi olan, makinenin neyi hesaplayıp neyi hesaplayamayacağını inceleyen teorik hesaplama (Computability) mantığına giriş yapılır. Soyut matematiksel makinelerin (Otomata) tasarım ilkeleri, karmaşık yazılımların algoritmik tasarımlarından önce "Bu problem makine tarafından çözülebilir mi?" sorusunu sormayı öğretir. Donanım ve mimariden (RAM, CPU) tamamen bağımsız olarak, sadece zihindeki mantıksal sistemin kendi sınırlarını kavramak, iyi bir yazılım mimarı olmanın ilk şartıdır. Sistemlerin girdilere göre durum değiştirmesi (State transition) mantığıyla, durum makinelerine (State Machines) güçlü bir teorik temel atılır. Kod satırlarının arkasında yatan mutlak matematiksel gerçekliklerin dünyasıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=otomata+teorisine+giri%C5%9F' },
      ],
    },
    2: {
      description: `Semboller, alfabeler (Alphabets), dizgiler (Strings) ve dillerin (Formal Languages) matematiksel küme mantığıyla ifade edildiği formal tanımlar öğrenilir. İleride derleyici (Compiler) veya veri ayrıştırıcı (Parser) yazdığınızda, makinenin kaynak kodunuzu aslında basit sembol dizileri (strings) olarak okuduğunu anlamanızı sağlar. Yazılım dilinin kendi sentaksını (Söz Dizimi) tanımlayan evrensel matematiksel notasyonlar kavranarak, rastgele karakter dizilerinden kurallı ifadelere (Syntax) geçişin kuralları çizilir. Bilgisayarın anlamlandırdığı dünyayı, kelimeler yerine matematik kümeleriyle modelleme disiplinidir. İletişimi dijital formatta modellemenin alfabesidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-to-formal-languages-and-automata-theory/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=otomata+teorisi+alfabe+dizgi+ve+diller' },
      ],
    },
    3: {
      description: `Her girdi için sadece tek bir kesin sonraki durumun (State) olduğu, hafızası (Stack/RAM) olmayan en ilkel bilgisayar modelleri (DFA) tasarlanır. Otomat ve sensörlerin (Örn: Otomatik kapılar, kahve makineleri, asansörler) yazılımlarındaki "State Machine" tasarımları doğrudan bu mantıkla, her senaryo için hatasız (deterministik) kurgulanır. İstenilen şablonu (Pattern) arayan veya şifre kurallarını (Örn: İçinde en az bir rakam var mı?) doğrulayan sistemler tasarlayarak bellek kullanmadan karar alma mekanizmaları yaratılır. Belirsizliğin olmadığı, sonucun adım adım ispatlanabildiği sarsılmaz sistem tasarım mimarilerinin çekirdeğidir. Mantık yollarının kusursuz haritası çizilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/deterministic_finite_automaton.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=deterministik+sonlu+otomata+dfa' },
      ],
    },
    4: {
      description: `Aynı girdi için birden fazla farklı duruma gidebilen, hatta girdi almadan ($\\epsilon$-geçişleri) durum değiştirebilen belirsiz makineler (NFA) öğrenilir. Paralel hesaplama (Parallel Computing) ve kuantum bilgisayarların olasılıksal doğasını andıran bu yapı, çözülmesi zor problemleri tasarlamayı olağanüstü derecede kolaylaştırır. Bir sistem ağında (Network) verinin birden fazla rotaya çatallandığı (fork) senaryoları algoritmik olarak modellemeye yarayan teorik bir tasarım aracıdır. Makinenin tüm olası yolları aynı anda deneyip doğru olanı "sihirli bir şekilde" bulması mantığı, arama algoritmalarında geri dönüşlü (Backtracking) mantıklara ilham verir. Kural esnekliğinin tasarım hızına olan muazzam katkısıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/non_deterministic_finite_automaton.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nondeterministik+sonlu+otomata+nfa' },
      ],
    },
    5: {
      description: `Tasarımı çok kolay olan NFA'lerin, fiziksel olarak kodlanabilir ve deterministik olan eşdeğer DFA'lere adım adım nasıl dönüştürüleceği algoritmaları pratik edilir. Tasarım kolaylığı ile donanım uygulanabilirliği (Trade-off) arasındaki mühendislik farkını mükemmel bir şekilde gösteren, karmaşıklığı ehlileştirme (Simplification) operasyonudur. Yazılımdaki yüksek soyutlama seviyesindeki (High-level) esnek kodların, derleyici (Compiler) tarafından katı ve kesin (Deterministik) makine kodlarına çevrilme sürecinin mantıksal provasıdır. Her belirsiz sistemin aslında devasa bir kesin sistem olarak kurgulanabileceğini ispatlayan "Alt Küme Oluşturma" (Subset Construction) algoritması kavranır. Teorinin gerçekliğe dönüştürülme matematiğidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/conversion-from-nfa-to-dfa/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nfa+den+dfa+ye+d%C3%B6n%C3%BC%C5%9F%C3%BCm' },
      ],
    },
    6: {
      description: `Sadece string (dizgi) kabul edip reddetmenin ötesine geçerek, girdi aldığında veya durum değiştirdiğinde dışarıya anlamlı bir çıktı (Output) üreten donanımsal mantık makineleri işlenir. Dijital elektronik ve donanım tasarımı derslerindeki (Mantık Devreleri) ardışık devrelerin, yazılım (Automata) dünyasındaki tam teorik eşdeğerleridir. Gelen veriyi (Örn: Barkod okuyucudan gelen bitler) şifrelemek, sıkıştırmak veya bambaşka bir veri dizisine anlık (Real-time) çevirmek için bu makineler kodlanır. Hangi sistemin çıktıları daha hızlı ürettiği (Mealy) veya hangisinin daha güvenli izole ettiği (Moore) kıyaslanarak tasarım seçimleri (Design Choices) tartışılır. Girdi ve çıktının senkronize dansıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/moore_and_mealy_machines.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mealy+ve+moore+makineleri' },
      ],
    },
    7: {
      description: `Düzenli (Regular) dilleri tanımlayan en kısa ve evrensel sözdizimi aracı olan Düzenli İfadeler (Regular Expressions - Regex) ile örüntü eşleştirme (Pattern Matching) öğretilir. Web formlarındaki E-posta doğrulamaları, siber güvenlikte zararlı kod (Malware) imzası arama veya devasa veritabanı loglarından (Big Data) spesifik bilgi ayıklama işlemleri tamamen Regex ile saniyeler içinde yapılır. Yazılım dillerinden (Python, Java, PHP) bağımsız olarak tüm dünyada ortak olan bu metin arama matematiği, arka uç (Backend) geliştiricilerinin en keskin silahıdır. Karmaşık metin kurallarını DFA ve NFA mimarileriyle eşleştirerek teorinin koda dönüştüğü an yaşanır. Verinin içindeki iğneyi bulmanın sihirli formülüdür.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/regular-expressions-regular-grammar-and-regular-languages/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=d%C3%BCzenli+ifadeler+regular+expressions+otomata' },
      ],
    },
    8: {
      description: `Hafızası olmayan otomataların (DFA/NFA) çözemediği (Örneğin açılan parantez kadar kapanan parantez eşleştirmesi) sorunları çözen Bağlamdan Bağımsız Gramerler (CFG) öğrenilir. Günümüzde kullandığımız tüm popüler programlama dillerinin (C#, Python, Java) syntax kuralları (Örn: if-else blokları, döngü sınırları) bu gramer kurallarıyla tanımlanır. Kodunuzdaki "Syntax Error" hatalarını derleyicinin (Compiler) nasıl tespit edip size bildirdiğinin arkasındaki Ağaç Yapısı (Parse Tree) haritalaması incelenir. Dillerin hiyerarşisinde bir üst boyuta geçilerek, sınırsız döngüleri ve eşleştirmeleri modelleyebilen matematiksel kurgular üretilir. Yazılımın kendi dilbilgisinin teorik anayasasıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/context_free_grammar_introduction.htm' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ba%C4%9Flamdan+ba%C4%9F%C4%B1ms%C4%B1z+diller+cfg+otomata' },
      ],
    },
    9: {
      description: `Deterministik sistemler, NFA dönüşümleri, Regex yazımı ve formal dillerin gramer analizlerinin teorik olarak kağıt üzerinde sınandığı değerlendirmedir. Öğrencinin "her problemin çözülebilmesi için gereken minimum makine kapasitesini" (state minimization) tasarlayabilme zekası ve analitik ispat yeteneği ölçülür. Rastgele görünen veri dizilerini düzenli ifadelere (Regex) indirgeme ve örüntü yakalama pratiklerindeki kusursuzluk aranır. Stack (Yığın) kullanan ve sonsuz hafızası olan daha ileri düzey soyut makinelere geçmeden önce algoritmik temellerin sağlamlık testidir. Bilgisayar bilimcisinin soyut düşünce seviyesinin ara kalite kontrolüdür.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `DFA sistemlerine sonsuz kapasiteli bir Yığın (Stack - LIFO) belleği eklenerek elde edilen ve bağlamdan bağımsız dilleri işleyebilen PDA (Yığıtlı Otomata) makineleri tasarlanır. Derleyicilerin (Compiler) kodunuzdaki açılan parantezleri veya XML/HTML etiketlerini belleğe atarak eşleşmeyen bir kapatma etiketi geldiğinde hata vermesinin (Syntax Checking) arkasındaki ana mimaridir. Özyinelemeli (Recursive) fonksiyon çağrılarının işletim sistemi düzeyinde yığın (Call Stack) kullanılarak nasıl takip edildiğinin teorik olarak modellenmesidir. Hafıza ve geçmişi hatırlama konseptinin makineye donanımsal değil, mantıksal olarak eklendiği bir devrimdir. Bellek ve mantığın birleşiminden doğan ileri seviye hesaplama aracıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/pushdown_automata_introduction.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=pushdown+otomata+pda+nedir' },
      ],
    },
    11: {
      description: `Modern bilgisayarların (CPU + RAM) teorik modeli olan, sonsuz bir şerit (Tape) üzerinde okuma/yazma kafası (Head) ile hareket eden efsanevi Alan Turing'in makinesi öğrenilir. Dünyada yazılmış ve gelecekte yazılacak tüm algoritmaların sınırını belirleyen bu makinenin yapabildiği her şey, bugünün süper bilgisayarlarının (Turing Completeness) yapabileceği tek şeydir. Sonsuz hafızaya çift yönlü erişim yeteneği sayesinde daha önceki makinaların (DFA, PDA) çözemediği karmaşık matematiksel operasyonların mantıksal olarak çözülebilirliği ispatlanır. Programlama dillerinin gücünün donanımdan değil, bu evrensel modelden geldiği gerçeğiyle büyüleyici bir ufuk açılır. Bilgisayar bilimini başlatan teorik devrimin ta kendisidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/turing-machine-in-toc/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=turing+makinesi+nas%C4%B1l+%C3%A7al%C4%B1%C5%9F%C4%B1r+otomata' },
      ],
    },
    12: {
      description: `Turing makinesi üzerinde toplama, çıkarma, kopyalama veya palindrom kontrolü gibi temel operasyonları gerçekleştiren durum tabloları (State Transitions) adım adım kodlanır. Makine dilinden (Assembly) bile daha alt seviyede, sadece sağa/sola git ve yaz/sil komutlarıyla evrensel zekanın nasıl kurgulandığı gösterilerek algoritmik sabır geliştirilir. Herhangi bir bilgisayar programının (Python, Java vs.) arka planda tamamen bu Turing mantığına indirgenebileceği (Evrensel Turing Makinesi) vizyonu uygulamalarla kanıtlanır. Sistemin ne zaman duracağına (Accept/Reject) veya sonsuz döngüye gireceğine karar veren iç mekanizmalar tasarlanır. Bilişimin atomik seviyesindeki hesaplama örnekleridir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/turing_machine_introduction.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=turing+makinesi+%C3%B6rnekleri+%C3%A7%C3%B6z%C3%BCml%C3%BC' },
      ],
    },
    13: {
      description: `Dilleri ve bu dilleri tanıyan makineleri kapsama alanlarına göre sınıflandıran, dilbilimci Noam Chomsky'nin (Tip 0'dan Tip 3'e) meşhur hiyerarşisi incelenir. Düzenli dillerin (Regex) en altta, Turing makinesinin işlediği dillerin en üstte olduğu bu yapı, "Hangi problemi çözmek için ne kadar güçlü bir mimariye ihtiyacım var?" sorusuna kesin cevap verir. İşletim sistemi veya veritabanı ayrıştırıcıları (Parsers) tasarlarken, problemi gereksiz yere ağır (Turing Complete) bir teknolojiyle çözmekten kaçınıp sistem optimizasyonu yapma mühendisliği öğretilir. Doğal dillerin (İnsan Dili - NLP) ve yapay dillerin aynı matematiksel kurallarla nasıl kuşatıldığı keşfedilir. Yazılım evreninin sınırlarını çizen büyük resimdir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/automata_theory/chomsky_classification_of_grammars.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=chomsky+hiyerar%C5%9Fisi+otomata+teorisi' },
      ],
    },
    14: {
      description: `"Durma Problemi" (Halting Problem), Hesaplanabilirlik (Computability) ve P vs NP (Polinom zamanlı çözülebilirlik) gibi bilgisayar biliminin çözülememiş en derin felsefi sorunları tartışılarak dönem sonlandırılır. Dünyadaki en güçlü süper bilgisayarların bile sonsuz sürede çözemeyeceği problemlerin (Undecidable Problems) matematiksel olarak ispatlanmasıyla algoritmaların limitleri belirlenir. Şifreleme sistemlerinin (Kriptografi) ve optimizasyon problemlerinin güvenliği, henüz P=NP olup olmadığının bilinmemesi sırrına dayandığı gerçeği analiz edilir. Bir problemi çözmeye çalışmadan önce "Acaba bu problem evrende çözülebilir mi?" vizyonuyla hareket eden entelektüel bilgisayar bilimcileri (Computer Scientists) yetişir. Bilgisayarların her şeye kadir olmadığını kanıtlayan felsefi zirvedir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/computational-complexity-in-theory-of-computation/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=hesaplama+teorisi+halting+problem+p+vs+np' },
      ],
    },
  },
  'BMB315 Web Programlama': {
    1: {
      description: `Web'i var eden HTTP/HTTPS protokolleri, TCP/UDP iletim farkları, IP/MAC adreslemesi ve Web Sunucularının (Apache, Nginx) arka plandaki yönlendirme mantıkları tanıtılır. Tarayıcıdan bir adres girildiğinde DNS üzerinden sunucunun bulunup, GET/POST isteklerinin (HTTP Request) atılarak geri dönen paketin (Response) nasıl arayüze çizildiği uçtan uca özetlenir. Ağ ve altyapı mimarisinin yazılımı nasıl ayakta tuttuğu kavranarak, sağlam ve güvenli (SFTP/HTTPS) iletişim modellerinin önemi vurgulanır. Full-Stack veya Backend geliştirici vizyonuyla, yazılan kodun istemci (Client) ve sunucu (Server) olarak ayrıldığı dağıtık uygulamanın büyük resmi görülür. İnternetin anatomisi ve iletişim protokolleri haritalandırılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=web+programlama+giri%C5%9F+http+protokolleri' },
      ],
    },
    2: {
      description: `Kullanıcının tarayıcısında (Client-Side) çalışan ve webin iskeletini, tasarımını ve dinamizmini sağlayan Front-End teknolojileri (HTML5, CSS3, JS) hızlıca hatırlatılır. Arama motoru optimizasyonu (SEO) için anlamsal (Semantic) HTML kullanmanın ve modern webin vazgeçilmezi duyarlı (Responsive) CSS tasarımlarının önemi pratiklerle gösterilir. Javascript kullanılarak, sayfa yenilenmeden kullanıcının tarayıcısında anlık matematiksel işlemler (DOM Manipülasyonu) yapma ve arka sunucunun (Backend) yükünü hafifletme stratejileri tartışılır. İstemci tarafındaki güvenlik açıklarının (XSS) farkına varılarak, asla sadece Front-End doğrulamasına (Validation) güvenilmemesi gerektiği öğretilir. Etkileşimli ve görsel arayüzlerin (UI/UX) temel inşa malzemeleridir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/html/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html+css+javascript+ile+web+tasar%C4%B1m%C4%B1' },
      ],
    },
    3: {
      description: `Sayfayı komple yenilemeden arka planda sunucuya asenkron istekler (Asynchronous Requests) atarak veri alıp göndermeyi sağlayan AJAX mimarisi ve JSON veri formatı öğrenilir. Modern Web API'lerinin evrensel dili olan JSON yapısı kullanılarak, veritabanından çekilen karmaşık veri kümelerinin arayüze nasıl en hafif (lightweight) şekilde iletildiği incelenir. jQuery gibi kütüphaneler sayesinde uzun Javascript kodlarının ne kadar kısa ve tarayıcı bağımsız (Cross-browser) hale getirilebileceği pratik edilir. E-ticaret sitelerindeki "Sepete Ekle" veya "Arama Önerileri" gibi hızlı arka plan sorgularının (Backend Fetch) kusursuz kullanıcı deneyimine (UX) katkısı gösterilir. Statik sayfalardan, yaşayan web uygulamalarına (Web Apps) geçiştir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/js/js_ajax_intro.asp' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ajax+ve+json+kullan%C4%B1m%C4%B1+web+programlama' },
      ],
    },
    4: {
      description: `JSON öncesi web servislerinin dili olan XML mimarileri (SOAP, WSDL) ile HTML5'in tarayıcıyı adeta bir işletim sistemine çeviren modern API'leri (Gelişmiş Depolama, Lokasyon, Çizim) işlenir. Bankacılık ve e-devlet (B2B/B2G) gibi eski kurumsal sistemlerle entegrasyon (Integration) yaparken SOAP ve XML standartlarını anlamak ve yönetmek zorunlu bir Backend bilgisidir. Tarayıcıda veri tutan Local Storage ve işlemleri arka planda paralel çalıştıran Web Workers gibi teknolojilerle, Çevrimdışı (Offline) çalışabilen PWA (Progressive Web App) mimarilerine vizyon açılır. Bootstrap gibi hazır framework'ler kullanılarak hızlıca mobil uyumlu (Responsive) paneller (Admin Dashboards) tasarlama pratiği yapılır. Zengin ve donanımla konuşabilen arayüzlerin ustalık sınıfıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/html5/index.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=html5+web+workers+local+storage+bootstrap' },
      ],
    },
    5: {
      description: `Modern web sektörünü domine eden, tekrar kullanılabilir bileşen (Component) mimarisine sahip Tek Sayfa Uygulaması (Single Page Application - SPA) framework'leri karşılaştırmalı olarak tanıtılır. Sayfanın tamamı yerine sadece değişen veriyi sanal ekranda (Virtual DOM) güncelleyen React ve Vue.js gibi araçların getirdiği muazzam performans artışı analiz edilir. Arka uçta (Backend) sadece JSON üreten bir API yazıp, ön yüzü (Frontend) tamamen Angular veya React'e devrederek ekiplerin nasıl bağımsız ve modüler çalıştığı (Decoupling) vizyonu kazandırılır. Durum yönetimi (State Management) felsefesiyle, karmaşık web formlarının ve veri geçişlerinin arayüzde nasıl yönetildiği tartışılır. Endüstri standardı modern front-end geliştiriciliğine geçiştir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://react.dev/learn' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=react+vs+vue+vs+angular+t%C3%BCrk%C3%A7e+anlat%C4%B1m' },
      ],
    },
    6: {
      description: `Gelen HTTP isteklerini karşılayıp, güvenlik politikalarını uygulayıp, yazılım kodunu (PHP/C#) çalıştırarak yanıt döndüren IIS, Apache ve Nginx web sunucularının mimarileri işlenir. Sunucuların ters vekil (Reverse Proxy) olarak kullanılması ve gelen milyonlarca isteği arka plandaki mikroservislere dağıtan (Yük Dengeleme - Load Balancing) ağ mimarisi kurgulanır. Hangi sunucunun (Örn: Nginx'in Event-driven yapısı) asenkron bağlantılarda daha yüksek performans (Concurrency) sağladığı mühendislik analizleriyle karşılaştırılır. Yazılımınızın dünyayla bağlantı kurduğu ilk kapı olan sunucuların (Server) yapılandırma ayarlarını (Configuration) ve SSL/HTTPS sertifika yönetimlerini bilmek öğretilir. Web altyapısının fiziksel ve donanımsal yönetim (DevOps) aşamasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/internet_technologies/web_servers.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=web+sunucular%C4%B1+apache+iis+nginx+kurulumu' },
      ],
    },
    7: {
      description: `Web dünyasının en köklü ve yaygın arka uç (Backend) betik dillerinden olan PHP'nin temel sözdizimi, döngüleri ve yaşam döngüsü öğrenilir. \`$_GET\`, \`$_POST\`, \`$_SERVER\` gibi süper küresel (Super Globals) dizilerle formlardan veya URL üzerinden gelen kullanıcı isteklerinin (Request) sunucuda nasıl yakalandığı analiz edilir. İstemci tarafında (JS) manipüle edilebilecek olan verilerin, sunucuya ulaştığında asla güvenilmeden temizlenmesi ve denetlenmesi gerektiği (Sanitization) güvenlik felsefesi aşılanır. Her kullanıcının isteğinin sunucuda ayrı bir işlem (Process) olarak nasıl başlatılıp sonlandığı mimari olarak incelenir. Dinamik sayfa oluşturmanın sunucu taraflı ilk adımlarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/php/php_superglobals.asp' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=php+dersleri+de%C4%9Fi%C5%9Fkenler+ve+super+globals' },
      ],
    },
    8: {
      description: `İstemci tarafı (HTML, CSS, JS, JSON), asenkron yapıların mantığı (AJAX) ve sunucu tarafına giriş (Web Sunucuları, Temel PHP) konularının kodlama ve teorik düzeyde test edildiği sınavdır. Geliştiricinin, bir verinin tarayıcıdan sunucuya uzanan (Request-Response Lifecycle) yolculuğunu uçtan uca hatasız kavrayıp kavramadığı ölçülür. Front-End'de çalışan kod ile Back-End'de çalışan kod arasındaki izolasyonun ve iletişim formatlarının (JSON/XML) doğru kurgulanabilme kapasitesi denetlenir. Modern web framework'leri, veritabanı bağlantıları ve API geliştirme gibi ileri düzey Backend konularına geçmeden önceki altyapı onayıdır. İki farklı dünyanın (Tarayıcı ve Sunucu) algısal birleşimidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `PHP üzerinde Nesne Yönelimli Programlama (OOP) yapıları kurularak, dosyalar arası kod paylaşımı, durum yönetimi (State) ve güvenli dosya yükleme (File Upload) senaryoları kodlanır. Çerezler (Cookies) ve Oturum (Session) değişkenleri sayesinde HTTP'nin "Durumsuz" (Stateless) yapısının aşılarak kullanıcıların sepete eklediklerini nasıl hatırladığı (Authentication) tasarlanır. Hem Client (JavaScript) hem de Server (PHP) tarafında uygulanan Çift Katmanlı Doğrulama (Validation) ile SQL Injection ve XSS gibi kritik siber güvenlik açıklarına karşı defansif yazılım mimarisi kurgulanır. Hata yönetimi (Exception Handling) ve modülerleştirme (include/require) ile spagetti kodlar kurumsal projelere evrilir. Web'i güvenli, hafızalı ve objelere dayalı bir platforma dönüştürür.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/php/php_oop_what_is.asp' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=php+oop+session+ve+form+do%C4%9Frulama' },
      ],
    },
    10: {
      description: `Web uygulamalarının kalbi olan veritabanı erişimlerinin, PHP üzerinden güvenli PDO (PHP Data Objects) katmanıyla MySQL sunucusuna bağlanarak CRUD (Ekle, Oku, Güncelle, Sil) işlemleri yapması öğretilir. Kötü niyetli saldırıları (SQL Injection) kesin olarak önleyen Önceden Hazırlanmış İfadeler (Prepared Statements) ile veritabanı sorgularının yazım standartları (Best Practices) belirlenir. AJAX ve JSON kullanarak, sayfa yenilenmeden veritabanından dinamik listeler çekme ve bu verileri sayfalama (Paging) algoritmalarıyla arayüze basma senaryoları tasarlanır. Dinamik içeriği bir REST mimarisine uygun şekilde üretip Front-End'e servis etme (API Endpoint yaratma) mantığı tamamen aşılanır. Gerçek zamanlı ve veri odaklı tam yığın (Full-Stack) mimarinin tamamlanmasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/php/php_mysql_pdo.asp' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=php+pdo+crud+i%C5%9Flemleri+ve+ajax+json' },
      ],
    },
    11: {
      description: `Kurumsal (Enterprise) yazılım sektörünün lideri Microsoft'un çapraz platform (Cross-platform) çalışan güncel ASP.NET Core mimarisi, C# dili ve Razor Pages yapısı ile öğrenilir. SQL kodları yazmak yerine, C# nesnelerini (Modeller) kullanarak veritabanı işlemleri yapmayı sağlayan muazzam Entity Framework Core (ORM) teknolojisi koda entegre edilir. Otomatik kod üreticiler (Scaffolding) sayesinde CRUD ekranlarının ve veritabanı tablolarının saniyeler içinde nasıl modellendiği görülerek geliştirici hızı (Developer Productivity) zirveye çıkarılır. Modeller üzerine yazılan kurallarla (Data Annotations) sunucu ve istemci doğrulamasının (Validation) merkezi tek bir yerden nasıl otomatik yönetildiği incelenir. Sağlam, tip-güvenli (Type-safe) ve hızlı kurumsal Backend geliştirmenin temelidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-8.0' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=asp.net+core+razor+pages+ve+entity+framework+core' },
      ],
    },
    12: {
      description: `Yazılımı veri (Model), arayüz (View) ve yönlendirme (Controller) olarak üç izole parçaya ayıran kusursuz mimari desen MVC (Model-View-Controller) ASP.NET Core üzerinde detaylandırılır. Mobil cihazlar, akıllı saatler ve web uygulamalarının aynı Backend ile konuşmasını sağlayan RESTful Web API'leri geliştirilerek JSON veri servisleri yazma sanatı icra edilir. Geleneksel istek-cevap (Request-Response) döngüsünü yıkarak sunucunun istemciye anlık veri itmesini (Push) sağlayan WebSockets tabanlı SignalR teknolojisiyle gerçek zamanlı (Real-time) chat veya borsa uygulamaları kurgulanır. İhtiyaçlara (Ölçeklenebilirlik, Bağımsızlık) göre Monolitik web sitelerinden Mikroservis API yapılarına geçişin felsefesi aşılanır. Uygulama izolasyonu ve eşzamanlı çift yönlü iletişimin zirvesidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-8.0' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=asp.net+core+mvc+web+api+ve+signalr' },
      ],
    },
    13: {
      description: `Microsoft'un eski olay tabanlı (Event-driven) masaüstü benzeri Web Forms yapısı kısaca hatırlatılıp, ardından modern webin devrimsel Backend teknolojisi Node.js ekosistemine giriş yapılır. Front-End'de kullanılan Javascript dilinin, V8 motoru sayesinde sunucuda (Backend) asenkron, tek iş parçacıklı (Single-Threaded Non-Blocking) bir canavara nasıl dönüştüğü mimari olarak analiz edilir. Binlerce anlık I/O isteğini (örneğin chat uygulamaları veya sensör verileri) belleği tüketmeden hızla çözen olay döngüsü (Event Loop) mantığının klasik PHP/ASP.NET thread havuzlarından (Thread Pool) farkı kanıtlanır. NPM (Node Package Manager) üzerinden yüz binlerce hazır kütüphaneyi projeye dahil ederek geliştirme sürecini modülerleştirme (Micro-packages) becerisi kazanılır. Aynı dili (JS) hem ön hem arka uçta kullanmanın muazzam konforudur.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nodejs+nedir+event+loop+ve+asenkron+yap%C4%B1' },
      ],
    },
    14: {
      description: `Node.js'in saf (vanilla) halinin üzerine kurulan, ağ yönlendirmelerini (Routing) ve ara yazılımları (Middleware) inanılmaz kolaylaştıran minimal ve esnek Express.js framework'ü ile dönem noktalanır. İsteklerin (Request) sunucuya geldikten sonra bir seri "Middleware" tünelinden (Örn: Kimlik doğrulama -> Loglama -> Veri çözme) geçerek hedefe ulaştığı o zincirleme akış (Pipeline) mimarisi kodlanır. MongoDB gibi NoSQL veritabanlarıyla entegre edilerek MERN/MEAN stack gibi tamamen Javascript tabanlı modern endüstriyel mimarilerin (Cloud-native) tam kurulumu simüle edilir. Backend hedefleriniz doğrultusunda, PHP'den C# Web API'ye ve Node.js/Express asenkron mimarisine uzanan çok geniş bir teknoloji yığınında (Tech Stack) uzmanlaşmış bir Web Mühendisi formasyonu kazandırılır. İnternetin omurgasını modern araçlarla inşa etme yetkisidir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://expressjs.com/en/starter/installing.html' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nodejs+express+framework+rest+api+yap%C4%B1m%C4%B1' },
      ],
    },
  },
  'BMB308 Bilgisayar Ağları': {
    1: {
      description: `Bilgisayar ağlarının genel yapısı, LAN, WAN, MAN gibi sınıflandırmaları ve internetin temel felsefesi öğrenilir. Bir bilgisayar mühendisi olarak, yazdığınız kodların farklı coğrafyalardaki donanımlarla nasıl iletişim kurduğunu anlamak vizyonunuzu genişletir. Donanım cihazlarının ve yazılım protokollerinin ortaklaşa çalışarak devasa bir küresel ağ oluşturma mantığı kavranır. Modern bulut bilişim ve dağıtık sistem mimarilerinin üzerinde yükseldiği bu temel altyapı detaylıca incelenir. Ağ topolojileri sayesinde verinin en kısa ve güvenli yoldan hedefe ulaştırılma felsefesi keşfedilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/computer_network_types.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+a%C4%9Flar%C4%B1na+giri%C5%9F+a%C4%9F+%C3%A7e%C5%9Fitleri' },
      ],
    },
    2: {
      description: `Verinin bir kaynaktan çıkıp hedefe ulaşana kadar geçirdiği fiziksel ve mantıksal süreçler analiz edilir. Ağ üzerindeki cihazların birbirini nasıl bulduğu, veriyi nasıl kodladığı ve hata kontrolünü nasıl yaptığı adım adım işlenir. Arka uç (backend) mimarilerinde sunucuların birbiriyle konuşmasını sağlayan altyapının ilk kavramsal adımıdır. Sinyal türleri, bant genişliği ve iletim ortamlarının fiziksel sınırlarının veri iletişimini nasıl etkilediği tartışılır. Donanımın kısıtlamalarına rağmen verinin kayıpsız iletilmesini sağlayan mühendislik çözümleri öğretilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-communication-definition-components-types-channels/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+ileti%C5%9Fimi+s%C3%BCre%C3%A7leri+bilgisayar+a%C4%9Flar%C4%B1' },
      ],
    },
    3: {
      description: `Farklı üreticilerin donanımlarının aynı ağda sorunsuz çalışmasını sağlayan evrensel kurallar bütünü olan protokoller incelenir. Karmaşık ağ iletişimini yönetilebilir modüllere bölen katmanlı mimari (Layered Architecture) felsefesi oturtulur. Bir web isteğinin (HTTP) donanım seviyesindeki elektrik sinyallerine inene kadar hangi çeviri katmanlarından geçtiği kavranır. Yazılımcıların sadece kendi katmanlarına odaklanarak (soyutlama) diğer katmanlardaki karmaşadan nasıl kurtarıldığı analiz edilir. İletişim dünyasının ortak dilini ve evrensel anayasasını belirleyen standartlar bütünüdür.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/protocols-in-computer-network/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=a%C4%9F+protokolleri+ve+katmanl%C4%B1+mimari' },
      ],
    },
    4: {
      description: `Tüm ağ eğitiminin omurgasını oluşturan 7 katmanlı Açık Sistem Bağlantıları (OSI) referans modeli detaylıca öğrenilir. Fiziksel katmandan başlayıp Uygulama katmanına kadar uzanan bu model, sistem darboğazlarını (bottleneck) tespit etmek için bir haritadır. Bir paket karşıya ulaşmadığında sorunun kabloda mı (Layer 1) yoksa yazılımda mı (Layer 7) olduğunu teşhis etme yeteneği aşılar. Her katmanın veriye kendi başlığını (header) ekleyerek paketlediği enkapsülasyon süreci matematiksel bir kesinlikle işlenir. Bilişim dünyasındaki sorunları izole etme ve çözme konusunda evrensel bir mühendislik perspektifi kazandırır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/osi-model-layers-and-protocols/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osi+referans+modeli+7+katman' },
      ],
    },
    5: {
      description: `Ağ trafiğini yöneten yönlendiricilerin (Routers) veriyi hedefe en kısa ve en düşük maliyetli yoldan ulaştırma algoritmaları incelenir. Statik ve dinamik yönlendirme mantıklarıyla, sistemin ağdaki kopuklukları anında fark edip rotayı nasıl değiştirdiği (self-healing) öğrenilir. OSPF, BGP gibi yönlendirme protokollerinin arkasındaki çizge kuramı (Graph Theory) ve Dijkstra algoritmaları pratiğe dökülür. Küresel internet trafiğinin saniyeler içinde binlerce düğümden geçerek nasıl optimize edildiği vizyonu sunulur. Algoritmik hesaplamaların donanım üzerinde devasa ağ trafiğini yönetme sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/network_layer_routing.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=y%C3%B6nlendirme+algoritmalar%C4%B1+routing' },
      ],
    },
    6: {
      description: `Günümüz internetinin fiili (de facto) standardı olan TCP/IP protokol ailesinin mimarisi ve çalışma mekanizmaları ele alınır. TCP'nin veri kayıplarını nasıl telafi ettiği (güvenilir) ve IP'nin veriyi adreslere nasıl taşıdığı mantıksal olarak ayrıştırılır. Üçlü el sıkışma (Three-way handshake) gibi bağlantı kurma algoritmaları sayesinde veri iletiminin nasıl garanti altına alındığı görülür. Bağlantısız ve hızlı iletişim isteyen uygulamalar (video/ses akışı) için alternatif olan UDP protokolünün farkları tartışılır. İnterneti var eden ve dijital çağın haberleşme altyapısını oluşturan ana iskelet kavranır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/tcp-ip-model/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=tcp+ip+protokol%C3%BC+ve+osi+modeli' },
      ],
    },
    7: {
      description: `Teorik OSI modeli ile pratik TCP/IP modeli kıyaslanarak, ev, ofis veya kampüs içindeki Yerel Alan Ağlarının (LAN) temellerine giriş yapılır. Kısa mesafelerde yüksek hızlı veri transferi sağlayan LAN yapılarının donanımsal ve yazılımsal topolojileri (Yıldız, Halka vb.) incelenir. İç ağda (Intranet) cihazların dış dünyaya kapalı bir şekilde nasıl güvenle ve yüksek performansla konuşturulduğu modellenir. Kurumsal bir bilişim altyapısı kurarken maliyet ve hız dengesini (trade-off) sağlamak için gerekli mühendislik vizyonu aşılanır. Küçük ölçekli sistemlerin büyük ağlara entegre edilmeden önceki izole dünyasıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/computer_network_models.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osi+ve+tcp+ip+kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rmas%C4%B1+lan+a%C4%9Flar%C4%B1' },
      ],
    },
    8: {
      description: `Ağları fiziksel olarak birbirine bağlayan Switch, Router, Hub ve köprü (Bridge) gibi aktif donanım bileşenlerinin özellikleri öğrenilir. Bir Switch'in sadece doğru MAC adresine veri göndererek ağ çarpışmalarını (collision) nasıl engellediği ve trafiği nasıl rahatlattığı incelenir. Cihaz sayısının arttığı durumlarda yerel ağların Sanal LAN (VLAN) yapılarına bölünerek performansın ve güvenliğin nasıl artırıldığı tartışılır. Yazılımların koşturulduğu fiziksel donanım ekosisteminin kapasitesini ve limitlerini belirleme becerisi kazandırılır. Bilgisayar mühendisliğinin donanımsal altyapı yönetimine doğrudan temas ettiği aşamadır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yerel+a%C4%9F+bile%C5%9Fenleri+switch+router+hub' },
      ],
    },
    9: {
      description: `LAN teknolojilerinde tartışmasız dünya standardı olan Ethernet mimarisi ve IEEE 802.x protokol ailesinin fiziksel/MAC alt katmanları analiz edilir. Kablo üzerinden iletilen verilerin aynı anda gönderildiğinde çarpışmasını engelleyen CSMA/CD erişim kontrol mekanizması donanımsal düzeyde öğrenilir. Gigabit ve 10-Gigabit Ethernet teknolojileriyle verinin bakır kablolar üzerinde hız sınırlarını nasıl zorladığı mühendislik verileriyle kanıtlanır. Fiziksel adresleme (MAC Address) mantığı sayesinde yerel ağdaki cihazların birer eşsiz dijital kimlik kazanma süreci çözümlenir. Sektördeki en yaygın ağ standardının çalışma prensiplerine tam hakimiyet sağlanır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/ethernet.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ethernet+ve+ieee+802+standartlar%C4%B1' },
      ],
    },
    10: {
      description: `Kampüs ve şehir içi ağlarda (MAN) kullanılan, çift halka (dual-ring) topolojisine sahip fiber optik tabanlı FDDI teknolojisi incelenir. Kablo koptuğunda veya bir düğüm arızalandığında ikinci halkanın devreye girerek sistemi saniyeler içinde kurtarması (Fault Tolerance) mantığı kurgulanır. Devasa veri merkezleri veya hastaneler gibi kesintiye tahammülü olmayan kurumsal yapılar için hataya dayanıklı ağ tasarlama vizyonu aşılar. Yüksek veri hızlarında ışığın gücünden yararlanılarak elektromanyetik girişimlerin (EMI) nasıl sıfıra indirildiği kanıtlanır. Sistem güvenilirliği (Reliability) ve yedeklilik (Redundancy) kavramlarının fiziksel altyapıya işlenmesidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/fiber-distributed-data-interface-fddi/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fddi+fiber+distributed+data+interface+nedir' },
      ],
    },
    11: {
      description: `Hem ses hem de veri trafiğini değişken boyutlu paketler yerine sabit 53 baytlık hücreler (cells) halinde taşıyan ATM teknolojisi öğrenilir. Yüksek hızlı donanımsal anahtarlama yaparak ağ gecikmelerini (Latency) minimize eden ve servis kalitesini (QoS) garanti eden mimari altyapısı incelenir. Telekomünikasyon operatörlerinin geniş alan ağlarında (WAN) eşzamanlı ve asenkron veri iletimini nasıl kusursuz bir dengeye oturttuğu tartışılır. Ağ trafiğinin tıkanma noktalarını tahmin edilebilir (predictable) hale getirerek kapasite planlaması yapma yeteneği kazandırılır. Karmaşık iletişim ağlarında veri bütünlüğünü ve hızını aynı anda koruyan gelişmiş teknolojilerdir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/asynchronous-transfer-mode-atm-in-computer-network/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=atm+asynchronous+transfer+mode+a%C4%9F+teknolojileri' },
      ],
    },
    12: {
      description: `Dönem boyunca öğrenilen teorik altyapının üzerine, Nesnelerin İnterneti (IoT) ağları, Yazılım Tanımlı Ağlar (SDN) veya IPv6 gibi modern ağ teknolojileri öğrencilerin araştırmalarıyla sınıfa taşınır. Teknolojinin inanılmaz bir hızla eskidiği bilişim dünyasında, mühendis adaylarının güncel literatürü takip etme ve araştırma (R&D) kültürü geliştirmesi hedeflenir. Teknik makaleleri tarayarak, yeni ağ protokollerinin performans ve güvenlik açısından getirdiği yenilikleri eleştirel bir gözle analiz etme becerisi kazanılır. Öğrencilerin sunum yetenekleri geliştirilerek, gelecekteki profesyonel iş hayatlarında karmaşık ağ mimarilerini ekiplere anlatma provaları yapılır. Akademik bilginin güncel sektör dinamikleriyle harmanlandığı vizyon haftasıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/index.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yeni+nesil+bilgisayar+a%C4%9F+teknolojileri+sdn+ipv6' },
      ],
    },
    13: {
      description: `Öğrenci sunumları üzerinden ağ güvenliği (Cyber Security), bulut bilişim ağları ve veri merkezlerindeki yeni nesil yönlendirme algoritmaları üzerine derinlemesine tartışmalar yürütülür. Firewall, VPN ve IPSec gibi güvenlik mimarilerinin modern ağlara nasıl entegre edildiği vaka analizleriyle incelenir. Teorik OSI modelinin güncel endüstriyel problemlere (Örneğin devasa eşzamanlı DDoS saldırılarına) karşı nasıl modifiye edildiği gözlemlenir. Takım içi tartışma ve beyin fırtınası ortamıyla, sistemlerdeki potansiyel darboğazlara inovatif çözümler bulma pratikleri gerçekleştirilir. Analitik ve güncel düşüncenin ortak akılla birleştiği interaktif bir aşamadır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/computer-network-tutorials/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+a%C4%9Flar%C4%B1+ve+siber+g%C3%BCvenlik+sunumlar%C4%B1' },
      ],
    },
    14: {
      description: `Ağ mimarilerinin geleceği olan 5G teknolojileri, uç bilişim (Edge Computing) ve blok zinciri (Blockchain) ağ yapıları gibi ufuk açıcı konularla dönem tamamlanır. Sensörlerden sunuculara kadar uzanan o devasa iletişim köprüsünün dününü, bugününü ve yarınını anlama kapasitesi test edilerek pekiştirilir. Donanım ve yazılımın mükemmel senkronizasyonu olan bilgisayar ağlarının, insanlığın bilgi üretme hızını nasıl şekillendirdiği mühendislik bakış açısıyla son kez değerlendirilir. Öğrenciler, kodların sadece makine içinde kalmadığı ve dünyayı birbirine bağladığı devasa sistemlerin mimarları olma bilinciyle mezuniyete bir adım daha yaklaşır. Dijital otobanların kontrolünü genç mühendislere devreden final niteliğindedir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_communication_computer_network/index.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=gelece%C4%9Fin+a%C4%9F+teknolojileri+edge+computing+5g' },
      ],
    },
  },
  'BMB314 Bilgisayar Organizasyonu': {
    1: {
      description: `Donanımın anladığı tek dil olan 0 ve 1'lerin (Makine Dili), komut setlerine ve Assembly diline nasıl haritalandığı incelenerek alt seviye mimariye giriş yapılır. Yüksek seviyeli kodlarınızın (Örn: C, Python) derleyiciler (Compiler) aracılığıyla işlemcinin doğrudan yürütebileceği talimatlara dönüşüm evreleri öğrenilir. Bir bilgisayar mühendisi olarak donanım limitlerini anlamak, kod optimizasyonu yaparken işlemciyi gereksiz döngülerle yormaktan kaçınmanızı sağlar. Kodlanan soyut yazılımların, fiziksel transistörler üzerindeki voltaj değişimlerine dönüştüğü o muazzam entegrasyon sınırında durulur. İşletim sistemi ve çekirdek geliştiricilerinin temelini oluşturan alt seviye düşünme yapısıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_organization/computer_organization_instruction_codes.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+organizasyonu+makine+dili+ve+derleyici' },
      ],
    },
    2: {
      description: `Kodlama mantığındaki döngülerin (for/while) ve fonksiyonların (alt programlar), Assembly dilinde atlama komutları (Jump/Branch) ve yığın (Stack) ile nasıl çalıştığı işlenir. Alt program çağrıldığında mevcut adresin belleğe itilmesi (Push) ve iş bitince geri çekilmesi (Pop) süreçleri fiziksel kayıtçılar (Registers) üzerinden kurgulanır. Bu donanımsal mantığı bilmek, yazılımlarda sonsuz özyineleme (Recursion) yüzünden oluşan "Stack Overflow" hatalarının gerçekte ne anlama geldiğini kavramayı sağlar. İşlemcinin sırayla okuduğu komut setinden çıkarak nasıl karar mekanizmaları ürettiği donanım dilinde modellenir. Kontrol akışının işlemci içindeki mikroskobik trafiğidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-of-control-unit-and-its-design/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=assembly+dili+d%C3%B6ng%C3%BCler+ve+alt+programlar' },
      ],
    },
    3: {
      description: `İşlemci içerisindeki kontrol biriminin (Control Unit) donanımsal olarak nasıl tasarlandığı ve mikroprogramlama (Microprogramming) ile nasıl esnek hale getirildiği öğrenilir. Karmaşık makine komutlarının, denetim belleğinde saklanan daha küçük "mikro-komutlara" bölünerek adım adım nasıl işletildiği analiz edilir. Tasarımcıya, yeni bir işlemci mimarisi üretirken donanımı değiştirmeden sadece mikro-kodu güncelleyerek yeni yetenekler ekleme vizyonu kazandırılır. Komutların işlemci içinde yaratacağı mantıksal yolların ve adres sıralamalarının donanımsal senkronizasyonu kurgulanır. Merkezi işlem biriminin beynindeki otonom kontrol merkezinin anatomisidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_organization/computer_organization_microprogrammed_control.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mikroprogramlama+ve+denetim+belle%C4%9Fi+tasar%C4%B1m%C4%B1' },
      ],
    },
    4: {
      description: `İşlemcinin içinde geçici ama devasa hızlı veri tutan yazaçların (Registers) genel topolojisi ve veriyolu (Bus) mimarisiyle entegrasyonu incelenir. Bir talimatın (Instruction Format) kaç bitten oluştuğu, opcode ve operand alanlarının işlemci mimarisine göre nasıl standardize edildiği çözümlenir. Yazaç sayısının fazla olmasının derleyicilere daha hızlı kod üretme imkanı sağladığı, ancak donanım maliyetini nasıl artırdığı mühendislik perspektifiyle tartışılır. Değişkenlerin RAM'e inmeden sadece işlemci içinde kalarak manipüle edilmesini sağlayan donanım organizasyonu modellenir. İşlemci çekirdeğinin veri haritalama standartlarıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/instruction-formats-in-computer-architecture/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=genel+yaza%C3%A7+organizasyonu+ve+buyruk+bi%C3%A7imleri' },
      ],
    },
    5: {
      description: `İşlemcinin bellekteki veriyi bulmak için kullandığı Doğrudan, Dolaylı, İndeksli ve Bağıl gibi adresleme modları (Addressing Modes) detaylıca öğrenilir. Az sayıda ve basit komut setine sahip RISC (Reduced Instruction Set Computer) mimarisi tanıtılarak, mobil işlemcilerin (ARM) neden bu teknolojiyi kullandığı kavranır. Diziler veya işaretçiler (Pointers) kullanıldığında donanımın arka planda veriyi nasıl hesaplayıp getirdiğinin fiziksel adımları incelenir. Karmaşık talimatlar (CISC) yerine basit ama çok hızlı işlenen talimatlarla donanım performansını zirveye çıkarma stratejisi tartışılır. Yazılım veri yapılarının donanımdaki navigasyon pusulasıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_organization/computer_organization_instruction_formats.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=adresleme+kipleri+ve+risc+mimarisi' },
      ],
    },
    6: {
      description: `Tek bir komutun bitmesini beklemeden diğerinin işleme alındığı Boru Hattı (Pipelining) tekniği ve paralel işlem yapabilme yetenekleri işlenir. Fabrika üretim bantlarına benzeyen bu mimari sayesinde işlemcilerin döngü başına tamamladığı komut sayısını (Throughput) nasıl muazzam artırdığı ispatlanır. Veri bağımlılıkları (Data Hazards) veya atlama komutlarının boru hattını tıkayıp duraklatmasını (Stall/Bubble) önlemek için geliştirilen algoritmik çözümler kurgulanır. Çok çekirdekli sistemler için optimize kod yazma bilinci kazandırılarak yazılımın donanıma paralel akması sağlanır. Zamandan tasarruf etmenin işlemci seviyesindeki en zekice mimarisidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/pipelining-in-computer-architecture/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=boru+hatt%C4%B1+pipelining+ve+paralel+i%C5%9Fleme' },
      ],
    },
    7: {
      description: `Boru hattı mantığı daha da geliştirilerek, tek bir komutla devasa veri setleri üzerinde aynı anda işlem yapmayı sağlayan Vektör ve Dizi işlemcileri (SIMD) tanıtılır. Ekran kartlarının (GPU) milyonlarca pikseli veya makine öğrenmesi algoritmalarındaki büyük matrisleri nasıl aynı anda işleyebildiğinin donanımsal sırrı çözülür. Yüksek performanslı hesaplama (HPC) ve yapay zeka sunucuları tasarlarken verinin skaler değil vektörel ele alınmasının donanım maliyetleri analiz edilir. Veri bilimciler için kullanılan kütüphanelerin (Örn: NumPy) donanım tarafındaki bu hızlandırıcılara nasıl bağlandığı kavranır. Geleceğin paralel dünyasına donanımsal bir hazırlıktır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_architecture/computer_architecture_vector_processing.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=vekt%C3%B6r+i%C5%9Flemciler+ve+dizi+i%C5%9Flemcileri+mimari' },
      ],
    },
    8: {
      description: `İşlemcinin Aritmetik Lojik Birimi (ALU) içinde gerçekleştirilen dört işlemin mantık kapıları ve donanımsal algoritmalarla (Örn: Booth Algoritması) nasıl çalıştığı detaylandırılır. Bilgisayarın çıkarma işlemini bile aslında toplama (2'ye Tümleyen) üzerinden yaparak donanım modüllerinden nasıl tasarruf ettiği mühendislik gözüyle incelenir. Çarpma ve bölme gibi işlemciyi yoran süreçlerin bitsel kaydırma (Shift) ve toplama komutlarıyla milisaniyeler içinde nasıl çözüldüğü algoritmalaştırılır. Hızlı çalışan matematik kütüphanelerinin gücünü donanımın bu akıllı aritmetik tasarımlarından aldığı kanıtlanır. Matematiksel soyutlamaların silikon üzerindeki kesin işlemleridir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/computer-arithmetic-in-computer-architecture/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+aritmeti%C4%9Fi+toplama+%C3%A7arpma+algoritmalar%C4%B1' },
      ],
    },
    9: {
      description: `Bilgisayarların ondalıklı sayıları depolamak ve işlemek için kullandığı IEEE 754 Kayan Nokta (Floating Point) standardı ve donanım limitleri öğrenilir. Bir yazılımcı olarak float veya double değişkenlerle çalışırken, sistemin neden bazen 0.1 + 0.2 işlemini 0.30000000000000004 olarak çıkardığı fiziksel kapasite kısıtlarıyla ispatlanır. Mantis (Kesir), Üs (Exponent) ve İşaret bitlerinin işlemcide nasıl hizalanarak toplandığı ve çarpıldığı donanımsal olarak kurgulanır. Finansal uygulamalar veya uzay simülasyonları tasarlarken yaşanacak yuvarlama (Rounding) hatalarını bertaraf etme bilinci aşılanır. Dijital evrendeki hassasiyet sınırlarının çerçevesi çizilir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_architecture/computer_architecture_floating_point_arithmetic.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=kayan+nokta+aritmeti%C4%9Fi+floating+point+ieee+754' },
      ],
    },
    10: {
      description: `Klavye, fare, disk gibi yavaş çalışan çevre birimleri (I/O) ile devasa hızlı CPU arasındaki iletişim kopukluğunu çözen arayüz mimarileri incelenir. İşlemci ve çevre birimi arasında senkronizasyonu sağlayan "Handshaking" (El sıkışma) ve Strobe (Uyarıcı) kontrol sinyallerinin donanımsal çalışması modellenir. Asenkron (farklı saat hızlarında çalışan) aktarımların sistemi nasıl kilitlemeden veri alışverişi yapabildiği (Buffer/Kuyruk mantığı) öğretilir. Yazılımların dış dünyadan gelen verilere nasıl tepki verdiğini ve giriş/çıkış darboğazlarını anlama yeteneği kazandırılır. Donanımın yavaş fiziksel çevreyle entegre olma sanatıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/input-output-organization/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=giri%C5%9F+%C3%A7%C4%B1k%C4%B1%C5%9F+aray%C3%BCz%C3%BC+asenkron+veri+aktar%C4%B1m%C4%B1' },
      ],
    },
    11: {
      description: `Dışarıdan gelen donanım uyarılarını sıraya koyan Kesme (Interrupt) öncelikleri ve işlemciyi yormadan belleğe veri yazan DMA (Doğrudan Bellek Erişimi) mimarisi öğrenilir. Ağ kartından gelen gigabaytlarca veriyi işlemciye uğratmadan DMA denetleyicisi ile doğrudan RAM'e aktararak sistem performansını zirveye çıkarma stratejisi kavranır. İşletim sistemlerinin bu kesme sinyalleriyle arka planda çoklu görev (Multitasking) illüzyonunu nasıl yarattığı donanım düzeyinde ispatlanır. Ağır I/O işlemleri (örneğin video render) yapan yazılımların donanım altyapısında yarattığı trafiği kontrol etme vizyonu sunar. CPU'nun iş yükünü hafifleterek sistemi otonomlaştıran efsanevi teknolojidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_architecture/computer_architecture_dma.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=do%C4%9Frudan+bellek+eri%C5%9Fimi+dma+ve+kesmeler' },
      ],
    },
    12: {
      description: `Kaydedicilerden (Registers) başlayıp Cache, RAM ve Manyetik disklere kadar uzanan hız-maliyet-kapasite piramidi olan Bellek Hiyerarşisi incelenir. Hızlı ama küçük belleklerin, yavaş ama devasa disklerle nasıl senkronize çalışarak kullanıcıya mükemmel bir performans sunduğu analiz edilir. Sadece adresle değil, doğrudan içeriğin kendisiyle arama yapılabilen Asosiyatif Belleklerin (Content Addressable Memory) router (yönlendirici) donanımlarında nasıl ışık hızında çalıştığı kavranır. Veri odaklı yazılımlar tasarlarken bellek türlerinin erişim sürelerini (Access Time) hesaba katarak algoritma yazma kültürü aşılanır. Dijital depolamanın mimari mühendislik ödünleşimidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/memory-hierarchy-in-computer-network/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bellek+hiyerar%C5%9Fisi+ve+yard%C4%B1mc%C4%B1+bellek' },
      ],
    },
    13: {
      description: `İşlemcinin hemen yanında bulunan Ön Bellek (Cache) eşleştirme yöntemleri (Doğrudan, Kümeli) ve RAM'i diske taşıyan Sanal Bellek donanımları öğrenilir. Yazdığınız kodların verileri sırayla (Spatial Locality) veya tekrar tekrar (Temporal Locality) kullanmasının ön bellek isabetini (Cache Hit) artırarak programı nasıl uçurduğu kanıtlanır. Fiziksel RAM yetmediğinde diskin bir kısmını RAM gibi gösteren Bellek Yönetim Birimi'nin (MMU) sayfa tablolarıyla donanımsal çevirimi incelenir. Büyük veri (Big Data) işlerken hafıza darboğazlarını donanım perspektifiyle çözme yetisi kazandırılır. Optimizasyonun kodda değil, önbellek hizalamasında bittiği yerdir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_architecture/computer_architecture_cache_memory.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%B6nbellek+cache+memory+ve+sanal+bellek' },
      ],
    },
    14: {
      description: `Dönemin finalinde, performansı artırmak için birden fazla işlemcinin aynı anda kullanıldığı Çoklu İşlemci (Multiprocessor) ağları ve topolojileri ele alınır. İşlemcilerin birbirleriyle Crossbar veya Hypercube gibi ağ tasarımları üzerinden nasıl bağlandığı ve veriyi nasıl paylaştığı (Shared Memory vs Distributed Memory) tartışılır. Geleceğin oyun geliştiricileri veya bulut (Cloud) mühendisleri için, çok çekirdekli donanımlarda kilitlenmeden (Deadlock) paralel kod çalıştırma (Concurrency) vizyonu sunulur. İşlemci önbelleklerinin kendi aralarında tutarlı (Cache Coherence) kalmasını sağlayan karmaşık donanım protokolleri kurgulanarak ders sonlandırılır. Süper bilgisayar mimarilerinin kapılarını açan ileri düzey ufuk turudur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/multiprocessors-in-computer-architecture/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%A7oklu+i%C5%9Flemci+mimarisi+multiprocessors+ba%C4%9Flant%C4%B1+yap%C4%B1lar%C4%B1' },
      ],
    },
  },
  'BMB310 Sistem Analizi ve Tasarım': {
    1: {
      description: `Geliştirilecek yazılımların sadece bir kod yığını değil, birbiriyle uyumlu çalışan bileşenlerden oluşan devasa bir "Sistem" olduğu felsefesiyle derse giriş yapılır. Bir bilgisayar mühendisi olarak görevinizin sadece bilgisayara komut vermek değil, kurumsal yapıların iş süreçlerini analiz ederek dijital çözümler üretmek olduğu kavranır. Karmaşık ve düzensiz yapıları (kaos), yönetilebilir ve izlenebilir mimarilere dönüştürmenin kavramsal altyapısı atılır. Analitik düşünce yeteneği ile iş dünyasının (Business) beklentileri arasında güçlü bir mühendislik köprüsü kurulur. Kodlamaya geçmeden önce problemin kendisini doğru tanımlama becerisi aşılanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_overview.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+analizi+ve+tasar%C4%B1m%C4%B1na+giri%C5%9F' },
      ],
    },
    2: {
      description: `Bir sistemin elemanları, sınırları, çevreyle etkileşimi, alt sistemleri ve geri besleme (Feedback) mekanizmaları detaylıca tanımlanır. Örneğin büyük bir e-ticaret platformunda stok modülü, ödeme alt sistemi ve kargo API'sinin birbiriyle nasıl izole ama bağlantılı kurgulanması gerektiği incelenir. Sistemin Entropi'si (bozulma eğilimi) tartışılarak, yazılımların neden sürekli bakım ve güncelleme (Maintenance) gerektirdiği gerçeğiyle yüzleşilir. Açık ve kapalı sistem modelleri üzerinden, yazılımın dış dünyadaki verilerle nasıl entegre olacağının vizyonu sunulur. Parçaları değil, bütünü görme odaklı sistem yaklaşımı (Systems Thinking) geliştirilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/system-analysis-and-design-overview/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+kavram%C4%B1+alt+sistemler+ve+%C3%B6zellikleri' },
      ],
    },
    3: {
      description: `Şirketlerin operasyonel kararlar almak için veriyi nasıl işlediğini gösteren Yönetim Bilişim Sistemleri (MIS), Karar Destek Sistemleri (DSS) ve Uzman Sistemler tanıtılır. Toplanan büyük verilerin (Big Data) yöneticiler için nasıl anlamlı raporlara (Dashboard) dönüşmesi gerektiği yazılım mimarisi perspektifiyle değerlendirilir. Günümüzde veri madenciliği ve yapay zeka ile evrilen bu sistemlerin, bir şirketin verimliliğini nasıl katlayarak artırdığı analiz edilir. Mühendis adaylarına, yazacakları veritabanı sorgularının şirket stratejilerine (Business Intelligence) nasıl yön verdiği gösterilir. Verinin bilgiye, bilginin ise kurumsal akla dönüştüğü aşamadır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/management_information_system/index.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgi+sistemleri+ve+t%C3%BCrleri+mis+dss' },
      ],
    },
    4: {
      description: `Yazılımın doğumundan ölümüne kadar geçen Süreç Modelleri olan Şelale (Waterfall), Çevik (Agile), Helezonik (Spiral) ve Prototipleme metodolojileri öğrenilir. Hangi tür projede katı kurallı Waterfall'un, hangi projede değişime hızlı tepki veren Agile mantığının kullanılacağına dair mühendislik kararları alınır. Günümüz yazılım sektörünün fiili standardı olan Scrum ve Kanban yaklaşımlarıyla takım içi görev dağılımı (Sprint) felsefesi oturtulur. Yanlış seçilmiş bir yaşam döngüsünün, milyon dolarlık projeleri nasıl hüsrana uğrattığı vaka analizleriyle kanıtlanır. Sürecin kendisini yönetmenin, kodu yönetmek kadar önemli olduğu kavratılır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-development-life-cycle-sdlc/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+geli%C5%9Ftirme+ya%C5%9Fam+d%C3%B6ng%C3%BCs%C3%BC+sdlc+modelleri' },
      ],
    },
    5: {
      description: `Bir yazılım projesinin ekonomik, teknik ve operasyonel yapılabilirlik (Fizibilite) analizleri ile proje bütçe/zaman çizelgesi (Gantt Chart) kurgulanır. Fikrin koda dökülmeden önce "Bu yazılımı üretmeye değecek bir iş değeri var mı?" sorusu analitik ve finansal metriklerle cevaplanır. Kaynak atamaları (insan gücü, donanım) yapılarak, kritik yol yöntemi (Critical Path Method) ile projenin teslim tarihinin (Deadline) nasıl garantiye alındığı öğretilir. Risk yönetimi yapılarak ileride çıkabilecek krizlere karşı (Örn: sunucu çökmesi veya eleman ayrılması) B planları kurgulama vizyonu aşılanır. Fikirlerin mühendislik disipliniyle bütçelendirilip projelendirilmesidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_project_planning.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+proje+planlama+ve+fizibilite+analizi' },
      ],
    },
    6: {
      description: `Kullanıcılardan veya müşterilerden "Ne istediklerini" doğru anlama sanatı olan Gereksinim Toplama (Requirement Gathering) mülakatları ve anket teknikleri işlenir. Müşterinin anlattığı muğlak ifadelerin (Örn: Sistem hızlı olsun), ölçülebilir ve test edilebilir fonksiyonel/fonksiyonel olmayan yazılım gereksinimlerine dönüştürülmesi sağlanır. Veri Akış Diyagramları (DFD) çizilerek, sistemin içine giren verilerin hangi işlemlerden (Process) geçip nereye (Data Store) kaydedildiği görselleştirilir. İletişim eksikliğinden kaynaklanan ve projeleri başarısız kılan "yanlış anlama" sorunları analiz aşamasında sıfırlanır. Müşterinin aklındaki hayali, mühendisliğin analitik kalıplarına dökme sanatıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-requirements-engineering/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+analizi+gereksinim+toplama+ve+dfd' },
      ],
    },
    7: {
      description: `Toplanan gereksinimlerin Sistem Gereksinim Belgesi (SRS) adında resmi ve bağlayıcı bir kontrata dönüştürülmesi işlemleri kurgulanır. Veri sözlükleri (Data Dictionary) oluşturularak, veritabanına kaydedilecek her bir değişkenin tipi, boyutu ve kısıtları proje başında netleştirilir. Analizin eksiksiz yapıldığının müşteriyle birlikte doğrulanması (Sign-off) sayesinde, tasarım evresine geçiş için sağlam bir onay mekanizması kurulur. Karmaşık iş kuralları, karar ağaçları (Decision Trees) ve karar tabloları kullanılarak algoritmik if-else bloklarına ön hazırlık yapılır. Analiz safhasının bitişini ve kodlanacak mimarinin temel hatlarını resmileştiren son adımdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-requirement-specification-srs/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+%C3%A7%C3%B6z%C3%BCmleme+veri+s%C3%B6zl%C3%BC%C4%9F%C3%BC+ve+srs' },
      ],
    },
    8: {
      description: `Proje planlama, fizibilite, gereksinim analizi ve sistem modelleme (DFD) konularının kapsamlı olarak test edildiği dönem ortası değerlendirmesidir. Bir mühendis adayının kod yazma dürtüsünü bastırarak, problemi analiz etmeye ve dökümante etmeye ne kadar sabır gösterebildiği sınanır. Müşteri isteklerinin doğru anlaşılarak teknik analiz raporlarına dönüştürülme kapasitesi, vaka sorularıyla (Case Study) ölçümlenir. Tasarım ve Nesneye Yönelik analiz gibi ileri düzey yapısal kurgulara geçmeden önce altyapının sağlama alındığı bir onay evresidir. Sistemsel düşüncenin akademik olarak kanıtlanmasıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Analiz evresinde bulunan "Ne yapılacak?" sorusundan çıkarak "Nasıl yapılacak?" sorusunu cevaplayan mimari tasarım ve arayüz (UI/UX) tasarımına geçilir. Son kullanıcının yazılımla etkileşime girdiği ekranların (Forms/Reports) kullanılabilirlik (Usability) ve erişilebilirlik standartlarına göre kurgulanması öğretilir. Kullanıcı deneyimini (UX) merkeze alan yaklaşımlarla, menülerin ve butonların sezgisel (Intuitive) bir sırayla nasıl tasarlanması gerektiği tartışılır. Veritabanı şemalarının (Entity-Relationship) ve uygulama mimarisinin (Örn: MVC) sisteme en uygun şekilde entegre edilmesi planlanır. İşlevselliğin estetik ve mühendislik ergonomisiyle buluştuğu kreatif süreçtir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_input_output.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+tasar%C4%B1m%C4%B1+ve+kullan%C4%B1c%C4%B1+aray%C3%BCz%C3%BC+ui+ux' },
      ],
    },
    10: {
      description: `Geleneksel yapısal analizden farklı olarak sistemi nesneler (Objects), sınıflar ve davranışlar üzerinden modelleyen Nesneye Yönelik Analiz (OOA) mantığı öğrenilir. Unified Modeling Language (UML) diyagramları (Kullanım Durumu, Sınıf, Sıra Diyagramları) kullanılarak sistemin görsel ve standartlaştırılmış bir haritası çizilir. Gerçek dünyadaki bir varlığın (Örneğin bir Müşteri) dijital dünyada özellik ve metotlarıyla nasıl kapsüllendiği (Encapsulation) modellenir. Modern yazılım dillerine (Java, C#) doğrudan çevrilebilecek mimari şablonlar tasarlayarak tasarımın koda pürüzsüz aktarımı hedeflenir. Karmaşık sistemleri parçala-yönet felsefesiyle nesne tabanlı inşa etme sanatıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/object-oriented-analysis-and-design/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nesneye+y%C3%B6nelik+sistem+analizi+ve+uml' },
      ],
    },
    11: {
      description: `Dönem boyunca öğrenilen tüm planlama, analiz ve tasarım fazlarının gruplar halinde bir dönem projesine döküldüğü ve savunulduğu ilk sunum haftasıdır. Tasarlanan sistemin DFD veya UML diyagramları üzerinden sınıf önünde jüriye sunularak mimari kararların teknik gerekçeleri (Justification) açıklanır. Sadece iyi bir tasarımcı olmak değil, aynı zamanda projesini müşteriye (veya hocaya) satabilen (Pitching) iyi bir iletişimci olmak hedeflenir. Gelen eleştirel sorulara karşı kurulan yapının sürdürülebilirliğini, esnekliğini ve güvenliğini savunma pratikleri gerçekleştirilir. Akademik bilgilerin gerçek yaşam projesi simülasyonuna dökülmesidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/system_analysis_and_design/index.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+analizi+ve+tasar%C4%B1m%C4%B1+proje+sunumu+%C3%B6rnekleri' },
      ],
    },
    12: {
      description: `(Proje sunumlarına devam) Ekiplerin farklı sektörel sorunlar (Örn: Hastane Otomasyonu, Lojistik Takip) için geliştirdikleri yazılım analiz raporları tartışılır. Diğer grupların tasarım zafiyetlerini veya eksik analiz edilen iş gereksinimlerini bularak sınıfça bir kod/tasarım inceleme (Design Review) kültürü oluşturulur. Fizibilite raporlarının maliyet etkinlikleri ve seçilen arayüzlerin kullanılabilirlik (UX) skorları eleştirel bir yaklaşımla değerlendirilir. Takım çalışması, dokümantasyon üretimi ve versiyon kontrol süreçlerinin proje üretimindeki koordinasyonu tecrübe edilir. Farklı problem senaryolarına üretilen çeşitli mimari çözüm yolları gözlemlenir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-system-design/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+mimarisi+tasar%C4%B1m+incelemesi+design+review' },
      ],
    },
    13: {
      description: `(Proje sunumlarına devam) Tasarım sunumları eşliğinde veritabanı şemalarının normalizasyon kurallarına uygunluğu ve sistemin genişletilebilirliği (Scalability) analiz edilir. İleride sistem üzerine binlerce kullanıcı girdiğinde mevcut tasarımın darboğaz (Bottleneck) yaratıp yaratmayacağı varsayımsal performans testleriyle tartışılır. Projelerde belirlenen risk yönetim planlarının olası bir krizde sistemi nasıl kurtaracağı üzerine takım savunmaları dinlenir. Yazılım krizlerini önlemenin yolunun, iyi bir kodlayıcı olmaktan çok iyi bir sistem analisti olmaktan geçtiği deneyimle sabitlenir. Kalite güvencesinin temelleri proje savunmalarıyla atılır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_testing_quality_assurance.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sistem+tasar%C4%B1m%C4%B1+veritaban%C4%B1+mimarisi+sunumu' },
      ],
    },
    14: {
      description: `Tüm projelerin savunulmasının ardından sistemlerin entegrasyonu, test planları ve sisteme geçiş (Deployment) stratejileri üzerine genel bir kapanış değerlendirmesi yapılır. Hazırlanan tasarımların doğrudan kodlama ekiplerine aktarılabilir düzeyde net (Ambiguity-free) ve anlaşılır olması gerektiği son kez vurgulanır. Öğrencilerin sadece izole kod parçaları yazan programcılar değil, bütünü gören, planlayan ve dökümante eden birer "Sistem Mühendisi" vizyonuyla mezun olmaları sağlanır. Analiz aşamasında yapılan küçük bir hatanın, bakım (Maintenance) aşamasında nasıl devasa maliyetlere dönüştüğü öğrenilmiş bir ders olarak kaydedilir. Dönem, yazılımın yaşam döngüsüne hakim, uçtan uca proje yönetebilecek formasyonla tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/system-analysis-and-design-overview/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+projesi+nas%C4%B1l+canl%C4%B1ya+al%C4%B1n%C4%B1r+deployment' },
      ],
    },
  },
  'BMB312 Sistem Programlama': {
    1: {
      description: `Cihaz donanımını yöneten işletim sistemlerinin evrimi, çoklu görev (multitasking) ve bellek koruma gibi modern kavramların nasıl ortaya çıktığı incelenir. Yüksek seviyeli dillerde (C#, Java) kodlarken fark etmediğimiz, arka planda çekirdeğin (kernel) kaynakları nasıl paylaştırdığı felsefi olarak kavranır. Sistemin donanım üzerinde soyut bir katman oluşturarak yazılım geliştirmeyi nasıl güvenli hale getirdiği teorik bir vizyonla tartışılır. Donanımın kısıtlı işlem gücünü adil bir şekilde dağıtarak performansın nasıl maksimize edildiği analiz edilir. Sistem programlamaya adım atmak için gereken sağlam teorik arka plandır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemleri+tarih%C3%A7esi+ve+temelleri' },
      ],
    },
    2: {
      description: `Sunucu dünyasının, IoT cihazlarının ve bulut altyapılarının tartışmasız hakimi olan açık kaynaklı Linux işletim sisteminin mimarisine ve felsefesine giriş yapılır. Özellikle Fedora veya Debian gibi Linux dağıtımları üzerinde grafik arayüzlerden bağımsız, tamamen komut satırı (CLI) üzerinden sistem mantığını kavramak temel şarttır. Kabuk (Shell) üzerinden dosya sistemi hiyerarşisi (FHS), süreçlerin başlatılması ve izinlerin yönetilmesi gibi operasyonel süreçler kurgulanır. Geliştireceğiniz Backend servislerini veya veritabanlarını Linux sunucularda koşturacağınız için bu ortama native (doğal) seviyede hakimiyet sağlanır. Kurumsal altyapıların görünmez kahramanı olan Linux ile ilk temastır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/unix/index.htm' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+dersleri+terminal+kullan%C4%B1m%C4%B1+ve+dosya+sistemi' },
      ],
    },
    3: {
      description: `Linux üzerinde çoklu kullanıcı (Multi-user) yönetimi, gruplar ve dosya izinleri (chmod/chown) ile sistemin güvenlik sınırlarını nasıl çizdiği öğrenilir. Bir web sunucusu kodladığınızda, o yazılımın "root" yetkileri yerine kısıtlı bir kullanıcıyla çalıştırılmasının (Least Privilege) siber saldırıları nasıl engellediği pratik edilir. Kılavuz (Man pages) okuma kültürü kazandırılarak, ezberlemeden resmi dökümantasyonlar üzerinden komutların derinliklerine inme becerisi aşılanır. Her şeyin bir dosya olduğu ("Everything is a file") Unix felsefesi anlaşılarak donanımların bile birer dosya gibi nasıl okunduğu görülür. Sistemin idari (Administration) ve yetkilendirme mimarisi çözümlenir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/linux-file-permissions/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+kullan%C4%B1c%C4%B1+y%C3%B6netimi+ve+dosya+izinleri+chmod' },
      ],
    },
    4: {
      description: `Süreçlerin (Process) Linux belleğinde Stack, Heap, Data ve Text segmentlerine nasıl yerleştiği C programlama dilinin bellek modeli üzerinden analiz edilir. Dinamik bellek tahsisi (\`malloc\`/\`free\`) yaparken işletim sisteminin arka planda sayfalama (Paging) mekanizmasıyla donanımı nasıl kandırıp (Sanal Bellek) bize alan açtığı ispatlanır. Kötü yönetilen göstericilerin (Pointers) neden "Segmentation Fault" hatası vererek çekirdek tarafından öldürüldüğü (Kernel Kill) donanım koruma halkalarıyla anlatılır. Performans kritik uygulamalarda bellek sızıntılarını (Memory Leaks) engellemek için sistemin belleği nasıl izlediği vizyonu sunulur. Alt seviye donanım kontrolünün C dili ile şaha kalktığı bölümdür.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/memory-layout-of-c-program/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+bellek+modeli+stack+heap+ve+pointerlar' },
      ],
    },
    5: {
      description: `Kullanıcı programlarının doğrudan donanıma erişmesinin yasak olduğu sistemlerde, çekirdekten hizmet talep etmek için kullanılan Sistem Çağrıları (System Calls) öğrenilir. C dili ile \`fork()\`, \`exec()\`, \`open()\` gibi sistem çağrıları kullanılarak donanıma (disk, ağ, işlemci) sıfır gecikmeyle (native) hükmetme kodu yazılır. Kabuğun (Shell) kendisinin de aslında sistem çağrılarını kullanan bir C programı olduğu gerçeği kavranarak sistemin arka planı demistifiye edilir. Uygulamanızın çekirdek moduyla (Kernel Mode) iletişimindeki güvenlik zafiyetleri ve performans darboğazları analiz edilir. İşletim sistemi kalbine doğrudan komut gönderme sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/unix_system_calls/index.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+system+calls+sistem+%C3%A7a%C4%9Fr%C4%B1lar%C4%B1+fork+exec' },
      ],
    },
    6: {
      description: `Süreçlerin birbirleriyle asenkron haberleşmesini ve dışarıdan durdurulmasını sağlayan işletim sistemi Sinyalleri (Signals - SIGINT, SIGKILL) koda dökülür. Terminalde klavyeden "Ctrl+C" tuşlarına basıldığında, arka planda hangi sinyallerin tetiklenip programı nasıl nazikçe kapattığı (Graceful Shutdown) C ile modellenir. Sunucu yazılımlarında konfigürasyon dosyalarını programı kapatmadan anında yeniden yükletmek için (SIGHUP) süreçler arası sinyal yakalama (Signal Handling) rutinleri tasarlanır. Terminal (TTY) özelliklerinin doğrudan kod ile kontrol edilerek interaktif komut satırı arayüzlerinin nasıl geliştirildiği öğretilir. İşletim sisteminin asenkron olay fırlatma mekanizmasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/signals-c-language/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+sinyaller+signals+sigint+sigkill+c+programlama' },
      ],
    },
    7: {
      description: `Dosya tanımlayıcıları (File Descriptors) üzerinden disk okuma ve yazma işlemlerinin tamponlanmış (Buffered) ve tamponlanmamış alt seviye (Low-level I/O) farkları incelenir. Büyük veri yazarken \`fwrite\` kullanmak ile doğrudan \`write\` sistem çağrısı kullanmanın CPU ve Disk aktarım hızlarını nasıl etkilediği mühendislik testleriyle kanıtlanır. Dosya kilitleri (File Locks) kullanılarak iki sürecin aynı dosyaya aynı anda yazmasının yaratacağı veri bozulmaları engellenir. Donanımın yazılıma göre inanılmaz yavaş çalışmasını telafi etmek için işletim sisteminin uyguladığı önbellek (Page Cache) illüzyonu kavranır. Disk G/Ç operasyonlarının performans sınırları çizilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/input-output-system-calls-c-create-open-close-read-write/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+dosya+i%2Fo+sistem+%C3%A7a%C4%9Fr%C4%B1lar%C4%B1+open+read+write' },
      ],
    },
    8: {
      description: `Linux \`fork()\` mimarisinin aksine, Windows işletim sisteminde (Win32 API) süreçlerin \`CreateProcess\` gibi farklı API'lerle nasıl yaratıldığı ve yönetildiği öğrenilir. Dünyanın en çok kullanılan masaüstü sisteminin arka planındaki Görev Yöneticisi'nin (Task Manager) gördüğü Process'lerin ve Handle (Tanıtıcı) yapılarının mimarisi analiz edilir. Farklı platformlara (Cross-platform) uygun C/C++ kodları yazarken, işletim sistemlerinin süreç yaratma felsefelerindeki (POSIX vs Win32) dramatik farklar tecrübe edilir. Zombi ve Öksüz (Orphan) süreçlerin RAM'i işgal etmesini engellemek için kodların Windows API'leri ile nasıl doğru sonlandırılacağı pratik edilir. Microsoft ekosistemindeki çekirdek davranışları kavranır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=windows+api+process+management+createprocess' },
      ],
    },
    9: {
      description: `Tek bir sürecin içinde aynı bellek alanını paylaşan İş Parçacıklarının (Threads) yaratılması (Pthreads/Win32 Threads) ve çok çekirdekli donanımda paralel çalıştırılması kodlanır. İş parçacıklarının aynı değişkene aynı anda yazmasını engelleyen Mutex ve Semafor kilit mekanizmalarıyla "Race Condition" hataları (Yarış durumu) bertaraf edilir. İşletim sisteminin sanal bellek sayfalarını (Virtual Memory Pages) kod ile doğrudan yönetmek ve belleği başka süreçlerle paylaşmak (Shared Memory) için API'ler kullanılır. Veri yoğunluklu yüksek performanslı uygulamalarda (Örn: Oyun Motorları) aynı anda yüzlerce görevin (I/O, Render, Fizik) asenkron mimaride tasarlanması öğrenilir. Modern yazılımların paralel eşzamanlı gücüdür.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/multithreading-c-cpp/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+pthreads+multithreading+mutex' },
      ],
    },
    10: {
      description: `Terminaldeki çıktıların yönlendirilmesi (I/O Redirection) ve akraba süreçler arasında veriyi boru hatlarıyla (Pipes / FIFO) doğrudan bellekten belleğe aktarma pratikleri yapılır. Farklı makineler arasında internet üzerinden iletişimi sağlayan Soket (Sockets) programlamanın temelleri atılarak işletim sisteminin TCP/UDP ağ yığını (Network Stack) kontrol edilir. Yazdığınız kodun dış dünyadaki bir IP adresini dinleyen ve bağlantıları kabul eden (Listen/Accept) ilkel ama güçlü bir sunucuya (Server) dönüştürülmesi sağlanır. Microservisler veya paralel işçi (Worker) süreçlerinin birbirleriyle IPC (Inter-Process Communication) ile ışık hızında haberleşmesi modellenir. Ağ ve sistemin kod bazında kusursuz birleşimidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/unix_sockets/index.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=linux+c+socket+programlama+ve+pipes' },
      ],
    },
    11: {
      description: `Thread havuzları (Thread Pools) kurgulanarak, sürekli yaratılıp yok edilen thread'lerin işletim sistemine bindirdiği maliyet (overhead) optimize edilir. C diliyle yapılan tüm sistem operasyonlarının, Linux kabuk betikleri (Bash Scripting) kullanılarak otomatikleştirilmesi ve otomasyon algoritmaları kurgulanması öğrenilir. Sunucu loglarını analiz eden, diskte yer azaldığında sistemi uyaran veya otomatik yedekleme (Backup) alan sistem yönetici (SysAdmin) botları kodlanır. Kodun içindeki karmaşık thread senkronizasyonlarının, dışarıdan izole scriptlerle nasıl denetlendiği ve sistemin bütünsel olarak nasıl ayakta tutulduğu tartışılır. Sistem otomasyonu ve paralel işleme becerilerinin sentezidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/unix/unix-shell-scripting.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bash+scripting+dersleri+linux+otomasyon' },
      ],
    },
    12: {
      description: `Yazılımların ağ üzerinden birbirleriyle iletişim kurmasını sağlayan Soket programlama ve port yönetimi mantığı ileri düzeyde işlenir. Backend geliştirme, bulut sistemleri ve IoT cihazları arasındaki veri akışını yöneten mikroservis mimarilerinin en alt katmanındaki haberleşme protokolleri (TCP/IP) doğrudan koda dökülür. İstemci-sunucu (Client-Server) modellerinde gelen binlerce eşzamanlı bağlantının (Concurrency) çoklu threadler veya \`select/poll\` mekanizmalarıyla nasıl tıkanmadan yönetildiği uygulamalı olarak görülür. Ağ üzerinde çalışan dağıtık sistemlerin (Distributed Systems) iletişim darboğazlarını (Bottleneck) işletim sistemi düzeyinde çözme pratiği yapılır. Sadece yerel çalışan değil, global ağlara hükmeden sunucular üretmenin altyapısıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/socket-programming-cc/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+ile+geli%C5%9Fmi%C5%9F+socket+programlama+tcp+server' },
      ],
    },
    13: {
      description: `Windows işletim sisteminin çekirdeğine inerek, kullanıcı modundan (User Mode) çok daha ayrıcalıklı olan Kernel Mode üzerinde donanım sürücüsü (Driver) yazma konseptleri tanıtılır. Yanlış yazılan bir Kernel kodunun meşhur Mavi Ekran (BSOD) hatasına nasıl yol açtığı ve çekirdek seviyesindeki bellek korumasının (veya korumasızlığının) sonuçları analiz edilir. Antivirüs yazılımlarının veya Anti-Cheat (Hile Koruma) sistemlerinin donanıma veya süreçlere müdahale etmek için neden doğrudan Kernel Mode üzerinde çalışmak zorunda olduğu tartışılır. Microsoft'un çekirdek API'leri (WDF) kullanılarak, sistemin en tehlikeli ve en güçlü donanım halkalarına temas edilir. Sistem mühendisliğinin en dip, en tehlikeli, karanlık sularına yolculuktur.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=windows+kernel+programming+driver+development' },
      ],
    },
    14: {
      description: `Dönemin finalinde, Windows işletim sisteminin kayıt defteri (Registry), Olay Görüntüleyicisi (Event Viewer) ve PowerShell gibi sistem yönetimi araçları işlenir. Sistem programcıları olarak yazılan Windows servislerinin arka planda (Daemon) nasıl sessizce çalıştırıldığı ve güvenlik politikalarıyla (Group Policy) nasıl sınırlandırıldığı öğrenilir. PowerShell kullanılarak Windows ortamındaki tüm süreçlerin, disklerin ve ağın tamamen nesne yönelimli (Object-Oriented) komut satırıyla otomatize edilmesi kurgulanır. Hem Linux (Bash) hem de Windows sistemlerin kalbine kadar inerek, donanımı tam performansla ve güvenle yönetebilecek bir "Sistem Mühendisi" (SysEngineer) vizyonuyla eğitim noktalanır. İşletim sistemlerine tam hükmetme sanatı tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=windows+powershell+sistem+y%C3%B6netimi+ve+otomasyon' },
      ],
    },
  },
  'BMB306 Yazılım Mühendisliği': {
    1: {
      description: `Bilgisayar bilimindeki problemleri çözmek için sadece kod yazmanın yetmediği, süreci mühendislik disipliniyle planlamanın gerekliliği vurgulanarak derse giriş yapılır. Karmaşık yazılım fikirlerini uluslararası bir standartla görselleştirmeye yarayan Birleşik Modelleme Dili (UML) ve nesne odaklı diyagramlar tanıtılır. Kodlama öncesinde sistemin Kullanım Durumu (Use Case), Sınıf (Class) ve Sıra (Sequence) diyagramlarıyla kağıt üzerinde kusursuzca çalışmasının provası yapılır. Başarısız yazılım projelerinin %70'inin kodlama değil, kötü planlama kaynaklı olduğu gerçeği vaka analizleriyle mühendis adaylarına aşılanır. Soyut kod dünyasını evrensel bir şemaya dökerek takım iletişimini sağlayan dildir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/uml/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+m%C3%BChendisli%C4%9Fi+giri%C5%9F+ve+uml+diyagramlar%C4%B1' },
      ],
    },
    2: {
      description: `Bir yazılımın fikir aşamasından ürünün emekliye ayrılmasına kadar geçen tüm evreleri kapsayan SDLC (Software Development Life Cycle) mimarisi öğrenilir. Klasik ve riskli olan Şelale (Waterfall) modeli ile günümüzdeki değişime hızlı adapte olan Çevik (Agile) ve Scrum metodolojileri proje yönetimi perspektifiyle kıyaslanır. Farklı gereksinimlere sahip projelerde (Örn: Bir oyun vs Banka otomasyonu) hangi süreç modelinin seçilmesinin başarı ihtimalini ve maliyeti nasıl etkileyeceği tartışılır. Sadece iyi kodlayan değil, kodu doğru süreçte ve takım uyumuyla (Sprint) canlıya alan (Deploy) geliştiriciler hedeflenir. Projeyi bir takvime ve disipline bağlayan zaman/süreç yönetimidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-development-life-cycle-sdlc/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+geli%C5%9Ftirme+ya%C5%9Fam+d%C3%B6ng%C3%BCs%C3%BC+sdlc+modelleri' },
      ],
    },
    3: {
      description: `Planlama, Analiz, Tasarım, Geliştirme, Test ve Bakım evrelerinden oluşan sistem geliştirme adımları detaylıca ve modüler olarak incelenir. Müşterinin aklındaki problemin adım adım teknik çözümlere, veritabanı şemalarına ve nihayetinde çalışan ürün modüllerine nasıl evrildiği kurgulanır. İleride kurumsal firmalarda çalışırken parçası olacağınız DevOps (Development & Operations) kültürünün ve sürekli entegrasyonun (CI/CD) bu aşamalara nasıl yerleştiği görülür. Kod parçacıklarının (Commit) nasıl testten geçip ana projeye güvenle dahil edildiği mühendislik akışlarıyla tartışılır. Bir fikrin dijital ve çalışan bir endüstri ürününe dönüşme algoritmasıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_engineering/software_engineering_overview.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+geli%C5%9Ftirme+s%C3%BCre%C3%A7leri+ve+a%C5%9Famalar%C4%B1' },
      ],
    },
    4: {
      description: `Müşteriden gelen istekleri ölçülebilir, test edilebilir ve mantıklı yazılım metriklerine dönüştüren Gereksinim Mühendisliği (Requirements Engineering) işlenir. Yazılımın ne yapacağını belirleyen fonksiyonel gereksinimler ile ne kadar hızlı ve güvenli yapacağını (Performans) belirleyen fonksiyonel olmayan gereksinimler ayrıştırılır. Paydaş mülakatları ve analiz yöntemleriyle toplanan bu veriler, Software Requirements Specification (SRS) dokümanı haline getirilerek teknik bir kontrata dönüştürülür. Çelişen (Conflict) veya eksik gereksinimlerin kodlama aşamasında nasıl devasa "Bug"lara ve bütçe zararlarına yol açacağı gerçeğiyle yüzleşilir. Tasarım ve koda giden yolun doğru rotasını belirleyen kritik aşamadır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-requirements-engineering/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+gereksinim+analizi+ve+srs+belgesi' },
      ],
    },
    5: {
      description: `Bir problemin yazılım mimarisine dönüştürülme evresi olan tasarım şablonları (Design Patterns) ve mimari kurgular incelenir. Örneğin, bir Dijital Bankacılık ve Finans Yönetimi uygulaması tasarlarken güvenlik, hız ve veri bütünlüğü gibi gereksinimlerin sisteme nasıl yedirileceği planlanır. Kodlamaya geçmeden önce sistemin bileşenlerinin (Örn: Veritabanı ve Kullanıcı Arayüzü) birbirleriyle olan etkileşimleri modüler bir yapıda (Coupling/Cohesion) dengelenir. İyi bir tasarımın, ileride çıkabilecek maliyetli güncellemeleri ve teknik borcu (Technical Debt) nasıl engelleyerek yazılımın ömrünü uzattığı ispatlanır. Mühendislerin sadece kod yazıcılığından çıkıp, büyük sistem mimarı vizyonuna ulaştığı ana aşamadır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_engineering/software_design_basics.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+tasar%C4%B1m+prensipleri+mimarisi' },
      ],
    },
    6: {
      description: `Tasarlanan mimarinin ve algoritmaların spesifik programlama dilleriyle koda dönüştürülmesi (Implementation) ve temiz kod (Clean Code) standartları işlenir. Takım içinde kod yazarken isimlendirme standartlarına, kodun okunabilirliğine ve SOLID prensiplerine uymanın yazılımın sürdürülebilirliğine (Maintainability) katkıları analiz edilir. Modüler programlama, kod tekrarından kaçınma (DRY) ve fonksiyonları tek bir amaca yönelik (Single Responsibility) yazma alışkanlığı kazandırılır. Başka mühendislerin yıllar sonra bile koda baktığında algoritmayı rahatça anlayabileceği kalitede, endüstriyel üretim yapmak hedeflenir. Teorik diyagramların makineyi harekete geçiren komutlara, zarif bir şekilde dökülmesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-coding-standards/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+ger%C3%A7ekle%C5%9Ftirme+temiz+kod+yazma+clean+code' },
      ],
    },
    7: {
      description: `Üretilen yazılımın "doğru sistemi mi inşa ediyoruz?" (Validation) ve "sistemi doğru mu inşa ediyoruz?" (Verification) test süreçleri öğrenilir. Birim testleri (Unit Testing), entegrasyon testleri ve beyaz kutu/kara kutu (White-box/Black-box) test stratejileriyle koddaki hataların (Bugs) kullanıcıya ulaşmadan avlanması sağlanır. Yazılımın performans testleriyle stres altına sokularak donanım darboğazlarının veya bellek sızıntılarının (Memory Leaks) canlı ortam öncesi nasıl tespit edildiği pratik edilir. Test Güdümlü Geliştirme (TDD) vizyonuyla, testlerin koddan sonra değil koddan önce yazılarak hatasız bir mimari garanti altına alınması aşılanır. Kusursuz ve güvenilir (Reliable) ürün teslimatının kalite kontrol duvarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_engineering/software_testing_overview.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+do%C4%9Frulama+ve+ge%C3%A7erleme+verification+validation+test' },
      ],
    },
    8: {
      description: `Canlıya alınan bir yazılımda zamanla oluşan hataları düzeltme, yeni özellikler ekleme veya performansı artırma süreci olan Bakım (Maintenance) aşaması incelenir. Bir yazılım projesinin ömrü boyunca harcanan toplam maliyetin (TCO) %60'ının neden sadece bu bakım evresine gittiği mühendislik istatistikleriyle tartışılır. Eski ve karmaşık kodların (Legacy Code), sistemi bozmadan nasıl iyileştirilebileceği (Refactoring) teknikleriyle teknik borçların nasıl ödendiği öğretilir. Değişen işletim sistemleri, güncel veritabanları veya donanım mimarilerine yazılımın uyarlanması (Adaptive Maintenance) stratejileri kurgulanır. Ürünün yıllar boyunca çökmeden, yaşayan ve nefes alan bir organizma gibi desteklenmesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-maintenance/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+bak%C4%B1m%C4%B1+software+maintenance+refactoring' },
      ],
    },
    9: {
      description: `Yazılımın belirlenen standartlara (Örn: ISO 9001, CMMI) uyup uymadığını kontrol eden, kodlamadan bağımsız Kalite Güvence (Quality Assurance - QA) süreçleri ele alınır. Projedeki hata oranlarının azaltılması, güvenlik açıklarının tespiti ve kullanıcı deneyiminin (UX) güvence altına alınması için süreç iyileştirme yöntemleri geliştirilir. Kalitenin yazılımın son aşamasında teste bırakılmayıp, daha tasarım ve planlama aşamalarında sürecin tamamına nasıl entegre edilmesi gerektiği felsefesi işlenir. Takım içi kod incelemeleri (Code Review/Peer Review) ve statik kod analizi araçlarıyla koddaki anormalliklerin otonom olarak yakalanması sağlanır. Yazılımın kurumsal güvenilirlik ve marka değeri taşımasını sağlayan kalite anayasasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_quality_management/index.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+kalite+g%C3%BCvencesi+software+quality+assurance+qa' },
      ],
    },
    10: {
      description: `Yazılımın zaman içindeki değişimlerini, sürümlerini ve ekip üyelerinin kod çakışmalarını yöneten Konfigürasyon Yönetimi (SCM) mantığı öğrenilir. Git, GitHub, GitLab gibi Sürüm Kontrol Sistemleri (VCS) kullanılarak aynı proje üzerinde düzinelerce mühendisin dallanarak (Branching) ve birleştirerek (Merging) nasıl güvenle çalıştığı pratik edilir. Hatalı bir kod canlı sunucuya çıktığında, sistemi çökertmeden saniyeler içinde eski ve güvenli versiyona (Rollback) nasıl geri dönüldüğü deneyimlenir. Sürekli Entegrasyon (CI) araçlarıyla, gönderilen her yeni kodun otomatik olarak derlenip test edilmesi (Pipeline) otomatize edilir. Yazılımın gelişim tarihini güvence altına alan ve ekip koordinasyonunu sağlayan can damarıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-configuration-management/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+konfig%C3%BCrasyon+y%C3%B6netimi+ve+git+kullan%C4%B1m%C4%B1' },
      ],
    },
    11: {
      description: `Yazılım geliştirme yaşam döngüsünün çeşitli aşamalarını (UML tasarımı, Kod üretimi, Test) otomatize eden CASE araçları (Computer-Aided Software Engineering) incelenir. Veritabanı şemalarından otomatik olarak arka uç (Backend/CRUD) kodları üreten (Forward Engineering) veya mevcut koddan UML şemaları çıkaran (Reverse Engineering) araçların verimliliği tartışılır. Jira, Trello, Azure DevOps gibi proje takip uygulamalarının gereksinimleri, görev atamalarını (Issue Tracking) ve test raporlarını tek bir ekranda nasıl birleştirdiği gösterilir. Bir mühendisin manuel ve amelelik gerektiren işlerden kurtularak vaktini tamamen algoritmik tasarıma odaklayabilmesini sağlayan profesyonel ortamdır. Verimliliği ve standartlaşmayı sağlayan mühendislik asistanlarıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_engineering/software_engineering_case_tools.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=case+ara%C3%A7lar%C4%B1+bilgisayar+destekli+yaz%C4%B1l%C4%B1m+m%C3%BChendisli%C4%9Fi' },
      ],
    },
    12: {
      description: `Projenin kapsamını, takvimini, bütçesini ve ekibini yöneterek başarısızlık risklerini ortadan kaldıran mühendislik Proje Yönetimi kavramlarına odaklanılır. Kaynak tahsisi, maliyet tahmini algoritmaları (COCOMO) ve personel motivasyonunun (Team Dynamics) projenin başarısı üzerindeki matematiksel ve sosyal etkileri analiz edilir. İstenmeyen ve bütçeyi sarsan "Kapsam Kayması" (Scope Creep) durumlarının, müşteriyle yapılan doğru analiz ve net sözleşmelerle nasıl engelleneceği tartışılır. İyi bir yazılımcı olmanın ötesine geçerek, şirketlerde Proje Yöneticisi (Project Manager / Scrum Master) rollerinde nasıl liderlik edileceğinin altyapısı atılır. İnsan, para ve zaman üçgenini yazılım ürününe çevirme vizyonudur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering-software-project-management-spm/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+proje+y%C3%B6netimi+ve+planlama' },
      ],
    },
    13: {
      description: `Dönem boyunca öğrenilen tüm mimari tasarım, UML, test süreçleri ve çevik (Agile) proje yönetim pratiklerinin gerçek bir dönem projesiyle jüri önünde savunulmasıdır. Ekipler halinde geliştirilen (Örneğin bir Borsa Analiz Botu veya Hastane Otomasyonu) projelerin, kodlamadan ziyade mühendislik tasarımı ve dökümantasyon (SRS, Test Cases) ağırlıklı olarak değerlendirildiği safhadır. Teknik olarak muazzam çalışan bir sistemin bile, müşteri gereksinimlerini karşılamadığında veya bütçeyi aştığında "başarısız" sayılacağı gerçeğiyle yüzleşilir. Tasarımdaki esnekliğin, test süreçlerindeki titizliğin ve takım içi görev dağılımının proje başarısındaki gözle görülür etkisi kanıtlanır. Akademik bilginin kurumsal proje teslimatı (Delivery) formatına dönüştüğü deneyimdir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/software_engineering/index.htm' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+m%C3%BChendisli%C4%9Fi+proje+sunumu+ve+savunmas%C4%B1' },
      ],
    },
    14: {
      description: `Proje sunumlarına devam edilerek, ekiplerin geliştirdikleri yazılımların kod inceleme (Code Review) ve sistem performansı açısından eleştirel analizleri yapılır. Proje süreçlerinde yaşanılan teknik borçlar, yanlış tasarım seçimlerinin getirdiği maliyetler ve bu krizlerin çevik (Agile) yönetimle nasıl aşıldığı üzerine retrospektif (Geriye Dönük) tartışmalar gerçekleştirilir. Farklı ekiplerin karşılaştığı darboğazlara (Bottleneck) farklı tasarım şablonlarıyla (Design Patterns) nasıl alternatif çözümler ürettiği gözlemlenerek vizyon genişletilir. Öğrencilerin sadece bireysel kodlayıcı (Coder) değil, kurumsal standartlarda ürün geliştiren birer "Yazılım Mühendisi" aklına ulaştıkları tasdik edilir. Dönem, yazılımın bir sanat değil bir mühendislik ve takım işi olduğu felsefesiyle sonlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/software-engineering/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yaz%C4%B1l%C4%B1m+m%C3%BChendisli%C4%9Fi+proje+kapan%C4%B1%C5%9F+ve+de%C4%9Ferlendirme' },
      ],
    },
  },
  'YDS002 İş Hayatında Yabancı Dil': {
    1: {
      description: `İş dünyasında ve özellikle uluslararası yazılım ekiplerinde iletişimin büyük bir kısmı resmi olmayan deyimler (idioms) üzerinden yürür. Günlük "Stand-up" toplantılarında veya Slack yazışmalarında "crunch time" (yoğun mesai) veya "back to the drawing board" (başa dönmek) gibi zaman ve eylem deyimlerinin ne anlama geldiğini bilmek zorunludur. Küresel bir teknoloji firmasında çalışırken yabancı yöneticilerin veya müşterilerin kullandığı alt metinleri anlamak, yanlış iletişimden doğacak kodlama hatalarını önler. Kelime kelime çeviri yapmanın işe yaramadığı bu dil yapıları, profesyonel şirket kültürüne (Company Culture) entegre olmanın ilk adımıdır. Doğal ve akıcı bir İngilizce ile takım içi sosyal zekanızı (EQ) dille ifade etme pratiğidir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/advanced-vocabulary/idioms' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+idioms+for+work' },
      ],
    },
    2: {
      description: `Hayvan, yol veya duygu durumlarını ifade eden deyimlerle iş İngilizcesindeki mecaz kullanımları (metaphors) derinleştirilir. Proje yönetim süreçlerinde bir hatayı veya problemi tartışırken kullanılan "elephant in the room" (görmezden gelinen büyük sorun) gibi ifadeleri anlamak, kriz anlarındaki (bug hunting) takım dinamiklerini okumanızı sağlar. Teknik yetenekleriniz ne kadar iyi olursa olsun, duyguları ve şirket içi politikaları anlatan bu deyimleri bilmemek sizi toplantılarda dışlanmış hissettirebilir. Müşteri geri bildirimlerindeki (feedback) kızgınlık veya memnuniyet seviyesini, kullandıkları deyimlerden analiz edebilme (sentiment analysis) vizyonu kazandırır. Yabancı dilde "satır aralarını okuma" beceriniz gelişir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/advanced-vocabulary/idioms' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=common+idioms+in+the+workplace' },
      ],
    },
    3: {
      description: `İnsan Kaynakları (HR) jargonu ve işe alım/işten çıkarma süreçlerinin İngilizce terminolojisi incelenir. İleride Silikon Vadisi merkezli veya Avrupa tabanlı bir teknoloji şirketine başvururken okuyacağınız "Job Description" (İş Tanımı) belgelerindeki beklentileri doğru analiz etmeniz için bu kavramlar şarttır. İşe alım sürecindeki (Recruitment Pipeline) mülakatlarda yeteneklerinizi pazarlarken veya şirket tekliflerini (Offer) değerlendirirken kullanılan evrensel kalıplardır. Özgeçmişinizi (CV) uluslararası tarama sistemlerine (ATS) uygun anahtar kelimelerle hazırlamak için gereken profesyonel kelime dağarcığını sağlar. İş arama sürecinizi lokalden globale taşıyacak olan kurumsal temeldir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/business-english/business-magazine/recruitment' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=english+for+human+resources+recruitment' },
      ],
    },
    4: {
      description: `Mesleki unvanları, kariyer gelişimini, yönetim kademelerini ve iş sözleşmelerini (Contracts) tanımlayan profesyonel sıfatlar öğrenilir. Freelance bir yazılım projesi alırken veya tam zamanlı bir işe girerken imzalayacağınız NDA (Gizlilik Sözleşmesi) ve telif hakkı belgelerindeki ağır hukuki/iş İngilizcesini anlamanızı sağlar. LinkedIn profilinizi oluştururken kodlama yeteneklerinizi sadece isimlerle değil, "agile", "proactive", "analytical" gibi güçlü ve endüstri standartlarındaki iş sıfatlarıyla (Business Adjectives) süslemeyi öğretir. "Junior, Mid-Level, Senior, Lead" gibi kariyer basamaklarındaki yönetsel beklentileri İngilizce olarak kavramanıza yardımcı olur. Kurumsal kimliğinizi yabancı dilde en doğru şekilde paketleme sanatıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/business-english/english-for-emails' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+job+adjectives+and+contracts' },
      ],
    },
    5: {
      description: `Etkili bir iş başvurusu yapma, niyet mektubu (Cover Letter) yazma ve çalışma saatleri ile değişim fiillerinin profesyonel kullanımı pratik edilir. "Asynchronous working" (eşzamanlı olmayan çalışma) veya "flexible hours" gibi modern uzaktan (Remote) yazılım geliştirme ekiplerinin kullandığı çalışma modellerinin jargonu öğrenilir. Bir sistemin veya projenin durumundaki değişiklikleri "evolve", "scale", "deprecate" gibi sektörel değişim fiilleriyle raporlama (Status Report) becerisi kazandırılır. Başvuru e-postalarınızda veya GitHub profilinizde kendinizi profesyonel bir formatta sunmanın dilbilgisel şablonları kurgulanır. Hedeflenen global IT şirketine atılan ilk yazılı adımın simülasyonudur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/business-english/english-for-emails/applying-for-a-job' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+apply+for+a+job+in+english+cover+letter' },
      ],
    },
    6: {
      description: `İzin isteme (PTO - Paid Time Off) süreçleri ve iş dünyasının, özellikle teknoloji sektörünün vazgeçilmezi olan Phrasal Verbs (Deyimsel Fiiller) işlenir. Bir sunucuyu kurarken "set up", sistemi kapatırken "shut down", yeni bir özelliği canlıya alırken "roll out" veya bir toplantıyı ertelerken "push back" demek, teknik iletişimin en doğal yoludur. Bu fiilleri bilmek, yabancı yazılımcılarla yapılan kod inceleme (Code Review) seanslarında veya teknik dokümantasyon okumalarında akıcılığınızı inanılmaz derecede artırır. Kurumsal hayatta tatil ve mazeret süreçlerini yöneticilere profesyonel bir İngilizce ile aktarmanın yazılı protokolleri öğretilir. Kitap İngilizcesinden, sokak ve ofis İngilizcesine geçişin kilit noktasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/vocabulary/advanced-vocabulary/phrasal-verbs' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+phrasal+verbs+for+work' },
      ],
    },
    7: {
      description: `Çevik yazılım (Agile/Scrum) kültürünün merkezinde yer alan toplantıların (Sprint Planning, Daily Stand-up) yönetim ve katılım jargonu incelenir. Yabancı takım arkadaşlarınızla yapacağınız bir toplantıda söz alma, kibarca araya girme (interrupting), bir fikre katılma veya profesyonelce itiraz etme (disagreeing) kalıpları öğretilir. Uygulama mimarisinde yapılmasını istediğiniz bir değişikliği üst yönetime veya müşteriye sunarken (Pitching) kullanılan ikna edici toplantı İngilizcesi pratik edilir. Toplantı gündemini (Agenda) belirleme ve toplantı notları (Meeting Minutes) çıkarma süreçleri dökümante edilir. Fikirlerinizi uluslararası bir masada (veya Zoom ekranında) özgüvenle savunma eğitimidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/business-english/english-for-meetings' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+for+meetings' },
      ],
    },
    8: {
      description: `Telefon ve VoIP (Zoom, Microsoft Teams) görüşmelerinde kendini tanıtma, mesaj bırakma ve teknik destek sağlama gibi sesli iletişim dinamikleri çalışılır. Uzaktan (Remote) çalışırken sunucuda yaşanan acil bir çöküşü (Crash) yurtdışındaki DevOps ekibine hızlı bir telefon aramasıyla aktarmak için gereken refleksif İngilizce geliştirilir. Kötü bağlantı durumlarında "You are breaking up" (Sesiniz kesik kesik geliyor) veya "There is a lag" (Gecikme var) gibi teknik aksaklıkları kibarca ifade etme yöntemleri öğretilir. Yazılı iletişimdeki düşünme payının olmadığı anlık sesli iletişimde panik yapmadan profesyonelliği koruma stratejileridir. Küresel iletişimde ses tonu ve hazırcevaplık sınırları test edilir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/business-english/business-magazine/telephone-english' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=telephone+english+phrases+business' },
      ],
    },
    9: {
      description: `İş dünyasında kullanılan deyimlerin, İnsan Kaynakları terimlerinin, toplantı ve telefon kalıplarının teorik ve pratik olarak değerlendirildiği ara sınav haftasıdır. Bilgisayar mühendisi adayının, teknik bilgisini (hard skills) küresel arenada satabilmesi için gereken iletişim (soft skills) altyapısının oturup oturmadığı test edilir. Senaryo bazlı (Örn: "Bir müşteriye e-posta ile projenin gecikeceğini bildirin") sorularla öğrencinin profesyonel üslubu ve kelime seçimi ölçülür. Yoğun dinleme (Listening) modüllerine geçilmeden önce kelime dağarcığının ve gramer yapılarının kalıcı hafızaya alındığı onaylanır. Küresel kariyere giden yolda ilk resmi dil yetkinlik ölçümüdür.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Farklı aksanları ve konuşma hızlarını anlamaya yönelik genel dinleme (Listening) yeteneğini geliştiren günlük ve iş odaklı ses kayıtları incelenir. "The interview" (Mülakat) gibi parçalarla, uluslararası teknoloji şirketlerinin İK ve teknik mülakatlarında sorulan soruları anlık olarak duyup (Parsing) beyninizde çevirme hızı artırılır. Hintli, Avrupalı veya Amerikalı yazılımcılarla aynı projede (Örneğin açık kaynak bir projede) çalışırken farklı İngilizce telaffuzlarına uyum sağlama (Adaptation) esnekliği kazandırılır. Sokak ve trafik gibi arka plan gürültülerinin olduğu ortamlarda bile ana dili İngilizce olanların ne demek istediğini bağlamdan (Context) çıkarma pratikleri yapılır. Kulak aşinalığı ile yabancı dil anlama bariyerinin yıkılma aşamasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+listening+interview+skills' },
      ],
    },
    11: {
      description: `Bir şirket kurma (Startup) terminolojisinden başlayıp, iş sonrası sosyal etkinliklere (Lunch in the pub) uzanan geniş yelpazeli dinleme aktiviteleri yapılır. Bir "Startup" kurmanın, melek yatırımcılarla (Angel Investors) görüşmenin ve iş fikrini sunmanın işitsel terminolojisi "Setting up a company" temasıyla mühendislik hedeflerinize entegre edilir. Yabancı müşterilerle veya iş arkadaşlarıyla yapılan iş yemeklerinde (Networking) sosyalleşebilmek için gereken günlük (Casual) İngilizce dinleme becerisi güçlendirilir. Teknik jargonun dışına çıkıp hayatın içinden İngilizceyi anlamak, çalıştığınız şirketin kültürüne tam entegre olmanızı sağlar. Sosyal zekanızı iş toplantıları dışındaki resmi olmayan (informal) ortamlarda da İngilizce kullanabilme vizyonudur.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=english+listening+practice+setting+up+business+startup' },
      ],
    },
    12: {
      description: `Seyahat, yurtdışı gezileri ve beklenmedik durumları (Quarantine) içeren dinleme parçalarıyla global hareketlilik (Global Mobility) İngilizcesi çalışılır. Büyük teknoloji konferanslarına (Örn: Web Summit, Google I/O) katılmak veya yurtdışındaki bir ofise geçici görevle (Relocation) gitmek (Traveling) gibi senaryolardaki pratik dinleme ihtiyaçları karşılanır. Havalimanı, gümrük, otel ve şehir içi ulaşım gibi temel hayatta kalma İngilizcesini hızlı ve farklı aksanlarla duyarak anlama kapasitesi test edilir. Geliştirilen bir uygulamanın global pazara çıkması gibi, mühendisin de lokal ofisinden çıkarak dünyaya açılmasının işitsel simülasyonudur. Değişen çevresel faktörlere İngilizce iletişimle adapte olma refleksidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=english+listening+practice+travel+and+business+trips' },
      ],
    },
    13: {
      description: `Çalışma ortamını (My office), hobileri ve günlük rutinleri betimleyen ses kayıtları dinlenerek çevre analizi ve mekan tasviri yetenekleri pekiştirilir. Uzaktan (Remote) çalışma kültüründe ekran başında kendi ofis ortamınızı, kullandığınız donanımları veya çalışma sistematiğinizi yabancı iş arkadaşlarınıza anlatma pratiği sağlar. Farklı coğrafyaları (London, Mauritius) anlatan dinleme parçalarıyla, uluslararası ekiplerdeki "farklılıkları" anlama ve o kültürlerin yaşam tarzlarını işitsel olarak algılama vizyonu katar. İş İngilizcesinin sadece "kod ve para" üzerine değil, insani iletişim ve hobiler üzerine de kurulu bir köprü olduğu fark edilir. İletişimi mekaniklikten kurtarıp doğallaştırma antrenmanıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/listening' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=english+listening+describing+office+and+routines' },
      ],
    },
    14: {
      description: `İş İngilizcesinde sıfatların gücünü artırmak için kullanılan derecelendirme ve pekiştirme zarfları (Intensifiers - highly, extremely, totally) öğrenilerek dönem sonlandırılır. Geliştirdiğiniz bir algoritmayı sadece "fast" (hızlı) diye pazarlamak yerine "highly efficient" (son derece verimli) veya "extremely scalable" (muazzam ölçeklenebilir) diyerek projelerinizin değerini kelimelerle katlama (Marketing) sanatıdır. Müşteri sunumlarında, yatırımcı toplantılarında veya GitHub'daki dokümantasyonlarınızda iddialı, profesyonel ve ikna edici bir metin yazarlığı (Technical Writing) standardına ulaşılır. Dönem boyunca öğrenilen tüm iş İngilizcesi yapılarının, son derece estetik ve kuvvetli (Impactful) bir retorikle harmanlandığı zirve noktasıdır. Global pazarda kodunuz kadar, kendinizi de en üst seviyede ifade etme yetkinliği kazanılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/adjectives-and-adverbs' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=business+english+intensifiers+and+strong+adjectives' },
      ],
    },
  },
  'BMSB417 Çevik yazılım geliştirme': {
    1: {
      description: `Geleneksel ve hantal yazılım süreçlerinin (Waterfall) yerini alan, değişime anında tepki verebilen Çevik (Agile) felsefe ile tanışılır. Özellikle bulut tabanlı ve arka uç (backend) projelerinde, müşteri gereksinimlerinin sürekli değiştiği dinamik ortamlarda hayatta kalmanın yolları öğrenilir. Extreme Programming (XP) metodolojisiyle, yazılım kalitesini artırmak için kodlama standartlarının ve iletişim pratiklerinin nasıl uç noktalara (extreme) taşındığı analiz edilir. Büyük ve karmaşık sistemleri küçük, teslim edilebilir parçalara bölerek riskleri minimize etme vizyonu kazanılır. Kod yazmaktan ziyade, yazılımı bir değer üretme sürecine dönüştürmenin ilk adımıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://agilemanifesto.org/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+ve+scrum+nedir+%C3%A7evik+yaz%C4%B1l%C4%B1m' },
      ],
    },
    2: {
      description: `Çevik projelerde uzun vadeli katı planlar yerine, kısa döngülere (Sprint) dayalı iteratif planlama (Release & Iteration Planning) süreçleri işlenir. Kullanıcı hikayeleri (User Stories) yazılarak, geliştirilecek özelliklerin teknik jargondan uzak, müşterinin anlayacağı bir dille nasıl ifade edileceği öğrenilir. Hikaye puanlama (Story Pointing) ve planlama pokeri (Planning Poker) gibi yöntemlerle efor tahminlemesi yapılarak takımın kapasitesi (Velocity) ölçülür. Bir backend geliştiricisi olarak, size atanan görevlerin iş değerini ve aciliyetini kavrayarak önceliklendirme (Prioritization) yapma yetiniz gelişir. Zamanı ve kaynakları en verimli şekilde yönetmenin çevik formülüdür.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.atlassian.com/agile/project-management' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+proje+planlama+sprint+planning' },
      ],
    },
    3: {
      description: `Çevik takımların başarısının kalbinde yatan yüz yüze iletişim, günlük toplantılar (Daily Stand-up) ve bilgi radyotörleri (Kanban board) kültürü incelenir. Eşli programlama (Pair Programming) sayesinde iki mühendisin aynı bilgisayarda nasıl birbirinin hatasını anında yakaladığı ve bilgi aktarımı yaptığı görülür. Açık ofis kültürünün, yazılım mimarisi üzerindeki anlık fikir alışverişlerini (Brainstorming) nasıl hızlandırdığı psikolojik ve teknik açılardan tartışılır. Takım içi engelleri (Impediments) şeffaf bir şekilde dile getirerek, "ben" yerine "biz" bilinciyle kod üretme felsefesi aşılanır. Mühendisliğin aslında büyük bir sosyal organizasyon olduğu gerçeğiyle yüzleşilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.scrum.org/resources/what-is-scrum' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+daily+standup+ve+tak%C4%B1m+ileti%C5%9Fimi' },
      ],
    },
    4: {
      description: `Extreme Programming'in temel değerleri olan İletişim, Basitlik, Geri Bildirim, Cesaret ve Saygı kavramları gerçek bir proje senaryosu üzerinden canlandırılır. Sadece o anki gereksinimi karşılayacak kadar kod yazma (YAGNI - You Aren't Gonna Need It) prensibiyle, gelecekteki ihtimaller için sistemi karmaşıklaştırmaktan kaçınılır. Kodu sürekli yeniden düzenleyerek (Refactoring) teknik borcu (Technical Debt) düşük tutmanın sistem ömrünü nasıl uzattığı kanıtlanır. Ortak kod sahipliği (Collective Code Ownership) kuralıyla, her takım üyesinin her koda müdahale edebilme cesareti ve sorumluluğu öğretilir. Hızlı ve hatasız yazılım teslimatının (Delivery) mühendislik disiplinidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.agilealliance.org/glossary/xp/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=extreme+programming+xp+nedir' },
      ],
    },
    5: {
      description: `Çevik süreçlerin can damarı olan versiyon kontrol sistemleri (Git, SVN), IDE'ler ve proje yönetim araçlarının (Jira, Trello) kurulum ve entegrasyonları yapılır. Takım üyelerinin kodlarını birbirini ezmeden nasıl birleştireceği (Branching & Merging) ve çatışmaları (Merge Conflict) nasıl çözeceği pratik edilir. Otomatize edilmiş yapı (Build) araçları kullanılarak, yerel bilgisayardaki kodun sunucu ortamına (Cloud) eksiksiz aktarımı için gereken altyapı hazırlanır. Standartlaşmış bir geliştirme ortamı sayesinde, ekibe yeni katılan bir mühendisin saatler içinde koda katkı vermeye başlaması hedeflenir. Dijital şantiyenin tüm alet çantasının üretime hazır hale getirilmesidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://git-scm.com/doc' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=git+github+kullan%C4%B1m%C4%B1+ve+branch+y%C3%B6netimi' },
      ],
    },
    6: {
      description: `Yazılım mimarisinin en baştan devasa dokümanlarla tasarlanması (BDUF) yerine, sistemin ihtiyaç oldukça organik olarak büyümesi (Emergent Design) mantığı işlenir. SOLID prensipleri ve tasarım şablonları (Design Patterns) kullanılarak, kodun her an değişime açık ama kırılmaya kapalı olması sağlanır. Spagetti kod yazmaktan kurtulup, modüller arasındaki bağımlılıkları (Coupling) gevşeterek sistemi test edilebilir parçalara ayırma vizyonu aşılanır. Tasarımın tek bir kişinin tekelinde değil, tüm takımın ortak akıl ve refactoring süreçleriyle evrimleştiği çevik bir organizma olduğu gösterilir. Mükemmelliğin baştan değil, iterasyonlarla elde edildiği mimari yaklaşımdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://agilemodeling.com/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+design+principles+solid' },
      ],
    },
    7: {
      description: `Yazılan her bir fonksiyonun veya metodun (Unit), beklenen çıktıyı verip vermediğini otomatik olarak kontrol eden test kodlarının (JUnit, NUnit) yazımı öğrenilir. Manuel testlerin insan hatasına açık ve yavaş olması nedeniyle, kod kalitesini saniyeler içinde doğrulayan bu otomasyon kültürüne geçiş yapılır. Bir backend modülünde (Örn: Veritabanı hesaplaması) değişiklik yaptığınızda, diğer yerlerin bozulup bozulmadığını (Regression) anında görmenizi sağlar. Hataların canlı (Production) ortama çıkmadan yakalanması sayesinde şirketin zaman ve prestij kaybı önlenir. Profesyonel bir mühendisin kendi kodunun kefili olmasını sağlayan kalite duvarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://junit.org/junit5/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=unit+test+nedir+junit+kullan%C4%B1m%C4%B1' },
      ],
    },
    8: {
      description: `Geleneksel "Önce kod yaz, sonra test et" mantığını tamamen tersine çevirerek, "Önce testini yaz, sonra onu geçecek kodu yaz" (Red-Green-Refactor) felsefesi işlenir. Bu disiplin sayesinde gereksiz tek bir satır kod bile yazılmaz ve sistem baştan aşağı %100 test edilebilir bir tasarıma zorlanır. TDD ile geliştirilen projelerde hata (Bug) oranlarının dramatik şekilde düştüğü ve kod dokümantasyonunun bizzat testler tarafından sağlandığı kanıtlanır. Çevik ekiplerde TDD kullanmak, kodu refactor ederken mühendise arkasında kapı gibi sağlam bir güvenlik ağı olduğu hissini verir. Yazılım geliştirmeyi bir sanattan, ölçülebilir bir bilime dönüştüren tekniktir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=test+driven+development+tdd+nedir' },
      ],
    },
    9: {
      description: `Çevik düşünce yapısı, Extreme Programming kuralları, Git kullanımı ve Test Güdümlü Geliştirme (TDD) kavramlarının teorik ve analitik olarak sınandığı haftadır. Öğrencinin "Kod çalışıyorsa dokunma" mantığından çıkıp, "Kod çalışıyor ama testleri var mı ve refactor edilebilir mi?" bilincine ulaşıp ulaşmadığı ölçülür. Çevik ritüellerin (Sprint, Daily, Retrospective) amaçlarını kurumsal bir vizyonla kavrama yeteneği senaryo sorularıyla test edilir. Sürekli entegrasyon ve canlı proje implementasyonlarına geçmeden önce metodolojik altyapının sağlamlığı onaylanır. Kaliteli mühendislik süreçlerinin akademik kontrol noktasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Ara sınav sonrası, gerçek bir endüstriyel problemin (Örn: Bir IoT bulut yönetim paneli) XP kurallarıyla sıfırdan kodlanmaya başlandığı pratik uygulama aşamasıdır. Takım eşli programlama (Pair Programming) ile bilgisayar başına geçerek, belirlenen kullanıcı hikayelerini (User Stories) TDD mantığıyla koda döker. Geliştirme esnasında müşteri isteklerinin (Requirements) aniden değişmesi simüle edilerek, takımın bu değişime kod kırılmadan nasıl adapte olduğu gözlemlenir. Basit tasarım (Simple Design) ilkesi gereği, sadece o iterasyonun ihtiyaçlarını karşılayan en yalın ve temiz veritabanı/sınıf modeli kurulur. Çevik felsefenin teoriden çıkıp tamamen klavye üzerinde eyleme dönüştüğü haftadır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.agilealliance.org/agile101/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+software+development+project+example' },
      ],
    },
    11: {
      description: `(Örnek sisteme devam) İterasyonların ilerlemesiyle birlikte sistemin büyüdüğü ve Refactoring ihtiyacının kritik hale geldiği geliştirme döngüsüdür. Eklenen yeni modüllerin (Örn: Kullanıcı yetkilendirme) eski modüllerle çakışmasını engellemek için mevcut test senaryoları (Unit Tests) sürekli çalıştırılarak güvence sağlanır. Takım içi iletişimde yaşanan darboğazlar "Stand-up" toplantılarında çözülerek görevlerin hızla tamamlanması (Burndown) sağlanır. Kodu kendinize saklamak yerine, sürekli ana dala (Main Branch) göndererek ortak kod sahipliği (Collective Ownership) prensibi uygulamalı olarak yaşanır. Yazılımın organik büyüme sancılarını çevik pratiklerle atlatma deneyimidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://refactoring.guru/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=code+refactoring+techniques' },
      ],
    },
    12: {
      description: `Geliştirilen yazılımın müşteri (veya Ürün Sahibi - Product Owner) tarafından belirlenen iş kurallarına tam olarak uyup uymadığını denetleyen Kabul Testleri (Acceptance Tests) öğrenilir. Unit testler yazılımcı için kodun doğru çalıştığını kanıtlarken, Kabul testleri sistemin "doğru işi" yaptığını müşteriye kanıtlayan otomasyon senaryolarıdır (Örn: BDD, Cucumber). Müşteriyle birlikte hazırlanan "Kabul Kriterleri" (Acceptance Criteria) sağlanmadan hiçbir işin "Bitti" (Definition of Done) sayılamayacağı kuralı işletilir. Yazılımın teknik mükemmelliği ile iş değeri arasındaki o hassas denge, bu son kullanıcı simülasyonlarıyla onaylanır. Müşteri memnuniyetini kod ile garanti altına almanın standartlarıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://cucumber.io/docs/bdd/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=acceptance+testing+bdd+cucumber' },
      ],
    },
    13: {
      description: `Yazılımcıların kendi bilgisayarlarında yazdıkları kodların, günde birkaç kez merkezi bir sunucuda (CI Server - Jenkins, GitLab CI) otomatik olarak birleştirilmesi (Continuous Integration) işlenir. Bütünleştirme sırasında tüm testlerin otomatik çalışması sağlanarak, kimin kodunun sistemi bozduğu (Build Break) saniyeler içinde tespit edilir. "Benim bilgisayarımda çalışıyordu" bahanesinin çevik takımlarda yeri olmadığı, ortak bulut (Cloud) ortamında çalışan kodun geçerli olduğu kültürü aşılanır. Kodun her an canlıya alınmaya (Deploy) hazır tutulması hedeflenerek geliştirme hızı ve güvenilirliği maksimize edilir. Modern DevOps kültürünün ve arka uç otomasyonlarının en büyük can damarıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.atlassian.com/continuous-delivery/continuous-integration' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=continuous+integration+ci+cd+jenkins' },
      ],
    },
    14: {
      description: `Dönemin finalinde, projenin sağlığını ölçen kod karmaşıklığı (Cyclomatic Complexity), test kapsamı (Test Coverage) gibi yazılım metrikleri ve SonarQube gibi analiz araçları tanıtılır. Takımın Sprint sonlarında yaptığı Retrospektif (Geçmişe Bakış) toplantılarıyla nelerin iyi gittiği, nelerin iyileştirilmesi gerektiği değerlendirilerek sürekli gelişim (Kaizen) hedeflenir. Proje takip araçları (Jira) üzerinden Burndown (Kalan iş) grafikleri yorumlanarak takımın hız (Velocity) istatistikleri çıkarılır. Çevik yazılım geliştirmenin sadece hızlı kod yazmak değil, sürdürülebilir, ölçülebilir ve mutlu takımlarla kaliteli ürün teslim etme vizyonu olduğu tescillenerek eğitim noktalanır. Profesyonel bir çevik mühendislik kariyerinin kapıları ardına kadar açılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.sonarqube.org/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=agile+metrics+burndown+chart+and+retrospective' },
      ],
    },
  },
  'BMSB406 Makine Öğrenmesine Giriş': {
    1: {
      description: `Makine öğrenmesinin atası olan Yapay Zeka (AI) felsefesi, zeki etmenler (Intelligent Agents) ve bilgisayarlara düşünme yetisi kazandırma çabalarının temelleri atılır. Geleneksel programlamada "Kurallar + Veri = Çıktı" iken, makine öğrenmesinde "Veri + Çıktı = Kurallar" şeklinde değişen o devrimsel paradigma kayması (Paradigm Shift) incelenir. İleride IoT cihazlarından toplayacağınız devasa verileri veya bulut sistemlerindeki algoritmaları akıllandırmak için bu temel felsefeye ihtiyacınız olacak. Derin Öğrenme, Veri Madenciliği ve Yapay Zeka arasındaki sınırlar netleştirilerek sektörel terminoloji oturtulur. Zeki sistemlerin dijital evrendeki doğuş serüvenidir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://aima.cs.berkeley.edu/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yapay+zeka+nedir+makine+%C3%B6%C4%9Frenmesi+fark%C4%B1' },
      ],
    },
    2: {
      description: `Geçmiş deneyimlerden (Veri) öğrenerek geleceği tahmin eden Makine Öğrenmesi (ML) algoritmalarının tarihsel gelişimi ve endüstriyel başarı hikayeleri anlatılır. Otonom araçlar, spam e-posta filtreleri, ürün öneri sistemleri ve ses tanıma gibi gündelik hayatımızı saran ML uygulamalarının arka plan mantığı çözümlenir. İstatistiksel modellerin artan işlem gücü (GPU) ve büyük veri (Big Data) ile birleşerek nasıl günümüzün en değerli teknolojisine dönüştüğü tartışılır. Bir bilgisayar mühendisi olarak, sadece kural bazlı kod yazan değil, veriden kendi kuralını öğrenen otonom sistemler (Data-Driven) tasarlama vizyonu kazandırılır. Verinin dijital akla dönüşme hikayesidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://mitpress.mit.edu/9780262538029/machine-learning/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+nedir+kullan%C4%B1m+alanlar%C4%B1' },
      ],
    },
    3: {
      description: `Algoritmaların yakıtı olan ham verinin (Raw Data) toplanması, analiz edilmesi ve makineye sunulmadan önce geçirdiği temizlik süreçleri (Data Preprocessing) öğrenilir. Kirli veya eksik veriyle (Garbage In, Garbage Out) dünyanın en iyi algoritmasının bile çöp üreteceği gerçeği mühendislik perspektifiyle aşılanır. Aykırı değerlerin (Outliers) tespiti, eksik verilerin doldurulması ve kategorik verilerin sayısal matrislere dönüştürülmesi (One-Hot Encoding) gibi kritik adımlar pratik edilir. Python üzerinde Pandas ve NumPy gibi kütüphaneler kullanılarak veritabanlarından çekilen bilginin modellemeye hazır hale getirilmesi sağlanır. Başarılı bir yapay zekanın gizli kahramanlık aşamasıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.cs.waikato.ac.nz/ml/weka/book.html' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+%C3%B6n+i%C5%9Fleme+data+preprocessing+python' },
      ],
    },
    4: {
      description: `Algoritmaların veriye yaklaşım biçimleri olan Gözetimli (Supervised), Gözetimsiz (Unsupervised), Yarı-Gözetimli ve Pekiştirmeli (Reinforcement) öğrenme türleri karşılaştırılır. Hedef değişkenin (Etiket) bilindiği durumlar ile, verinin kendi içindeki gizli örüntüleri (Pattern) bulmaya çalıştığı durumlar arasındaki mimari farklar analiz edilir. AlphaGo gibi oyun oynayan yapay zekaların arkasındaki ödül/ceza mantığına dayanan Pekiştirmeli öğrenmenin otonom sistemlerdeki gücü tartışılır. Problemi doğru teşhis edip, ona en uygun öğrenme stratejisini (Algoritmayı) seçebilme kararlılığı kazandırılır. Makinelere öğretmenlik yapmanın farklı pedagojik yollarıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://link.springer.com/book/10.1007/978-3-030-22475-2' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+types+supervised+unsupervised+reinforcement' },
      ],
    },
    5: {
      description: `Geçmişte etiketlenmiş verileri kullanarak gelecekteki yeni verileri tahmin eden (Sınıflandırma ve Regresyon) Gözetimli Öğrenme algoritmalarının çalışma felsefesi işlenir. Ev fiyatlarını tahmin etmek (Regresyon) veya bir hastanın verilerinden kanser olup olmadığını bulmak (Sınıflandırma) gibi gerçek dünya problemleri formüle edilir. Eğitim verisiyle (Training Data) bir ağırlık matrisi (Model) oluşturan sistemin, matematiği kullanarak genelleme (Generalization) yapma yeteneği incelenir. C# veya Python backend sistemlerinize akıllı tahmin yetenekleri kazandırmak için kullanacağınız en temel ve yaygın makine öğrenmesi sınıfıdır. Geçmişin tecrübesiyle geleceğin röntgenini çekme sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/supervised-machine-learning/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6zetimli+%C3%B6%C4%9Frenme+supervised+learning+nedir' },
      ],
    },
    6: {
      description: `Etiketsiz veriler yığını içinde gizli kalmış grupları, yapıları ve ilişkileri keşfetmeye yarayan Gözetimsiz Öğrenme algoritmaları öğrenilir. E-ticaret sitelerinde müşterilerin satın alma alışkanlıklarına göre otomatik segmentlere ayrılması (Müşteri Kümeleme - Clustering) bu yöntemin en popüler örneğidir. Yüksek boyutlu karmaşık veri setlerindeki gereksiz değişkenleri silerek sistemi hızlandıran Boyut İndirgeme (PCA) teknikleri analiz edilir. Veri mühendisi olarak, makineye ne bulacağını söylemeden makinenin kendi kendine anlamsal bağlar kurmasına (Keşif) izin verirsiniz. Büyük veri okyanusunda pusulasız bir şekilde anlamlı adalar bulma işlemidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/unsupervised-machine-learning/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6zetimsiz+%C3%B6%C4%9Frenme+unsupervised+learning+k%C3%BCmeleme' },
      ],
    },
    7: {
      description: `Gözetimli öğrenmenin kalbi olan K-En Yakın Komşu (K-NN), Lojistik Regresyon ve Destek Vektör Makineleri (SVM) gibi temel sınıflandırma algoritmaları koda dökülür. K-NN algoritmasının "bana arkadaşını söyle, sana kim olduğunu söyleyeyim" mantığıyla veriler arası uzaklık (Öklid) hesaplayarak nasıl çalıştığı ispatlanır. Düşük işlem gücüne sahip IoT cihazlarında bile hızlıca çalışabilen hafif algoritmaların (Lightweight Models) seçimi ve optimizasyonu tartışılır. Matematiksel karar sınırları (Decision Boundaries) çizilerek verinin 0 ve 1 uzaylarında nasıl ayrıştırıldığı görselleştirilir. Veriyi doğru kategorilere atamanın (Tasnif) algoritmik temelleridir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/supervised_learning.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+s%C4%B1n%C4%B1fland%C4%B1rma+algoritmalar%C4%B1+knn+svm' },
      ],
    },
    8: {
      description: `İstatistiğin ve koşullu olasılığın (Conditional Probability) şaheseri olan Naive Bayes algoritması ve Bayes Ağları mantığı derinlemesine incelenir. "Eğer bir kelime 'kampanya' ise, o mailin Spam olma olasılığı %95'tir" şeklindeki bağımsız olay ihtimallerinin makineye nasıl karar verdirttiği kurgulanır. Tıbbi teşhis sistemleri veya metin duygu analizi (Sentiment Analysis) gibi belirsizliğin yüksek olduğu senaryolarda Bayes yaklaşımının olağanüstü hızı ve başarısı kanıtlanır. Kesin kurallar (If-Else) yerine, ihtimallere dayalı (Probabilistic) karar ağları kurarak sistemin esnekliği maksimize edilir. Şansın ve belirsizliğin matematiksel olarak yönetilmesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/naive-bayes-classifiers/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=naive+bayes+algoritmas%C4%B1+ve+bayes+a%C4%9Flar%C4%B1' },
      ],
    },
    9: {
      description: `Makine öğrenmesinin üzerine inşa edildiği varyans, standart sapma, normal dağılım ve korelasyon gibi istatistiksel temeller uygulamalı olarak hatırlatılır. Bir modelin hata payını (Kayıp Fonksiyonu) düşürmek (Gradient Descent) için değişkenler arasındaki matematiksel ilişkinin (Korelasyon) ne kadar kritik olduğu vurgulanır. Aşırı öğrenme (Overfitting) veya eksik öğrenme (Underfitting) sorunlarının arkasındaki o istatistiksel yanlılık-varyans dengesizliği (Bias-Variance Tradeoff) analiz edilir. Kod yazmanın ötesine geçerek, modelinizin neden yanlış çalıştığını istatistiksel verilerle kanıtlama yeteneği kazandırılır. Algoritmaların sağlığını ölçen analitik kan testleridir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/statistics/index.htm' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+i%C3%A7in+istatistik+temelleri' },
      ],
    },
    10: {
      description: `Elimizdeki veri setini modele ezberletmemek için Eğitim (Train), Doğrulama (Validation) ve Test (Test) alt kümelerine ayırma stratejileri öğrenilir. K-Katlı Çapraz Doğrulama (K-Fold Cross Validation) yöntemiyle, modelin daha önce hiç görmediği yeni veriler karşısındaki genelleme başarısının (Robustness) nasıl ölçüldüğü pratik edilir. Eğitim verisinde %99 başarılı olan bir modelin, test verisinde neden çuvalladığını (Overfitting) çözerek sistem mimarisini optimize etme disiplini aşılanır. Ürettiğiniz yapay zeka modelinin canlı (Production) sunuculara alınmadan önceki en kritik kalite güvence (QA) süreçleridir. Yapay zekanın gerçek dünya sınavlarına hazırlık aşamasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/modules/cross_validation.html' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=train+test+split+ve+cross+validation+nedir' },
      ],
    },
    11: {
      description: `Sınıflandırma ve regresyon modellerinin performansını ölçmek için kullanılan Accuracy (Doğruluk), Precision (Kesinlik), Recall (Duyarlılık) ve F1 Skoru gibi can alıcı metrikler işlenir. Kanser tespiti yapan bir algoritmada, hasta birine "sağlam" demenin (False Negative), sağlam birine "hasta" demeden (False Positive) neden çok daha ölümcül olduğu ve buna göre modelin (Recall) nasıl ayarlanacağı tartışılır. Tek başına "Accuracy" değerinin dengesiz (Imbalanced) veri setlerinde nasıl yalan söyleyebileceği mühendislik vakalarıyla ispatlanır. Sistemin başarısını sadece çalışmasıyla değil, kritik performans göstergeleriyle (KPI) savunabilme gücü verir. Modelin güvenilirliğinin sayısal röntgenidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+de%C4%9Ferlendirme+metrikleri+accuracy+precision' },
      ],
    },
    12: {
      description: `Tahminlerin nerede ve nasıl yanıldığını görsel bir tabloda sunan Karmaşıklık Matrisi (Confusion Matrix) ve ROC eğrisinin (Altta Kalan Alan - AUC) analitik okuması yapılır. Modelin doğru bildikleri ile yanlış sınıfa atadıklarının röntgenini çekerek, algoritmanın zayıf noktalarına (Örn: Köpekleri kedi sanması) cerrahi müdahale yapma fırsatı bulunur. Eşik değerlerini (Threshold) kaydırarak, sistemin hassasiyetini (Sensitivity) iş kurallarına (Business Logic) göre nasıl esnetebileceğiniz kurgulanır. İstatistiğin gücünü görsel analitiğe dönüştürerek, yapay zekanın patronu olduğunuzu kanıtlayan üst düzey analiz yöntemidir. Hatayı görerek modeli mükemmelleştirme sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/confusion-matrix-machine-learning/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=confusion+matrix+karma%C5%9F%C4%B1kl%C4%B1k+matrisi+ve+roc+e%C4%9Frisi' },
      ],
    },
    13: {
      description: `İnsan düşünce yapısına en yakın, koşullara (if-else) göre dallanarak karar veren Karar Ağaçları (Decision Trees) ve entropi/bilgi kazancı (Information Gain) matematiği öğrenilir. Modelin neden o kararı verdiğini (Örn: Neden kredi başvurusu reddedildi?) müşteriye açıklayabilmek (Explainability) için kara kutu olmayan bu şeffaf algoritmaların önemi vurgulanır. Ağacın çok derinleşip veriyi ezberlemesini engellemek için kullanılan "Budama" (Pruning) teknikleriyle model optimizasyonu (Hyperparameter Tuning) pratik edilir. Gelecekte Kolektif Öğrenme (Random Forest) mimarilerinin üzerine inşa edileceği en güçlü temel atılır. Mantıksal çıkarımların ağaç yapısında kök salmasıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/modules/tree.html' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=karar+a%C4%9Fa%C3%A7lar%C4%B1+decision+trees+machine+learning' },
      ],
    },
    14: {
      description: `Dönemin finalinde, gözetimsiz öğrenmenin kralı K-Means (K-Ortalamalar) ve Hiyerarşik Kümeleme algoritmaları işlenerek verideki gizli adalar keşfedilir. Hiçbir etiket verilmeden, müşterilerin davranışlarına göre otomatik segmentlere ayrılması veya görüntü piksellerinin renk kümelerine göre ayrıştırılması (Image Segmentation) projeleri kodlanır. Optimum küme sayısını (K) belirlemek için Dirsek Yöntemi (Elbow Method) gibi analitik araçlar kullanılarak matematiksel ispatlar yapılır. Klasik programlama ile çözülmesi imkansız olan, geleceğin veri odaklı dünyasını yönetecek yapay zeka felsefesine tam bir giriş yapılarak eğitim noktalanır. Ham veriden kendi kendine doğan anlamsal düzenin zaferidir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/modules/clustering.html' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=k+means+k%C3%BCmeleme+clustering+algoritmas%C4%B1' },
      ],
    },
  },
  'BMSB423 Sayısal Hesaplama Programları': {
    1: {
      description: `Mühendislik ve bilimsel hesaplamaların dünya standardı olan MATLAB (Matrix Laboratory) ortamına, arayüzüne ve temel komut sözdizimine giriş yapılır. Devasa matrislerle ve lineer cebir denklemleriyle çalışırken, C veya Python'da onlarca satır süren işlemlerin MATLAB'da tek bir fonksiyonla nasıl çözüldüğü görülür. Değişken atamaları, çalışma alanı (Workspace) yönetimi ve komut satırı hileleriyle güçlü bir hesap makinesinden öte bir programlama dili olduğu kavranır. Gelecekte sinyal işleme, kontrol sistemleri veya yapay zeka modelleri tasarlarken kullanılacak en sağlam sayısal altyapının ilk adımıdır. Matematiksel problemleri görsel ve kodlanabilir formata taşıma evresidir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/getting-started-with-matlab.html' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+giri%C5%9F+dersleri+temel+komutlar' },
      ],
    },
    2: {
      description: `MATLAB üzerinde \`for\`, \`while\` döngüleri ve \`if-else\` mantıksal kontrolleri kullanılarak sayısal analiz metotlarının (Örn: Hata hesaplamaları) kodlanması öğrenilir. Vektörizasyon (Vectorization) tekniği sayesinde, döngüleri kullanmadan matrisleri tek hamlede işleyerek CPU hesaplama süresini yüzlerce kat hızlandırma (Optimization) felsefesi aşılanır. Standart kütüphane fonksiyonlarının (built-in functions) arka planındaki sayısal limitler ve kayan nokta (floating point) yuvarlama hataları pratik kod parçacıklarıyla test edilir. Geliştireceğiniz mühendislik projelerinde, algoritmanın sadece doğru çalışması değil, donanımı (RAM/CPU) en verimli şekilde kullanması vizyonu kazandırılır. Döngülerden kurtulup matris tabanlı düşünme sanatıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/matlab_prog/vectorization.html' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+programlama+d%C3%B6ng%C3%BCler+ve+vekt%C3%B6rizasyon' },
      ],
    },
    3: {
      description: `Gerçek dünyadaki fiziksel ve mühendislik problemlerinin (Örn: Serbest düşüş, nüfus artışı veya RC devreleri) diferansiyel denklemlerle kurulup MATLAB'a aktarılması sürecidir. Fonksiyon grafikleri (2D ve 3D Plotlar) çizdirilerek, soyut matematiksel denklemlerin zamana veya uzaya bağlı görsel davranışları (Simulation) analiz edilir. Toplanan veriler üzerine eğri uydurma (Curve Fitting) işlemleri yapılarak, eldeki sınırlı bilgiden sistemin genel davranış karakteristiği ortaya çıkarılır. Veri mühendisliği (Data Engineering) projelerinizde veriyi sadece tutmak değil, onun ardındaki fiziksel veya istatistiksel modeli (Pattern) bulma vizyonu katar. Doğanın kurallarını kod satırlarına ve grafiklere dönüştürme pratiğidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/discovery/mathematical-modeling.html' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+ile+matematiksel+modelleme+ve+grafik+%C3%A7izimi' },
      ],
    },
    4: {
      description: `İlk üç haftada öğrenilen temel fonksiyonlar ve modelleme yetenekleri kullanılarak öğrencilerin seçeceği mini bir mühendislik probleminin sayısal çözümü kurgulanır. Karmaşık bir formülün (Örn: Bir sensörün gürültülü verisinin analizi) MATLAB üzerinde modüler (function dosyaları) olarak yazılarak çalıştırılması istenir. Hata ayıklama (Debugging) araçları aktif olarak kullanılarak, algoritmanın nerede tıkandığını veya matematiksel olarak nerede patladığını (NaN, Inf) bulma disiplini edinilir. Sadece kod yazmak değil, bir mühendislik problemini baştan sona dokümante ederek (Live Scripts) sunma yeteneği geliştirilir. Teorik bilgilerin ilk kez bağımsız bir algoritmik ürüne dönüştüğü aşamadır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/matlab_prog/debugging-matlab-programs.html' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+live+scripts+ve+debugging+kullan%C4%B1m%C4%B1' },
      ],
    },
    5: {
      description: `Çözümü analitik olarak zor olan non-lineer (doğrusal olmayan) fonksiyonların köklerini bulmak için kullanılan Bisection ve Newton-Raphson algoritmaları MATLAB ile kodlanır. Fonksiyonların \`fzero\` gibi hazır araçlarla anında çözülmesinin arkasındaki o iteratif (tekrarlı) sayısal mantık sıfırdan yazılarak kavranır. Optimizasyon problemlerinde bir fonksiyonun maksimum/minimum tepe noktalarını ararken sistemin nasıl hızla yakınsadığı (convergence) veya ıraksadığı görsel grafiklerle test edilir. Yapay zeka ve makine öğrenmesinde kayıp fonksiyonlarını (Loss Functions) minimize etmeye yarayan algoritmik felsefenin en temel yapı taşlarıdır. Sayısal yaklaşımlarla fonksiyonların sınırlarını keşfetme sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/math/roots-of-scalar-functions.html' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+fzero+ve+newton+raphson+y%C3%B6ntemi' },
      ],
    },
    6: {
      description: `Ayrık veri noktaları arasındaki bilinmeyen değerleri tahmin etmeye yarayan interpolasyon yöntemleri (Linear, Spline, Pchip) MATLAB'ın \`interp1\` gibi fonksiyonlarıyla incelenir. Düşük çözünürlüklü bir görüntüyü büyütürken veya eksik sensör (IoT) okumalarını tamamlarken (Data Imputation) kullanılan bu algoritmaların arka planı öğrenilir. Yüksek dereceli polinom interpolasyonlarının yarattığı o meşhur tehlikeli dalgalanmalar (Runge Fenomeni) grafiksel olarak kanıtlanarak defansif analiz yöntemleri tartışılır. Verinin olmadığı yerlerde bile, sistem davranışına en uygun tahmini yapabilme (Predictive modeling) yetisi kazandırılır. Noktaları matematiksel zekayla birleştirip pürüzsüzleştirme işlemidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/interpolation.html' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+interpolasyon+interp1+spline' },
      ],
    },
    7: {
      description: `Analitik olarak türevi alınamayan veri setlerinin (Örneğin anlık toplanan GPS hız verileri) anlık değişim oranlarını hesaplayan sayısal türev (Farklar) algoritmaları işlenir. Taylor serileri yardımıyla ileri, geri ve merkezi fark yaklaşımları MATLAB'da kodlanarak, zaman aralığının (dt) küçülmesiyle doğruluğun artması paradoksu incelenir. Yuvarlama hatalarının (Round-off errors) türev işleminde nasıl patladığını (Noise amplification) görerek, gerçek dünyadaki gürültülü (noisy) sensör verilerinden türev alırken ne kadar dikkatli olunması gerektiği aşılanır. Otonom araçların veya oyun fizik motorlarının (Physics Engine) anlık ivme hesaplamalarının dijital temelidir. Değişimin hızını ayrık verilerden söküp alma sanatıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/ref/diff.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+say%C4%B1sal+t%C3%BCrev+hesaplama+diff' },
      ],
    },
    8: {
      description: `Eğri altında kalan alanı veya sistemlerin kümülatif toplamlarını hesaplamaya yarayan Trapez (Yamuk) ve Simpson sayısal integral yöntemleri MATLAB ile kodlanır. \`trapz\` veya \`integral\` fonksiyonlarının kullanımıyla, düzensiz veri setlerinin (Örn: Zamanla değişen güç tüketimi) toplam enerji değerlerinin nasıl hızla bulunduğu simüle edilir. Çok katlı integrallerin for döngüleri yerine matris operasyonlarıyla nasıl saniyenin onda biri süresinde çözülebildiği gösterilerek yazılım optimizasyonu öğretilir. Olasılık yoğunluk fonksiyonlarından kümülatif değerler (AUC) çıkaran veri bilimi süreçlerinin (Data Science) arka planındaki matematiksel motordur. Sonsuz küçük parçaları bilgisayar belleğinde toplayıp somut sonuçlara ulaşma evresidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/numerical-integration-and-differential-equations.html' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+say%C4%B1sal+integral+trapz+simpson' },
      ],
    },
    9: {
      description: `Sayısal algoritmalar, interpolasyon, türev ve integral hesaplamalarının MATLAB ortamındaki teorik ve pratik yansımalarının test edildiği ara değerlendirmedir. Öğrencinin sadece formülleri bilmesi değil, bu formülleri doğru MATLAB komutlarıyla matris tabanlı ve optimize edilmiş (vektörize) bir şekilde yazıp yazamadığı ölçülür. Sayısal hataların (kesme/yuvarlama) analiz edilmesi ve en uygun sayısal metodun seçilmesi gibi mühendislik karar mekanizmaları sınanır. Diferansiyel denklemler ve lineer sistemler gibi ileri düzey simülasyonlara geçmeden önce yazılım ve matematik bağının sağlamlık onayıdır. Algoritmik düşüncenin sayısal dildeki vizesidir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Dinamik sistemlerin zamana bağlı değişimini ifade eden Adi Diferansiyel Denklemlerin (ODE) sayısal çözücüleri olan Euler ve MATLAB'ın efsanevi \`ode45\` (Runge-Kutta) algoritmaları işlenir. Bir drone'un uçuş dinamiği, bir pandeminin yayılım modeli veya bir RLC devresinin voltaj salınımları gibi karmaşık fiziksel süreçler MATLAB'da simüle edilir. "Stiff" (kararsız/sert) denklemlerde \`ode45\`'in nasıl çöktüğü ve yerine \`ode15s\` gibi kapalı yöntemlerin (Implicit methods) neden kullanılması gerektiği mühendislik vizyonuyla tartışılır. Doğanın zaman içindeki akışını bilgisayarın işlemci döngülerine uyarlayarak sanal ikizler (Digital Twin) yaratmanın temelidir. Zaman uzayında sistem simülasyonu yapma yetkinliğidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/ordinary-differential-equations.html' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+diferansiyel+denklem+%C3%A7%C3%B6z%C3%BCm%C3%BC+ode45' },
      ],
    },
    11: {
      description: `Binlerce bilinmeyeni olan doğrusal denklem sistemlerinin (Ax = B) Gauss Eliminasyonu veya Jacobi iterasyon yöntemleriyle MATLAB'da çözümü ( Ters matris, \`\\\` operatörü) incelenir. Büyük veri setlerinde matris tersi almanın (\`inv(A)\`) CPU'yu nasıl gereksiz yorduğu ve \`\\\` (mldivide) operatörünün neden çok daha zeki ve performanslı olduğu ispatlanır. Elektrik şebekelerindeki voltaj dağılımlarını veya inşaat kafes sistemlerindeki yükleri analiz eden devasa seyrek (Sparse) matrislerin bellek (RAM) dostu yönetimi öğretilir. Lineer cebirin yazılım mühendisliğindeki gücünü ve makine öğrenmesi algoritmalarının temel hesaplama hızını belirleyen konseptlerdir. Çoklu bilinmeyen kaosunun matris düzeniyle fethedilmesidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/math/systems-of-linear-equations.html' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+lineer+denklem+sistemleri+%C3%A7%C3%B6z%C3%BCm%C3%BC' },
      ],
    },
    12: {
      description: `Matrislerin karakteristik özelliklerini belirleyen özdeğer (Eigenvalue) ve özvektör (Eigenvector) hesaplamaları MATLAB'ın \`eig\` fonksiyonuyla analiz edilir. Google'ın dünyayı değiştiren PageRank arama algoritmasının veya Yüz Tanıma (Face Recognition) teknolojilerindeki PCA (Boyut İndirgeme) sistemlerinin tam olarak bu özdeğer hesaplaması üzerine kurulu olduğu gösterilir. Sistemlerin rezonans (titreşim) frekanslarını ve mekanik/yazılımsal kararlılıklarını (Stability) tespit eden ileri düzey fizik ve ağ (Network) analizlerinde kullanılır. Devasa veri yığınlarının içindeki en belirleyici ve karakteristik ana eksenleri (Principal Components) matematiksel olarak çekip alma sanatıdır. Bilginin özünü keşfetmenin sayısal yoludur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/matlab/math/eigenvalues-and-eigenvectors.html' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+%C3%B6zde%C4%9Fer+%C3%B6zvekt%C3%B6r+eig+kullan%C4%B1m%C4%B1' },
      ],
    },
    13: {
      description: `Doğrusal olmayan karmaşık ilişkilerin bulunduğu sistemlerin çözümü için Newton-Raphson sistemleri ve MATLAB'ın \`fsolve\`, \`fminsearch\` optimizasyon araçları öğrenilir. Makine öğrenmesinde (Yapay Sinir Ağları) kayıp fonksiyonlarının ağırlıklarını güncelleyen algoritmaların, bu lineer olmayan denklemleri çözerek çalıştığı mühendislik vizyonuyla aktarılır. Robotik kolların ters kinematik (Inverse Kinematics) hesaplamalarında veya uyduların yörünge rotalarında, sistemin doğru açıları bulması için gereken sayısal iterasyonlar kodlanır. Kesişmeyen eğrilerin veya birden fazla çözümün (Local Minima) olduğu durumlarda algoritmanın tıkanmasını engelleme stratejileri tartışılır. Belirsizliği ve karmaşıklığı optimizasyon algoritmalarıyla dizginleme evresidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/optim/ug/fsolve.html' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+lineer+olmayan+denklemler+fsolve' },
      ],
    },
    14: {
      description: `Dönemin finalinde, hem zamana hem de uzaya (x,y,z) bağlı olarak değişen Kısmi Diferansiyel Denklemlerin (PDE) Isı İletimi, Dalga ve Laplace formlarının sayısal çözümleri işlenir. Bilgisayar kasalarındaki ısı yayılımının (Thermal dissipation), antenlerin elektromanyetik alanlarının veya aerodinamik rüzgar tünellerinin sonlu elemanlar (Finite Elements) yöntemiyle nasıl simüle edildiği gösterilir. MATLAB'ın PDE Toolbox'ı kullanılarak, karmaşık geometrilere sahip nesnelerin üzerindeki fiziksel dağılımlar saniyeler içinde renkli 3D yüzey grafikleriyle görselleştirilir. Bilgisayar donanım tasarımlarından kuantum fiziğine uzanan, dünyadaki en gelişmiş simülasyon sistemlerinin altyapısı kavranarak mühendislik kariyerine muazzam bir yetkinlikle çıkış yapılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.mathworks.com/help/pde/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matlab+k%C4%B1smi+diferansiyel+denklemler+pde' },
      ],
    },
  },
  'BMSB403 Veri Madenciliği': {
    1: {
      description: `Dijital çağda hızla biriken devasa ham verilerin (Big Data) içinden gizli, anlamlı ve eyleme dönüştürülebilir bilgiyi keşfetme süreci olan Veri Madenciliğine (KDD) giriş yapılır. Sadece veriyi SQL ile listelemek yerine, "Bu müşteriler neden bizi terk ediyor?" sorusuna istatistiksel ve algoritmik yanıtlar bulmanın (Churn Prediction) felsefesi öğrenilir. Makine Öğrenmesi, İstatistik ve Veritabanı yönetiminin tam kesişim noktasında bulunan bu disiplinin günümüz sektöründeki hayati rolü tartışılır. Hedefiniz ister bir bulut mimarı ister backend geliştiricisi olmak olsun, tuttuğunuz verinin iş dünyasında (Business Value) ne anlama geldiğini kavramanızı sağlar. Madenciliğin teknik ve ticari boyutlarına geniş bir projeksiyon sunulur.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_mining/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+nedir+giri%C5%9F' },
      ],
    },
    2: {
      description: `Veri madenciliğinin bankacılıkta sahtekarlık tespiti (Fraud Detection), e-ticarette ürün öneri sistemleri (Recommendation Systems) ve sağlıkta genetik analiz gibi endüstriyel uygulama alanları incelenir. Kredi kartı şirketlerinin saniyeler içinde milyonlarca işlemi tarayarak bir işlemin çalıntı olup olmadığına nasıl karar verdiği algoritmik bir bakışla (Anomaly Detection) tartışılır. Şirketlerin pazarlama bütçelerini optimize etmek için Hedef Kitle Analizi ve Sepet Analizi yöntemlerini nasıl kullandığı gerçek vaka çalışmalarıyla (Case Studies) gösterilir. Veri yığınlarının sadece bir depolama yükü değil, şirketleri milyarlarca dolar zarardan kurtaran stratejik bir silaha nasıl dönüştüğü öğretilir. Algoritmaların sektörel değer yaratma kapasitesi gözler önüne serilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/data-mining-applications/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+uygulama+alanlar%C4%B1+fraud+detection' },
      ],
    },
    3: {
      description: `Bir madencilik projesinin toplam eforunun %80'ini oluşturan, kirli verinin toplanması ve makinenin anlayacağı formata temizlenmesi (Data Preprocessing) süreçleri işlenir. Eksik verilerin (Missing Values) ortalamalarla doldurulması, aykırı değerlerin (Outliers) filtrelerden geçirilmesi ve verilerin 0-1 aralığına normalize edilmesi gibi zorunlu mühendislik adımları pratik edilir. Farklı tablolardan, log dosyalarından veya NoSQL dokümanlarından gelen heterojen (karışık) veri türlerinin (Categorical/Numerical) bir araya getirilme (Data Integration) teknikleri öğretilir. "Çöp giren çöp çıkar" (GIGO) kuralı gereği, dünyanın en iyi makine öğrenmesi modelinin bile kirli veriyle çökeceği bilinci aşılanır. Başarılı analizin arka planındaki sabırlı veri işçiliğidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_mining/dm_data_preprocessing.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+veri+%C3%B6n+i%C5%9Fleme+data+preprocessing' },
      ],
    },
    4: {
      description: `Temizlenen verinin boyutunun algoritmaları yormaması için Boyut İndirgeme (Dimensionality Reduction) ve Özellik Seçimi (Feature Selection) yöntemleri öğrenilir. Bir hastanın 500 farklı kan tahlili verisinden sadece kanser ile en çok ilgili olan 5 özelliği (Feature) bulup çıkaran İstatistiksel (Örn: Korelasyon, PCA) araçlar incelenir. Ayrıklaştırma (Discretization) teknikleri kullanılarak, örneğin sürekli yaş verilerinin "Genç", "Orta Yaş", "Yaşlı" gibi kategorik etiketlere dönüştürülmesi ve ağaç algoritmalarına hazırlanması sağlanır. Sistem performansını (CPU/RAM) korurken aynı zamanda modelin doğruluk payını (Accuracy) artırma (Trade-off) mühendisliği tartışılır. Veriyi damıtarak en saf ve en anlamlı haline getirme evresidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://machinelearningmastery.com/dimensionality-reduction/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=boyut+indirgeme+pca+ve+%C3%B6zellik+se%C3%A7imi' },
      ],
    },
    5: {
      description: `Günlük operasyonel veritabanlarının (OLTP) aksine, karar analizi için tasarlanmış devasa Veri Ambarı (Data Warehouse) mimarileri ve ETL (Extract, Transform, Load) süreçleri tanıtılır. Verinin üç boyutlu küpler (Data Cubes) halinde düzenlendiği Çevrimiçi Analitik İşleme (OLAP) konseptiyle, yöneticilerin milyonlarca satır veriyi saniyeler içinde (Slice and Dice) nasıl filtrelediği görülür. Çok sayıda farklı şubenin veya API'nin verisinin merkezi bir bulut veri ambarına akarken karşılaşılan veri tutarsızlıkları ve senkronizasyon (Integration) problemleri çözümlenir. Klasik SQL bilgilerinizin, kurumsal çapta veri mimarileri (Data Engineering) inşa etme seviyesine yükseltildiği haftadır. Geçmişin tüm bilgisini geleceği yönetmek için tek bir merkeze toplama stratejisidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_mining/dm_dwh_olap.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+ambar%C4%B1+data+warehouse+ve+olap+nedir' },
      ],
    },
    6: {
      description: `Madenciliğin iki ana kolu olan, geçmiş verilere bakarak hedefi tahmin etme (Sınıflandırma - Classification) ve etiketsiz verilerden gizli gruplar bulma (Kümeleme - Clustering) teknikleri karşılaştırılır. Spam mailleri ayıklayan algoritmalar (Sınıflandırma) ile müşterileri satın alma alışkanlıklarına göre A, B, C segmentlerine bölen K-Means (Kümeleme) algoritmalarının çalışma felsefeleri pratik edilir. Öğrenme sürecinin gözetimli mi (hedefi bilerek) yoksa gözetimsiz mi (veriye bırakarak) tasarlandığı durumlarda algoritmaların performansı (Big-O) nasıl etkilediği analiz edilir. Python (Scikit-Learn) veya Weka kullanılarak gerçek veri setleri üzerinde bu iki büyük yapay zeka paradigmasının ilk kodlamaları yapılır. Verinin içindeki örüntüleri (Pattern) çıkarma savaşının başladığı noktadır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/difference-between-classification-and-clustering-in-data-mining/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+s%C4%B1n%C4%B1fland%C4%B1rma+ve+k%C3%BCmeleme+fark%C4%B1' },
      ],
    },
    7: {
      description: `İnsan mantığına en uygun çalışan, karar süreçlerini "if-else" dallanmalarıyla kökten yapraklara (Root to Leaf) doğru inşa eden Karar Ağacı (Decision Trees) algoritmaları öğrenilir. Entropi ve Bilgi Kazancı (Information Gain) matematiği ile algoritmanın hangi değişkeni (Örn: Yaş mı, Maaş mı?) en önemli bölücü (Split) olarak seçeceği hesaplanır. ID3, C4.5 veya CART gibi algoritmaların, çok dallanıp ezberlemeye (Overfitting) gittiği durumlarda "Budama" (Pruning) tekniğiyle sistemin genelleme yeteneğinin nasıl kurtarıldığı incelenir. Yöneticilere "Sistem neden bu hastaya Kanser dedi?" sorusunun cevabını, ağacın çizimi üzerinden açıklayabilmenin (Explainable AI) gücü gösterilir. Matematiğin şeffaf ve anlaşılır karar yollarına dökülmesidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_mining/dm_classification_prediction.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=karar+a%C4%9Fa%C3%A7lar%C4%B1+decision+tree+entropi+bilgi+kazanc%C4%B1' },
      ],
    },
    8: {
      description: `Verinin sadece kodla değil istatistikle konuşturulduğu, olasılık dağılımları, güven aralıkları ve hipotez testleri gibi matematiksel doğrulama yöntemleri işlenir. Madencilik algoritmasının bulduğu sonucun rastgele bir tesadüf mü yoksa istatistiksel olarak anlamlı (Statistically Significant) bir gerçek mi olduğu p-değeri (p-value) ile kanıtlanır. Karışıklık Matrisi (Confusion Matrix), ROC eğrisi, Kesinlik (Precision) ve Duyarlılık (Recall) gibi endüstri standardı performans metrikleri üzerinden modellerin sağlık testleri (Diagnostics) yapılır. Algoritmanın performansını müşteriye sadece "Çalışıyor" diyerek değil, akademik istatistik formülleriyle savunma vizyonu katar. Kod ile ulaşılan sonucun, bilimsel mahkemede ispatlanmasıdır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://machinelearningmastery.com/statistical-methods-for-machine-learning/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+performans+metrikleri+confusion+matrix' },
      ],
    },
    9: {
      description: `İstatistiğin sınırlarını aşıp, kendi kendine öğrenen algoritmaları kapsayan K-En Yakın Komşu (K-NN), Destek Vektör Makineleri (SVM) ve Naive Bayes gibi yapay zeka modelleri derinleştirilir. Özellikle SVM algoritmasının karmaşık verileri çok boyutlu uzaylara (Kernel Trick) taşıyarak, doğrusal olarak ayrılamayan kaosu bile saniyeler içinde nasıl ayrıştırdığı (Sınıflandırma) kanıtlanır. Koşullu olasılığa dayanan Naive Bayes'in metin madenciliğinde (Spam filtreleri, Duygu Analizi) neden mükemmel çalıştığı teorik ve pratik kodlamalarla gösterilir. Bilgisayar mühendisinin cephaneliğine farklı veri profilleri için farklı zeka algoritmaları seçme yeteneği eklenir. Modern tahminsel analitiğin beyin takımının devreye girdiği aşamadır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://scikit-learn.org/stable/supervised_learning.html' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=svm+destek+vekt%C3%B6r+makineleri+ve+naive+bayes' },
      ],
    },
    10: {
      description: `İnsan beyninin nöron ve sinaps (bağlantı) yapısından ilham alarak geliştirilen, katmanlı perceptronlardan (MLP) oluşan Yapay Sinir Ağları (ANN) mimarisine giriş yapılır. Girdilerin ağırlıklarla çarpılıp, aktivasyon fonksiyonlarından (Sigmoid, ReLU) geçerek nasıl doğrusal olmayan muazzam sonuçlar ürettiği ve hataların Geri Yayılım (Backpropagation) ile nasıl düzeltildiği incelenir. Karar ağaçlarının çözemediği çok karmaşık görüntü (Piksel) veya ses verilerindeki örüntüleri (Pattern) çıkarabilen Derin Öğrenmenin (Deep Learning) atası olan bu modelin gücü ve çalışma maliyeti (CPU/GPU) tartışılır. Kodların matematiksel fonksiyonlardan ziyade, deneyimle evrimleşen bir beyin ağı gibi kurgulanmasının felsefesidir. Biyolojinin kod dünyasındaki algoritmik yansımasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/artificial_neural_network/index.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yapay+sinir+a%C4%9Flar%C4%B1+nedir+backpropagation' },
      ],
    },
    11: {
      description: `Süpermarketlerde veya Amazon gibi sitelerde "Bunu alanlar bunu da aldı" öneri sistemlerinin arkasındaki Birliktelik Kuralı Çıkarımı (Association Rules) ve Apriori algoritması öğrenilir. Milyonlarca fiş (Transaction) verisi taranarak bebek bezi alanların yanında neden bira aldıkları gibi zıt ürün ilişkilerinin Support (Destek) ve Confidence (Güven) metrikleriyle nasıl ispatlandığı gösterilir. Veri tabanında sık geçen öğe kümelerini (Frequent Itemsets) ararken sunucunun bellek sınırlarını aşmamak (Combinatorial Explosion) için budama tekniklerinin önemi algoritma seviyesinde kavranır. Kullanıcı alışkanlıklarını manipüle eden pazarlama stratejilerini kodlayarak ciro (Revenue) artıran sistemlerin gizli formülüdür. Verilerin birbiriyle kurduğu sosyal bağların madenciliğidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/apriori-algorithm/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=birliktelik+kurallar%C4%B1+apriori+algoritmas%C4%B1+support+confidence' },
      ],
    },
    12: {
      description: `Sadece yapısal tablolar (SQL) üzerinde değil, internetteki web sitelerinin HTML kodları (Web Scraping) ve metin paragrafları (Text Mining) üzerinde yapılan karmaşık madencilik teknikleri işlenir. Twitter (X) üzerindeki milyonlarca tweet'i toplayarak kelimelerin köklerini bulma (Stemming), anlamsız kelimeleri atma (Stop-words) ve TF-IDF (Kelime Sıklığı) ile duygu analizi (Sentiment Analysis) yapma projeleri kodlanır. Google gibi arama motorlarının web sayfalarının bağlantı (Link) hiyerarşisini (PageRank) kullanarak webin graf yapısını nasıl kazdığı (Web Structure Mining) vizyonu aktarılır. Dünyanın %80'ini oluşturan düzensiz (Unstructured) veriye hükmedebilmenin ve dijital ayak izlerini okumanın modern yollarıdır. Doğal dilleri ve internet okyanusunu algoritmalarla evcilleştirme sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/data_mining/dm_mining_text_data.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=metin+madencili%C4%9Fi+text+mining+ve+nlp' },
      ],
    },
    13: {
      description: `Farklı veri madenciliği projelerinin başarılarının karşılaştırıldığı ve endüstriyel standartların belirlendiği geniş çaplı değerlendirme (Evaluation) süreçleri ele alınır. Aşırı öğrenme (Overfitting) engellemek için kullanılan Çapraz Doğrulama (Cross-Validation) ve model maliyet hesaplamaları (Cost-Sensitive Learning) şirketlerin kâr/zarar tablolarına doğrudan etki eden faktörler olarak tartışılır. Bir bankanın kredisini onaylayan algoritmanın ayrımcılık (Bias) yapmamasını sağlamak, etik (AI Ethics) ve mahremiyet (Privacy) açısından hukuki çerçevelerle bir mühendis sorumluluğu olarak aşılanır. Sadece performanslı değil, güvenilir, hesap verebilir ve etik değerlere sahip algoritmalar geliştirmenin önemidir. Veri bilimcinin ürettiği modelin sorumluluğunu alması gerektiği aşamadır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://machinelearningmastery.com/metrics-evaluate-machine-learning-algorithms-python/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+madencili%C4%9Fi+model+de%C4%9Ferlendirme+ve+%C3%A7apraz+do%C4%9Frulama' },
      ],
    },
    14: {
      description: `Dönemin finalinde, Python (Pandas, Scikit-Learn) veya Weka gibi araçlarla uçtan uca (End-to-End) gerçek dünya veri setleri üzerinde (Örn: Kaggle Verileri) madencilik projeleri gerçekleştirilir. Ham verinin veritabanından çekilip temizlenmesinden (ETL), uygun algoritmanın (Örn: Karar Ağaçları veya K-Means) seçilip optimize edilmesine ve sonuçların görsellerle yönetime sunulmasına kadar tam bir Data Pipeline döngüsü yaşanır. Öğrencilerin sadece kod yazan kişiler olmaktan çıkıp, kurumların gelecekteki stratejik kararlarını yönlendirecek "Veri Madencileri / Veri Bilimciler" vizyonuna ulaşmaları sağlanır. Verinin gizli fısıltılarının şirketlerin yüksek sesli kararlarına dönüştüğü büyük endüstriyel simülasyonla ders noktalanır. Ham bilgiden bilgeliğe (Wisdom) giden tam yığın (Full-stack) analitik yolculuğun zirvesidir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+ile+u%C3%A7tan+uca+veri+madencili%C4%9Fi+projesi' },
      ],
    },
  },
  'BMSB421 Veri sıkıştırma yöntemleri': {
    1: {
      description: `Dijital dünyanın gigabaytlarca veriyi kısıtlı bant genişliğinden (Bandwidth) ve depolama alanlarından geçirebilmesinin arkasındaki matematiksel mucize olan veri sıkıştırma bilimine giriş yapılır. Shannon'ın Bilgi Teorisi (Information Theory) ışığında, bir verinin içindeki "gerçek bilgi" miktarı (Entropi) ile "gereksiz tekrar" (Redundancy) kavramları analiz edilir. Orijinal verinin birebir geri getirilebildiği Kayıpsız (Lossless - Örn: ZIP) teknikler ile insan algısının fark edemeyeceği detayların atıldığı Kayıplı (Lossy - Örn: JPEG/MP3) tekniklerin mühendislik kullanımları tartışılır. Bulut sistemleri ve ağ iletişiminin darboğazlarını yazılım algoritmalarıyla çözme vizyonu kazandırılır. Dosya boyutlarını kod satırlarıyla küçültme felsefesidir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/telecommunication_switching_systems_and_networks/telecommunication_switching_systems_and_networks_data_compression.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma+algoritmalar%C4%B1na+giri%C5%9F+entropi' },
      ],
    },
    2: {
      description: `Verilerin tekrar etme sıklığına (olasılığına) göre harflere veya piksellere dinamik bit uzunlukları atayan meşhur Huffman Kodlama algoritması, ağaç veri yapıları üzerinden öğrenilir. Sık geçen harflere kısa kodlar (Örn: 2 bit), nadir geçenlere uzun kodlar vererek tüm dosyanın boyutunu inanılmaz ölçüde (Entropy Limitine yaklaşarak) nasıl düşürdüğü matematiksel olarak ispatlanır. Dosyayı iki kez taramak yerine, veri akarken (Streaming) kendi ağacını güncelleyen Adaptif Huffman (Adaptive Huffman) yönteminin modern ağ iletişimlerindeki hızı tartışılır. İşletim sistemlerinin arka planındaki ZIP sıkıştırma mantığının bel kemiği çözümlenir. İstatistiğin ve olasılığın ağaç mimarisinde dosya boyutunu daraltmasıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=huffman+kodlama+algoritmas%C4%B1+nas%C4%B1l+%C3%A7al%C4%B1%C5%9F%C4%B1r' },
      ],
    },
    3: {
      description: `Huffman algoritmasının aksine, her karaktere ayrı bir kod vermek yerine tüm dosyayı 0 ile 1 arasında tek bir virgüllü sayıya (Floating point) sıkıştıran devrimsel Aritmetik Kodlama (Arithmetic Coding) işlenir. Karmaşık hesaplamalara sahip olmasına rağmen, veri karakterlerinin ondalıklı olasılıklarına tam uyum sağlayarak Huffman'dan bile daha yüksek bir sıkıştırma oranına (Kompresyon Oranı) nasıl ulaştığı analiz edilir. İşlemci gücünün (CPU) fazla harcanmasına karşılık, bant genişliğinden (Bandwidth) tasarruf etme (Trade-off) mühendisliği JPEG2000 ve video kodekleri (H.264) üzerinden örneklendirilir. Sayıların olasılık uzayında sonsuz küçüklüğe giden fraktal yapısıyla veriyi izole etme matematiğidir. Kayan noktalı sayıların veri saklama sihridir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/arithmetic-coding-in-data-compression/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=aritmetik+kodlama+veri+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma' },
      ],
    },
    4: {
      description: `Verinin kendisini sıkıştırmak yerine, veriyi sıkıştırmaya daha uygun bir formata çeviren Öne Taşıma (Move-To-Front - MTF) ve Artık Değer (Residual/Delta) modelleme algoritmaları öğrenilir. Sürekli tekrar eden aynı kelimelerin indekslerini hep sıfıra (0) yakın tutarak, bir sonraki aşamada Huffman veya Aritmetik kodlayıcının işini olağanüstü kolaylaştıran bu ön işleme (Preprocessing) adımı kurgulanır. Görüntü veya ses verilerindeki pikseller/örnekler arasındaki küçük farkların (Delta Encoding) saklanmasının, ham veriyi saklamaktan neden çok daha az yer kapladığı kanıtlanır. Algoritmaların birbirini destekleyerek mükemmel bir "Sıkıştırma Boru Hattı" (Compression Pipeline) oluşturması vizyonu aşılanır. Veriyi daha paketlenebilir hale getirmek için bükme sanatıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Move-to-front_transform' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=move+to+front+transform+mtf+data+compression' },
      ],
    },
    5: {
      description: `Bir sonraki harfin ne olacağını geçmiş kelimelerin içeriğine bakarak tahmin eden PPM (Prediction by Partial Matching) ve bzip2'nin temeli olan Burrows-Wheeler Dönüşümü (BWT) işlenir. BWT algoritmasının, verinin boyutunu tek bir bit bile küçültmeden, sadece harflerin yerlerini zekice değiştirerek aynı harfleri nasıl yan yana dizdiği matris rotasyonlarıyla ispatlanır. Dünyanın en güçlü kayıpsız sıkıştırma algoritmalarının, olasılık hesaplamalarından çok metnin diziliş anatomisiyle (Lexicographical order) nasıl oynadığını gösteren üst düzey bir mühendislik buluşudur. Doğal dil işleme (NLP) ve DNA dizilimi (Bioinformatics) sıkıştırmalarında neden bu gelişmiş tahmin algoritmalarının kullanıldığı tartışılır. Metnin genetiğini yeniden dizerek entropiyi düşürme operasyonudur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/burrows-wheeler-data-transform-algorithm/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=burrows+wheeler+transform+bwt+algoritmas%C4%B1' },
      ],
    },
    6: {
      description: `İstatistik hesaplamaktan vazgeçip, sık geçen kelimelerin (Örn: "ve", "veya", "html") referans indekslerinin bir sözlüğe (Dictionary) yazıldığı pratik yaklaşımlar incelenir. Digram kodlaması ile yan yana çok sık gelen iki harfin (Örn: "th", "er") tek bir bayta sıkıştırılarak veritabanı optimizasyonlarında (Database Compression) nasıl basit ama etkili çözümler sunduğu öğretilir. Hızın, sıkıştırma oranından daha önemli olduğu gerçek zamanlı ağ protokollerinde statik sözlüklerin işlemciyi hiç yormadan çalışma mantığı (O(1) karmaşıklık) kurgulanır. Veritabanı veya oyun motoru tasarlarken kısıtlı bellekte string (metin) yönetimi yapmanın performans sırları aktarılır. Uzun kelimeleri kısa adreslerle değiştirme haritalamasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Dictionary_coder' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dictionary+based+compression+s%C3%B6zl%C3%BCk+tabanl%C4%B1+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma' },
      ],
    },
    7: {
      description: `Sözlüğün önceden bilinmediği, ancak tüm dosyanın ilk okuması yapılarak dosyaya özel bir sözlüğün (Semi-Static) oluşturulduğu ara algoritmalar incelenir. Dosya ile birlikte sözlüğün de karşı tarafa gönderilmesi zorunluluğunun yarattığı ek boyut (Overhead) sorunu ile sağladığı yüksek sıkıştırma oranının başa baş noktası matematiksel olarak hesaplanır. Kelimeler yerine hece veya daha küçük parçaların (N-gram) statik sözlüklere dinamik olarak nasıl eklendiği algoritmalaştırılır. Veri mühendisliği projelerinde, saklanacak log formatlarına veya metin yapılarına uygun özel sıkıştırma kütüphaneleri yazma vizyonu katar. Dosyanın DNA'sına uygun özel bir şifre kitabı oluşturma adımıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://xlinux.nist.gov/dads/HTML/dictionarycoder.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=semi+static+dictionary+compression' },
      ],
    },
    8: {
      description: `Modern ZIP ve RAR formatlarının efsanevi temelleri olan, veriyi okudukça sözlüğü sıfırdan ve anlık oluşturan LZ77 (Kayan Pencere) ve LZ78 algoritmaları öğrenilir. Önceden gönderilen verilerin bir pencere (Sliding Window) içinde tutularak, tekrar eden kelimelerin "Geriye dön X adım, Y kadar kopyala" referanslarıyla nasıl inanılmaz bir oranda sıkıştırıldığı koda dökülür. Karşı tarafın (Alıcı) hiçbir sözlüğe sahip olmadan, gelen veriyle birlikte kendi sözlüğünü eşzamanlı nasıl inşa ettiği (Decompression) mantığı kavranır. Bugün her web sitesinin yüklenme hızını sağlayan GZIP ve Deflate mimarilerinin kalbindeki bu deha eseri algoritmalar mühendislik ufku açar. Dinamik belleğin ve geçmişi hatırlama sanatının zirvesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/lempel-ziv-algorithm-lz77-lz78-information-theory/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lz77+ve+lz78+algoritmas%C4%B1+veri+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma' },
      ],
    },
    9: {
      description: `LZ78'in geliştirilmiş hali olan, PDF, TIFF ve GIF dosyalarının standart sıkıştırma algoritması Lempel-Ziv-Welch (LZW) ve LZ77 ile Huffman'ı birleştiren yenilmez "Deflate" algoritması işlenir. İnternetteki HTTP sunucularının (Apache, Nginx) web sayfalarınızı size göndermeden önce anlık olarak Deflate ile nasıl sıkıştırdığı ve bant genişliğinden %70 nasıl tasarruf ettiği analiz edilir. Patent savaşlarına (GIF vs PNG) neden olan LZW algoritmasının bellek sızıntısını engellemek için sözlük dolduğunda kendini nasıl sıfırladığı tasarımsal olarak kurgulanır. İki farklı güçlü algoritmanın (LZ ve Huffman) hibrid bir şekilde boru hattında (Pipeline) çalışarak dünyayı nasıl hızlandırdığı ispatlanır. Web'i ve dosyaları bugünkü hızına kavuşturan son altın vuruştur.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/lzw-lempel-ziv-welch-compression-technique/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lzw+algoritmas%C4%B1+ve+deflate+compression' },
      ],
    },
    10: {
      description: `Metin sıkıştırmadan çıkıp multimedya dünyasına girerek, seste hiçbir kalite kaybı yaratmadan (FLAC/ALAC mantığı) analogdan dijitale geçen sesin nasıl küçültüldüğü öğrenilir. DPCM (Diferansiyel PCM) ile ses sinyalinin kendisi yerine, bir önceki sinyalle arasındaki minik farkların (Türev) kaydedilerek bit derinliğinden nasıl tasarruf edildiği incelenir. İletişim ağlarında ve VoIP (Skype, WhatsApp aramaları) altyapılarında sesin gürültü yaratmadan gerçek zamanlı (Adaptive) sıkıştırılmasının altyapısıdır. Odiofillerin yüksek sadakatli (High-Fidelity) ses gereksinimlerini karşılarken depolama maliyetlerini düşürme (Trade-off) mühendisliği tartışılır. İşitilebilir fiziksel dalgaların matematiksel tahminlerle kayıpsız izole edilmesidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Adaptive_differential_pulse-code_modulation' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dpcm+and+adpcm+audio+compression' },
      ],
    },
    11: {
      description: `Dijital müzik devrimini başlatan MP3 ve modern AAC kodeklerinin arkasında yatan Psikoakustik modelleme (Psychoacoustics) ve frekans maskeleme algoritmaları işlenir. İnsan kulağının duyamayacağı frekansların (örneğin yüksek sesli bir bateri vuruşunun arkasındaki fısıltının) algoritmalar tarafından tespit edilip kalıcı olarak silinmesi (Lossy) matematiği kavranır. Fourier Transformu kullanılarak zaman düzlemindeki sesin frekans düzlemine geçirilip nasıl bloklar halinde kuantize edildiği (MDCT) gösterilir. Spotify veya Apple Music gibi platformların terabaytlarca sesi cebinizdeki telefona nasıl kesintisiz ve kaliteli aktardığı donanım/yazılım vizyonuyla anlaşılır. İnsan biyolojisi ile matematiksel algoritmaların muazzam işbirliğidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/MP3' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mp3+nas%C4%B1l+%C3%A7al%C4%B1%C5%9F%C4%B1r+psikoakustik+modelleme' },
      ],
    },
    12: {
      description: `Tıbbi görüntüler (Röntgen/MR) veya uydu haritaları gibi tek bir pikselin bile değişmemesi gereken alanlarda kullanılan RLE (Run-Length Encoding) ve Kayıpsız JPEG (JPEG-LS) yöntemleri öğrenilir. Arka arkaya gelen yüzlerce aynı renk pikselin "Beyaz, Beyaz, Beyaz" diye yazılmak yerine "300 tane Beyaz" şeklinde (RLE) çok basit ve hızlı bir şekilde belleğe nasıl dizildiği kodlanır. Faks makinelerinin veya siyah-beyaz doküman tarayıcılarının (JBIG) metin piksellerini sıkıştırırken arka planda çalıştırdığı olasılık tabanlı tahmin yapıları incelenir. Veri bütünlüğünün insan hayatı (Tıp) veya yasal kanıt niteliği taşıdığı durumlarda uygulanan katı algoritmik disiplinlerdir. Görüntünün anatomisini bozmadan hacmini küçültme stratejisidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/run-length-encoding/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=run+length+encoding+rle+g%C3%B6r%C3%BCnt%C3%BC+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma' },
      ],
    },
    13: {
      description: `İnternetin görsel yükünü çeken JPEG algoritmasının arkasındaki Ayrık Kosinüs Dönüşümü (DCT) ve insan gözünün renk değişimlerine (Chroma) karşı körlüğünü kullanan algoritmalar detaylandırılır. Görüntünün 8x8 piksel bloklara bölünerek frekanslarına ayrılması ve yüksek frekanslı ince detayların matris bölme işlemleriyle (Quantization) nasıl sıfırlandığı matematiksel olarak ispatlanır. Kare bloklanma hatalarını (Artifacts) ortadan kaldıran ve daha pürüzsüz sıkıştırma sunan Wavelet (Dalgacık) tabanlı JPEG 2000 ve Fraktal (Kendi kendini tekrar eden geometriler) mimarileri tartışılır. Modern web sitelerinde arayüz görsellerinin (UI/UX) hızlı yüklenmesi için gereken arka uç görüntü optimizasyonlarının teorik temelidir. Optik körlüğümüzün algoritmik avantaja dönüştürüldüğü sistemdir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/JPEG' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=jpeg+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma+algoritmas%C4%B1+dct+kuantalama' },
      ],
    },
    14: {
      description: `Dönemin finalinde, video izleme platformlarını (YouTube, Netflix) var eden hareket tahmini (Motion Estimation) ve P-Frame/B-Frame (İleri/Geri dönük tahmin kareleri) mantıkları olan MPEG kodek ailesi işlenir. Videonun her karesini (Frame) JPEG gibi sıkıştırmak yerine, sadece bir önceki kareden "farklı olan" piksellerin (örneğin hareket eden araba) vektörlerle nasıl kodlandığı efsanevi bir mantıkla öğrenilir. Otonom dron (İHA) kameralarından yer istasyonuna anlık ve düşük gecikmeli (low-latency) video akışı sağlarken kullanılan H.264 / MPEG-4 mimarilerindeki donanım-yazılım işbirliği tartışılır. Sadece kodlama değil, matematik, fizik, insan algısı ve donanım sınırlarının mükemmel entegrasyonuyla bilgisayar biliminin gücünü zirvede göstererek eğitim tamamlanır. Uzayı ve zamanı matrislere sıkıştırma teknolojisinin son boyutudur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Video_compression_picture_types' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=video+s%C4%B1k%C4%B1%C5%9Ft%C4%B1rma+mpeg+motion+estimation+i+p+b+frames' },
      ],
    },
  },
  'BMSB428 Gömülü Sistemler': {
    1: {
      description: `Standart bilgisayarların aksine, sadece spesifik bir görevi yapmak üzere tasarlanmış, donanımı ve yazılımı iç içe geçmiş Gömülü Sistemlerin (Embedded Systems) mimarisi tanıtılır. Bir çamaşır makinesinin beyninden, Mars'a inen uzay araçlarının kontrol ünitelerine kadar uzanan bu sistemlerde Mikrokontrolcü (MCU), sensör ve aktüatör bağlantıları incelenir. İleride kuracağınız Nesnelerin İnterneti (IoT) ağlarında veya giyilebilir teknolojilerde (Smartwatch) işlemci, RAM ve depolamanın tek bir çip (SoC) içinde nasıl optimize edildiği donanımsal olarak gösterilir. Yazılım kodlarının, klavye ve ekran olmadan fiziksel dünyadaki voltajlarla (GPIO pinleri) nasıl konuştuğu felsefi olarak kavranır. Yazılımın kas gücüne ve mekanik harekete dönüştüğü dijital sınırdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/embedded_systems/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6m%C3%BCl%C3%BC+sistemler+nedir+embedded+systems+giri%C5%9F' },
      ],
    },
    2: {
      description: `Bilgisayarınızda (Host) yazdığınız C/C++ kodunun, farklı bir işlemci mimarisine (ARM veya AVR) sahip mikrokontrolcüye (Target) Çapraz Derleyici (Cross-Compiler) ile nasıl dönüştürüldüğü öğrenilir. Yazılan binary (Hex) dosyasının bootloader veya harici programlayıcılar aracılığıyla donanım hafızasına (Flash Memory) yazılması işlemi uygulamalı olarak (Örn: Arduino/STM32) gösterilir. Sistemde ekran (Monitor) olmadığı için hataları konsola yazdırmak (printf) yerine, donanım içi hata ayıklama (In-Circuit Debugging) araçlarıyla değişkenlerin bellek adreslerinde anlık nasıl takip edildiği pratik edilir. Kurumsal C# veya Python uygulamalarının konfor alanından çıkılarak donanımla en ham seviyede yüzleşilir. Kodun bilgisayarı terk edip çıplak metalde (Bare-metal) hayat bulduğu ilk andır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/embedded-c-programming/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6m%C3%BCl%C3%BC+sistemler+ilk+program+cross+compiler+stm32' },
      ],
    },
    3: {
      description: `Kısıtlı donanım kaynaklarına sahip bu sistemlerde Flash (Kod hafızası), SRAM (Değişkenler) ve EEPROM (Kalıcı veriler) birimlerinin yazılım (Pointer'lar) ile nasıl efektif yönetileceği incelenir. İşlemcinin dış dünyayla bağ kurduğu çevre birimleri olan Zamanlayıcılar (Timers), ADC (Analog-Dijital Çevirici) ve PWM (Darbe Genişlik Modülasyonu) modüllerinin donanımsal Register yapıları koda dökülür. Sıcaklık veya ışık sensöründen gelen analog voltajın, ADC üzerinden geçirilip sayısal bir \`integer\` değişkene çevrilme algoritmaları tasarlanır. Kod yazarken gereksiz bir \`double\` değişken tanımlamanın bile mikrokontrolcünün hafızasını nasıl tüketebileceği (Memory Management) mühendislik disipliniyle aşılanır. Kısıtlılıklar içinde maksimum verim ve performans yaratma sanatıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/embedded_systems/embedded_systems_memory_architecture.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6m%C3%BCl%C3%BC+sistemler+adc+pwm+ve+timer+kullan%C4%B1m%C4%B1' },
      ],
    },
    4: {
      description: `İşlemcinin sürekli sensörleri kontrol etmesi (Polling) yerine, bir olay olduğunda (Örn: Düğmeye basılması veya sensör verisi gelmesi) donanımın yazılımı otomatik uyardığı Kesme (Interrupt) mimarisi öğrenilir. İşlemcinin mevcut ana kod döngüsünü dondurup anında acil durum fonksiyonuna (ISR - Interrupt Service Routine) atlaması ve geri dönmesi donanım seviyesinde kodlanır. Gerçek zamanlı sistemlerde (Real-time) mikrosaniyelik tepkilerin (Örn: Arabalardaki ABS veya Hava Yastığı) yazılım gecikmesine (Delay) takılmadan nasıl garanti altına alındığı ispatlanır. Hata potansiyeli çok yüksek olan kesme çakışmalarının ve önceliklerinin (Priority) tasarımı yapılarak sistem kararlılığı (Stability) sağlanır. Olay güdümlü (Event-driven) donanım programlamanın ustalık sınıfıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/interrupts-in-embedded-systems/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6m%C3%BCl%C3%BC+sistemlerde+kesmeler+interrupts+isr' },
      ],
    },
    5: {
      description: `İşlemcinin diğer entegrelerle (Sensör, Ekran, Bellek) veya bilgisayarlarla iletişim kurmasını sağlayan UART, I2C, SPI ve kablosuz haberleşme (Wi-Fi/IR) protokolleri bit seviyesinde kurgulanır. Sadece iki kablo (SDA/SCL) üzerinden 100'den fazla sensörü paralel olarak bağlayıp yönetebilen I2C veriyolunun adresleme ve paketleme mantığı incelenir. İleride IoT projelerinde gömülü cihazların (Örn: ESP32) bulut sunuculara (Backend) veri gönderebilmesi için gereken Wi-Fi/UART entegrasyonu yazılımsal olarak sağlanır. Donanım senkronizasyonu ve saat frekanslarının (Clock) iki farklı çip arasında haberleşmeyi nasıl hatasız sürdürdüğü pratik edilir. Parçaların birbiriyle konuştuğu dijital sinir ağlarının kurulumudur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/embedded_systems/embedded_systems_communication.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i2c+spi+uart+haberle%C5%9Fme+protokolleri+farklar%C4%B1' },
      ],
    },
    6: {
      description: `Sadece tek bir "while(1)" döngüsü koşturan çıplak donanım (Bare-metal) programlamadan çıkılarak, Gömülü Linux (Embedded Linux) ve Gerçek Zamanlı İşletim Sistemleri (RTOS) dünyasına geçiş yapılır. Raspberry Pi gibi güçlü mikroişlemcilerin üzerinde çalışan hafifletilmiş Linux dağıtımları kurularak, donanım sürücülerinin (Drivers) işletim sistemiyle nasıl konuştuğu analiz edilir. Ağ işlemleri, dosya sistemi ve grafik arayüz gerektiren kompleks gömülü projelerde, işletim sisteminin çoklu görev (Multithreading/Multitasking) ve kaynak yönetimini nasıl üstlendiği görülür. Yüksek seviyeli yazılım (Örn: Python/Node.js) ile alt seviye GPIO pinleri arasına OS soyutlama (Abstraction) katmanı yerleştirilir. Donanıma akıllı bir yönetici atama sürecidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/embedded_systems/embedded_systems_real_time_operating_system.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=embedded+linux+g%C3%B6m%C3%BCl%C3%BC+linux+ve+rtos+nedir' },
      ],
    },
    7: {
      description: `Gömülü Linux üzerinde C/C++ ve Python kullanılarak donanım (Sensörler/Pinler) ile konuşan kullanıcı seviyesi (User-space) ve çekirdek seviyesi (Kernel-space) uygulamalar geliştirilir. Yazdığınız kodun terminal üzerinden doğrudan donanım LED'lerini yakması veya motorları (Servo/Stepper) kontrol etmesi için sysfs veya gpiod kütüphanelerinin kullanımı öğrenilir. Endüstriyel panel bilgisayarlar (HMI) veya akıllı ev merkezi üniteleri tasarlarken, ağ üzerinden (SSH) sisteme bağlanıp uzaktan kod derleme ve çalıştırma pratiği kazanılır. Masaüstü Linux bilginizin, kısıtlı donanım kaynaklarında (RAM/CPU) en verimli şekilde nasıl optimize edileceği (Cross-compilation) aşılanır. Yazılımın donanımla buluştuğu güçlü bir Linux mimarisi kurulur.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://elinux.org/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=raspberry+pi+gpio+programlama+python+c' },
      ],
    },
    8: {
      description: `Gömülü sistemlerin mimari farklılıkları, hafıza haritalaması, kesme (Interrupt) mantığı ve haberleşme protokolleri (I2C, SPI) üzerine teknik bir değerlendirme yapılır. Mühendis adayının, sonsuz RAM ve CPU konforuna sahip masaüstü programcılığından çıkıp, her bir baytın (byte) ve mikro-saniyenin hayati önem taşıdığı kısıtlı sistemlerde düşünme becerisi ölçülür. Sensörlerden gelen analog sinyallerin çözümlenmesi veya iletişim hızlarının hesaplanması gibi donanım-yazılım karma (Co-design) problemleri test edilir. İleri düzey dış dünya entegrasyonlarına (LCD, Motorlar, IoT) geçmeden önce mikrodenetleyici hakimiyetinin kanıtlanması istenir. Alt seviye kodlamanın akademik ve pratik sağlamlık testidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Sıcaklık, nem, ivme (Gyroscope), gaz ve mesafe (Ultrasonic) gibi çevresel sensörlerden gelen raw (ham) verilerin kalibrasyonu ve gürültü filtreleme algoritmaları koda dökülür. Bir otonom cihaz veya drone geliştirirken, ivmeölçerlerden gelen titrek verilerin yazılımsal filtrelerle (Örn: Kalman veya Hareketli Ortalama Filtreleri) nasıl pürüzsüz (Smooth) bir fiziksel rotaya dönüştürüldüğü incelenir. Aynı zamanda, PID kontrolcüler (Oransal-İntegral-Türev) yazılarak ısıtıcıların veya robot motorlarının dış dünyadaki bozucu etkilere (rüzgar, yük) karşı istenen hedefe sarsıntısız ulaşması sağlanır. Yazılımınızın fiziksel dünyanın kaosuyla yüzleştiği ve ona hükmettiği ileri düzey matematiksel kontrol mekanizmalarıdır. Gerçek dünyaya algı ve refleks kazandırma aşamasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/sensors-in-embedded-system/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6m%C3%BCl%C3%BC+sistemler+sens%C3%B6r+okuma+ve+kalman+filtresi' },
      ],
    },
    10: {
      description: `Temel işlemcinin gücünün yetmediği durumlarda sistemi harici donanım modülleriyle (ADC/DAC çipleri, Harici EEPROM, Motor Sürücüler, RTC - Gerçek Zaman Saati) genişletme yöntemleri öğrenilir. Bir işlemciye dışarıdan SPI protokülü ile bağlanan ek bir hafıza veya ağ kartı (Ethernet Shield) sayesinde sistem kapasitesinin donanımsal olarak nasıl modüler büyütüldüğü tecrübe edilir. Güç elektroniği bileşenleri (Röleler, Mosfetler) kullanılarak, 3.3V ile çalışan zayıf mikrokontrolcünün 220V şebeke gücüyle çalışan endüstriyel cihazları güvenle kontrol etmesi sağlanır. Donanım limitlerinin yazılımla değil, akıllı donanım eklentileriyle aşılma vizyonu katar. Anakart tasarımının ve genişletilebilirliğin (Scalability) donanımsal karşılığıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/embedded_systems/embedded_systems_peripherals.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=harici+eeprom+ve+rtc+kullan%C4%B1m%C4%B1+i2c' },
      ],
    },
    11: {
      description: `İşlenen sensör verilerinin ve sistem durumlarının son kullanıcıya gösterilmesi için Karakter LCD (16x2), OLED ve TFT Dokunmatik ekranların donanım kütüphaneleri (Libraries) yazılır. Ekrana basit bir metin basmanın bile arka planda ekran çipine (Controller) gönderilen onlarca başlatma (Initialization) ve adresleme hex komutu gerektirdiği görülerek grafik arayüzlerin (GUI) alt katmanı öğrenilir. Bellek kısıtı olan sistemlerde ikonların ve fontların (Bitmaps) dizi (Array) olarak oluşturulup ekrana piksel piksel çizdirilme matematiği kavranır. Endüstriyel panellerde veya akıllı cihazlarda kullanıcının donanımla ilk etkileşime girdiği görsel arayüz iletişim kodlarıdır. Çıplak makineye bir yüz ve ifade kazandırma sanatıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/lcd-16x2-interfacing-with-microcontrollers/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lcd+ve+oled+ekran+kullan%C4%B1m%C4%B1+mikrodenetleyici' },
      ],
    },
    12: {
      description: `Gömülü cihazların sadece kendi içinde kalmayıp, Bluetooth, RF (Radyo Frekans) ve GSM/GPRS (Hücresel) modülleriyle uzak sistemlere ve buluta (Cloud) veri yollama senaryoları kodlanır. AT komut setleri (AT Commands) kullanılarak bir mikrokontrolcüden SMS attırma veya doğrudan TCP/IP üzerinden HTTP/MQTT istekleri ile bulut veritabanına sensör verisi gönderme (IoT Node) projeleri geliştirilir. Geliştirmeyi hedeflediğiniz arka uç (Backend) servisleriyle (Örn: Node.js, C#) donanımın iletişim kurduğu bu köprü, günümüzdeki Akıllı Tarım veya Akıllı Şehir (Smart City) projelerinin kalbidir. Sistemin kapalı bir kutu olmaktan çıkıp global ağın bir parçasına (Node) dönüştüğü aşamadır. Donanımı internetle birleştirip IoT dünyasına giriş yapmaktır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/internet_of_things/internet_of_things_hardware.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=esp32+mqtt+ile+buluta+veri+g%C3%B6nderme+iot' },
      ],
    },
    13: {
      description: `Gömülü Linux cihazlarında (Raspberry Pi, BeagleBone) komut satırından çıkarak PyQt, Tkinter veya Qt/C++ framework'leri ile modern dokunmatik grafik arayüzlü (GUI) masaüstü yazılımları geliştirilir. Araç içi multimedya ekranları, tıbbi cihaz monitörleri veya kiosk otomasyonları gibi donanım kontrolünün şık bir görsel pencereyle (Front-End) son kullanıcıya sunulduğu endüstriyel tasarımlar kurgulanır. Arayüzde basılan bir butonun (Event) arka planda asenkron olarak (Thread) donanım pinini tetiklediği, sistemin görsel ve fiziksel bütünlüğü sağlanır. Kullanıcı deneyimini (UX) kısıtlı donanım kaynaklarında bile akıcı bir performansla yönetme becerisi kazandırılır. Donanımın profesyonel bir endüstriyel ürüne evrimleşmesidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://doc.qt.io/qt-6/embedded-linux.html' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=raspberry+pi+pyqt5+gui+tasar%C4%B1m%C4%B1+ve+gpio+kontrol%C3%BC' },
      ],
    },
    14: {
      description: `Dönemin finalinde, kamera modülleri (OpenCV) ve gelişmiş API'ler kullanılarak gömülü sistemlerin Yüz Tanıma, Otonom Takip ve Görüntü İşleme gibi Yapay Zeka tabanlı üst düzey görsel uygulamalarla desteklenmesi gerçekleştirilir. Bulut sistemlerine gerek kalmadan doğrudan uç cihazda (Edge Computing) yapay zeka modelinin çalıştırılarak gecikmesiz (Real-time) donanım kararları alma vizyonu projelerle gösterilir. Bir bilgisayar mühendisi olarak, elektronik devreden başlayıp C/Linux işletim sistemine, haberleşme ağlarından üst düzey görsel arayüzlü yapay zeka yazılımına kadar tam donanımlı bir ürün geliştirme yaşam döngüsü tamamlanır. Kodun mekaniğe, mekaniğin zekaya dönüştüğü "Full-Stack Embedded" eğitiminin muazzam sonudur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://opencv.org/platforms/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=raspberry+pi+opencv+g%C3%B6r%C3%BCnt%C3%BC+i%C5%9Fleme+uygulamalar%C4%B1' },
      ],
    },
  },
  'BMSB402 Görüntü İşleme': {
    1: {
      description: `İnsan görme sisteminin biyolojisinden ilham alınarak, gerçek dünyadaki analog görüntülerin bilgisayarlar için dijital matrislere (piksellere) dönüşüm süreci tanıtılır. Renk derinliği (Bit depth), mekansal çözünürlük (Resolution) ve örnekleme (Sampling/Quantization) kavramlarıyla görüntünün bellekte nasıl sayılara kodlandığı öğrenilir. Makine öğrenmesi ve yapay zeka (Computer Vision) uygulamalarında verisetlerini hazırlarken görüntünün matematiksel anatomisini bilmek, doğru filtrelemeler yapmak için zorunludur. Disiplinlerarası bir alan olarak tıptan (MR/Tomografi) uydulara, otonom araçlardan güvenliğe kadar görüntü işlemenin mühendislikteki devasa kullanım yelpazesi tartışılır. Işığın dijital matrislere dönüşüm yolculuğunun başlangıcıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/index.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=dijital+g%C3%B6r%C3%BCnt%C3%BC+i%C5%9Fleme+giri%C5%9F+ve+pikseller' },
      ],
    },
    2: {
      description: `Görüntü matrisindeki piksellerin komşularına bakılmaksızın (Noktasal İşlemler) sadece kendi değerlerinin matematiksel fonksiyonlarla değiştirildiği Kontrast, Parlaklık ve Gamma düzeltme işlemleri kurgulanır. Karanlık çıkmış bir uydunun veya tıbbi röntgenin Histogram Eşitleme (Histogram Equalization) algoritmasıyla otomatik olarak nasıl detaylarının ortaya çıkarıldığı kodlanır (Örn: MATLAB veya OpenCV). Eşikleme (Thresholding) yapılarak piksellerin 0 (Siyah) ve 1 (Beyaz) olarak ikiye ayrılmasıyla objelerin arka plandan koparılıp izole edilmesi (Segmentation) öğretilir. Yapay zeka modellerine veriyi vermeden önce sistemin (Modelin) detayları daha iyi görmesini sağlayan veri ön işleme (Preprocessing) adımlarıdır. Matris değerleriyle oynayarak gizli detayları aydınlatma sanatıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/image_transformation.htm' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6r%C3%BCnt%C3%BC+i%C5%9Fleme+histogram+e%C5%9Fitleme+ve+e%C5%9Fikleme' },
      ],
    },
    3: {
      description: `Piksellerin sadece kendisiyle değil, etrafındaki komşu piksellerle (Kernel/Mask) çarpılarak konvolüsyon (Convolution) işleminden geçirildiği Uzamsal Filtreleme (Spatial Filtering) yöntemleri işlenir. Mean (Ortalama) veya Gauss filtreleriyle görüntüdeki karlanmanın (Noise) nasıl bulanıklaştırılarak yok edildiği (Smoothing) algoritmik olarak test edilir. Sobel ve Laplacian gibi türevsel filtreler kullanılarak, pikseller arasındaki ani renk değişimlerinden kenar ve hatların (Edge Detection) nasıl çizildiği ve otonom şerit takibinin temelleri öğrenilir. Derin Öğrenmede (CNN - Convolutional Neural Networks) ağın ilk katmanlarının görüntünün kenarlarını ve özelliklerini (Feature Extraction) bu filtrelerle çıkardığı mühendislik vizyonuyla aşılanır. Pikseller arası matematiksel ilişkilerden anlam çıkarma evresidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/concept_of_filtering.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%B6r%C3%BCnt%C3%BC+i%C5%9Fleme+konvol%C3%BCsyon+kenar+bulma+filtreleri' },
      ],
    },
    4: {
      description: `Görüntünün kameradan, lensten veya hareketten dolayı bozulduğu durumlarda, bozucu etkinin (Degradation Model) matematiksel tersini bularak orijinal görüntüyü geri getirme (Image Restoration) felsefesi öğrenilir. Sensörlerin ısınmasından veya veri iletiminden kaynaklanan Tuz-Biber (Salt and Pepper) gürültüsü veya Gauss gürültüleri gibi fiziksel bozucu etkilerin istatistiksel modelleri çıkarılır. Median (Ortanca) filtreleme gibi doğrusal olmayan (Non-linear) yaklaşımlarla, görüntünün kenar keskinliğini (Sharpness) bozmadan gürültü piksellerinin nasıl başarıyla yok edildiği pratik edilir. Fotoğraf geliştirmenin (Enhancement) aksine, fiziksel bozulma fonksiyonunu tersine mühendislikle (Reverse Engineering) çözerek gerçekliği kurtarma operasyonudur. Kusurlu lenslerin hatalarını kodla onarma tekniğidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/image_restoration.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=image+restoration+noise+models+median+filter' },
      ],
    },
    5: {
      description: `Hareket bulanıklığı (Motion Blur) veya odak dışı (Out-of-focus) kalmış görüntülerin düzeltilmesi için Wiener Filtresi ve Ters Filtreleme (Inverse Filtering) gibi daha ileri düzey analitik algoritmalar işlenir. Astronomi (Hubble Uzay Teleskobu) veya güvenlik kameralarında plaka tespiti yaparken hareketten dolayı silinmiş nesneleri matematiksel olarak netleştirmenin (Deconvolution) arka planı kodlanır. Hata modelinin sıfıra yakın olduğu durumlarda ters filtrenin matematiği nasıl sonsuza (Gürültü Patlaması) sürüklediği ve buna karşı alınan stabilizasyon yöntemleri tartışılır. Sadece görünen piksellerle değil, görüntünün bozulan fiziksel doğasıyla savaşarak paha biçilmez verileri (Forensic Analysis) geri kazanma bilincidir. Adli bilişim ve ileri bilimsel analizlerin başucu yöntemleridir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Wiener_deconvolution' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=wiener+filter+image+restoration+deblurring' },
      ],
    },
    6: {
      description: `Görüntüyü uzaysal düzlemden (x,y) alarak karmaşık sayılardan oluşan frekans düzlemine geçiren 2 Boyutlu Fourier Dönüşümü (2D FFT) efsanesi öğrenilir. Bir görüntünün düz ve pürüzsüz kısımlarının düşük frekans (Low-frequency), kenar ve ani renk değişimlerinin ise yüksek frekans (High-frequency) olarak yeni bir boyutta (Spectrum) nasıl temsil edildiği görselleştirilir. Bilgisayar mühendisliğinin en soyut ancak en güçlü aracı olan Fourier uzayında piksellerle değil, frekans dalgalarıyla oynamanın (Filtrelemenin) algoritmik avantajları analiz edilir. Klasik pikselleri matrislerle tek tek çarpmaktan kurtulup, sistemi frekans matematiğiyle manipüle ederek işlemciyi rahatlatma felsefesidir. Doğanın görsel dalgalarını matematiksel titreşimlere bölme aşamasıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/fourier_transform.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=2d+fourier+transform+image+processing' },
      ],
    },
    7: {
      description: `Fourier uzayında Düşük Geçiren (Low-pass) filtrelerle pürüzsüzleştirme ve Yüksek Geçiren (High-pass) filtrelerle keskinleştirme işlemleri pratik olarak uygulanır. Bir fotoğraftaki periyodik gürültülerin (örneğin eski televizyonlardaki yatay tarama çizgileri) Fourier spektrumunda nasıl izole yıldızlar gibi parladığı ve Notch (Çentik) filtreleriyle o çizgilerin sihir gibi nasıl silindiği kodlanır. Uzaysal uzaydaki çok ağır (O(N^2)) konvolüsyon işlemlerinin, frekans uzayında sadece basit bir çarpma işlemine (O(N)) dönüşerek sistemi nasıl devasa hızlandırdığı (Convolution Theorem) ispatlanır. Ağır işlem gücü isteyen yapay zeka vizyon projelerinde (Computer Vision) yazılım optimizasyonu yapabilmenin gizli silahıdır. Spektrum üzerinde cerrahi müdahale ile fotoğrafı iyileştirmektir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/high_pass_vs_low_pass_filters.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=frequency+domain+filtering+low+pass+high+pass+image+processing' },
      ],
    },
    8: {
      description: `Vücudun veya bir objenin etrafından çekilen 1 boyutlu projeksiyon sinyallerinden (X-Işınları), 2 ve 3 boyutlu iç yapı kesitlerini geri oluşturan Tomografi (CT/MRI) algoritmaları işlenir. Radon Dönüşümü ve Filtrelenmiş Geri Projeksiyon (Filtered Backprojection) matematiği sayesinde, cismin içine girmeden içinin görüntüsünün yazılımla nasıl inşa edildiği analiz edilir. Tıbbi yazılım geliştiricilerin (HealthTech) hayat kurtaran teşhis sistemlerinin arkasındaki o muazzam tersine matematik felsefesi kod üzerinden kavranır. Görünmeyen ve eksik verilerden bütünsel bir yapıyı yeniden var eden (Reconstruction) ileri seviye hesaplamalı görüntüleme (Computational Imaging) teknikleridir. Tıbbı ve mühendisliği birleştiren en kutsal algoritmik başarılardan biridir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Radon_transform' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=image+reconstruction+from+projections+radon+transform' },
      ],
    },
    9: {
      description: `Görüntünün dijitalleşmesi, yoğunluk dönüşümleri, uzamsal filtreleme ve Fourier frekans uzayı algoritmalarının teorik ve analitik düzeyde test edildiği ara değerlendirmedir. Bir mühendis adayının sadece hazır kütüphaneleri (OpenCV) çağırması değil, o fonksiyonların arka planında yatan matris matematiğini, konvolüsyon kernel'lerini ve frekans denklemlerini ne derece anladığı ölçülür. Hatalı bir filtreleme sonucu görüntünün neden bozulduğunu veya kenarların neden kaybolduğunu teorik olarak savunabilme yetisi test edilir. Renk modelleri, makine öğrenmesi hazırlıkları ve geometrik işlemlere geçmeden önce sağlamlık kontrolüdür. Bilgisayarlı görü (Computer Vision) temellerinin akademik onaydır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Matrislerin (Görüntünün) döndürülmesi (Rotation), ölçeklenmesi (Scaling), kaydırılması (Translation) ve eğilmesi (Shearing) gibi Affine Dönüşüm algoritmaları işlenir. Farklı açılardan çekilmiş bir faturanın veya yüzün, yapay zekaya (OCR veya Face Recognition) gönderilmeden önce algoritmalar tarafından (Perspective Transform) nasıl düzleştirilip standart bir forma sokulduğu kurgulanır. Tam sayı olmayan piksellerin hesaplanması sırasında oluşan boşlukları doldurmak için Bilineer ve Bikübik (Bicubic) interpolasyon teknikleri kullanılarak kalitenin nasıl korunduğu öğretilir. Google Earth veya oyun motorlarındaki (Unity) kamera açısı değişimlerinin arkasındaki pürüzsüz vektörel piksellendirme matematiğidir. Görüntüyü bozmadan sanal uzayda eğip bükme sanatıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/concept_of_geometric_transformation.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=geometrik+transformasyonlar+affine+perspective+image+processing' },
      ],
    },
    11: {
      description: `İki veya daha fazla farklı zaman, açı veya sensörden çekilmiş görüntünün ortak bir koordinat sistemine oturtularak üst üste bindirilmesi olan Görüntü Hizalama (Image Registration/Stitching) teknikleri öğrenilir. Cep telefonlarındaki "Panorama" modunun veya HDR fotoğrafların, farklı karelerdeki anahtar noktaları (Keypoints - SIFT/SURF) bularak nasıl milimetrik birleştirildiği algoritma seviyesinde kodlanır. Uydu görüntülerinden şehirdeki değişimleri analiz etmek veya tıbbi MR ve PET cihazlarının görüntülerini tek bir ekranda birleştirmek (Sensor Fusion) için bu tekniklerin doğruluğu (Accuracy) tartışılır. Yapay zekanın dünyayı kesintisiz ve geniş bir panoramada algılayabilmesini sağlayan kritik eşleştirme sistemleridir. Farklı perspektiflerin dijital olarak dikilmesidir (Stitching).`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Image_registration' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=image+registration+and+image+stitching+opencv' },
      ],
    },
    12: {
      description: `İnsan gözünün algıladığı RGB (Kırmızı, Yeşil, Mavi) modelinden çıkılarak; parlaklık ve rengi ayıran HSI, YCbCr, CMYK ve LAB gibi farklı renk uzaylarının (Color Spaces) neden ve nasıl kullanıldığı incelenir. Derin öğrenme algoritmalarında objeyi takip ederken (Object Tracking) ışık değişimlerinden etkilenmemek için RGB yerine sadece rengin özünü taşıyan Hue (Ton) kanalının kullanılmasının algoritmik avantajları kodlanır. Renkli görüntülerde yoğunluk (Intensity) ve doygunluk (Saturation) üzerinde oynayarak profesyonel fotoğraf düzenlemelerinin arka plan matematiği gösterilir. Video sıkıştırma algoritmalarının (MPEG/JPEG) insan gözünün renge duyarsızlığından yararlanıp (Chroma Subsampling) boyut tasarrufu yapma felsefesi aşılanır. Dijital dünyanın boya paletini matematiksel olarak ayrıştırma evresidir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/color_image_processing.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=color+image+processing+rgb+hsv+cmyk' },
      ],
    },
    13: {
      description: `Fourier Dönüşümünün (FFT) aksine, bir sinyalin sadece frekansını değil, o frekansın "zamanın ve uzayın neresinde" olduğunu da bulabilen efsanevi Dalgacık (Wavelet) Dönüşümü öğrenilir. FBI'ın parmak izi sıkıştırmasında veya modern JPEG-2000 formatında görüntünün kare kare (blocky) bozulmasını engelleyen bu sürekli, çözünürlük bağımsız algoritmik mimari incelenir. Görüntüyü düşük ve yüksek frekanslı alt bantlara (Sub-bands) ayırarak, gürültünün (Noise) ana hatları bozmadan Dalgacık uzayında nasıl jilet gibi temizlendiği kodlanır. Devasa ve detaylı görüntülerin (Uydu/Tıp) işlemciyi (CPU/RAM) yormadan, istenilen çözünürlük seviyesinde (Multi-resolution) işlenmesini sağlayan modern matematiksel vizyondur. Piksel analizinin en çağdaş ve esnek teorilerinden biridir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Wavelet_transform' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=wavelet+transform+image+processing+dalgac%C4%B1k+d%C3%B6n%C3%BC%C5%9F%C3%BCm%C3%BC' },
      ],
    },
    14: {
      description: `Dönemin finalinde, görüntü verisindeki tekrarları (Redundancy) matematiksel olarak azaltıp kaliteden ödün vermeden boyut tasarrufu sağlayan Görüntü Sıkıştırma (Image Compression) algoritmaları işlenir. Huffman kodlaması, RLE ve LZW gibi kayıpsız algoritmaların yanı sıra; Ayrık Kosinüs Dönüşümü (DCT) ile yüksek frekansları silerek çalışan Kayıplı (JPEG) sıkıştırma mantığı uçtan uca özetlenir. Web sitelerinin hızını artıran Front-End optimizasyonlarının ve Backend sunucu maliyetlerini düşüren o muazzam veri paketleme felsefesinin tam donanımsal karşılığı kavranır. Görüntülerin oluşturulmasından, filtrelenmesine, frekanslarına ayrılıp nihayetinde ağda hızlıca iletilecek kadar küçültülmesine kadar tam bir mühendislik yaşam döngüsüyle ders tamamlanır. Bilginin kalitesini koruyarak entropiye meydan okumanın dijital sanatı noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/dip/image_compression.htm' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=image+compression+techniques+dct+huffman+jpeg' },
      ],
    },
  },
  'BMSB442 Kolektif Öğrenmeye Giriş': {
    1: {
      description: `Makine öğrenmesindeki "tek bir dahiye güvenmek yerine, bir uzmanlar kuruluna danışma" felsefesi olan Kolektif (Ensemble) Öğrenme kavramına giriş yapılır. Tekil bir Karar Ağacının (Decision Tree) verilere aşırı uyum sağlama (Overfitting) veya yanlılık (Bias) yaratma zafiyetlerinin, birden çok zayıf modelin birleştirilmesiyle nasıl mucizevi şekilde giderildiği tartışılır. Endüstriyel projelerde (Kaggle yarışmaları veya finansal risk analizleri) lider tablosunu domine eden yapıların neden her zaman Ensemble modelleri olduğu algoritmik perspektifle analiz edilir. Bilgisayar mühendisliğindeki dağıtık sistem (Distributed Systems) mimarisi mantığının, yapay zeka tahminlerine uyarlanmış akılcı versiyonudur. Kararlılığı (Robustness) ve doğruluk payını maksimize eden modern makine öğrenmesi vizyonudur.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ensemble+learning+kolektif+%C3%B6%C4%9Frenme+nedir' },
      ],
    },
    2: {
      description: `Temel makine öğrenmesi algoritmalarının çalışma mantıkları ve Kolektif sistemlere nasıl alt model (Base Learner) olarak entegre edildikleri hızlıca gözden geçirilir. Bir modelin hata (Error) kaynağının Yanlılık (Bias), Varyans (Variance) ve Önlenebilir Gürültü (Noise) bileşenlerine ayrıştırılması matematiksel olarak incelenir. Ensemble algoritmalarının (Bagging vs Boosting) hangisinin yüksek varyansı düşürmeye (kararlılık), hangisinin yüksek yanlılığı (öğrenememe) yok etmeye odaklandığı teorik olarak haritalandırılır. Geliştireceğiniz tahmin modellerinde hatanın anatomisini bilerek, soruna nokta atışı çözüm üretecek birleşim stratejisi seçme (Algorithm Selection) yetisi kazanılır. Modeller arası hata telafisinin felsefi altyapısı atılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bias+variance+tradeoff+machine+learning' },
      ],
    },
    3: {
      description: `Kolektif modellerin gücünü aldığı "çeşitlilik" (Diversity) yaratma prensibinin en temel yolu olan Bootstrapping (Yerine Koyarak Rastgele Örnekleme) yöntemi öğrenilir. Elimizdeki tek bir eğitim veri setinden, istatistiksel olasılıklarla yüzlerce farklı sahte (Pseudo) alt veri seti üreterek farklı karakterlerde modeller eğitme mantığı kurgulanır. Veri yetersizliği (Small Dataset) veya dengesiz sınıf (Imbalanced Data) problemlerinde, veri setinin manipüle edilerek çoğaltılmasının algoritmaları nasıl daha genelleyici (Generalizable) yaptığı ispatlanır. Farklı verilerle eğitilen modellerin aynı hatayı yapma olasılığının düşürüldüğü (Uncorrelated Errors) o kusursuz matematiksel oyun gösterilir. Veriyi akıllıca dilimleyerek çoklu zeka yaratmanın ilk adımıdır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bootstrapping+data+sampling+machine+learning' },
      ],
    },
    4: {
      description: `Otonom veya manuel olarak seçilen alt öğrenicilerin (Base Classifiers) bir araya getirilerek tek bir karar mekanizması halinde nasıl kurgulanacağı (Model Construction) işlenir. Çıkan sonuçların basit oylama (Majority Voting), ağırlıklı oylama (Weighted Voting) veya ortalama alma (Averaging) gibi farklı Entegrasyon yöntemleriyle nasıl nihai tek bir karara (Final Prediction) bağlandığı kodlanır. Oylama sisteminde her modelin fikrinin eşit olmadığı; başarı oranına göre bazı modellere daha çok "güven" (Weight) atanması gerektiğinin algoritmik matematiği tartışılır. Gerçek dünyadaki iş kurallarının (Business Logic) makine jürisine nasıl delege edileceği (Delegation) vizyonu sunulur. Farklı frekanslardan gelen sesleri tek ve güçlü bir senfoniye dönüştürme sanatıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ensemble+model+voting+and+averaging' },
      ],
    },
    5: {
      description: `Kolektif öğrenmenin en çok tercih ettiği, esnek ama dengesiz (High Variance) doğasıyla bilinen Karar Ağaçları (Decision Trees) mimarisi temel olarak hatırlatılır. Derinleştirilmiş bir ağacın (Unpruned Tree) veriyi nasıl ezberlediği (Overfitting) ve ufacık bir veri değişiminde yapısının nasıl tamamen çöktüğü (Instability) görülür. Tam da bu zayıflığından dolayı (Çeşitliliğe çok açık olması), Bagging ve Random Forest gibi kolektif sistemlerde neden en mükemmel "Zayıf Öğrenici" (Weak Learner) profiline oturduğu teorik olarak tartışılır. Beyaz kutu (Şeffaf) olan bu algoritmaların yüzlercesi birleştiğinde nasıl "Kara Kutu"ya (Black-box) dönüşerek devasa doğruluk sağladığı kavranır. Ormanı oluşturan o karmaşık ve asabi ağacın köklerinin incelenmesidir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=decision+trees+machine+learning+overfitting' },
      ],
    },
    6: {
      description: `Hedef değişkenin kategorik olduğu durumlarda (Örn: Hastalık var/yok, Spam/Normal) Kolektif sınıflandırma stratejileri Python (Scikit-Learn) ortamında kodlanarak test edilir. Tekil bir Lojistik Regresyon veya KNN modelinin çözemediği karmaşık sınır çizgilerinin (Decision Boundaries), Ensemble jürisi sayesinde nasıl yumuşak ve esnek bir yapıya büründüğü görselleştirilir. Sınıflar arası dengesizlik (Örn: Yüzde 1 olan sahtekarlık işlemleri) olduğunda, basit oylamanın (Voting) yetersiz kalıp ağırlıklı olasılık tahminlerinin (Soft Voting) nasıl hayat kurtardığı tecrübe edilir. Sistem mimarinizin, dışarıdan gelen verileri yanlış kutulara atmasını engelleyecek çok katmanlı savunma ağıdır. Kategorik tahminlerin isabet oranını zirveye çıkarma pratiğidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ensemble+learning+classification+soft+hard+voting' },
      ],
    },
    7: {
      description: `Hedef değişkenin sürekli ve sayısal olduğu (Örn: Ev fiyatları, Borsa tahminleri) durumlarda modellerin çıktı istatistiklerini birleştiren Kolektif Regresyon yöntemleri kurgulanır. Yüzlerce ağacın ürettiği farklı fiyat tahminlerinin medyan (Median) veya ortalamasının (Mean) alınarak, tekil hataların birbirini nasıl sönümlediği ve çizginin (Regression Line) nasıl pürüzsüzleştiği gösterilir. Aykırı veri (Outlier) girişlerinde tek bir modelin tahmininin bozulmasına karşılık, jüri sisteminin bu sapmayı "Kötü Model" olarak değerlendirip sonuca yansıtmadığı kararlı yapı (Robustness) incelenir. Finans ve IoT gibi sayısal veri akan projelerde, tahmin (Prediction) güvenliğini artıran algoritmik sigortadır. Geleceğin belirsiz sayılarını ortak akılla netleştirme aşamasıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ensemble+regression+models+machine+learning' },
      ],
    },
    8: {
      description: `Dönemin ortasına gelirken, kurulan Ensemble modellerinin ezberleme oranlarını, başarılarını ve eğitim maliyetlerini (CPU/Zaman) endüstri standartlarında ölçme metrikleri ele alınır. Çapraz Doğrulama (K-Fold Cross Validation), Karmaşıklık Matrisi (Confusion Matrix), ROC eğrisi ve F1 Score değerleri üzerinden tekil modeller ile kolektif modellerin başarı artışı (Performance Boost) sayısal olarak kanıtlanır. Birden fazla modeli eğitmenin yarattığı işlemci yükünün (Computational Cost), canlı (Production) sistemlerdeki gecikmeye (Latency) değip değmeyeceği mühendislik ödünleşimi (Trade-off) mantığıyla tartışılır. Algoritmanın performansını sadece doğrulukla değil, kurumsal mimari sürdürülebilirliğiyle (Scalability) savunabilme gücü verir. Modelin sadece akıllı değil, aynı zamanda verimli olduğunun testidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+model+evaluation+roc+auc' },
      ],
    },
    9: {
      description: `Yüksek varyansı düşürüp modellerin aşırı öğrenmesini (Overfitting) engelleyen, bağımsız ve paralel eğitilen modellerin şahı Bagging yöntemi ve Random Forest (Rastgele Orman) algoritması öğrenilir. Her ağacın sadece verinin rastgele bir kısmını değil, aynı zamanda değişkenlerin (Features) de rastgele bir alt kümesini görerek eğitilmesiyle modellerin birbirine benzemesinin (Correlation) nasıl kırıldığı anlatılır. Yüzlerce karar ağacının aynı anda ve paralel işlemcilerde (Multithreading) eğitilebilme imkanı sayesinde model eğitim hızının nasıl arttığı donanımsal olarak tartışılır. Veri setindeki gürültüye (Noise) en dayanıklı algoritmalarından biri olarak kurumsal veri bilimcilerin (Data Scientist) ilk başvurduğu temel silahı aşılar. Farklı bakış açılarına sahip bağımsız uzmanlar yetiştirme sistemidir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bagging+and+random+forest+algorithm' },
      ],
    },
    10: {
      description: `Paralel değil sıralı (Sequential) çalışan, her yeni modelin bir önceki modelin hatalarına odaklanarak onu düzelttiği yüksek performanslı Boosting (Güçlendirme) felsefesi işlenir. AdaBoost, Gradient Boosting (GBM) ve XGBoost gibi sektör standartlarının, zor (yanlış bilinen) verilere yüksek ağırlıklar vererek sistemi nasıl hatasızlığa zorladığı matematiksel olarak (Gradient Descent) kavranır. Yanlışlık oranını (Bias) muazzam derecede düşüren bu algoritmaların, yanlış yapılandırıldığında veriyi nasıl hızla ezberleyebileceği (Overfitting tehlikesi) ve hiperparametre ayarlarının (Learning Rate) önemi pratik edilir. Veri bilimi yarışmalarının (Kaggle) birincilerini çıkartan o agresif ve keskin algoritmik güç kodlarınıza entegre edilir. Birbirinin eksiğini kapatan disiplinli bir usta-çırak eğitim modelidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=boosting+algorithms+adaboost+xgboost+gbm' },
      ],
    },
    11: {
      description: `Oylama veya ortalama almak yerine, alt modellerin (Tier-1) ürettiği tahmin çıktılarını (Predictions) alıp "Bunları kullanarak asıl kararı verecek" yeni bir Üst Model (Tier-2 / Meta-Learner) eğiten Stacking (Yığınlama) yöntemi öğrenilir. Alt seviyede birbirinin zıttı çalışan (Örn: Bir Ağaç, bir SVM, bir Sinir Ağı) tamamen heterojen modellerin yeteneklerinin, üst düzey bir Lojistik Regresyon tarafından nasıl sentezlendiği mimari olarak kurgulanır. Alt algoritmaların hangi veri tiplerinde zayıf, hangilerinde güçlü olduğunu üst modelin otomatik olarak öğrenerek insan sezgisinin çok ötesinde genellemeler yaptığı ispatlanır. Farklı teknolojilerin yeteneklerini tek bir potada eriten nihai (Ultimate) yapay zeka mimarisidir. Bilgisayar mühendisliğinin tahmin yeteneğini doruğa ulaştıran en karmaşık Ensemble stratejisidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=stacking+ensemble+machine+learning' },
      ],
    },
    12: {
      description: `Dönem boyunca öğrenilen Bagging (Random Forest), Boosting (XGBoost) ve Stacking gibi ileri düzey makine öğrenmesi mimarilerinin gerçek bir veri setinde (Kaggle veya kurumsal bir data) koda dökülüp sunulduğu proje haftasıdır. Tekil bir karar ağacının sonuçlarıyla, tasarladığınız karmaşık Kolektif modelin sonuçları arasındaki performans (Accuracy/F1) sıçraması jüri önünde grafiklerle ispatlanır. Sadece başarılı bir model kurmak değil, bu modelin çalışma maliyetinin (RAM/CPU/Eğitim Süresi) gerçek hayat uygulamaları (Real-time Prediction) için ne kadar feasible (uygulanabilir) olduğu mühendislik savunmasıyla tartışılır. Algoritmaların kara kutusunu açarak, müşteriye hangi değişkenlerin en önemli (Feature Importance) olduğunu açıklayabilme yeteneği sergilenir. Akademik bilginin şirketlere değer katan endüstriyel bir ürüne dönüştüğü aşamadır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=machine+learning+ensemble+project+presentation' },
      ],
    },
    13: {
      description: `(Proje Sunumlarına Devam) Ekiplerin finans, tıp, e-ticaret gibi farklı domainlerde karşılaştıkları veri dengesizliklerini veya gürültülü verileri Ensemble modellerle nasıl yönettikleri üzerinden kod incelemeleri (Code Review) yapılır. Başka ekiplerin Hiperparametre optimizasyonunda (GridSearch vs RandomSearch) düştükleri tuzaklar ve aşırı öğrenme (Overfitting) hataları sınıfça analiz edilerek kolektif bir tecrübe (Best Practices) oluşturulur. Veri hazırlama boru hattı (Pipeline) ile makine öğrenmesi modelinin bulut sunucularına (Deployment) veya uç cihazlara (Edge AI) nasıl entegre edilebileceğinin mimari planları konuşulur. Farklı iş problemlerine uygulanan farklı Ensemble reçeteleri sayesinde veri biliminin çok yönlülüğü gözlemlenir. Hatalardan ve farklı yaklaşımlardan öğrenme kültürü desteklenir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=hyperparameter+tuning+gridsearchcv+machine+learning' },
      ],
    },
    14: {
      description: `Son sunumların ardından Kolektif Öğrenme (Ensemble Learning) mimarilerinin günümüz Derin Öğrenme (Deep Learning) modellerine nasıl ilham verdiği ve modern yapay zeka yarışmalarındaki konumu değerlendirilir. Öğrencilerin sadece hazır kütüphaneleri (\`fit()\`, \`predict()\`) çağıran kodlayıcılar olmaktan çıkıp, arka plandaki oylama, entropi, ağırlık güncelleme (Gradient) ve hata dağılımı (Bias-Variance) matematiklerini anlayan gerçek birer "Veri Mühendisi / Yapay Zeka Mimarı" oldukları tescillenir. Doğadaki takım çalışması (Swarm Intelligence) ve ortak akıl felsefesinin, bilgisayar algoritmalarında yaratabileceği sarsılmaz tahmin gücü idrak edilerek ders noktalanır. Ham veri kaosunun içinden, uzman algoritmalar jürisinin kesin ve güvenilir kararlarıyla çıkış yapılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://pkaya.cv.nku.edu.tr/cv/dokumanlar/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ensemble+learning+projects+and+future+of+ai' },
      ],
    },
  },
  'BMSB426 Proje Hazırlaması ve Yönetimi': {
    1: {
      description: `Mühendislikte "Proje" kavramının operasyonel (sürekli) işlerden farkı; belirli bir başlangıcı, bitişi ve bütçesi olan eşsiz bir değer üretme süreci olarak tanımlanır. Yazılım dünyasındaki yüksek başarısızlık oranlarının temel sebebinin kodlama değil, kapsam ve zaman yönetiminin yapılamaması olduğu vaka analizleriyle incelenir. Geleneksel (Predictive/Waterfall) proje yönetimi ile modern bilişim sektörünü domine eden Çevik (Agile/Scrum) yaklaşımlarının temel farkları, takım dinamikleri ve proje yöneticisinin (Project Manager / Scrum Master) görevleri tanıtılır. Bir bilgisayar mühendisi olarak sadece kendinize verilen kodu (task) yazmak yerine, o taskın büyük vizyona ve şirket hedeflerine nasıl hizmet ettiğini görebilen kuşbakışı (Bird's-eye view) perspektif aşılanır. Kodu değil, insanı, parayı ve zamanı yönetme sanatına ilk adımdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.pmi.org/about/learn-about-pmi/what-is-project-management' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+y%C3%B6netimi+nedir+giri%C5%9F' },
      ],
    },
    2: {
      description: `Projedeki kapsam, zaman, maliyet ve kalite gibi parçalı alanların tek bir çatı altında senkronize edilerek birleştirilmesi (Integration) evresi öğrenilir. Proje Başlatma Belgesi (Project Charter) hazırlanarak yazılım projesinin resmi olarak nasıl var edildiği ve proje yöneticisine (PM) nasıl kurumsal yetki atandığı gösterilir. Proje yönetimi planının oluşturulması, müşteri değişiklik taleplerinin (Change Requests) kontrolsüz bir şekilde kod tabanını (Codebase) bozmadan önce "Bütünleşik Değişiklik Kontrolü" sürecinden nasıl geçtiği incelenir. Modüler yazılmış kodların entegrasyonu (CI/CD) gibi, projedeki finansal ve iş gücü parçalarının da çökmeden bir araya getirilme mekanizmasıdır. Büyük resmi bozmadan projeye yön verme disiplinidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_integration_management.htm' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=project+integration+management+pmp' },
      ],
    },
    3: {
      description: `Yazılımın neleri yapacağını (In-scope) ve daha da önemlisi "neleri yapmayacağını" (Out-of-scope) net olarak belirleyen kapsam sınırlarının çizilmesi (Scope Management) işlenir. Müşteri gereksinimlerinin (Requirements) toplanması ve büyük yazılım hedefinin parçalanarak yönetilebilir İş Kırılım Ağacı (Work Breakdown Structure - WBS) paketlerine bölünmesi öğretilir. Yazılımcıların en büyük kabusu olan ve projeyi bitirmeyen "Kapsam Sünmesi" (Scope Creep - sürekli ek özellik istenmesi) hastalığının kontrat ve analiz belgeleriyle nasıl önleneceği tartışılır. Özelliklerin (Features) gereksiz yere eklenmesini (Gold-plating) engelleyerek takımın sadece taahhüt edilen çekirdek işe (MVP) odaklanması hedeflenir. Müşteri istekleri ile mühendislik gerçekleri arasına çekilen kırmızı çizgidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_scope_management.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=project+scope+management+wbs+kapsam+s%C3%BCnmesi' },
      ],
    },
    4: {
      description: `Yazılım modüllerinin tamamlanma sürelerinin tahminlenmesi, aktivite dizilişlerinin (Bağımlılıklar - Finish-to-Start vb.) belirlenmesi ve proje takviminin (Schedule) oluşturulması incelenir. Kritik Yol Yöntemi (Critical Path Method - CPM) kullanılarak, projede geciktiğinde tüm projenin teslim tarihini kaydıracak (Zero Float) en hayati görev zinciri matematiksel olarak bulunur. Geciken bir yazılımı yetiştirmek için koda yeni geliştiriciler eklemenin (Crashing) veya testleri geliştirme ile paralel yapmanın (Fast-tracking) projedeki riski ve maliyeti nasıl artırdığı mühendislik kanunlarıyla (Brooks Kanunu) tartışılır. Agile Sprint planlamalarıyla (Velocity) takımın hızını doğru ölçerek müşteriye gerçekçi tarihler verme (Deadline) yetkinliği kazandırılır. Zamanın, paradan ve kaynaktan daha değerli olduğu gerçeğinin yönetimidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_time_management.htm' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+zaman+y%C3%B6netimi+critical+path+method+gantt' },
      ],
    },
    5: {
      description: `Projede harcanacak adam/saat (Efor) maliyetlerinin, donanım (Sunucu/Bulut) giderlerinin ve risk yedeklerinin hesaplanarak (Cost Estimation) proje bütçesinin oluşturulması öğrenilir. Kazanılmış Değer Yönetimi (Earned Value Management - EVM) metrikleri sayesinde, "Projenin %50'si bitti ama bütçenin %70'ini harcadık, nerede hata var?" analizinin matematiksel (SPI, CPI formülleri) olarak yapılması öğretilir. Bulut bilişimde (AWS/Azure) kod yazarken bir arka uç (Backend) geliştiricinin yazdığı verimsiz bir döngünün sunucu maliyetini nasıl astronomik olarak artıracağı vizyonuyla, yazılımın finansal boyutu birleştirilir. Kaynakların (para) sadece kodun çalışması için değil, projenin şirkete kâr getirmesi (ROI) için yönetilmesi gerektiği aşılanır. Mühendisliğin finansal zekayla harmanlandığı karar alma aşamasıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_cost_management.htm' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+maliyet+y%C3%B6netimi+earned+value+management' },
      ],
    },
    6: {
      description: `Geliştirilen yazılımın, baştan belirlenen fonksiyonel ve güvenlik standartlarını (Örn: ISO/IEC 25010) karşılamasını güvence altına alan Kalite Yönetim (QA) süreçleri işlenir. Kalitenin test (Testing) aşamasında ürüne sonradan katılamayacağı, daha tasarım ve kodlama aşamasında (Code Reviews, CI/CD) sürekli kontrolle "önlenmesi" (Prevention over Inspection) gerektiği felsefesi oturtulur. Pareto Şeması (80/20 kuralı) veya Ishikawa (Kılçık) diyagramları kullanılarak, sistemde ortaya çıkan yazılım hatalarının (Bugs) kök nedenlerinin (Root Cause Analysis) sistematik bir şekilde nasıl bulunup yok edileceği incelenir. Müşteriye hatalı bir yazılım teslim edildikten sonra çıkacak imaj kaybı ve onarım maliyetlerinin, test sürecindeki efordan yüzlerce kat daha pahalı (Cost of Poor Quality) olduğu ispatlanır. Kaliteyi bir lüks değil, mühendislik standardı yapma sürecidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_quality_management.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+kalite+y%C3%B6netimi+qa+ve+qc+fark%C4%B1' },
      ],
    },
    7: {
      description: `Projede çalışacak donanım, ağ ve yazılım ekiplerinin rolleri, yetkinlik matrisleri ve takım dinamiklerinin (Tuckman merdiveni: Forming, Storming, Norming, Performing) yönetimi incelenir. Sadece iyi kod bilen (Hard skills) değil, iletişim kurabilen, egoları bir kenara bırakıp ortak kod sahipliği (Collective Ownership) sergileyebilen (Soft skills) bir yazılım takımı kurmanın zorlukları psikolojik açıdan tartışılır. Çevik (Agile) takımlarda hiyerarşik bir "Patron" (Command and Control) yerine, takımın önündeki engelleri kaldıran "Hizmetkar Lider" (Servant Leader / Scrum Master) kavramının motivasyonu (Maslow, McGregor teorileri) nasıl yükselttiği görülür. Teknik krizlerden çok, takım içi çatışmaların (Conflict Resolution) yazılım projelerini nasıl batırdığına dair vaka analizleri yapılır. En karmaşık sistem olan "İnsanı" optimize etme sanatı öğrenilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_human_resource_management.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+insan+kaynaklar%C4%B1+y%C3%B6netimi+ve+tak%C4%B1m+dinamikleri' },
      ],
    },
    8: {
      description: `Proje paydaşlarına (Stakeholders) doğru bilginin, doğru zamanda ve formatta iletilmesi (İletişim) ile gelecekteki olası felaketlerin önceden planlanması (Risk Yönetimi) birleştirilerek işlenir. Sunucu çökmesi, veri sızıntısı (Data Breach) veya ana geliştiricinin işten ayrılması gibi risklerin gerçekleşme olasılıkları ve etkileri (Risk Matrix) önceden puanlanarak azaltma/kaçınma planları (Mitigation) hazırlanır. Yazılımın teknik detaylarını bilmeyen bir yatırımcıya veya CEO'ya projenin gidişatını (Status Report) sıkıcı olmadan ama gerçekleri gizlemeden anlatabilme (Executive Summary) iletişim teknikleri pratik edilir. "Sorun çıkınca bakarız" (Reaktif) kültüründen, "Sorun çıkma ihtimaline karşı B planımız var" (Proaktif) vizyonuna geçiş yapılır. Başarısızlık ihtimallerini yöneterek projeyi sarsılmaz kılan zırhın örülmesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_risk_management.htm' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+risk+y%C3%B6netimi+risk+matrisi+ileti%C5%9Fim+plan%C4%B1' },
      ],
    },
    9: {
      description: `Proje yönetiminin bilgi alanları olan Kapsam, Zaman, Maliyet, Kalite ve Risk süreçlerinin uluslararası metodolojilere (PMBOK / Agile) göre teorik ve senaryo bazlı sınandığı akademik değerlendirmedir. Öğrencinin "Bana klavye verin, hemen kod yazayım" dürtüsünden sıyrılıp, planlamanın ve belgelendirmenin projenin %80 başarı kriteri olduğunu (Pareto) ne ölçüde içselleştirdiği test edilir. Gerçek dünyada bir IT projesinde yaşanabilecek kapsam kayması (Scope Creep) veya bütçe aşımı gibi kriz anlarında analitik bir lider gibi karar (Decision Making) verip veremeyeceği ölçümlenir. Ekip ve kapanış süreçlerine, proje sunumlarına geçmeden önce liderlik ve yöneticilik vizyonunun kalite kontrolüdür. Kod değil, iş ve süreç yönetimi bilgisi kanıtlanır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Yazılım projesi için dışarıdan alınacak bulut hizmetleri (AWS/Azure), dış kaynak (Outsourcing/Freelance) hizmetleri veya hazır API'lerin sözleşme tipleri (Sabit fiyat, Zaman/Malzeme) ve Tedarik Yönetimi işlenir. Taahhüt edilen tüm yazılım testleri geçip ürün canlıya (Production) alındıktan sonra, projenin sadece "bitti" denilerek bırakılamayacağı, resmi kapanış belgelerinin (Sign-off) imzalanması gerektiği öğretilir. Tüm süreç boyunca yapılan hatalardan ve doğrulardan çıkarılan "Alınan Dersler" (Lessons Learned / Retrospective) kayıtlarının şirket hafızasına eklenerek kurumsal bilginin (Organizational Process Assets) nasıl artırıldığı tartışılır. Bir işi eksiksiz, yasal ve kurumsal prosedürlere uygun şekilde tamamlayıp devretme (Handover) bilinci kazandırılır. Başarılı bir yolculuğun resmi ve idari son noktasıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/pmp-exams/pmp_project_procurement_management.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=proje+tedarik+y%C3%B6netimi+ve+proje+kapan%C4%B1%C5%9F%C4%B1' },
      ],
    },
    11: {
      description: `Dönem boyunca öğrenilen Zaman, Kapsam, Risk ve Çevik/Geleneksel planlama araçlarının (Jira, MS Project vb.) kullanılarak hazırlanan gerçek bir IT projesi simülasyonunun yatırımcı (Jüri) karşısına çıkarıldığı sunum aşamasıdır. Ekiplerin (veya bireylerin) bir yazılım girişimini (Örn: Yerli bir IoT Akıllı Tarım sistemi) kodlamasından ziyade, "Bu ürün 6 ayda, 5 yazılımcıyla, 500 bin TL bütçeyle, şu riskler alınarak nasıl piyasaya sürülecek?" sorusuna profesyonel savunmalar (Pitching) yapmaları beklenir. Maliyet tahminlemelerindeki hataların veya iş kırılım ağacındaki (WBS) eksikliklerin jüri tarafından sorgulanarak (Stress Test) öğrencilerin baskı altında savunma yapma ve müzakere yetenekleri ölçülür. Mühendislik bilgisinin yönetimsel (Managerial) formatta ambalajlanmasıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.pmi.org/learning/library' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=it+project+management+presentation+examples' },
      ],
    },
    12: {
      description: `(Proje sunumlarına devam) Öğrencilerin sadece kendi projelerini savunmakla kalmayıp, diğer grupların projelerindeki mantıksal (Örn: Sunucu altyapısı bütçesi çok düşük yazılmış) ve yönetsel tutarsızlıkları bularak analitik bir Proje Denetmeni (Auditor) gibi eleştirmeleri hedeflenir. Çevik (Agile) yönetim kullanan gruplar ile Şelale (Waterfall) kullanan grupların süreç esneklikleri kıyaslanarak, hangi metodolojinin senaryoya ne kadar uygun uyumlandığı tartışılır. Dinleyicilerle (Müşteri/Yatırımcı rolü) kurulan göz teması, profesyonel üslup (Presentation Skills) ve teknik jargonu basitleştirerek (Executive level communication) aktarabilme yetenekleri notlandırılır. İş dünyasındaki rekabetçi ve ikna odaklı toplantı odalarının gerçekçi bir provasıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/management_concepts/project_management_tools.htm' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+present+a+project+proposal+effectively' },
      ],
    },
    13: {
      description: `(Proje sunumlarına devam) Risk analizi ve kalite güvence (QA) planlarına ağırlık verilen projelerde, olası felaket senaryoları karşısında (Örn: Veri tabanı hacklenmesi veya kilit personelin ayrılması) takımların B planlarının inandırıcılığı ölçülür. Yazılımın sadece üretilip canlıya (Deploy) alınması değil, sonrasındaki 1 yıllık bakım (Maintenance) ve sunucu masraflarının (Opex) toplam sahip olma maliyetine (TCO) doğru eklenip eklenmediği sorgulanır. Bir mühendisin hayal gücüyle ürettiği parlak bir kod fikrinin, kurumsal dünyanın ticari, yasal ve zamansal gerçeklik duvarlarına çarpıp şekillenmesi (Grooming) süreci deneyimlenir. Vizyoner kodlama ile acımasız bütçe yönetiminin ortak paydaya getirilmesidir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.pmi.org/learning/library/project-management-presentations-communication-6598' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=project+risk+management+presentation+and+mitigation' },
      ],
    },
    14: {
      description: `Tüm projelerin dinlenmesinin ardından, ekiplerin birbirlerinden öğrendikleri yönetimsel zafiyetler ve en iyi pratiklerin (Best Practices) "Alınan Dersler" (Lessons Learned) vizyonuyla özetlenerek dönemin kapanışının yapıldığı haftadır. Öğrencilerin sadece "Verilen işi yapan (Coder)" seviyesinden çıkıp, "Kendi girişimini (Startup) kurabilen, ekibini yöneten ve bütçesini savunan bir Teknoloji Lideri (Tech Lead / CTO)" profiline geçiş yapmaları hedeflenir. İster bir savunma sanayi şirketinde büyük bir modülü yönetin, ister kendi oyun stüdyonuzu kurun; insan, zaman ve parayı senkronize edemeyen hiçbir deha fikrin ürüne dönüşemeyeceği felsefesiyle mezuniyete uğurlanırlar. Mühendislik zekasını yönetici vizyonuyla taçlandıran büyük finaldir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.scrum.org/resources/what-is-a-sprint-retrospective' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=project+closure+and+lessons+learned+project+management' },
      ],
    },
  },
  'BMSB436 Python Programlamaya Giriş': {
    1: {
      description: `Dünyanın en popüler, okunabilirliği en yüksek ve yapay zekadan arka uç (Backend) sistemlere kadar her alanda domine eden Python dilinin felsefesiyle ve çalışma ortamıyla (IDLE/Jupyter/VS Code) tanışılır. Derlemeli dillerin (C/C++) aksine, kodun satır satır anında çalıştırıldığı yorumlamalı (Interpreter) yapısı ve girintileme (Indentation) kurallarıyla sağlanan o temiz sözdizimi (Clean Syntax) incelenir. İleride makine öğrenmesi modelleri veya ağ otomasyon botları yazarken ihtiyaç duyacağınız dinamik ve esnek (Dynamically Typed) programlama kültürüne giriş yapılır. Kodların süslü parantezlerden kurtulup adeta İngilizce bir metin okurcasına akıcı hale gelmesinin arkasındaki tasarım zekası (Zen of Python) kavranır. Yazılıma hızlı, güçlü ve evrensel bir dille "Merhaba Dünya" deme aşamasıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/index.html' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+dersleri+giri%C5%9F+kurulum+ve+temel+kavramlar' },
      ],
    },
    2: {
      description: `Python'ın arka planda her şeyi birer "Nesne" (Object) olarak gördüğü esnek bellek modeli (Memory Allocation) ve dinamik değişken atama kuralları işlenir. C gibi dillerde yaşanan veri tipi (int, float) uyuşmazlıklarının aksine, değişkenlerin anında şekil değiştirebilmesinin (Duck Typing) getirdiği geliştirme hızı ve dikkat edilmezse yaratacağı hatalar (Type Errors) analiz edilir. Aritmetik, mantıksal ve üyelik (in/not in) operatörleriyle, veri bilimi ve backend süreçlerinde algoritmik hesaplamaların en yalın şekilde koda dökülmesi sağlanır. Büyük veri (Big Data) işlerken hafızanın nasıl otonom temizlendiği (Garbage Collection) ve bellek sızıntılarının (Memory Leak) dil tarafından nasıl önlendiği tartışılır. Veriyi Python felsefesiyle özgürce ama kurallı bir şekilde manipüle etme sanatıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/python/python_datatypes.asp' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+de%C4%9Fi%C5%9Fkenler+veri+tipleri+ve+operat%C3%B6rler' },
      ],
    },
    3: {
      description: `Kullanıcıyla etkileşime girmek için kullanılan \`input()\` ile veri alma ve ekran çıktılarını formatlayarak (f-strings, \`.format()\`) \`print()\` ile basma pratikleri yapılır. İleride konsol tabanlı Linux sistem yönetimi araçları veya ağ tarayıcı scriptleri yazarken, sistemden alınan metinlerin düzgün (parse edilmiş) ve anlaşılır şekilde kullanıcıya sunulması (UI) bu temellere dayanır. Dışarıdan girilen verinin her zaman metin (String) olarak algılandığı gerçeğiyle yüzleşip, anlık tip dönüşümü (Type Casting - int(), float()) yaparak sistemin çökmesini engelleme (Defansif kodlama) kültürü aşılanır. Uygulamanızın dış dünya ile kurduğu ilk interaktif köprülerin (I/O) doğru ve güvenli iletişim formatında atılmasıdır. Kullanıcının klavyesiyle yazılımın hafızasını konuşturmaktır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/python/python_user_input.asp' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+input+print+ve+formatlama+f+string' },
      ],
    },
    4: {
      description: `Aynı anda birden fazla ve farklı türdeki veriyi esnek bir şekilde barındıran Listeler (Lists) ve değişmez yapıdaki Demetler (Tuples) öğrenilir. Makine öğrenmesindeki veri dizinlerini (Arrays) veya API'lerden gelen JSON verilerini bellekte tutmak için listelerin \`append\`, \`pop\`, \`sort\` gibi yerleşik (Built-in) fonksiyonlarının arkasındaki performans (Big-O) dinamikleri incelenir. "List Comprehension" (Liste Üreteçleri) gibi Python'a özgü muazzam yapıcılıkla, 5 satırlık for döngüsünü tek bir okunabilir matematiksel satıra indirgeyerek yazılım optimizasyonu yapma sanatına (Pythonic Code) geçiş yapılır. Bellekteki veriler üzerinde dilimleme (Slicing) yaparak devasa bir veri okyanusundan sadece istenilen spesifik parçayı çekip çıkarma vizyonu katar. Veri yığınlarını organize etmenin ve zarifçe yönetmenin çekirdek yeteneğidir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/datastructures.html' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+liste+metotlar%C4%B1+ve+list+comprehension' },
      ],
    },
    5: {
      description: `Python'ın en büyük güçlerinden biri olan metin (String) manipülasyonu ve string indeksleme metodolojileri (split, replace, join, strip) detaylıca işlenir. Doğal Dil İşleme (NLP), log analizleri ve veri kazıma (Web Scraping) projelerinin kalbi olan metin içeriklerinden istenmeyen boşlukları silme, kelimeleri ayrıştırma ve büyük/küçük harf normalizasyonları pratik edilir. Bir backend sistemine (Örn: Django veya FastAPI) gelen kullanıcı sorgularındaki (Requests) zararlı kelimeleri veya şifre boşluklarını saniyeler içinde temizleme (Sanitization) vizyonu sunar. Düz metnin aslında değiştirilemez (Immutable) bir karakter dizisi olduğu gerçeğiyle belleğin metinleri nasıl sakladığı (Memory Address) ispatlanır. İnternet dünyasının %80'ini oluşturan düzensiz veriye (Unstructured Text) hükmetmenin kılıcıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/python/python_strings_methods.asp' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+string+metotlar%C4%B1+ve+metin+i%C5%9Fleme' },
      ],
    },
    6: {
      description: `Spagetti koda dönüşmeden büyük yazılım mimarileri kurmayı sağlayan fonksiyon (def) yapıları ve kodu parçalara ayıran Modül/Paket (import) mimarisi öğrenilir. DRY (Don't Repeat Yourself - Kendini Tekrar Etme) prensibiyle yazılan fonksiyonların ayrı \`.py\` dosyalarında modülleştirilip, başka projelerde çağrılarak (Code Reusability) nasıl birer kütüphaneye dönüştürüldüğü gösterilir. PIP (Python Package Installer) ve sanal ortam (Virtual Environment) kullanımına giriş yapılarak, küresel Python topluluğunun yazdığı yüz binlerce hazır kodun sistem bağımlılıklarını bozmadan projeye nasıl dahil edileceği (Dependency Management) işlenir. Tek bir dosyadan çıkıp, klasörlerce modülün birbiriyle konuştuğu kurumsal yazılım (Software Architecture) yapısına geçiştir. Modern yazılımın legolar gibi birleştirilerek inşa edilmesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/modules.html' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+fonksiyonlar+mod%C3%BCller+ve+pip+kullan%C4%B1m%C4%B1' },
      ],
    },
    7: {
      description: `Programın çalışma zamanında (Runtime) çökmesini engelleyen \`try-except-finally\` bloklarıyla modern Hata Yakalama (Exception Handling) mimarisi incelenir. İnternetten veri çekerken kopan bir ağ bağlantısının veya yanlış tipteki bir kullanıcı girişinin (Örn: ValueError) yazılımı öldürmeden otonom bir şekilde (Log tutarak veya tekrar deneyerek) nasıl idare edileceği kurgulanır. Geliştirdiğiniz API servislerinde sistemsel hataların müşteriye anlamsız kırmızı yazılar olarak değil, planlanmış kibar JSON hata mesajları olarak (Graceful Degradation) dönmesi gerektiği bilinci aşılanır. Kodun mutlu senaryosundan (Happy Path) çıkıp, "En kötü ne olabilir?" (Edge Cases) diyerek defansif programlama (Defensive Programming) yapan zırhlı bir mühendis olmanın gerekliliğidir. Yazılımın ayakta kalma ve kırılmazlık refleksidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/errors.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+try+except+hata+yakalama+ve+y%C3%B6netimi' },
      ],
    },
    8: {
      description: `Python'ın temel sözdizimi, veri tipleri, liste/string manipülasyonları, modüler yapıları ve hata yönetimi konularının algoritmik olarak kağıt/bilgisayar üzerinde sınandığı değerlendirmedir. Öğrencinin Python dilini sadece ezbere fonksiyon çağırmak için değil, "Pythonic" (Kısa, zarif ve optimum) bir mantıkla kullanıp kullanamadığı (Örn: Döngü yerine List Comprehension kullanması) ölçülür. Değişken kapsama alanları (Scope), referans kopyalama ve değer atama hatalarını tespit ederek arka plandaki bellek çalışma mantığı test edilir. Veritabanı ve Nesne Yönelimli Programlama (OOP) gibi ağır ve ileri düzey konulara geçmeden önce, dilin sintaks bariyerinin tamamen aşıldığının akademik onayıdır. Algoritmaların piton kıvraklığıyla (esneklikle) kodlanıp kodlanmadığının kalite kontrolüdür.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `(Ara Sınav Dönemi - Değerlendirme ve Geri Bildirim) Yazılı ve pratik sınavlarda yapılan mantıksal hataların (Logic Errors) ve en çok zorlanılan kavramların (Örneğin mutable/immutable nesne farkları) sınıfça çözümlenerek refactor edildiği (yeniden düzenlendiği) telafi haftasıdır. Kod parçacıklarının daha kısa, daha okunabilir veya daha hızlı çalışacak şekilde nasıl optimize edileceği üzerinden Pythonic en iyi pratikler (Best Practices) tekrar hatırlatılır. İlerideki veri çekme ve sınıf tasarımlarına hazırlık olarak, fonksiyonların modüler yapısındaki bağımlılık (Coupling) sorunları incelenerek kurumsal kod yazma bilinci pekiştirilir. Eksik tuğlaların sağlamlaştırılması ve ileri düzey konulara zihinsel hazırlıktır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Kodları izole veri ve fonksiyon paketleri haline getiren Nesne Yönelimli Programlama (OOP) vizyonu ve Python'daki Sınıf (Class) mimarisi işlenir. Kurucu (Constructor - \`__init__\`), kapsülleme (Encapsulation), miras alma (Inheritance) ve özel dunder (Double Underscore - \`__str__\`, \`__len__\`) metotlarıyla Python'ın nesne modelinin arka plan sırları çözümlenir. İleride yazacağınız bir yapay zeka modelini veya IoT cihaz yönetim yazılımını, karmaşık fonksiyon yığınları yerine "Cihaz", "Kullanıcı" gibi birbiriyle konuşan nesneler olarak (Entity) modellemenin mimari üstünlüğü tartışılır. Python'ın esnek yapısının OOP ile birleşerek nasıl devasa ve sürdürülebilir (Maintainable) çerçevelere (Örn: Django) zemin hazırladığı kavratılır. Yazılımcılıktan, kendi dünyasının tanrısı olan sistem mimarlığına geçiş evresidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/classes.html' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+nesne+y%C3%B6nelimli+programlama+oop+s%C4%B1n%C4%B1flar' },
      ],
    },
    11: {
      description: `Yazılım kapandığında RAM'den silinen geçici verilerin (Variables) diskte kalıcı hale (Persistence) getirilmesi için Text, CSV ve JSON dosyaları okuma/yazma (File I/O) işlemleri kurgulanır. Python'ın Context Manager (\`with open()\`) özelliği kullanılarak, dosyalarla iş bittiğinde bellek sızıntısını ve kilitlenmeleri önlemek için arka planda otomatik kapatılma (Close) güvenliği sağlanır. Makine öğrenmesinden web mimarisine kadar veri iletişiminin evrensel standardı olan JSON formatını okuyup Parse etme (Ayrıştırma) ve Python sözlüklerine (Dictionaries) haritalama pratiği yapılır. Log (Kayıt) sistemleri yazılarak uygulamanın geçmişte yaşadığı hataların diske nasıl zaman damgasıyla yazdırıldığı görülür. Sistemin hafıza kaybını önleyen kalıcı (Disk-based) depolama mimarisidir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+dosya+i%C5%9Flemleri+txt+csv+json+okuma+yazma' },
      ],
    },
    12: {
      description: `Dosya sistemlerinden çıkarak, verinin güvenli ve ilişkisel saklandığı Veritabanı (Database) dünyasına \`sqlite3\` veya \`psycopg2\` kütüphaneleriyle bağlantı (Connection) kurma işlemleri öğrenilir. Python üzerinden doğrudan SQL komutları göndererek Tablo oluşturma (CREATE), veri ekleme (INSERT), okuma (SELECT) gibi temel CRUD işlemleri nesne yönelimli sınıflar üzerinden kodlanır. Formlardan alınan (Girdiler) verilerin doğrudan SQL içine gömülmesiyle oluşan "SQL Injection" güvenlik zafiyeti tartışılarak, parametrik sorgu (Parameterized Queries) kullanmanın kurumsal zorunluluğu aşılanır. Yazılımın (Backend) veri depolama katmanıyla (Database) entegre edilerek gerçek dünya (Enterprise) mimarisinin ilk çalışan tam sürümü (Full-stack altyapısı) ayağa kaldırılır. Verinin sistemli ve güvenli bir hafızaya gömülme sanatıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/library/sqlite3.html' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+sqlite3+veritaban%C4%B1+crud+i%C5%9Flemleri' },
      ],
    },
    13: {
      description: `Python'ı dünyanın en güçlü dili yapan muazzam standart kütüphaneler (Standard Library) ve dış modüllerle tanışılarak veri çekme ve işletim sistemi operasyonları yapılır. \`os\`, \`sys\`, ve \`datetime\` kütüphaneleriyle doğrudan işletim sistemi komutları çalıştırarak (Scripting/Automation) klasörler, yollar ve zaman birimleri otonom olarak yönetilir. İnternet dünyasından veri koparmak için \`requests\` modülü ile HTTP GET/POST istekleri atılarak açık kaynaklı bir API'den (Örn: Hava durumu veya Döviz verisi) canlı JSON verisi çekme (API Consumption) projesi gerçekleştirilir. Kendi dünyasına kapalı bir yazılımdan çıkarak, küresel web ağıyla saniyeler içinde haberleşen bulut (Cloud) tabanlı scriptler (Betikler) yazma vizyonu kazanılır. Uygulamayı internetin sonsuz verisine bağlama köprüsüdür.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://docs.python.org/3/library/index.html' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+requests+api+kullan%C4%B1m%C4%B1+json+veri+%C3%A7ekme' },
      ],
    },
    14: {
      description: `Dönemin kapanışında, akademik veya veri bilimci (Data Scientist) kariyeri hedefleyenler için Python'ın veri canavarları olan NumPy ve Pandas kütüphanelerine (veya düzenli ifadeler - \`re\`) genel bir bakış atılır. Matematiksel matrisleri for döngülerine gerek kalmadan C hızında (Vektörizasyon) işleyen NumPy'ın gücü ve devasa tabloları SQL gibi filtreleyen Pandas'ın (Dataframe) temel mantığı gösterilir. Bir bilgisayar mühendisi olarak Python'ın sadece bir script dili olmadığı; arka uç (Django/FastAPI), otomasyon, veri bilimi ve yapay zeka gibi sınırsız ekosistemlerde kariyerinizi nasıl şekillendireceğiniz projelendirilerek dönem noktalanır. Ham kodu, küresel endüstriyi yönlendiren devasa bir ekosistemin parçası haline getiren ufuk turu ile final yapılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://pandas.pydata.org/docs/getting_started/index.html' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=python+pandas+ve+numpy+k%C3%BCt%C3%BCphanesi+giri%C5%9F' },
      ],
    },
  },
  'ATİ101 Atatürk İlkeleri ve İnkılâp Tarihi I': {
    1: {
      description: `Avrupa'da yaşanan aydınlanma ve sanayi devriminin teknolojik ve sosyolojik altyapıları analiz edilir. Bir bilgisayar mühendisi olarak, Osmanlı İmparatorluğu'nun bu donanım ve sanayi devrimini neden kaçırdığını anlamak vizyonunuzu genişletir. Toplumların bilimden uzaklaştıkça sistemlerinin nasıl çöktüğü (system failure) mühendislik perspektifiyle değerlendirilir. Günümüz bilişim devrimini (Endüstri 4.0) yakalamak için tarihsel hatalardan ders çıkarma bilinci aşılanır. İnovasyona ve güncellemeye kapalı sistemlerin er ya da geç yok olacağı gerçeğiyle yüzleşilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://dergipark.org.tr/tr/search?q=aydinlanma+ve+sanayi+devrimi' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bat%C4%B1da+ayd%C4%B1nlanma+ve+sanayi+devrimi' },
      ],
    },
    2: {
      description: `Çökmekte olan imparatorluk sistemini yamalarla (geçici reformlarla) ayakta tutmaya çalışan yenilik hareketleri incelenir. Altyapısı (donanımı) eskimiş bir devlete, sadece dışarıdan yeni kurumlar (yazılımlar) ekleyerek sistemin kurtarılamayacağı analitik olarak görülür. Batıcılık, Türkçülük ve İslamcılık gibi farklı ideolojik paradigmaların devleti kurtarma algoritmaları tartışılır. Kriz anlarında eskiyen kodları (kurumları) refactor etmek yerine tamamen sıfırdan yazmanın gerekebileceği mühendislik vizyonuyla aktarılır. Köklü sistem değişikliklerinin sancılı ama zorunlu doğası kavranır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://islamansiklopedisi.org.tr/osmanli-imparatorlugu' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osmanl%C4%B1+modernle%C5%9Fme+hareketleri' },
      ],
    },
    3: {
      description: `Sanayileşen ülkelerin hammadde ve pazar arayışının tetiklediği küresel bloklaşma (network gruplaşmaları) analiz edilir. Teknoloji üreten ve üretemeyen ülkeler arasındaki devasa güç uçurumunun, dünya savaşının ana nedeni olduğu gerçeğiyle yüzleşilir. Diplomasi trafiğinin ve gizli antlaşmaların devletler arası iletişim protokollerini nasıl kilitlediği tartışılır. Osmanlı'nın bu küresel tehdit (threat) ortamında sistemini nasıl korumaya çalıştığı incelenir. Büyük krizler öncesi risk analizi (risk management) yapmanın önemi vurgulanır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=birinci+d%C3%BCnya+sava%C5%9F%C4%B1+nedenleri+ve+blokla%C5%9Fma' },
      ],
    },
    4: {
      description: `Teknolojinin, mekanize birliklerin ve telgraf gibi iletişim ağlarının ilk defa küresel ölçekte bir savaşın kaderini belirlediği dönem incelenir. İletişim hatlarının ve lojistik (resource management) ağlarının çökmesiyle Osmanlı ordularının yaşadığı darboğazlar tartışılır. Mondros Mütarekesi ile ülkenin tüm donanım ve iletişim altyapısına el konulması (sistemin hacklenmesi) süreci anlatılır. Merkezi otoritenin çöküşüyle birlikte sistemin tamamen çevrimdışı (offline) kaldığı karanlık bir dönemdir. Kriz anlarında ulusal savunma sistemlerinin ne kadar kırılgan olabileceği görülür.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/I._D%C3%BCnya_Sava%C5%9F%C4%B1' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=osmanl%C4%B1+imparatorlu%C4%9Fu+birinci+d%C3%BCnya+sava%C5%9F%C4%B1+cepheler' },
      ],
    },
    5: {
      description: `Merkezi sunucunun (İstanbul Hükümeti) işlevini yitirmesiyle, Anadolu'da dağıtık (decentralized) direniş ağlarının (Yararlı Cemiyetler) nasıl kurulduğu öğrenilir. Aynı anda sisteme virüs gibi sızarak çöküşü hızlandırmaya çalışan Zararlı Cemiyetlerin faaliyetleri analiz edilir. Paris Konferansı'nda emperyalist devletlerin masada haritaları (veritabanını) kendi çıkarlarına göre nasıl yeniden yazdığı tartışılır. Lokal (yerel) direniş düğümlerinin (nodes), çöken bir sistemi ayakta tutma çabası mühendislik gözüyle incelenir. Otonom ve bağımsız savunma mekanizmalarının doğuşudur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yararl%C4%B1+ve+zararl%C4%B1+cemiyetler+mondros' },
      ],
    },
    6: {
      description: `Anadolu'daki dağınık ve bağımsız direniş ağlarının (cemiyetlerin) tek bir ortak protokol (Sivas Kongresi) etrafında birleştirilmesi sürecidir. Amasya Genelgesi ile kurtuluşun algoritması yazılmış, yöntemi ve amacı açıkça belgelendirilmiştir (System Requirements). Erzurum Kongresi ile doğudaki yerel modüller entegre edilmiş, Sivas'ta ise tüm ulusal modüller tek bir çatı altında (Anadolu ve Rumeli Müdafaa-i Hukuk) toplanmıştır. Çöken merkezi otoriteye alternatif, yepyeni ve güvenli bir işletim sisteminin (Milli İrade) temelleri atılır. Organizasyon ve entegrasyon yeteneğinin tarihi zirvesidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=amasya+genelgesi+erzurum+ve+sivas+kongreleri' },
      ],
    },
    7: {
      description: `Kurulan yeni direniş ağının, eski sistem (İstanbul) tarafından hukuki olarak tanınma (authentication) çabaları olan Amasya Görüşmeleri incelenir. Son Mebusan Meclisi'nin toplanarak ulusal sınırları ve bağımsızlık şartlarını içeren Misak-ı Milli'yi (Milli Yemin) onaylaması, projenin kapsam sınırlarını (Scope Definition) kesin olarak çizer. Bu belge, emperyalist devletlere karşı çekilen sarsılmaz bir güvenlik duvarı (Firewall) niteliğindedir. İşgalcilerin meclisi basarak sistemi zorla kapatması (Force Quit) ile yasal zemin tamamen Ankara'ya kayar. Kararlılığın resmi ve hukuki koda dökülmesidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=misaki+milli+ve+amasya+g%C3%B6r%C3%BC%C5%9Fmeleri' },
      ],
    },
    8: {
      description: `Eski sistemin fiilen çökmesiyle, Ankara'da ulusal egemenliğe dayalı yepyeni bir meclisin (TBMM) yeni bir devletin ana sunucusu olarak devreye alınmasıdır. Aynı süreçte işgalcilerin dayattığı, ülkeyi parçalayan Sevr Antlaşması'nın (hukuki bir virüs) Ankara tarafından kesin olarak reddedilmesi incelenir. Londra Konferansı'nda TBMM'nin diplomatik olarak varlığını dünyaya kabul ettirme (handshake) girişimleri analiz edilir. Bir bilgisayar mühendisi olarak sıfırdan güvenilir ve bağımsız bir mimari kurmanın tarihi yansıması gözlemlenir. Yasal, askeri ve idari kodların tamamen millileştirilmesidir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=tbmm+a%C3%A7%C4%B1l%C4%B1%C5%9F%C4%B1+ve+sevr+antla%C5%9Fmas%C4%B1' },
      ],
    },
    9: {
      description: `Osmanlı İmparatorluğu'nun çöküşünden başlayıp TBMM'nin açılmasına kadar uzanan kriz ve yeniden yapılanma süreçlerinin analitik olarak değerlendirildiği ara haftadır. Öğrencilerin, ulusal sistemin hangi darboğazlardan (bottlenecks) geçerek bağımsızlık refleksini geliştirdiğini kavrama düzeyi test edilir. Tarihsel olaylar sadece kronolojik değil, neden-sonuç (Cause and Effect) algoritmalarıyla analiz edilme becerisi üzerinden puanlanır. Askeri zaferler ve diplomasi trafiğine geçilmeden önce temel altyapının sağlamlık onayı verilir. Mühendis adaylarının tarihsel kriz yönetimi vizyonu ölçülür.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `Kurulan yeni devletin sınır güvenliğini sağlamak için uluslararası arenada komşularıyla imzaladığı doğu ve güney güvenlik protokolleridir. Gümrü Antlaşması ile yeni devletin ilk uluslararası resmi bağlantısı (Connection Established) başarıyla sağlanmıştır. Moskova ve Ankara Antlaşmaları sayesinde, büyük küresel ağdaki (Dünya siyaseti) güçlü aktörlerle (SSCB ve Fransa) karşılıklı tanınma ve müttefiklik algoritmaları kurgulanır. Bu sayede tüm donanım ve insan kaynağı sadece en tehlikeli cepheye (Batı Cephesi) kaydırılarak kaynak optimizasyonu yapılır. Diplomasiyi kullanarak askeri yükü hafifletme sanatıdır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=g%C3%BCmr%C3%BC+moskova+ankara+antla%C5%9Fmalar%C4%B1' },
      ],
    },
    11: {
      description: `Yeni kurulan düzenli ordunun (optimize edilmiş yeni sistem) sahada verdiği ilk büyük savunma testleri (İnönü Savaşları) incelenir. Sakarya Savaşı öncesi ordunun tüm ihtiyaçlarını karşılamak için çıkarılan Tekalif-i Milliye kararları, mükemmel bir lojistik ve kaynak yönetimi (Resource Allocation) şaheseridir. Kıt kaynaklarla, sayıca üstün düşmana karşı cephe optimizasyonları yapılarak "Hattı müdafaa yoktur, sathı müdafaa vardır" algoritması sahaya sürülür. Sistemin çökme noktasına geldiği anlarda, yenilikçi taktiklerle hayatta kalma ve sistemi savunma direncidir. Taktiksel zekanın sayısal üstünlüğü yendiği kırılma noktasıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://tr.wikipedia.org/wiki/T%C3%BCrk_Kurtulu%C5%9F_Sava%C5%9F%C4%B1' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sakarya+meydan+muharebesi+ve+tekalifi+milliye' },
      ],
    },
    12: {
      description: `Savunmadan taarruza geçilerek, düşman unsurların sistemden tamamen ve kesin olarak temizlendiği (System Wiped) Büyük Taarruz süreci öğrenilir. Gizlilik içinde hazırlanan planların, kusursuz bir senkronizasyon ve hızla (Processing Speed) icra edilerek hedefe ulaşılması askeri bir mühendislik başarısıdır. Elde edilen kesin askeri zaferin ardından silahların susmasını sağlayan Mudanya Mütarekesi ile askeri kodlar yerini diplomatik metinlere bırakır. Bir projenin aylar süren planlama aşamasından sonra başarıyla canlıya alınması (Deployment) gibi, bağımsızlığın sahada tescillenmesidir. Operasyonel başarının diplomatik masaya taşınmasıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=b%C3%BCy%C3%BCk+taarruz+ve+mudanya+m%C3%BCtarekesi' },
      ],
    },
    13: {
      description: `Dönem boyunca işlenen bağımsızlık savaşının diplomatik ve askeri safhalarının, öğrencilerin analizleriyle sınıf ortamına sunulduğu haftadır. Öğrenciler, kısıtlı kaynaklarla kazanılan bu büyük başarıyı modern mühendislik, lojistik ve kriz yönetimi (Crisis Management) çerçevesinden yorumlayarak sunum yaparlar. Tarihsel olayları sadece ezberlemek değil, oradaki liderlik ve strateji yeteneklerini profesyonel hayata entegre etme pratikleri gerçekleştirilir. Topluluk önünde konuşma ve geçmişin verilerinden (Data) geleceğe dair çıkarımlar yapma becerisi güçlendirilir. Tarihin, mühendislik sunumlarına dönüştüğü interaktif bir aşamadır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    14: {
      description: `Askeri zaferin küresel masada diplomatik ve hukuki bir protokolle tescillenmesi, uluslararası sistemde yeni devletin "tanınma" (authentication) evresidir. Kapitülasyonların kaldırılarak ekonomik ve teknolojik gelişimin önündeki dış engellerin (firewalls) tamamen temizlenmesi müzakere edilir. Zorlu diplomatik süreçlerde sınır şartlarının korunması, yazılım projelerindeki lisanslama ve telif hakları savunmasına benzer bir sabır gerektirir. Yeni kurulan sistemin dünya ağlarına (Global Network) bağımsız, eşit ve onurlu bir düğüm (node) olarak kabul ettirilmesidir. Modern ve tam bağımsız Türkiye'nin kuruluş kodlarının onaylandığı nihai zaferdir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://atam.gov.tr/lozan-baris-antlasmasi/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=lozan+bar%C4%B1%C5%9F+antla%C5%9Fmas%C4%B1+ve+%C3%B6nemi' },
      ],
    },
  },
  'BMB205 Elektrik Devre Temelleri': {
    1: {
      description: `Bilgisayarların en alt seviyedeki fiziksel varlığını oluşturan yük, akım, gerilim ve güç gibi temel devre değişkenleri (Circuit Variables) öğrenilir. Yazdığınız kodların (0 ve 1'lerin), fiziksel dünyada aslında anakart üzerindeki anlık gerilim farkları (genellikle 0V ve 5V) olduğu bilinci oturtulur. Veri merkezlerinin veya yüksek performanslı işlemcilerin (CPU) tükettiği enerjiyi (Watt) analiz etmek için gerilim ve akım ilişkisi çok iyi bilinmelidir. Yazılımın donanım üzerinde ne kadar "ağır" çalıştığını anlamanın yolu, bu değişkenlerin hareketini kavramaktan geçer. Kodlamadan elektroniğe doğru atılan ilk sağlam köprüdür.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/dccircuits/dcp_1.html' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=elektrik+devre+temelleri+ak%C4%B1m+gerilim' },
      ],
    },
    2: {
      description: `Devreye enerji sağlayan bağımlı/bağımsız kaynaklar (Voltaj/Akım) ve enerjiyi tüketen/şekillendiren pasif elemanlar tanıtılır. Bilgisayarınızın güç kaynağının (PSU) alternatif akımı nasıl doğru akıma çevirdiği ve bileşenlere nasıl dağıttığı modellenir. Transistörler ve sensörler gibi bağımlı kaynakların, başka bir yerden gelen sinyalle (örneğin yazılımdan gelen bir komutla) enerjiyi nasıl kontrol ettiği incelenir. Donanım modüllerinin birbirleriyle elektriksel olarak nasıl konuştuğu ve enerji alışverişi yaptığı temel düzeyde anlaşılır. Gömülü sistem geliştiricileri için kullanılacak malzemelerin alfabesidir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.javatpoint.com/electrical-circuit-elements' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=elektrik+devre+elemanlar%C4%B1+ba%C4%9F%C4%B1ml%C4%B1+ba%C4%9F%C4%B1ms%C4%B1z+kaynaklar' },
      ],
    },
    3: {
      description: `Elektrik akımına zorluk gösteren dirençlerin seri/paralel bağlantıları, Ohm Yasası ve güç harcamaları (ısı yayılımı) incelenir. İşlemci çekirdeklerinin içindeki milyarlarca transistörün sahip olduğu mikroskobik dirençlerin bilgisayarı neden ısıttığı kanıtlanır. Sensörlerden gelen analog direnç değişimlerini, yazılımın okuyabileceği dijital voltaj verilerine dönüştürmenin (Voltaj Bölücü) matematiksel kuralları öğrenilir. Kod yazarken performans darboğazı yaratan işlemlerin, donanımda gereksiz güç tüketimi olarak karşınıza çıkacağı kavranır. Akımın donanım üzerindeki yolculuğu modellenir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/resistor/res_1.html' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=diren%C3%A7+devreleri+seri+paralel+ohm+yasas%C4%B1' },
      ],
    },
    4: {
      description: `Direnç devrelerinin daha kompleks topolojileri olan Yıldız-Üçgen (Wye-Delta) dönüşümleri ve köprü devreleri (Wheatstone Bridge) işlenir. Nesnelerin İnterneti (IoT) projelerinde hassas sensörler, analog veriyi okumak için Wheatstone köprüsü prensibini kullanır. Karmaşık ve içinden çıkılmaz gibi görünen bir devre mimarisini, eşdeğer ve daha basit bir modele (Refactoring) dönüştürme pratiği kazandırır. Sistem mühendisliğinde topolojinin sadece ağ (network) kablolarında değil, doğrudan donanım kartlarında (PCB) da önemli olduğu gösterilir. Yazılımın dış dünyadan en hassas verileri nasıl topladığının elektriksel tasarımıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.javatpoint.com/star-delta-transformation' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=y%C4%B1ld%C4%B1z+%C3%BC%C3%A7gen+d%C3%B6n%C3%BC%C5%9F%C3%BCm%C3%BC+ve+wheatstone+k%C3%B6pr%C3%BCs%C3%BC' },
      ],
    },
    5: {
      description: `Karmaşık ağları çözmek için Düğüm Gerilimleri (Node Voltage) yöntemi ve Kirchhoff'un Akım Yasası (KCL) temelinde analizler yapılır. Bilgisayarın anakartı üzerindeki güç dağıtım hatlarındaki (Power Rails) voltaj stabilitesi düğüm denklemleri ile hesaplanır. Algoritmik düşünce yapısına çok benzer şekilde, lineer denklem sistemleri (Matrisler) kurularak bilgisayara bu devrelerin nasıl çözdürüleceği mantığı kavranır. Herhangi bir devredeki arızayı bulmak (debugging) için avometre ile nereyi ölçeceğinizi öğretir. Bilinmeyen değişkenleri sistematik bir yaklaşımla ortaya çıkarma sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/dccircuits/dcp_4.html' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=d%C3%BC%C4%9F%C3%BCm+gerilimleri+y%C3%B6ntemi+devre+analizi' },
      ],
    },
    6: {
      description: `Düğüm yönteminin alternatifi olan Çevre Akımları (Mesh Current) yöntemi ve Kirchhoff'un Gerilim Yasası (KVL) incelenir. İki boyutlu düzlemsel devrelerin analizinde, gözlü (loop) yapıların matrislere çevrilerek yazılımsal simülatörlere (SPICE programları) nasıl aktarıldığının algoritmasıdır. Paralel çalışan bilgisayar donanımlarının birbirlerinin akım kapasitelerini nasıl etkilediklerini anlamak için ağ analizleri yapılır. Bir devreyi hem akım hem de gerilim açısından iki farklı yaklaşımla çözebilme esnekliği kazandırır. Olası kısa devre senaryolarının tahribatlarını öngörmeyi sağlar.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.javatpoint.com/mesh-analysis' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=%C3%A7evre+ak%C4%B1mlar%C4%B1+y%C3%B6ntemi+mesh+analysis' },
      ],
    },
    7: {
      description: `Süperpozisyon, Thevenin ve Norton eşdeğer devre teoremleri ile karmaşık sistemlerin inanılmaz ölçüde basitleştirilmesi öğretilir. Koskoca bir bilgisayar anakartının, belirli bir USB portundan bakıldığında tek bir direnç ve voltaj kaynağına (Thevenin modeli) indirgenebilmesi vizyonunu sunar. Bu teoremler, modüler yazılım geliştirmede fonksiyonların içinin ne olduğuyla ilgilenmeyip sadece giriş/çıkış değerlerine odaklanmakla aynı mantıktır. Cihazlar arası veri aktarımında empedans optimizasyonu yapma becerisi kazandırılır. Mühendislere, kompleks bir kaosu sadeleştirme gücü verir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/dccircuits/dcp_7.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=thevenin+norton+ve+s%C3%BCperpozisyon+teoremleri' },
      ],
    },
    8: {
      description: `Kaynak Dönüşümü teoremleri ve maksimum güç transferi prensiplerinin sayısal analizleri ile doğrusal devre teknikleri tamamlanır. Özellikle batarya ile çalışan mobil cihazlarda işlemciye aktarılan gücün verimini maksimize etmek için uyumlama yapılması gerektiği anlaşılır. Sensörlerden gelen zayıf sinyallerin yükselteçlere en verimli şekilde nasıl aktarılacağının elektriksel altyapısıdır. Devre bileşenlerinin teorik limitleri gösterilerek, yazılım kodlarının talep edebileceği gücün üst sınırları çizilir. Ara sınav öncesi tüm DC (Doğru Akım) analiz yöntemlerinin entegrasyonudur.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/dccircuits/dcp_9.html' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=maksimum+g%C3%BC%C3%A7+transferi+teoremi' },
      ],
    },
    9: {
      description: `Analog bilgisayarların kalbi ve sinyal işlemenin en güçlü donanımı olan Op-Amp'ların (İşlemsel Kuvvetlendiriciler) ideal modelleri öğrenilir. İnsan sesini mikrofon üzerinden alıp, bilgisayarın ses kartındaki (ADC) çeviriciye ulaşmadan önce sinyali bozmadan büyütmek bu entegre devrelerle yapılır. Toplayıcı, çıkarıcı devreler, bilgisayarların 1 ve 0'lar olmadan önce analog voltajları toplayarak nasıl matematik yaptığını gösterir. Sensör okumalarında gelen gürültülü verileri temizleyip yazılımın işleyebileceği net sinyallere dönüştüren donanım harikasıdır. Analog dünya ile dijital işlemci arasındaki çevirmen elemandır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/opamp/opamp_1.html' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Flemsel+kuvvetlendiriciler+opamp+nedir' },
      ],
    },
    10: {
      description: `Türev alıcı, integral alıcı ve fark alıcı özellikleriyle Op-Amp'ların daha karmaşık analog matematik ve filtreleme işlemleri incelenir. Diferansiyel denklemler dersinde gördüğünüz integral işlemlerinin yazılımla değil, donanımsal ve sıfır gecikmeyle (zero-latency) nasıl çözüldüğü uygulamalı olarak görülür. Tıbbi cihazlardan gelen kalp atışı verilerindeki vücut gürültüsünü filtrelemek gibi ileri düzey sinyal şartlandırma yöntemleri kurgulanır. Otonom robotlarda yazılımın yükünü hafifletmek için hesaplamaların bir kısmını analog devrelere devretme stratejisi kazandırır. Analog-Dijital ortak tasarım vizyonunu pekiştirir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/opamp/opamp_6.html' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=opamp+t%C3%BCrev+ve+integral+al%C4%B1c%C4%B1+devreler' },
      ],
    },
    11: {
      description: `Sadece enerji harcayan dirençlerin aksine, manyetik ve elektrik alanda enerji depolayarak zamana bağlı davranan kapasitör (C) ve indüktör (L) elemanları öğrenilir. Bilgisayarın DRAM bellek hücrelerinin aslında mikroskobik kapasitörlerden oluştuğu ve veriyi bu şekilde sakladığı kavranır. İndüktörler sayesinde, bilgisayarın güç beslemesinde yaşanacak ani akım kopmalarını engelleyen voltaj tamponları oluşturulur. Zaman değişimine tepki veren donanımlar sayesinde yazılımdaki "zamanlayıcılar" ve saat frekanslarının (clock cycles) nasıl üretildiği anlaşılır. Bellek ve zamanlama kavramlarının fiziksel karşılıklarıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/capacitor/cap_1.html' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bobinler+ve+kondansat%C3%B6rler+devre+analizi' },
      ],
    },
    12: {
      description: `Direnç ve bobinden oluşan devrelerin bir anahtar kapandığında (Basamak Giriş) anında değil, zamanla eksponansiyel olarak nasıl tepki verdiği analiz edilir. Elektrik motorlarını yazılımla sürmeye kalktığınızda motorun neden anında tam hıza ulaşamadığının (indüktif gecikme) matematiksel modellemesidir. Diferansiyel denklemler dersindeki teorilerin, donanım üzerindeki akım artış formüllerine dönüştüğü ilk somut aşamadır. Donanımın yazılımdan gelen komutlara verdiği tepki sürelerini hesaplayarak gerçek zamanlı sistemler kurgulama yetisi kazanılır. Fiziksel sınırların algoritmik beklentilerle senkronizasyonudur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/inductor/lr-circuit.html' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rl+devreleri+ge%C3%A7ici+rejim+do%C4%9Fal+yan%C4%B1t' },
      ],
    },
    13: {
      description: `Direnç ve kapasitörden oluşan devrelerin şarj ve deşarj süreleri, zaman sabiti kavramı üzerinden elektronik gecikme hesabı yapılır. Mekanik klavyelerdeki tuşlara basıldığında oluşan elektriksel titremeleri donanımsal olarak filtreleyen (debouncing) RC filtrelerinin mantığı kavranır. Yazılıma giren sensör verilerinin hızını, kondansatör boyutunu değiştirerek donanım seviyesinde yavaşlatma ve filtreleme sanatı öğrenilir. DRAM belleklerin neden saniyede binlerce kez yenilenmek (refresh) zorunda olduğu, kondansatörün deşarj denklemleri üzerinden ispatlanır. Analog hafızanın ve zamanlamanın matematiksel sırrı çözülür.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/rc/rc_1.html' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rc+devreleri+%C5%9Farj+de%C5%9Farj+zaman+sabiti' },
      ],
    },
    14: {
      description: `Direnç, bobin ve kondansatörün bir arada bulunduğu ikinci dereceden devrelerin sönümlü, kritik sönümlü ve salınımlı tepkileri incelenerek dönem tamamlanır. Wi-Fi veya Bluetooth modüllerinizin havadan doğru frekansı yakalamasını sağlayan "Rezonans" olayının devre seviyesindeki ispatı ve hesaplamasıdır. Kontrol sistemlerinde bir robot kolun hedefine giderken titremesini engellemek için kritik sönümleme şartlarının donanımsal modellemesi yapılır. İşlemcinizin mikrodalga frekanslarında çalışırken bakır yolların sistemi nasıl kararsızlığa sokabileceğini gösteren yüksek frekanslı uyarılardır. Donanım ve yazılımın kararlı bir şekilde titreşmesi için gerekli elektromanyetik ahenktir.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.electronics-tutorials.ws/accircuits/series-resonance.html' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=rlc+devreleri+ge%C3%A7ici+durum+ve+rezonans' },
      ],
    },
  },
  'BMB203 Nesneye Yönelik Programlama': {
    1: {
      description: `C dilindeki prosedürel yaklaşımdan, veriyi ve fonksiyonları nesneler (objeler) içinde gruplayan modern programlama felsefesine geçiş yapılır. Günümüz endüstrisinde standart olarak kabul edilen .NET altyapısı ve Java Virtual Machine (JVM) mimarileri tanıtılır. Gerçek dünyadaki nesnelerin dijital dünyada özellikler ve davranışlar olarak nasıl modelleneceğinin vizyonu çizilir. Yazılım krizini önleyen kodun tekrar kullanılabilirliği (reusability) kavramı ile tanışılır. Spagetti kod yazmaktan çıkıp, sürdürülebilir mimariler kurmanın ilk adımıdır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=nesneye+y%C3%B6nelik+programlamaya+giri%C5%9F' },
      ],
    },
    2: {
      description: `Microsoft'un amiral gemisi dillerinden olan C# dilinin temel söz dizimi (syntax), CLR üzerindeki derleme süreçleri ve modern IDE'lerin kullanımı işlenir. Bellek güvenliğine (type-safety) sahip C# dilinde değer (value) tipleri ve dizilerin belleğin neresinde (Stack) tutulduğunun analizi yapılır. C öğrenirken edindiğiniz algoritmik yetenekleri, çok daha yüksek seviyeli ve güvenli bir dilin söz dizimiyle yeniden kurgulama pratiğidir. Geliştirme ortamının hata ayıklama (debugging) yetenekleriyle verimliliğinizi (productivity) artırırsınız. Kurumsal seviyede bir dilin iskelet yapısına sağlam bir giriş yapılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+de%C4%9Fi%C5%9Fkenler+veri+tipleri+ve+diziler' },
      ],
    },
    3: {
      description: `Statik dizilerin sınırlarından kurtularak, boyutu dinamik olarak değişebilen \`List\` ve gelişmiş koleksiyon yapıları öğrenilir. \`String\` (metin) nesnelerinin bellekte nasıl "değiştirilemez" (immutable) davrandığı ve büyük metin manipülasyonlarının sisteme olan performansı tartışılır. Konsol tabanlı temel I/O işlemleri ve yazılan metotlarla basit mantıksal oyunlar kodlanarak fonksiyonel ayrıştırma pratik edilir. C dilindeki pointer dizileriyle eziyet çekerek yapılan işlemlerin, C# kütüphaneleriyle ne kadar zarif ve güvenli yapıldığı fark edilir. Gelişmiş veri yapılarına geçiş için hazır kütüphanelerin gücü keşfedilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+listeler+metotlar+ve+string+i%C5%9Flemleri' },
      ],
    },
    4: {
      description: `OOP'nin temel yapıtaşları olan Sınıflar (Class) ve bu sınıflardan üretilen Nesneler (Object) üzerinden bellek yönetimi incelenir. Sınıfın içindeki kritik verilerin dışarıdan rastgele değiştirilmesini engelleyen "Kapsülleme" (Encapsulation) ilkesi ile yazılımsal güvenlik duvarları inşa edilir. Nesne belleğe doğduğunda çalışan yapıcı metotlar (Constructor) ve belleği temizleyen yıkıcılar ile obje yaşam döngüsü kontrol altına alınır. Soyutlama (Abstraction) sayesinde dış dünyadaki gereksiz detaylardan arınmış, temiz ve odaklanmış dijital varlıklar kurgulanır. Kodun güvenilirliğini ve modülerliğini sağlayan mühendislik kalkanları oluşturulur.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/classes-structs-records' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+s%C4%B1n%C4%B1flar+nesneler+ve+kaps%C3%BClleme' },
      ],
    },
    5: {
      description: `Kapsüllenmiş verilere güvenli erişim sağlayan \`Property\` (get/set) yapıları ve nesne üretmeden doğrudan sınıfa bağlı çalışan \`Static\` üyeler öğrenilir. Proje büyüdükçe kod dosyalarını organize eden \`Namespace\` ve derlenmiş kütüphane parçaları (DLL) oluşturma mantığı kavranır. Ekip çalışmalarında aynı sınıfı farklı dosyalarda eşzamanlı geliştirmeyi sağlayan \`Partial Class\` mimarisiyle takım kodlamasına hazır hale gelinir. Kendi yazdığınız nesnelere diziymiş gibi \`obj[0]\` formatında erişim sağlayan İndeksleyiciler kodlanır. Profesyonel projelerin dosya ve erişim mimarisi standartları belirlenir.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+properties+static+ve+namespace+kavramlar%C4%B1' },
      ],
    },
    6: {
      description: `Bir sınıfın özelliklerini ve kodlarını başka bir sınıfa miras bırakarak kod tekrarını tamamen bitiren kalıtım (Inheritance) felsefesi işlenir. Miras alınan özelliklerin alt sınıflarda farklı tepkiler vermesini sağlayan Çok Biçimlilik (Polymorphism) sayesinde dinamik kodlar yazılır. Aynı isme sahip fakat farklı parametreler alan metotlar (Overloading) ile yazılımın esnekliği artırılır. Operatör aşırı yüklemesi yapılarak kendi özel veri tiplerinizle doğal matematiksel işlemler kodlanır. Yazılım evrimini ve hiyerarşisini kurmanın en güçlü aracıdır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+kal%C4%B1t%C4%B1m+inheritance+ve+polymorphism' },
      ],
    },
    7: {
      description: `Kalıtım zincirinde metotların alt sınıflar tarafından mecburi ezilmesini sağlayan \`Abstract\` sınıflar ve şablon sözleşmeler olan \`Interface\` (Arayüz) yapıları öğrenilir. Çoklu kalıtımın yasak olduğu dillerde, sınıflara farklı yetenekler kazandırmak için interfaceler üzerinden yazılım sözleşmeleri imzalanır. Sınıfın kalıtım vermesini engelleyerek hiyerarşiyi sonlandıran \`Sealed\` anahtar kelimesiyle sistemin tasarım sınırları çizilir. Plug-in tabanlı (eklentilerle büyüyen) mimariler, arayüz çok biçimliliği kullanılarak esnek bağlarla tasarlanır. Sürdürülebilir büyük sistemlerin en üst düzey tasarım kurallarıdır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/interfaces' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+abstract+class+ve+interface+kullan%C4%B1m%C4%B1' },
      ],
    },
    8: {
      description: `Dönemin ilk yarısında öğrenilen kapsülleme, kalıtım, çok biçimlilik ve arayüzler gibi OOP felsefelerinin hem teorik hem kod bazında test edildiği aşamadır. Öğrencinin karmaşık bir gerçek dünya problemini doğru nesne hiyerarşisiyle tasarlayabilme becerisi ölçülür. Kodun çalışmasından ziyade, kodun modüler, esnek ve nesne yönelimli kurallara uygun tasarlanıp tasarlanmadığı kontrol edilir. C# dilinden ziyade OOP'nin dil bağımsız mühendislik vizyonunun özümsenmesi hedeflenir. İyi bir yazılım mimarı olma yolunda kritik bir vizyon kontrolüdür.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `C# üzerinde oturtulan OOP konseptlerinin, platform bağımsız çalışan Java ekosistemine nasıl adapte edileceği gösterilir. JVM ve JRE kavramlarıyla derleme süreçleri karşılaştırılarak, her iki büyük kurumsal dilin de güçlü yönleri tartışılır. Syntax farklılıklarından ziyade, arka plandaki Garbage Collector bellek yönetim farklarına odaklanılır. Yeni bir dil öğrenmenin aslında sadece "sözlüğe bakmak" olduğu, arka plandaki mühendislik kurallarının evrensel olduğu aşılanır. Çok dilli (polyglot) bir mühendis profilinin temeli atılır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://docs.oracle.com/javase/tutorial/java/concepts/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=java+nesneye+y%C3%B6nelik+programlama+oop' },
      ],
    },
    10: {
      description: `Sınıflara göre bellekte daha hafif olan \`Struct\` yapıları ve kod okunabilirliğini artıran sabitler dizisi \`Enum\` incelenir. İstenmeyen çökmeleri engelleyen modern hata yakalama blokları (\`try-catch-finally\`) ile yazılımı dayanıklı hale getiren Exception Handling stratejileri pratik edilir. Çalışma zamanında kodun kendi yapısını inceleyip değiştirebildiği olağanüstü \`Reflection\` (Yansıma) mekanizması öğretilir. Metadatalarla (Attributes) derleyiciye özel komutlar vermek, ORM araçlarının arka planda nasıl çalıştığını kavramak için şarttır. Uygulamanın direncini ve dinamizmini artıran ileri seviye araçlardır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+exception+handling+try+catch+ve+enum' },
      ],
    },
    11: {
      description: `C dilindeki fonksiyon işaretçilerinin güvenli OOP karşılığı olan \`Delegate\` yapıları ve tetikleyici olaylar (\`Events\`) öğrenilir. Bir butona tıklandığında hangi fonksiyonun çalışacağını belirleyen arayüz programlama mantığının (Event-Driven Programming) kalbidir. Masaüstü yazılımları geliştirmek için kullanılan Windows Forms altyapısına giriş yapılarak, sürükle-bırak arayüzlerin arka planında dönen kodlar incelenir. Yayıncı-Abone (Publisher-Subscriber) tasarım deseninin temelleri bu event mantığı üzerine kurulur. Görsel arayüz (GUI) kodlama dünyasına güçlü bir geçiş yapılır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+delegates+events+ve+windows+forms' },
      ],
    },
    12: {
      description: `Form elemanlarının tasarım ekranında değil, doğrudan C# kodlarıyla dinamik olarak yaratılması ve silinmesi işlemleri pratik edilir. Kullanıcı yetkisine veya veritabanından gelen veri sayısına göre arayüzün kendi kendini anlık olarak nasıl çizdiği (Responsive) kavranır. Karmaşık otomasyon yazılımları geliştirirken olayları dinamik nesnelere kod üzerinden bağlama sanatı icra edilir. Grafiksel kullanıcı arayüzü ile arka plan nesneleri arasındaki karmaşık veri geçişleri sorunsuzca yönetilir. Kodun, arayüz tasarımından bağımsız kontrol yeteneği maksimize edilir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+dinamik+kontroller+olu%C5%9Fturma+winforms' },
      ],
    },
    13: {
      description: `Bellek adreslerine doğrudan erişim (Unsafe), Çoklu iş parçacıkları (Multithreading), ve Yazılım Mühendisliği prensipleri incelenir. İşlemcinin çekirdeklerini aynı anda çalıştırarak asenkron kod yazma ve threadlerin çakışmasını engelleme (Deadlocks) zorlukları aşılır. SOLID prensipleri ve Tasarım Desenleri ile kodun yıllarca bozulmadan genişleyebilmesinin kuralları tartışılır. Kodların hatasızlığını otomatik testlerle kanıtlayan \`Unit Testing\` ve arayüz ile veriyi ayıran \`MVC\` mimarisine giriş yapılır. Endüstriyel, kurumsal ve kusursuz yazılım üretim standartlarının tamamı özetlenir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/core/testing/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+solid+prensipleri+ve+multithreading' },
      ],
    },
    14: {
      description: `Geliştirilen nesne yönelimli masaüstü uygulamalarının, veritabanlarıyla (SQL Server) iletişim kurmasını sağlayan \`ADO.NET\` veri erişim katmanı öğrenilir. Veritabanına bağlantı açma, sorgu gönderme ve gelen verileri bellekte tutarak nesnelere dönüştürme işlemleri gerçekleştirilir. SQL injection gibi güvenlik açıklarını engellemek için parametrik sorguların önemi ve kullanımı üzerinde durulur. Kapanış haftasıyla birlikte; arayüzü olan, kurallara uygun yazılmış ve verileri kalıcı olarak saklayabilen tam teşekküllü otomasyon projeleri hayata geçirilir. Saf bir yazılım mühendisliği döngüsü tamamlanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+ado.net+ile+veritaban%C4%B1+ba%C4%9Flant%C4%B1s%C4%B1' },
      ],
    },
  },
  'SYA003 Sayısal Analiz': {
    1: {
      description: `Bilgisayarların ondalıklı sayıları (Floating Point) bellekte kısıtlı bitlerle saklamasından doğan kesme ve yuvarlama hataları öğrenilir. Roket yörünge hesaplamaları gibi hassas yazılımlarda bu küçük hataların zamanla birikerek sistemi nasıl felakete sürükleyeceği analiz edilir. Mutlak, bağıl ve yüzde hata kavramlarıyla, yazdığınız bir algoritmanın sonucuna ne kadar güvenebileceğinizin matematiksel garantisi sağlanır. Bilgisayarın her zaman "tam doğru" hesap yapmadığı gerçeğiyle yüzleşerek defansif kodlama zihniyeti aşılanır. Teorik matematiğin dijital donanımdaki kısıtlı sınırları çizilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/numerical_methods/numerical_methods_errors.htm' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+analiz+hata+kaynaklar%C4%B1+ve+hata+hesab%C4%B1' },
      ],
    },
    2: {
      description: `Sonlu farklar (ileri, geri ve merkezi farklar), öteleme operatörü gibi ayrık veri grupları üzerinde matematiksel işlemler yapmayı sağlayan kavramlar tanıtılır. Sinyal işlemede ayrık zamanlı sensör verilerini filtrelemek veya görüntü matrisleri üzerinde türev işlemleri yapmak için bu operatörler koda dökülür. Fonksiyonun denklemi bilinmediğinde bile, eldeki birkaç veri noktasıyla sistemin gidişatını öngörmeyi sağlar. Sürekli dünyayı, bilgisayarın anlayabileceği ayrık veri adımlarına dönüştürmenin aracıdır. İnterpolasyon ve türev algoritmalarının çekirdek yapısıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Finite_difference' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+analiz+fark+operat%C3%B6rleri' },
      ],
    },
    3: {
      description: `Newton, Lagrange ve Spline gibi interpolasyon yöntemleri ile eldeki ayrık veri noktaları arasından geçecek en uygun polinom fonksiyonunu bilgisayara buldurma işlemi öğrenilir. Oyun motorlarında veya 3D animasyonlarda anahtar kareler arasındaki yumuşak geçişleri (tweening) hesaplamak tamamen interpolasyon ile yapılır. Eksik veya kopuk sensör verilerinin arasını matematiksel olarak tahmin ederek veriyi tamamlama sanatıdır. Verinin denklemi olmadığında, veriye uyan bir denklem uydurma yetisi kazandırılır. Büyük veri biliminde veriyi pürüzsüzleştirme operasyonlarının kalbidir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/interpolation-in-numerical-methods/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+analiz+interpolasyon+lagrange+newton' },
      ],
    },
    4: {
      description: `Fonksiyonun analitik türevi alınamadığında, bilgisayara Taylor serileri ve limit yaklaşımlarıyla yaklaşık türev nasıl aldırılır incelenir. Derin Öğrenme modellerini eğitirken kayıp fonksiyonunun eğimini bulmak (Gradient Descent) bu sayısal türev yaklaşım mantığını kullanır. Adım aralığını küçülterek doğru sonuca yaklaşma ile yuvarlama hatalarının artması arasındaki o kritik denge hesaplanır. Hataların türev alındıkça nasıl büyüdüğünü analiz ederek sensör verilerini önceden filtrelemenin önemi vurgulanır. Mathcad veya Python gibi yazılımlarla teorik hesapların programmatik çözümleri simüle edilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://mathworld.wolfram.com/NumericalDifferentiation.html' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+t%C3%BCrev+ileri+geri+merkezi+farklar' },
      ],
    },
    5: {
      description: `Eğri altındaki alanları (integral) Yamuk kuralı, Simpson kuralları yöntemleriyle bilgisayarlara döngüler üzerinden toplatarak hesaplatma stratejileridir. Diferansiyel formülü çok karmaşık olan bir enerji hesabını, küçük dilimlerine bölerek \`for\` döngüsüyle toplamak algoritmik verimlilik sağlar. Olasılık yoğunluk fonksiyonlarından kümülatif olasılıkları çıkarırken veri bilimi kütüphanelerinin arka planındaki çalışan algoritmalar tamamen bunlardır. Hangi yöntemin işlemciyi daha az yorarak daha az hatayla sonuç verdiğinin maliyet analizleri yapılır. Sürekli kalkülüsü bilgisayarın discrete mantığına uydurmanın zarif yoludur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/numerical-integration-in-numerical-methods/' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+integrasyon+yamuk+ve+simpson+kural%C4%B1' },
      ],
    },
    6: {
      description: `Lineer cebir temelleri hatırlatılarak, yüksek boyutlu matrislerin determinantlarının bilgisayar tarafından minimum işlem yüküyle nasıl hesaplanacağı öğrenilir. Üç boyutlu grafikleri modellediğimiz devasa matrislerin çöküp çökmeyeceğini bu determinantlar belirler. Algoritma karmaşıklığında klasik yöntemle O(N!) süren hesabın sayısal ayrıştırmalarla O(N^3) seviyesine nasıl çekilebileceği mühendislik vizyonuyla gösterilir. Paralel hesaplama birimlerine (GPU) matris operasyonlarını bölme fikrinin ana mantığıdır. Matrislerin donanım üzerindeki hesaplama maliyetleri tartışılır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/numerical_methods/numerical_methods_solving_linear_equations.htm' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matris+ve+determinant+say%C4%B1sal+y%C3%B6ntemler' },
      ],
    },
    7: {
      description: `Denklem sistemlerini çözmek için devasa matrislerin tersini alan LU parçalanması, Gauss-Jordan gibi algoritmalar kodlanabilir formda incelenir. Makine öğrenmesinde Çoklu Lineer Regresyon modelinin ağırlık katsayılarını tek adımda bulmak için dev boyutlu veri matrislerinin tersini almak zorunludur. Direkt ters alma işleminin bilgisayar belleğini nasıl doldurduğu, bunun yerine matrisi Alt-Üst üçgen matrislere ayırmanın ne kadar hızlı olduğu kanıtlanır. Algoritmaların birbirleriyle sadece doğruluk değil, "Big O" hızı bakımından yarıştırıldığı aşamadır. Hızlı matematiksel hesaplama motorlarının sırları öğrenilir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://mathworld.wolfram.com/MatrixInverse.html' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=invers+matris+bulma+gauss+jordan+lu+par%C3%A7alanmas%C4%B1' },
      ],
    },
    8: {
      description: `Sayısal analiz tekniklerinin, hata kavramının ve matris manipülasyonlarının teorik olarak kağıt üzerinde test edildiği akademik ara değerlendirmedir. Öğrencinin "her problemin formülü yoktur, ama algoritması yazılabilir" felsefesini ne ölçüde içselleştirdiği sınanır. Farklı sayısal yaklaşımların doğuracağı hata oranlarını analiz edip optimum yöntemi seçebilme mühendislik refleksi kontrol edilir. Lineer olmayan karmaşık denklemlere geçmeden önce analitik zekanın onaylanması sağlanır. Yazılımın arka planındaki matematik motorunu kurma becerisi belgelendirilir.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Matrislerin tersini bulmada kullanılan SVD (Singular Value Decomposition) gibi ileri düzey sayısal parçalama mantıkları detaylandırılır. Derin öğrenme veya oyun fiziği motorları gibi ağır arka uç matematiği yazan mühendisler için vazgeçilmez bir altyapıdır. Matris boyutları büyüdükçe hafızaya erişim hatalarını ve sıfıra bölme çökmelerini engelleme stratejileri pratik edilir. Kararsız (Ill-conditioned) veri setlerini tespit edip yazılımın patlamasını engelleme yolları sunulur. Sağlam algoritmik mimariler için gerekli matematiksel hijyen (precision) öğretilir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/finding-inverse-of-a-matrix-using-gauss-jordan-method/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=matris+tersi+alma+say%C4%B1sal+analiz+%C3%B6rnekler' },
      ],
    },
    10: {
      description: `Gauss Eleminasyonu gibi direkt yöntemlerin yerine, iterasyon yaparak sonuca adım adım yaklaşan Jacobi ve Gauss-Seidel algoritmaları yazılıma dökülür. İçi çoğunlukla sıfır dolu devasa verilerle (Seyrek matrisler) uğraşırken bu iteratif yöntemlerin bellek taşkınını önleyen esnekliği kanıtlanır. Bilgisayarın rastgele bir tahminle başlayıp, hatayı her döngüde azaltarak doğru sonucu kendi kendine bulması felsefesi aşılanır. Makine öğrenmesi ağlarının "Öğrenme" sürecinin temel çalışma vizyonunu inşa eder. Algoritmaların hata marjı belirleyerek sonsuz döngüden çıkma koşulları kurgulanır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/numerical_methods/numerical_methods_solving_linear_equations.htm' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=jacobi+ve+gauss+seidel+y%C3%B6ntemleri+say%C4%B1sal+analiz' },
      ],
    },
    11: {
      description: `Bir sistemin dönüşüm dinamiklerini karakterize eden özdeğerleri bulmak için Kuvvet Yöntemi (Power Iteration) gibi algoritmayla çözülebilen yollar öğrenilir. Google'ın arama motoru olan PageRank'in arkasında yatan milyarlarca boyutlu matrislerin ana vektörlerini bulma işlemi tam olarak budur. Boyut İndirgeme (PCA) yaparak, gereksiz verileri silip sadece "Öz" veriyi saklamak suretiyle büyük veri analitiğini optimize etmenin kapısı aralanır. Büyük sistemlerin yapısal stabilitesini ve çökmelerini kodlayarak tespit etme imkanı sunar. Veri madenciliğinin matematiksel matkabıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://en.wikipedia.org/wiki/Eigenvalue_algorithm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1sal+analiz+%C3%B6zde%C4%9Fer+ve+%C3%B6zvekt%C3%B6r+bulma+kuvvet+y%C3%B6ntemi' },
      ],
    },
    12: {
      description: `Analitik çözümü olmayan kompleks polinomların köklerini bulmak için Bisection (İkiye Bölme) ve Newton-Raphson algoritmaları kodlanır. Veri yapılarındaki "Binary Search" (İkili Arama) algoritmasının matematiksel kardeşi olan Bisection yöntemiyle çözüm aralıkları daraltılarak performansı optimize etme süreci gösterilir. Newton-Raphson yönteminin teğetler çizerek çözüme inanılmaz bir hızla yaklaşması, iyi tasarlanmış bir algoritmanın işlem gücünden ne kadar tasarruf ettirdiğini kanıtlar. Köklerin ıraksama tehlikeleri tartışılarak, algoritmaların sınır durumları için hata denetimleri yazma gerekliliği öğretilir. Yapay zekada hiperparametre optimizasyonu felsefesine hazırlıktır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/newton-raphson-method/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=newton+raphson+ve+ikiye+b%C3%B6lme+y%C3%B6ntemi+say%C4%B1sal+analiz' },
      ],
    },
    13: {
      description: `Zamana bağlı hareket formüllerini analitik olarak çözmek yerine, bilgisayara zaman adımları belirterek iteratif olarak (Euler ve Runge-Kutta) çözdürme mantığı kavranır. Tüm popüler oyun motorları (Unity, Unreal Engine) yerçekimini ve objelerin çarpışma hızlarını hesaplarken tam olarak bu Runge-Kutta algoritmalarını kullanırlar. Adım aralığını küçülttükçe simülasyonun ne kadar daha hassas ve "gerçekçi" sonuçlar vereceği pratik edilir. Algoritma hızı ile fiziksel doğruluğun nasıl optimize edildiği (Trade-off) mühendislik vizyonuyla tartışılır. Sanal dünyada fizik kurallarını koda dökmenin omurgasıdır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/runge-kutta-4th-order-method-solve-differential-equation/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=euler+ve+runge+kutta+y%C3%B6ntemleri+say%C4%B1sal+analiz' },
      ],
    },
    14: {
      description: `Klasik başlangıç değerleri yerine her iki ucun da bilindiği Sonlu Farklar (Finite Differences) ile sınır değer algoritmaları kurgulanır. Kararsız "Stiff" sistemlerin, klasik yazılım algoritmalarını nasıl sonsuz döngüye veya taşmaya (overflow) soktuğu analiz edilerek kapalı (Implicit) algoritmalar incelenir. Isı transferi ve donanım soğutma tasarım yazılımlarının arka planındaki ileri düzey hesaplama metodolojileridir. Sadece bir kod yazıcısı değil, sistemlerin karmaşık doğasını modelleyebilen analitik bir mühendis formasyonuyla dönem noktalanır. İleri bilgisayar biliminin simülasyon aşamasıdır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://mathworld.wolfram.com/BoundaryValueProblem.html' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=s%C4%B1n%C4%B1r+de%C4%9Fer+problemleri+say%C4%B1sal+analiz+stiff+denklemler' },
      ],
    },
  },
  'BMB207 Veritabanı Yönetimi': {
    1: {
      description: `Modern uygulamaların kalbi olan Veritabanı Yönetim Sistemlerinin (DBMS) mimarisi, dosya sistemlerinden farkları ve veriyi saklama paradigmaları öğrenilir. İnternet devlerinin milyarlarca veriyi klasörlerde değil, neden ACID özelliklerine sahip yönetim sistemlerinde tuttuğu analiz edilir. Verinin "Bilgiye" dönüşmesi sürecinde veri bütünlüğü, eşzamanlılık kontrolü ve güvenlik gibi arka uç mühendisliğinin ana görevleri tanıtılır. Veri soyutlama katmanları ile yazılımcı, kullanıcı ve veritabanı motoru arasındaki sınırlar çizilir. "Veri yeni petroldür" felsefesinin teknik altyapısına giriş yapılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.javatpoint.com/dbms-tutorial' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veritaban%C4%B1+y%C3%B6netim+sistemleri+giri%C5%9F+vtys' },
      ],
    },
    2: {
      description: `Bir yazılım projesindeki gerçek dünya varlıklarını tablolara dökmeden önce Varlık-İlişki (ER) diyagramlarıyla kavramsal olarak modelleme sanatı işlenir. Bire-bir, Bire-çok ve Çoka-çok ilişki tipleriyle verilerin birbirine nasıl bağlanacağı ve Primary/Foreign Key mantığı kavranır. Kötü tasarlanmış bir modelin, yazılım aşamasında projeyi nasıl yavaşlatacağı bağımlılık (Coupling) üzerinden tartışılır. Algoritma yazmadan önce akış şeması çizmek gibi, kod yazmadan önce verinin mimarisini kağıda hatasız tasarlamak öğretilir. Güçlü bir uygulamanın sarsılmaz veri kolonlarını atma aşamasıdır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/introduction-of-er-model/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=varl%C4%B1k+ili%C5%9Fki+modeli+er+diyagram%C4%B1+veri+taban%C4%B1' },
      ],
    },
    3: {
      description: `Kağıt üzerinde tasarlanan kavramsal ER diyagramlarının, ilişkisel veritabanı kurallarına göre tablolara dönüştürülme kuralları pratik edilir. Çoka-çok ilişkilerin veritabanlarında doğrudan kullanılamaması gerçeğiyle yüzleşip, araya "Bağlantı Tabloları" kurarak problemi çözme yetisi kazanılır. Zayıf varlıkların ilişkisel modele çevrilirken veri tekrarını engelleme stratejileri belirlenir. Tasarımcının zihnindeki soyut kurgunun, bilgisayar belleğindeki fiziksel tablolara eşleştirilmesidir. Doğru Schema mimarisi kurmanın tüm pratik kuralları netleşir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/mapping-from-er-model-to-relational-model/' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=er+diyagram%C4%B1n%C4%B1+tablolara+d%C3%B6n%C3%BC%C5%9Ft%C3%BCrme' },
      ],
    },
    4: {
      description: `Veritabanı motoruyla konuşmanın evrensel dili olan SQL'e ve temel veri çekme operasyonu olan \`SELECT\` komutuna giriş yapılır. Tablolardan filtreleme (\`WHERE\`), sıralama (\`ORDER BY\`) yapılarak büyük veri yığınları içinden sadece istenen bilginin izole edilmesi öğrenilir. Veritabanının ham veriyi, uygulama (Front-end) için anlamlı paketler haline getirme gücü test edilir. MS Access gibi temel görsel araçlar kullanılarak, arkada dönen SQL sorgularının tablo çıktıları hızlıca gözlemlenir. Backend geliştiriciliğin en çok kullanılacak kod satırları yazılmaya başlar.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/sql/sql_select.asp' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sql+select+kullan%C4%B1m%C4%B1+ve+temel+sorgular' },
      ],
    },
    5: {
      description: `Farklı tablolara dağıtılmış parçalı bilgilerin \`JOIN\` komutlarıyla birleştirilerek anlamlı, tek bir rapor haline getirilmesi işlemleridir. Müşterinin profilini, siparişlerini üç farklı tablodan saniyenin onda biri hızında eşleştirip tek ekrana basmanın mimarisi bu Join algoritmalarıyla yapılır. Yanlış yazılan bir Join sorgusunun kartezyen çarpıma yol açarak sunucuyu nasıl çökertebileceği performans açısından analiz edilir. İlişkisel algebra mantığının SQL sintaksındaki tam karşılığıdır. Verileri mantıksal ağlarla birbirine bağlama sanatıdır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/sql/sql_join.asp' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sql+join+kullan%C4%B1m%C4%B1+inner+left+right+join' },
      ],
    },
    6: {
      description: `Veri Manipülasyon Dili (DML) komutları olan \`INSERT\`, \`UPDATE\`, \`DELETE\` ile tabloların içeriklerini dinamik olarak yönetme pratiği yapılır. Bir uygulamanın arayüzünden form gönderildiğinde arka planda verinin nasıl eklendiği veya güncellendiği bu komutlara dayanır. \`GROUP BY\` kullanılarak, milyonlarca satış verisinden istatistiksel kümeleme hesaplamaları sunucu tarafında çözdürülür. \`DELETE\` yerine "Soft Delete" mantığı gibi sektörel iyi uygulamalar (best practices) tartışılır. Sistem dinamizmini kodla kontrol etme seviyesine gelinir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/sql/sql_insert.asp' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sql+insert+update+delete+ve+group+by+having' },
      ],
    },
    7: {
      description: `Veritabanındaki tekrar eden verileri silmek, güncelleme anormalliklerini engellemek için uygulanan Normal Form kuralları detaylıca öğrenilir. Bir tabloda "Müşteri Şehri" değiştirildiğinde diğer kayıtlarda eski kalmasını engelleyen tutarlılık kuralları, tabloları atomik boyutlara ayırarak sağlanır. Fazla normalizasyonun \`JOIN\` maliyetini artırarak sistemi yavaşlattığı "Performans vs Tasarım" paradoksu tartışılarak "Denormalizasyon" vizyonu katar. Kalitesiz veri tasarımlarını kurumsal endüstri standartlarına yükseltmenin altın kurallarıdır. Kalıcı ve hatasız mimarinin matematiğidir.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.javatpoint.com/dbms-normalization' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veritaban%C4%B1+normalizasyon+1nf+2nf+3nf' },
      ],
    },
    8: {
      description: `Varlık-İlişki (ER) diyagramı modelleme, tablolara dönüştürme kuralları, Normalizasyon formları ve temel SQL sorgulama yeteneklerinin kağıt üzerinde değerlendirildiği aşamadır. Öğrencinin karmaşık bir senaryoyu okuyup eksiksiz bir veritabanı mimarisi kurgulama kapasitesi test edilir. Gelişigüzel tasarlanmış veya veri tekrarı barındıran tabloların tespiti yapılarak analitik düşünce kontrol edilir. İleri düzey sunucu yönetimi ve T-SQL programlamaya geçmeden önce altyapının sağlamlığından emin olunan duraktır. Sağlam veri temeli atmadan üstüne yazılım inşa edilemeyeceği gerçeği bir kez daha kanıtlanır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    9: {
      description: `Dünyanın en çok kullanılan kurumsal İlişkisel Veritabanı Sistemlerinden biri olan Microsoft SQL Server mimarisi, kurulumu ve SSMS kullanımı incelenir. Sadece sorgu yazmak değil, veritabanı motorunun işlemci ve RAM kullanımını, yedekleme (Backup) stratejilerini yönetme vizyonu sunulur. Verilerin kaybolmaması ve sistemin 7/24 kesintisiz çalışması için bir Veritabanı Yöneticisi (DBA) gibi düşünme pratiği aşılanır. Klasik dosya saklamanın ötesine geçilerek, bir sunucu ortamında veri güvenliğinin anlaşılması sağlanır. Profesyonel iş hayatında karşılaşılacak endüstriyel arayüzlere geçiş yapılır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/sql/sql-server/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ms+sql+server+kurulumu+ve+kullan%C4%B1m%C4%B1' },
      ],
    },
    10: {
      description: `SQL içindeki Data Definition Language (DDL) komutları olan \`CREATE\`, \`ALTER\`, \`DROP\` kullanılarak veritabanı nesnelerini tamamen kodla üretme işlemleri gerçekleştirilir. Arayüzden tıklayarak tablo yapmak yerine, büyük projelerde veritabanı kurulumlarını (Migration) otomatik kod betikleriyle yapmanın zorunluluğu kavranır. İndeksleme mantığı öğretilerek, milyonlarca satırlık bir tabloda arama hızının $O(\\log N)$ hızına nasıl çıkarıldığı kanıtlanır. "Constraint" komutlarıyla veritabanı seviyesinde hatalı veri girişini engelleyen sarsılmaz güvenlik kilitleri kodlanır. Sistemin iskeletini komutlarla modifiye etme becerisidir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/sql/sql_create_table.asp' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sql+ddl+komutlar%C4%B1+create+alter+drop' },
      ],
    },
    11: {
      description: `Standart SQL'in sorgulama sınırlarını aşarak içine değişken tanımlama ve \`IF-ELSE\` döngüleri ekleyen Transact-SQL (T-SQL) öğrenilir. Sık kullanılan iş mantıklarını Stored Procedure (Saklı Yordamlar) halinde veritabanı sunucusuna gömerek ağ trafiğini olağanüstü azaltma stratejileri kurgulanır. Veri eklendiğinde otomatik çalışan Trigger mekanizmalarıyla sistemin kendini denetleyen otonom bir yapıya dönüştürülmesi sağlanır. Arka Uç geliştiricisinin yükünü hafifleterek iş kurallarını doğrudan veri katmanında çözme yeteneğidir. Veritabanı motoruna prosedürel programlama aklı ekleme sanatıdır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=tsql+dersleri+stored+procedure+trigger' },
      ],
    },
    12: {
      description: `Veritabanı güvenliğinin en kritik aşaması olan Rol tabanlı erişim kontrolü, yetkilendirme (\`GRANT\`, \`REVOKE\`) ve kimlik doğrulama modelleri işlenir. Bir yazılımda sadece admin'in verileri silmesini veritabanı seviyesinde kilitleyerek siber saldırıların (SQL Injection) hasarı minimize edilir. Farklı uygulamalara veritabanında ayrı "Schema" bölgeleri tahsis ederek veri izolasyonunu kurgulama yetisi kazandırılır. İç/Dış tehditlere karşı verinin en alt katmanda korunması felsefesi aşılanır. Profesyonel sistem yöneticiliğinin veritabanındaki karşılığıdır.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/sql/relational-databases/security/securing-sql-server' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=sql+server+kullan%C4%B1c%C4%B1+yetkilendirme+ve+g%C3%BCvenlik' },
      ],
    },
    13: {
      description: `Microsoft ekosisteminin dışına çıkılarak, açık kaynak (Open Source) ekosisteminin lideri MySQL sisteminin mimarisi ve farkları tanıtılır. Maliyetsiz ve hızlı olması sebebiyle girişimlerin (Startups) neden ilk olarak MySQL tercih ettiği altyapısal perspektiften analiz edilir. SQL dilindeki temel komutların farklı RDBMS motorlarındaki küçük syntax ve optimizasyon farklarına adaptasyon süreci yaşanır. Tek bir teknolojiye bağımlı kalmadan, platform bağımsız veri mimarı olma vizyonu genişletilir. Sektörel esneklik ve açık kaynak kültürü yazılımcı kimliğine dahil edilir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://dev.mysql.com/doc/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=mysql+kurulumu+ve+temel+kullan%C4%B1m%C4%B1' },
      ],
    },
    14: {
      description: `Oluşturulan veritabanlarının C#, Java veya Python gibi nesne yönelimli dillerle nasıl konuşturulacağı bağlantı kütüphaneleriyle birleştirilir. Yazılım kodundaki objeler ile veritabanındaki tablolar arasındaki uyumsuzluğu gideren ORM teknolojilerinin giriş mantığı tartışılır. Bağlantı havuzlama tekniğiyle sistemin binlerce anlık kullanıcıya yanıt verirken çökmemesinin sunucu taraflı optimizasyonu kurgulanır. Veriyi tasarlama, güvenliğini sağlama ve onu canlı bir yazılım projesinin parçası yapma vizyonuyla, gerçek bir "Full-Stack" mühendislik rotası tamamlanmış olur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c%23+ile+sql+server+veritaban%C4%B1+ba%C4%9Flant%C4%B1s%C4%B1+ado.net' },
      ],
    },
  },
  'YD 003 Yabancı Dilde Okuma ve Konuşma': {
    1: {
      description: `Küresel teknoloji şirketlerinin merkezlerinden biri olan Birleşik Krallık'ın kültürel ve politik temellerini İngilizce okuma parçalarıyla analiz etmeye başlarsınız. Çeşitli milletlerin tek bir çatı altında nasıl kimlik oluşturduğu, farklı modüllerin ortak bir yazılım mimarisinde uyumla çalışmasına benzetilebilir. İngiliz sistemini anlatan ileri düzey metinler okunarak, akademik okuma yeteneği ve uluslararası terminoloji dağarcığı geliştirilir. Yabancı şirketlerin kurumsal iletişim dilinde neden resmi bir yapı olduğunu anlamanın sosyal kökenlerini keşfedersiniz. Evrensel iş İngilizcesine kültürel bir giriş yapılır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=uk+culture+and+political+system+documentary' },
      ],
    },
    2: {
      description: `Din ve inanç özgürlüğü gibi hassas toplumsal yapıların Birleşik Krallık kültürü içindeki yeri İngilizce olarak tartışılır. Küresel ve çok uluslu yazılım ekiplerinde çalışırken, farklı inançlara sahip iş arkadaşlarıyla kapsayıcı bir iletişim dili kurmanın sosyal temelleridir. Metinler aracılığıyla argüman oluşturma ve fikirleri İngilizce olarak kibar ama etkili bir şekilde ifade etme teknikleri pratik edilir. Kelime haznesine soyut ve felsefi terimler eklenerek, akıcı tartışma (Fluency) yeteneği geliştirilir. Sosyal mühendislik ve iş etiği vizyonunuzu genişleten bir aşamadır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=religion+in+the+uk+history+and+culture' },
      ],
    },
    3: {
      description: `İngiliz kültüründeki aile dinamikleri, resmi tatiller ve günlük yaşam rutinleri üzerinden günlük diyalog kalıpları geliştirilir. Global şirketlerin tatil günlerinin çalışma takvimlerini (Sprints) nasıl etkilediği ve "Small Talk" kültürünün yabancı ekiplerle kaynaşmadaki önemi aşılanır. Toplantı öncesi festivaller hakkında İngilizce sohbet edebilmek, takım içi sosyal uyumu olağanüstü artırır. Gündelik yaşam kelimeleriyle dolu okuma parçalarıyla pratik çeviri becerileri ve İngilizce düşünme refleksleri hızlandırılır. Sosyal zeka dil becerileriyle entegre edilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-2' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=british+festivals+and+family+culture+esl' },
      ],
    },
    4: {
      description: `Özel kavramların listelendiği sözlükçelerin nasıl verimli okunacağı ve bağlamdan anlam çıkarma (Guessing from context) stratejileri pratik edilir. API dokümantasyonları okurken karşınıza çıkan bilinmeyen terimleri bağlamdan analiz ederek anlama yeteneğidir. Kelimelerin köklerini ve eklerini inceleyerek yeni kelimeler türetme mantığı, yazılımdaki değişken adlandırma standartlarını çözmek gibidir. Teknik makaleleri tarama hızını (Skimming & Scanning) artıracak güçlü bir sözcük ve analitik okuma antrenmanıdır. Etkili bilgi çıkarma ve yorumlama becerisi pekiştirilir.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://dictionary.cambridge.org/dictionary/english/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=how+to+guess+meaning+from+context+in+english' },
      ],
    },
    5: {
      description: `Dünyanın finans ve teknoloji başkentlerinden biri olan Londra'nın tarihi, mimarisi ve teknoloji merkezleri üzerine metinler incelenir. FinTech ve startup ekosistemlerinin neden Londra'da kümelendiğini anlatan analizler okuyarak girişimcilik vizyonunuzu yabancı dille harmanlarsınız. Metro veya şehir ulaşımıyla ilgili okumalar, yön tarif etme ve seyahat İngilizcesi pratiği yapmanın yanı sıra karmaşık ağ yapılarını İngilizce kurgulamaya yardımcı olur. Metropol kültürü ve teknoloji merkezlerindeki hızlı iş yaşantısına dil bazında zihinsel hazırlık yapılır. Profesyonel kariyer hedeflerinize ilham verecek global metinler okunur.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-3' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=london+history+and+culture+documentary+for+students' },
      ],
    },
    6: {
      description: `İngiltere'nin Güneydoğu bölgesinin coğrafi yapısı, üniversiteleri ve inovasyon merkezleri hakkında detaylı okuma parçaları ele alınır. Akademik araştırma kültürünün ve üniversite-sanayi işbirliğinin İngilizce metinler üzerinden nasıl ifade edildiği incelenir. Mekan betimlemeleri sayesinde, sistem tasarımlarınızı veya bir yazılımın arayüzünü detaylı İngilizce sıfatlar kullanarak anlatma yeteneğiniz güçlendirilir. Coğrafi dokunun ekonomiye etkileri tartışılırken mantıksal neden-sonuç cümleleri kurma kalıpları pratik edilir. Karşılaştırmalı ve betimleyici dil yapıları sağlamlaştırılır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-4' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=southeast+england+geography+and+culture' },
      ],
    },
    7: {
      description: `Tarım ile yüksek teknolojinin kesiştiği "Silicon Fen" (Cambridge çevresi) gibi bölgeleri barındıran East Anglia üzerine okumalar yapılır. Biyoteknoloji ve bilgisayar bilimlerinin doğuşuna ev sahipliği yapmış bu bölgenin ekosistemini anlatan spesifik teknik metinler çevrilir. Sakin bölgelerin nasıl global Ar-Ge üslerine dönüştüğünü tartışırken fikir bildirme kalıplarını İngilizce kullanma refleksiniz gelişir. Bilimsel makaleler okurken ihtiyaç duyacağınız inovasyon ve araştırma kavram kümelerine hakimiyetiniz artar. Akademik İngilizcenin bilim ve coğrafyayla harmanlandığı haftadır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-5' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=east+anglia+cambridge+silicon+fen+tech' },
      ],
    },
    8: {
      description: `Sanayi Devrimi'nin doğduğu topraklar olan Midlands bölgesinin tarihsel endüstriyel evrimi, dijitalleşmeye geçişi anlatan makalelerle işlenir. Donanım ve imalat sanayisinin Endüstri 1.0'dan Endüstri 4.0'a uzanan yolculuğunu anlatan İngilizce terimler dağarcığınıza eklenir. Bir ülkenin teknolojik altyapı çöküşlerini anlatan vaka analizlerini okuyup özetleme teknikleriyle okuduğunu sentezleme yetisi artırılır. Sunum yetenekleri çalıştırılarak, geçmiş teknolojilerle güncel yazılımların kıyaslaması dinleyicilere İngilizce aktarılır. Teknik İngilizcenin sanayisel formlarıyla pratik yapılır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-6' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=midlands+england+industrial+revolution+history' },
      ],
    },
    9: {
      description: `Dönemin başından bu yana işlenen okuma parçalarından yola çıkarak İngilizce okuma (Reading), anlama ve kelime kapasitesinin ölçüldüğü teorik sınavdır. Mühendis adaylarının, sadece kodlama dillerine değil, yabancı bir dilin karmaşık ve uzun paragraf yapılarına da odaklanıp içinden istenilen veriyi çıkarabilme yeteneği sınanır. Okuma hızınız ve bilmediğiniz kelimeleri bağlamdan tahmin etme başarınız değerlendirilerek uluslararası sınavlara hazırlık seviyeniz analiz edilir. Konuşma pratiklerindeki akıcılığın ve özgüvenin ne ölçüde geliştiği gözlemlenir. Global iletişim yetkinliğinizin ara onay noktasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '#' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '#' },
      ],
    },
    10: {
      description: `İngiltere'nin kuzey kırsalları, doğa koruma alanları ve sınır bölgelerinin karakteristik özelliklerini anlatan doğa-kültür ağırlıklı metinler üzerine çalışılır. Doğa ve çevre terminolojisi ile harmanlanan okumalar, sürdürülebilir teknoloji veya yenilenebilir enerji yazılımları hakkında makaleler okumak için dilsel temel atar. Topluluk karşısında tartışma aktivitelerinde teknolojinin çevreye etkisi konusunda güçlü ve ikna edici İngilizce argümanlar kurma pratiği yapılır. Farklı yöresel aksanların dinleme egzersizleriyle tanıtılması, global toplantılardaki telaffuzlara adaptasyonu kolaylaştırır. Esnek okuma ve çok yönlü anlama becerileri hedeflenir.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-7' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=yorkshire+dales+and+northern+england+documentary' },
      ],
    },
    11: {
      description: `İngiltere'nin Güneybatı sahillerinin turizm, tarih ve denizcilik faaliyetlerini işleyen turistik ve ekonomik okuma metinleri incelenir. Yabancı müşterilere yazılım projeleri (turizm rezervasyon sistemleri gibi) sunarken ihtiyaç duyulacak coğrafi ve hizmet sektörü İngilizcesi pratik edilir. Bir uygulamayı veya sistemi detaylarıyla tanıtan yazıları okuyup benzer formlarda İngilizce sunumlar hazırlama etkinlikleri yapılır. Müşteri memnuniyeti ve deneyim odaklı kelime yapılarıyla iş İngilizcesi dağarcığı desteklenir. Anlatıma ikna edici ve çekici bir ton katmanın dilsel stratejileri kavranır.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-8' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=south+west+england+cornwall+culture' },
      ],
    },
    12: {
      description: `Kendi özerk yapısı, tarihi, buluşları ve eğitim sistemiyle İskoçya'nın kültürel ve teknolojik profili İngilizce olarak analiz edilir. İskoçya'nın bilimsel keşiflerdeki rolünü okuyarak, bilim tarihi ve teknolojik inovasyonları anlatan akademik İngilizce metinleri tarama becerisi ivme kazanır. Farklı aksanlar serisinin en zorlusu olan İskoç aksanına maruz kalmak, uluslararası toplantılarda her türlü telaffuzu anlayabilme yeteneğini güçlendirir. İki farklı kültürün benzerliklerini zıtlık bağlaçlarıyla akıcı bir şekilde tartışma pratiği pekiştirilir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-9' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=scotland+history+culture+and+innovations' },
      ],
    },
    13: {
      description: `Madencilik geçmişi, sanayinin dönüşümü ve dilin korunması gibi konular üzerinden Galler'in sosyal ve ekonomik yapısını anlatan metinler okunur. Eski sanayi tesislerinin nasıl modern siber güvenlik ve bilişim kümelerine dönüştürüldüğünü anlatan vaka çalışmalarını okuyarak sektörel dönüşüm İngilizcesi geliştirilir. Doğal dillerin korunması ile programlama dillerinin eskimesi arasında analojiler kurularak sistemlerin hayatta kalma mücadeleleri İngilizce konuşma konusu yapılır. Sınıf içi soru sorma/cevaplama pratikleri ile iş mülakatlarında kullanacağınız İngilizce düşünme hızı maksimize edilir. Kendiliğinden iletişim kurma özgüveni desteklenir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-10' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=wales+culture+history+and+geography' },
      ],
    },
    14: {
      description: `Politik süreçlerin çözümü, ekonomik toparlanma ve Kuzey İrlanda'nın kendine has sosyo-kültürel dinamikleri İngilizce araştırma metinleriyle incelenerek dönem tamamlanır. Bir toplumdaki kriz süreçlerinin yazılı metinlere nasıl döküldüğünü okumak, yazılım şirketlerindeki büyük krizleri anlatan resmi PR metinlerini anlamanızı sağlar. Karmaşık olay örgüsünü kafada İngilizce modelleyip özetleme sanatının zirvesine ulaşılır. Bir bilgisayar mühendisi olarak sadece kod okuyan değil; farklı kültürleri ve uluslararası makaleleri akıcı bir şekilde anlayıp tartışabilen bir dünya vatandaşı formasyonuyla dil eğitimi noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-11' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=northern+ireland+history+and+culture+explained' },
      ],
    },
  },
};

export const weeklyContentByCourse: WeeklyContentByCourse = Object.fromEntries(
  ALL_COURSE_NAMES.map((courseName) => [
    courseName,
    {
      ...createCourseTemplate(courseName),
      ...(WEEKLY_CONTENT_OVERRIDES[courseName] ?? {}),
    },
  ])
) as WeeklyContentByCourse;

export const defaultWeeklyContentByWeek: WeeklyContentByWeek = createCourseTemplate('Bu ders');

export const getWeeklyContent = (courseName: string, week: number): WeeklyContentItem | undefined => {
  const courseContent = weeklyContentByCourse[courseName];
  if (courseContent?.[week]) {
    return courseContent[week];
  }

  // Eger ders adi listede yoksa fallback olarak genel 16 hafta icerigini kullan.
  if (defaultWeeklyContentByWeek[week]) {
    return defaultWeeklyContentByWeek[week];
  }

  return undefined;
};
