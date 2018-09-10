/**
 * File app.ts.
 *
 * Handles odds value conversions and net profit calculations.
 */

 import { validateInputs } from './src/validators'
 import { profitFromAmerican, profitFromFractional, profitFromDecimal } from './src/profit'
 import {
   decimalFromAmerican, decimalFromFractional,
   americanFromDecimal, fractionalFromDecimal
 } from './src/odds'


(() => {

  const converter = document.getElementById('converter')
  if (!converter) return

  const americanInput = <HTMLInputElement>document.getElementById('american')
  const fractionalInput = <HTMLInputElement>document.getElementById('fractional')
  const decimalInput = <HTMLInputElement>document.getElementById('decimal')
  const wagerInput = <HTMLInputElement>document.getElementById('wager')
  const profitInput = <HTMLInputElement>document.getElementById('profit')
  const msgSpan = document.getElementById('message')

  const oddsInputs = [americanInput, fractionalInput, decimalInput]
  oddsInputs.forEach(input => {
    input.addEventListener('change', () => {
      // remove previous error highlighting
      removeMessagesAndHighlight()

      // replace commas with dots
      replaceComma(input)

      // validate wager
      const wagerAmount = wagerInput.value
      if (!validateWager(wagerAmount)) return false
      const wager = parseFloat(wagerAmount)

      // validate odds
      const selected = input.dataset.type
      const odds = input.value
      if (!validateInputs(selected, odds)) {
        highlightInput(input)
        showWrongFormatMessage(selected)
        return false
      }

      let profit: string
      let american: string
      let decimal: string
      let fractional: string

      // american
      if (selected === 'american') {
        const oddsFloat = parseFloat(odds)
        profit = profitFromAmerican(wager, oddsFloat)

        const oddsAdjusted = (odds.indexOf('-') === -1 && odds.indexOf('+') === -1)
          ? `+${odds}` : odds
        american = oddsAdjusted
        decimal = decimalFromAmerican(oddsFloat)
        const floatDecimal = parseFloat(decimal)
        fractional = fractionalFromDecimal(floatDecimal)
      }

      // fractional
      if (selected === 'fractional') {
        profit = profitFromFractional(wager, odds)

        fractional = odds
        decimal = decimalFromFractional(odds)
        const floatDecimal = parseFloat(decimal)
        american = americanFromDecimal(floatDecimal)
      }

      // decimal
      if (selected === 'decimal') {
        const oddsFloat = parseFloat(odds)
        profit = profitFromDecimal(wager, oddsFloat)

        decimal = odds
        american = americanFromDecimal(oddsFloat)
        fractional = fractionalFromDecimal(oddsFloat)
      }

      // update values
      americanInput.value = american
      decimalInput.value = decimal
      fractionalInput.value = fractional
      profitInput.value = parseFloat(profit).toFixed(2)
    })
  })

  wagerInput.addEventListener('change', () => {
    if (!validateWager(wagerInput.value)) return false

    const currentWager = wagerInput.value
    const currentProfit = profitInput.value

    if (currentProfit !== '') {
      const prevWager = wagerInput.dataset.wager
      const profit = parseFloat(currentWager) * (parseFloat(currentProfit) / parseFloat(prevWager))
      profitInput.value = profit.toString()
    }

    wagerInput.dataset.wager = currentWager
  })

  const validateWager = (value: string): boolean => {
    if (parseFloat(value) <= 0) {
      highlightInput(wagerInput)
      return false
    } else {
      removeHighlightInput(wagerInput)
      return true
    }
  }

  const showWrongFormatMessage = (format: string): void => {
    const validOddsValues = {
      american: '+120, -200, 145',
      decimal: '2, 2.4, 1.65',
      fractional: '11/4, 1/3, 2/5',
    }
    const msg = document.createTextNode(`ℹ️ Valid odds values: ${validOddsValues[format]}`)
    msgSpan.appendChild(msg)
  }

  const highlightInput = (input: HTMLInputElement): void => {
    input.classList.add('highlight')
  }

  const removeHighlightInput = (input: HTMLInputElement): void => {
    input.classList.remove('highlight')
  }

  const removeMessagesAndHighlight = (): void => {
    oddsInputs.forEach(input => {
      removeHighlightInput(input)
    })
    msgSpan.innerHTML = ''
  }

  const replaceComma = (input: HTMLInputElement): void => {
    input.value = (input.value).replace(',', '.')
  }
})()
