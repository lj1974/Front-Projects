const color_button = document.querySelectorAll('[color]')
const background = document.querySelector('[change-color]')
const nametag = document.querySelector('[name-tag]')
const buttonName = document.querySelector('[send-name]')

const changeName = document.querySelector('[name-place]')
const changejob = document.querySelector('[job-place]')
const changemail = document.querySelector('[mail-place]')
const changeaddress = document.querySelector('[add-place]')
const changefirstnum = document.querySelector('[num-place]')
const changesecnum = document.querySelector('[nextnum-place]')

var click = 0


buttonName.addEventListener('click', button =>{
    var setClick = count()
    setNames(setClick)

})


function count(){
    click++

    if(click>=7){
        click = 1
    }
    return(click)
}

function setNames(i){
   var newtag = nametag.value

   switch(i){
    case 1:
        changeName.innerHTML = newtag
        break;
    case 2:
        changejob.innerHTML = newtag
        break;
    case 3:
        changemail.innerHTML = newtag
        break;
    case 4:
        changeaddress.innerHTML = newtag
        break;
    case 5:
        changefirstnum.innerHTML =  newtag
        break;
    case 6:
        changesecnum.innerHTML = newtag
        break;
   }
   
}


color_button.forEach(button => {
    button.addEventListener('click', () => {
        var getClass = button.className
        addClass(getClass)
    })
  })

  function addClass(gotClass) {
    background.setAttribute('class', gotClass)
}



