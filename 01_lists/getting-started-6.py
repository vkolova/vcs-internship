def count_substrings(haystack, needle):
    occurrences = 0

    current_position = 0
    while current_position + len(needle) <= len(haystack):
        if haystack[current_position: current_position
                    + len(needle)] == needle:
            occurrences += 1
            current_position += len(needle)
        else:
            current_position += 1

    return occurrences
