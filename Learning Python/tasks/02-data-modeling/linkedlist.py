def Cons(val, nxt):
    pass

# nil = ?


class List(object):

    def __init__(self, head):
        pass

    @classmethod
    def create(cls, *args):
        pass

    def get_list(self):
        pass

    def __iter__(self):
        pass

    def __getitem__(self, index):
        pass

    def __repr__(self):
        pass


"""
Creation
>>> l = Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, nil)))))
>>> l
<1, 2, 3, 4, 5>
>>> l = List.create(1, 2, 3, 4, 5)
>>> l
<1, 2, 3, 4, 5>

Iteration
>>> [li + 1 for li in l]
[2, 3, 4, 5, 6]

Indexing:
>>> l[1]
2
>>> l[-2]
4

"""


if __name__ == "__main__":
    import doctest
    doctest.testmod()
