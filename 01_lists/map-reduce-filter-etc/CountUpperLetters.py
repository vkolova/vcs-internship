def CountUpperLetters(str):
    return len([ch for ch in str if ch.isupper()])

print(CountUpperLetters("Testing this fUncTion with A String"))