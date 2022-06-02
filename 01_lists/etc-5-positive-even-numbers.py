def find_positive_even_numbers(l):
    if not isinstance(l, list):
        raise TypeError('The input must be a list!')
    try:
        numbers = [i for i in l if i > 0 and i%2 == 0]
    except TypeError:
        print('List elements must be numbers!')
        return

    print(numbers)
