# API для аутентификации пользователей и сохранения фильмов.

Дипломная работа по курсу "Веб-разработка" от Яндекс Практикума. Проект предназначен для отработки и закрепления навыков в работе с JS и Node.js.

Проект представляет собой API сервер для взаимодействия с фронтенд частью проекта. При создании проекта использовались технологии JS, Node.js, Exspress.js, MongoDB, Postman.


### Запуск проекта
`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
`npm run lint` — запускает проверку ESlint по стандарту AirBnB

### Адрес сервера
  api.movies.diplom.nomoredomains.xyz

### IP адрес сервера
  51.250.16.97

### Обращение к серверу
  POST /signup - создаёт пользователя с переданными в теле: email, password и name
  POST /signin - проверяет переданные в теле почту и пароль и возвращает JWT
  GET /users/me - возвращает информацию о пользователе (email и имя)
  PATCH /users/me - обновляет информацию о пользователе (email и имя)
  GET /movies - возвращает все сохранённые текущим  пользователем фильмы
  POST /movies - создаёт фильм с переданными в теле: country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
  DELETE /movies/_id - удаляет сохранённый фильм по id
