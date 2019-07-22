import 'mocha'
import { assert } from 'chai'
import { validateAmericanOdds, validateDecimalOdds,
  validateFractionalOdds, validateWager } from '../src/validators'

describe('#validateAmericanOdds function', () => {
  it('should be True for arguments "+300", "-200"', () => {
    const positive = validateAmericanOdds("+300")
    assert.isTrue(positive)
    const negative = validateAmericanOdds("-200")
    assert.isTrue(negative)
    const invalid = validateAmericanOdds("invalid")
    assert.isFalse(invalid)
  })
})

describe('#validateDecimalOdds function', () => {
  it('should be True for arguments "4", "1.5"', () => {
    const positive = validateDecimalOdds("4")
    assert.isTrue(positive)
    const negative = validateDecimalOdds("1.5")
    assert.isTrue(negative)
    const invalid = validateDecimalOdds("invalid")
    assert.isFalse(invalid)
  })
})

describe('#validateFractionalOdds function', () => {
  it('should be True for arguments "3/1", "1/2"', () => {
    const positive = validateFractionalOdds("3/1")
    assert.isTrue(positive)
    const negative = validateFractionalOdds("1/2")
    assert.isTrue(negative)
    const invalid = validateFractionalOdds("invalid")
    assert.isFalse(invalid)
  })
})

describe('#validateWager function', () => {
  it('should be True for arguments "200", False for "0", or "-200"', () => {
    const positive = validateWager("200")
    assert.isTrue(positive)
    const negative = validateWager("-200")
    assert.isFalse(negative)
    const zero = validateWager("0")
    assert.isFalse(zero)
  })
})
