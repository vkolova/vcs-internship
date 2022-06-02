def find_capital_letters(s):
    if not isinstance(s, str):
        raise TypeError("The input must be a string!")

    capital_letters = list(i for i in s if i.isupper())
    capital_letters = ''.join(capital_letters)

    print(capital_letters)
