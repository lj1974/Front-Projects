/*
quando alguem clica em um dia ele redireciona para a pagina de ingressos,
aparecendo a programação daquele dia clicado em um form.
a data e a programação varia do item que foi clicado.
pega o id do que foi clicado e atribui a sua programacao
*/

import { transferDayData } from "./Ingresso/diaBase.js"

const setaEsquerda = document.getElementById("seta-esquerda")
const setaDireita = document.getElementById("seta-direita")
const realData = document.getElementById("data")

const listagem_eventos = document.getElementById("listaPrograma")

let getData = "17/08/2024"
realData.innerHTML = getData

setLista()


let control = 0


function setData() {
    let data = ""

    if(control > 3) control = 0
    if(control < 0) control = 3

    switch(control) {
        case 0:
            data = "17/08/2024"
            break

        case 1:
            data = "18/08/2024"
            break

        case 2:
            data = "19/08/2024"
            break


        case 3:
            data = "20/08/2024"
            break

    }
  
    return data
}

setaEsquerda.addEventListener("click", () => {
    control--
    removeLista()
    getData = setData()
    setLista()
})


setaDireita.addEventListener("click", () => {
    control++
    removeLista()
    getData = setData()
    setLista()
   
})


// setaDireeita.forEach((e) => {
    
//     e.addEventListener("click", () => {
//        removeLista()
//        getData = setData(e.value)
//        setLista()
//     })

// })


function setLista() {
    let lista = transferDayData(getData)

    realData.innerHTML = getData

    for(const index in lista) {
        const {hora, nome} = lista[index]

        let opcaoEvento = document.createElement("div")
        opcaoEvento.setAttribute("class", "opcaoEvento")

        let label = document.createElement("label")
        label.setAttribute("for", index)

        let span = document.createElement("span")
        
        let input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", index)
        input.setAttribute("name", index)
        label.innerHTML = hora 
        span.innerHTML = nome

        let check = document.createElement("img")
        check.setAttribute("src", "../assets/Checked.svg")
        check.setAttribute("class", "checksign")

        opcaoEvento.appendChild(label)
        label.appendChild(span)
        opcaoEvento.appendChild(input)
        opcaoEvento.appendChild(check)

        listagem_eventos.appendChild(opcaoEvento)
    }

}

function removeLista() { 
   listagem_eventos.innerHTML = ''
}




const scroll = document.getElementById('scrolldown');

scroll.addEventListener("click", () => {
    var secondpage = document.getElementById('page2');
    secondpage.scrollIntoView();
})



// Não fica o estado [erro]

const element_check = document.querySelectorAll(".opcaoEvento")

element_check.forEach((e) => {
    e.querySelector("input[type=checkbox]").addEventListener('change', (d) => {
   if(d.target.checked) {
    e.style.opacity = "80%"
    e.querySelector(".checksign").style.opacity = "1"
} else {
    e.style.opacity = "100%"
    e.querySelector(".checksign").style.opacity = "0"
}
})})


