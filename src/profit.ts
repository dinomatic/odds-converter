/**
 * File profit.ts.
 * Handles net profit calculations.
 */

import { num, fractionToObject, fractionToDecimal } from './functions'

const fromAmerican = (wager: number, odds: number): string => num(odds >= 0 ? wager * (odds / 100) : wager / (-odds / 100))
const fromDecimal = (wager: number, odds: number): string => num(wager * (odds - 1))
const fromFractional = (wager: number, odds: string): string => num(wager * fractionToDecimal(fractionToObject(odds)))

export { fromAmerican, fromDecimal, fromFractional }
