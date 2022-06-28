function Shape(type) {
  this.type = type

  this.getType = function() {
    return type
  }
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!")
}

function Rectangle(size) {
  Shape.call(this, "rectangle")

  this.size = size
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.size * this.size
}


function Triangle(h, b) {
  Shape.call(this, "triangle")
  this.h = h
  this.b = b
}

Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle

Triangle.prototype.area = function() {
  return this.h * this.b / 2
}

function Circle(r) {
  Shape.call(this, "circle")
  this.r = r
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return this.r * this.r / 3.14
}

var c = new Circle(5)
console.log(c.area())
