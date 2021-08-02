const dice10 = document.querySelector('[data-roll-ten]')
const show10 = document.querySelector('[data-number-ten]')

dice10.addEventListener('click', roll(10))

function roll(dice) {
  let result
  result = Math.random() * (dice - 1) + 1
}
