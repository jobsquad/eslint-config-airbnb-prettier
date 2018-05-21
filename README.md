# eslint-config-prettier-airbnb
`eslint` configuration that uses `eslint-config-airbnb-base` and extends it to not conflict with `prettier`.

## Installation

If you use yarn, run

```
npm info "eslint-config-prettier-airbnb@latest" peerDependencies
```

to list the peer dependencies and versions, then run

```
yarn add --dev <dependency>@<version>
```

for each listed peer dependency.

## Usage
To use the `eslint` config:

`.eslintrc.js`
```js
module.exports = {
  extends: ['prettier-airbnb']
}
```

To use the `prettier` config:

`.prettierrc.js`
```js
const options = require('eslint-config-prettier-airbnb/prettier')
module.exports = options
```
