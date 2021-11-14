// INFO BUTTONS
const info = document.querySelector('[how]');
const howtoshow = document.querySelector('[howinfo]');

// LABELS
// const  = document.querySelector('[howinfo]');
// const howtoshow = document.querySelector('[howinfo]');
// const howtoshow = document.querySelector('[howinfo]');
// const howtoshow = document.querySelector('[howinfo]');
// const howtoshow = document.querySelector('[howinfo]');


// INFO EVENT
info.addEventListener('click', (event) =>{
    var show = document.querySelector('#show')
    if (show) {
      howtoshow.removeAttribute('id', 'show')
    } else {
    howtoshow.setAttribute('id', 'show')
    }
});

// -----------------------------


