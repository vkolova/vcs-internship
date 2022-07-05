def get_even_non_negative_numbers(list):
    return [num for num in list if num > 0 and num % 2 == 0]

print(get_even_non_negative_numbers([0, 1, 43, 2, 5, 90, 6, -8]))