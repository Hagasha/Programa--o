const pessoa1 = {
    nome: 'Luiz',
    comidaFav: 'Pizza',
    sayHello: function() {console.log(`Olá eu sou ${this.nome}`);},
    eat: function() {console.log(`Eu gosto de comer ${this.comidaFav}`);}
}; 
pessoa1.sayHello(); 