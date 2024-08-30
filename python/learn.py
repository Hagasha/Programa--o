import math

radius = float(input("Enter the radius of the circle: "))
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius
print(f"The area of the circle is {area:.2f} and the circumference is {circumference:.2f}")
