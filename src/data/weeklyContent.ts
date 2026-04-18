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
  // Ornek:
  // 'BMB112 Web Teknolojileri': {
  //   1: {
  //     description: 'HTML giris, temel etiketler ve semantik yapi.',
  //     resources: [
  //       { title: '1. Hafta Sunum', type: 'PDF', href: '/docs/bmb112/week1.pdf' },
  //       { title: '1. Hafta Ders Kaydi', type: 'Video', href: 'https://...' },
  //     ],
  //   },
  // },
    'BMB214 Programlama Dilleri Prensipleri': {
     1: {
      description: 'BMB214 Programlama Dilleri Prensipleri',
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
