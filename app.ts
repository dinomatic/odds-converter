/**
 * File app.ts.
 * Handles odds value conversions and net profit calculations.
 *
 * @author DinoMatic https://dinomatic.com
 * @package OddsConverter
 */

import { Conversion} from './src/interfaces'
import { validateInputs } from './src/validators'
import { formatWarnings, highlight } from './src/formatting'
import { commaToDot, adjustSign, num } from './src/functions'
import { onAmericanChange, onFractionalChange, onDecimalChange } from './src/events'

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

      const wagerAmount = wagerInput.value
      if (!validateInputs('wager', wagerAmount)) {
        highlight(wagerInput, 'add')
        return false
      }
      const wager = parseFloat(wagerAmount)

      const selected = input.dataset.type
      const odds = input.value
      if (!validateInputs(selected, odds)) {
        highlight(input, 'add')
        messageWrapper.appendChild(document.createTextNode(formatWarnings(selected)))
        return false
      }

      let conversionData = Object.create(Conversion)

      switch (selected) {
        case 'american':
          conversionData = onAmericanChange(odds, wager)
          break
        case 'fractional':
          conversionData = onFractionalChange(odds, wager)
          break
        case 'decimal':
          conversionData = onDecimalChange(odds, wager)
          break
      }

      americanInput.value = conversionData.american
      decimalInput.value = conversionData.decimal
      fractionalInput.value = conversionData.fractional
      profitInput.value = num(parseFloat(conversionData.profit))
    }

    const onWagerChange = () => {
      highlight(wagerInput, 'remove')

      if (!validateInputs('wager', wagerInput.value)) {
        highlight(wagerInput, 'add')
        return false
      }

      const currentWager = wagerInput.value
      const currentProfit = profitInput.value

      if (currentProfit !== '') {
        const prevWager = wagerInput.dataset.wager
        const profit = parseFloat(currentWager) * (parseFloat(currentProfit) / parseFloat(prevWager))
        profitInput.value = num(profit).toString()
      }

      wagerInput.dataset.wager = currentWager
    }
  })
})()
