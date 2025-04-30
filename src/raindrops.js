export default function raindrops() {
  const bodyElement = document.querySelector('body')
  const divElement = document.createElement('div')
  const raindropImg = document.createElement('img')
  raindropImg.src = './img/raindrops.png'
  raindropImg.className = 'raindrop'
  bodyElement.appendChild(divElement)
  divElement.appendChild(raindropImg)
  console.log(bodyElement)
}
