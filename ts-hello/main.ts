var number; // pode ser usado em toda a função onde ele foi aplicado dentro.
let count; // só pode ser usado dentro do bloco declarado {}
// duas versões de variavel

/// tipos de variaveis:
let a: number;
let b: boolean;
let c: string;
let d: any;

const consthere = 0;

enum ConstHere {
    here = 0, there = 1, anywhere = 2
}

let where = ConstHere.anywhere;
console.log(where);

// forçar um tipo para uma variavel any:
// let souany = (<string>d).toUpperCase();
// let souany2 = (d as string).toUpperCase();

// definir uma function

let doSomething = (message) => {
    console.log(message);
}

let doSomething2 = function (message) {
    //......
}

/// INTERFACES

/* usado pra dizer qual o tipo das variaveis que vão. Criar viariaves
que podem ser usadas em partes diferentes de um codigo com tipos e
nomes definidos */

interface Exemplos {
    x: number,
    y: number
}

let exemplo = (lista: Exemplos) => {
}

// usado pra setar os valores dos parametros
exemplo({
    x: 1,
    y: 2
})






// MODULO

import { Subindo } from './direcao'

let local = new Subindo();

local.baixo = 10;
let x = local.baixo;


local.direcao();

