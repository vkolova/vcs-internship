import functools
def GetSumOfSquaredNumbersInRange(min, max):
    return functools.reduce(lambda a, b: a + (b ** 2), range(min, max + 1))

print(GetSumOfSquaredNumbersInRange(0, 3))