def groupby(func, seq):
    if not callable(func):
        raise TypeError('First input must be a function!')

    results = {}
    for i in seq:
        if func(i) not in results:
            results[func(i)] = [i]
        else:
            results[func(i)].append(i)
    return results
