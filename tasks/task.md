Создай полный готовый свёрстанный сайт (Next.js 14 + Tailwind CSS + Framer Motion для анимаций + React Hook Form для форм) для премиум UX/UI дизайн-студии B2B SaaS. Тема: in-house embedded команда ex-Яндекс lead.

Используй @mcp.json для подключения Figma Desktop. Макет в @design.txt

КРИТИЧЕСКИ АНАЛИЗИРУЙ прикреплённый Figma-макет (hero, кейсы, процессы): точно скопируй цвета, typography, spacing, компоненты, анимации. Используй прикреплённый логотип и бренд-цвета как primary theme. Расширь на полную структуру БЕЗ изменений стиля.

Структура (строго):

**Компоненты (globals):**
- [x] Navbar: Sticky top, logo left, links (Главная, Кейсы, Процесс, Партнёрам, Карьера, Контакты), CTA "Обсудить проект".
- [x] Footer: Links, social (Behance must-have), copyright.
- [x] Forms: Modal/short (name, telegram, description, portfolio upload для карьеры).

**Главная (/): Long-scroll**
1. [x] Hero (из Figma): Заголовок/UVP + CTA.
2. [x] Лицо студии: Photo card ex-lead + bio.
3. [x] Команда: 3-4 grid cards (hover effects).
4. [x] Клиенты: Logo carousel.
5. [x] Кейсы: 3-4 cards (из Figma) → /cases/[id] или Behance.
6. [x] Процесс: Timeline 3-5 steps (из Figma), горизонтальный скролл карточек.
7. [x] Партнёры: Card + CTA form.
8. [x] Карьера: Card + form.
9. [x] Контакты: Form + Telegram.

Функционал:
- [x] Кликабельный nav/routing.
- [x] Forms submit → console.log/email mock.
- [x] Анимации: Scroll-triggered, hovers.
- [x] SEO: Head meta, sitemap.xml.
- [x] Deploy-ready

Шаги агента:
1. [x] Setup Next.js project с Tailwind/Framer.
2. [x] Extract Figma стиль (tokens/CSS vars).
3. [x] Build components по порядку.
4. [x] Add pages/routing.
5. [x] Test responsive/animations.
6. [x] Generate preview + deploy instructions.

Output: Полный код в /output, localhost run, zip для deploy. Pixel-perfect к Figma.