def words_count(input_list, word):
    occurrences = 0
    for current_word in input_list:
        if current_word.lower() == word.lower():
            occurrences += 1
    return occurrences
