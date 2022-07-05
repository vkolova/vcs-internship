def words_count(list, word):
    count = 0
    for w in list:
        if w == word:
            count += 1
    return count

print(words_count(['list', 'python', 'word'], 'word'))