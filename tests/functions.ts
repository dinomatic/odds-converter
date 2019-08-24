import 'mocha'
import { assert } from 'chai'
import {
  adjustSign, commaToDot, num, gcd, fractionToObject, isProperFraction,
  decimalToFraction, fractionToDecimal, reduceFraction } from '../src/js/modules/functions'

describe('#num function', () => {
  it('should return "4.00" for argument 4', () => {
    const result = num(4)
    assert.equal(result, '4.00')
  })
})

describe('#gcd function', () => {
  it('should return 10 for arguments (40, 30)', () => {
    const result = gcd(40, 30)
    assert.equal(result, 10)
  })
})

describe('#fractionToObject function', () => {
  it('should return {3, 4} for arguments (3/4)', () => {
    const result = fractionToObject('3/4')
    assert.deepEqual(result, {
      numerator: 3,
      denominator: 4
    })
  })
})

describe('#reduceFraction function', () => {
  it('should return {3, 4} for arguments (15, 20)', () => {
    const result = reduceFraction(15, 20)
    assert.deepEqual(result, {
      numerator: 3,
      denominator: 4
    })
  })
})

describe('#decimalToFraction function', () => {
  it('should return {3, 4} for argument 1.75', () => {
    const result = decimalToFraction(1.75)
    assert.deepEqual(result, {
      numerator: 3,
      denominator: 4
    })
  })
})

describe('#fractionToDecimal function', () => {
  it('should return 0.75 for argument {3, 4}', () => {
    const fraction = { numerator: 3, denominator: 4 }
    const result = fractionToDecimal(fraction)
    assert.equal(result, 0.75)
  })
})

describe('#isProperFraction function', () => {
  it('should return True for argument {3, 4}', () => {
    const proper = isProperFraction({ numerator: 3, denominator: 4 })
    assert.isTrue(proper)
    const improper = isProperFraction({ numerator: 4, denominator: 3 })
    assert.isFalse(improper)
  })
})

describe('#commaToDot function', () => {
  it('should return 2.5 for argument 2,5', () => {
    const result = commaToDot('2,5')
    assert.equal(result, '2.5')
  })
})

describe('#adjustSign function', () => {
  it('should return correct signs for american odds', () => {
    const noSign = adjustSign('200')
    assert.equal(noSign, '+200')
    const plus = adjustSign('+200')
    assert.equal(plus, '+200')
    const minus = adjustSign('-200')
    assert.equal(minus, '-200')
  })
})

