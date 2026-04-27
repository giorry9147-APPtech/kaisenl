# Forum Pagina — Structuur & Handleiding

De forum pagina (`/forum`) is momenteel leeg (placeholder). Dit document beschrijft exact hoe de pagina eruit moet zien wanneer het forum live gaat, gebaseerd op de bestaande implementatie.

---

## Pagina-layout

```
┌─────────────────────────────────────────────────────────┐
│  PageHero  (icon: fa-comments, label: Community)        │
│  + "Nieuw topic starten" knop                           │
├────────────────────────────────┬────────────────────────┤
│  MAIN  (2/3 breedte)           │  SIDEBAR  (1/3)        │
│                                │                        │
│  Forum Categorieën             │  📊 Forum Stats        │
│  ┌──────────┬──────────┐       │  Topics / Berichten /  │
│  │Uitgaan & │Muziek &  │       │  Leden / Online nu     │
│  │Events    │Artiesten │       │                        │
│  ├──────────┼──────────┤       │  👥 Actieve Leden      │
│  │Snapshots │Algemeen  │       │  (avatar + naam +      │
│  ├──────────┼──────────┤       │   berichtentelling)    │
│  │Top       │Tips &    │       │                        │
│  │Artiesten │Advies    │       │  📅 Komende Events     │
│  └──────────┴──────────┘       │  (dag + titel + venue) │
│                                │                        │
│  Actieve Topics                │                        │
│  Filter chips: Nieuwste /      │                        │
│  Hot / Onbeantwoord            │                        │
│                                │                        │
│  Topic rij (per topic):        │                        │
│  ● avatar | titel + meta       │                        │
│            | replies + views   │                        │
│                                │                        │
│  [ Meer laden ] [ Nieuw topic ]│                        │
└────────────────────────────────┴────────────────────────┘
```

---

## Categorieën

Gedefinieerd in `forumCategories` in `src/lib/site-data.ts`.

Elk object:
```ts
{
  icon: "calendar",   // sleutel voor iconClass map (zie onder)
  name: "Uitgaan & Events",
  desc: "Bespreek feesten, concerten, festivals...",
  stats: "184 topics - 2.3K berichten",
}
```

**Icon mapping** (hardcoded in de pagina):
| Sleutel      | Font Awesome klasse |
|--------------|---------------------|
| `calendar`   | `fa-calendar`       |
| `music`      | `fa-music`          |
| `camera`     | `fa-camera`         |
| `comments`   | `fa-comments`       |
| `trophy`     | `fa-trophy`         |
| `lightbulb`  | `fa-lightbulb`      |

De 6 categorieën staan in een **2-koloms grid**.

---

## Topics

Gedefinieerd in `forumTopics` in `src/lib/site-data.ts`.

Elk object:
```ts
{
  title: "Wie gaat er naar Moef Gaga op 13 mei?",
  author: "DenHaagFan",
  category: "Uitgaan & Events",
  age: "1 uur geleden",
  replies: "47",
  views: "312",
  avatar: "https://picsum.photos/seed/fu1/100/100",
  hot: true,   // optioneel — toont gele stip links
}
```

**Topic rij layout** (4 kolommen op desktop):
```
● | [avatar] | titel + auteur - categorie - tijd | replies 👁 views
```
- Gele stip = `hot: true`
- Grijze stip = geen hot flag

---

## Sidebar

### Forum Stats
Hardcoded in de pagina als een array van `[label, waarde]` tuples:
```ts
[["Topics", "670"], ["Berichten", "8.541"], ["Leden", "4.218"], ["Online nu", "34"]]
```
"Online nu" wordt **geel** weergegeven.

### Actieve Leden
Hardcoded in de pagina als `[naam, berichtentelling, avatarUrl]`:
```ts
["DenHaagFan", "342 berichten", "https://picsum.photos/seed/fm1/100/100"]
```
Wordt weergegeven met een ronde avatar links.

### Komende Events (sidebar)
Komt uit `agendaMonths` in `site-data.ts`.  
⚠️ **Let op:** de pagina gebruikt `agendaMonths[0].events` en `agendaMonths[1].events`.  
Als er maar 1 maand in `agendaMonths` zit geeft dit een **runtime crash** — zie fix hieronder.

**Fix:**
```ts
// Veilige manier — werkt ook met 1 maand:
const upcoming = agendaMonths.flatMap((m) => m.events).slice(0, 3);
```

---

## Buttons

| Knop                     | Gedrag                     |
|--------------------------|----------------------------|
| "Nieuw topic starten"    | `href="#topics"` (scroll)  |
| Filter chips             | Alleen visueel, geen state |
| "Meer topics laden"      | Nog niet functioneel       |
| "Nieuw topic starten"    | Nog niet functioneel       |

---

## Toekomst: echt forum

Wanneer het forum live gaat zijn de volgende stappen nodig:

1. **Database** — topics, reacties, gebruikers opslaan (bijv. Supabase of een simpele API)
2. **Auth** — inloggen voor het plaatsen van topics/reacties
3. **`forumTopics` vervangen** door een `fetch()` in een Server Component
4. **Filter chips** werkend maken (query param `?filter=hot`)
5. **"Meer laden"** knop koppelen aan paginering
6. **Topic detailpagina** aanmaken op `/forum/[slug]`
