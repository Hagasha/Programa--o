import math
a, b = map(float, input().split())
c, d = map(float, input().split())
e = math.sqrt(pow(c - a, 2) + pow(d - b, 2))
math.sqrt(e)

print(f"{e:.4f}")