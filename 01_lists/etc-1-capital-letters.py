import re


def find_capital_letters(s):
    if not isinstance(s, str):
        raise TypeError("The input must be a string!")

    capital_letters = re.findall('[A-Z]', s)
    capital_letters = ''.join(capital_letters)

    print(capital_letters)
