def func(w1, w2):
    w1 = w1.lower()
    w2 = w2.lower()
    w1 = sorted(w1)
    w2 = sorted(w2)
    
    if w1 == w2:
        return "ANAGRAMS"
    else:
        return "NOT ANAGRAMS"

print(func("silent", "listen"))