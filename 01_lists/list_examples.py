"""
Indexing
========


  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  1

Negative indexing
=================


  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  10
  >>> ???
  8

List slices (``a[start:end]``)
==============================


  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  [2, 3, 4, 5, 6, 7]

List slices with negative indexing
==================================


  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  [7, 8]

List slices with step (``a[start:end:step]``)
=============================================



  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  [0, 2, 4, 6, 8, 10]
  >>> ???
  [0, 3, 6, 9]
  >>> ???
  [2, 4, 6]


List slices with negative step
==============================


  >>> a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >>> ???
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  >>> ???
  [10, 8, 6, 4, 2, 0]

List slice assignment
=====================


    >>> a = [1, 2, 3, 4, 5]
    >>> a[2:3] = [0,0]
    >>> a
    ???
    >>> a[1:1], a[4:4], a[4:5] = [8,9], [0], []
    >>> a
     ???
    >>> a[1:7] = []
    >>> a
     ???
"""

if __name__ == "__main__":
    import doctest

    doctest.testmod()