const boart = document.querySelector('#board')
const colors = ['#DC143C', '#FF1493','#FF4500','#FFFF00','#00FF7F','#00FFFF','#800080','#00008B','#FF0000']
const SQUARES_NUMBER = 450


for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> {
        setColor(square)
    })

    square.addEventListener('mouseleave', ()=> {
        removeColor(square)
    })

    boart.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
  const index = Math.floor(Math.random()*colors.length)
  return colors[index]
}