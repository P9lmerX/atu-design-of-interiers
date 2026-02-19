# FORMA Interior Design — Учебный проект
**Алматинский Технологический Университет, Алматы**

---

## Структура проекта

```
interior-project/
├── server.py         ← Веб-сервер (Python, без зависимостей)
├── index.html        ← Главная страница
├── static/
│   ├── style.css     ← Стили
│   └── main.js       ← Интерактивность
└── README.md
```

---

## Запуск (вместо uvicorn)

> Uvicorn/FastAPI требует pip-установки.  
> Этот проект использует встроенный Python-сервер — никаких зависимостей!

### 1. Убедитесь что Python установлен
```bash
python3 --version
```

### 2. Перейдите в папку проекта
```bash
cd interior-project
```

### 3. Запустите сервер
```bash
python3 server.py
```

### 4. Откройте в браузере
```
http://localhost:8000
```

---

## Если хотите uvicorn (установка)

```bash
pip install uvicorn fastapi
```

Затем создайте `app.py`:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def root():
    return FileResponse("index.html")
```

И запускайте:

```bash
uvicorn app:app --reload --port 8000
```

---

## Технологии

- **Python** `http.server` — встроенный веб-сервер
- **HTML5** — семантическая разметка
- **CSS3** — кастомные свойства, Grid, анимации, @keyframes
- **JavaScript** — Intersection Observer, scroll effects
- **Unsplash API** — бесплатные фотографии интерьеров
- **Google Fonts** — Cormorant Garamond + Jost

---

## Контент

Три концепции интерьера:
- **Wabi-Sabi** — Пентхаус «Тишина» (180 м²)  
- **Japandi** — Апартаменты «Kiiro» (85 м²)  
- **Biophilic** — Офис Greenward (320 м²)  
- **Art Deco** — Резиденция «Ар-Деко» (460 м²)

---

*© 2024 Учебный проект · Алматинский Технологический Университет · Алматы*
