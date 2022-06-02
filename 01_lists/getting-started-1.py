def triangle_type(a, b, c):
    if a == b == c:
        return "равностранен"
    elif a == b or a == c or b == c:
        return "равнобедрен"
    else:
        return "разностранен"
    