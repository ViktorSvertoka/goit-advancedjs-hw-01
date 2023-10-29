# Критерії приймання

- Створено репозиторій `goit-advancedjs-hw-01`.
- Домашня робота містить два посилання: на вихідні файли і робочу сторінку на
  `GitHub Pages`.
- В консолі відсутні помилки і попередження під час відкриття живої сторінки
  завдання.
- Проект зібраний за допомогою
  [vanilla-app-template](https://github.com/goitacademy/vanilla-app-template).
- Код відформатований за допомогою `Prettier`.

#### Формат оцінювання:

- Оцінка від 0 до 100

#### Формат здачi:

- Два посилання: на вихідні файли і робочу сторінку на `GitHub Pages`
- Прикрiплений файл репозиторію у форматi zip

## Стартові файли

[Завантажуй стартові файли](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Fjavascript-homework%2Ftree%2Fmain%2Fv2%2F08%2Fsrc)
з готовою розміткою, стилями та підключеними файлами скриптів для кожного
завдання. Скопіюй їх собі в проєкт, повністю замінивши папку `src` у
[vanilla-app-template](https://github.com/goitacademy/vanilla-app-template).

## Завдання 1. Бібліотека `SimpleLightbox`

Виконуй це завдання у файлах `01-gallery.html` і `01-gallery.js`. Розбий його на
декілька підзавдань:

1. Додай бібліотеку [SimpleLightbox](https://simplelightbox.com/) як залежність
   проекту, використовуючи `npm` (посилання на CDN з твоєї минулої роботи більше
   не потрібне).
2. Використовуй свій JavaScript код з станної домашньої роботи на курсi
   JavaScript Fundamentals: From Basics to Advanced Concepts, але виконай
   рефакторинг з урахуванням того, що бібліотека була встановлена через `npm`
   (синтаксис import/export).

Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один
імпорт, крім того, що описаний в документації.

```js
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Завдання 2. Відеоплеєр

HTML містить `<iframe>` з відео для Vimeo плеєра. Напиши скрипт, який буде
зберігати поточний час відтворення відео у локальне сховище і, після
перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

```html
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Виконуй це завдання у файлах `02-video.html` і `02-video.js`. Розбий його на
декілька підзавдань:

1. Ознайомся з
   [документацією](https://github.com/vimeo/player.js/#vimeo-player-api)
   бібліотеки Vimeo плеєра.
2. Додай бібліотеку як залежність проекту через `npm`.
3. Ініціалізуй плеєр у файлі скрипта як це описано в секції
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player),
   але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
4. Вивчи документацію методу
   [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   і почни відстежувати подію
   [timeupdate](https://github.com/vimeo/player.js/#events) - оновлення часу
   відтворення.
5. Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде
   рядок `"videoplayer-current-time"`.
6. Під час перезавантаження сторінки скористайся методом
   [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   з метою відновлення відтворення зі збереженої позиції.
7. Додай до проекту бібілотеку
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) і зроби так,
   щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

## Завдання 3. Форма зворотного зв'язку

HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у
локальне сховище, коли користувач щось друкує.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Виконуй це завдання у файлах `03-feedback.html` і `03-feedback.js`. Розбий його
на декілька підзавдань:

1. Відстежуй на формі подію `input`, і щоразу записуй у локальне сховище об'єкт
   з полями `email` і `message`, у яких зберігай поточні значення полів форми.
   Нехай ключем для сховища буде рядок `"feedback-form-state"`.
2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені
   дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
   об'єкт з полями `email`, `message` та їхніми поточними значеннями.
4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
   Для цього додай до проекту і використовуй бібліотеку
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle).

![Screencapture](./assets/1.png) ![Screencapture](./assets/2.png)
![Screencapture](./assets/3.png) ![Screencapture](./assets/4.png)
