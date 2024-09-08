montante = 0 
taxa = 0
tempo = 0

while montante <= 0:
    montante = float(input("Digite o montante inicial: "))
    if montante <= 0:
        print("O montante inicial deve ser maior que zero.")

while taxa <= 0:
    taxa = float(input("Digite a taxa de juros (em %): "))
    if taxa <= 0:
        print("A taxa de juros deve ser maior que zero.")

while tempo <= 0:
    tempo = int(input("Digite o tempo de aplicação (em anos): "))
    if tempo <= 0:
        print("O tempo de aplicação deve ser maior que zero.")

juros = montante * (1 + taxa / 100) ** tempo - montante

print(f"O montante final após {tempo} ano(s) será de R${montante + juros:.2f}.")