# eslint-config-neat

ESLint config for writing clean JavaScript code, based on [standardJS](https://standardjs.com/).

## Installation

Install ESLint and this config package:

```bash
npm install --save-dev eslint eslint-config-neat
```

Then, extends `eslint-config-neat` in your `.eslintrc.*` file. An example config:

```json
{
  "extends": "standard",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  }
}
```

## Principles

* Write clean code. Don't put all staff in one file or one function.
* Prefer new syntax. New ES2017 syntax generally means cleaner code. Use destructuring, arrow function, template string etc.
