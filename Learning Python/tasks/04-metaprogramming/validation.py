import numbers
import collections

"""
@validate(
    arg('x', [number, lambda x: 0 < x]),
    arg('y', [instance(Iterable)]),
)
def calc(x, y):
    pass
"""

def number(n):
    return isinstance(n, int) or isinstance(n, float)

def string(val):
    return isinstance(val, str)

def instance(type):
    def decorator_func(val):
        return isinstance(n, type)
    return decorator_func

class arg(object):
    def __init__(self, name, validators):
        self.name = name
        self.validators = validators

    def validate(self, value):
        for validator in self.validators:
            if not validator(value):
                raise ValidationError


def validation(*validators):
    validators = {a.name: a for a in validators}
    def decorator(func):
        def wrapper(**kwargs):
            for k, v in kwargs.items():
                validator = validators[k]
                validator.validate(v)

            func(**kwargs)
        return wrapper
    return decorator

@validation(arg('x', [is_number, lambda x: x > 0]),
    arg('y', [is_instanceof(collections.Iterable)]))
def calc(x, y):
    return [x + z for z in y]

print calc(5, [1, 1])
