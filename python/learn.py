linhas = int(input("Insira a quantidade de linhas: "))
colunas = int(input("Insira a quantidade de colunas: "))
simbolo = input("Insira o simbolo a ser impresso: ")

for x in range(linhas):
    for y in range(colunas):
        print(simbolo, end="")
    print()