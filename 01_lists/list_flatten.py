import collections

"""
Task: Fill replace the ??? and define the flatten function
>>> a = [[1, 2], [3, 4], [5, 6]]

1. Flatten the list with list comprehension
>>> [item for l in a for item in l]
[1, 2, 3, 4, 5, 6]

2. Flatten the list with list comprehension
>>> a = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
>>> [item for l in a for ll in l for item in ll]
[1, 2, 3, 4, 5, 6, 7, 8]

2. Flatten the list with the more general function `flatten`
>>> a = [1, 2, [3, 4], [[5, 6], [7, 8]]]
>>> flatten(a)
[1, 2, 3, 4, 5, 6, 7, 8]

Hint: use list comprehension + recursion
"""


def flatten(xs):
    pass


if __name__ == "__main__":
    import doctest

    doctest.testmod()