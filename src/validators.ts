/**
 * File validators.ts.
 *
 * Handles odds input element validations.
 */

/**
 * must contain only numbers and a "/" and "/" must not be the first or last char
 */
const validateFractionalOdds = (value: string): boolean => RegExp(/^\d+\/\d+$/).test(value)

/**
 * the abs value should be >= 100,
 * must contain only digits and "+"/"-" signs at the beginning
 */
const validateAmericanOdds = (value: string): boolean => {
  return (RegExp(/^[+-]*\d+\.*\d*$/).test(value) && Math.abs(parseInt(value)) > 100)
}

/**
 * must be a positive number greater than 1
 */
const validateDecimalOdds = (value: string): boolean => (RegExp(/^\d+\.*\d*$/).test(value) && parseFloat(value) > 1)


/**
 * a wrapper for validation functions
 */
const validateInputs = (elem: string, value: string): boolean => {
  let isValid = false
  switch (elem) {
    case 'american':
      isValid = validateAmericanOdds(value)
      break
    case 'fractional':
      isValid = validateFractionalOdds(value)
      break
    case 'decimal':
      isValid = validateDecimalOdds(value)
      break
  }

  return isValid
}

export  { validateInputs, validateFractionalOdds, validateAmericanOdds, validateDecimalOdds }
