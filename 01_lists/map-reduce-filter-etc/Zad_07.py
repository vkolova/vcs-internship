import functools
def func(min, max):
    sum = functools.reduce(lambda a, b: a + (b ** 2), range(min, max + 1))
    return sum

print(func(0, 3))