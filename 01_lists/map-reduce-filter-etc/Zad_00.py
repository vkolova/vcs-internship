def func(min, max):
    list = [num for num in range(min, max) if num % 2 == 0]
    return list

print(func(0, 10))