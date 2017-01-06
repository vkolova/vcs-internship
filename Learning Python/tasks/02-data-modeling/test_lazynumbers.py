import unittest

from numbers import Number
from fractions import Decimal, Fraction

from lazynumbers import Lazy


class OperatorAppliedError(Exception):
    pass


class ErrorRaisingNumber(Number):

    def raising_operator(*args):
        raise OperatorAppliedError

    __add__ = __radd__ = raising_operator
    __sub__ = __rsub__ = raising_operator
    __mul__ = __rmul__ = raising_operator
    __div__ = __rdiv__ = raising_operator
    __truediv__ = __rtruediv__ = raising_operator
    __floordiv__ = __rfloordiv__ = raising_operator
    __mod__ = __rmod__ = raising_operator
    __pos__ = __neg__ = raising_operator


class LazyNumberTests(unittest.TestCase):

    def test_lazy_number_can_be_constructed(self):
        lazy_int = Lazy(42)
        lazy_float = Lazy(3.14)
        lazy_complex = Lazy(5.0 + 2.0j)
        lazy_decimal = Lazy(Decimal(100))
        lazy_fraction = Lazy(Fraction(22, 7))
        lazy_lazy = Lazy(lazy_int)

    test_lazy_number_can_be_constructed1 = \
    test_lazy_number_can_be_constructed2 = \
    test_lazy_number_can_be_constructed3 = \
    test_lazy_number_can_be_constructed

    def _test_operator_delay_and_force(self, lazynum_constructor):
        error_raising_number = lazynum_constructor() # shouldn't raise
        with self.assertRaises(OperatorAppliedError):
            error_raising_number.force() # should raise

    def test_addition_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) + 8)

    def test_addition_is_correct(self):
        self.assertEqual((Lazy(42) + 8).force(), 50)

    def test_right_addition_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 8 + Lazy(ErrorRaisingNumber()))

    def test_right_addition_is_correct(self):
        self.assertEqual((8 + Lazy(42)).force(), 50)

    def test_subtraction_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) - 256)

    def test_subtraction_is_correct(self):
        self.assertEqual((Lazy(1024) - 1000).force(), 24)

    def test_right_subtraction_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 256 - Lazy(ErrorRaisingNumber()))

    def test_right_subtraction_is_correct(self):
        self.assertEqual((1024 - Lazy(24)).force(), 1000)

    def test_multiplication_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) * 42)

    def test_multiplication_is_correct(self):
        self.assertEqual((Lazy(123) * 2).force(), 246)

    def test_right_multiplication_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 42 * Lazy(ErrorRaisingNumber()))

    def test_right_multiplication_is_correct(self):
        self.assertEqual((10 * Lazy(5)).force(), 50)

    def test_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) / 3000)

    def test_division_is_correct(self):
        self.assertEqual((Lazy(123) / 2).force(), 123 / 2)

    def test_right_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 3000 / Lazy(ErrorRaisingNumber()))

    def test_right_division_is_correct(self):
        self.assertEqual((11 / Lazy(5)).force(), 11 / 5)

    def test_floor_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) // 13)

    def test_floor_division_is_correct(self):
        self.assertEqual((Lazy(123.4) // .5).force(), 123.4 // .5)

    def test_right_floor_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 13 // Lazy(ErrorRaisingNumber()))

    def test_right_floor_division_is_correct(self):
        self.assertEqual((43.5 // Lazy(5)).force(), 43.5 // 5)

    def test_modulo_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: Lazy(ErrorRaisingNumber()) % 15)

    def test_modulo_division_is_correct(self):
        self.assertEqual((Lazy(10) % 3).force(), 10 % 3)

    def test_right_modulo_division_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: 15 % Lazy(ErrorRaisingNumber()))

    def test_right_modulo_division_is_correct(self):
        self.assertEqual((34 %  Lazy(5)).force(), 34 % 5)

    def test_plus_delay_and_force(self):
        # don't really care if this one is lazy or not
        # just make sure it's there
        +Lazy(0)

    def test_plus_is_correct(self):
        self.assertEqual((+ Lazy(42)).force(), 42)

    def test_minus_delay_and_force(self):
        self._test_operator_delay_and_force(lambda: - Lazy(ErrorRaisingNumber()))

    def test_minus_is_correct(self):
        self.assertEqual((- Lazy(42)).force(), -42)

    def test_lazy_to_bool(self):
        lazy_fourty_two = Lazy(42)
        self.assertEqual(bool(lazy_fourty_two), True)
        self.assertEqual(type(bool(lazy_fourty_two)), bool)

    def test_lazy_to_int(self):
        lazy_float_three = Lazy(3.)
        self.assertEqual(int(lazy_float_three), 3)
        self.assertEqual(type(int(lazy_float_three)), int)

    def test_lazy_to_float(self):
        lazy_integer_three = Lazy(3)
        self.assertEqual(float(lazy_integer_three), 3.)
        self.assertEqual(type(float(lazy_integer_three)), float)

    def test_lazy_to_str(self):
        lazy_five = Lazy(5)
        self.assertEqual(str(lazy_five), '5')
        self.assertEqual(type(str(lazy_five)), str)


class SampleTest(unittest.TestCase):

    def test_lazy_number_can_be_constructed(self):
        lazy_int = Lazy(42)
        lazy_float = Lazy(3.14)
        lazy_complex = Lazy(5.0 + 2.0j)
        lazy_decimal = Lazy(Decimal(100))
        lazy_fraction = Lazy(Fraction(22, 7))
        lazy_lazy = Lazy(lazy_int)

    def test_addition_delay_and_force(self):
        error_raising_number = Lazy(ErrorRaisingNumber()) + 8 # shouldn't raise
        with self.assertRaises(OperatorAppliedError):
            error_raising_number.force() # should raise

    def test_addition_is_correct(self):
        number = Lazy(42)
        number += 8
        self.assertEqual(number.force(), 50)

    def test_negation_delaying(self):
        error_raising_number = ErrorRaisingNumber()
        lazy_number = - Lazy(error_raising_number) # shouldn't raise an error
        with self.assertRaises(OperatorAppliedError):
            lazy_number.force() # should raise an error

    def test_negtion(self):
        number = Lazy(1)
        number = -number
        self.assertEqual(number.force(), -1)

    def test_positive(self):
        number = Lazy(1)
        number = +number
        self.assertEqual(number.force(), 1)


if __name__ == '__main__':
    unittest.main()
