// THIS IS THE PROFILE EDIT
// const editbutton = document.querySelector('[edit-button]')
// const newedit = document.querySelector('[data-edit]')

// const insertname = document.querySelector('[data-insertname]')
// const insertnick = document.querySelector('[data-insertnick]')
// const takename = document.querySelector('[data-name]')
// const takenick = document.querySelector('[data-nick]')

//CARD
const newcardz = document.querySelector('[data-card]')
const cardbutton = document.querySelector('[card-button]')

//MENU
const menubutton = document.querySelector('[menu-button]')
const newmenu = document.querySelector('[data-menu]')

cardbutton.addEventListener('click', event => {
  var show = document.querySelector('#show')
  if (show) {
    newcardz.removeAttribute('id', 'show')
  } else {
    newcardz.setAttribute('id', 'show')
  }
})

menubutton.addEventListener('click', event => {
  var show = document.querySelector('#show')
  if (show) {
    newmenu.removeAttribute('id', 'show')
  } else {
    newmenu.setAttribute('id', 'show')
  }
})

// LJ

// editbutton.addEventListener('click', event => {
//   if (event.detail === 1) {
//     newedit.setAttribute('id', 'show')
//   } else if (event.detail > 1) {
//     newedit.removeAttribute('id', 'show')
//   }
// })
