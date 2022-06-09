import re


def count_capital_letters(s):
    if not isinstance(s, str):
        raise TypeError("The input must be a string!")

    capitals = re.findall('[A-Z]', s)
    print(len(capitals))
