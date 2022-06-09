def double(x):
    return 2 * x


def identity(x):
    return x


def compose(outer_func, inner_func):
    return lambda x: outer_func(inner_func(x))


def iterate(func):
    current = identity
    while True:
        yield current
        current = compose(func, current)


i = iterate(double)
f = next(i)
print(f(3))
f = next(i)
print(f(3))
f = next(i)
print(f(3))
f = next(i)
print(f(3))
