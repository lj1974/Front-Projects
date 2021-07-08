const x_class = 'x'
const circle_class = 'circle'
const WINNING = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const selected = document.querySelectorAll('[data-put]')
const theput = document.getElementsByClassName('put')
const grid = document.querySelector('[board]')
const winningmessage = document.querySelector('[winning-text]')
const winningmessageshow = document.querySelector('[winning-cond]')
const restartb = document.querySelector('[data-restart]')
let circlet

start()

restartb.addEventListener('click', start)

function start() {
  circlet = false

  selected.forEach(put => {
    put.classList.remove(x_class)
    put.classList.remove(circle_class)
    put.addEventListener('click', handleClick, { once: true })
  })

  setboardhover()
  winningmessageshow.classList.remove('show')
}

function handleClick(ev) {
  const place = ev.target
  const currentClass = circlet ? circle_class : x_class

  placeMark(place, currentClass)

  if (check(currentClass)) {
    end(false)
  } else if (isDraw()) {
    end(true)
  } else {
    swap()
    setboardhover()
  }
}

function placeMark(place, currentClass) {
  place.classList.add(currentClass)
}

function isDraw() {
  return [...theput].every(put => {
    return (
      put.classList.contains(x_class) || put.classList.contains(circle_class)
    )
  })
}

function swap() {
  circlet = !circlet
}

function setboardhover() {
  grid.classList.remove(x_class)
  grid.classList.remove(circle_class)

  if (circlet) {
    grid.classList.add(circle_class)
  } else {
    grid.classList.add(x_class)
  }
}

function check(currentClass) {
  return WINNING.some(comb => {
    return comb.every(index => {
      return selected[index].classList.contains(currentClass)
    })
  })
}

function end(draw) {
  if (draw) {
    winningmessage.innerHTML = "IT'S A DRAW"
  } else {
    winningmessage.innerHTML = `${circlet ? 'O' : 'X'} WINS!`
  }
  winningmessageshow.classList.add('show')
}

// LJ
