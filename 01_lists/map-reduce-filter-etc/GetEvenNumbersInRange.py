def GetEvenNumbersInRange(min, max):
    return [num for num in range(min if min % 2 == 0 else min + 1, max, 2)]

print(GetEvenNumbersInRange(0, 10))