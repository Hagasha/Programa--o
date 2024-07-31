function carro(empresa, marca, modelo, ano, cor){
    this.empresa = empresa;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

const carro1 = new carro('Chevrolet', 'Cruze', 'LTZ', 2019, 'Preto');
const carro2 = new carro('Fiat', 'Uno', 'Way', 2018, 'Branco');

console.log(carro1.empresa)
console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)
console.log(carro1.cor)

console.log(carro2.empresa)
console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)
console.log(carro2.cor)