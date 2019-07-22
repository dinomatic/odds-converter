/**
 * File functions.ts
 * Helper functions for odds convertions.
 */

import { FractionObject } from './interfaces'

const commaToDot = (str: string): string => str.replace(',', '.')
const adjustSign = (str: string): string => str.indexOf('-') === -1 && str.indexOf('+') === -1 ? `+${str}` : str

const num = (value: number): string => value.toFixed(2) // very unfortunate fn name. num returns string 🙃
const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y)

const fractionToDecimal = (fraction: FractionObject): number => fraction.numerator / fraction.denominator

const fractionToObject = (fraction: string): FractionObject => {
  const [numerator, denominator] = fraction.split('/').map(n => parseInt(n))
  return { numerator, denominator }
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

const isProperFraction = (fraction: FractionObject) => fraction.numerator < fraction.denominator

export { adjustSign, commaToDot, num, gcd,
  fractionToObject, decimalToFraction, fractionToDecimal, isProperFraction, reduceFraction }
