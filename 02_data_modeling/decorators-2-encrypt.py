def encrypt(step_key):
    if not isinstance(step_key, int):
        raise TypeError('Step key must be of type integer!')

    def wrapper(fn):
        result = ''
        txt = fn()
        for char in txt:
            if not char.isalpha():
                result += char
            #uppercase letter
            elif char.isupper():
                result += chr((ord(char) + step_key - 65) % 26 + 65)
            #lowercase letter
            else:
                result += chr((ord(char) + step_key - 97) % 26 + 97)
        return lambda : result
    return wrapper

@encrypt(2)
def fox():
    return 'The quick brown fox jump$ over th3 lazy rabb!t'

encrypted_fox = fox()
assert encrypted_fox == 'Vjg swkem dtqyp hqz lwor$ qxgt vj3 ncba tcdd!v', 'Error in encrypting fox()'
print(encrypted_fox)