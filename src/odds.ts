/**
 * File odds.ts.
 *
 * Handles odds conversions.
 */

import { num, isProperFraction, decimalToFraction, fractionToDecimal, fractionToObject } from './functions'

const decimalFromAmerican = (american: number): string => {
  return american > 0 ? num((american / 100) + 1) : num(1 - (100 / american))
}

const decimalFromFractional = (fractional: string): string => {
  const fraction = fractionToObject(fractional)
  return num(fractionToDecimal(fraction) + 1)
}

const americanFromDecimal = (decimal: number): string => {
  const fraction = decimalToFraction(decimal)
  const [sign, value] = isProperFraction(fraction)
    ? ['-', 1 / fractionToDecimal(fraction)] : ['+', fractionToDecimal(fraction)]

  return `${sign}${(value * 100).toFixed(2)}`
}

const fractionalFromDecimal = (decimal: number): string => {
  const decimalString = decimal.toString()
  const decimalAdjusted = parseFloat(decimalString.replace('.33', '.3'))
  const fraction = decimalToFraction(decimalAdjusted)
  return `${fraction.numerator}/${fraction.denominator}`
}
// const decimalAdjusted = decimalString.indexOf('.33') !== -1 ? parseFloat(decimalString.replace('.33', '.3')) : decimal

export { decimalFromAmerican, decimalFromFractional, americanFromDecimal, fractionalFromDecimal }
