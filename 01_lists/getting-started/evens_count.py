def func(list):
    count = 0
    for num in list:
        if num % 2 == 0:
            count += 1
    return count

print(func([1, 2, 4]))