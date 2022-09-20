var number; // pode ser usado em toda a função onde ele foi aplicado dentro.
var count; // só pode ser usado dentro do bloco declarado {}
// duas versões de variavel
/// tipos de variaveis:
var a;
var b;
var c;
var d;
var consthere = 0;
var ConstHere;
(function (ConstHere) {
    ConstHere[ConstHere["here"] = 0] = "here";
    ConstHere[ConstHere["there"] = 1] = "there";
    ConstHere[ConstHere["anywhere"] = 2] = "anywhere";
})(ConstHere || (ConstHere = {}));
var where = ConstHere.anywhere;
console.log(where);
// forçar um tipo para uma variavel any:
// let souany = (<string>d).toUpperCase();
// let souany2 = (d as string).toUpperCase();
// definir uma function
var doSomething = function (message) {
    console.log(message);
};
var doSomething2 = function (message) {
    //......
};
var exemplo = function (lista) {
};
// usado pra setar os valores dos parametros
exemplo({
    x: 1,
    y: 2
});
var Subindo = /** @class */ (function () {
    function Subindo() {
    }
    Subindo.prototype.direcao = function () {
        console.log('A direção é:' + this.baixo);
    };
    return Subindo;
}());
var local = new Subindo();
local.baixo = 1;
local.direcao();
