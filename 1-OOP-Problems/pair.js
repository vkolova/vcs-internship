function Pair (left, right) {
  this.left = left
  this.right = right

  this.getLeft = function() {
    return this.left
  }

  this.getRight = function() {
    return this.right
  }
}

Pair.prototype.equals = function(pair) {
  return this.getLeft() === pair.getLeft() &&
        this.getRight() === pair.getRight()
}

Pair.prototype.toString = function() {
  return ["(",  this.getLeft(), ", ", this.getRight(), ")"].join("")
}

Pair.prototype.toList = function() {
  return [this.getLeft(), this.getRight()]
}

Pair.prototype.combine = function(f) {
  return f(this.getLeft(), this.getRight())
}
