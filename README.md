# PunkApi Catalogue made with Vue.js

## Description

Showcase beers from public resources of Punk Api.

Beers are presented in an initial screen with an option of load more, 20 items each time.

Three filters are provided, by name, by non-alcoholic items and by brewed date range.

Responsive version is not provided.

## Uses

- Unit testing with Jest
- Some components imported from Vuetify, some custom made
- Vuex with two modules:
  - Punkapi module for managing the beers store
  - Common module for general purpose store
- Axios is used for HTTP requests
- Eslint and Prettier for code standars
  - `singleQuote` in JS
  - No `semis`
  - `trailingComma` always-multiline

## To do

- Caching data from server responses is not implemented, yet.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn unit
yarn unit:cov
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
