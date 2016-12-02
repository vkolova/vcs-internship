function Point(x, y) {
  this.x = x
  this.y = y

  this.getX = function() {
    return this.x
  }

  this.getY = function() {
    return this.y
  }

  this.xInc = function() {
    this.x += 1
  }

  this.xDec = function() {
    this.x -= 1
  }

  this.yInc = function() {
    this.y += 1
  }

  this.yDec = function() {
    this.y -= 1
  }
}

Point.prototype.equals = function(point) {
  return this.getX() === point.getX() &&
        this.getY() === point.getY()
}

Point.prototype.toString = function() {
  return ["Point @ ", this.getX(), ", ", this.getY()].join("")
}


var p = new Point(2, 3)
var q = new Point(2, 3)



function Robot(point) {
  this.startPoint = point

  this.moveLeft = function(amount) {
    this.startPoint.x -= amount
  }

  this.moveRight = function(amount) {
    this.startPoint.x += amount
  }

  this.moveUp = function(amount) {
    this.startPoint.y -= amount
  }

  this.moveDown = function(amount) {
    this.startPoint.y += amount
  }

  this.getPosition = function() {
    return this.startPoint
  }
}


var robot = new Robot(new Point(0, 0))

robot.moveLeft(10)
robot.moveDown(5)

console.log(robot.getPosition().toString())
