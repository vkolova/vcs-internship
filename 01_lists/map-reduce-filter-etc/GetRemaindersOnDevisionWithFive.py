def get_remainders_on_devision_with_five(min, max):
    return {num: (5 % num) for num in range(min, max + 1)}

print(get_remainders_on_devision_with_five(3, 5))