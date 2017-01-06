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


def iterate(func):
    yeld func

iterate()
