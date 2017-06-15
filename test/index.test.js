const {format} = require('../dist/console-like-string-format')
const {expect} = require('chai')

describe('%c', function () {
  it('%c', function () {
    expect(format('%c', 'foo')).equal('')
  })

  it('%c with extra arguments', function () {
    expect(format('%c', 'foo', 'bar')).equal(' bar')
  })
})

describe('%s', function () {
  it('%s', function () {
    expect(format('%s', 'foo')).equal('foo')
  })

  it('%s with extra arguments', function () {
    expect(format('%s', 'foo', 'bar')).equal('foo bar')
  })
})

describe('%o or %O', function () {
  it('%o', function () {
    expect(format('%o', {foo: 'bar'})).equal('{"foo":"bar"}')
  })

  it('%o with extra arguments', function () {
    expect(format('%s', 'foo', 'bar')).equal('foo bar')
  })

  it('%O', function () {
    expect(format('%O', {foo: 'bar'})).equal('{"foo":"bar"}')
  })

  it('%O with extra arguments', function () {
    expect(format('%O', {foo: 'bar'}, 'hello')).equal('{"foo":"bar"} hello')
  })
})

describe('%d or %i', function () {
  it('normal', function () {
    expect(format('%d', 100)).equal('100')
    expect(format('%d', 100.4)).equal('100')
    expect(format('%i', 100)).equal('100')
  })
  it('can parse', function () {
    expect(format('%d', '100')).equal('100')
    expect(format('%i', '100')).equal('100')
  })
  it('can not parse NaN', function () {
    expect(format('%d', 'foo')).equal('NaN')
    expect(format('%i', 'foo')).equal('NaN')
  })
})

describe('%f', function () {
  it('normal', function () {
    expect(format('%f', 100)).equal('100')
    expect(format('%f', 100.00)).equal('100')
    expect(format('%f', 100.3)).equal('100.3')
  })
  it('can parse', function () {
    expect(format('%f', '100')).equal('100')
  })
  it('can not parse NaN', function () {
    expect(format('%f', 'foo')).equal('NaN')
  })
})

describe('all in one', function () {
  it('', function () {
    expect(format('abcd %%f %%ss %o %d %i', '100.3', 'foo', {a: 1, b: '1'}, 100, 100.10, 1000, {a: 1})).equal('abcd %f %ss "100.3" NaN NaN 100 100.1 1000 {"a":1}')
  })
})
