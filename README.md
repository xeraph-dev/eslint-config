# @xeraph-dev/eslint-config

## Installation

_No need to install the *eslint* package_

```shell
npm install --save-dev prettier @xeraph-dev/eslint-config
```

or if prefer to use [@xeraph-dev/prettier-config](https://www.npmjs.com/package/@xeraph-dev/prettier-config)

```shell
npm install --save-dev @xeraph-dev/prettier-config @xeraph-dev/eslint-config
```

### To lint typescript files

```shell
npm install --save-dev typescript
```

### To lint astro files

```shell
npm install --save-dev astro
```

## Configuration

### Extend via _package.json_

```json
{
  // ...
  "eslintConfig": {
    "extends": "@xeraph-dev"
  }
  // ...
}
```

### Extend via _.eslintrc.cjs_

```javascript
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@xeraph-dev'],
}
```
