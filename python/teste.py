orçamento = int(input("Digite o orçamento do mês: "))
conta = int(input("Digite a soma total de contas a pagar: "))
sobra = orçamento - conta

if conta >= orçamento:
    print(f"A soma total de contas está fora do seu orçamento. Resta {
          sobra} reais.")
else:
    print(f"A soma total de contas a pagar está no seu orçamento. Resta {
          sobra} reais.")
