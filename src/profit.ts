/**
 * File profit.ts.
 *
 * Handles net profit calculations.
 */

import { num, fractionToObject  } from './functions'

const profitFromAmerican = (wager: number, odds: number): string => {
  return (odds >= 0)
    ? num(wager * (odds / 100))
    : num(wager / (-odds / 100))
}

const profitFromDecimal = (wager: number, odds: number): string => num(wager * (odds - 1))

const profitFromFractional = (wager: number, odds: string): string => {
  const fraction = fractionToObject(odds)

  return num(wager * (fraction.numerator / fraction.denominator))
}


export { profitFromAmerican, profitFromDecimal, profitFromFractional }
