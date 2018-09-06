import 'mocha'
import { assert } from 'chai'
import { num, gcd, decimalToFraction, reduceFraction } from '../src/functions'

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

