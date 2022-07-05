def get_upper_letters(str):
    return "".join([ch for ch in str if ch.isupper()])

print(get_upper_letters("TestCase"))