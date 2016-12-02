var getTab = function(tab) {
  var space = []
    while (tab-- > 0)
      space.push(" ")
  return space.join("")
}

var html = function(items, tag, tab = 0) {
  var result = ""

  result += [getTab(tab), "<", tag, ">\n"].join("")

  items.forEach(function(item) {
    if (item.label)
      result += [getTab(tab+2), "<li>", item.label, "</li>\n"].join("")

    if (item.children)
      result += html(item.children, tag, tab + 2)

  })

    return result += [getTab(tab), "</", tag, ">\n"].join("")
}


var items = [{ "label" : "Item 1"},
             { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}]

console.log(html(items, "ol"))
