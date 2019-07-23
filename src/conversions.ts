/**
 * File events.ts.
 * Odds input element changes related functions.
 */

import * as getProfit from './profit'
import { adjustSign } from './functions'
import { decimalFromAmerican, decimalFromFractional, americanFromDecimal, fractionalFromDecimal } from './odds'

interface Conversion {
  american: string
  fractional: string
  decimal: string
  profit: string
}

const onAmericanChange = (odds: string, wager: number): Conversion => {
  const oddsFloat = parseFloat(odds)
  const oddsAdjusted = adjustSign(odds)

  const profit = getProfit.fromAmerican(wager, oddsFloat)
  const american = oddsAdjusted
  const decimal = decimalFromAmerican(oddsFloat)
  const fractional = fractionalFromDecimal(parseFloat(decimal))

  return { profit, american, decimal, fractional }
}

const onFractionalChange = (odds: string, wager: number): Conversion => {
  const profit = getProfit.fromFractional(wager, odds)
  const fractional = odds
  const decimal = decimalFromFractional(odds)
  const american = americanFromDecimal(parseFloat(decimal))

  return { profit, american, decimal, fractional }
}

const onDecimalChange = (odds: string, wager: number): Conversion => {
  const oddsFloat = parseFloat(odds)

  const profit = getProfit.fromDecimal(wager, oddsFloat)
  const decimal = odds
  const american = americanFromDecimal(oddsFloat)
  const fractional = fractionalFromDecimal(oddsFloat)

  return { profit, american, decimal, fractional }
}

const Convert = {
  american: (odds: string, wager: number) => onAmericanChange(odds, wager),
  fractional: (odds: string, wager: number) => onFractionalChange(odds, wager),
  decimal: (odds: string, wager: number) => onDecimalChange(odds, wager)
}

export { Convert }
