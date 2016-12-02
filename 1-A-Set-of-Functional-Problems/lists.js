var pluck = require('./pluck').pluck

var ul = function(items) {
  var html = ""
  var pluckedItems = pluck("label", items)

  html += "<ul>\n"

  pluckedItems.forEach(function(item) {
    html += ["<li>", item, "</li>", "\n"].join("")
  })

    return html += "</ul>\n"
}


var ol = function(items) {
  var html = ""
  var pluckedItems = pluck("label", items)

  html += "<ol>\n"

  pluckedItems.forEach(function(item) {
    html += ["<li>", item, "</li>", "\n"].join("")
  })

    return html += "</ol>\n"
}


var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}]

console.log(ol(items))
