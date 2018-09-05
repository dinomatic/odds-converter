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

  wagerInput.addEventListener('change', () => {
    const currentWager = wagerInput.value
    const currentProfit = profitInput.value
    const prevWager = wagerInput.dataset.wager
    const profit = parseFloat(currentWager) * (parseFloat(currentProfit) / parseFloat(prevWager))
    profitInput.value = profit.toString()
    wagerInput.dataset.wager = currentWager
  })

  const oddsInputs = [americanInput, fractionalInput, decimalInput]
  oddsInputs.forEach(input => {
    input.addEventListener('change', () => {
      // remove previous error formatings
      removeMessagesAndHighlight()

      // replace commas with dots
      replaceComma(input)

      const odds = input.value
      const wager = wagerInput.value ? parseFloat(wagerInput.value) : 100
      const selected = input.dataset.type

      // validate inputs
      if (!validateInputs(selected, odds)) {
        highlightInput(input)
        showHelpMessage(input)
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

  const formatMessages = {
    american: 'Valid odds values: +120, -200, 145',
    decimal: 'Valid odds valus: 2, 2.4, 1.65',
    fractional: 'Valid odds valus: 11/4, 1/3'
  }

  const showHelpMessage = (input: HTMLInputElement) => {
    const type = input.dataset.type
    const msgSpan = document.getElementById('message')
    const msg = document.createTextNode(formatMessages[type])
    msgSpan.appendChild(msg)
    msgSpan.classList.add('opacity-100')
  }

  const highlightInput = (input: HTMLInputElement) => {
    input.classList.add('border', 'border-red')
  }

  const removeMessagesAndHighlight = () => {
    oddsInputs.forEach(input => {
      input.classList.remove('border', 'border-red')
    })
    const msgSpan = document.getElementById('message')
    msgSpan.innerHTML = ''
    msgSpan.classList.remove('opacity-100')
  }

  const replaceComma = (input: HTMLInputElement) => {
    input.value = (input.value).replace(',', '.')
  }
})()
