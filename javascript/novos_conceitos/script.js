class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    set nome(novoNome){
        if(typeof novoNome === "string" && novoNome.length > 0){
            this._nome = novoNome;
        }
        else{
            console.error("Nome inválido");
        }
    }

    set sobrenome(novoSobrenome){
        if(typeof novoSobrenome === "string" && novoSobrenome.length > 0){
            this._sobrenome = novoSobrenome;
        }
        else{
            console.error("Sobrenome inválido");
        }
    }

    set idade(novaIdade){
        if(typeof novaIdade === "number" && novaIdade >= 0){
            this._idade = novaIdade;
        }
        else{
            console.error("Idade inválida");
        }
    }
    get nome(){
        return this._nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    get nomeCompleto(){
        return this._nome + " " + this._sobrenome;
    }
    get idade(){
        return this._idade;
    }
}
const pessoa = new Pessoa("Lucas", "Fernando", 20);
console.log(pessoa.nomeCompleto);
console.log(pessoa.idade);