# divmod

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

node-divmod

```
npm i divmod
```

## Usage

```js
import divmod from 'divmod';
```

### example

```js
divmod(132, 7); // => [18, 6]

divmod(65, -4); // => [-17, 1]

divmod(-12, 5); // => [-3, -2]

divmod(-93, -6); // => [15, -3]
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Test

```
npm test
```

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/divmod.svg
[npm-url]: https://www.npmjs.org/package/divmod
[travis-image]: http://img.shields.io/travis/sugarshin/node-divmod/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/node-divmod
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/node-divmod/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/node-divmod
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fnode-divmod.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fnode-divmod
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/node-divmod.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/node-divmod.svg
