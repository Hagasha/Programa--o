class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    set largura(novaLargura) {
        if (novaLargura > 0) {
            this._largura = novaLargura;
        } else {
            console.error('Largura inválida');
        }
    }

    set altura(novaAltura) {
        if (novaAltura > 0) {
            this._altura = novaAltura;
        } else {
            console.error('Altura inválida');
        }
    }

    get largura() {
        return `${this._largura.toFixed(1)}cm`;
    }

    get altura() {
       return  `${this._altura.toFixed(1)} cm`;
    }

    get area() {
        return `${(this._altura * this._largura).toFixed(1)}cm²`;
    }
}

const retangulo = new Retangulo(3, 6);

console.log(retangulo.altura);
console.log(retangulo.largura); 
console.log(retangulo.area);