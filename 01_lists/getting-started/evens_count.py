def count_even_numbers(list):
    return len([num for num in list if num % 2 == 0])

print(count_even_numbers([1, 2, 4]))