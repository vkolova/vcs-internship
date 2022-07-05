def is_palindrome(w1, w2):
    return "Palindrome" if w1 == "".join(reversed(w2)) else "Not a palindrome"

print(is_palindrome("neven", "neven"))