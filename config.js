
// 1. Вставьте URL веб-приложения из Google Apps Script (заканчивается на /exec)
// ВАЖНО: При развертывании выберите "Who has access: Anyone" (У кого есть доступ: Все)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzlp0tlxmJbaMmwnMkE4_-QB3qdvaJ_zUji-xp0vqhNpLencdJbuehhpLz4de6ASTJS/exec";

// 2. Вставьте ссылку для отображения таблицы (для админки).
// ВАРИАНТ А (Лучший): Файл -> Поделиться -> Опубликовать в интернете -> Встроить -> Скопировать ссылку из src="..."
const GOOGLE_SHEET_EMBED_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-0C7Jn3eccb1L9b4NtNK1sVSY2C6XATxErumLP_UsUtYZfKpp0Saw1-5uKMAiJlWk8qrUAP3cRgaI/pubhtml?widget=true&headers=false";

// ПАРОЛИ
const USER_PASSWORD = "111";   // Пароль для прохождения теста
const ADMIN_PASSWORD = "333";  // Пароль для входа в админку
