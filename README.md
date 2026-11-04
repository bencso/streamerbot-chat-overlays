# Stream Overlays - Chat Widget

> Valós idejű _Twitch_ + _Kick_ chat és alert overlay Streamer.bot integrációval. Optimalizálva _OBS Studio_, _Streamlabs_ és bármely _Browser Source_ alapú rendszerhez.

---

## 🚀 Mi ez?

A **Chat Widget** egy streameléshez használt overlay widget, amely közvetlenül kapcsolódik a helyi **Streamer.bot WebSocket** szerverhez. Egyetlen overlayben kezeli a chat üzeneteket és a stream eseményeket _(follow, sub, raid, gift stb.)_.

> Kifejezetten streamereknek készült, akik letisztult, gyors és testreszabható megoldást keresnek.

---

## ✨ Fő funkciók

- ⚡ Valós idejű chat megjelenítés
- 🎯 Twitch + Kick támogatás egy overlayben
- 🔔 Alert rendszer (Follow / Sub / ReSub / Raid / Gift)
- 🧠 Queue motor spam és raid helyzetekhez
- 😀 Badge és emote renderelés
- 🎨 Több vizuális téma
- 🔧 URL paraméteres konfiguráció
- 🪶 Könnyű, framework-mentes Vanilla JavaScript alap
- 📺 OBS / Streamlabs Browser Source kompatibilis

---

## 📦 Támogatott események

### Chat

- `Twitch.ChatMessage`
- `Kick.ChatMessage`
- `Twitch.ChatMessageDeleted`

### Alerts

- `Twitch.Follow`
- `Twitch.Sub`
- `Twitch.ReSub`
- `Twitch.Raid`
- `Kick.Follow`
- `Kick.Sub`
- `Kick.GiftSubscription`

---

## 🖥️ Használat OBS-ben

### Browser Source URL

```url
.../chat.html?theme=minimal
```

### Ajánlott beállítások

- Width: `1920`
- Height: `1080`
- ✅ "Refresh browser when scene becomes active"
- ✅ "Shutdown source when not visible" (opcionális)

---

## ⚙️ URL Paraméterek

| Paraméter    | Típus                 | Alapértelmezett | Leírás                           |
| ------------ | --------------------- | --------------- | -------------------------------- |
| host         | string                | 127.0.0.1       | WebSocket host                   |
| port         | number                | 8080            | WebSocket port                   |
| orientation  | vertical / horizontal | vertical        | Elrendezés                       |
| max          | number                | 20              | Maximum látható elem             |
| batch        | number                | 10              | Batch feldolgozás                |
| theme        | string                | minimal         | Aktív téma                       |
| exclude      | list                  | -               | Kizárt felhasználók              |
| bots         | list                  | -               | Bot lista                        |
| colored      | flag                  | false           | Színes alertek (boxedminimalnal) |
| hidealerts   | flag                  | false           | Alert tiltása                    |
| hidechat     | flag                  | false           | Chat tiltása                     |
| hideplatform | flag                  | false           | Platform ikonok elrejtése        |
| hidebadges   | flag                  | false           | Badge-ek elrejtése               |
| hidetype     | flag                  | false           | Alert cím elrejtése              |

---

## 🧪 Példák

### Csak chat

```url
chat.html?hidealerts
```

### Csak alert

```url
chat.html?hidechat
```

### Horizontal mód

```url
chat.html?orientation=horizontal
```

### Platform szűrés

```url
chat.html?platforms=twitch,kick
```

```url
chat.html?platforms=twitch|kick
```

```url
chat.html?platforms=twitch/kick
```

```url
chat.html?platforms=twitch\kick
```

### Botok kizárása

```url
chat.html?exclude=nightbot,streamelements
```

```url
chat.html?exclude=nightbot|streamelements
```

```url
chat.html?exclude=nightbot/streamelements
```

```url
chat.html?exclude=nightbot\streamelements
```

### Színes alertek (boxedminimal stílusnál)

```url
chat.html?colored
```

---

## 🎨 Elérhető témák

| Téma         | Leírás                 |      Elérhető       |
| ------------ | ---------------------- | :-----------------: |
| minimal      | Letisztult alap dizájn | Horizontal/Vertical |
| clean        | Modern megjelenés      | Horizontal/Vertical |
| boxedminimal | Kompakt dobozolt nézet | Horizontal/Vertical |

---

## 🏗️ Projekt struktúra

```txt
/chat
├── chat.html
├── style.css
├── script.js
└── themes/
```

---

## 🛠️ Technikai háttér

| Terület    | Technológia        |
| ---------- | ------------------ |
| Frontend   | Vanilla JavaScript |
| Realtime   | WebSocket          |
| Integráció | Streamer.bot       |
| Render     | DOM Manipulation   |
| Overlay    | Browser Source     |
| Platformok | Twitch, Kick       |

 ---

## 🤝 Közreműködés

Ötletek, hibajelentések, PR-ek szívesen látottak.

---

## 📄 Licensz

MIT Licensz
