// TAKING FROM HTML
const dice4 = document.querySelector('[data-roll-four]')
const show4 = document.querySelector('[data-number-four]')
const dice10 = document.querySelector('[data-roll-ten]')
const show10 = document.querySelector('[data-number-ten]')
const dice50 = document.querySelector('[data-roll-five]')
const show50 = document.querySelector('[data-number-five]')
const dice100 = document.querySelector('[data-roll-hundred]')
const show100 = document.querySelector('[data-number-hundred]')

const num_input = document.querySelector('input')
const showinput = document.querySelector('[data-number-input]')
const diceinput = document.querySelector('[data-roll-input]')

const reset = document.querySelectorAll('[data-reset]')

const numberShow = document.querySelectorAll('[data-number]')

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

// LISTEN TO DICES ROLLS
dice4.addEventListener('click', function () {
  let take_result = Roll(4)
  let which_dice = 1
  Change(take_result, which_dice)
})

dice10.addEventListener('click', function () {
  let take_result = Roll(10)
  let which_dice = 2
  Change(take_result, which_dice)
})

dice50.addEventListener('click', function () {
  let take_result = Roll(50)
  let which_dice = 3
  Change(take_result, which_dice)
})

dice100.addEventListener('click', function () {
  let take_result = Roll(100)
  let which_dice = 4
  Change(take_result, which_dice)
})

diceinput.addEventListener('click', function () {
  let didInput = num_input.value
  let take_result = Roll(didInput)
  let which_dice = 5
  Change(take_result, which_dice)
})

// RESET WHERE THE RESULT IS
reset.forEach(button => {
  button.addEventListener('click', Reset)
})

function Reset() {
  let i
  for (i = 0; i <= numberShow.length; i++) {
    numberShow[i].innerHTML = '?'
  }
}

// DICE ROLL FUNCTION
function Roll(dice) {
  let result,
    which = 0
  result = Math.floor(Math.random() * (dice - 0)) + 1

  return result
}

// PUT THE RESULT IN PLACE FUNCTION
function Change(result, which) {
  switch (which) {
    case 1:
      show4.innerText = result
      break
    case 2:
      show10.innerText = result
      break
    case 3:
      show50.innerText = result
      break
    case 4:
      show100.innerText = result
      break
    case 5:
      showinput.innerHTML = result
      break
  }
}
