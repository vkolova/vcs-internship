def concat3(x, y, z):
    return x + y + z

def zip_with(func, *args):
    if not callable(func):
        raise TypeError('First argument must be a function!')

    if len(args):
        yield list(map(func, *args))
    else:
        yield []


first_names = ['John', 'Miles']
last_names = ['Coltrane', 'Davis']
spaces = [' '] * 2
print(list(zip_with(concat3, first_names, spaces, last_names)))