def count_upper_letters(str):
    return len([ch for ch in str if ch.isupper()])

print(count_upper_letters("Testing this fUncTion with A String"))