# not finished.

def groupby(func, seq):
    res = {}

    for i in seq:
        key = func(i)
        res.setdefault(key, []).append(i)

    print res
    # print func(res)

# groupby(lambda x: x%2, [0,1,2,3,4,5,6,7])

# identity
def double(x):
    return 2 * x

def identity(x):
    return x

def compose(f, g):
    return lambda x: f(g(x))

def iterate(func):
    current_func = identity

    while True:
        yield current_func
        current_func = compose(current_func, func)


# i = iterate(double)
# f = next(i)
# print f(3)
# f = next(i)
# print f(3)
# f = next(i)
# print f(3)
# f = next(i)
# print f(3)

# zip_with

def concat3(x, y, z):
    return x + y + z


def zip_with(func, *iterables):
    if not len(iterables):
        yield []

    shortest_iterable = min(map(len, iterables))
    for i in range (0, shortest_iterable):
        yield func(*[e[i] for e in iterables])


first_names = ['John', 'Miles']
last_names = ['Coltrane', 'Davis']
spaces =  [' '] * 2
print list(zip_with(concat3, first_names, spaces, last_names))
