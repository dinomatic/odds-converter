/**
 * File events.ts.
 * Odds input element changes related functions.
 */

import * as getProfit from './profit'
import { adjustSign } from './functions'
import { ConversionObject } from './interfaces'
import { decimalFromAmerican, decimalFromFractional, americanFromDecimal, fractionalFromDecimal } from '../src/odds'

const onAmericanChange = (odds: string, wager: number): ConversionObject => {
  const oddsFloat = parseFloat(odds)
  const oddsAdjusted = adjustSign(odds)

  const profit = getProfit.fromAmerican(wager, oddsFloat)
  const american = oddsAdjusted
  const decimal = decimalFromAmerican(oddsFloat)
  const fractional = fractionalFromDecimal(parseFloat(decimal))

  return { profit, american, decimal, fractional }
}

const onFractionalChange = (odds: string, wager: number): ConversionObject => {
  const profit = getProfit.fromFractional(wager, odds)
  const fractional = odds
  const decimal = decimalFromFractional(odds)
  const american = americanFromDecimal(parseFloat(decimal))

  return { profit, american, decimal, fractional }
}

const onDecimalChange = (odds: string, wager: number): ConversionObject => {
  const oddsFloat = parseFloat(odds)

  const profit = getProfit.fromDecimal(wager, oddsFloat)
  const decimal = odds
  const american = americanFromDecimal(oddsFloat)
  const fractional = fractionalFromDecimal(oddsFloat)

  return { profit, american, decimal, fractional }
}

export { onAmericanChange, onFractionalChange, onDecimalChange }
