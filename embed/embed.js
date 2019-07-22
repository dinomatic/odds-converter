const fields = [
  {
    id: 'american',
    label: 'American',
    placeholder: '+120',
    value: '',
    class: 'converter--odds',
  },
  {
    id: 'fractional',
    label: 'Fractional',
    placeholder: '6/5',
    value: '',
    class: 'converter--odds',
  },
  {
    id: 'decimal',
    label: 'Decimal',
    placeholder: '2.20',
    value: '',
    class: 'converter--odds',
  },
  {
    id: 'wager',
    label: 'Stake ($)',
    placeholder: '',
    value: '100',
    class: 'converter--wager',
  },
  {
    id: 'profit',
    label: 'Profit ($)',
    placeholder: '?',
    value: '',
    class: 'converter--profit',
  },
]

const converter = document.createElement('div')
converter.id = 'converter'
converter.classList.add('converter')

const title = document.createElement('h3')
title.classList.add('converter--title')
title.appendChild(document.createTextNode('Odds Converter'))
converter.appendChild(title)

const desc = document.createElement('h3')
desc.classList.add('converter--desc')
desc.appendChild(document.createTextNode('Convert values between American, Fractional and Decimal Odds.'))
converter.appendChild(desc)


fields.forEach(field => {
  const wrapper = document.createElement('div')
  wrapper.classList.add(field.class)

  const label = document.createElement('label')
  label.setAttribute('for', field.id)
  label.classList.add('converter--label')
  label.appendChild(document.createTextNode(field.label))

  const input = document.createElement('input')
  input.id = field.id
  input.classList.add('converter--input')
  input.setAttribute('placeholder', field.placeholder)
  input.dataset.type = field.id

  wrapper.appendChild(label)
  wrapper.appendChild(input)

  converter.appendChild(wrapper)
})

const credits = document.createElement('p')
credits.classList.add('converter--credits')
const creditsText = document.createTextNode('Odds Converter By ')
const creditsLink = document.createElement('a')
creditsLink.setAttribute('href', 'https://dinomatic.com')
creditsLink.setAttribute('rel', 'nofollow,noopenner')
creditsLink.appendChild(document.createTextNode('DinoMatic'))
credits.appendChild(creditsText)
credits.appendChild(creditsLink)
converter.appendChild(credits)

const messages = document.createElement('div')
messages.classList.add('converter--messages')
const message = document.createElement('span')
message.id = 'message'
messages.appendChild(message)
converter.querySelector('.converter--wager').insertAdjacentElement('beforebegin', messages)

const div = document.getElementById('embed')
div.innerHTML = ''
div.appendChild(converter)

