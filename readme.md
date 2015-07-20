# is-cr2 [![Build Status](https://travis-ci.org/gillstrom/is-cr2.svg?branch=master)](https://travis-ci.org/gillstrom/is-cr2)

> Check if a Buffer/Uint8Array is a CR2 file.


## Install

```
$ npm install --save is-cr2
```


## Usage

```js
var read = require('fs').readFileSync;
var isCr2 = require('is-cr2');

isCr2(read('foo.cr2'));
//=> true
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
