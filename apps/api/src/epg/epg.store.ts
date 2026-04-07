import { EpgChannel, EpgProgram, EpgSchedule, EpgGuide } from '@novastream/types';

// ─── Mock EPG Channels ────────────────────────────────────────────────────────

export const epgChannels: EpgChannel[] = [
  {
    id: 'epg-ch-1',
    channelId: 'ch-iraq-sport-1',
    name: 'IRAQ TV Sport 1',
    nameAr: 'إيراق تيفي رياضة 1',
    logoUrl: '/logos/iraq-tv-sport1.png',
    number: 1,
    category: 'sports',
  },
  {
    id: 'epg-ch-2',
    channelId: 'ch-iraq-sport-2',
    name: 'IRAQ TV Sport 2',
    nameAr: 'إيراق تيفي رياضة 2',
    logoUrl: '/logos/iraq-tv-sport2.png',
    number: 2,
    category: 'sports',
  },
  {
    id: 'epg-ch-3',
    channelId: 'ch-iraq-news',
    name: 'IRAQ TV News',
    nameAr: 'إيراق تيفي الأخبار',
    logoUrl: '/logos/iraq-tv-news.png',
    number: 3,
    category: 'news',
  },
  {
    id: 'epg-ch-4',
    channelId: 'ch-iraq-entertainment',
    name: 'IRAQ TV Entertainment',
    nameAr: 'إيراق تيفي ترفيه',
    logoUrl: '/logos/iraq-tv-entertainment.png',
    number: 4,
    category: 'entertainment',
  },
  {
    id: 'epg-ch-5',
    channelId: 'ch-iraq-cinema',
    name: 'IRAQ TV Cinema',
    nameAr: 'إيراق تيفي سينما',
    logoUrl: '/logos/iraq-tv-cinema.png',
    number: 5,
    category: 'movies',
  },
  {
    id: 'epg-ch-6',
    channelId: 'ch-iraq-kids',
    name: 'IRAQ TV Kids',
    nameAr: 'إيراق تيفي أطفال',
    logoUrl: '/logos/iraq-tv-kids.png',
    number: 6,
    category: 'kids',
  },
  {
    id: 'epg-ch-7',
    channelId: 'ch-iraq-documentary',
    name: 'IRAQ TV Documentary',
    nameAr: 'إيراق تيفي وثائقية',
    logoUrl: '/logos/iraq-tv-documentary.png',
    number: 7,
    category: 'documentary',
  },
  {
    id: 'epg-ch-8',
    channelId: 'ch-iraq-culture',
    name: 'IRAQ TV Culture',
    nameAr: 'إيراق تيفي ثقافة',
    logoUrl: '/logos/iraq-tv-culture.png',
    number: 8,
    category: 'culture',
  },
];

// ─── Mock EPG Programs (sample for today) ────────────────────────────────────

function today(h: number, m = 0): string {
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}

const todayDate = new Date().toISOString().slice(0, 10);

export const mockSchedules: EpgSchedule[] = [
  // Sport 1
  {
    channelId: 'epg-ch-1',
    date: todayDate,
    programs: [
      {
        id: 'p-s1-1',
        channelId: 'epg-ch-1',
        title: 'Morning Sports Highlights',
        titleAr: 'ملخص الرياضة الصباحية',
        description: 'Best goals and moments from last night.',
        descriptionAr: 'أفضل الأهداف واللحظات من الأمس.',
        startTime: today(6, 0),
        endTime: today(7, 0),
        genre: 'sports',
        isLive: false,
        isCatchup: true,
      },
      {
        id: 'p-s1-2',
        channelId: 'epg-ch-1',
        title: 'IRAQ League — Live Match',
        titleAr: 'دوري العراق — مباراة مباشرة',
        description: 'Live broadcast of Iraqi Premier League match.',
        descriptionAr: 'بث مباشر لمباراة الدوري العراقي الممتاز.',
        startTime: today(20, 0),
        endTime: today(22, 0),
        genre: 'sports',
        rating: 'G',
        isLive: true,
        isCatchup: false,
      },
      {
        id: 'p-s1-3',
        channelId: 'epg-ch-1',
        title: 'Sports News',
        titleAr: 'نشرة الأخبار الرياضية',
        description: 'Daily sports news and analysis.',
        descriptionAr: 'أخبار الرياضة اليومية والتحليلات.',
        startTime: today(22, 0),
        endTime: today(23, 0),
        genre: 'sports',
        isLive: false,
        isCatchup: true,
      },
    ],
  },
  // Sport 2
  {
    channelId: 'epg-ch-2',
    date: todayDate,
    programs: [
      {
        id: 'p-s2-1',
        channelId: 'epg-ch-2',
        title: 'Boxing Night',
        titleAr: 'ليلة الملاكمة',
        description: 'Live boxing championship coverage.',
        descriptionAr: 'تغطية مباشرة لبطولة الملاكمة.',
        startTime: today(21, 0),
        endTime: today(23, 30),
        genre: 'sports',
        isLive: true,
        isCatchup: false,
      },
    ],
  },
  // News
  {
    channelId: 'epg-ch-3',
    date: todayDate,
    programs: [
      {
        id: 'p-n1-1',
        channelId: 'epg-ch-3',
        title: 'Morning News Bulletin',
        titleAr: 'نشرة الأخبار الصباحية',
        description: 'Latest news from Iraq and the world.',
        descriptionAr: 'آخر الأخبار من العراق والعالم.',
        startTime: today(7, 0),
        endTime: today(8, 0),
        genre: 'news',
        isLive: true,
        isCatchup: true,
      },
      {
        id: 'p-n1-2',
        channelId: 'epg-ch-3',
        title: 'Special Report: Iraqi Economy',
        titleAr: 'تقرير خاص: الاقتصاد العراقي',
        description: 'In-depth analysis of Iraqi economic developments.',
        descriptionAr: 'تحليل معمّق لآخر المستجدات الاقتصادية العراقية.',
        startTime: today(12, 0),
        endTime: today(13, 0),
        genre: 'news',
        isLive: false,
        isCatchup: true,
      },
      {
        id: 'p-n1-3',
        channelId: 'epg-ch-3',
        title: 'Evening News',
        titleAr: 'نشرة الأخبار المسائية',
        description: 'Evening news roundup.',
        descriptionAr: 'ملخص الأخبار المسائية.',
        startTime: today(19, 0),
        endTime: today(20, 0),
        genre: 'news',
        isLive: true,
        isCatchup: false,
      },
    ],
  },
  // Entertainment
  {
    channelId: 'epg-ch-4',
    date: todayDate,
    programs: [
      {
        id: 'p-e1-1',
        channelId: 'epg-ch-4',
        title: 'Morning Show',
        titleAr: 'البرنامج الصباحي',
        description: 'Entertainment, lifestyle, and interviews.',
        descriptionAr: 'برامج الترفيه والأسلوب الحياتي والمقابلات.',
        startTime: today(9, 0),
        endTime: today(11, 0),
        genre: 'entertainment',
        isLive: true,
        isCatchup: true,
      },
      {
        id: 'p-e1-2',
        channelId: 'epg-ch-4',
        title: 'Iraqi Drama Series — Episode 12',
        titleAr: 'مسلسل عراقي — الحلقة 12',
        description: 'Original Iraqi drama series.',
        descriptionAr: 'مسلسل درامي عراقي أصيل.',
        startTime: today(21, 0),
        endTime: today(22, 0),
        genre: 'drama',
        rating: 'PG',
        isLive: false,
        isCatchup: true,
      },
    ],
  },
  // Cinema
  {
    channelId: 'epg-ch-5',
    date: todayDate,
    programs: [
      {
        id: 'p-c1-1',
        channelId: 'epg-ch-5',
        title: 'Licensed Feature Film',
        titleAr: 'فيلم روائي مرخص',
        description: 'A licensed feature film from our catalog.',
        descriptionAr: 'فيلم روائي مرخص من مكتبتنا.',
        startTime: today(20, 0),
        endTime: today(22, 30),
        genre: 'movies',
        rating: 'PG-13',
        isLive: false,
        isCatchup: true,
      },
    ],
  },
];

// ─── Store Functions ──────────────────────────────────────────────────────────

export function getAllEpgChannels(): EpgChannel[] {
  return epgChannels;
}

export function getEpgChannelById(id: string): EpgChannel | undefined {
  return epgChannels.find((c) => c.id === id);
}

export function getScheduleForDate(date: string): EpgSchedule[] {
  // In production this would query a real database
  // For mock data, return today's schedule for any date
  return mockSchedules.map((s) => ({ ...s, date }));
}

export function getScheduleForChannel(channelId: string, date: string): EpgSchedule | undefined {
  const schedule = mockSchedules.find((s) => s.channelId === channelId);
  if (!schedule) return undefined;
  return { ...schedule, date };
}

export function getFullGuide(date?: string): EpgGuide {
  const targetDate = date ?? todayDate;
  return {
    channels: epgChannels,
    schedules: getScheduleForDate(targetDate),
    generatedAt: new Date().toISOString(),
  };
}

export function getLivePrograms(): EpgProgram[] {
  const now = new Date();
  return mockSchedules.flatMap((s) =>
    s.programs.filter((p) => {
      const start = new Date(p.startTime);
      const end = new Date(p.endTime);
      return now >= start && now <= end;
    })
  );
}
