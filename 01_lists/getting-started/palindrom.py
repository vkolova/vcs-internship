def func(w1, w2):
    size = len(w1)
    for i in range(0, size):
        if w1[i] != w2[size - i - 1]:
            return "Not a palindrom"
    return "Palindrom"

print(func("nevet", "neven"))