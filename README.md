# ctftime-scraper

> A scraper for https://ctftime.org/

## requirements

- node >= v9.4.0
- npm >= 5.6.0

## install

Using npm:

```shell
npm install --save ctftime-scraper
```

## usage

### get team

Return a Promise that resolve with the [Team ](lib/schemas/team.json).

```js
const ctftime = require('ctftime-scraper')

ctftime.getTeam(teamId)
  .then(team => console.log(team))
  .catch(error => console.error(error))
```

### get writeup

Return a Promise that resolve with the [Writeup ](lib/schemas/writeup.json).

```js
const ctftime = require('ctftime-scraper')

ctftime.getWriteup(writeupId)
  .then(writeup => console.log(writeup))
  .catch(error => console.error(error))
```

## developement

Install dependencies:

```shell
npm install
```

Run the linter:

```shell
npm run linter
```

Fix using linter:

```shell
npm run linter-fix
```

## test

Run the tests:

```shell
npm test
```

## license

MIT
