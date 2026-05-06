import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { validateAmericanOdds, validateDecimalOdds,
  validateFractionalOdds, validateWager } from '../src/js/modules/validators'

describe('#validateAmericanOdds function', () => {
  it('should be True for arguments "+300", "-200"', () => {
    const positive = validateAmericanOdds("+300")
    assert.equal(positive, true)
    const negative = validateAmericanOdds("-200")
    assert.equal(negative, true)
    const invalid = validateAmericanOdds("invalid")
    assert.equal(invalid, false)
  })
})

describe('#validateDecimalOdds function', () => {
  it('should be True for arguments "4", "1.5"', () => {
    const positive = validateDecimalOdds("4")
    assert.equal(positive, true)
    const negative = validateDecimalOdds("1.5")
    assert.equal(negative, true)
    const invalid = validateDecimalOdds("invalid")
    assert.equal(invalid, false)
  })
})

describe('#validateFractionalOdds function', () => {
  it('should be True for arguments "3/1", "1/2"', () => {
    const positive = validateFractionalOdds("3/1")
    assert.equal(positive, true)
    const negative = validateFractionalOdds("1/2")
    assert.equal(negative, true)
    const invalid = validateFractionalOdds("invalid")
    assert.equal(invalid, false)
  })
})

describe('#validateWager function', () => {
  it('should be True for arguments "200", False for "0", or "-200"', () => {
    const positive = validateWager("200")
    assert.equal(positive, true)
    const negative = validateWager("-200")
    assert.equal(negative, false)
    const zero = validateWager("0")
    assert.equal(zero, false)
  })
})
