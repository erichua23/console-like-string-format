This library is write for another library [tianyan-react-native](https://github.com/UnPourTous/tianyan-react-native), used for format string like `console.log`, it compatible with all types which is supported by `console.log`

## Installation

``` shell 
npm install console-like-string-format --save 
```

## Usage 

**Basic Usage**

``` js 
console.log(format('abcd %%f %%ss %o %d %i', '100.3', 'foo', {a: 1, b: '1'}, 100, 100.10, 1000, {a: 1})))
// Expected Result:  'abcd %f %ss "100.3" NaN NaN 100 100.1 1000 {"a":1}'
```


**Supported Types**
// TODO 


You can get much more detail example in the unit test case(./test/index.test.js)

## License
MIT
