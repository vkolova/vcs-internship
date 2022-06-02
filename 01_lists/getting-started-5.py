def words_count(input_list, word):
    occurences = 0
    for current_word in input_list:
        if current_word.lower() == word.lower():
           occurences += 1
    return occurences
