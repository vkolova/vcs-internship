def build_dictionary(a, b):
    if not (isinstance(a, int) and isinstance(b, int)):
        raise TypeError("Input values must be integers!")

    d = {i: 5%i for i in range(a, b+1)}
    print(d)
