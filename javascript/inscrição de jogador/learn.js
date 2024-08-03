class Jogador {
    constructor(nome, posicao, numero) {
        this.nome = nome;
        this.posicao = posicao.charAt(0).toUpperCase() + posicao.slice(1);
        this.numero = numero;
    }

    showName() {
        document.getElementById('info1').textContent = `Nome: ${this.nome}`;
    }

    showPosition() {
        document.getElementById('info2').textContent = `Posição: ${this.posicao}`;
    }

    showNumber() {
        document.getElementById('info3').textContent = `Número: ${this.numero}`;
    }
}

document.getElementById('botao').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const posicaoSelecionada = document.querySelector('input[name="posicao"]:checked');
    const numero = document.getElementById('numero').value;
    
    if (nome && posicaoSelecionada && numero) {
        const jogador = new Jogador(nome, posicaoSelecionada.value, numero);
        jogador.showName();
        jogador.showPosition();
        jogador.showNumber();
    } else {
        document.getElementById('info').textContent = 'Por favor, preencha todos os campos.';
    }
});