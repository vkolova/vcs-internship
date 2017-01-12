class Cons(object):

    def __init__(self, val, nxt):
        self.val = val
        self.next = nxt

# nil = ?

nil = None

class List(object):

    def __init__(self, head):
        self.head = head

    @classmethod
    def create(cls, *args):
        head = nil
        for arg in args:
            head = Cons(arg, head)
        return cls(head)

    def get_list(self):
        return list(iter(self))

    def __iter__(self):
        return Iterator(self.head)

    def __getitem__(self, index):
        return self.get_list()[index]

    def __repr__(self):
        return '<{}>'.format(', '.join(str(v) for v in self))



class Iterator(object):

    def __init__(self, head):
        self.head = head

    def next(self):
        if self.head is nil:
            raise StopIteration
        head = self.head
        self.head = self.head.next
        return head.val

    def __iter__(self):
        return self


"""
Creation
========

    >>> l = List(Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, nil))))))
    >>> l
    <1, 2, 3, 4, 5>
    >>> l = List.create(1, 2, 3, 4, 5)
    >>> l
    <1, 2, 3, 4, 5>

Iteration
=========

    >>> [li + 1 for li in l]
    [2, 3, 4, 5, 6]

Indexing:
=========

    >>> l[1]
    2
    >>> l[-2]
    4

"""


#l = List(Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, nil))))))
#print l
l = List.create(1, 2, 3, 4, 5)
print l

if __name__ == "__main__":
    import doctest
    doctest.testmod()
