# Iterators and Generators


❗ ***Преди задачите:***
- list slicing; [index1:index2:index3];
- mutable vs. immutable
- type
- objects & functions; static functions & members; self
- modules; __init__.py
- operators == vs. is
- lambda functions
- positional & named arguments
- nonlocal & global
- итератори, генератори


## Задачи:

### _> groupby
Да се напише функция `groupby(func, seq)`, връщаща речник. Вторият аргумент е итеруем обект. Първият е функция, която връща ключовете от резултатния речник. За стойности се взимат списъци, съдържащи обектите от seq, без да се нарушава редът им, групирани по съответния ключ.

```python
>>> groupby(lambda x: x % 2, [0, 1, 2, 3, 4, 5, 6, 7])
{0: [0, 2, 4, 6], 1: [1, 3, 5, 7]}
```

### _> iterate
Да се напише функция-генератор `iterate(func)`, която последователно връща функциите:
identity, func, func.func, func.func.func... и т.н.
... където identity е функцията идентитет, а . е оператор за композиране на функции

```python
>>> def double(x):
        return 2 * x

>>> i = iterate(double)
>>> f = next(i)
>>> f(3)
3
>>> f = next(i)
>>> f(3)
6
>>> f = next(i)
>>> f(3)
12
>>> f = next(i)
>>> f(3)
24
>>> # и т.н.
```

### _> zip_with
Да се напише функция-генератор `zip_with(func, *iterables)`, която приема функция func и променлив брой итеруеми - `iterables`. За всяко число i от 0 до дължината на най-късото итеруемо, прилага към функцията func аргументите взети от i-тата позиция. След това `yield`-ва резултата. Ако не бъдат подадени `iterables` - генераторът трябва да бъде празен (да има 0 елемента).
```python
>>> def concat3(x, y, z):
        return x + y + z

>>> first_names = ['John', 'Miles']
>>> last_names = ['Coltrane', 'Davis']
>>> spaces = [' '] * 2
>>> list(zip_with(concat3, first_names, spaces, last_names))
['John Coltrane', 'Miles Davis']
```