export default function raindrops() {
  const bodyElement = document.querySelector('body')
  const raindropImg = document.createElement('img')
  raindropImg.src = './img/raindrops.png'
  raindropImg.className = 'raindrop'
  bodyElement.appendChild(raindropImg)
  console.log(bodyElement)
}
