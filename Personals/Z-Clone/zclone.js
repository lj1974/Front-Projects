//CARD
const newcardz = document.querySelector('[data-card]')
const cardbutton = document.querySelector('[card-button]')

//MENU
const menubutton = document.querySelector('[menu-button]')
const newmenu = document.querySelector('[data-menu]')

// THIS IS THE PROFILE EDIT
// const editbutton = document.querySelector('[edit-button]')
// const newedit = document.querySelector('[data-edit]')

// const insertname = document.querySelector('[data-insertname]')
// const insertnick = document.querySelector('[data-insertnick]')
// const takename = document.querySelector('[data-name]')
// const takenick = document.querySelector('[data-nick]')

cardbutton.addEventListener('click', event => {
  if (event.detail === 1) {
    newcardz.setAttribute('id', 'show')
  } else if (event.detail > 1) {
    newcardz.removeAttribute('id', 'show')
  }
})

menubutton.addEventListener('click', event => {
  if (event.detail === 1) {
    newmenu.setAttribute('id', 'show')
  } else if (event.detail > 1) {
    newmenu.removeAttribute('id', 'show')
  }
})

// editbutton.addEventListener('click', event => {
//   if (event.detail === 1) {
//     newedit.setAttribute('id', 'show')
//   } else if (event.detail > 1) {
//     newedit.removeAttribute('id', 'show')
//   }
// })
