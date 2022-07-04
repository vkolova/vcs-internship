def count_substrings(haystack, needle):
    count = 0
    i = 0
    while i < len(haystack):
        if haystack[i : i + len(needle)] == needle:
            count += 1
        i = i + len(needle)
    return count

print(count_substrings("babababa", "baba"))