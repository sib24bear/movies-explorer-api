# Movies Explorer API

## «Movies Explorer» - final project work by profession web developer [YandexPracticum](https://praktikum.yandex.ru "YandexPracticum")

## Task

The project is designed to practice and consolidate skills in working with JavaScript, Node.js, Express.js, MongoDB. The project is an API server for interacting with the frontend part of the project.
The project consists of front-end and back-end parts.

Backend:
- connect database
- create schemas of user and saved movie
- create controllers and routes for user and movies
- create controllers and routes for authorization and authentication
- set up validation of data coming from the user
- create and set up centralized error handling
- implement logging of requests and errors
- create a virtual machine and deploy a server on it
- create a domain and attach it to the server

## API requests

### Open routes

`POST /signup` - creates a user with the following passed in the body: email, password and name<br>
`POST /signin` - checks the mail and password passed in the body and returns a JWT

### Routes with token verification

`GET /users/me` - returns information about the user (email and name)<br>
`PATCH /users/me` - update user information (email and name)<br>
`GET /movies` - returns all movies saved by the current user<br>
`POST /movies` - creates a movie with the following passed in the body: country, director, duration, year, description, image, trailer, nameRU, nameEN and thumbnail, movieId<br>
`DELETE /movies/_id` - deletes a saved movie by id

## Commands for starting a project

`npm install` - install project dependency<br>
`npm start` - start devServer at http://localhost:3000/<br>
`npm run dev` - starts the devServer with hot-reload at http://localhost:3000/<br>
`npm run lint` - check ESlint against AirBnB standard

## Tech

- JavaScript
- NodeJS
- ExpressJS
- MongoDB

## Link to frontend part

[Movies Explorer Frontend](https://github.com/sib24bear/movies-explorer-frontend "Movies Explorer Frontend")

---

# Movies Explorer API

## «Movies Explorer» - финальная проектная работа по профессии веб-разработчик [Яндекс Практикум](https://praktikum.yandex.ru "Яндекс Практикум")

## Задача

Проект предназначен для отработки и закрепления навыков в работе с JavaScript, Node.js, Express.js, MongoDB. Проект представляет собой API сервер для взаимодействия с фронтенд частью проекта.
Проект сосотоит из фронтенд и бэкенд частей.

Бэкенд:

- подключить базу данных
- создать схемы пользователя и сохраненного фильма
- создать конторллеры и роуты для пользователя и фильмов
- создать конторллеры и роуты для авторизации и аутентификации
- насторить валидацию данных приходящих от пользователя
- создать и насторить централизованную обработуку ошибок
- реализовать логирование запросов и ошибок
- создать виртуальную машину и развернуть на ней сервер
- создать домен и прикрепить его к серверу

## Работа с API

### Открытые роуты

`POST /signup` - создаёт пользователя с переданными в теле: email, password и name<br>
`POST /signin` - проверяет переданные в теле почту и пароль и возвращает JWT

### Роуты с проверкой токена

`GET /users/me` - возвращает информацию о пользователе (email и имя)<br>
`PATCH /users/me` - обновляет информацию о пользователе (email и имя)<br>
`GET /movies` - возвращает все сохранённые текущим  пользователем фильмы<br>
`POST /movies` - создаёт фильм с переданными в теле: country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId<br>
`DELETE /movies/_id` - удаляет сохранённый фильм по id

## Команды для запуска проекта

`npm install` -  установка зависимости проекта<br>
`npm start` – запуск devServer на http://localhost:3000/<br>
`npm run dev` — запускает devServer с hot-reload на http://localhost:3000/<br>
`npm run lint` – проверка ESlint по стандарту AirBnB

## Стек

- JavaScript
- NodeJS
- ExpressJS
- MongoDB

## Ссылка на фронтэнд часть

[Movies Explorer Frontend](https://github.com/sib24bear/movies-explorer-frontend "Movies Explorer Frontend")
