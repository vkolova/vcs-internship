def gt(x):
    def predicate(y):
        return y > x
    return predicate

def lt(x):
    def predicate(y):
        return y < x
    return predicate

def eq(x):
    def predicate(y):
        return y == x
    return predicate

def oftype(t):
    def predicate(y):
        return isinstance(y, t)
    return predicate

def present():
    def predicate(x):
        return x != None
    return predicate

def pred(function):
    def predicate(x):
        return function(x)
    return predicate

def for_any(*predicates):
    def predicate(arg):
        flag = False
        for i in range(0, len(predicates)):
            if predicates[i](arg):
                flag = True
        return flag
    return predicate

def for_all(*predicates):
    def predicate(arg):
        flag = True
        for i in range(0, len(predicates)):
            if not predicates[i](arg):
                flag = False
        return flag
    return predicate
