def count_letters(l):
    if not isinstance(l, list):
        raise TypeError('The input must be a list!')
    try:
        d = {a : len(a) for a in l}
    except TypeError:
        print('List elements must be strings!')
        return

    print(d)
