// not fully developed

var Math = require('mathjs')

function Pizza(name, cost, timeToMake) {
  this.name = name
  this.cost = cost
  this.timeToMake = timeToMake
}

function PizzaOrder(pizza) {
  this.pizza = pizza
  this.id = Math.random().toString(36).substr(2, 9)

  this.getId = function() {
    return this.id
  }

  this.ready = function(callback) {
    this.callback = callback;
  }

  this.start = function() {
    var self = this;
    setTimeout(function () { self.callback(self.pizza, self) }, this.pizza.timeToMake)
  }
}

var pizza = new Pizza("Peperoni", 100 /*cost*/, 2000 /*timeToMake in ms = 2 seconds */)

var order = new PizzaOrder(pizza)
order.ready(function(p, o) {
  console.log(o.getId())
})
order.start()
