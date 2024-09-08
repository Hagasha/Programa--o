import time

my_time = int(input("Enter the time in seconds: "))

for i in range(my_time, 0, -1):
    second = i % 60
    minute = i // 60 % 60
    hour = i // 3600
    print(f"{hour:02d}:{minute:02d}:{second:02d}")
    print(i)
    time.sleep(1)

print("Time's up!")