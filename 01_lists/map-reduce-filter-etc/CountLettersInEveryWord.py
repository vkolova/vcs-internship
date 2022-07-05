def count_letters_in_every_word(list):
    return {s: len(s) for s in list}

print(count_letters_in_every_word(["Test", "Proba", "dsf", "fhjksdjh"]))