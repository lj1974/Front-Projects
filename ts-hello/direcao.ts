export class Subindo {

    private _baixo: number;

// ? torna o parametro opcional. mas todos precisam seguir o mesmo padrao

    constructor(private _baixo2?: number, protected _cima?: number) {
        _baixo2 = _baixo2;
        _cima = _cima;
    }
    /// quando esta opcional retira-se o this. do valor.
    // nomear o nome das variaveis com _ no começo


    public direcao() {
        console.log('A direção é:' + this._baixo);
    }

    get baixo() {
        return this._baixo;
    } // nomear com a primeira letra minuscula
    
    set baixo(value: number) {
        if(value <0) {
            throw new Error('value must be greater than 0');
        } // nomear os get e set com o nome da variavel
    }
}
