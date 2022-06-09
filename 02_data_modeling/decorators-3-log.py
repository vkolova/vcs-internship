from datetime import datetime as dt


def log(file_name):
    def wrapper(fn):
        with open(file_name, 'a') as f:
            f.write('function {} was called at {}\n'.format(
                fn.__name__, dt.now()))
        return fn

    return wrapper


def encrypt(step_key):
    if not isinstance(step_key, int):
        raise TypeError('Step key must be of type integer!')

    def wrapper(fn):
        result = ''
        txt = fn()
        for char in txt:
            if not char.isalpha():
                result += char
            # uppercase letter
            elif char.isupper():
                result += chr((ord(char) + step_key - 65) % 26 + 65)
            # lowercase letter
            else:
                result += chr((ord(char) + step_key - 97) % 26 + 97)

        def give_wrapped():
            return result

        wrapped_function = give_wrapped()
        wrapped_function.__name__ = fn.__name__
        return wrapped_function

    return wrapper


@log('log.txt')
@encrypt(2)
def get_low():
    return "Get get get low"


encrypted_low = get_low()
assert encrypted_low == 'Igv igv igv nqy', 'Error in encrypting get_low()'
print(encrypted_low)
