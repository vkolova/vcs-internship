import numbers

"""
@validate(
    arg('x', [number, lambda x: 0 < x]),
    arg('y', [instance(Iterable)]),
)
def calc(x, y):
    pass
"""

@validate(int, float)
def is_number(n):
    pass


@validate(string)
def is_string(n):
    pass


@validate(type)
def is_instanceof(type):
    pass


def arg(name, validators):
    pass


def validate(*validators):
    pass
