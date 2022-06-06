def accepts(*args_decorator):
    def decorator_outer(fn):
        def decorator_inner(*args_function):
            if len(args_function) != len(args_decorator):
                raise AttributeError('The number of arguments of the function and decorator is not the same!')

            for i in range(len(args_function)):
                if not isinstance(args_function[i], args_decorator[i]):
                    raise TypeError('Argument {} of {} is not {}!'.format((i+1), fn.__name__, args_decorator[i].__name__))

            return fn(*args_function)
        return decorator_inner
    return decorator_outer

@accepts(str)
def greet(name):
    print('Hello, {}!'.format(name))

greet('Ivan')
greet(123)
