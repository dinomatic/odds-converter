import 'mocha'
import { assert } from 'chai'
import { decimalFromAmerican, decimalFromFractional,
  americanFromDecimal, fractionalFromDecimal } from '../src/odds'

describe('#decimalFromAmerican function', () => {
  it('should return "4.00" for argument 300', () => {
    const positive = decimalFromAmerican(300)
    assert.equal(positive, "4.00")
    const negative = decimalFromAmerican(-200)
    assert.equal(negative, "1.50")
  })
})

describe('#decimalFromFractional function', () => {
  it('should return "4.00" for argument "3/1"', () => {
    const positive = decimalFromFractional("3/1")
    assert.equal(positive, "4.00")
    const negative = decimalFromFractional("1/2")
    assert.equal(negative, "1.50")
  })
})

describe('#americanFromDecimal function', () => {
  it('should return "+300" for argument 4', () => {
    const positive = americanFromDecimal(4)
    assert.equal(positive, "+300.00")
    const negative = americanFromDecimal(1.5)
    assert.equal(negative, "-200.00")
  })
})

describe('#fractionalFromDecimal function', () => {
  it('should return "3/1" for argument 4', () => {
    const positive = fractionalFromDecimal(4)
    assert.equal(positive, "3/1")
    const negative = fractionalFromDecimal(1.5)
    assert.equal(negative, "1/2")
  })
})
