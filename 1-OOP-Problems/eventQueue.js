// IN DEVELOPMENT

function Queue() {
  this.index = 0

  this.on = function(eventName, callback) {

  }
  this.remove = function(eventName) {}
  this.trigger = function(eventName) {}
}

var queue = new Queue

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
})

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!")
})
