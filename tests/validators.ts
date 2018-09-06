import 'mocha'
import { assert } from 'chai'
import { validateAmericanOdds, validateDecimalOdds, validateFractionalOdds } from '../src/validators'

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
