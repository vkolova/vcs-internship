String.prototype.capitalize = function() {
  return this.toUpperCase()
}

String.prototype.dasherize = function() {
  return this.replace(/_/g, "-")
}

String.prototype.times = function(amount) {
  var string = []
  while (amount-- > 0)
    string.push(this)

  return string.join(" ")
}

String.prototype.blank = function() {
  if (this.replace(/\s+/g, "").length)
    return false
  else
    return true
}
