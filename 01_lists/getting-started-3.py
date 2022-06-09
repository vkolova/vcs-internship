def is_anagrams(a, b):
    return sorted(a.lower()) == sorted(b.lower())


if __name__ == "__main__":
    a, b = input('Enter first word: '), input('Enter second word: ')
    if is_anagrams(a, b):
        print('ANAGRAMS')
    else:
        print('NOT ANAGRAMS')
