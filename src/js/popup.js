/**
 * Betting Odds Converter.
 * Embedding functions.
 *
 * @author DinoMatic https://dinomatic.com
 * @package OddsConverter
 */

(() => {
  // Elements -> Embed.
  const embedWrapper = document.getElementById('embed')
  const embedOpen = document.querySelector('.converter--embed')
  const embedResult = embedWrapper.querySelector('.embed--result')
  const embedWidth = embedWrapper.querySelector('.embed--width')
  const embedHeight = embedWrapper.querySelector('.embed--height')
  const embedCopy = embedWrapper.querySelector('.embed--copy')
  const embedClose = embedWrapper.querySelector('.embed--close')

  // Elements -> Install.
  const installWrapper = document.getElementById('install')
  const installOpen = document.querySelector('.converter--install')
  const installClose = installWrapper.querySelector('.install--close')

  // Definitions -> Popup.
  const positionPopup = element => {
    const { x, y, width, height } = document.getElementById('converter').getBoundingClientRect()
    element.style.left = `${x}px`
    element.style.top = `${y}px`
    element.style.width = `${width}px`
    element.style.height = `${height}px`
  }
  const findFocusable = element => element.querySelectorAll('button, [href], input, textarea')[0]
  const openPopup = (popup, button) => {
    popup.classList.remove('hidden')
    popup.setAttribute('aria-hidden', 'false')
    findFocusable(popup).focus()
    button.setAttribute('aria-expanded', 'true')
  }
  const closePopup = (popup, button) => {
    popup.classList.add('hidden')
    popup.setAttribute('aria-hidden', 'true')
    button.setAttribute('aria-expanded', 'false')
  }

  // Definitions -> Embed.
  const VALUE = 600
  const state = { width: VALUE, height: VALUE }
  const setResult = ({ width, height }) => {
    embedResult.value = `<iframe src="https://oddsconverter.pro/embed/" width="${width}" height="${height}" frameborder="0"></iframe>`
  }

  // Event Listeners -> Embed.
  embedOpen.addEventListener('click', () => {
    positionPopup(embedWrapper)
    openPopup(embedWrapper, embedOpen)
    setResult(state)
  })
  embedClose.addEventListener('click', () => {
    embedWidth.value = VALUE
    embedHeight.value = VALUE
    embedWidth.removeAttribute('disabled')
    embedHeight.removeAttribute('disabled')
    state.width = VALUE
    state.height = VALUE
    setResult(state)
    embedCopy.innerText = 'Copy'
    closePopup(embedWrapper, embedOpen)
  })
  embedCopy.addEventListener('click', (e) => {
    embedResult.select()
    document.execCommand('copy')
    e.target.innerText = 'Copied!'
  })
  embedWidth.addEventListener('change', (e) => {
    state.width = e.target.value
    setResult(state)
  })
  embedHeight.addEventListener('change', (e) => {
    state.height = e.target.value
    setResult(state)
  })

  document.querySelector('.embed--width__full').addEventListener('click', () => {
    embedWidth.setAttribute('disabled', 'disabled')
    state.width = '100%'
    setResult(state)
  })
  document.querySelector('.embed--height__full').addEventListener('click', () => {
    embedHeight.setAttribute('disabled', 'disabled')
    state.height = '100%'
    setResult(state)
  })

  // Event Listeners -> Install.
  installOpen.addEventListener('click', () => {
    positionPopup(installWrapper, installOpen)
    openPopup(installWrapper, installOpen)
  })
  installClose.addEventListener('click', () => closePopup(installWrapper, installOpen))

  // Event Listeners -> Popup.
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      closePopup(embedWrapper, embedOpen)
      closePopup(installWrapper, installOpen)
    }
  })
})()
