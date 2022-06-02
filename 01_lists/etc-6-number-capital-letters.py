def count_capital_letters(s):
    if not isinstance(s, str):
        raise TypeError("The input must be a string!")

    capitals = [i for i in s if i.isupper()]

    print(len(capitals))
