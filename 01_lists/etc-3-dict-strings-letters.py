def count_letters(input_list):
    if not isinstance(input_list, list):
        raise TypeError('The input must be a list!')
    try:
        d = {a: len(a) for a in input_list}
    except TypeError:
        print('List elements must be strings!')
        return

    print(d)
