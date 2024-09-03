temp  = 20
is_sunny = False

if temp >= 28 and is_sunny:
    print("it's Hot outside 🥵")
    print("It's Sunny ☀️")
elif temp <= 0 and is_sunny:
    print("It's Cold outside 🥶")
    print("It's Sunny ☀️")
elif 28 > temp > 0 and is_sunny:
    print("It's Warm outside 🙂")
    print("It's Sunny ☀️")
elif temp >= 28 and not is_sunny:
    print("it's Hot outside 🥵")
    print("It's Cloudy ☁️")
elif temp <= 0 and not is_sunny:
    print("It's Cold outside 🥶")
    print("It's Cloudy ☁️")
elif 28 > temp > 0 and not is_sunny:
    print("It's Warm outside 🙂")
    print("It's Cloudy ☁️")
