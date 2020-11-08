# PunkApi Catalogue made with Vue.js

![Branches badge](./reports/unit/coverage/badges/badge-branches.svg)
![Functions badge](./reports/unit/coverage/badges/badge-functions.svg)
![Lines badge](./reports/unit/coverage/badges/badge-lines.svg)
![Statements badge](./reports/unit/coverage/badges/badge-statements.svg)

## Description

Showcase beers from public resources of Punk Api.

Beers are presented in an initial screen with an option of load more, 20 items each time.

Three filters are provided, by name, by non-alcoholic items and by brewed date range.

Responsive version is not fully revised. A `responsive.js` mixin in used for the main grid breakpoints, so this component is supposed to work fine in all resolutions. some elements could break, specially in small mobile resolutions.

Dark theme made with Vuetify `theme.dark` and CSS custom properties. Will not work in IE11.

Components use BEM for preventing global style conflicts. Also `scope` prop is in use.

Skeletons are implemented in grid items in case of slow network speeds.

## Uses

- Unit testing with Jest.
- Some components imported from Vuetify, some custom made.
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
- Fully responsive.
- More units

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
