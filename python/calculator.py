operador = input("Digite o operador(+ ou - ou / ou *): ")
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if operador == "+":
    resultado = num1 + num2
    print("Você escolheu a operação de soma")   
    print(f"O resultado da soma é: {resultado:.2f}")
elif operador == "-":
    resultado = num1 - num2
    print("Você escolheu a operação de subtração")
    print(f"O resultado da subtração é: {resultado:.2f}")
elif operador == "/":
    resultado = num1 / num2
    print("Você escolheu a operação de divisão")
    print(f"O resultado da divisão é: {resultado:.2f}")
elif operador == "*":
    resultado = num1 * num2
    print("Você escolheu a operação de multiplicação")
    print(f"O resultado da multiplicação é: {resultado:2f}")
