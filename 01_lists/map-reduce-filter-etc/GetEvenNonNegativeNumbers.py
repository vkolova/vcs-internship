def GetEvenNonNegativeNumbers(list):
    return [num for num in list if num > 0 and num % 2 == 0]

print(GetEvenNonNegativeNumbers([0, 1, 43, 2, 5, 90, 6, -8]))