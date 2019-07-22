/**
 * File formatting.ts.
 * HTML elements formatting related functions.
 */

const highlight = (input: HTMLInputElement, action: string) => {
  return action === 'add'
    ? input.classList.add('highlight')
    : input.classList.remove('highlight')
}

const formatWarnings = (format: string): string => {
  const validOddsValues = {
    american: '+120, -200, 145',
    decimal: '2, 2.4, 1.65',
    fractional: '11/4, 1/3, 2/5',
  }
  return `❌ Valid odds values: ${validOddsValues[format]}`
}

export { formatWarnings, highlight }
