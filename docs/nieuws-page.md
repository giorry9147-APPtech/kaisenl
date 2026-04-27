# Nieuws Pagina — Structuur & Handleiding

De nieuws pagina (`/nieuws`) is momenteel leeg (placeholder). Dit document beschrijft hoe de pagina eruit ziet zodra deze gevuld wordt, en hoe je artikelen toevoegt.

---

## Pagina-layout

```
┌─────────────────────────────────────────────────────┐
│  PageHero  (icon, label, title, description)        │
├──────────────────────────────┬──────────────────────┤
│  MAIN  (2/3 breedte)         │  SIDEBAR  (1/3)      │
│                              │                      │
│  Uitgelicht Nieuws           │  🔥 Trending         │
│  ┌──────────────┬──────────┐ │  (4 kleine items)    │
│  │  Groot kaart │  Klein 1 │ │                      │
│  │  (featured)  │  Klein 2 │ │  🏷 Populaire Tags   │
│  └──────────────┴──────────┘ │  (tag chips)         │
│                              │                      │
│  ─── divider ─────────────   │  ✉ Nieuwsbrief       │
│                              │  (email input)       │
│  Grid met alle artikelen     │                      │
│  (2 of 3 kolommen)           │                      │
│                              │                      │
│  [ Meer artikelen laden ]    │                      │
└──────────────────────────────┴──────────────────────┘
```

---

## Componenten

### `NewsCard` — `src/components/NewsCard.tsx`

Elk nieuwsartikel is een `NewsCard`. Props:

| Prop       | Type      | Verplicht | Omschrijving                          |
|------------|-----------|-----------|---------------------------------------|
| `image`    | `string`  | ja        | URL van de artikelfoto                |
| `category` | `string`  | ja        | Bijv. `"Nieuws"`, `"Exclusief"`, `"Review"`, `"Interview"`, `"Aankondiging"`, `"Tips"`, `"Cultuur"` |
| `date`     | `string`  | ja        | Bijv. `"27 april 2026"`               |
| `title`    | `string`  | ja        | Koptekst van het artikel              |
| `excerpt`  | `string`  | ja        | Korte samenvatting (1-2 zinnen)       |
| `large?`   | `boolean` | nee       | `true` = groot uitgelicht kaart (420px hoog) |

**Badge kleur per categorie:**
- `"Nieuws"` of `"Aankondiging"` → **geel**
- `"Exclusief"` → **rood**
- alles anders → **donker/grijs**

---

## Data — `src/lib/site-data.ts`

### `featuredNews` (3 items)
Bovenaan de pagina — links groot, rechts twee klein gestapeld.

```ts
export const featuredNews = [
  {
    image: "https://...",
    category: "Nieuws",
    date: "27 april 2026",
    title: "Artikel titel",
    excerpt: "Korte samenvatting...",
  },
  // nog 2 items
];
```

### `newsCards` (6 items)
Grid onder de uitgelichte sectie, 2 of 3 kolommen afhankelijk van schermgrootte.

```ts
export const newsCards = [
  {
    image: "https://...",
    category: "Review",
    date: "20 april 2026",
    title: "Artikel titel",
    excerpt: "Korte samenvatting...",
  },
  // meer items...
];
```

---

## Sidebar

### Trending (hardcoded in de pagina)
4 items: `[imageUrl, titel, meta]`  
Meta formaat: `"27 april - 12K views"`

### Populaire Tags (hardcoded in de pagina)
Array van strings: `["Moef Gaga", "SU", "Starzz", ...]`  
Worden getoond als kleine chips.

### Nieuwsbrief (sidebar)
Klein inschrijfformulier (email) — staat los van de grote nieuwsbriefsectie onderaan de homepage.

---

## Een artikel toevoegen

1. Voeg een object toe aan `newsCards` of `featuredNews` in `src/lib/site-data.ts`
2. Gebruik een afbeelding van minimaal **800×450px** voor normale kaarten, **900×600px** voor `featuredNews[0]`
3. Kies een passende `category` voor de juiste badgekleur
4. De pagina rendert automatisch alle items — geen extra code nodig

---

## Toekomst: dynamische artikelen

Wanneer er een CMS of database komt, vervang dan `featuredNews` en `newsCards` door een `fetch()` in een Server Component. De `NewsCard` component hoeft niet aangepast te worden.
