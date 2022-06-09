import operator


class Lazy:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.operation = None

    def __add__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__add__
        return new_lazy

    def __radd__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = other
        new_lazy.right = self
        new_lazy.operation = operator.__add__
        return new_lazy

    def __sub__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__sub__
        return new_lazy

    def __rsub__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = other
        new_lazy.right = self
        new_lazy.operation = operator.__sub__
        return new_lazy

    def __mul__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__mul__
        return new_lazy

    def __rmul__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__mul__
        return new_lazy

    def __truediv__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__truediv__
        return new_lazy

    def __rtruediv__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = other
        new_lazy.right = self
        new_lazy.operation = operator.__truediv__
        return new_lazy

    def __floordiv__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__floordiv__
        return new_lazy

    def __rfloordiv__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = other
        new_lazy.right = self
        new_lazy.operation = operator.__floordiv__
        return new_lazy

    def __mod__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = other
        new_lazy.operation = operator.__mod__
        return new_lazy

    def __rmod__(self, other):
        new_lazy = Lazy(None)
        new_lazy.left = other
        new_lazy.right = self
        new_lazy.operation = operator.__mod__
        return new_lazy

    def __neg__(self):
        new_lazy = Lazy(None)
        new_lazy.left = self
        new_lazy.right = -1
        new_lazy.operation = operator.__mul__
        return new_lazy

    def __pos__(self):
        return self

    def __bool__(self):
        return bool(self.force())

    def __str__(self):
        return str(self.force())

    def __float__(self):
        return float(self.force())

    def __int__(self):
        return int(self.force())

    def force(self):
        if self.value is not None:
            return self.value

        if isinstance(self.left, Lazy):
            left_value = self.left.force()
        else:
            left_value = self.left

        if isinstance(self.right, Lazy):
            right_value = self.right.force()
        else:
            right_value = self.right

        return self.operation(left_value, right_value)
