# Strings
nome = "Alice"
print(f"{'Nome:':>10} {nome:<10}")  # Alinha 'Nome:' à direita e 'Alice' à esquerda

# Inteiros
numero = 42
print(f"Número: {numero:05d}")  # Saída: Número: 00042

# Floats
pi = 3.14159
print(f"Pi: {pi:.2f}")  # Saída: Pi: 3.14
print(f"Pi: {pi:10.2f}")  # Saída: Pi:       3.14

# Porcentagem
taxa = 0.17
print(f"Taxa: {taxa:.1%}")  # Saída: Taxa: 17.0%

# Notação Científica
num_grande = 1234567890
print(f"Científico: {num_grande:.2e}")  # Saída: Científico: 1.23e+09

# Alinhamento e Preenchimento
print(f"{'Esquerda':<10}|{'Direita':>10}|{'Centro':^10}")
print(f"{'*'*10}")

# Sinais
num_pos = 42
num_neg = -42
print(f"{num_pos:+d} e {num_neg:+d}")  # Saída: +42 e -42

# Números Grandes
num_grande = 1234567890
print(f"Com separador: {num_grande:,}")  # Saída: Com separador: 1,234,567,890

# Combinando Especificadores
valor = 123.456
print(f"{valor:+10.2f}")  # Saída:    +123.46