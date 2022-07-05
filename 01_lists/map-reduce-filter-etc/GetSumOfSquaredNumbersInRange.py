import functools
def get_sum_of_squared_numbers_in_range(min, max):
    return functools.reduce(lambda a, b: a + (b ** 2), range(min, max + 1))

print(get_sum_of_squared_numbers_in_range(0, 3))