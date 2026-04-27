type SnapshotLayout = "normal" | "wide" | "tall";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Snapshots", href: "/snapshots" },
  { label: "Agenda", href: "/agenda" },
  { label: "Nieuws", href: "/nieuws" },
  { label: "Forum", href: "/forum" },
];

export const stories = [
  { id: "story-1",  name: "Moef Gaga",            image: "https://www.kaise.nl/images/Afbeelding1.jpeg",                                   href: "http://www.kaise.nl/snapshots/2025/okt/moefgaga1/" },
  { id: "story-2",  name: "Savita Singh",          image: "https://www.kaise.nl/images/8baa2f9e-b78f-483d-a779-0deba0a0dec2.jpeg",          href: "https://www.kaise.nl/snapshots/2025/okt/3okt/" },
  { id: "story-3",  name: "Savita Sunrise",        image: "https://www.kaise.nl/images/af39430d-0e73-4608-991e-e80b63a7faf8.JPG",           href: "https://www.kaise.nl/snapshots/2025/okt/4okt/" },
  { id: "story-4",  name: "Starzz Party",          image: "https://www.kaise.nl/images/DSC_5302.jpg",                                        href: "https://www.kaise.nl/snapshots/2025/aug/Zichtenburg/" },
  { id: "story-5",  name: "Milan Festival",        image: "https://www.kaise.nl/images/DSC_369j4.jpg",                                       href: "https://www.kaise.nl/snapshots/2025/aug/milan1" },
  { id: "story-6",  name: "Express 15 Jaar",       image: "https://www.kaise.nl/images/DSC_2976.jpg",                                        href: "https://www.kaise.nl/snapshots/2025/juli/Express15jaar/" },
  { id: "story-7",  name: "Dil E Nadan",           image: "https://www.kaise.nl/images/DSC_0388.jpg",                                        href: "https://www.kaise.nl/snapshotss/6-juni-2025.html" },
  { id: "story-8",  name: "Wanica Star",           image: "https://www.kaise.nl/images/DSC_1142.jpg",                                        href: "https://www.kaise.nl/snapshotss/9-juni-Wanica-Star.html" },
  { id: "story-9",  name: "Lloret de Mar",         image: "https://www.kaise.nl/images/PHOTO-2024-10-28-17-50-21.jpg",                       href: "https://www.kaise.nl/snapshotss/Lloret-Deel-1.html" },
  { id: "story-10", name: "Milan Zuiderpark",      image: "https://www.kaise.nl/images/DSC_9757.jpg",                                        href: "https://www.kaise.nl/snapshotss/Milan-Zuiderpark-Deel-1.html" },
  { id: "story-11", name: "Kings Night",           image: "https://www.kaise.nl/images/DSC_8859.jpg",                                        href: "https://www.kaise.nl/snapshotss/Kings-Night-4-mei.html" },
  { id: "story-12", name: "Holi Den Haag",         image: "https://www.kaise.nl/images/DSC_8442.jpg",                                        href: "https://www.kaise.nl/snapshotss/Holi-Den-Haag.html" },
  { id: "story-13", name: "Kumar Sanu",            image: "https://www.kaise.nl/images/DSC_6975.jpg",                                        href: "https://www.kaise.nl/snapshotss/25-nov-kumar-sanu.html" },
  { id: "story-14", name: "30jr Music Flash",      image: "https://www.kaise.nl/images/IMG_6051.JPG",                                        href: "https://www.kaise.nl/snapshotss/30-years-music-flash.html" },
];

export const tickerItems = [
  "Moef Gaga - 13 Mei - Zichtenburg",
  "Starzz - Opkomend Talent",
  "SU Live in Concert",
  "No Merxi - Club Night",
  "Rasika Dindial Trinidad",
  "Uitverkocht - Moef Gaga",
  "Nieuwe Snapshots Online",
  "Forum - Praat Mee",
];

export const homeEvents = [
  {
    image: "/images/upcomingevent.jpeg",
    date: "13 Mei 2026",
    title: "Welkomst Party Starzz from Surinam",
    venue: "Zichtenburg, Den Haag",
    tags: ["Live", "Urban"],
  },
  {
    image: "https://picsum.photos/seed/voetbal/400/600",
    date: "14 Mei 2026",
    title: "Hemelvaarts Voetbaltournooi",
    venue: "SVH Den Haag",
    tags: ["Sport", "Toernooi"],
  },
];

export const agendaFilters = [
  "Alle",
  "Den Haag",
  "Live",
  "Sport",
  "Urban",
];

export const agendaMonths = [
  {
    month: "Mei 2026",
    events: [
      {
        day: "13",
        month: "MEI",
        image: "/images/upcomingevent.jpeg",
        title: "Welkomst Party Starzz from Surinam",
        venue: "Zichtenburg, Zichtenburglaan, Den Haag",
        time: "22:00",
        age: "18+",
        genres: ["Live", "Urban", "Surinaams"],
        artists: "No Merxi · SU · Rasika Dindial Trinidad",
        price: "Vanaf €15",
        status: "Hot",
      },
      {
        day: "14",
        month: "MEI",
        image: "https://picsum.photos/seed/voetbal/200/200",
        title: "Hemelvaarts Voetbaltournooi",
        venue: "SVH Den Haag, Noordweg 74, Den Haag",
        time: "15:00",
        age: "All ages",
        genres: ["Sport", "Toernooi"],
        artists: "The Starzz from Surinam",
        price: "Nader bekend",
      },
    ],
  },
];

export const snapshotItems: { id: number; image: string; event: string; likes: string; comments: string; layout: SnapshotLayout; href: string }[] = [
  { id: 1,  image: "https://www.kaise.nl/images/Afbeelding1.jpeg",                                  event: "Moef Gaga Deel 1",              likes: "1.4K", comments: "92",  layout: "wide", href: "http://www.kaise.nl/snapshots/2025/okt/moefgaga1/" },
  { id: 2,  image: "https://www.kaise.nl/images/Afbeelding2.jpeg",                                  event: "Moef Gaga Deel 2",              likes: "1.1K", comments: "78",  layout: "normal", href: "http://www.kaise.nl/snapshots/2025/okt/moefgaga2" },
  { id: 3,  image: "https://www.kaise.nl/images/8baa2f9e-b78f-483d-a779-0deba0a0dec2.jpeg",         event: "Savita Singh Almere",           likes: "634",  comments: "41",  layout: "normal", href: "https://www.kaise.nl/snapshots/2025/okt/3okt/" },
  { id: 4,  image: "https://www.kaise.nl/images/af39430d-0e73-4608-991e-e80b63a7faf8.JPG",          event: "Savita Singh Sunrise",          likes: "589",  comments: "37",  layout: "tall",   href: "https://www.kaise.nl/snapshots/2025/okt/4okt/" },
  { id: 5,  image: "https://www.kaise.nl/images/DSC_5302.jpg",                                      event: "Welkomst Party Starzz",         likes: "872",  comments: "54",  layout: "normal", href: "https://www.kaise.nl/snapshots/2025/aug/Zichtenburg/" },
  { id: 6,  image: "https://www.kaise.nl/images/DSC_369j4.jpg",                                     event: "Milan Summer Festival Deel 1",  likes: "743",  comments: "48",  layout: "normal", href: "https://www.kaise.nl/snapshots/2025/aug/milan1" },
  { id: 7,  image: "https://www.kaise.nl/images/DSC_3546.JPG",                                      event: "Gentle Recording",              likes: "321",  comments: "19",  layout: "normal", href: "https://www.kaise.nl/snapshots/2025/aug/gentle/logo/index.html" },
  { id: 8,  image: "https://www.kaise.nl/images/DSC_2976.jpg",                                      event: "Express 15 Jaar",               likes: "968",  comments: "63",  layout: "wide",   href: "https://www.kaise.nl/snapshots/2025/juli/Express15jaar/" },
  { id: 9,  image: "https://www.kaise.nl/images/webDSC_2052.jpg",                                   event: "Milan Zoetermeer Deel 1",       likes: "511",  comments: "33",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Milan-Zoetermeer-Deel-1.html" },
  { id: 10, image: "https://www.kaise.nl/images/webDSC_2613.jpg",                                   event: "Milan Zoetermeer Deel 2",       likes: "487",  comments: "29",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Milan-Zoetermeer-Deel-2.html" },
  { id: 11, image: "https://www.kaise.nl/images/webDSC_1318.jpg",                                   event: "Zaal Voetbal",                  likes: "298",  comments: "21",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Zaal-voetbal.html" },
  { id: 12, image: "https://www.kaise.nl/images/DSC_0388.jpg",                                      event: "Dil E Nadan @ Opera",           likes: "654",  comments: "44",  layout: "normal", href: "https://www.kaise.nl/snapshotss/6-juni-2025.html" },
  { id: 13, image: "https://www.kaise.nl/images/DSC_0756.jpg",                                      event: "Dil E Nadan @ Sunrise",         likes: "612",  comments: "39",  layout: "normal", href: "https://www.kaise.nl/snapshotss/8-juni-2025.html" },
  { id: 14, image: "https://www.kaise.nl/images/DSC_1142.jpg",                                      event: "Wanica Star",                   likes: "445",  comments: "28",  layout: "tall",   href: "https://www.kaise.nl/snapshotss/9-juni-Wanica-Star.html" },
  { id: 15, image: "https://www.kaise.nl/images/PHOTO-2024-10-28-17-50-21.jpg",                     event: "Lloret de Mar Deel 1",          likes: "1.2K", comments: "81",  layout: "wide",   href: "https://www.kaise.nl/snapshotss/Lloret-Deel-1.html" },
  { id: 16, image: "https://www.kaise.nl/images/DSC_9757.jpg",                                      event: "Milan Zuiderpark Deel 1",       likes: "534",  comments: "35",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Milan-Zuiderpark-Deel-1.html" },
  { id: 17, image: "https://www.kaise.nl/images/DSC_9584.jpg",                                      event: "Milan Zuiderpark Deel 2",       likes: "498",  comments: "31",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Milan-Zuiderpark-Deel-2.html" },
  { id: 18, image: "https://www.kaise.nl/images/DSC_8859.jpg",                                      event: "Kings Night",                   likes: "876",  comments: "57",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Kings-Night-4-mei.html" },
  { id: 19, image: "https://www.kaise.nl/images/DSC_9061.jpg",                                      event: "Raghav",                        likes: "743",  comments: "49",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Raghav-8-mei.html" },
  { id: 20, image: "https://www.kaise.nl/images/DSC_8442.jpg",                                      event: "Holi Den Haag",                 likes: "1.1K", comments: "74",  layout: "wide",   href: "https://www.kaise.nl/snapshotss/Holi-Den-Haag.html" },
  { id: 21, image: "https://www.kaise.nl/images/DSC_8773.jpg",                                      event: "Holi Rotterdam",                likes: "934",  comments: "61",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Holi-Rdam.html" },
  { id: 22, image: "https://www.kaise.nl/images/DSC_8258.jpg",                                      event: "Chutney Hungama",               likes: "567",  comments: "38",  layout: "normal", href: "https://www.kaise.nl/snapshotss/Club-Tiger.html" },
  { id: 23, image: "https://www.kaise.nl/images/DSC_8051.jpg",                                      event: "Indian Eagles Anniversary",     likes: "489",  comments: "32",  layout: "normal", href: "https://www.kaise.nl/snapshotss/The-Indian-Eagles-Anniversary.html" },
  { id: 24, image: "https://www.kaise.nl/images/DSC_7334.jpg",                                      event: "Express 13 Jaar",               likes: "712",  comments: "47",  layout: "tall",   href: "https://www.kaise.nl/snapshotss/Express-13-jarig-bestaan.html" },
  { id: 25, image: "https://www.kaise.nl/images/DSC_7447.jpg",                                      event: "KK B-Bash",                     likes: "398",  comments: "26",  layout: "normal", href: "https://www.kaise.nl/snapshotss/KK-B-Bash.html" },
  { id: 26, image: "https://www.kaise.nl/images/DSC_7958.jpg",                                      event: "16 Years Gentle",               likes: "654",  comments: "43",  layout: "normal", href: "https://www.kaise.nl/snapshotss/16-Years-Gentle.html" },
  { id: 27, image: "https://www.kaise.nl/images/395588334_10224960555946722_3981001313712111952_n.jpg", event: "Hindilounge x 100% Su",     likes: "821",  comments: "55",  layout: "wide",   href: "https://www.kaise.nl/snapshotss/4-nov.html" },
  { id: 28, image: "https://www.kaise.nl/images/DSC_6528.jpg",                                      event: "Divali Viering Opera",          likes: "543",  comments: "36",  layout: "normal", href: "https://www.kaise.nl/snapshotss/6-juni-2025.html" },
  { id: 29, image: "https://www.kaise.nl/images/DSC_6975.jpg",                                      event: "Kumar Sanu in Silverdome",      likes: "1.3K", comments: "88",  layout: "normal", href: "https://www.kaise.nl/snapshotss/25-nov-kumar-sanu.html" },
  { id: 30, image: "https://www.kaise.nl/images/a9ffb2f0-0f8e-49e1-a831-9a40dcae69fd.jpeg",         event: "Lloret de Mar",                 likes: "987",  comments: "66",  layout: "normal", href: "https://www.kaise.nl/snapshotss/18okt.html" },
  { id: 31, image: "https://www.kaise.nl/images/DSC_5686-2.jpg",                                    event: "The Band Fan Party",            likes: "612",  comments: "41",  layout: "normal", href: "https://www.kaise.nl/snapshotss/28okt.html" },
  { id: 32, image: "https://www.kaise.nl/images/DSC_4243.jpg",                                      event: "7 Years The Band",              likes: "734",  comments: "49",  layout: "tall",   href: "https://www.kaise.nl/snapshotss/7-okt-the-band.html" },
  { id: 33, image: "https://www.kaise.nl/images/IMG_6051.JPG",                                      event: "30 Years Music Flash",          likes: "876",  comments: "58",  layout: "normal", href: "https://www.kaise.nl/snapshotss/30-years-music-flash.html" },
  { id: 34, image: "https://www.kaise.nl/images/DSC_3974.jpg",                                      event: "The Living Legend Flamingo",    likes: "543",  comments: "35",  layout: "wide",   href: "https://www.kaise.nl/snapshotss/The-living-legend-flamingo.html" },
];

export const latestSnapshots = snapshotItems.slice(0, 8).map((item) => ({ ...item }));

export const newsCards = [
  {
    image: "https://picsum.photos/seed/news4/800/450",
    category: "Review",
    date: "20 april 2026",
    title: "Review: No Merxi overstijgt alle verwachtingen in Westerunie",
    excerpt: "Een avond om nooit te vergeten. No Merxi bewees waarom hij een van de spannendste namen in de Nederlandse urban scene is.",
  },
  {
    image: "https://picsum.photos/seed/news5/800/450",
    category: "Nieuws",
    date: "18 april 2026",
    title: "Zichtenburg vergroot capaciteit voor zomerprogramma 2026",
    excerpt: "Het populaire Haagse poppodium investeert in uitbreiding om aan de groeiende vraag te voldoen.",
  },
  {
    image: "https://picsum.photos/seed/news6/800/450",
    category: "Exclusief",
    date: "15 april 2026",
    title: "Rasika Dindial Trinidad: terug in Nederland na internationale tour",
    excerpt: "De Surinaams-Nederlandse artiest keert terug naar het vaderland na een succesvol buitenlands seizoen.",
  },
  {
    image: "https://picsum.photos/seed/news7/800/450",
    category: "Tips",
    date: "12 april 2026",
    title: "Top 10 clubs voor afrobeats in Amsterdam",
    excerpt: "Van Paradiso tot Sugar Factory: dit zijn de beste plekken voor afrobeats, amapiano en dancehall in de hoofdstad.",
  },
  {
    image: "https://picsum.photos/seed/news8/800/450",
    category: "Aankondiging",
    date: "10 april 2026",
    title: "Kaise.nl lanceert nieuwe app: jouw socials voor de urban scene",
    excerpt: "De nieuwe Kaise.nl app brengt snapshots, agenda en forum samen in een Instagram-achtige ervaring.",
  },
  {
    image: "https://picsum.photos/seed/news9/800/450",
    category: "Cultuur",
    date: "8 april 2026",
    title: "Multiculturele muziekscene groeit harder dan ooit in Nederland",
    excerpt: "Nieuwe cijfers tonen aan dat de multiculturele muziek- en eventscene de snelst groeiende is in de Nederlandse entertainmentindustrie.",
  },
];

export const featuredNews = [
  {
    image: "https://picsum.photos/seed/news-feat1/900/600",
    category: "Nieuws",
    date: "27 april 2026",
    title: "Moef Gaga breekt records: uitverkocht in 10 minuten - extra show aangekondigd",
    excerpt:
      "De Haagse artiest Moef Gaga heeft zijn show in Zichtenburg in recordtijd uitverkocht. Wegens de overweldigende vraag is er nu een extra datum toegevoegd.",
  },
  {
    image: "https://picsum.photos/seed/news-feat2/600/350",
    category: "Exclusief",
    date: "25 april 2026",
    title: "SU kondigt nationale tour aan: 8 steden in een maand",
    excerpt: "Na maanden van geruchten is het officieel. SU gaat op tour langs de grote concertzalen van Nederland.",
  },
  {
    image: "https://picsum.photos/seed/news-feat3/600/350",
    category: "Interview",
    date: "22 april 2026",
    title: "Starzz: Mijn muziek is een brug tussen culturen",
    excerpt: "In een exclusief gesprek met Kaise.nl spreekt Starzz over zijn roots en zijn nieuwe album.",
  },
];

export const forumTopics = [
  { title: "Wie gaat er naar Moef Gaga op 13 mei? Extra show erbij!", author: "DenHaagFan", category: "Uitgaan & Events", age: "1 uur geleden", replies: "47", views: "312", avatar: "https://picsum.photos/seed/fu1/100/100", hot: true },
  { title: "Beste clubs in Amsterdam voor afrobeats en R&B?", author: "AmsUser", category: "Tips & Advies", age: "5 uur geleden", replies: "23", views: "189", avatar: "https://picsum.photos/seed/fu2/100/100" },
  { title: "SU nieuw album Solo - eerste luister reacties", author: "MusicHead_NL", category: "Muziek & Artiesten", age: "8 uur geleden", replies: "88", views: "654", avatar: "https://picsum.photos/seed/fu3/100/100", hot: true },
  { title: "Snapshots Moef Gaga 2024 thread - post hier je beste foto's!", author: "Kaise_Official", category: "Snapshots", age: "gisteren", replies: "15", views: "923", avatar: "https://picsum.photos/seed/fu4/100/100" },
  { title: "No Merxi vs Starzz - wie is de betere artiest? POLL", author: "UrbanFan_070", category: "Top Artiesten", age: "gisteren", replies: "134", views: "1.2K", avatar: "https://picsum.photos/seed/fu5/100/100", hot: true },
  { title: "Dresscode bij Zichtenburg - wat trek je aan?", author: "StyleKing_NL", category: "Tips & Advies", age: "2 dagen geleden", replies: "29", views: "241", avatar: "https://picsum.photos/seed/fu6/100/100" },
  { title: "Rasika Dindial Trinidad - officiele fanthread", author: "RasikaFan1", category: "Muziek & Artiesten", age: "3 dagen geleden", replies: "67", views: "445", avatar: "https://picsum.photos/seed/fu7/100/100", hot: true },
  { title: "Kaise.nl - Wensen en suggesties voor de nieuwe website", author: "Kaise_Official", category: "Algemeen", age: "4 dagen geleden", replies: "41", views: "378", avatar: "https://picsum.photos/seed/fu8/100/100" },
  { title: "Latin & Afrobeats night in Rotterdam - aanbevelingen gevraagd", author: "RotterdamVibes", category: "Uitgaan & Events", age: "5 dagen geleden", replies: "18", views: "167", avatar: "https://picsum.photos/seed/fu9/100/100", hot: true },
  { title: "Mooiste event-foto van 2025 - community vote!", author: "SnapshotKing", category: "Snapshots", age: "1 week geleden", replies: "96", views: "889", avatar: "https://picsum.photos/seed/fu10/100/100" },
];

export const forumCategories = [
  { icon: "calendar", name: "Uitgaan & Events", desc: "Bespreek feesten, concerten, festivals en alles rondom de agenda.", stats: "184 topics - 2.3K berichten" },
  { icon: "music", name: "Muziek & Artiesten", desc: "Praat mee over tracks, albums, shows en de artiesten van nu.", stats: "176 topics - 2.1K berichten" },
  { icon: "camera", name: "Snapshots", desc: "Deel je eigen event-foto's en bekijk de mooiste shots van anderen.", stats: "87 topics - 942 berichten" },
  { icon: "comments", name: "Algemeen", desc: "Alles wat niet in een andere categorie past. Chit-chat welkom.", stats: "96 topics - 1.1K berichten" },
  { icon: "trophy", name: "Top Artiesten", desc: "Stem op je favorieten en bespreek de beste acts van het moment.", stats: "54 topics - 678 berichten" },
  { icon: "lightbulb", name: "Tips & Advies", desc: "Beste clubs, uitgaanstips, dresscode-vragen en meer.", stats: "73 topics - 820 berichten" },
];
