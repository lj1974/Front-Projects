const word = 'copo'
const putletter = document.querySelectorAll('[data-word')
const takeletter = document.getElementById('guess')
const button = document.querySelector('[data-button')

button.addEventListener('click', verif)

function verif() {
  let inside = takeletter.value
  if (word.includes(inside)) {
    putthis(inside)
  }
}

function putthis(letra) {
  let add = word.indexOf(letra)
  alert(add)
}
