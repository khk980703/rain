import raindrop from './raindrop.js'

export default function multipleRaindrop() {
  const bodyElement = document.querySelector('body')

  bodyElement.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX
    const yPos = event.offsetY
    let createRaindrop = raindrop(xPos, yPos)
    bodyElement.appendChild(createRaindrop)
    setTimeout(() => {
      createRaindrop.remove()
    }, 3000)
  })
}
