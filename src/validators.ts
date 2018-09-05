/**
 * File validators.ts.
 *
 * Handles odds input element validations.
 */

/**
 * must contain only numbers and a "/" and "/" must not be the first or last char
 */
const validateFractionalOdds = (input: string): boolean => RegExp(/^\d+\/\d+$/).test(input)

/**
 * the abs value should be >= 100,
 * must contain only digits and "+"/"-" signs at the beginning
 */
const validateAmericanOdds = (input: string): boolean => {
  return (RegExp(/^[+-]*\d+\.*\d*$/).test(input) && Math.abs(parseInt(input)) > 100)
}

/**
 * must be a positive number greater than 1
 */
const validateDecimalOdds = (input: string): boolean => (RegExp(/^\d+\.*\d*$/).test(input) && parseFloat(input) > 1)

/**
 * a wrapper for validation functions
 */
const validateInputs = (elem: string, input: string): boolean => {
  let isValid = false
  switch (elem) {
    case 'american':
      isValid = validateAmericanOdds(input)
      break
    case 'fractional':
      isValid = validateFractionalOdds(input)
      break
    case 'decimal':
      isValid = validateDecimalOdds(input)
      break
  }

  return isValid
}

export  { validateInputs, validateFractionalOdds, validateAmericanOdds, validateDecimalOdds }
