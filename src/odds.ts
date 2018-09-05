/**
 * File odds.ts.
 *
 * Handles odds conversions.
 */

import { num, reduceFraction, decimalToFraction, fractionToObject } from './functions'

/**
 * converts odds from american to decimal
 */
const decimalFromAmerican = (american: number): string => {
  return (american > 0)
    ? num((american / 100) + 1)
    : num(1 - (100 / american))
}

/**
 * converts odds from fractional to decimal
 */
const decimalFromFractional = (fractional: string): string => {
  const fraction = fractionToObject(fractional)
  const n = fraction.numerator
  const d = fraction.denominator

  return num((n / d) + 1)
}

/**
 * converts odds from decimal to american
 */
const americanFromDecimal = (decimal: number): string => {
  const fraction = decimalToFraction(decimal)
  const n = fraction.numerator
  const d = fraction.denominator

  return (n >= d)
    ? `+${((n / d) * 100).toFixed(2)}`
    : `-${((d / n) * 100).toFixed(2)}`
}

/**
 * converts odds from decimal to fractional
 */
const fractionalFromDecimal = (decimal: number): string => {
  let decimalAdjusted = decimal
  const oddsString = decimal.toString()
  if (oddsString.indexOf('.33') !== -1) { // case for '.33' odds values
    const decimalStringAdjusted = oddsString.replace('.33', '.3')
    decimalAdjusted = parseFloat(decimalStringAdjusted)
  }

  const fraction = decimalToFraction(decimalAdjusted)
  return `${fraction.numerator}/${fraction.denominator}`
}


export { decimalFromAmerican, decimalFromFractional, americanFromDecimal, fractionalFromDecimal }
