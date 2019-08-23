/**
 * File validators.ts.
 *
 * Handles odds input element validations.
 */

// must contain only numbers and a "/" and "/" must not be the first or last char
const validateFractionalOdds = (value: string): boolean => RegExp(/^\d+\/\d+$/).test(value)

// the abs value should be >= 100, must contain only digits and "+"/"-" signs at the beginning
const validateAmericanOdds = (value: string): boolean => {
  return (RegExp(/^[+-]*\d+\.*\d*$/).test(value) && Math.abs(parseInt(value)) > 100)
}

// must be a positive number greater than 1
const validateDecimalOdds = (value: string): boolean => (RegExp(/^\d+\.*\d*$/).test(value) && parseFloat(value) > 1)

// must be a positive number
const validateWager = (value: string): boolean => parseFloat(value) > 0


// a wrapper for validation functions
const validateInput = (elem: string, value: string): boolean => {
  switch (elem) {
    case 'american':
      return validateAmericanOdds(value)
    case 'fractional':
      return validateFractionalOdds(value)
    case 'decimal':
      return validateDecimalOdds(value)
    case 'wager':
      return validateWager(value)
  }

  return false
}

export { validateInput, validateFractionalOdds, validateAmericanOdds, validateDecimalOdds, validateWager }
