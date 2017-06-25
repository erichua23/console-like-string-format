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

说明符 | 输出
--- | --- 
%s | 将值格式化为字符串
%i | 或 %d	将值格式化为整型
%f | 将值格式化为浮点值
%o | 将值JSON.stringify以后输出
%O | 将值JSON.stringify以后输出
%c | 占用一个参数，并忽略此占位符


You can get much more detail example in the unit test case(./test/index.test.js)

## License
MIT
