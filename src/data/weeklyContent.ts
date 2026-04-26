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
  // Buraya yalnizca ozellestirmek istedigin ders/hafta ekle.
  // description: Markdown string (baslik, liste, kalin vb.); ayri .md dosyasi gerekmez, modalda render edilir.
  // Ornek:
  // description: `## Bu hafta
  // - Madde bir
  // - Madde iki
  //
  // **Not:** Ek bilgi.`,
  // 'BMB112 Web Teknolojileri': {
  //   1: {
  //     description: 'HTML giris, temel etiketler ve semantik yapi.',
  //     resources: [
  //       { title: '1. Hafta Sunum', type: 'PDF', href: '/docs/bmb112/week1.pdf' },
  //       { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://...' },
  //     ],
  //   },
  // },
<<<<<<< HEAD
  'BMB103 Bilgisayar Mühendisliğine Giriş': {
    1: {
      description: `Bilgisayar mühendisliği serüvenine başlarken bölümün işleyişini, akademik takvimi ve üniversite kaynaklarını tanımak kritik bir ilk adımdır. Özellikle staj süreçlerinin nasıl yönetileceğini erken öğrenmek, kariyer planlaması için büyük avantaj sağlar. Bu hafta, öğrencilerin üniversite ekosistemine ve idari süreçlere adaptasyonunu hedefler. Kariyer rotanızı çizerken bu organizasyonel yapıyı bilmek size uzun vadede çok zaman kazandıracaktır. Öğrencilerin vizyonlarını genişletmeleri ve bölümün sunduğu fırsatları en verimli şekilde kullanmaları amaçlanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://cmf.nku.edu.tr/DersKatalogu/21/s/529/806/0' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar+m%C3%BChendisli%C4%9Fi+oryantasyon' },
      ],
    },
    2: {
      description: `Bir bilgisayar mühendisi olarak, yazılımın üzerinde koştuğu donanımı anlamak kesinlikle zorunludur. İşlemci (CPU), bellek (RAM), anakart ve depolama birimlerinin birbirleriyle nasıl veri alışverişi yaptığı incelenir. Bu hafta, yazacağınız kodların fiziksel dünyada donanıma nasıl etki ettiğinin temelini oluşturur. Donanım darboğazlarını analiz edebilmek ve sistem performansını ölçmek için bu mimari bilinmelidir. IT terminolojisine giriş yapılarak sektörel iletişim becerileri sağlamlaştırılır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=bilgisayar%C4%B1n+temel+bile%C5%9Fenleri+bilgisayar+m%C3%BChendisli%C4%9Fi' },
      ],
    },
    3: {
      description: `Makinelerin dilini anlamak için ikilik (binary), sekizlik (octal), onluk (decimal) ve on altılık (hexadecimal) sayı sistemleri öğrenilir. Bilgisayarların veriyi alt seviyede (low-level) nasıl sakladığı, okuduğu ve işlediği detaylıca kavranır. İkilik sistemde toplama, çıkarma gibi mantıksal işlemler ve tabanlar arası dönüşümler pratik edilir. Bu teorik temel; ağ yapıları, gömülü sistemler ve düşük seviyeli programlama için hayati önem taşır. Konu, bilgisayarın donanımsal sınırlarını ve hesaplama mantığını keşfetmenizi sağlar.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_fundamentals/computer_number_system.htm' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=say%C4%B1+sistemleri+bilgisayar+kavramlar%C4%B1' },
      ],
    },
    4: {
      description: `Dijital elektronik ve bilgisayar mimarisinin sarsılmaz matematiksel temeli olan Boole cebri incelenir. AND, OR, NOT, XOR gibi mantık kapılarının işleyişi, devre tasarımları ve doğruluk tabloları öğrenilir. Yazılımda kurgulayacağınız karmaşık 'if-else' koşullarının arkasında yatan asıl donanımsal mantığı açıklar. Mantıksal ifadeleri sadeleştirerek daha az kaynak tüketen ve verimli algoritmalar kurma yeteneği kazandırır. Donanım (hardware) ile yazılım (software) dünyasının kesiştiği en temel soyutlama katmanıdır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/boolean-algebra/' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=boole+cebri+mant%C4%B1k+kap%C4%B1lar%C4%B1' },
      ],
    },
    5: {
      description: `Yazılım geliştirmenin tam kalbi olan problem çözme ve algoritmik düşünme becerilerinin temelleri bu haftada atılır. Bir problemin bilgisayar tarafından hatasız çözülebilmesi için gereken adım adım mantıksal süreçler tasarlanır. Kod yazmaya geçmeden önce zaman ve bellek karmaşıklığını hesaba katarak en verimli yolu bulma stratejileri incelenir. Veri veya arka uç (backend) mimarisi gibi ileri seviye mühendislik alanlarında inşa edilecek büyük projelerin taşıyıcı kolonudur. İyi bir bilgisayar mühendisini sadece 'kod yazan' birinden ayıran en temel mühendislik yetkinliği buradadır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/dsa/dsa_intro.php' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=algoritma+nedir+programlamaya+giri%C5%9F' },
      ],
    },
    6: {
      description: `Zihinsel olarak kurulan soyut algoritmaların, evrensel sembollerle görsel bir haritaya dökülme sanatıdır. Başlangıç, bitiş, karar, döngü ve veri giriş/çıkış adımlarının standart geometrik şekillerle nasıl net bir şekilde ifade edileceği öğrenilir. Karmaşık program mantığını kodlamaya başlamadan önce sadeleştirip, olası mantık hatalarını (bug) daha tasarım aşamasında tespit etmeyi sağlar. Profesyonel ekip çalışmalarında, proje fikirlerini diğer mühendislere aktarmanın en etkili iletişim araçlarından biridir. Akış şemaları, kafanızdaki çözümleri somut mühendislik planlarına dönüştüren sağlam bir köprüdür.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/flowchart-in-programming/' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ak%C4%B1%C5%9F+%C5%9Femalar%C4%B1+algoritma+%C3%B6rnekleri' },
      ],
    },
    7: {
      description: `İnsanın bilgisayarla iletişim kurmasını sağlayan dillerin evrimi, seviyeleri (low-level vs. high-level) ve farklı paradigmaları incelenir. Derleyici (compiler) ile yorumlayıcı (interpreter) arasındaki yapısal farklar ve yazılan kodun makine diline nasıl çevrildiği kavranır. Yapısal, nesne yönelimli (OOP) ve fonksiyonel programlama dillerinin sektördeki kullanım senaryoları karşılaştırılır. Projenin türüne ve mimarisine göre en doğru teknoloji yığınını (stack) seçebilme vizyonu kazandırılır. Söz dizimi ezberlemek yerine, dillerin genel çalışma felsefesi ve arkasındaki tasarım mantığı aşılanır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/computer_programming/computer_programming_languages.htm' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=programlama+dilleri+seviyeleri+derleyici+yorumlay%C4%B1c%C4%B1' },
      ],
    },
    8: {
      description: `Donanım ile kullanıcı uygulamaları arasında yöneticilik yapan işletim sistemlerinin çekirdek (kernel) mimarisi tanıtılır. Bellek yönetimi, süreç (process) planlama, donanım kaynaklarının dağıtımı ve dosya sistemlerinin arka planda nasıl organize edildiği öğrenilir. Özellikle Linux gibi geliştirici odaklı ortamların çalışma prensipleri ve komut satırı kültürü vurgulanır. Yazılımlarınızın sistem kaynaklarını ne kadar tükettiğini analiz edebilmek için bu düşük seviyeli konseptlerin bilinmesi şarttır. Uygulamaların birbirine müdahale etmeden izole ve güvenli bir şekilde nasıl koşturulduğunun temelleri atılır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/operating-systems/' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=i%C5%9Fletim+sistemleri+nedir+bilgisayar+m%C3%BChendisli%C4%9Fi' },
      ],
    },
    9: {
      description: `Bilginin bellekte en verimli şekilde organize edilmesi, depolanması ve hızlıca geri çağrılması için kullanılan standart yapılar incelenir. Diziler (arrays), bağlı listeler (linked lists), yığınlar (stacks) ve kuyruklar (queues) gibi temel veri saklama modellerine pratik bir giriş yapılır. Seçeceğiniz veri yapısının, kurduğunuz algoritmanın çalışma hızını ve bellek tüketimini nasıl doğrudan etkilediği analiz edilir. Milyonlarca satırlık verilerle uğraşılacak büyük çaplı endüstriyel projelerde doğru yapıyı kurmak projenin kaderini belirler. Yazılım mülakatlarının ve ileri seviye yazılım mühendisliğinin tartışmasız en çok üzerinde durulan konusudur.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/dsa/' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veri+yap%C4%B1lar%C4%B1na+giri%C5%9F' },
      ],
    },
    10: {
      description: `Modern web ve mobil uygulamaların hafızası olan veritabanı sistemlerinin temel kavramları ve İlişkisel Veritabanı Yönetim Sistemleri (RDBMS) öğrenilir. Tablolar arası mantıksal ilişkilerin kurulması ve Yapılandırılmış Sorgu Dili (SQL) ile temel ekleme, okuma, güncelleme, silme (CRUD) işlemlerinin nasıl yapılacağı incelenir. Verinin kalıcılığını (persistence) sağlarken hız, güvenlik ve veri bütünlüğü kıstaslarının nasıl ustalıkla dengeleneceği tartışılır. Veri mühendisliği veya güçlü backend mimarilerine yönelmeyi hedefleyen mühendis adayları için kilit roldedir. Büyük sistemlerin bilgi yığınlarını anlamlı bir şekilde nasıl saklayıp yönettiğine dair geniş bir ufuk açar.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/sql/' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=veritaban%C4%B1+y%C3%B6netim+sistemleri+sql' },
      ],
    },
    11: {
      description: `Bilgisayar mühendisliği eğitiminin dünya çapındaki klasikleşmiş başlangıç noktası olan C dilinin tarihçesi ve sistem programlamadaki yeri öğrenilir. C'nin donanıma yakın yüksek performans sunan yapısı, derleme (compilation) aşamaları ve kütüphane bağlama işlemleri incelenir. Temel söz dizimi (syntax) kuralları, noktalı virgüllerin önemi ve kod bloklarının nasıl güvenli bir şekilde inşa edileceği kavranır. Python veya C# gibi diğer birçok modern programlama dilinin atası olduğu için, C dilini hakkıyla öğrenmek diğer teknolojilere adaptasyonu olağanüstü hızlandırır. Sadece ezbere kod yazmayı değil, arka planda makinenin nasıl çalıştığını hissetmeyi öğretir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://www.tutorialspoint.com/cprogramming/index.htm' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+dersleri+giri%C5%9F' },
      ],
    },
    12: {
      description: `Programın çalışma esnasında işlediği verileri geçici olarak tuttuğu bellek alanları olan değişkenler (variables) ve temel veri tipleri (int, float, char vb.) derinlemesine incelenir. C dilinde yazılmış her uygulamanın fırlatma rampası ve ana motoru olan \`main()\` fonksiyonunun anatomisi ve çalışma mantığı öğrenilir. İşletim sisteminin bellekte nasıl yer ayırdığı ve değişkenlerin geçerlilik alanları (scope) üzerinde durulur. Değişken tiplerinin RAM üzerinde tam olarak kaç bayt kapladığını bilmek, donanım kaynaklarını optimize etmenin ilk ve en önemli adımıdır. Satırların yukarıdan aşağıya doğru nasıl sırayla derlenip çalıştırıldığı pratik olarak test edilir.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://www.w3schools.com/c/c_variables.php' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+de%C4%9Fi%C5%9Fkenler+ve+veri+tipleri' },
      ],
    },
    13: {
      description: `Standart giriş/çıkış kütüphanesi (stdio.h) içinde yer alan ve programın ürettiği verileri ekrana yazdırmayı sağlayan \`printf\` fonksiyonunun dinamikleri detaylıca öğrenilir. Farklı türdeki veri tiplerini konsolda düzgün formatlayarak göstermek için \`%d\`, \`%f\`, \`%s\` gibi format belirleyicilerin (format specifiers) nasıl entegre edileceği incelenir. Kodun belirli adımlarında değişkenlerin anlık değerlerini konsola basabilmek, geliştirme sürecindeki hata ayıklamanın (debugging) en temel ve hayat kurtarıcı aracıdır. Satır atlama (\`\\n\`) veya sekme bırakma (\`\\t\`) gibi özel kaçış dizileriyle (escape sequences) çıktıları görsel olarak düzenleme pratikleri yapılır. Yazılımın dış dünyayla kurduğu iletişimin ilk heyecan verici adımı bu fonksiyonla atılır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/printf-in-c/' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+printf+kullan%C4%B1m%C4%B1' },
      ],
    },
    14: {
      description: `Kullanıcının klavyeden girdiği verileri okuyup eş zamanlı olarak program içindeki ilgili değişkenlere aktarmayı sağlayan \`scanf\` fonksiyonu ve çalışma mantığı öğrenilir. Bu sayede yazılan programlar sadece tekdüze çıktı veren statik yapılar olmaktan çıkıp, dış dünyadan gelen isteklere göre dinamik tepkiler üretebilir hale gelir. Verinin bellekteki tam ve doğru fiziksel adrese kaydedilebilmesi için ampersand (\`&\`) operatörünün kullanım zorunluluğu (pointer mantığına ilk göz kırpma) kavranır. \`printf\` ve \`scanf\` fonksiyonlarının interaktif bir şekilde birlikte kullanılmasıyla ilk konsol tabanlı mini uygulamalar geliştirilir. Bilgisayar ile insan arasındaki karşılıklı veri alışverişi (I/O) döngüsü tamamlanarak yapısal programlama temeli sağlamlaştırılır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.geeksforgeeks.org/scanf-in-c/' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=c+programlama+scanf+kullan%C4%B1m%C4%B1' },
      ],
    },
  },
  'FZK107 Fizik I': {
    1: {
      description: `Fizik dünyasına giriş yapılarak, doğadaki büyüklüklerin nasıl ölçüldüğü ve ifade edildiği öğrenilir. Bilgisayar grafiklerinde (computer graphics) ve oyun motorlarında yön ve hız hesaplamalarının temeli olan vektörler detaylıca incelenir. Üç boyutlu uzayda objelerin hareketini kodlarken vektörel çarpım ve bileşenlere ayırma işlemleri hayati önem taşır. Skaler ve vektörel verilerin yazılımda nasıl modelleneceğine dair mühendislik bakış açısı kazanılır. Bu temel matematiksel ve fiziksel araçlar, karmaşık fizik motorlarının inşasında ilk basamaktır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/linear-kinematics/vectors-kinematics/a/vectors-and-scalars' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+vekt%C3%B6rler' },
      ],
    },
    2: {
      description: `Cisimlerin uzaydaki hareketleri, ivme ve hız gibi kinematik kavramlar üzerinden matematiksel olarak modellenir. Oyun geliştirmede karakterlerin zıplaması, serbest düşmesi veya mermilerin atış hareketini simüle etmek için bu formüller doğrudan koda dökülür. Düzgün dairesel hareket prensipleri, endüstriyel otomasyonda kullanılan motorların ve eklemlerin dönüş mekaniklerini anlamanızı sağlar. Yazdığınız kodların fiziksel dünyadaki gerçekçi hareketleri nasıl taklit edebileceğinin algoritmik temelleri atılır. Hareket denklemleri, gerçek zamanlı animasyonların akıcılığını sağlayan temel formülleri barındırır.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/one-dimensional-motion' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+kinematik+at%C4%B1%C5%9F+hareketleri' },
      ],
    },
    3: {
      description: `Kinematiğin aksine, bu hafta hareketin kaynağı olan kuvvetler ve Newton'un hareket yasaları derinlemesine incelenir. Eylemsizlik, sürtünme ve yerçekimi gibi etkenler, fizik motorlarında objelerin birbirine uyguladığı tepkileri hesaplamak için algoritmalaştırılır. Bir dronun uçuş dinamiğini veya otonom araçların fren mesafesini hesaplayan yazılımlar tam olarak bu kurallara dayanır. Esneklik ve kayma modülleri, bilgisayar donanımlarının mekanik dayanımını ve haptik geribildirim tasarımlarını anlamada rol oynar. Doğadaki kuvvet etkileşimleri anlaşılarak, yazılım simülasyonlarının gerçekçiliği ve donanım uyumu artırılır.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/forces-newtons-laws' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+dinamik+newton+yasalar%C4%B1' },
      ],
    },
    4: {
      description: `Bir sistemde yapılan iş ve enerjinin bir formdan diğerine nasıl dönüştüğü, korunum yasalarıyla ele alınır. Bilgisayar mühendisliğinde, özellikle IoT ve gömülü sistemlerde batarya ömrünü optimize etmek için güç ve enerji tüketimi hesaplamaları fiziksel ilkelere dayanır. Korunumlu kuvvetlerin analizi, algoritmaların hesaplama maliyetlerini (computational cost) doğadaki enerji verimliliğine benzer şekilde optimize etmeye ilham verir. Potansiyel ve kinetik enerji dönüşümleri, simülasyonlarda enerji kayıplarını hesaplayarak daha tutarlı sistem modelleri kurmayı sağlar. Doğanın verimlilik prensipleri, donanım mimarisinde soğutma ve güç yönetimi sistemlerini anlamak için şarttır.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/work-and-energy' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+i%C5%9F+g%C3%BC%C3%A7+enerji' },
      ],
    },
    5: {
      description: `Çok parçacıklı sistemlerin kütle merkezi ve momentumun korunumu ilkeleri detaylıca öğrenilir. Oyun motorlarında objelerin birbirine çarpma (Collider) anındaki fiziksel tepkileri ile esnek ve esnek olmayan çarpışmaların matematiksel arka planı bu konudur. Otonom araç kaza simülasyonları veya bilgisayar grafiğindeki parçacık sistemleri (particle systems) geliştirilirken momentum formülleri kullanılır. İtme ve momentum değişimi, robotik kollarda hassas tutma işlemlerinin kontrol algoritmalarına yön verir. Dijital dünyadaki etkileşimlerin gerçeğe en yakın şekilde işlenmesini sağlayan anahtardır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/linear-momentum' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+momentum+ve+%C3%A7arp%C4%B1%C5%9Fmalar' },
      ],
    },
    6: {
      description: `Çizgisel hareketten çıkılarak, cisimlerin bir eksen etrafındaki dönüş dinamikleri, tork ve eylemsizlik momenti kavramlarıyla incelenir. Soğutucu fanlar, optik sürücüler veya robotik eklemler gibi dönen donanım bileşenlerinin hareket algoritmaları bu kurallara göre kurgulanır. Açısal momentumun korunumu, uyduların veya mobil cihazlardaki jiroskop (gyroscope) sensörlerinden gelen verilerin işlenmesinde temeldir. Üç boyutlu uzayda objelerin kendi ekseni etrafında dönüşü (rotation) eylemsizlik matrisleri ile hesaplanarak kodlanır. Yazılımcıların, donanımın dairesel hareket sınırlarını ve stabilitesini analitik olarak modelleyebilmesi sağlanır.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/torque-angular-momentum' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+tork+ve+a%C3%A7%C4%B1sal+momentum' },
      ],
    },
    7: {
      description: `Dönme dinamiği ile katı cisimlerin statik denge koşulları birleştirilerek mekanik sistemlerin nasıl stabil kalacağı analiz edilir. Bir robotun veya sunucu kasasının (server rack) ağırlık merkezi hesabı yapılarak fiziksel olarak devrilmeden nasıl konumlandırılacağı planlanır. Kuvvet çiftleri ve hareket denklemleri, endüstriyel kolların kalibrasyon yazılımlarında hareket ve tork hesaplamalarında sıkça kullanılır. Statik denge, sensör verilerindeki gürültüleri filtreleyerek durağan durumları tespit eden algoritmaların mantığını oluşturur. Donanımsal sistemlerin kararlılık analizlerini yazılımsal olarak simüle etmek için gerekli altyapıyı sunar.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: 'https://openstax.org/books/university-physics-volume-1/pages/12-1-conditions-for-static-equilibrium' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+kat%C4%B1+cisimlerin+dengesi' },
      ],
    },
    8: {
      description: `Sistemlerin denge noktası etrafındaki periyodik salınımları, sönümlü hareket ve rezonans olayları incelenir. Bilgisayar ağlarında (networking) ve sinyal işlemede karşımıza çıkan dalga formları, frekans ve genlik kavramlarının fiziksel tabiatı kavranır. Saat vuruşları (clock cycles) üreten kristal osilatörlerin ve alternatif akım devrelerinin temel çalışma mantığı basit harmonik harekettir. Sönümlü salınımlar ve rezonans prensipleri, donanım titreşimlerinin mekanik parçalara zarar vermesini engelleyen veri analiz yöntemlerine yön verir. Ses işleme (audio processing) algoritmaları geliştirilirken dalgaların yapısal karakteristikleri temel alınır.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+basit+harmonik+hareket' },
      ],
    },
    9: {
      description: `Öğrencilerin dönemin başından bu yana öğrendikleri fizik yasalarını, analitik düşünme ve problem çözme yetenekleriyle harmanlayarak gösterecekleri ilk büyük değerlendirmedir. Yazılım mühendisliğinde kodların hata ayıklama testlerinden geçmesi gibi, mühendis adaylarının da bilimsel düşünce altyapısı bu sınavla sınanır. Mekanik, kinematik ve dinamik konularındaki teorik temelin, kodlanabilir gerçek dünya problemlerine ne kadar uyarlanabildiği ölçülür. Eksik öğrenilen algoritmik ve fiziksel modellerin tespit edilerek, akışkanlar ve termodinamik konularına daha sağlam bir zeminle geçilmesi hedeflenir. Bu hafta, mühendislik eğitimindeki matematiksel ve mantıksal sürecin ara kontrol noktasıdır.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '' },
      ],
    },
    10: {
      description: `Sıvı ve gazların dinamiği, basınç, yüzey gerilimi ve Bernoulli ilkesi gibi akışkanlar mekaniği alanları öğrenilir. Yüksek performanslı bilgisayar donanımlarında hayati olan sıvı soğutma (liquid cooling) sistemlerinin tasarımında basınç ve akış hızı algoritmaları kullanılır. Aerodinamik simülasyonlar veya hava durumu modelleme yazılımları, süreklilik denklemlerinin büyük verilerle çözülmesine dayanır. Çip ve yarı iletken üretim tesislerindeki hassas hava akış sistemlerinin mantığı bu yasalara bağlıdır. Doğadaki akıcı ve sürekli fiziksel sistemlerin, ayrık (discrete) bilgisayar mantığıyla nasıl simüle edileceği üzerine güçlü bir vizyon katar.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/fluids' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+ak%C4%B1%C5%9Fkanlar+mekani%C4%B1' },
      ],
    },
    11: {
      description: `Makroskobik dünyadan mikroskobik boyuta inilerek moleküllerin kinetik teorisi ve istatistiksel durum denklemleri incelenir. Yarı iletken teknolojisi ve nano boyutlardaki işlemci üretiminde, maddelerin moleküler davranışlarını modellemek modern mimarinin temelidir. Büyük veri (Big Data) analitiğinde kullanılan "rastgele yürüyüş" ve istatistiksel olasılık algoritmaları, moleküler hareket modellerinden büyük ölçüde ilham alır. Enerjinin sistem içindeki eş dağılımı ilkesi, kuantum bilgisayar mimarilerinin ısıl durum analizlerinde ve malzeme simülasyonlarında kullanılır. Olasılığa dayalı fizik prensipleri, günümüzdeki makine öğrenmesi algoritmalarının kök felsefesine ışık tutar.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://hyperphysics.phy-astr.gsu.edu/hbase/Kinetic/kinthe.html' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+molek%C3%BCler+kinetik+teori' },
      ],
    },
    12: {
      description: `İdeal sistem modellerinin ötesine geçilerek, gerçek gazların davranışları ve donanımları doğrudan etkileyen ısıl genleşme mekanikleri öğrenilir. Bilgisayar anakartlarındaki iletken yolların ve çiplerin ısıyla genleşerek zamanla mikro çatlaklara uğramasını öngören hesaplamaların temelidir. Sensörlerden toplanan anlık sıcaklık verilerinin kalibrasyonu ve işlemci çekirdeklerindeki aşırı ısınmayı denetleyen "thermal throttling" algoritmaları bu yasalarla yazılır. İç enerji kavramı, büyük veri merkezlerinin ve bulut sunucularının termal yönetimini planlayan devasa yazılımların çekirdeğini oluşturur. Donanım sağlığı (hardware health) ve yazılımsal güç yönetimi arasındaki hayati mühendislik köprüsü bu konularda kurulur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://courses.lumenlearning.com/suny-physics/chapter/13-6-non-ideal-gas-behavior/' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+s%C4%B1cakl%C4%B1k+ve+genle%C5%9Fme' },
      ],
    },
    13: {
      description: `Enerjinin korunumu ilkesinin termodinamik yüzü olan birinci yasa ile ısının mekanik işe dönüşümü detaylandırılır. Yüksek hesaplama gücü gerektiren bilgisayar operasyonlarında tüketilen elektriğin iç enerjiye ve doğrudan ısıya dönüşümü matematiksel olarak analiz edilir. Endüstriyel IoT ağlarında ve çevresel otomasyon projelerinde, sıcaklık değişimlerini sürekli okuyup çevreyle etkileşime giren akıllı algoritmalar tasarlanırken bu fiziksel sınırlar referans alınır. Donanım seviyesindeki enerji verimliliği ve ısı dağılımı (heat dissipation) metrikleri tam anlamıyla birinci yasanın uygulamalarıdır. Sistem sınırları içindeki enerji giriş-çıkış dengesini algoritmik düzeyde koruma bilinci aşılanır.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/a/what-is-the-first-law-of-thermodynamics' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+termodinami%C4%9Fin+birinci+yasas%C4%B1' },
      ],
    },
    14: {
      description: `Termodinamiğin zirvesi olan maksimum verimlilik sunan Carnot çevrimi ve evrendeki kaçınılmaz düzensizliği anlatan entropi yasası işlenir. Bilgisayar bilimlerindeki veri sıkıştırma algoritmalarında kullanılan "Shannon Entropisi", fiziksel entropi yasası ile mükemmel bir paralellik kurularak öğretilir. İkinci yasa, yazılım ve donanım bileşenlerinin hiçbir zaman yüzde yüz kusursuz verimle çalışamayacağını mühendislere matematiksel kanıtlarla gösterir. Sunucu tarlalarındaki muazzam atık ısının sistemden tahliyesi veya enerji kayıplarının yönetilmesi gibi makro mühendislik kararları bu prensipler üzerine inşa edilir. Dönem, mühendisliğin varoluş amacı olan kısıtlı kaynakları en verimli algoritmalarla yönetme mantığıyla son bulur.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/a/what-is-the-second-law-of-thermodynamics' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=fizik+1+termodinami%C4%9Fin+ikinci+yasas%C4%B1+entropi' },
      ],
    },
  },
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
      description: `Verilerin iki boyutlu tablolar (array of arrays) halinde bilgisayar belleğine haritalandırılmasının matematiksel teorisidir. Görüntü işleme projelerinde (örneğin OpenCV ile) her bir fotoğrafın piksellerden oluşan devasa bir matris olduğu gerçeğiyle yüzleşilir. Matrislerde toplama, çıkarma ve çarpma işlemleri, resimler üzerinde filtreleme veya renk değiştirme kodlarının temelini oluşturur. Döngüler (loops) kullanarak iki boyutlu diziler üzerinde işlem yapma pratiğini matematiksel olarak destekler. Veriyi yapısal bir grid içinde yönetme becerisi aşılanır.`,
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
        { title: '8. Hafta Sunum', type: 'PDF', href: '' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '' },
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
      description: `Doğadaki büyüme hızlarını anlatan üstel fonksiyonlar ve bunların tersi olan logaritmik yapılar işlenir. Bilgisayar mühendisliğinde veri yapılarının (Örneğin Binary Search Trees) arama hızını belirleyen $O(\log n)$ algoritma karmaşıklığı mantığı tamamen logaritmaya dayanır. Virüs yayılımları veya ağdaki veri trafiği patlamaları gibi katlanarak artan süreçlerin modellenmesi üstel fonksiyonlarla kodlanır. Kriptografi ve güvenlik protokollerinde büyük asal sayılarla yapılan hesaplamaların arka planını oluşturur. Logaritmik ölçekleme, devasa veri setlerinin grafiksel olarak anlamlı şekilde gösterilmesi (data visualization) için şarttır.`,
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
      description: `Klasik kartezyen (x, y) düzlemi yerine, bir orijine uzaklık (r) ve açı ($\theta$) bazlı çalışan kutupsal (polar) koordinat sistemlerine geçilir. Radar sistemleri, LiDAR sensörleri veya sonar verilerini okuyan yazılımların algoritmaları tamamen kutupsal veriler üretir. Dairesel hareket eden donanımların ve dairesel veri grafiklerinin (polar charts) modellenmesi kartezyen sisteme göre çok daha az işlemci gücü tüketir. Oyun geliştirmede hedef takip (homing missile) mekanikleri yazılırken açılara dayalı yönelim mantığını kurgular. Matematiksel referans sistemini değiştirerek, bazı algoritmaların mucizevi şekilde basitleştirilebileceğini gösterir.`,
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
        { title: '9. Hafta Sunum', type: 'PDF', href: '' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '' },
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
        { title: '9. Hafta Sunum', type: 'PDF', href: '' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '' },
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
      description: `Kısa süreli enerji depolayan ve ani güç dalgalanmalarını filtreleyen donanım bileşenleri olan kapasitörlerin (sığaçlar) fiziksel yapıları öğrenilir. Yüksek performanslı bilgisayar anakartlarında (örneğin Ryzen veya Intel tabanlı sistemlerde) işlemciye anlık temiz güç sağlayan VRM yapılarının can damarı kapasitörlerdir. Ses kartlarındaki sinyal gürültülerini filtreleyerek Sennheiser veya Sony gibi üst düzey kulaklıklara yüksek sadakatli (high-fidelity) ses iletilmesini sağlayan filtreleme algoritmalarının analog karşılığıdır. Devre şemalarını analiz edebilmek ve donanım limitlerini yazılım koduna uygun kalibre etmek için şarttır. Enerjinin sistem içinde nasıl tamponlandığı keşfedilir.`,
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
      description: `Karmaşık devre ağlarını çözmek için kullanılan Kirchhoff'un akım ve voltaj yasaları (düğüm ve çevre denklemleri) pratik edilir. Gömülü sistem yazılımı geliştirirken voltmetre veya osiloskop ile okunan sensör verilerinin matematiksel doğruluğunu test etmek için bu kurallar referans alınır. RC (Direnç-Kapasitör) devreleri, sinyal işlemede ve yazılımsal zamanlama döngülerinde (timer algorithms) donanımsal gecikme (delay) yaratmanın klasik yöntemidir. Çizge teorisi (Graph theory) kullanarak karmaşık algoritmik ağların (networks) optimizasyonunu hesaplamaya inanılmaz derecede benzer bir disiplindir. Analog donanım hatalarını yazılımsal verilerle bulma (debugging) vizyonu gelişir.`,
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
        { title: '8. Hafta Sunum', type: 'PDF', href: '' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: '' },
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
      description: `İntegrasyon sınırlarından birinin veya ikisinin birden sonsuzluğa ($\infty$) gittiği veya içeride asimptot barındıran durumların hesaplanabilirliği (yakınsama/ıraksama) incelenir. Olasılık yoğunluk fonksiyonlarında (örneğin Normal Dağılım Çan Eğrisi) devasa veri yığınlarının tüm evrensel aralıklardaki davranışını hesaplamak için veri mühendisliğinin ana aracıdır. Sonsuz çalışma süresi beklenen sistemlerin veya kararlı durum (steady-state) analizlerinin bilgisayarlarda nasıl simüle edileceğinin limit teorisiyle birleşimidir. Sonsuzluk kavramının bilgisayar belleğinde overflow (taşma) yapmadan nasıl sonlu bir değere (yakınsama) atanabileceğini öğretir. Süreksizlik noktalarını tespit etmek (error detection) için kritik bir teoridir.`,
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
      description: `Eğrilerin ve integrallerin $x,y$ kartezyen sistemi yerine radyan açı ($\theta$) ve uzaklık ($r$) ile tanımlandığı kutupsal sistemde alan hesaplamaları yapılır. Radar, LiDAR veya sonar gibi dairesel tarama yapan sensör verilerini analiz eden yapay zeka botları ve araçları doğrudan bu kutupsal sistem üzerinden kodlanır. Oyunlarda karakterin görüş açısını (FOV) veya patlama etki alanlarını (AoE) hesaplamak kartezyene göre bu sistemde çok daha kolay ve performanslıdır. Görüntü işlemede (OpenCV) dairesel objeleri tespit ederken Hough dönüşümleri bu matematiksel felsefeye sırtını dayar. Problemin bulunduğu koordinat uzayını değiştirerek algoritma karmaşıklığını düşürme stratejisidir.`,
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
        { title: '9. Hafta Sunum', type: 'PDF', href: '' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: '' },
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
      description: `Belirli bir geçmiş zamanda tamamlanmış eylemleri bildiren "Past Simple" zamanın detaylı zaman zarfları (ago, last, yesterday) ile pratikleri yapılır. Yazılım log dosyalarını, "Server çöktü - Dün saat 5'te" (The server crashed yesterday at 5 PM) gibi net ve kanıta dayalı ifadelerle okuma ve yazma becerisi kazandırılır. Jira veya Github üzerinden yapılan günlük (Daily Scrum) toplantılarda takım arkadaşlarına bir gün önce bitirilen görevleri raporlamanın standart formülüdür. Eski sürümdeki (legacy) sistem değişikliklerini veya güvenlik ihlallerinin ne zaman gerçekleştiğini kronolojik ifade etmeyi öğretir. Eylemle zaman bağlantısını net ve kesin kurma pratiği aşılanır.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+ge%C3%A7mi%C5%9F+zaman+zaman+zarflar%C4%B1+ago+last+yesterday' },
      ],
    },
    2: {
      description: `Sıfatlar kullanılarak iki veya daha fazla sistemin, algoritmanın veya durumun İngilizce olarak yapısal karşılaştırmaları (Comparatives/Superlatives) öğrenilir. Donanım veya yazılım teknolojilerini değerlendirirken "Python is slower than C" veya "This is the most efficient algorithm" kalıplarıyla teknik analiz yapabilmenizi sağlar. Yurt dışı staj ve üniversite başvurularınızda (Örneğin Erasmus'ta farklı seçenekleri kıyaslarken) hedeflerinizi anlatmak için sıkça kullanacağınız yapıdır. Farklı veritabanı çözümlerinin performans kıyas raporlarını (benchmark tests) İngilizce kaynaklardan okuma yetisini artırır. Teknik olarak üstünlük ve denklik belirtme kabiliyetleri geliştirilir.`,
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparative-and-superlative-adjectives' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=comparatives+and+superlatives+ingilizce+kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma' },
      ],
    },
    3: {
      description: `Sadece nesneleri (sıfatlarla) değil, eylemlerin nasıllığını (zarflarla) karşılaştırma yapıları incelenerek sistem çalışma hızları ve verimlilikleri ifade edilir. Bir algoritmanın diğerinden "daha hızlı" (faster) çalışması ile "daha verimli bir şekilde" (more efficiently) çalışması arasındaki İngilizce gramer farkı çözülür. Yüksek sadakatli (high-fidelity) bir kulaklığın sesi "daha net vermesi" (clearer) gibi donanımsal incelemeleri (hardware reviews) yabancı forumlarda okuma beceriniz gelişir. Sunucunun verileri nasıl işlediğine dair zarf/durum bildirimlerini İngilizce hatasız iletme stratejileridir. Detaylı durum betimlemeleriyle dilin sınırları genişletilir.`,
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparative-and-superlative-adverbs' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+zarflarla+kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma' },
      ],
    },
    4: {
      description: `Planlı gelecek (going to) ve eldeki verilere dayalı güçlü tahmin yapma kalıpları ile fiillerden sıfat üretme kuralları (e.g. interest -> interesting/interested) incelenir. Yazılım projenizin yol haritasını (Roadmap) yabancı yatırımcılara sunarken veya önümüzdeki ayki geliştirme planlarınızı izah ederken bu net gelecek kalıpları şarttır. Veri mühendisliği (Data Engineering) projelerinde istatistiklere dayanarak "Server is going to overload" gibi sistem tahminlerini (predictive analytics) dillendirmenin aracıdır. "Broken code", "developing technology" gibi fiilden türeyen teknik sıfatlar İngilizce okuma hızını inanılmaz artırır. Geleceğe dair mühendislik projeksiyonları dil kalıplarına dökülür.`,
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-the-future' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+planl%C4%B1+gelecek+zaman+ve+s%C4%B1fat+t%C3%BCretme' },
      ],
    },
    5: {
      description: `Yakın zamanda olmuş, etkisi süren Present Perfect Tense zaman zarfları (just, already, yet) ve kişisel tecrübe sorgulamaları (Have you ever...?) işlenir. Takım içi mesajlaşmalarda (Slack/Discord) "I have *just* pushed the code" (Kodu az önce yolladım) veya "We haven't fixed the bug *yet*" (Hatayı henüz çözmedik) kalıpları yazılımcıların en çok kurduğu cümlelerdir. İş veya staj mülakatlarında IK uzmanlarının "Have you ever used Python?" şeklindeki tecrübe sorularına profesyonel cevaplar verebilmenin ön şartıdır. Yaşanan eylemin anlık durum güncellemelerini (Status update) eşzamanlı bildirme yeteneği kazandırır. Zamanlar arası anlamsal köprü kurma vizyonu sağlanır.`,
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=present+perfect+tense+zaman+zarflar%C4%B1+yet+just+already' },
      ],
    },
    6: {
      description: `Geçmişte başlayıp hala devam eden eylemler (Present Perfect Continuous) ile 'since/for' kullanımı ve miktar bildiren 'too/enough' kalıpları ele alınır. "We have been developing this bot *since* March" (Bu botu Mart ayından beri geliştiriyoruz) diyerek projelerin süreç uzunluklarını (duration) vurgulama tekniğidir. Bellek (RAM) sınırlarına yaklaşan bir sistem için "The data is *too* large" (Veri çok büyük) veya "Not *enough* memory" ifadeleriyle sistem darboğazları izah edilir. Süreklilik bildiren yapıların algoritmik devamlılık döngülerine (continuous loops) dilbilgisel olarak benzediği fark edilir. Zaman dilimlerini esnek ve bağlamsal kullanma pratiğidir.`,
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect-continuous' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=present+perfect+continuous+for+since' },
      ],
    },
    7: {
      description: `Karşılaştırma yapıları, geçmiş ve gelecek zamanlar ile süreç bildiren zaman kalıplarının kağıt üzerinde ve pratik olarak sınandığı ara değerlendirmedir. Mühendislik İngilizcesinin temeli olan durum bildirme, zaman planlaması ve kıyaslama yeteneklerinin gramer doğruluğu (syntax accuracy) test edilir. Yabancı dilde okuduğunu anlama seviyesinin (comprehension level) sektör literatürünü takip edip edemeyeceği dolaylı olarak ölçümlenir. Öğrencilerin Erasmus gibi uluslararası hedefleri doğrultusunda eksik kaldığı İngilizce yapı taşları tespit edilir. Gramer yapılarının kalıcı hafızaya kodlanması için kritik bir duraktır.`,
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: '' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: '' },
      ],
    },
    8: {
      description: `Geçmişte süregelen ve başka eylemlerce kesilen durumların anlatıldığı (Past Continuous) ve "when/while" bağlaçlarının ileri pratikleri yapılır. Sistem loglarında sıklıkla aranan asenkron hata raporlamalarının, "While the bot was scraping data, the connection was lost" şeklindeki ifade mantığıdır. Kesinti yönetimi (Interrupt handling), bilgisayar işletim sistemlerinin arka planında gerçekleşirken, bunun uluslararası dokümanlarda nasıl cümlelere döküldüğünü gösterir. Aynı anda gerçekleşen paralel olayların (multi-threading) dildeki ifadesini net ve kurallı kullanmayı öğretir. Karmaşık senaryoları olay sırasına göre kurgulama vizyonu katar.`,
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=past+continuous+tense+when+while+kullan%C4%B1m%C4%B1' },
      ],
    },
    9: {
      description: `Eylemi yapanla etkilenenin aynı olduğu dönüşlü zamirler (myself, yourself vb.) ve sınıf içi inisiyatif alma üzerine konuşma pratikleri işlenir. Bilgisayar bilimindeki özyinelemeli (Recursive) fonksiyonların veya kendi kendini çağıran kod bloklarının dil yapısındaki tam felsefi karşılığıdır. "Sistem kendini yeniden başlatacak" (The system will restart *itself*) gibi otomasyon süreçlerini ve IoT bildirimlerini hatasız ifade etmek için hayati bir yapıdır. Kendine yetme ve kendi problemlerini çözme becerisi, dilde dönüşlü yapıları kullanarak bağımsız bir mühendis profili çizer. Otonom donanım veya yazılım hareketlerinin ifadeleri zenginleştirilir.`,
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/reflexive-pronouns' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=reflexive+pronouns+d%C3%B6n%C3%BC%C5%9Fl%C3%BC+zamirler+ingilizce' },
      ],
    },
    10: {
      description: `Anlık gelişen olaylara karşı "will" kullanımı ile reaksiyon alma ve ihtimal/kesinlik derecelerini (must, may, might, can't) ifade etme kuralları öğrenilir. Kriz anlarında, örneğin bir sunucu çöküşünde anlık aksiyon alırken "I *will* restart the server" diyerek takım liderine hızlı karar bildirme yetisidir. Bir bug (hata) araştırırken "The problem *might* be in the database" diyerek olasılık derecelerini doğru İngilizceyle takım arkadaşlarına raporlama gücü kazandırır. Teşhis ve hata ayıklama (troubleshooting) konuşmalarında kesinlik ve varsayım arasındaki ince çizgiyi profesyonelce korur. Çevik (Agile) yönetim kültürünün anlık reaksiyon diline uyum sağlanır.`,
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/certainty-and-possibility' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+will+anl%C4%B1k+kararlar+ve+modals+of+deduction' },
      ],
    },
    11: {
      description: `Gelecekte gerçekleşmesi muhtemel durumlar ve koşullara bağlı olaylar, Birinci Tip Koşul Cümleleri (If Clause Type 1) ile incelenir. "Eğer bu kodu çalıştırırsan, sistem yavaşlayacak" (If you run this code, the system will slow down) gibi yazılımın neden-sonuç (cause and effect) test senaryolarını yazma pratiğidir. Kodların en temel yapıtaşı olan \`if-else\` mantığının İngilizce literatürde nasıl varsayımsal dokümantasyonlara dönüştüğü çözümlenir. Risk analiz raporları ve gelecek teknoloji simülasyonları tasarlarken olasılık ağaçlarını dilbilgisine yedirmeyi öğretir. Yazılımsal şartlı ifadelerin kusursuz İngilizce gramerle sunulması hedeflenir.`,
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/conditionals-1' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=if+clauses+type+1+ingilizce+ko%C5%9Fullu+c%C3%BCmleler' },
      ],
    },
    12: {
      description: `Bir kişinin ağzından çıkan cümlenin zaman/şahıs kipleri değiştirilerek üçüncü bir kişiye aktarıldığı (Reported Speech) dolaylı anlatım teknikleri öğrenilir. Takım toplantılarında "Müşteri arayüzün değişmesini istediğini söyledi" (The client said that they wanted the UI to be changed) gibi bilgi aktarımı yapmanın resmi formatıdır. Başka bir programcının projenizde oluşturduğu "Issue" (sorun) biletlerini tartışırken veya sözlü emirleri yazılı raporlara dökerken zorunlu olarak kullanılır. Bilginin kaynaktan hedefe bozulmadan, uygun protokol (gramer değişimi) ile aktarılmasını ifade eden haberleşme mimarisine benzer. Profesyonel iş raporlama dili kesin olarak oturtulur.`,
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/reported-speech' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=reported+speech+dolayl%C4%B1+anlat%C4%B1m+ingilizce' },
      ],
    },
    13: {
      description: `Öznenin değil, uygulanan işin veya algoritmanın öne çıktığı Edilgen Yapı (Passive Voice) ile akademik ve objektif makale diline geçiş yapılır. Bütün kurulum kılavuzları, API yönergeleri ve hata mesajları ("The file was deleted") bu pasif zaman yapısı kurgulanarak kullanıcıya sunulur. Bir projenin sunumunda kişisel "Ben yaptım" yerine "Bot sistemi geliştirildi" diyerek profesyonel ve kurumsal bir imaj çizmeyi öğretir. Eylemin sonucuna (çıktıya) odaklanan mühendislik felsefesini, dildeki vurgu kurallarıyla birleştirir. Yazılımsal süreç bildirimlerinde nötr ve kesin ifadeler kullanma yetisi maksimize edilir.`,
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/passive' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=passive+voice+edilgen+yap%C4%B1+ingilizce' },
      ],
    },
    14: {
      description: `Dönem boyunca öğrenilen zaman, koşul, pasif ve dolaylı anlatım yapılarının Türkçe-İngilizce teknik metin çevirileri ve konuşma aktiviteleri ile final sentezi yapılır. Açık kaynaklı (Open Source) dokümanları Türkçeye çevirerek topluluğa katkı sağlama veya kendi kodunuzun Readme dosyasını uluslararası standartlarda yazma pratikleridir. Çeşitli rol yapma (role-play) aktiviteleriyle bir teknik mülakatta İngilizce olarak kendinizi, ilgi alanlarınızı ve büyük veri (Big Data) gibi gelecek hedeflerinizi akıcı anlatma eşiği aşılır. Kelime dağarcığı ile gramerin, gerçek zamanlı düşünce sistemine entegre olması hedeflenir. Mühendisin donanım ve yazılım vizyonunu global bir dile başarılı bir şekilde dönüştürmesiyle dönem noktalanır.`,
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: 'https://learnenglish.britishcouncil.org/skills/speaking' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/results?search_query=ingilizce+teknik+%C3%A7eviri+ve+konu%C5%9Fma+pratikleri' },
      ],
    },
  },

  'BMB214 Programlama Dilleri Prensipleri': {
    1: {
      description: `## Giriş ve dersin çerçevesi

Bu hafta **BMB214 Programlama Dilleri Prensipleri** dersinin amacı, kapsamı ve programlama dili kavramına giriş işlenir.

### Konu başlıkları
- Programlama dili nedir, neden ayrı bir disiplin olarak incelenir?
- Dil tasarımı ve kullanım alanları (uygulama, sistem, betik dilleri vb.)
- **Söz dizimi (syntax)** ile **anlam (semantics)** ayrımına giriş
- Derleme ve yorumlama yaklaşımlarına genel bakış

**Not:** PDF ve video bağlantıları aşağıdadır; materyaller dönem içinde güncellenebilir.`,
      resources: [
        { title: '1. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders01.pdf' },
        { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=x0CQyCeW7KY&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D' },
      ],
    },
    2: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '2. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders02.pdf' },
        { title: '2. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=Njgs01P9H2Q&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=9' },
      ],
    },
    3: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '3. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders03.pdf' },
        { title: '3. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=Avmqcv1ZsDY&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=26' },
      ],
    },
    4: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '4. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders04.pdf' },
        { title: '4. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=7x8xdbA3kw8&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=33' },
      ],
    },
    5: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '5. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders05.pdf' },
        { title: '5. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=LLwwJ7tMBaw&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=38' },
      ],
    },
    6: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '6. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders06.pdf' },
        { title: '6. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=xCF0FgERa6s&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=43' },
      ],
    },
    7: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '7. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders07.pdf' },
        { title: '7. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=Vx1XsDn0s9g&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=53' },
      ],
    },
    8: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '8. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders08.pdf' },
        { title: '8. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=US0omGnAmQQ&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=59' },
      ],
    },
    9: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '9. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders09.pdf' },
        { title: '9. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=AG-JXNKfI6Q&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=64' },
      ],
    },
    10: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '10. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders10.pdf' },
        { title: '10. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=QRi-iGp6rmI&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=75' },
      ],
    },
    11: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '11. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders11.pdf' },
        { title: '11. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=smQoL1jBpps&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=81' },
      ],
    },
    12: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '12. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders12.pdf' },
        { title: '12. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=c69nN8GiJ74&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=88' },
      ],
    },

    13: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '13. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders13.pdf' },
        { title: '13. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=h39aE8SfUpk&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=97' },
      ],
    },
    14: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '14. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders14.pdf' },
        { title: '14. Hafta Ders Kaydi', type: 'Video', href: 'https://www.youtube.com/watch?v=oiIoTYM-T60&list=PLq4n-UisAJbJdLkxKgVqJZ2Qk1zitUZ9D&index=105' },
      ],
    },
    15: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
      resources: [
        { title: '15. Hafta Sunum', type: 'PDF', href: '/docs/BMB214/Ders15.pdf' },
      ],
    },
  }
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
