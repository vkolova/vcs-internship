def func(min, max):
    return {num: (5 % num) for num in range(min, max + 1)}

print(func(3, 5))