<h1><a href='https://thefashionemporium.netlify.app/'>FashionEmporium</a></h1>
<br/>

[![Create React App](https://img.shields.io/badge/Create%20React%20App-4.0.3-61DAFB?style=for-the-badge)](https://github.com/facebook/create-react-app)
[![react](https://img.shields.io/badge/react-17.0.2-ffcc66?style=for-the-badge)](https://github.com/facebook/react)
[![redux](https://img.shields.io/badge/redux-4.1.2-ffcc66?style=for-the-badge)](https://github.com/reduxjs/redux)
[![reselect](https://img.shields.io/badge/reselect-4.1.5-6cc644?style=for-the-badge)](https://github.com/reduxjs/reselect)
[![sass](https://img.shields.io/badge/sass-1.45.0-ffcc66?style=for-the-badge)](https://github.com/sass/sass)
[![react-responsive](https://img.shields.io/badge/react--responsive-9.0.0--beta.5-ffcc66?style=for-the-badge)](https://github.com/contra/react-responsive)
[![react-stripe-checkout](https://img.shields.io/badge/react--stripe--checkout-2.6.3-6cc644?style=for-the-badge)](https://github.com/azmenak/react-stripe-checkout)
[![redux-logger](https://img.shields.io/badge/redux--logger-3.0.6-6cc644?style=for-the-badge)](https://github.com/LogRocket/redux-logger)
[![redux-persist](https://img.shields.io/badge/redux--persist-6.0.0-ffcc66?style=for-the-badge)](https://github.com/rt2zz/redux-persist)
[![redux-saga](https://img.shields.io/badge/redux--saga-1.1.3-6cc644?style=for-the-badge)](https://github.com/redux-saga/redux-saga)
[![redux-thunk](https://img.shields.io/badge/redux--thunk-2.4.1-ffcc66?style=for-the-badge)](https://github.com/reduxjs/redux-thunk)
[![styled-components](https://img.shields.io/badge/styled--components-5.3.3-6cc644?style=for-the-badge)](https://github.com/styled-components/styled-components)
[![firebase](https://img.shields.io/badge/firebase-9.6.1-6cc644?style=for-the-badge)](https://github.com/firebase/firebase-js-sdk)
[![Лицензия](https://img.shields.io/github/license/kluevevga/FashionEmporium?color=6cc644&style=for-the-badge)](https://github.com/kluevga/FashionEmporium/blob/master/LICENSE)

## О проекте "FashionEmporium" 🚀

"FashionEmporium" - интернет-магазин, разработанный с использованием фреймворка React с применением `create-react-app`
для быстрого старта разработки. Для хранения данных используется Firebase Firestore.

### Особенности проекта:

  - **Логирование**: В проекте настроено логирование при помощи `redux-logger`, что обеспечивает более эффективное отслеживание ошибок и багов.  


  - **Управление состоянием**: Для эффективного управления состоянием используется библиотека `React Saga`, что позволяет легко координировать и управлять асинхронными операциями.  


  - **CSS in JS**: Страницы проекта оформлены с использованием библиотеки `Styled Components`, что обеспечивает гибкость и возможность создания стильных интерфейсов.  


  - **Хранение в сессиях**: Использование `Redux Persist` позволяет сохранять выбранные товары в корзине пользователя даже после перезапуска приложения.  


  - **Интеграция**: "FashionEmporium" интегрирован с firestore - облачной платформой для хранения данных.  


  - **Аутентификация**: Механизм аутентификации реализован при помощи библиотеки Firebase, позволяя пользователям регистрироваться и входить с учетными записями Google.  

## Запуск проекта

1. Клонируйте репозиторий

   ```bash
   git clone https://github.com/kluevevga/FashionEmporium.git
   ```

2. Перейдите в директорию проекта

   ```bash
   cd FashionEmporium
   ```

3. Установите зависимости

   ```bash
   npm install
   ```

4. Запуск проекта

   ```bash
   npm start
   ```

   Проект запустится и будет доступен по следующему адресу: `http://localhost:3000`

## Лицензия 📜

Этот проект распространяется под лицензией `MIT`. Дополнительную информацию можно найти в
файле [LICENSE](https://github.com/kluevevga/FashionEmporium/blob/master/LICENSE).