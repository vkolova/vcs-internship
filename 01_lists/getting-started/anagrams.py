def is_anagram(w1, w2):
    return "ANAGRAMS" if sorted(w1.lower()) == sorted(w2.lower()) else "NOT ANAGRAMS"

word1 = input("Enter first word: ")
word2 = input("Enter second word: ")

print(is_anagram(word1, word2))