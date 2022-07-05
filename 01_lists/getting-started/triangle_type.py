def triangle_type(a, b, c):
    sides = [a, b, c]
    sides.sort()
    if sides[0] == sides[2]:
        return "равностранен"
    elif sides[0] == sides[1] or sides[1] == sides[2]:
        return "равнобедрен"
    else:
        return "разностранен"

print(triangle_type(1, 1, 1))
print(triangle_type(1.41, 1.41, 2))
print(triangle_type(3, 4, 5))
