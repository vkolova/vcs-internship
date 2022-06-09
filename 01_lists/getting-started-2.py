def test_palindromes(a, b):
    reversed_a = a[::-1]
    return reversed_a.lower() == b.lower()
