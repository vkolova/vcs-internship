var queue = {
  index: 0,

  push: function(item) {
    this[this.index++] = item
  },
  pop: function() {
    return this[this.index--]
  },
  isEmpty: function() {
    return this.index === 0

}


var q = Object.create(queue)
console.log(q.isEmpty())
q.push("aaa")
console.log(q.isEmpty())
q.push("bbb")
q.push("ccc")
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.isEmpty())
