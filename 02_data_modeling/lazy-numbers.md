### _> Lazy numbers

Да се реализира клас Lazy, който представлява число с отложено пресмятане на аритметичните операции. Ще наричаме тези числа "мързеливи". Класът трябва да предоставя следната функционалност:

***_> Конструктор**  
... който по един аргумент (число или мързеливо число) инстанцира "мързеливо" число със съответната стойност.

***Пример***
```python
>>> lazy_int = Lazy(42)
>>> lazy_complex = Lazy(5.0 + 1.0j)
>>> lazy_number = Lazy(lazy_int)
```

***_> Бинарни (двуместни) оператори: +, -, *, /, //, %***  
Те се прилагат на двойка "мързеливи" числа или на "мързеливо" и обикновено число. Всички оператори трябва да връщат нова инстанция на мързеливо число. Новото мързеливо число трябва да пази информация за двете числа и оператора, но да НЕ прилага оператора на числата. Целта е "мързеливото" число да изглежда като двоично дърво, чиито поддървета са мързеливи [или обикновено] числа, а във възлите има оператори.

***Пример***
```python
>>> lazy_number = (Lazy(1) + 2) * (3 + Lazy(4)) - 8
```

***_> Унарни (едноместни) оператори: +, -***  
Те се прилагат на "мързеливо" число и връщат ново мързеливо число. Новото мързеливо число трябва да пази информация за числото и оператора, но да НЕ прилага оператора на числото.

***Пример***
```python
>>> lazy_number = - Lazy(1)
```

***_> Член функция force***  
Няма аргументи, кара "мързеливото" число да сметне стойността си.

***Пример***
```python
>>> lazy_number = Lazy(8) + Lazy(42)
>>> number = lazy_number.force()
>>> print(number)
50
```

***_> Функции __bool__, __int__, __float__, __str__***  
Тези функции карат числото да се изчисли и след това го преобразуват до съответния тип

***Пример***
```python
>>> lazy_number = Lazy(3)
>>> three = float(lazy_number)
>>> print(three)
3.0
```

## 🔖 Забележки  
Не правете проверка за типа на аргумента на конструктора, а разчитайте на валиден вход. 
Отделете време и погледнете примерния тест преди да започнете да пишете код. 
Не забравяйте за "десните" и "левите" оператори. 
Можете да подходите към задачата по различни начини. Някои идеи, които можете да ползвате са: 
- дърво с оператори във възлите и числа в листата
- йерархия от наследници на Lazy
- заигравка с ламбда функции
- ... и т.н.