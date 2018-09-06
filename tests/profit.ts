import 'mocha'
import { assert } from 'chai'
import { profitFromAmerican, profitFromDecimal, profitFromFractional } from '../src/profit'

describe('#profitFromAmerican function', () => {
  it('should return "300.00" for arguments (100, 300)', () => {
    const positive = profitFromAmerican(100, 300)
    assert.equal(positive, "300.00")
    const negative = profitFromAmerican(100, -200)
    assert.equal(negative, "50.00")
  })
})

describe('#profitFromDecimal function', () => {
  it('should return "300.00" for arguments (100, 4)', () => {
    const positive = profitFromDecimal(100, 4)
    assert.equal(positive, "300.00")
    const negative = profitFromDecimal(100, 1.5)
    assert.equal(negative, "50.00")
  })
})

describe('#profitFromFractional function', () => {
  it('should return "300.00" for arguments (100, "3/1")', () => {
    const positive = profitFromFractional(100, '3/1')
    assert.equal(positive, "300.00")
    const negative = profitFromFractional(100, '1/2')
    assert.equal(negative, "50.00")
  })
})
