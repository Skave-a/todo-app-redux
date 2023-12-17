# Redux Base

## Что должно быть сделано:

1. Копировать ветку `main` исходного репозитория и создать отдельную ветку `redux-base` для этого задания.
2. Сконфигурировать store, и обернуть компоненты в `<Provider />` в `App.tsx`.
3. Реализовать reducer `todosReducer` для store с `ADD_TODO`, `REMOVE_TODO` и `TOGGLE_TODO` с использованием массива из объектов `Todo`.
3. Реализовать экшены `addTodo` , `removeTodo` и `toggleTodo` и их вызов для компонентов `<TodoForm />` и `<TodosListItem />`, экшены должны быть реализованы без асинхронной логики.
4. Для конфигурации store использовать устаревшую функцию `createStore`.
5. Для генерации id использовать `uuid v4`.
6. Подключить Redux DevTools Extension.


Backend для этого задания не требуется, версии пакетов обновлять не нужно, устанавливать дополнительно пакеты не нужно.

### Условия выполнения

* Приложение работает.
* Все тесты проходят: `npm run test:base`.
* Линтер не выдает ошибок и предупреждений.

### Теория

* [Знакомство с Redux](https://github.com/shopot/react-101/tree/redux-base)
* [Redux Base](https://handsonreact.com/docs/redux)
* [Redux Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/redux-react-guide/)
* [Простое соглашение об именах для Action Creators](https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/)
* [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)
* [Redux & TypeScript](https://handsonreact.com/docs/redux-typescript)
* [Типизация Root State и Dispatch](https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types)
* [Типизация useDispatch и useSelector](https://redux.js.org/usage/usage-with-typescript#define-typed-hooks)
* [Использование типизированных хуков в компонентах](https://redux.js.org/usage/usage-with-typescript#use-typed-hooks-in-components)
* [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#installation)
* [Getting Redux DevTools to Work with TypeScript](https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/)

## Копирование репозитория todo-app-redux.

- Создайте новый репозиторий на GitHub: `todo-app-redux`
- Клонируйте этот репозиторий: `$ git clone https://github.com/shopot/todo-app-redux.git`
- Перейдите в директорию: `$ cd todo-app-redux`
- Удалите `.git` директорию: `$ rm -rf .git`
- Создайте пустой Git репозиторий : `$ git init`
- Подключите удаленный репозиторий: `$ git remote add origin https://github.com/your_nickname/todo-app-redux.git`
- Переименуйте ветку: `$ git branch -M main`
- Добавьте существующие файлы в репозиторий: `$ gti add .`
- Выполните первый коммит: `$ git commit -m "init: start project"`
- Отправьте изменения в GitHub : `$ git push -u origin main`

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
```
