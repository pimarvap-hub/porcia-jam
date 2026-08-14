# 🚀 Размещение на GitHub Pages (бесплатный сервер)

## ✨ ЧТО ПОЛУЧИТЕ:
- ✅ Бесплатный хостинг 24/7
- ✅ Собственный домен `username.github.io/porcia`
- ✅ SSL сертификат (автоматический)
- ✅ CI/CD (автоматическая сборка и развертывание)
- ✅ Версионирование кода
- ✅ Резервное копирование

---

## 📋 ШАГИ РАЗВЕРТЫВАНИЯ

### 1️⃣ Создать GitHub аккаунт (если нет)
Перейти на https://github.com/signup и создать аккаунт

### 2️⃣ Установить Git
```bash
# Скачать с https://git-scm.com/download/win
# Установить с дефолтными настройками

# Проверить установку:
git --version
```

### 3️⃣ Настроить Git (первый раз)
```bash
git config --global user.name "Ваше имя"
git config --global user.email "ваша.почта@example.com"
```

### 4️⃣ Инициализировать репозиторий
```bash
cd "C:\Users\20plo\Desktop\сайт варенье сабина"
git init
```

### 5️⃣ Создать файл .gitignore
Создайте файл `.gitignore` в корне папки с содержимым:
```
node_modules/
dist/
.env
.DS_Store
.musepool/
```

### 6️⃣ Добавить файлы в Git
```bash
git add .
git commit -m "Initial commit: супер-сайт варенья ПОРЦИЯ"
```

### 7️⃣ Создать репозиторий на GitHub
1. Перейти на https://github.com/new
2. Назвать репозиторий: `porcia-jam` (или как хотите)
3. Описание: `Сайт ПОРЦИЯ — мёд и варенье в стиках`
4. Выбрать Public (чтобы был виден всем)
5. Нажать "Create repository"

### 8️⃣ Подключить удаленный репозиторий
```bash
git remote add origin https://github.com/ВАШЕ_ИМЯ_ПОЛЬЗОВАТЕЛЯ/porcia-jam.git
git branch -M main
git push -u origin main
```

### 9️⃣ Настроить GitHub Pages

**Вариант A: Автоматическое развертывание (рекомендуется)**

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd app && npm install
      
      - name: Build
        run: cd app && npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./app/dist
```

**Вариант B: Ручное развертывание (более простой)**

1. Перейти в Settings репозитория
2. Найти "Pages" в левом меню
3. "Source" → выбрать "Deploy from a branch"
4. Branch → выбрать "main" и папку "/(root)"
5. Сохранить

---

## 🎯 ПЕРВЫЙ РАЗ: Полная последовательность

```bash
# 1. Перейти в папку
cd "C:\Users\20plo\Desktop\сайт варенье сабина"

# 2. Инициализировать Git
git init

# 3. Добавить файлы
git add .
git commit -m "Initial commit: ПОРЦИЯ супер-сайт"

# 4. Добавить удаленный репозиторий (замените на ваш)
git remote add origin https://github.com/ВАШЕ_ИМЯ/porcia-jam.git

# 5. Отправить на GitHub
git branch -M main
git push -u origin main

# 6. Собрать для production
cd app
npm run build

# 7. Готово! GitHub Pages автоматически развернет сайт
```

---

## 🌐 ПОСЛЕ РАЗВЕРТЫВАНИЯ

### Ваш сайт будет доступен на:
```
https://ВАШЕ_ИМЯ_ПОЛЬЗОВАТЕЛЯ.github.io/porcia-jam
```

Например: `https://john-doe.github.io/porcia-jam`

### Как сделать свой домен?

1. Купить домен (например, porcia.kz на Reg.ru)
2. В репозитории создать файл `CNAME`:
   ```
   porcia.kz
   ```
3. Настроить DNS у провайдера домена:
   - Добавить CNAME запись указывающую на `username.github.io`
4. Готово! Сайт будет на `https://porcia.kz`

---

## 📊 ОБНОВЛЕНИЕ САЙТА

Каждый раз когда вы делаете изменения:

```bash
# 1. Добавить изменения
git add .
git commit -m "Описание изменений"

# 2. Отправить на GitHub
git push

# GitHub Pages автоматически перестроит и развернет сайт!
# Это займет 1-2 минуты
```

---

## ⚙️ НАСТРОЙКА VITE ДЛЯ GITHUB PAGES

Отредактируйте `app/vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/porcia-jam/', // Замените на имя вашего репозитория
})
```

Затем пересоберите:
```bash
cd app
npm run build
git add .
git commit -m "Configure for GitHub Pages"
git push
```

---

## 🎬 ИНТЕГРАЦИЯ: GitHub Actions

GitHub автоматически:
1. Установит зависимости (`npm install`)
2. Соберет сайт (`npm run build`)
3. Развернет на GitHub Pages (`dist/`)
4. Каждый раз когда вы делаете `git push`

**Это совершенно бесплатно!**

---

## 🔐 ЗАЩИТА РЕПОЗИТОРИЯ

Рекомендуется:
1. В Settings → Branches → Добавить правило защиты для `main`
2. Требовать pull requests перед слиянием
3. Требовать одобрения перед развертыванием

---

## 🆘 ЕСЛИ ЧТО-ТО НЕ РАБОТАЕТ

### GitHub Pages не обновляется?
- Проверьте Settings → Pages → Source (должен быть "Deploy from a branch")
- Проверьте Actions вкладку (есть ошибки при сборке?)
- Очистите кеш браузера (Ctrl+Shift+Delete)

### Git push не работает?
```bash
# Проверить подключение
git remote -v

# Обновить URL (если нужно)
git remote set-url origin https://github.com/ВАШЕ_ИМЯ/porcia-jam.git

# Попробовать снова
git push -u origin main
```

### npm install ошибка?
```bash
# Использовать кеш
npm install --prefer-offline --no-audit

# Или очистить кеш
npm cache clean --force
npm install
```

---

## 💡 СОВЕТЫ

1. **Регулярно коммитьте** изменения:
   ```bash
   git add .
   git commit -m "Красивое описание"
   git push
   ```

2. **Используйте осмысленные сообщения** коммитов:
   ✅ "Добавлена галерея фото"
   ❌ "Изменения"

3. **Создавайте ветки для экспериментов**:
   ```bash
   git checkout -b experimental-feature
   # ... ваши изменения ...
   git push origin experimental-feature
   ```

4. **Отслеживайте версии** (tags):
   ```bash
   git tag -a v1.0 -m "Версия 1.0 - Первый выпуск"
   git push origin v1.0
   ```

---

## 📚 ПОЛЕЗНЫЕ ССЫЛКИ

- GitHub Pages docs: https://pages.github.com/
- GitHub Actions: https://github.com/features/actions
- Vite deployment: https://vitejs.dev/guide/static-deploy.html
- Git tutorial: https://git-scm.com/book/en/v2

---

## ✅ ЧЕК-ЛИСТ РАЗВЕРТЫВАНИЯ

- [ ] Создан GitHub аккаунт
- [ ] Установлен Git
- [ ] Git репозиторий инициализирован
- [ ] Файлы добавлены (git add .)
- [ ] Первый коммит сделан
- [ ] Репозиторий создан на GitHub
- [ ] Удаленный репозиторий подключен (git remote)
- [ ] Первый push выполнен (git push)
- [ ] GitHub Pages настроен
- [ ] Vite config обновлен (base: '/porcia-jam/')
- [ ] Сайт собран (npm run build)
- [ ] Сайт доступен на https://username.github.io/porcia-jam

---

## 🎉 ГОТОВО!

Теперь ваш сайт:
- ✅ Размещен в облаке (GitHub)
- ✅ Доступен 24/7
- ✅ Автоматически обновляется при каждом push
- ✅ Защищен SSL сертификатом
- ✅ Имеет резервные копии
- ✅ Совершенно бесплатен!

**Удачи! 🍓🍯🔥**

---

Версия: 1.0
Создано: 14 августа 2026 года
