class Personagem:
    def __init__(self, nome, vida, nivel):
        self.nome = nome
        self.vida = vida
        self.nivel = nivel
    
    def get_nome(self):
        return self.nome
    def get_vida(self):
        return self.vida
    def get_nivel(self):
        return self.nivel
    def exibir_detalhes(self):
        return f'Nome: {self.nome}, Vida: {self.vida}, Nível: {self.nivel}'
    
class Heroi(Personagem):
    def __init__(self, nome, vida, nivel, habilidade):
        super().__init__(nome, vida, nivel)
        self.habilidade = habilidade
    def get_habilidade(self):
        return self.habilidade
    def exibir_detalhes(self):
        return f'Nome: {self.nome}, Vida: {self.vida}, Nível: {self.nivel}, Habilidade: {self.habilidade}'
    
class Inimigo(Personagem):
    def __init__(self, nome, vida, nivel, tipo):
        super().__init__(nome, vida, nivel)
        self.tipo = tipo
    def get_tipo(self):
        return self.tipo
    def exibir_detalhes(self):
        return f'Nome: {self.nome}, Vida: {self.vida}, Nível: {self.nivel}, Tipo: {self.tipo}'
    

heroi = Heroi('Superman', 100, 1, 'Voar')
print(heroi.exibir_detalhes())
inimigo = Inimigo('Lex Luthor', 50, 1, 'Humano')
print(inimigo.exibir_detalhes())