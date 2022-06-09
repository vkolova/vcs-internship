def find_positive_even_numbers(input_list):
    if not isinstance(input_list, list):
        raise TypeError('The input must be a list!')
    try:
        numbers = [i for i in input_list if i > 0 and i % 2 == 0]
    except TypeError:
        print('List elements must be numbers!')
        return

    print(numbers)
