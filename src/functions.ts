/**
 * File functions.ts
 * Helper functions for odds convertions.
 */

interface FractionObject {
  numerator: number
  denominator: number
}

const num = (value: number): string => { return value.toFixed(2) }
const gcd = (x: number, y: number): number => (!y) ? x : gcd(y, x % y)

const fractionToObject = (frcation: string): FractionObject => {
  const split = frcation.split('/')
  const numerator = parseInt(split[0])
  const denominator = parseInt(split[1])

  return {
    numerator: numerator,
    denominator: denominator
  }
}

const decimalToFraction = (decimal: number): FractionObject => {
  const numerator = (decimal - 1) * 10000
  const denominator = 10000

  return reduceFraction(Math.round(numerator), denominator)
}

const reduceFraction = (numerator: number, denominator: number): FractionObject => {
  const divisor = gcd(numerator, denominator)

  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  }
}

export { num, gcd, fractionToObject, decimalToFraction, reduceFraction }
