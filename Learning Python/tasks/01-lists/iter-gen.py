# not finished.

def groupby(func, seq):
    i = 0
    res = {}
    res[seq[0]] = []
    res[seq[1]] = []

    while i < len(seq):
        if seq[i] %2 == 0:
            res[seq[0]].append(seq[i])
        else:
            res[seq[1]].append(seq[i])
        i+=1

    print res
    # print func(res)

# groupby(lambda x: x%2, [0,1,2,3,4,5,6,7])

# identity
def double(x):
    return 2 * x

def iterate(identity):
    i = 0

    while True:
        def func(x):
            if i == 0:
                return x
            else:
                res = x
                for _ in range(i):
                    res = identity(res)
                return res

        yield func
        i += 1


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
    if not iterables:
        yield []
    else:
        l = len(iterables[0])
        i = 1
        while i < len(iterables):
            if l < len(iterables[i]):
                l = len(iterables[i])
            i += 1

        i = 0
        j = 0
        for j in range(len(iterables)):
            while i < l:
                res = func(iterables[j][i], iterables[j+1][i], iterables[j+2][i])
                yield res
                i += 1

first_names = ['John', 'Miles']
last_names = ['Coltrane', 'Davis']
spaces =  [' '] * 2
print list(zip_with(concat3, first_names, spaces, last_names))
