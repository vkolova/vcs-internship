def test_palindromes(a, b):
    reversed_a = a[::-1]
    if reversed_a.lower() == b.lower():
        return True
    else:
        return False
