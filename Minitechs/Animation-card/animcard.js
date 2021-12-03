const color_button = document.querySelectorAll('[color]')
const background = document.querySelector('[change-color]')
const nametag = document.querySelector('[name-tag]')
const buttonName = document.querySelector('[send-name]')
const changeName = document.querySelector('[name-place]')

function addClass(gotClass) {
    background.setAttribute('class', gotClass)
}

function setName(){
   var newName = nametag.value
   changeName.innerHTML = newName
}


color_button.forEach(button => {
    button.addEventListener('click', () => {
        var getClass = button.className
        addClass(getClass)
    })
  })

buttonName.addEventListener('click', setName)