import collections

"""
Task: Fill replace the ??? and define the flatten function
>>> a = [[1, 2], [3, 4], [5, 6]]

1. Flatten the list with list comprehension
>>> [i for l in a for i in l] 
[1, 2, 3, 4, 5, 6]

2. Flatten the list with list comprehension
>>> a = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
>>> [i for l in a for ll in l for i in ll]
[1, 2, 3, 4, 5, 6, 7, 8]

2. Flatten the list with the more general function `flatten`
>>> a = [1, 2, [3, 4], [[5, 6], [7, 8]]]
>>> flatten(a)
[1, 2, 3, 4, 5, 6, 7, 8]

Hint: use list comprehension + recursion
"""


def flatten(l):
    elements = [el for el in l if not isinstance(el, list)] # elements
    lists = [el for el in l if isinstance(el, list)] # lists
    return flatten(elements + [i for ll in lists for i in ll]) if len(lists) else elements


if __name__ == "__main__":
    a = [1, 2, [3, 4], [[5, 6], [7, 8]]]
    print(flatten(a))