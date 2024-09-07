# Exemplo 1: Contagem regressiva
contador = 5
while contador > 0:
    print(contador)
    contador -= 1
print("Lançamento!")

# Exemplo 2: Soma de números inseridos pelo usuário
soma = 0
while True:
    numero = input("Digite um número (ou 'sair' para terminar): ")
    if numero.lower() == 'sair':
        break
    soma += int(numero)
print(f"A soma total é: {soma}")

# Exemplo 3: Geração de sequência de Fibonacci
a, b = 0, 1
while a < 100:
    print(a, end=' ')
    a, b = b, a + b
print()  # Para quebrar a linha no final

# Exemplo 4: Validação de entrada
while True:
    idade = input("Digite sua idade: ")
    if idade.isdigit() and 0 < int(idade) < 120:
        print(f"Sua idade é {idade} anos.")
        break
    else:
        print("Por favor, digite uma idade válida.")

# Exemplo 5: Uso do 'else' com while
tentativas = 3
while tentativas > 0:
    senha = input("Digite a senha: ")
    if senha == "secreto":
        print("Acesso concedido!")
        break
    tentativas -= 1
    print(f"Senha incorreta. Você tem {tentativas} tentativas restantes.")
else:
    print("Você excedeu o número de tentativas. Acesso negado.")