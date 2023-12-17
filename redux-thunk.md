# Redux Thunk

Бэкенд (json-server) для этого задания запускается командой `npm run backend`, после запуска доступен по адресу `http://localhost:3000/todos`.

Официальная документация по работе с json-server: https://github.com/typicode/json-server

Шпаргалка по JSON Server: [JSON Server](https://my-js.org/docs/cheatsheet/json-server/)


## Что должно быть сделано:

1. Задание  делается на основе предыдущего модуля Redux Base, создать отдельную ветку `redux-thunk` для этого задания.
2. Реализовать слой API для работы с бэкендом для CRUD операций, для реализации использовать стандартный `fetch` или `axios`.
3. Сконфигурировать store, и добавить `thunk` middleware для обработки асинхронных экшенов.
4. Реализовать асинхронные экшены `loadTodosAsync`,  `addTodoAsync`,  `toggleTodoAsync`, `removeTodoAsync` и их вызов для компонентов `<TodoForm />` и `<TodosListItem />`, экшены должны взаимодействовать со слоем API и отправлять/принимать запросы к бэкенду, в результате которых обновлять Redux Store.


Версии пакетов обновлять не нужно, устанавливать дополнительно пакеты не нужно, реализовывать жизненный цикл запросов (isLoading, isError, isFetching и тд) не требуется.

### Условия выполнения

* Приложение работает.
* Все тесты проходят:
   - `npm run test:base`
   - `npm run test:thunk`
* Линтер не выдает ошибок и предупреждений.

### Теория

* [Знакомство с Redux](https://github.com/shopot/react-101/tree/redux-base)
* [Redux Thunk (handsonreact.com)](https://handsonreact.com/docs/redux-thunk)
* [React Redux Thunk (handsonreact.com)](https://handsonreact.com/docs/react-redux-thunk)
* [Thunk middleware for Redux (redux-thunk)](https://github.com/reduxjs/redux-thunk)
* [Redux Thunk Explained with Examples (freecodecamp.org)](https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/)
* [Redux: Writing Logic with Thunks (redux.js.org)](https://redux.js.org/usage/writing-logic-thunks)


## Установка и запуск

- Использовать `node 18.x` или выше.

```shell
# Install the dependencies
$ npm install

# Start Vite development server
$ npm run dev

# Build production
$ npm run build

# Preview production after build production
$ npm run preview

# Start linting
$ npm run lint

# Start tests
$ npm run test:base
$ npm run test:thunk
```
