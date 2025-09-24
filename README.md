# Claude AI CoP Demo V2 🚀

**Обновленные демо-скрипты по НОВОЙ структуре презентации!**

Полностью переработанные инлайновые команды согласно обновленной презентации CoP с фокусом на практические паттерны работы, MCP серверы и реальные лайфхаки.

## 🎯 Что нового в V2

- ✅ **Новая структура** согласно обновленной презентации
- ✅ **Практические паттерны**: /init, plan mode, паттерн "Слонсара"
- ✅ **MCP интеграции**: Git, Docker, Atlassian, Puppeteer
- ✅ **Лечение ИИ болезней**: галлюцинации, мания величия, ОКР, выгорание
- ✅ **Реальные лайфхаки** из практики работы
- ✅ **Комплексные сценарии** разработки и отладки

## 🚀 Быстрый старт

```bash
cd claude-inline-demo-v2

# Проверка готовности
npm run demo:check

# Быстрая демонстрация ключевых возможностей
npm run quick:demo

# Полная презентация V2
npm run present:all-v2
```

## 📋 Структура по новой презентации

### 🌟 Слайды 4-7: Текущее состояние ИИ

```bash
# Эволюция ИИ технологий
npm run slide04:text-evolution

# Как работает Claude
npm run slide05:claude-works  

# Отличия CLI-агента
npm run slide06:cli-difference

# MCP серверы и интеграции
npm run slide07:mcp-tools
```

### 🔄 Слайды 9-11: Основные паттерны работы

**Слайд 9: Основной flow**
```bash
# Полный flow: /init → plan → implement → check → debug → test → improve → review
npm run slide09:main-flow

# Отдельные шаги
npm run slide09:1-init        # /init - анализ кодовой базы
npm run slide09:2-plan        # Plan mode (shift+tab)
npm run slide09:3-implement   # Реализация выбранного варианта
npm run slide09:4-check       # Ручная проверка
npm run slide09:5-debug       # Дебаг и логи
npm run slide09:6-test        # Тесты и документация
npm run slide09:7-improve     # Предложения по улучшению
npm run slide09:8-review      # Ручное ревью + CodeRabbit CLI
```

**Слайд 10: Фикс багов 🔥**
```bash
# Паттерн фикса багов
npm run slide10:bug-fix-flow

# 🔥 Скармливание логов в контексте проекта
npm run slide10:logs-magic

# Пошаговый фикс
npm run slide10:1-analyze     # Анализ проблемы
npm run slide10:2-isolate     # Изоляция бага
npm run slide10:3-fix         # Генерация фикса
npm run slide10:4-explain     # Пояснение и проверка
npm run slide10:5-unittest    # Unit тесты
npm run slide10:6-integration # Интеграционные тесты
npm run slide10:7-document    # Документация
```

**Слайд 11: Разработка фич 🔥**
```bash
# Полный цикл разработки фичи
npm run slide11:feature-flow

# Шаги разработки
npm run slide11:1-analyze     # Анализ фичи
npm run slide11:2-design      # Выбор дизайна
npm run slide11:3-skeleton    # Файловый скелет
npm run slide11:4-logic       # Бизнес-логика
npm run slide11:5-integrate   # Интеграция частей
npm run slide11:6-improve     # Анализ на улучшение
npm run slide11:7-manual      # 🔥 Только ручные коммиты!
npm run slide11:meme          # Мем про плохие коммиты
```

### ✅ Слайды 13-15: Плюсы и минусы

**Слайд 13: Плюсы**
```bash
npm run slide13:pros-analyze   # 🎓 Анализ и погружение
npm run slide13:pros-routine   # 🤖 Рутинные задачи
npm run slide13:pros-refactor  # 🪛 Рефакторинг
npm run slide13:pros-tests     # 🧪 Тесты
npm run slide13:pros-api       # 🔥 API, CLI, файлы
npm run slide13:manual-dev     # Важность ручной разработки
```

**Слайд 14: Общие проблемы**
```bash
npm run slide14:human-review   # Human review + CodeRabbit CLI
npm run slide14:refactor-needed # CLAUDE.md и кастомные команды
npm run slide14:cost           # Стоимость и оптимизация
```

**Слайд 15: Лечение ИИ болезней 💊**
```bash
npm run slide15:hallucination-input  # 🤒 Галлюцинации ввода
npm run slide15:hallucination-output # 🤒 Галлюцинации вывода  
npm run slide15:megalomania          # 🤒 Мания величия
npm run slide15:ocd                  # 🤒 ИИ-ОКР зацикленность
npm run slide15:burnout              # 🤒 ИИ-выгорание
```

### 💡 Слайды 17-18: Лайфхаки

**Слайд 17: Практические лайфхаки**
```bash
npm run slide17:custom-scripts  # Кастомные скрипты ~/.claude
npm run slide17:git-ally        # Git как защитник от ИИ беспредела
npm run slide17:clear-reset     # /clear при проблемах
npm run slide17:elephant-pattern # 🔥 Паттерн "Слонсара"
```

**Слайд 18: Инновационные идеи**
```bash
npm run slide18:puppeteer-pattern # Puppeteer MCP + noVNC
npm run slide18:custom-agents     # Кастомные команды + субагенты
npm run slide18:support-automation # Автоматизация саппорта
npm run slide18:marketing-automation # Claude + n8n для маркетинга
```

## 🛠️ Специальные техники и паттерны

### 🔄 Основные паттерны Claude
```bash
npm run pattern:compact-clear-init  # /compact + /clear + /init
npm run pattern:plan-mode          # Plan mode (shift+tab)
npm run pattern:logs-debugging     # Скармливание логов
npm run pattern:incremental        # Инкрементальный подход
npm run pattern:file-targeting     # Работа с @файлами
```

### 🔌 MCP серверы
```bash
npm run mcp:git         # Git MCP интеграция
npm run mcp:docker      # Docker MCP
npm run mcp:atlassian   # Atlassian (Jira/Confluence)
npm run mcp:slack       # Slack уведомления
npm run mcp:puppeteer   # Puppeteer автоматизация
```

### ⚡ Команды Claude CLI
```bash
npm run claude:init     # claude /init
npm run claude:compact  # claude /compact  
npm run claude:clear    # claude /clear
npm run claude:plan     # claude plan
npm run claude:custom   # Кастомные команды
```

## 🎬 Демо-наборы по темам

### 🌍 Эволюция ИИ
```bash
npm run demo:ai-evolution
# ➤ Этапы развития → Как работает Claude → MCP серверы
```

### 🔄 Основные паттерны
```bash
npm run demo:main-patterns  
# ➤ Main flow → Bug fix → Feature development
```

### ⚖️ Плюсы и минусы
```bash
npm run demo:pros-cons
# ➤ Анализ → Рутина → Human review → Галлюцинации
```

### 💡 Лайфхаки
```bash
npm run demo:lifehacks
# ➤ Паттерн Слонсара → Git защита → Puppeteer MCP
```

### 💊 Лечение ИИ
```bash
npm run demo:healing
# ➤ Все виды ИИ болезней и их лечение
```

## 🚀 Комплексные сценарии

### 🏗️ Разработка полной фичи
```bash
npm run scenario:full-feature
# ➤ Анализ → Дизайн → Логика → Улучшение
```

### 🐛 Охота на баги
```bash
npm run scenario:bug-hunting
# ➤ Анализ → Изоляция → Фикс → Unit тесты
```

### 💊 Лечение ИИ проблем
```bash
npm run scenario:ai-healing
# ➤ Галлюцинации → Мания величия → Сброс
```

### 📊 Анализ проекта
```bash
npm run scenario:project-analysis
# ➤ /init → Анализ плюсов → API работа
```

## 🎯 Быстрые демо

```bash
npm run quick:init      # Быстрый /init
npm run quick:plan      # Plan mode демо
npm run quick:heal      # Лечение галлюцинаций
npm run quick:elephant  # Паттерн Слонсара
npm run quick:mcp       # MCP серверы
npm run quick:demo      # Все в одном
```

## 📈 Ключевые отличия V2

| Аспект | V1 | V2 |
|--------|----|----|
| Структура | По старой презентации | По обновленной |
| Паттерны | Базовые | Практические (/init, plan mode) |
| MCP | Упоминания | Полная интеграция |
| Лечение ИИ | Общие советы | Конкретные команды |
| Реальность | Теоретические примеры | Практические лайфхаки |

## 🛠️ Тестирование и утилиты

```bash
# Запуск тестов
npm run test:filtration   # Конкретный тест
npm run test:chrome       # Chrome профиль
npm run test:firefox      # Firefox профиль

# Docker окружение
npm run docker:up         # Поднять контейнеры
npm run docker:logs       # Смотреть логи

# Анализ результатов
npm run reports:surefire  # Отчеты тестов
npm run reports:screenshots # Скриншоты
npm run reports:logs      # Логи
```

## 💡 Примеры реальных команд

### Паттерн Слонсара 🐘
```bash
npm run slide17:elephant-pattern
# ➤ логи → фикс → проверка → анализ логов → добавление логов → итерация → результат
```

### Лечение галлюцинаций 💊
```bash
npm run slide15:hallucination-output
# ➤ /init + тесты + логи для осознания проблемы
```

### MCP Puppeteer автоматизация 🤖
```bash
npm run slide18:puppeteer-pattern  
# ➤ Puppeteer MCP + noVNC + headless Chrome
```

### Plan Mode демонстрация 📋
```bash
npm run pattern:plan-mode
# ➤ Shift+Tab для входа в план режим
```

## 🎪 Полная презентация

```bash
# Поэтапная презентация
npm run present:intro      # Введение в ИИ
npm run present:patterns   # Основные паттерны  
npm run present:experience # Опыт использования
npm run present:innovation # Инновации

# Вся презентация сразу
npm run present:all-v2
```

## 🆚 V1 vs V2

**Используйте V2 если:**
- ✅ Хотите актуальную информацию
- ✅ Нужны практические лайфхаки
- ✅ Интересуют MCP интеграции
- ✅ Важны реальные паттерны работы

**Используйте V1 если:**
- ⚠️ Нужна базовая структура
- ⚠️ Простые примеры
- ⚠️ Обучение основам

---

🔥 **V2 - это реальный опыт работы с Claude, оформленный в практические команды!**