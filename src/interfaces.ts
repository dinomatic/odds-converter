/**
 * File interfaces.ts.
 * Interfaces and constants.
 */

interface ConversionObject {
  american: string
  fractional: string
  decimal: string
  profit: string
}

const Conversion = {
  american: '',
  fractional: '',
  decimal: '',
  profit: ''
}

interface FractionObject {
  numerator: number
  denominator: number
}

export { Conversion, ConversionObject, FractionObject }
