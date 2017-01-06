import unittest
import collections
import validation as v


class TestValidation(unittest.TestCase):

    def test_regular(self):
        self.assertTrue(v.is_number(5))
        self.assertFalse(v.is_number("p"))
        self.assertTrue(v.is_string("five"))
        self.assertFalse(v.is_string(7))
        self.assertTrue(v.is_instanceof(tuple)((1, 2, 3)))
        self.assertTrue(v.is_instanceof(float)(0.5))
        self.assertTrue(v.is_instanceof(list)([5, 6, 7]))

    def test_decorators(self):
        @v.validate(v.arg('a', [v.is_string]), v.arg('b', [v.is_number, lambda x: x > 0]))
        def test_func(a, b):
            return a + str(b)

        self.assertEqual(test_func("hello", 5), "hello5")
        with self.assertRaises(TypeError):
            test_func(6, "b")

        @v.validate(v.arg('x', [v.is_number, lambda x: x > 0]),
                    v.arg('y', [v.is_instanceof(collections.Iterable)]))
        def calc(x, y):
            return [x + z for z in y]

        self.assertEqual(calc(5, [1, 1]), [6, 6])

        with self.assertRaises(TypeError):
            calc(-1, (6, 7))

        with self.assertRaises(TypeError):
            calc(1, 6)


if __name__ == "__main__":
    unittest.main()
