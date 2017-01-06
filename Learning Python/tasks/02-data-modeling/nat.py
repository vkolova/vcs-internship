class Nat(object):

    @classmethod
    def from_int(cls, number):
        pass

    def successor(self):
        pass

    def __add__(self, other):
        pass

    def __sub__(self, other):
        pass

    def __mul__(self, other):
        pass

    def __div__(self, other):
        pass


class Zero(Nat):
    pass

class Succ(Nat):
    pass


zero = Zero()

one = zero.successor()
