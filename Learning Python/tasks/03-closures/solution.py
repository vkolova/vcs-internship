def gt(x):
    def check(y):
        return y > x
    return check

def lt(x):
    def check(y):
        return y < x
    return check

def eq(x):
    def check(y):
        return y == x
    return check

def oftype(t):
    def check(y):
        return type(y) == t
    return check

def present():
    def check(x):
        return x != None
    return present

def pred(function):
    return function() == True

def for_any(*predicates):
    i = 0
    while i < len(predicates):
        return predicates[i]() == True
        i += 1
    return False

def for_all(*predicates):
    flag = True
    i = 0
    while i < len(predicates):
        if predicates[i]() != True:
            flag = False
        i+=1
    return flag
