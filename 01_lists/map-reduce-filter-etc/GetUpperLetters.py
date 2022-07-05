def GetUpperLetters(str):
    return "".join([ch for ch in str if ch.isupper()])

print(GetUpperLetters("TestCase"))