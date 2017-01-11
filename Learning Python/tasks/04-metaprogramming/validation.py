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

def number(f):
    def decorator_function(n):
        return isinstance(n, int) or isinstance(n, float)
    return decorator_function

@number
def is_number(n):
    pass

def string(f):
    def decorator_function(n):
        return isinstance(n, str)
    return decorator_function

@string
def is_string(n):
    pass

def instance(f):
    def decorator_function(type):
        def decorator_func(n):
            return isinstance(n, type)
        return decorator_func
    return decorator_function

@instance
def is_instanceof(type):
    pass


def arguments(f):
    def decorator_arg(name, validators):
        def validate(arg_name, arg_value):
            if arg_name != name:
                return

            for validator in validators:
                if not validator(arg_value):
                    print "Wrong type"
        return validate
    return decorator_arg

@arguments
def arg(name, validators):
    pass


def validation(*validators):
    def validation_wrapper(**kwargs):
        for k, v in kwargs.items():
            for validator_func in validators:
                validator_func(k, v)

            func()
    return validation_wrapper

@validation(arg('x', [is_number, lambda x: x > 0]),
    arg('y', [is_instanceof(collections.Iterable)]))
def calc(x, y):
    return [x + z for z in y]

print calc(5, [1, 1])
