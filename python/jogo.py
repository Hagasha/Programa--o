class Personagem:
    def __init__(self, nome, vida, nivel, habilidade = None, tipo = None):
        self.nome = nome
        self.vida = vida
        self.nivel = nivel
        self.habilidade = habilidade
        self.tipo = tipo
    
    def get_nome(self):
        return self.nome
    def get_vida(self):
        return self.vida
    def get_nivel(self):
        return self.nivel
    def exibir_detalhes(self):
        detalhes = f'\n{type(self).__name__} \nNome: {self.nome} \nVida: {self.vida} \nNível: {self.nivel}'
        if self.habilidade:
            detalhes += f'\nHabilidade: {self.habilidade}'
        if self.tipo:
            detalhes += f'\nTipo: {self.tipo}\n'
        return detalhes
    
class Heroi(Personagem):
    def __init__(self, nome, vida, nivel, habilidade):
        super().__init__(nome, vida, nivel, habilidade=habilidade)
    
class Inimigo(Personagem):
    def __init__(self, nome, vida, nivel, tipo):
        super().__init__(nome, vida, nivel, tipo=tipo)
    

heroi = Heroi('Superman', 100, 1, 'Voar')
print(heroi.exibir_detalhes())
inimigo = Inimigo('Lex Luthor', 50, 1, 'Humano')
print(inimigo.exibir_detalhes())