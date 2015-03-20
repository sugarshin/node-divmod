# node-divmod

[![Build Status](https://travis-ci.org/sugarshin/node-divmod.svg?branch=master)](https://travis-ci.org/sugarshin/node-divmod) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fnode-divmod.svg)](http://badge.fury.io/gh/sugarshin%2Fnode-divmod) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

node-divmod

```
npm i divmod
```

## Usage

```js
var divmod = require('divmod');
```

or

```html
<script src="build/node-divmod.js"></script>
```

### example

```js
divmod(132, 7); // => [ 18, 6 ]

divmod(65, -4); // => [ -17, 1 ]

divmod(-12, 5); // => [ -3, -2 ]

divmod(-93, -6); // => [ 15, -3 ]
```

## Contributing

[Babel](//babeljs.io/)

[Browserify](//browserify.org/)

[Mocha](//mochajs.org/)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
