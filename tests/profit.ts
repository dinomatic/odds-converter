import 'mocha'
import { assert } from 'chai'
import * as profit from '../src/profit'

describe('#fromAmerican function', () => {
  it('should return "300.00" for arguments (100, 300)', () => {
    const positive = profit.fromAmerican(100, 300)
    assert.equal(positive, "300.00")
    const negative = profit.fromAmerican(100, -200)
    assert.equal(negative, "50.00")
  })
})

describe('#fromDecimal function', () => {
  it('should return "300.00" for arguments (100, 4)', () => {
    const positive = profit.fromDecimal(100, 4)
    assert.equal(positive, "300.00")
    const negative = profit.fromDecimal(100, 1.5)
    assert.equal(negative, "50.00")
  })
})

describe('#fromFractional function', () => {
  it('should return "300.00" for arguments (100, "3/1")', () => {
    const positive = profit.fromFractional(100, '3/1')
    assert.equal(positive, "300.00")
    const negative = profit.fromFractional(100, '1/2')
    assert.equal(negative, "50.00")
  })
})
