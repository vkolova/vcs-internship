def sum_squares(a, b):
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError('The input values must be of type integer!')
    if a >= b:
        raise ValueError('Invalid interval selected!')

    sq_sum = sum(map(lambda x: x**2, range(a,b)))

    print(sq_sum)

