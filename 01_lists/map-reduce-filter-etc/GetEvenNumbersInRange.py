def get_even_numbers_in_range(min, max):
    return [num for num in range(min if min % 2 == 0 else min + 1, max, 2)]

print(get_even_numbers_in_range(0, 10))