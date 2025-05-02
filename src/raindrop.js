export default function raindrop(x, y) {
  const spanElement = document.createElement('span')
  const raindropImg = document.createElement('img')
  raindropImg.src = './img/raindrop.png'
  raindropImg.className = 'raindrop'
  spanElement.style.left = x + 'px'
  spanElement.style.top = y + 'px'
  spanElement.appendChild(raindropImg)
  return spanElement
}
