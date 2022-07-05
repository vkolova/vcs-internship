def CountLettersInEveryWord(list):
    return {s: len(s) for s in list}

print(CountLettersInEveryWord(["Test", "Proba", "dsf", "fhjksdjh"]))