/**
 * Betting Odds Converter.
 *
 * @author DinoMatic https://dinomatic.com
 * @package OddsConverter
 */

import { validateInput } from './src/validators'
import { commaToDot, num } from './src/functions'
import { Convert, Conversion } from './src/conversions'
import { formatWarnings, highlight } from './src/formatting'

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const converter = document.getElementById('converter')
    if (!converter) return

    const americanInput = <HTMLInputElement>document.getElementById('american')
    const fractionalInput = <HTMLInputElement>document.getElementById('fractional')
    const decimalInput = <HTMLInputElement>document.getElementById('decimal')
    const wagerInput = <HTMLInputElement>document.getElementById('wager')
    const profitInput = <HTMLInputElement>document.getElementById('profit')
    const messageWrapper = <HTMLInputElement>document.getElementById('converter--warning')

    const oddsInputs = [americanInput, fractionalInput, decimalInput]
    oddsInputs.forEach(input => input.addEventListener('change', () => onOddsChange(input)))
    wagerInput.addEventListener('change', () => onWagerChange())

    const onOddsChange = (input: HTMLInputElement) => {
      //reset the inputs and remove any warnings
      oddsInputs.forEach(input => highlight(input, 'remove'))
      messageWrapper.innerHTML = ''
      input.value = commaToDot(input.value)

      // get the wager amount
      const wagerAmount = wagerInput.value
      if (!validateInput('wager', wagerAmount)) {
        highlight(wagerInput, 'add')
        return false
      }
      const wager = parseFloat(wagerAmount)

      // get the conversion type
      const type = input.dataset.type
      const odds = input.value
      if (!validateInput(type, odds)) {
        highlight(input, 'add')
        messageWrapper.appendChild(document.createTextNode(formatWarnings(type)))
        return false
      }

      const conversion: Conversion = Convert[type](odds, wager)
      americanInput.value = conversion.american
      decimalInput.value = conversion.decimal
      fractionalInput.value = conversion.fractional
      profitInput.value = conversion.profit
    }

    const onWagerChange = () => {
      highlight(wagerInput, 'remove')

      if (!validateInput('wager', wagerInput.value)) {
        highlight(wagerInput, 'add')
        return false
      }

      const currentWager = wagerInput.value
      const currentProfit = profitInput.value

      if (currentProfit !== '') {
        const prevWager = wagerInput.dataset.wager
        const profit = parseFloat(currentWager) * (parseFloat(currentProfit) / parseFloat(prevWager))
        profitInput.value = num(profit)
      }

      wagerInput.dataset.wager = currentWager
    }
  })
})()
