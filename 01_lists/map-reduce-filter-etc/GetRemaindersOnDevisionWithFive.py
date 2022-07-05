def GetRemaindersOnDevisionWithFive(min, max):
    return {num: (5 % num) for num in range(min, max + 1)}

print(GetRemaindersOnDevisionWithFive(3, 5))