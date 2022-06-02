def events_counter(input_list):
    even_numbers = 0
    for a in input_list:
        if not isinstance(a, int):
            print('Error: %s is not an integer!'%(a))
            return None
        if a%2 == 0:
            even_numbers += 1
    return even_numbers
