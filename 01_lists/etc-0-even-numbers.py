def find_even_numbers(a, b):
    if not isinstance(a, int):
        raise TypeError('{} must be integer!'.format(a))
    if not isinstance(b, int):
        raise TypeError('{} must be integer!'.format(b))
    if a >= b:
        raise ValueError('Invalid interval!')

    numbers = list(k for k in range(a, b) if k % 2 == 0)

    print(numbers)
