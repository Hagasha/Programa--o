class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProduto(){
        console.log(`Produto: ${this.nome}`)
        console.log(`Preço: R$${this.preco}`);
    }

    calcularTotal(taxas){
        return this.preco +(this.preco * taxas);
    }
}

const taxas = 0.05

const produto1 = new Produto('Camiseta', 20.99);
const produto2 = new Produto('Calça', 50.99);
const produto3 = new Produto('Tênis', 199.99);

produto1.mostrarProduto(); 
const total1 = produto1.calcularTotal(taxas);
console.log(`O total com taxas é R$${total1.toFixed(2)}`); 

produto2.mostrarProduto(); // O produto Calça custa R$51
const total2 = produto2.calcularTotal(taxas);
console.log(`O total com taxas é R$${total2.toFixed(2)}`);

produto3.mostrarProduto(); // O produto Tênis custa R$200
const total3 = produto3.calcularTotal(taxas);
console.log(`O total com taxas é R$${total3.toFixed(2)}`);
