import unittest
import linkedlist as llist

class TestList(unittest.TestCase):

    def testStr(self):
        tst = llist.List.create(1, 2, 3)
        self.assertEqual(str(tst), "<1, 2, 3>")
        tst = llist.List(llist.nil)
        self.assertEqual(str(tst), "<>")
        constr = llist.Cons(1, llist.Cons(2, llist.Cons(3, llist.nil)))
        self.assertEqual(str(constr), "<1, 2, 3>")

    def testCreate(self):
        t = llist.List.create(4,5,6)
        g = llist.List.create(1,2,3)
        constr = llist.Cons(1, llist.Cons(2, llist.Cons(3, llist.nil)))
        self.assertEqual(constr.get_list(), [1,2,3])
        self.assertEqual(t.get_list(), [4,5,6])
        self.assertEqual(g.get_list(), [1,2,3])

    def testIndexing(self):
        tst = llist.List.create(0,1,2,3,4,5,6,7,8,9)
        self.assertEqual(tst[2], 2)
        self.assertEqual(tst[-1], 9)
        self.assertEqual([item for item in tst], [0,1,2,3,4,5,6,7,8,9])


if __name__ == '__main__':
    unittest.main()
