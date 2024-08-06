// Desestrutura os parâmetros de uma função

function displayPerson({ nome, sobrenome, idade, profissão = 'Não informado' }) {
  console.log(`Nome: ${nome} ${sobrenome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Profissão: ${profissão}`);
}

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    profissão: 'Programador'
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

displayPerson(pessoa2);