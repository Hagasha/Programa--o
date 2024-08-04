class Animal{
    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    }

    move(velocidade){
        console.log(`${this.nome} se moveu a ${velocidade} m/s`);
    }
}
class Cachorro extends Animal{
    constructor(nome, idade, velocidadecorrida){
        super(nome, idade);
        this.velocidadecorrida = velocidadecorrida;
    }

    correr(){
        console.log(`${this.nome} consegue correr`);
        super.move(this.velocidadecorrida);
    }
}

class Peixe extends Animal{
    constructor(nome, idade, velocidadenado){
        super(nome, idade);
        this.velocidadenanado = velocidadenado;
    }
    nadar(){
        console.log(`${this.nome} consegue nadar`);
        super.move(this.velocidadenanado);
    }
}

    class Falcao extends Animal{
    constructor(nome, idade, velocidadevoo){
        super(nome, idade);
        this.velocidadevoo = velocidadevoo;
    }
    voar(){
        console.log(`${this.nome} consegue voar`);
        super.move(this.velocidadevoo);
    }
}

const cachorro = new Cachorro('Rex', 5, 25);
const peixe = new Peixe('Nemo', 2, 12);
const falcao = new Falcao('Falcon', 3, 50);

cachorro.correr();
peixe.nadar();
falcao.voar();